// Multiplayer WebSocket simulation test between two mobile devices

import WebSocket from "ws";

async function testMultiplayer() {
  console.log("=== TESTING MULTIPLAYER ACROSS TWO MOBILES ===\n");

  const wsUrl = "ws://localhost:5173/ws";

  // Client 1 (Mobile 1 - Host)
  const client1 = new WebSocket(wsUrl);
  let roomCode = null;

  await new Promise((resolve) => {
    client1.on("open", () => {
      console.log("📱 Mobile 1 connected!");
      client1.send(JSON.stringify({ type: "CREATE_ROOM", mode: "2p", playerName: "Mobile 1 (Host)" }));
    });

    client1.on("message", (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.type === "ROOM_CREATED") {
        roomCode = msg.roomCode;
        console.log(`✅ Room Created with Code: #${roomCode}`);
        resolve();
      }
    });
  });

  // Client 2 (Mobile 2 - Friend)
  const client2 = new WebSocket(wsUrl);
  await new Promise((resolve) => {
    client2.on("open", () => {
      console.log("📱 Mobile 2 connected!");
      client2.send(JSON.stringify({ type: "JOIN_ROOM", roomCode, playerName: "Mobile 2 (Friend)" }));
    });

    client2.on("message", (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.type === "ROOM_JOINED") {
        console.log(`✅ Mobile 2 joined Room #${roomCode} as Player 2 (Team ${msg.team})!`);
        resolve();
      }
    });
  });

  // Test broadcast action: Mobile 1 rolls a 12 (Baara)
  const rollPromise = new Promise((resolve) => {
    client2.on("message", (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.type === "ACTION_ROLL") {
        console.log(`✅ Mobile 2 received synchronized roll from Mobile 1: Score = ${msg.rollResult.score} (${msg.rollResult.titleTe})!`);
        resolve();
      }
    });
  });

  client1.send(JSON.stringify({
    type: "ACTION_ROLL",
    roomCode,
    rollResult: { score: 12, titleTe: "Baara", titleEn: "Twelve", isBonus: true }
  }));

  await rollPromise;

  // Test move broadcast: Mobile 1 releases coin
  const movePromise = new Promise((resolve) => {
    client2.on("message", (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.type === "ACTION_MOVE") {
        console.log(`✅ Mobile 2 received synchronized move from Mobile 1: ${msg.move.type}`);
        resolve();
      }
    });
  });

  client1.send(JSON.stringify({
    type: "ACTION_MOVE",
    roomCode,
    move: { type: "RELEASE_JAIL", count: 1 }
  }));

  await movePromise;

  client1.close();
  client2.close();

  console.log("\n=============================================");
  console.log("🎉 ALL MULTIPLAYER REAL-TIME TESTS PASSED!");
  console.log("=============================================\n");
  process.exit(0);
}

testMultiplayer().catch(err => {
  console.error("Multiplayer test failed:", err);
  process.exit(1);
});
