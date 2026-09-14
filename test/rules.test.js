// Comprehensive test suite for Bharakhatta rules, paths, scoring, and captures

import { BharakhattaEngine, GAME_STATUS } from "../src/game/engine.js";
import { CowrieDice } from "../src/game/cowries.js";
import { getPlayerPath, isSafeSquare } from "../src/game/board.js";

function runTests() {
  console.log("=== BHARAKHATTA AUTOMATED TEST SUITE ===\n");
  let passed = 0;
  let total = 0;

  function assert(condition, message) {
    total++;
    if (condition) {
      console.log(`✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${message}`);
      process.exitCode = 1;
    }
  }

  // 1. Test Cowrie Scoring
  console.log("--- Test 1: Cowrie Scoring Rules ---");
  const dice = new CowrieDice();
  
  // Test forced scores
  const roll1 = dice.roll(1);
  assert(roll1.score === 1 && roll1.isBonus === true && roll1.releasesCoins === 1, "Roll 1 is Okkati, grants bonus and releases 1 coin");

  const roll2 = dice.roll(2);
  assert(roll2.score === 2 && roll2.isBonus === false && roll2.releasesCoins === 0, "Roll 2 is Rendu, no bonus, no release");

  const roll3 = dice.roll(3);
  assert(roll3.score === 3 && roll3.isBonus === false && roll3.releasesCoins === 0, "Roll 3 is Moodu, no bonus, no release");

  const roll4 = dice.roll(4);
  assert(roll4.score === 4 && roll4.isBonus === false && roll4.releasesCoins === 0, "Roll 4 is Naalugu, no bonus, no release");

  const roll5 = dice.roll(5);
  assert(roll5.score === 5 && roll5.isBonus === true && roll5.releasesCoins === 5, "Roll 5 is Aidu, grants bonus and releases up to 5 coins");

  const roll6 = dice.roll(6);
  assert(roll6.score === 6 && roll6.isBonus === true && roll6.releasesCoins === 6, "Roll 6 is Aaru, grants bonus and releases up to 6 coins");

  const roll12 = dice.roll(12);
  assert(roll12.score === 12 && roll12.isBonus === true && roll12.releasesCoins === 6, "Roll 12 (all backs) is Baara!, grants bonus and releases coins");

  // 2. Test 1,000 Random Rolls
  console.log("\n--- Test 2: Statistical Distribution (1,000 rolls) ---");
  const distribution = {};
  for (let i = 0; i < 1000; i++) {
    const r = dice.roll();
    distribution[r.score] = (distribution[r.score] || 0) + 1;
  }
  console.log("Distribution:", distribution);
  assert(distribution[1] > 0 && distribution[2] > 0 && distribution[3] > 0 && distribution[4] > 0 && distribution[5] > 0 && distribution[6] > 0 && distribution[12] > 0, "All possible scores (1-6 and 12) appear in natural rolls");

  // 3. Test Paths and Step 15 Capture Logic (User's rule verification)
  console.log("\n--- Test 3: Path and Step Alignment ---");
  const pathT1 = getPlayerPath(1, "classic");
  const pathT2 = getPlayerPath(2, "classic");

  // Team 1 start is (6, 3) Bottom Home
  assert(pathT1[0].r === 6 && pathT1[0].c === 3, "Team 1 Step 0 is Bottom Home (6, 3)");
  // Team 2 start is (0, 3) Top Home
  assert(pathT2[0].r === 0 && pathT2[0].c === 3, "Team 2 Step 0 is Top Home (0, 3)");
  // Team 1 Step 12 is Opponent Home (0, 3)
  assert(pathT1[12].r === 0 && pathT1[12].c === 3, "Team 1 Step 12 is Top Home (0, 3)");
  // Team 1 Step 15 is NW corner (0, 0)
  assert(pathT1[15].r === 0 && pathT1[15].c === 0, "Team 1 Step 15 is NW Corner (0, 0)");
  // Team 2 Step 3 is NW corner (0, 0)
  assert(pathT2[3].r === 0 && pathT2[3].c === 0, "Team 2 Step 3 is NW Corner (0, 0) -> EXACT MATCH WITH USER EXAMPLE!");

  // 4. Test Jail Entry and Moves in Game Engine
  console.log("\n--- Test 4: Jail Release & Legal Moves Engine ---");
  const engine = new BharakhattaEngine({ gameMode: "2p" });
  
  // When all coins in jail:
  // Roll 3 should have NO valid moves
  const movesRoll3 = engine.getLegalMoves(1, 3);
  assert(movesRoll3.length === 0, "Roll of 3 with all coins in jail gives 0 legal moves");

  // Roll 1 should allow releasing 1 coin
  const movesRoll1 = engine.getLegalMoves(1, 1);
  assert(movesRoll1.length === 1 && movesRoll1[0].type === "RELEASE_JAIL" && movesRoll1[0].count === 1, "Roll of 1 allows releasing 1 coin from jail");

  // Roll 5 should allow releasing up to 5 coins
  const movesRoll5 = engine.getLegalMoves(1, 5);
  assert(movesRoll5.length === 1 && movesRoll5[0].type === "RELEASE_JAIL" && movesRoll5[0].count === 5, "Roll of 5 allows releasing up to 5 coins from jail");

  // Simulate resolving a roll of 1
  engine.currentRoll = { score: 1, isBonus: true };
  engine.status = GAME_STATUS.WAITING_FOR_MOVE;
  engine.executeMove(movesRoll1[0]);

  const activeT1 = engine.getTeamCoins(1).filter(c => !c.inJail);
  assert(activeT1.length === 1 && activeT1[0].coord.r === 6 && activeT1[0].coord.c === 3, "Released coin is on Home base (6, 3)");

  // Now test roll of 3 with 1 active coin
  const movesRoll3WithActive = engine.getLegalMoves(1, 3);
  assert(movesRoll3WithActive.length === 1 && movesRoll3WithActive[0].type === "MOVE_COIN", "Roll of 3 with active coin allows moving active coin");

  // 5. Test Safe Squares
  console.log("\n--- Test 5: Safe Squares (Kattas) ---");
  assert(isSafeSquare(6, 3), "Bottom Home (6, 3) is a safe square");
  assert(isSafeSquare(0, 3), "Top Home (0, 3) is a safe square");
  assert(isSafeSquare(3, 0), "West Katta (3, 0) is a safe square");
  assert(isSafeSquare(3, 6), "East Katta (3, 6) is a safe square");
  assert(isSafeSquare(1, 1), "NW Katta (1, 1) is a safe square");
  assert(isSafeSquare(1, 5), "NE Katta (1, 5) is a safe square");
  assert(isSafeSquare(5, 1), "SW Katta (5, 1) is a safe square");
  assert(isSafeSquare(5, 5), "SE Katta (5, 5) is a safe square");
  assert(isSafeSquare(3, 3), "Center Sanctum (3, 3) is a safe square");
  assert(!isSafeSquare(0, 0), "NW Corner (0, 0) is NOT a safe square (vulnerable to kill!)");

  console.log(`\n===================================`);
  console.log(`TEST RESULTS: ${passed} / ${total} PASSED!`);
  console.log(`===================================\n`);
}

runTests();
