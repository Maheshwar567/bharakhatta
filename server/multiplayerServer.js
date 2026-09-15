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

  let serverCounter = 100;
  const issuedCodes = new Set();

  function generateRoomCode() {
    const now = new Date();
    const yy = String(now.getFullYear()).slice(-2);
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    let code;
    do {
      serverCounter++;
      const rand = Math.floor(100 + Math.random() * 900);
      code = `BK-${yy}${mm}${dd}-${serverCounter}-${rand}`;
    } while (rooms.has(code) || issuedCodes.has(code));
    issuedCodes.add(code);
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
          const rawCode = (msg.roomCode || "").trim().toUpperCase();
          let room = rooms.get(rawCode);
          let matchedKey = rawCode;

          if (!room) {
            for (const [key, val] of rooms.entries()) {
              const kClean = key.toUpperCase();
              if (kClean === rawCode || kClean.replace(/^BK-/, "") === rawCode.replace(/^BK-/, "")) {
                room = val;
                matchedKey = key;
                break;
              }
            }
          }

          if (!room) {
            ws.send(JSON.stringify({ type: "ERROR", message: `Board "${rawCode}" not found.` }));
            return;
          }

          const roomCode = matchedKey;
          const maxPlayers = room.mode === "4p" ? 4 : 2;
          if (room.players.length >= maxPlayers) {
            ws.send(JSON.stringify({ type: "ERROR", message: `Board "${roomCode}" is already full.` }));
            return;
          }

          // In 4P mode with 2 friends, 2nd player joins as Player 3 (Team 1 partner)
          const is4p = room.mode === "4p";
          const newId = is4p && room.players.length === 1 ? 3 : room.players.length + 1;
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
        if (type === "ACTION_ROLL" || type === "ACTION_MOVE" || type === "ACTION_RESTART" || type === "SYNC_STATE" || type === "ACTION_CHAT" || type === "ROOM_BET" || type === "ACTION_TIMEOUT_PASS" || type === "START_4P_AI_PAIR") {
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
