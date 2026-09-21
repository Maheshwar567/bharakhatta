// Lightweight Real-time WebSocket Room Server for Bharakhatta Multiplayer

import { WebSocketServer } from "ws";
import { getOppositeHome } from "../src/game/board.js";

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
  const matchmakingQueue = [];


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

        // Quick Online Matchmaking (Play Online)
        if (type === "FIND_MATCH") {
          const playerName = msg.playerName || "Player";
          const userMeta = msg.userMeta || null;
          const mode = msg.mode || "2p";

          // Remove disconnected sockets or self from queue
          const validQueue = matchmakingQueue.filter(entry => entry.ws.readyState === 1 && entry.ws !== ws);
          matchmakingQueue.length = 0;
          matchmakingQueue.push(...validQueue);

          if (matchmakingQueue.length > 0) {
            const opponent = matchmakingQueue.shift();
            const roomCode = generateRoomCode();

            const player1 = {
              id: 1,
              team: 1,
              name: opponent.playerName,
              isHost: true,
              userMeta: opponent.userMeta,
              ws: opponent.ws
            };

            const player2 = {
              id: 2,
              team: 2,
              name: playerName,
              isHost: false,
              userMeta,
              ws
            };

            const room = {
              code: roomCode,
              mode: "2p",
              homesAssigned: false,
              team1Home: null,
              team2Home: null,
              players: [player1, player2],
              createdAt: Date.now()
            };

            rooms.set(roomCode, room);
            const upperCode = roomCode.toUpperCase().replace(/\s+/g, "");
            rooms.set(upperCode, room);
            if (upperCode.startsWith("BK-")) {
              rooms.set(upperCode.replace(/^BK-/, ""), room);
            } else {
              rooms.set(`BK-${upperCode}`, room);
            }

            opponent.setRoomInfo(roomCode, 1);
            currentRoomCode = roomCode;
            currentPlayerId = 2;

            const playerSummary = [
              { id: 1, team: 1, name: player1.name, isHost: true, userMeta: player1.userMeta },
              { id: 2, team: 2, name: player2.name, isHost: false, userMeta: player2.userMeta }
            ];

            opponent.ws.send(JSON.stringify({
              type: "ROOM_CREATED",
              roomCode,
              playerId: 1,
              team: 1,
              mode: "2p",
              isMatchmaking: true,
              players: playerSummary
            }));

            ws.send(JSON.stringify({
              type: "ROOM_JOINED",
              roomCode,
              playerId: 2,
              team: 2,
              mode: "2p",
              isMatchmaking: true,
              players: playerSummary,
              hostMobile: opponent.userMeta?.mobile || null,
              hostNick: opponent.userMeta?.nickName || opponent.playerName,
              hostFullName: opponent.userMeta?.fullName || opponent.playerName
            }));
            return;
          } else {
            matchmakingQueue.push({
              ws,
              playerName,
              userMeta,
              mode,
              setRoomInfo: (rc, pid) => {
                currentRoomCode = rc;
                currentPlayerId = pid;
              }
            });
            ws.send(JSON.stringify({ type: "MATCH_WAITING", timeoutSeconds: 4 }));
            return;
          }
        }

        if (type === "CANCEL_FIND_MATCH") {
          const idx = matchmakingQueue.findIndex(e => e.ws === ws);
          if (idx !== -1) matchmakingQueue.splice(idx, 1);
          return;
        }

        if (type === "CREATE_ROOM") {
          const roomCode = (msg.roomCode && String(msg.roomCode).trim())
            ? String(msg.roomCode).trim()
            : generateRoomCode();
          const mode = msg.mode || "2p";
          const playerName = msg.playerName || "Player 1 (Host)";
          const userMeta = msg.userMeta || null;
          const team1Home = msg.team1Home ? parseInt(msg.team1Home, 10) : 1;
          const team2Home = getOppositeHome(team1Home);

          const player = {
            id: 1,
            team: 1,
            name: playerName,
            isHost: true,
            userMeta,
            ws
          };

          const room = {
            code: roomCode,
            mode,
            team1Home,
            team2Home,
            players: [player],
            createdAt: Date.now()
          };

          rooms.set(roomCode, room);
          const upperCode = roomCode.toUpperCase().replace(/\s+/g, "");
          rooms.set(upperCode, room);
          if (upperCode.startsWith("BK-")) {
            rooms.set(upperCode.replace(/^BK-/, ""), room);
          } else {
            rooms.set(`BK-${upperCode}`, room);
          }

          currentRoomCode = roomCode;
          currentPlayerId = 1;

          ws.send(JSON.stringify({
            type: "ROOM_CREATED",
            roomCode,
            playerId: 1,
            team: 1,
            mode,
            team1Home,
            team2Home,
            players: room.players.map(p => ({ id: p.id, team: p.team, name: p.name, isHost: p.isHost, userMeta: p.userMeta }))
          }));
          return;
        }

        if (type === "JOIN_ROOM") {
          const rawCode = (msg.roomCode || "").toString().trim().toUpperCase().replace(/\s+/g, "");
          let room = rooms.get(rawCode);
          let matchedKey = rawCode;

          if (!room) {
            const stripped = rawCode.replace(/^BK-/, "");
            room = rooms.get(stripped) || rooms.get(`BK-${stripped}`);
            if (room) {
              matchedKey = room.code;
            }
          }

          if (!room) {
            for (const [key, val] of rooms.entries()) {
              const kClean = key.toUpperCase().replace(/\s+/g, "");
              if (kClean === rawCode || kClean.replace(/^BK-/, "") === rawCode.replace(/^BK-/, "")) {
                room = val;
                matchedKey = val.code;
                break;
              }
            }
          }

          if (!room) {
            ws.send(JSON.stringify({ type: "ERROR", message: `Board "${rawCode}" not found.` }));
            return;
          }

          const roomCode = matchedKey || room.code;
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
          const userMeta = msg.userMeta || null;

          const player = {
            id: newId,
            team,
            name: playerName,
            isHost: false,
            userMeta,
            ws
          };

          room.players.push(player);
          currentRoomCode = room.code;
          currentPlayerId = newId;

          const playerSummary = room.players.map(p => ({
            id: p.id,
            team: p.team,
            name: p.name,
            isHost: p.isHost,
            userMeta: p.userMeta
          }));

          const hostPlayer = room.players[0] || {};
          const hostMeta = hostPlayer.userMeta || {};

          // Notify joining player
          ws.send(JSON.stringify({
            type: "ROOM_JOINED",
            roomCode: room.code,
            playerId: newId,
            team,
            mode: room.mode,
            team1Home: room.team1Home || 1,
            team2Home: room.team2Home || 3,
            players: playerSummary,
            hostMobile: hostMeta.mobile || null,
            hostNick: hostMeta.nickName || hostMeta.name || hostPlayer.name || "Host",
            hostFullName: hostMeta.fullName || hostMeta.name || hostPlayer.name || "Host"
          }));

          // Notify existing players
          broadcast(room, {
            type: "PLAYER_JOINED",
            player: {
              id: newId,
              team,
              name: playerName,
              isHost: false,
              mobile: userMeta ? userMeta.mobile : null,
              nickName: userMeta ? (userMeta.nickName || userMeta.name) : playerName,
              fullName: userMeta ? (userMeta.fullName || userMeta.name) : playerName,
              userMeta
            },
            players: playerSummary
          }, ws);

          return;
        }

        // Forward gameplay actions to room peers
        if (type === "ACTION_ROLL" || type === "ACTION_MOVE" || type === "ACTION_RESTART" || type === "SYNC_STATE" || type === "SYNC_GAME_STATE" || type === "GATE_23_DECISION" || type === "ACTION_CHAT" || type === "ROOM_BET" || type === "ACTION_TIMEOUT_PASS" || type === "START_4P_AI_PAIR" || type === "ACTION_FORFEIT" || type === "ACTION_SELECT_HOME") {
          if (!currentRoomCode) return;
          const room = rooms.get(currentRoomCode);
          if (!room) return;

          if (type === "ACTION_SELECT_HOME") {
            const chosen = parseInt(msg.chosenHome, 10) || 1;
            const opp = getOppositeHome(chosen);
            if (msg.teamId === 1) {
              room.team1Home = chosen;
              room.team2Home = opp;
            } else {
              room.team2Home = chosen;
              room.team1Home = opp;
            }
            room.homesAssigned = true;
          }

          broadcast(room, msg, ws);
          return;
        }
      } catch (err) {
        console.error("Multiplayer server message error:", err);
      }
    });

    ws.on("close", () => {
      // Remove from matchmaking queue if present
      const qIdx = matchmakingQueue.findIndex(e => e.ws === ws);
      if (qIdx !== -1) matchmakingQueue.splice(qIdx, 1);

      if (currentRoomCode && rooms.has(currentRoomCode)) {
        const room = rooms.get(currentRoomCode);
        room.players = room.players.filter(p => p.ws !== ws);

        if (room.players.length === 0) {
          for (const [key, r] of rooms.entries()) {
            if (r === room) rooms.delete(key);
          }
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
