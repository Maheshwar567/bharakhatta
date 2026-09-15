// Client-side Hybrid WebSocket & WebRTC (PeerJS) Manager for Bharakhatta Multiplayer
// Works locally via WebSocket and globally on GitHub Pages / Mobile via WebRTC P2P

import PeerModule from "peerjs";
const Peer = PeerModule.Peer || PeerModule.default || PeerModule;

export class MultiplayerClient {
  constructor(options = {}) {
    this.ws = null;
    this.peer = null;
    this.peerConn = null;
    this.mode = "auto"; // "ws" or "p2p"
    this.roomCode = null;
    this.myPlayerId = null;
    this.myTeam = null;
    this.isHost = false;
    this.connected = false;
    this.hostName = "Player 1";
    this.guestName = "Player 2";

    this.onRoomCreated = options.onRoomCreated || (() => {});
    this.onRoomJoined = options.onRoomJoined || (() => {});
    this.onPlayerJoined = options.onPlayerJoined || (() => {});
    this.onPlayerLeft = options.onPlayerLeft || (() => {});
    this.onSyncRoll = options.onSyncRoll || (() => {});
    this.onSyncMove = options.onSyncMove || (() => {});
    this.onSyncRestart = options.onSyncRestart || (() => {});
    this.onChatReceived = options.onChatReceived || (() => {});
    this.onBetSynced = options.onBetSynced || (() => {});
    this.onSyncTimeoutPass = options.onSyncTimeoutPass || (() => {});
    this.onError = options.onError || (() => {});
    this.onStatusChange = options.onStatusChange || (() => {});
    this.currentBet = 250;
  }

  isP2PPreferred() {
    // Prefer P2P WebRTC when running on GitHub Pages, file://, or non-localhost static hosting
    const host = window.location.hostname;
    return host.includes("github.io") || window.location.protocol === "file:" || (!host.includes("localhost") && !host.includes("127.0.0.1") && !host.includes("192.168."));
  }

  connectWS() {
    if (this.ws && (this.ws.readyState === 0 || this.ws.readyState === 1)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      try {
        const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        const host = window.location.host;
        const wsUrl = `${protocol}//${host}/ws`;

        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          this.connected = true;
          this.mode = "ws";
          this.onStatusChange("connected");
          resolve();
        };

        this.ws.onclose = () => {
          this.connected = false;
          this.onStatusChange("disconnected");
        };

        this.ws.onerror = (err) => {
          console.warn("WebSocket not available, falling back to WebRTC:", err);
          this.ws = null;
          reject(err);
        };

        this.ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            this.handleMessage(data);
          } catch (e) {
            console.error("Failed to parse WS message:", e);
          }
        };
      } catch (err) {
        reject(err);
      }
    });
  }

  handleMessage(msg) {
    switch (msg.type) {
      case "ROOM_CREATED":
        this.roomCode = msg.roomCode;
        this.myPlayerId = msg.playerId;
        this.myTeam = msg.team;
        this.isHost = true;
        this.onRoomCreated(msg);
        break;

      case "ROOM_JOINED":
        this.roomCode = msg.roomCode;
        this.myPlayerId = msg.playerId;
        this.myTeam = msg.team;
        this.isHost = false;
        this.onRoomJoined(msg);
        break;

      case "PLAYER_JOINED":
        this.onPlayerJoined(msg.player, msg.players);
        break;

      case "PLAYER_LEFT":
        this.onPlayerLeft(msg.playerId, msg.players);
        break;

      case "ACTION_ROLL":
        this.onSyncRoll(msg.rollResult);
        break;

      case "ACTION_MOVE":
        this.onSyncMove(msg.move);
        break;

      case "ACTION_RESTART":
        this.onSyncRestart();
        break;

      case "ACTION_CHAT":
        this.onChatReceived(msg);
        break;

      case "ROOM_BET":
        this.currentBet = msg.bet;
        this.onBetSynced(msg.bet);
        break;

      case "ACTION_TIMEOUT_PASS":
        this.onSyncTimeoutPass(msg);
        break;

      case "ERROR":
        this.onError(msg.message);
        break;
    }
  }

  async createRoom(mode = "2p", playerName = "Player 1") {
    this.hostName = playerName;

    // Check if we should use P2P or WS
    if (!this.isP2PPreferred()) {
      try {
        await this.connectWS();
        this.send({ type: "CREATE_ROOM", mode, playerName });
        return;
      } catch (e) {
        console.log("WS failed, switching to P2P WebRTC:", e);
      }
    }

    // WebRTC P2P Mode via PeerJS
    this.mode = "p2p";
    const roomCode = Math.floor(1000 + Math.random() * 9000).toString();
    const peerId = `bk-room-${roomCode}`;

    if (this.peer) {
      try { this.peer.destroy(); } catch (_) {}
    }

    this.peer = new Peer(peerId);

    this.peer.on("open", () => {
      this.roomCode = roomCode;
      this.myPlayerId = 1;
      this.myTeam = 1;
      this.isHost = true;
      this.connected = true;
      this.onStatusChange("connected");
      this.onRoomCreated({
        roomCode,
        playerId: 1,
        team: 1,
        players: [{ id: 1, team: 1, name: playerName }]
      });
    });

    this.peer.on("connection", (conn) => {
      this.peerConn = conn;

      conn.on("open", () => {
        // Connected to guest
      });

      conn.on("data", (data) => {
        if (data.type === "JOIN_ROOM") {
          this.guestName = data.playerName || "Player 2";
          const players = [
            { id: 1, team: 1, name: this.hostName },
            { id: 2, team: 2, name: this.guestName }
          ];
          conn.send({
            type: "ROOM_JOINED",
            roomCode,
            playerId: 2,
            team: 2,
            players,
            bet: this.currentBet
          });
          this.onPlayerJoined({ id: 2, team: 2, name: this.guestName }, players);
        } else {
          this.handleMessage(data);
        }
      });

      conn.on("close", () => {
        this.onPlayerLeft(2, [{ id: 1, team: 1, name: this.hostName }]);
      });
    });

    this.peer.on("error", (err) => {
      console.error("PeerJS Host error:", err);
      if (err.type === "unavailable-id") {
        // Retry with new code
        this.createRoom(mode, playerName);
      } else {
        this.onError(`Network error: ${err.message || err.type}`);
      }
    });
  }

  async joinRoom(roomCode, playerName = "Player 2") {
    this.guestName = playerName;

    if (!this.isP2PPreferred()) {
      try {
        await this.connectWS();
        this.send({ type: "JOIN_ROOM", roomCode, playerName });
        return;
      } catch (e) {
        console.log("WS failed, switching to P2P WebRTC:", e);
      }
    }

    // WebRTC P2P Mode via PeerJS
    this.mode = "p2p";
    if (this.peer) {
      try { this.peer.destroy(); } catch (_) {}
    }

    this.peer = new Peer();

    this.peer.on("open", () => {
      const targetPeerId = `bk-room-${roomCode}`;
      const conn = this.peer.connect(targetPeerId, { reliable: true });
      this.peerConn = conn;

      conn.on("open", () => {
        this.connected = true;
        this.onStatusChange("connected");
        conn.send({
          type: "JOIN_ROOM",
          roomCode,
          playerName
        });
      });

      conn.on("data", (data) => {
        this.handleMessage(data);
      });

      conn.on("close", () => {
        this.connected = false;
        this.onStatusChange("disconnected");
        this.onError("Room host has disconnected.");
      });
    });

    this.peer.on("error", (err) => {
      console.error("PeerJS Guest error:", err);
      this.onError(`Could not join Room #${roomCode}. Please ensure host is waiting and try again.`);
    });
  }

  sendRoll(rollResult) {
    if (!this.roomCode) return;
    this.send({
      type: "ACTION_ROLL",
      roomCode: this.roomCode,
      rollResult
    });
  }

  sendMove(move) {
    if (!this.roomCode) return;
    this.send({
      type: "ACTION_MOVE",
      roomCode: this.roomCode,
      move
    });
  }

  sendRestart() {
    if (!this.roomCode) return;
    this.send({
      type: "ACTION_RESTART",
      roomCode: this.roomCode
    });
  }

  sendChat(text, senderName = "Player") {
    if (!this.roomCode) return;
    const msg = {
      type: "ACTION_CHAT",
      roomCode: this.roomCode,
      senderId: this.myPlayerId,
      senderName,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    this.send(msg);
    // Also dispatch to local handler so sender sees their own message
    this.onChatReceived(msg);
  }

  sendBet(bet) {
    this.currentBet = bet;
    if (!this.roomCode) return;
    this.send({
      type: "ROOM_BET",
      roomCode: this.roomCode,
      bet
    });
  }

  sendTimeoutPass(playerId) {
    if (!this.roomCode) return;
    this.send({
      type: "ACTION_TIMEOUT_PASS",
      roomCode: this.roomCode,
      playerId
    });
  }

  send(data) {
    if (this.mode === "p2p" && this.peerConn && this.peerConn.open) {
      this.peerConn.send(data);
    } else if (this.ws && this.ws.readyState === 1) {
      this.ws.send(JSON.stringify(data));
    }
  }

  leaveRoom() {
    this.roomCode = null;
    this.myPlayerId = null;
    this.myTeam = null;
    this.isHost = false;
    this.connected = false;

    if (this.peerConn) {
      try { this.peerConn.close(); } catch (_) {}
      this.peerConn = null;
    }
    if (this.peer) {
      try { this.peer.destroy(); } catch (_) {}
      this.peer = null;
    }
    if (this.ws) {
      try { this.ws.close(); } catch (_) {}
      this.ws = null;
    }
  }
}
