// Lightweight Real-time WebSocket Room Server for Bharakhatta Multiplayer

import { WebSocketServer } from "ws";

export function setupMultiplayerServer(httpServer) {
  const wss = new WebSocketServer({ noServer: true });
  const rooms = new Map();

  httpServer.on("upgrade", (request, socket, head) => {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    if (url.pathname === "/ws") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    }
  });

  function generateRoomCode() {
    let code;
    do {
      code = Math.floor(1000 + Math.random() * 9000).toString();
    } while (rooms.has(code));
    return code;
  }

  function broadcast(room, msg, senderWs = null) {
    const data = JSON.stringify(msg);
    room.players.forEach(p => {
      if (p.ws && p.ws.readyState === 1 && p.ws !== senderWs) {
        p.ws.send(data);
      }
    });
  }

  wss.on("connection", (ws) => {
    let currentRoomCode = null;
    let currentPlayerId = null;

    ws.on("message", (raw) => {
      try {
        const msg = JSON.parse(raw.toString());
        const { type } = msg;

        if (type === "CREATE_ROOM") {
          const roomCode = generateRoomCode();
          const mode = msg.mode || "2p";
          const playerName = msg.playerName || "Player 1 (Host)";

          const player = {
            id: 1,
            team: 1,
            name: playerName,
            isHost: true,
            ws
          };

          const room = {
            code: roomCode,
            mode,
            players: [player],
            createdAt: Date.now()
          };

          rooms.set(roomCode, room);
          currentRoomCode = roomCode;
          currentPlayerId = 1;

          ws.send(JSON.stringify({
            type: "ROOM_CREATED",
            roomCode,
            playerId: 1,
            team: 1,
            mode,
            players: room.players.map(p => ({ id: p.id, team: p.team, name: p.name, isHost: p.isHost }))
          }));
          return;
        }

        if (type === "JOIN_ROOM") {
          const roomCode = (msg.roomCode || "").trim();
          const room = rooms.get(roomCode);

          if (!room) {
            ws.send(JSON.stringify({ type: "ERROR", message: `Room "${roomCode}" not found.` }));
            return;
          }

          const maxPlayers = room.mode === "4p" ? 4 : 2;
          if (room.players.length >= maxPlayers) {
            ws.send(JSON.stringify({ type: "ERROR", message: `Room "${roomCode}" is already full.` }));
            return;
          }

          // Assign slot: Player 2 (Team 2), Player 3 (Team 1), Player 4 (Team 2)
          const newId = room.players.length + 1;
          const team = (newId === 1 || newId === 3) ? 1 : 2;
          const playerName = msg.playerName || `Player ${newId}`;

          const player = {
            id: newId,
            team,
            name: playerName,
            isHost: false,
            ws
          };

          room.players.push(player);
          currentRoomCode = roomCode;
          currentPlayerId = newId;

          const playerSummary = room.players.map(p => ({ id: p.id, team: p.team, name: p.name, isHost: p.isHost }));

          // Notify joining player
          ws.send(JSON.stringify({
            type: "ROOM_JOINED",
            roomCode,
            playerId: newId,
            team,
            mode: room.mode,
            players: playerSummary
          }));

          // Notify existing players
          broadcast(room, {
            type: "PLAYER_JOINED",
            player: { id: newId, team, name: playerName },
            players: playerSummary
          }, ws);

          return;
        }

        // Forward gameplay actions to room peers
        if (type === "ACTION_ROLL" || type === "ACTION_MOVE" || type === "ACTION_RESTART" || type === "SYNC_STATE") {
          if (!currentRoomCode) return;
          const room = rooms.get(currentRoomCode);
          if (!room) return;

          broadcast(room, msg, ws);
          return;
        }
      } catch (err) {
        console.error("Multiplayer server message error:", err);
      }
    });

    ws.on("close", () => {
      if (currentRoomCode && rooms.has(currentRoomCode)) {
        const room = rooms.get(currentRoomCode);
        room.players = room.players.filter(p => p.ws !== ws);

        if (room.players.length === 0) {
          rooms.delete(currentRoomCode);
        } else {
          broadcast(room, {
            type: "PLAYER_LEFT",
            playerId: currentPlayerId,
            players: room.players.map(p => ({ id: p.id, team: p.team, name: p.name, isHost: p.isHost }))
          });
        }
      }
    });
  });

  return wss;
}
