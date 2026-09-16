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
import { generateUniqueBoardNumber, normalizeBoardNumber } from "../src/game/multiplayerClient.js";
import { renderCuppedPalm, renderCowrieArea } from "../src/components/CowrieShellsView.js";
import { t, getLanguage, setLanguage, toggleLanguage } from "../src/utils/i18n.js";

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

  // 3. Test Paths and Step Alignment for All 4 Homes
  console.log("\n--- Test 3: Path and Step Alignment for All 4 Homes ---");
  const pathH1 = getPlayerPath(1);
  const pathH2 = getPlayerPath(2);
  const pathH3 = getPlayerPath(3);
  const pathH4 = getPlayerPath(4);

  // Home 1 Base: East (3, 6) per user drawing media_1789533923694.png
  assert(pathH1[0].r === 3 && pathH1[0].c === 6, "Home 1 Step 0 is East Base (3, 6)");
  assert(pathH1[23].r === 4 && pathH1[23].c === 6, "Home 1 Step 23 is Gate 23 (4, 6)");
  assert(pathH1[24].r === 5 && pathH1[24].c === 5, "Home 1 Step 24 enters 5/5 squad at (5, 5)");
  assert(pathH1[48].r === 3 && pathH1[48].c === 3, "Home 1 Step 48 is Center Sanctum (Happy Home, 3, 3)");

  // Home 2 Base: North (0, 3) (90° CCW Rotation)
  assert(pathH2[0].r === 0 && pathH2[0].c === 3, "Home 2 Step 0 is North Base (0, 3)");
  assert(pathH2[23].r === 0 && pathH2[23].c === 4, "Home 2 Step 23 is Gate 23 (0, 4)");
  assert(pathH2[24].r === 1 && pathH2[24].c === 5, "Home 2 Step 24 enters 5/5 squad at (1, 5)");
  assert(pathH2[48].r === 3 && pathH2[48].c === 3, "Home 2 Step 48 is Center Sanctum (Happy Home, 3, 3)");

  // Home 3 Base: West (3, 0) (180° Rotation)
  assert(pathH3[0].r === 3 && pathH3[0].c === 0, "Home 3 Step 0 is West Base (3, 0)");
  assert(pathH3[23].r === 2 && pathH3[23].c === 0, "Home 3 Step 23 is Gate 23 (2, 0)");
  assert(pathH3[48].r === 3 && pathH3[48].c === 3, "Home 3 Step 48 is Center Sanctum (Happy Home, 3, 3)");

  // Home 4 Base: South (6, 3) (270° CCW Rotation)
  assert(pathH4[0].r === 6 && pathH4[0].c === 3, "Home 4 Step 0 is South Base (6, 3)");
  assert(pathH4[23].r === 6 && pathH4[23].c === 2, "Home 4 Step 23 is Gate 23 (6, 2)");
  assert(pathH4[48].r === 3 && pathH4[48].c === 3, "Home 4 Step 48 is Center Sanctum (Happy Home, 3, 3)");

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
  assert(activeT1.length === 1 && activeT1[0].coord.r === 3 && activeT1[0].coord.c === 6, "Released coin is on Home 1 East base (3, 6)");

  // Now test roll of 3 with 1 active coin
  const movesRoll3WithActive = engine.getLegalMoves(1, 3);
  assert(movesRoll3WithActive.length === 1 && movesRoll3WithActive[0].type === "MOVE_COIN", "Roll of 3 with active coin allows moving active coin");

  // 5. Test Safe Squares
  console.log("\n--- Test 5: Safe Squares (Kattas) ---");
  assert(isSafeSquare(6, 3), "South Home 4 (6, 3) is a safe square");
  assert(isSafeSquare(0, 3), "North Home 2 (0, 3) is a safe square");
  assert(isSafeSquare(3, 0), "West Home 3 (3, 0) is a safe square");
  assert(isSafeSquare(3, 6), "East Home 1 (3, 6) is a safe square");
  assert(isSafeSquare(1, 1), "NW Katta (1, 1) is a safe square");
  assert(isSafeSquare(1, 5), "NE Katta (1, 5) is a safe square");
  assert(isSafeSquare(5, 1), "SW Katta (5, 1) is a safe square");
  assert(isSafeSquare(5, 5), "SE Katta (5, 5) is a safe square");
  assert(isSafeSquare(3, 3), "Center Sanctum (3, 3) is a safe square");
  assert(!isSafeSquare(0, 0), "NW Corner (0, 0) is NOT a safe square (vulnerable to kill!)");

  // 6. Test Authentic 48-Step Spiral Path Structure (49 Points: Indices 0..48)
  console.log("\n--- Test 6: Authentic 48-Step Spiral Path (49 Points) ---");
  assert(pathH1.length === 49, `Team 1 Spiral Path has exactly 49 points (indices 0..48, was ${pathH1.length})`);
  assert(pathH2.length === 49, `Team 2 Spiral Path has exactly 49 points (indices 0..48, was ${pathH2.length})`);
  assert(pathH3.length === 49, `Team 3 Spiral Path has exactly 49 points (indices 0..48, was ${pathH3.length})`);
  assert(pathH4.length === 49, `Team 4 Spiral Path has exactly 49 points (indices 0..48, was ${pathH4.length})`);

  // 7. Test Step 23 Exact Landing Rule (Zero Kills - No Overshoot Allowed)
  console.log("\n--- Test 7: Step 23 Exact Landing Rule (Zero Kills) ---");
  const engine2 = new BharakhattaEngine({ gameMode: "2p" });

  // Place single active coin at step 22 with 0 kills
  const coinT1 = engine2.coins.find(c => c.team === 1 && c.num === 1);
  coinT1.inJail = false;
  coinT1.stepIndex = 22;
  coinT1.coord = { ...pathH1[22] };

  // User Rule: "if the coin at 22 nd step only one coin thn toss will get more thn 2or more mean no move (user still didnt kill) becuae only 1 needed to move step23"
  const movesAt22Roll1 = engine2.getLegalMoves(1, 1).filter(m => m.coin && m.coin.id === coinT1.id);
  assert(movesAt22Roll1.length === 1 && movesAt22Roll1[0].toStep === 23, "Coin at step 22 rolling 1 lands EXACTLY on Step 23 (Gate 23)");

  // Rolling 2, 3, 4, 5, 6, 12 must yield NO MOVE (cannot overshoot 23 without kill)
  for (const s of [2, 3, 4, 5, 6, 12]) {
    const movesAt22Overshoot = engine2.getLegalMoves(1, s).filter(m => m.coin && m.coin.id === coinT1.id);
    assert(movesAt22Overshoot.length === 0, `Coin at step 22 rolling ${s} has 0 legal moves (no overshoot past Gate 23 without kill)`);
  }

  // Move coin to step 23
  engine2.status = GAME_STATUS.WAITING_FOR_MOVE;
  engine2.executeMove(movesAt22Roll1[0], true, true);
  assert(coinT1.stepIndex === 23, "Coin is now parked at step 23");

  // When already at step 23 with 0 kills: rolling any score gives 0 moves for this coin!
  for (const s of [1, 2, 3, 4, 5, 6, 12]) {
    const movesAt23 = engine2.getLegalMoves(1, s).filter(m => m.coin && m.coin.id === coinT1.id);
    assert(movesAt23.length === 0, `Coin parked at step 23 has 0 moves on roll of ${s} when kills = 0`);
  }

  // Test coin at step 20 with 0 kills:
  coinT1.stepIndex = 20;
  coinT1.coord = { ...pathH1[20] };
  const movesStep20Roll3 = engine2.getLegalMoves(1, 3).filter(m => m.coin && m.coin.id === coinT1.id);
  assert(movesStep20Roll3.length === 1 && movesStep20Roll3[0].toStep === 23, "Coin at step 20 rolling 3 lands exactly on Gate 23");
  const movesStep20Roll4 = engine2.getLegalMoves(1, 4).filter(m => m.coin && m.coin.id === coinT1.id);
  assert(movesStep20Roll4.length === 0, "Coin at step 20 rolling 4 gives 0 moves (overshoots 23)");

  // 8. Test Unlocking 5/5 Ring After a Kill
  console.log("\n--- Test 8: Inside 5/5 Ring Unlocks After 1 Kill ---");
  engine2.team1Kills = 1; // Team 1 gets a kill!
  coinT1.stepIndex = 23;
  coinT1.coord = { ...pathH1[23] };
  const movesAt23WithKill = engine2.getLegalMoves(1, 1).filter(m => m.coin && m.coin.id === coinT1.id);
  assert(movesAt23WithKill.length === 1 && movesAt23WithKill[0].toStep === 24, "Coin at step 23 rolling 1 enters step 24 (Inside 5/5 Ring at (5, 5)) after kill");

  const movesAt23Roll3 = engine2.getLegalMoves(1, 3).filter(m => m.coin && m.coin.id === coinT1.id);
  assert(movesAt23Roll3.length === 1 && movesAt23Roll3[0].toStep === 26, "Coin at step 23 rolling 3 enters step 26 (Inside 5/5 Ring) after kill");

  // 9. Test Win Condition (6 Coins into Final Home / Center Sanctum at Step 48)
  console.log("\n--- Test 9: 6 Coins in Final Home Win Condition (Step 48) ---");
  for (let i = 1; i <= 6; i++) {
    const c = engine2.coins.find(coin => coin.team === 1 && coin.num === i);
    c.inJail = false;
    c.isFinished = true;
    c.stepIndex = 48;
    c.coord = { r: 3, c: 3 };
  }
  assert(engine2.checkWinCondition(1) === true, "Team 1 wins when all 6 coins reach Center Sanctum (Happy Home at Step 48)");
  assert(engine2.checkWinCondition(2) === false, "Team 2 has not won");

  // Test Auto-Move Detection (getSingleMovableMove)
  console.log("\n--- Test 9b: Auto-Move Detection (Single Coin Out of Jail) ---");
  const autoEngine = new BharakhattaEngine({ gameMode: "2p" });
  // Release only 1 coin for Team 1
  const singleActiveCoin = autoEngine.coins.find(c => c.team === 1 && c.num === 1);
  singleActiveCoin.inJail = false;
  singleActiveCoin.stepIndex = 5;
  singleActiveCoin.coord = { ...pathH1[5] };

  // Set roll to 3 (which cannot release jail, only moves the 1 active coin)
  autoEngine.currentRoll = { score: 3, isBonus: false };
  autoEngine.status = GAME_STATUS.WAITING_FOR_MOVE;
  autoEngine.validMoves = autoEngine.getLegalMoves(1, 3);
  const singleMove = autoEngine.getSingleMovableMove();
  assert(singleMove !== null && singleMove.type === "MOVE_COIN" && singleMove.toStep === 8, "Auto-move detects the single movable coin without requiring user prompt");

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

  // 11. Test Guaranteed Non-Repeating Board Numbers
  console.log("\n--- Test 11: Guaranteed Unique Board Numbers ---");
  const bn1 = generateUniqueBoardNumber();
  assert(bn1.startsWith("BK-"), "Board number begins with 'BK-' prefix");
  assert(/^BK-\d{6}-\d+-\d{3}$/.test(bn1), "Board number format matches BK-YYMMDD-COUNTER-ENTROPY");

  // Test that 1,000 generated board numbers are 100% unique (zero collisions)
  const boardSet = new Set();
  let collisions = 0;
  for (let i = 0; i < 1000; i++) {
    const num = generateUniqueBoardNumber();
    if (boardSet.has(num)) {
      collisions++;
    }
    boardSet.add(num);
  }
  assert(collisions === 0 && boardSet.size === 1000, "1,000 consecutively generated board numbers have 0 collisions (100% unique lifetime match IDs)");

  // Test normalizeBoardNumber
  assert(normalizeBoardNumber("BK-260915-101-482") === "BK-260915-101-482", "Normalizes exact code");
  assert(normalizeBoardNumber("260915-101-482") === "BK-260915-101-482", "Prepends BK- if omitted");
  assert(normalizeBoardNumber(" bk-260915 ") === "BK-260915", "Uppercases and trims");

  // 12. Test 4-Player Mode with AI Opposite Pair
  console.log("\n--- Test 12: 4-Player AI Opposite Pair Mode ---");
  // Team 1: Player 1 (Human) & Player 3 (Human Friend)
  // Team 2: Player 2 (System AI) & Player 4 (System AI) as opposite pair
  const engine4p = new BharakhattaEngine({ gameMode: "4p" });
  engine4p.initGame([
    { id: 1, team: 1, name: "Host (You)", avatar: "👑", color: "#e67e22", isAI: false },
    { id: 2, team: 2, name: "System AI 1", avatar: "🦚", color: "#27ae60", isAI: true },
    { id: 3, team: 1, name: "Friend (You)", avatar: "🦁", color: "#d35400", isAI: false },
    { id: 4, team: 2, name: "System AI 2", avatar: "🦜", color: "#16a085", isAI: true }
  ]);

  assert(engine4p.players.length === 4, "4 players initialized in engine");
  assert(engine4p.players[0].team === 1 && !engine4p.players[0].isAI, "Player 1 is Human on Team 1");
  assert(engine4p.players[1].team === 2 && engine4p.players[1].isAI, "Player 2 is System AI on Team 2 (Opposite Pair)");
  assert(engine4p.players[2].team === 1 && !engine4p.players[2].isAI, "Player 3 is Human Friend on Team 1 (Teammate)");
  assert(engine4p.players[3].team === 2 && engine4p.players[3].isAI, "Player 4 is System AI on Team 2 (Opposite Pair)");

  // Verify turn alternation
  assert(engine4p.getCurrentPlayer().id === 1, "Turn starts with Player 1 (Team 1)");
  engine4p.advanceTurn();
  assert(engine4p.getCurrentPlayer().id === 2, "Turn 2 passes to Player 2 (System AI, Team 2)");
  assert(engine4p.getCurrentPlayer().isAI === true, "Player 2 is recognized as AI");
  engine4p.advanceTurn();
  assert(engine4p.getCurrentPlayer().id === 3, "Turn 3 passes to Player 3 (Friend, Team 1)");
  assert(engine4p.getCurrentPlayer().isAI === false, "Player 3 is recognized as Human");
  engine4p.advanceTurn();
  assert(engine4p.getCurrentPlayer().id === 4, "Turn 4 passes to Player 4 (System AI, Team 2)");
  assert(engine4p.getCurrentPlayer().isAI === true, "Player 4 is recognized as AI");
  engine4p.advanceTurn();
  assert(engine4p.getCurrentPlayer().id === 1, "Turn wraps back to Player 1 (Team 1)");

  // 13. Test Folded Palm Cowrie Toss Rendering (Per User Photos)
  console.log("\n--- Test 13: Folded Palm Cowrie Toss View ---");
  const palmHtml = renderCuppedPalm(false, true, true);
  assert(palmHtml.includes("palm-cupped-box"), "Palm container rendered with palm-cupped-box id");
  assert(palmHtml.includes("folded-palm-svg"), "Folded palm SVG graphic present");
  assert(palmHtml.includes("Folded Palm"), "Prompt shows Folded Palm");

  const shakingPalmHtml = renderCuppedPalm(true, false, true);
  assert(shakingPalmHtml.includes("shake-folded-fist"), "Shaking animation active during roll toss");
  assert(shakingPalmHtml.includes("Shaking Palm (2 sec)"), "Shaking 2 sec status text active");

  // In Cowrie Area after toss: Settled mat shows shells only, NOT palm!
  const settledAreaHtml = renderCowrieArea({
    status: "WAITING_FOR_MOVE",
    currentRoll: { score: 4, titleTe: "చింత", isBonus: false },
    diceMode: "cowries",
    currentPlayer: { id: 1, name: "Player 1", isAI: false }
  });
  assert(settledAreaHtml.includes("settled-cowrie-mat"), "Settled state shows cowrie shells on board mat");
  assert(!settledAreaHtml.includes("folded-palm-svg"), "Palm is completely hidden after toss (shells only on mat!)");

  // 14. Test Always 2 Homes Rule (2P and 4P modes)
  console.log("\n--- Test 14: Always 2 Homes Rule (H1 East & H2 North) ---");
  const p1Path = getPlayerPath(1);
  const p2Path = getPlayerPath(2);
  assert(p1Path[0].r === 3 && p1Path[0].c === 6, "Team 1 starts from Home 1 (East, r=3, c=6)");
  assert(p2Path[0].r === 0 && p2Path[0].c === 3, "Team 2 starts from Home 2 (North, r=0, c=3)");

  // In 4P mode, P1 & P3 are Team 1 (Home 1), P2 & P4 are Team 2 (Home 2)
  const test4pEngine = new BharakhattaEngine({ gameMode: "4p" });
  assert(test4pEngine.players[0].team === 1, "4P: Player 1 belongs to Team 1 (Home 1)");
  assert(test4pEngine.players[1].team === 2, "4P: Player 2 belongs to Team 2 (Home 2)");
  assert(test4pEngine.players[2].team === 1, "4P: Player 3 belongs to Team 1 (Home 1)");
  assert(test4pEngine.players[3].team === 2, "4P: Player 4 belongs to Team 2 (Home 2)");
  assert(new Set(test4pEngine.players.map(p => p.team)).size === 2, "Exactly 2 homes / teams in 4-player game");

  // 15. Test Dual Gate 23 Unlock Callback
  console.log("\n--- Test 15: Dual Gate 23 Unlock Callback ---");
  let gatePromptTriggered = false;
  const dualGateEngine = new BharakhattaEngine({
    gameMode: "2p",
    onBothGatesOpen: () => { gatePromptTriggered = true; }
  });
  assert(dualGateEngine.bothGatesPrompted === false, "Dual gate prompt flag initially false");

  // Team 1 makes 1 kill
  dualGateEngine.team1Kills = 1;
  assert(!gatePromptTriggered, "Gate prompt does not trigger when only Team 1 has killed");

  // Team 2 makes 1 kill
  dualGateEngine.currentPlayerIndex = 1;
  const victimT1 = dualGateEngine.coins.find(c => c.team === 1 && c.num === 1);
  victimT1.inJail = false;
  victimT1.coord = { r: 1, c: 3 }; // square on path
  victimT1.stepIndex = 12;

  const killerT2 = dualGateEngine.coins.find(c => c.team === 2 && c.num === 1);
  killerT2.inJail = false;
  killerT2.stepIndex = 0;
  killerT2.coord = { r: 0, c: 3 };

  // Execute capture move by Team 2
  const captureMove = {
    type: "MOVE_COIN",
    coin: killerT2,
    fromStep: 0,
    toStep: 1,
    targetCoord: { r: 1, c: 3 },
    isCapture: true,
    isSafe: false
  };
  dualGateEngine.executeMove(captureMove, true, true);
  assert(dualGateEngine.team1Kills >= 1 && dualGateEngine.team2Kills >= 1, "Both teams have >= 1 kill");
  assert(gatePromptTriggered === true, "onBothGatesOpen callback fired when both teams unlocked Gate 23!");
  assert(dualGateEngine.bothGatesPrompted === true, "bothGatesPrompted flag marked true");

  // 16. Test 6/6 Coins Enter 5/5 Squad Instant Victory
  console.log("\n--- Test 16: 6/6 Coins Enter 5/5 Squad Instant Win ---");
  const squadEngine = new BharakhattaEngine({ gameMode: "2p" });
  assert(squadEngine.checkSquad5x5Win(1) === false, "Initially Team 1 has not achieved 5/5 squad win");

  // Move all 6 coins of Team 1 into step 24+ (inside 5/5 squad)
  const t1Coins = squadEngine.getTeamCoins(1);
  t1Coins.forEach((coin, idx) => {
    coin.inJail = false;
    coin.stepIndex = 24 + idx; // Steps 24, 25, 26, 27, 28, 29 (all in 5/5 squad)
    coin.coord = { ...pathH1[coin.stepIndex] };
  });

  assert(squadEngine.checkSquad5x5Win(1) === true, "checkSquad5x5Win returns true when all 6 coins are at step >= 24");
  
  // Test executeMove triggering instant win for SQUAD_5X5_COMPLETE
  squadEngine.status = GAME_STATUS.WAITING_FOR_MOVE;
  const sampleMove = {
    type: "MOVE_COIN",
    coin: t1Coins[0],
    fromStep: 24,
    toStep: 25,
    targetCoord: { ...pathH1[25] },
    isCapture: false,
    isSafe: false
  };
  squadEngine.executeMove(sampleMove, true, true);
  assert(squadEngine.winner !== null, "Winner declared upon 6/6 coins entering 5/5 squad");
  assert(squadEngine.winner.team === 1, "Team 1 declared winner");
  assert(squadEngine.winner.reason === "SQUAD_5X5_COMPLETE", "Winner reason is SQUAD_5X5_COMPLETE");
  assert(squadEngine.status === GAME_STATUS.GAME_OVER, "Game status is GAME_OVER");

  // 17. Test Multiplayer AI Disable (Player 2 Never Auto-rolls)
  console.log("\n--- Test 17: Multiplayer AI Disable (Zero Auto-rolls for Humans) ---");
  const mpEngine = new BharakhattaEngine({ isMultiplayer: true, isHost: false });
  assert(mpEngine.isMultiplayer === true, "Multiplayer mode flag is true");
  assert(mpEngine.players[0].isAI === false, "Player 1 isAI is false in multiplayer");
  assert(mpEngine.players[1].isAI === false, "Player 2 isAI is strictly FALSE in multiplayer (never auto-rolls!)");

  // Verify checkAITurn returns immediately for human player
  mpEngine.currentPlayerIndex = 1; // Player 2's turn
  assert(mpEngine.getCurrentPlayer().isAI === false, "Current player is human");
  mpEngine.status = GAME_STATUS.WAITING_FOR_ROLL;
  mpEngine.checkAITurn();
  assert(mpEngine.status === GAME_STATUS.WAITING_FOR_ROLL, "Player 2 turn does not auto-roll; stays waiting for user action");

  // Test applyStateSnapshot
  console.log("\n--- Test 17b: Authoritative State Snapshot & Synchronization ---");
  const snap = mpEngine.getStateSnapshot();
  assert(snap.status === GAME_STATUS.WAITING_FOR_ROLL, "Snapshot captures game status");
  assert(snap.coins.length === 12, "Snapshot captures 12 coins");
  
  const clientEngine = new BharakhattaEngine({ isMultiplayer: true, isHost: false });
  snap.team1Kills = 2;
  snap.team2Kills = 1;
  clientEngine.applyStateSnapshot(snap);
  assert(clientEngine.team1Kills === 2 && clientEngine.team2Kills === 1, "applyStateSnapshot accurately synchronizes kills and board state");

  // 18. Test i18n Bilingual Support
  console.log("\n--- Test 18: Bilingual Localization (English & Telugu) ---");
  setLanguage("en");
  assert(getLanguage() === "en", "Language set to English");
  assert(t("appTitle") === "BHARAKHATTA", "English app title is BHARAKHATTA");
  assert(t("twoPlayers") === "2 Players", "English 2 players label");
  assert(t("gate23Title").includes("Both Homes Unlocked Gate 23"), "English dual gate title");
  assert(t("winReasonSquad", { team: 1 }).includes("ALL 6 COINS ENTERED 5/5 SQUAD"), "English squad win with param substitution");

  toggleLanguage();
  assert(getLanguage() === "te", "Language toggled to Telugu");
  assert(t("appTitle") === "బాఱఖట్టా", "Telugu app title is బాఱఖట్టా");
  assert(t("twoPlayers") === "2 గురు ఆటగాళ్ళు", "Telugu 2 players label");
  assert(t("gate23Title").includes("రెండు హోమ్‌ల గేట్ 23"), "Telugu dual gate title");
  assert(t("winReasonSquad", { team: 1 }).includes("6 గువ్వలూ 5/5 స్క్వాడ్‌లోకి చేరాయి"), "Telugu squad win description");

  toggleLanguage();
  assert(getLanguage() === "en", "Language toggles back to English");

  // 19. Test Multi-Coin Co-existence & Movement in Same Box (Along Path & Home)
  console.log("\n--- Test 19: Multiple Friendly Coins in Same Box & Independent Movement ---");
  const multiCoinEngine = new BharakhattaEngine({ gameMode: "2p" });
  const team1Coins = multiCoinEngine.getTeamCoins(1);

  // Setup: Coin 1 is at step 3 (Box 3), Coin 2 is at step 0 (Home Base)
  team1Coins[0].inJail = false;
  team1Coins[0].stepIndex = 3;
  team1Coins[0].coord = { ...pathH1[3] };

  team1Coins[1].inJail = false;
  team1Coins[1].stepIndex = 0;
  team1Coins[1].coord = { ...pathH1[0] };

  multiCoinEngine.status = GAME_STATUS.WAITING_FOR_MOVE;
  multiCoinEngine.lastRoll = { score: 3, isBonus: false, releasesCoins: 0 };
  const legalMovesRoll3 = multiCoinEngine.getLegalMoves(1, 3);

  // Legal moves should include:
  // 1) Moving Coin 2 from Step 0 -> Step 3 (joining Coin 1 in Box 3!)
  // 2) Moving Coin 1 from Step 3 -> Step 6
  const moveToSameBox = legalMovesRoll3.find(m => m.coin.id === team1Coins[1].id && m.toStep === 3);
  assert(moveToSameBox !== undefined, "Coin 2 at Home can legally move to Step 3 (Box 3) where Coin 1 is already present");

  // Execute the move of Coin 2 to Box 3
  multiCoinEngine.executeMove(moveToSameBox, true, true);
  assert(team1Coins[0].stepIndex === 3, "Coin 1 remains at Step 3 (Box 3)");
  assert(team1Coins[1].stepIndex === 3, "Coin 2 successfully moved into Step 3 (Box 3)");
  assert(team1Coins[0].coord.r === pathH1[3].r && team1Coins[0].coord.c === pathH1[3].c, "Coin 1 coordinate matches Step 3");
  assert(team1Coins[1].coord.r === pathH1[3].r && team1Coins[1].coord.c === pathH1[3].c, "Coin 2 coordinate matches Step 3");
  assert(!team1Coins[0].inJail && !team1Coins[1].inJail, "Friendly coins co-exist without capturing or jailing each other");

  // Now, both Coin 1 and Coin 2 are in Box 3 (step 3).
  // Simulate next turn with roll = 2
  multiCoinEngine.status = GAME_STATUS.WAITING_FOR_MOVE;
  multiCoinEngine.lastRoll = { score: 2, isBonus: false, releasesCoins: 0 };
  const legalMovesRoll2 = multiCoinEngine.getLegalMoves(1, 2);

  const moveCoin1 = legalMovesRoll2.find(m => m.coin.id === team1Coins[0].id && m.toStep === 5);
  const moveCoin2 = legalMovesRoll2.find(m => m.coin.id === team1Coins[1].id && m.toStep === 5);
  assert(moveCoin1 !== undefined && moveCoin2 !== undefined, "Both coins in Box 3 have independent valid moves to Step 5");

  // Move Coin 1 out of Box 3 to Step 5
  multiCoinEngine.executeMove(moveCoin1, true, true);
  assert(team1Coins[0].stepIndex === 5, "Coin 1 moved forward to Step 5");
  assert(team1Coins[1].stepIndex === 3, "Coin 2 stayed safely behind in Step 3 (Box 3)");

  // Test 3 coins sharing a box: Add Coin 3 and Coin 4 to Step 5
  team1Coins[2].inJail = false;
  team1Coins[2].stepIndex = 5;
  team1Coins[2].coord = { ...pathH1[5] };

  team1Coins[3].inJail = false;
  team1Coins[3].stepIndex = 5;
  team1Coins[3].coord = { ...pathH1[5] };

  const coinsAtStep5 = team1Coins.filter(c => c.stepIndex === 5);
  assert(coinsAtStep5.length === 3, "3 friendly coins co-exist seamlessly in Step 5");

  console.log(`\n===================================`);
  console.log(`TEST RESULTS: ${passed} / ${total} PASSED!`);
  console.log(`===================================\n`);
}

runTests();
