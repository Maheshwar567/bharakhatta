// Client-side Hybrid WebSocket & WebRTC (PeerJS) Manager for Bharakhatta Multiplayer
// Works locally via WebSocket and globally on GitHub Pages / Mobile via WebRTC P2P

import PeerModule from "peerjs";
const Peer = PeerModule.Peer || PeerModule.default || PeerModule;

// Guaranteed Non-Repeating Board Number Generator
// Generates persistent IDs like BK-260915-101-482 that never repeat in match history
export function generateUniqueBoardNumber() {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const datePrefix = `BK-${yy}${mm}${dd}`;

  let seq = 101;
  try {
    const savedSeq = localStorage.getItem("bk_board_seq");
    if (savedSeq) {
      seq = parseInt(savedSeq, 10) + 1;
    }
    localStorage.setItem("bk_board_seq", String(seq));
  } catch (_) {
    seq = Math.floor(100 + Math.random() * 900);
  }

  let entropy = Math.floor(100 + Math.random() * 900);
  let boardNumber = `${datePrefix}-${seq}-${entropy}`;

  try {
    let used = JSON.parse(localStorage.getItem("bk_used_board_numbers") || "[]");
    while (used.includes(boardNumber)) {
      seq++;
      entropy = Math.floor(100 + Math.random() * 900);
      boardNumber = `${datePrefix}-${seq}-${entropy}`;
    }
    used.push(boardNumber);
    if (used.length > 1000) used = used.slice(-1000);
    localStorage.setItem("bk_used_board_numbers", JSON.stringify(used));
    localStorage.setItem("bk_board_seq", String(seq));
  } catch (_) {}

  return boardNumber;
}

export function normalizeBoardNumber(rawCode) {
  if (!rawCode) return "";
  let clean = rawCode.trim().toUpperCase().replace(/\s+/g, "");
  if (!clean.startsWith("BK-") && !clean.startsWith("BK")) {
    clean = `BK-${clean}`;
  }
  return clean;
}

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
    this.onStart4pAIPair = options.onStart4pAIPair || (() => {});
    this.onSyncGameState = options.onSyncGameState || (() => {});
    this.onGate23Decision = options.onGate23Decision || (() => {});
    this.onError = options.onError || (() => {});
    this.onStatusChange = options.onStatusChange || (() => {});
    this.currentBet = 250;
    this.gameMode = "2p";
    this.peerConns = new Set();
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
        this.gameMode = msg.mode || "2p";
        this.onRoomCreated(msg);
        break;

      case "ROOM_JOINED":
        this.roomCode = msg.roomCode;
        this.myPlayerId = msg.playerId;
        this.myTeam = msg.team;
        this.isHost = false;
        this.gameMode = msg.mode || "2p";
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

      case "START_4P_AI_PAIR":
        this.onStart4pAIPair(msg);
        break;

      case "SYNC_GAME_STATE":
        this.onSyncGameState(msg.state);
        break;

      case "GATE_23_DECISION":
        this.onGate23Decision(msg.decision);
        break;

      case "ERROR":
        this.onError(msg.message);
        break;
    }
  }

  async createRoom(mode = "2p", playerName = "Player 1") {
    this.hostName = playerName;
    this.gameMode = mode;

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

    // WebRTC P2P Mode via PeerJS with Guaranteed Non-Repeating Board Number
    this.mode = "p2p";
    const roomCode = generateUniqueBoardNumber();
    const peerId = `bk-board-${roomCode.toLowerCase().replace(/[^a-z0-9]/g, "")}`;

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
        mode,
        players: [{ id: 1, team: 1, name: playerName, isHost: true }]
      });
    });

    this.peer.on("connection", (conn) => {
      this.peerConn = conn;
      this.peerConns.add(conn);

      conn.on("open", () => {
        // Connected to guest
      });

      conn.on("data", (data) => {
        // Forward data to other peers if host
        if (this.isHost && this.peerConns.size > 1) {
          for (const otherConn of this.peerConns) {
            if (otherConn !== conn && otherConn.open) {
              otherConn.send(data);
            }
          }
        }

        if (data.type === "JOIN_ROOM") {
          this.guestName = data.playerName || "Player 2";
          // In 4P mode, friend joins Team 1 as partner (Player 3), with Players 2 & 4 as System AI opposite pair
          const is4p = this.gameMode === "4p";
          const guestId = is4p ? 3 : 2;
          const guestTeam = is4p ? 1 : 2;
          const players = [
            { id: 1, team: 1, name: this.hostName, isHost: true },
            { id: guestId, team: guestTeam, name: this.guestName, isHost: false }
          ];
          conn.send({
            type: "ROOM_JOINED",
            roomCode,
            playerId: guestId,
            team: guestTeam,
            mode: this.gameMode,
            players,
            bet: this.currentBet
          });
          this.onPlayerJoined({ id: guestId, team: guestTeam, name: this.guestName }, players);
        } else {
          this.handleMessage(data);
        }
      });

      conn.on("close", () => {
        this.peerConns.delete(conn);
        this.onPlayerLeft(2, [{ id: 1, team: 1, name: this.hostName }]);
      });
    });

    this.peer.on("error", (err) => {
      console.error("PeerJS Host error:", err);
      if (err.type === "unavailable-id") {
        // Retry with new guaranteed unique code
        this.createRoom(mode, playerName);
      } else {
        this.onError(`Network error: ${err.message || err.type}`);
      }
    });
  }

  async joinRoom(roomCode, playerName = "Player 2") {
    this.guestName = playerName;
    const cleanCode = normalizeBoardNumber(roomCode);

    if (!this.isP2PPreferred()) {
      try {
        await this.connectWS();
        this.send({ type: "JOIN_ROOM", roomCode: cleanCode, playerName });
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
      const targetPeerId = `bk-board-${cleanCode.toLowerCase().replace(/[^a-z0-9]/g, "")}`;
      const conn = this.peer.connect(targetPeerId, { reliable: true });
      this.peerConn = conn;

      conn.on("open", () => {
        this.connected = true;
        this.onStatusChange("connected");
        conn.send({
          type: "JOIN_ROOM",
          roomCode: cleanCode,
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
      this.onError(`Could not join Board #${cleanCode}. Please ensure host is waiting and try again.`);
    });
  }

  sendStart4pAIPair() {
    if (!this.roomCode) return;
    this.send({
      type: "START_4P_AI_PAIR",
      roomCode: this.roomCode,
      bet: this.currentBet
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

  sendGameState(state) {
    if (!this.roomCode) return;
    this.send({
      type: "SYNC_GAME_STATE",
      roomCode: this.roomCode,
      state
    });
  }

  sendGate23Decision(decision) {
    if (!this.roomCode) return;
    this.send({
      type: "GATE_23_DECISION",
      roomCode: this.roomCode,
      decision
    });
  }

  send(data) {
    if (this.mode === "p2p") {
      if (this.peerConns && this.peerConns.size > 0) {
        for (const conn of this.peerConns) {
          if (conn && conn.open) conn.send(data);
        }
      } else if (this.peerConn && this.peerConn.open) {
        this.peerConn.send(data);
      }
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

    if (this.peerConns) {
      for (const conn of this.peerConns) {
        try { conn.close(); } catch (_) {}
      }
      this.peerConns.clear();
    }
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
