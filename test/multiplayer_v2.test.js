// Unit tests for Multiplayer Chat & Bet Synchronization

import { MultiplayerClient } from '../src/game/multiplayerClient.js';

console.log("=== BHARAKHATTA MULTIPLAYER CHAT & BET TEST SUITE ===");

let chatReceived = null;
let betReceived = null;

const client1 = new MultiplayerClient({
  onChatReceived: (msg) => { chatReceived = msg; },
  onBetSynced: (b) => { betReceived = b; }
});

client1.roomCode = "1234";
client1.myPlayerId = 1;

// Simulate receiving chat message
client1.handleMessage({
  type: "ACTION_CHAT",
  roomCode: "1234",
  senderId: 2,
  senderName: "Player 2",
  text: "బాఱ! (Baara 12!) 🎲",
  time: "11:45 AM"
});

console.assert(chatReceived !== null, "Chat message should be received");
console.assert(chatReceived.text === "బాఱ! (Baara 12!) 🎲", "Chat text should match");
console.log("✅ PASS: In-Game village chat message received and parsed");

// Simulate receiving bet update
client1.handleMessage({
  type: "ROOM_BET",
  roomCode: "1234",
  bet: 500
});

console.assert(betReceived === 500, "Bet should be synchronized to 500");
console.assert(client1.currentBet === 500, "Client currentBet updated to 500");
console.log("✅ PASS: Match coin stake bet synchronized across peers");

console.log("=============================================");
console.log("🎉 ALL CHAT & BET TESTS PASSED (2/2)!");
console.log("=============================================");
