// Mock localStorage for Node.js test environment
if (typeof globalThis.localStorage === "undefined") {
  const store = {};
  globalThis.localStorage = {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); }
  };
}

import { BharakhattaEngine, GAME_STATUS } from "../src/game/engine.js";
import { CowrieDice } from "../src/game/cowries.js";
import { getPlayerPath, isSafeSquare } from "../src/game/board.js";
import { UserManager, computeNickName } from "../src/game/userManager.js";
import { wallet } from "../src/game/wallet.js";

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
  assert(roll5.score === 5 && roll5.isBonus === true && roll5.releasesCoins === 0, "Roll 5 is Aidu, grants bonus, releases 0 coins");

  const roll6 = dice.roll(6);
  assert(roll6.score === 6 && roll6.isBonus === true && roll6.releasesCoins === 0, "Roll 6 is Aaru, grants bonus, releases 0 coins");

  const roll12 = dice.roll(12);
  assert(roll12.score === 12 && roll12.isBonus === true && roll12.releasesCoins === 0, "Roll 12 (all backs) is Baara!, grants bonus, releases 0 coins");

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

  // Roll 5 should NOT allow releasing coins from jail (User explicit rule: only roll 1 releases!)
  const movesRoll5 = engine.getLegalMoves(1, 5);
  assert(movesRoll5.length === 0, "Roll of 5 with all coins in jail gives 0 legal moves (does NOT release from jail)");

  // Roll 1 should allow releasing exactly 1 coin
  const movesRoll1 = engine.getLegalMoves(1, 1);
  assert(movesRoll1.length === 1 && movesRoll1[0].type === "RELEASE_JAIL" && movesRoll1[0].count === 1, "Roll of 1 allows releasing 1 coin from jail");

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

  // 6. Test Authentic Spiral Path (40 Steps matching User's Hand-drawn Diagram)
  console.log("\n--- Test 6: Spiral Path & 5/5 Inside Ring Alignment (40 Steps) ---");
  const spiralT1 = getPlayerPath(1, "spiral");
  const spiralT2 = getPlayerPath(2, "spiral");
  assert(spiralT1.length === 41, `Team 1 Spiral Path has exactly 41 points (indices 0..40, was ${spiralT1.length})`);
  assert(spiralT2.length === 41, `Team 2 Spiral Path has exactly 41 points (indices 0..40, was ${spiralT2.length})`);
  
  // Team 1: Step 0 is Bottom Home (6, 3), Step 23 is Gate (6, 2), Step 24 enters 5/5 (5, 1), Step 40 is Center (3, 3)
  assert(spiralT1[0].r === 6 && spiralT1[0].c === 3, "Team 1 Step 0 is Home 1 (6, 3)");
  assert(spiralT1[23].r === 6 && spiralT1[23].c === 2, "Team 1 Step 23 is Gate 23 (6, 2)");
  assert(spiralT1[24].r === 5 && spiralT1[24].c === 1, "Team 1 Step 24 enters inside 5/5 ring (5, 1)");
  assert(spiralT1[40].r === 3 && spiralT1[40].c === 3, "Team 1 Step 40 is Center Sanctum (3, 3)");

  // Team 2: Step 0 is Top Home (0, 3), Step 23 is Gate (0, 4), Step 24 enters 5/5 (1, 5), Step 40 is Center (3, 3)
  assert(spiralT2[0].r === 0 && spiralT2[0].c === 3, "Team 2 Step 0 is Home 2 (0, 3)");
  assert(spiralT2[23].r === 0 && spiralT2[23].c === 4, "Team 2 Step 23 is Gate 23 (0, 4)");
  assert(spiralT2[24].r === 1 && spiralT2[24].c === 5, "Team 2 Step 24 enters inside 5/5 ring (1, 5)");
  assert(spiralT2[40].r === 3 && spiralT2[40].c === 3, "Team 2 Step 40 is Center Sanctum (3, 3)");

  // 7. Test Step 23 Stopping Rule (Zero Kills)
  console.log("\n--- Test 7: Step 23 Stop Rule (Zero Kills) ---");
  const engine2 = new BharakhattaEngine({ gameMode: "2p" });
  assert(engine2.pathStyle === "spiral", "Engine defaults to spiral path");

  // Place a coin at step 20
  const coinT1 = engine2.coins.find(c => c.team === 1 && c.num === 1);
  coinT1.inJail = false;
  coinT1.stepIndex = 20;
  coinT1.coord = { ...spiralT1[20] };

  // Roll 5 with 0 kills: target 25 overshoots 23 -> must clamp to step 23!
  const movesRoll5Step20 = engine2.getLegalMoves(1, 5);
  const moveStep20To23 = movesRoll5Step20.find(m => m.coin.id === coinT1.id);
  assert(moveStep20To23 && moveStep20To23.toStep === 23, "Coin at step 20 rolling 5 stops at step 23 when team has 0 kills");

  // Move coin to step 23
  engine2.status = GAME_STATUS.WAITING_FOR_MOVE;
  engine2.executeMove(moveStep20To23, true, true);
  assert(coinT1.stepIndex === 23, "Coin is now parked at step 23");

  // When already at step 23 with 0 kills: rolling any score gives 0 moves for this coin!
  for (const s of [1, 2, 3, 4, 5, 6, 12]) {
    const movesAt23 = engine2.getLegalMoves(1, s).filter(m => m.coin && m.coin.id === coinT1.id);
    assert(movesAt23.length === 0, `Coin parked at step 23 has 0 moves on roll of ${s} when kills = 0`);
  }

  // 8. Test Unlocking 5/5 Ring After a Kill
  console.log("\n--- Test 8: Inside 5/5 Ring Unlocks After 1 Kill ---");
  engine2.team1Kills = 1; // Team 1 gets a kill!
  const movesAt23WithKill = engine2.getLegalMoves(1, 1).filter(m => m.coin && m.coin.id === coinT1.id);
  assert(movesAt23WithKill.length === 1 && movesAt23WithKill[0].toStep === 24, "Coin at step 23 rolling 1 enters step 24 (Inside 5/5 Ring!) after kill");

  const movesAt23Roll3 = engine2.getLegalMoves(1, 3).filter(m => m.coin && m.coin.id === coinT1.id);
  assert(movesAt23Roll3.length === 1 && movesAt23Roll3[0].toStep === 26, "Coin at step 23 rolling 3 enters step 26 (Inside 5/5 Ring!) after kill");

  // 9. Test Win Condition (6 Coins into Final Home / Center Sanctum)
  console.log("\n--- Test 9: 6 Coins in Final Home Win Condition ---");
  for (let i = 1; i <= 6; i++) {
    const c = engine2.coins.find(coin => coin.team === 1 && coin.num === i);
    c.inJail = false;
    c.isFinished = true;
    c.stepIndex = 40;
    c.coord = { r: 3, c: 3 };
  }
  assert(engine2.checkWinCondition(1) === true, "Team 1 wins when all 6 coins reach Center Sanctum (Final Home)");
  assert(engine2.checkWinCondition(2) === false, "Team 2 has not won");

  // 10. Test Mobile Number Login, Nick Name Generation, and Persistence
  console.log("\n--- Test 10: Mobile Number Login & Nick Name Persistence ---");
  
  // Test Nick Name derivation logic
  assert(computeNickName("Mahesh Reddy", "") === "MR", "Mahesh Reddy derives nickname 'MR'");
  assert(computeNickName("maheshreddy", "") === "M", "maheshreddy derives nickname 'M'");
  assert(computeNickName("Mahesh Kumar Reddy", "") === "MKR", "Mahesh Kumar Reddy derives nickname 'MKR'");
  assert(computeNickName("Mahesh Reddy", "Mahi") === "Mahi", "Custom nickname 'Mahi' overrides auto-initials");

  const um = new UserManager();

  // Test invalid mobile input
  const invalidLogin = um.login("12345");
  assert(invalidLogin.success === false, "Fails login on invalid phone number length");

  // Test new user registration with full name "Mahesh Reddy" and blank nickname
  const user1Mobile = "9876543210";
  const login1 = um.login(user1Mobile, "Mahesh Reddy", "");
  assert(login1.success === true && login1.isNewUser === true, "First time login succeeds and creates new user");
  assert(login1.user.nickName === "MR", "User nickName auto-derived as 'MR'");
  assert(login1.user.name === "MR", "In-game display name is strictly the Nick Name ('MR')");
  assert(wallet.getBalance() === 1000, "New user receives 1,000 joining bonus");

  // Win some coins
  wallet.awardPot(500);
  assert(wallet.getBalance() === 1500, "Wallet balance increased after win to 1500");
  um.saveUserProfile(um.currentUser);

  // Record a match in history
  um.recordMatch({
    result: "WON",
    mode: "vs Computer",
    betAmount: 250,
    potWon: 500,
    kills: 3,
    finishedCoins: 6
  });

  const history = um.getHistory(user1Mobile);
  assert(history.length === 1 && history[0].result === "WON", "Match history successfully recorded");
  const stats = um.getStats();
  assert(stats.gamesWon === 1 && stats.gamesPlayed === 1 && stats.totalKills === 3, "Lifetime stats correctly aggregated");

  // Simulate logging out / logging back in with SAME mobile number
  um.currentUser = null;
  const loginAgain = um.login(user1Mobile, "Mahesh Reddy", "");
  assert(loginAgain.success === true && loginAgain.isNewUser === false, "Recognized as existing user on 2nd login with same number");
  assert(loginAgain.user.nickName === "MR", "Existing user retains nickname 'MR'");
  assert(wallet.getBalance() === 1500, "Existing user restores previous wallet balance (1500)");
  assert(um.getHistory(user1Mobile).length === 1, "Existing user maintains complete match history");

  console.log(`\n===================================`);
  console.log(`TEST RESULTS: ${passed} / ${total} PASSED!`);
  console.log(`===================================\n`);
}

runTests();
