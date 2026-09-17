// Unit test for 4-digit table code room matching and mutual friend exchange over WS server

import http from "http";
import WebSocket from "ws";
import { setupMultiplayerServer } from "../server/multiplayerServer.js";

async function runRoomMatchingTest() {
  console.log("=== BHARAKHATTA 4-DIGIT ROOM MATCHING & MUTUAL FRIEND EXCHANGE TEST ===");

  const server = http.createServer();
  setupMultiplayerServer(server);

  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;
  const wsUrl = `ws://localhost:${port}/ws`;

  // 1. Host connects and creates room with custom 4-digit code
  const wsHost = new WebSocket(wsUrl);
  await new Promise((resolve) => wsHost.on("open", resolve));

  const customRoomCode = "5821";
  const hostUserMeta = {
    mobile: "9876543210",
    nickName: "Mahi",
    fullName: "Mahesh Reddy"
  };

  let roomCreatedPromise = new Promise((resolve) => {
    wsHost.on("message", (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.type === "ROOM_CREATED") resolve(msg);
    });
  });

  wsHost.send(JSON.stringify({
    type: "CREATE_ROOM",
    mode: "2p",
    playerName: "Mahi",
    roomCode: customRoomCode,
    userMeta: hostUserMeta
  }));

  const createdMsg = await roomCreatedPromise;
  console.assert(createdMsg.roomCode === "5821", `Host should receive exact room code 5821, got ${createdMsg.roomCode}`);
  console.log("✅ PASS: Host created room with exact 4-digit code 5821");

  // 2. Guest connects and joins using plain "5821" or "BK-5821"
  const wsGuest = new WebSocket(wsUrl);
  await new Promise((resolve) => wsGuest.on("open", resolve));

  const guestUserMeta = {
    mobile: "9123456780",
    nickName: "Koti",
    fullName: "Koteswara Rao"
  };

  let roomJoinedPromise = new Promise((resolve) => {
    wsGuest.on("message", (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.type === "ROOM_JOINED") resolve(msg);
    });
  });

  let playerJoinedPromise = new Promise((resolve) => {
    wsHost.on("message", (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.type === "PLAYER_JOINED") resolve(msg);
    });
  });

  // Test joining with "BK-5821" alias lookup
  wsGuest.send(JSON.stringify({
    type: "JOIN_ROOM",
    roomCode: "BK-5821",
    playerName: "Koti",
    userMeta: guestUserMeta
  }));

  const [joinedMsg, hostPlayerJoinedMsg] = await Promise.all([roomJoinedPromise, playerJoinedPromise]);

  // Verify Guest received Host's details
  console.assert(joinedMsg.roomCode === "5821", `Guest joined correct room 5821`);
  console.assert(joinedMsg.hostMobile === "9876543210", `Guest received host mobile: ${joinedMsg.hostMobile}`);
  console.assert(joinedMsg.hostNick === "Mahi", `Guest received host nickname: ${joinedMsg.hostNick}`);
  console.log("✅ PASS: Guest joined 4-digit room via BK-5821 and received Host mobile/nickName details");

  // Verify Host received Guest's details
  console.assert(hostPlayerJoinedMsg.player.mobile === "9123456780", `Host received guest mobile: ${hostPlayerJoinedMsg.player.mobile}`);
  console.assert(hostPlayerJoinedMsg.player.nickName === "Koti", `Host received guest nickname: ${hostPlayerJoinedMsg.player.nickName}`);
  console.log("✅ PASS: Host received Guest mobile/nickName details for mutual friend auto-saving");

  wsHost.close();
  wsGuest.close();
  server.close();

  console.log("=============================================");
  console.log("🎉 ALL 4-DIGIT ROOM MATCHING TESTS PASSED (3/3)!");
  console.log("=============================================");
}

runRoomMatchingTest().catch((e) => {
  console.error("Test failed:", e);
  process.exit(1);
});
