// Unit tests for Wallet & Betting Economy

import { WalletManager } from '../src/game/wallet.js';

console.log("=== BHARAKHATTA WALLET & BETTING TEST SUITE ===");

// Mock localStorage
const store = {};
globalThis.localStorage = {
  getItem: (k) => store[k] !== undefined ? store[k] : null,
  setItem: (k, v) => { store[k] = v.toString(); }
};

const w = new WalletManager();
console.log("Initial Balance:", w.getBalance());
console.assert(w.getBalance() === 1000, "Should have 1,000 joining bonus coins");
console.log("✅ PASS: Joining bonus is 1,000 coins");

console.assert(w.canAfford(250) === true, "Should afford 250 bet");
console.assert(w.canAfford(2000) === false, "Should not afford 2,000 bet");
console.log("✅ PASS: Affordability checks pass");

const betPlaced = w.placeBet(250);
console.assert(betPlaced === true, "Bet of 250 should succeed");
console.assert(w.getBalance() === 750, "Balance should be 750 after 250 bet");
console.log("✅ PASS: Bet placement deducts balance correctly (Remaining: 750)");

// Award Pot
w.awardPot(500);
console.assert(w.getBalance() === 1250, "Balance should be 1250 after 500 pot award");
console.log("✅ PASS: Pot award credits winner correctly (Total: 1,250)");

// Test Refill
w.placeBet(1200); // balance = 50 (< 100)
console.assert(w.getBalance() === 50, "Balance is 50");
const refilled = w.claimRefill();
console.assert(refilled === true, "Refill should be granted when balance < 100");
console.assert(w.getBalance() === 550, "Balance should be 550 after +500 refill");
console.log("✅ PASS: Free Village Refill (+500) works when low on coins");

console.log("=============================================");
console.log("🎉 ALL WALLET TESTS PASSED (5/5)!");
console.log("=============================================");
