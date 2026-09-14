// Core Game Rules Engine for Bharakhatta (Baara Katta)

import {
  isSafeSquare,
  isCenterSquare,
  getPlayerPath,
  JAIL_COORDS
} from "./board.js";
import { CowrieDice } from "./cowries.js";
import { sounds } from "../audio/soundManager.js";

export const GAME_STATUS = {
  NOT_STARTED: "NOT_STARTED",
  WAITING_FOR_ROLL: "WAITING_FOR_ROLL",
  ROLLING: "ROLLING",
  WAITING_FOR_MOVE: "WAITING_FOR_MOVE",
  ANIMATING_MOVE: "ANIMATING_MOVE",
  GAME_OVER: "GAME_OVER"
};

export class BharakhattaEngine {
  constructor(options = {}) {
    this.dice = new CowrieDice();
    this.diceMode = options.diceMode || "cowries"; // 'cowries' or 'die'
    this.gameMode = options.gameMode || "2p"; // '2p' (1v1) or '4p' (2v2)
    this.pathStyle = options.pathStyle || "classic"; // 'classic' (ludo-style home stretch) or 'spiral' (traditional 3-ring spiral)
    this.requireKill = options.requireKill !== undefined ? options.requireKill : true;

    this.onStateChange = options.onStateChange || (() => {});
    this.onLog = options.onLog || (() => {});

    this.initGame();
  }

  initGame() {
    // 2p Mode: Player 1 (Team 1) vs Player 2 (Team 2)
    // 4p Mode: P1 & P3 (Team 1) vs P2 & P4 (Team 2)
    if (this.gameMode === "4p") {
      this.players = [
        { id: 1, team: 1, name: "Player 1", avatar: "👑", color: "#e67e22", isAI: false },
        { id: 2, team: 2, name: "Player 2", avatar: "🦚", color: "#27ae60", isAI: false },
        { id: 3, team: 1, name: "Player 3", avatar: "🦁", color: "#d35400", isAI: false },
        { id: 4, team: 2, name: "Player 4", avatar: "🦜", color: "#16a085", isAI: false }
      ];
    } else {
      this.players = [
        { id: 1, team: 1, name: "Player 1 (Bottom)", avatar: "👑", color: "#e67e22", isAI: false },
        { id: 2, team: 2, name: "Player 2 (Top)", avatar: "🦚", color: "#27ae60", isAI: true }
      ];
    }

    // 6 Coins for Team 1 (Bottom), 6 Coins for Team 2 (Top)
    this.coins = [];
    for (let i = 1; i <= 6; i++) {
      this.coins.push({
        id: `t1_c${i}`,
        num: i,
        team: 1,
        inJail: true,
        stepIndex: -1,
        isFinished: false,
        coord: { ...JAIL_COORDS.team1 }
      });
      this.coins.push({
        id: `t2_c${i}`,
        num: i,
        team: 2,
        inJail: true,
        stepIndex: -1,
        isFinished: false,
        coord: { ...JAIL_COORDS.team2 }
      });
    }

    this.currentPlayerIndex = 0;
    this.currentRoll = null;
    this.status = GAME_STATUS.WAITING_FOR_ROLL;
    this.validMoves = [];
    this.winner = null;

    this.team1Kills = 0;
    this.team2Kills = 0;

    this.stats = {
      rollsCount: 0,
      capturesCount: 0,
      bonusTurnsCount: 0,
      startTime: Date.now()
    };

    this.emitChange();
    this.log("🎮 Game initialized! Welcome to Bharakhatta. Team 1 starts.");
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  getCurrentTeam() {
    return this.getCurrentPlayer().team;
  }

  getTeamCoins(teamId) {
    return this.coins.filter(c => c.team === teamId);
  }

  getCoinsAtCoord(r, c) {
    return this.coins.filter(coin => !coin.inJail && !coin.isFinished && coin.coord.r === r && coin.coord.c === c);
  }

  getJailCoins(teamId) {
    return this.coins.filter(c => c.team === teamId && c.inJail);
  }

  getFinishedCoins(teamId) {
    return this.coins.filter(c => c.team === teamId && c.isFinished);
  }

  // Roll dice action
  roll() {
    if (this.status !== GAME_STATUS.WAITING_FOR_ROLL) return null;

    const player = this.getCurrentPlayer();
    this.status = GAME_STATUS.ROLLING;
    this.stats.rollsCount++;

    sounds.playCowrieRoll();
    this.emitChange();

    let rollResult;
    if (this.diceMode === "die") {
      rollResult = this.dice.rollDie();
    } else {
      rollResult = this.dice.roll();
    }

    this.currentRoll = rollResult;

    // After roll animation settles (~600ms)
    setTimeout(() => {
      this.resolveRoll(rollResult);
    }, 600);

    return rollResult;
  }

  resolveRoll(rollResult) {
    const player = this.getCurrentPlayer();
    const teamId = player.team;
    const score = rollResult.score;

    if (rollResult.score === 12) {
      sounds.playBaaraTwelve();
    } else if (rollResult.isBonus) {
      sounds.playBonusRoll();
    }

    this.log(`🎲 ${player.name} rolled ${rollResult.titleEn} (${score})! ${rollResult.isBonus ? "⭐ Bonus Turn Awarded!" : ""}`);

    // Compute legal moves
    const moves = this.getLegalMoves(teamId, score);
    this.validMoves = moves;

    if (moves.length === 0) {
      // No moves possible (e.g. rolled 2, 3, 4 with all coins in jail, or all active coins blocked)
      this.log(`⚠️ No valid moves possible with roll of ${score}.`);

      // Even if bonus was rolled, if no moves exist, turn continues or ends?
      // If bonus was rolled (1, 5, 6, 12), player gets to roll again!
      if (rollResult.isBonus) {
        this.stats.bonusTurnsCount++;
        this.log(`✨ Bonus roll allowed ${player.name} another roll!`);
        this.status = GAME_STATUS.WAITING_FOR_ROLL;
        this.emitChange();
        this.checkAITurn();
      } else {
        // Pass turn
        setTimeout(() => {
          this.advanceTurn();
        }, 900);
      }
      return;
    }

    // Moves are available!
    this.status = GAME_STATUS.WAITING_FOR_MOVE;
    this.emitChange();

    // Check if AI turn
    this.checkAITurn();
  }

  // Calculate all legal moves for team given a score
  getLegalMoves(teamId, score) {
    const moves = [];
    const teamCoins = this.getTeamCoins(teamId);
    const jailCoins = this.getJailCoins(teamId);
    const path = getPlayerPath(teamId, this.pathStyle);

    // Rule: Can release from jail on 1, 5, 6, 12
    const canReleaseFromJail = (score === 1 || score === 5 || score === 6 || score === 12) && jailCoins.length > 0;

    if (canReleaseFromJail) {
      // How many coins can be released?
      // Roll 1: release 1 coin
      // Roll 5: release up to 5 coins (or all available in jail)
      // Roll 6: release up to 6 coins
      // Roll 12: release up to 6 coins
      let maxRelease = 1;
      if (score === 5) maxRelease = Math.min(5, jailCoins.length);
      else if (score === 6 || score === 12) maxRelease = Math.min(6, jailCoins.length);

      moves.push({
        type: "RELEASE_JAIL",
        coin: jailCoins[0],
        count: maxRelease,
        description: maxRelease > 1 
          ? `Release ${maxRelease} coins from Jail to Home base` 
          : `Release 1 coin (#${jailCoins[0].num}) from Jail to Home base`
      });
    }

    // Rule: Moving active coins along the path
    const activeCoins = teamCoins.filter(c => !c.inJail && !c.isFinished);
    const hasKill = teamId === 1 ? this.team1Kills > 0 : this.team2Kills > 0;

    for (const coin of activeCoins) {
      const targetStep = coin.stepIndex + score;

      // Check if coin reaches or overshoots finish
      const finishStep = path.length - 1; // Center Sanctum step

      // Check inner ring requirement
      const outerRingMaxStep = 23;
      const isTryingToEnterInner = targetStep > outerRingMaxStep;

      if (this.requireKill && !hasKill && isTryingToEnterInner) {
        // Without a kill, coin must continue looping the outer ring!
        // Loop back: stepIndex becomes (targetStep % 24)
        const loopedStep = targetStep % 24;
        const targetCoord = path[loopedStep];
        moves.push({
          type: "MOVE_COIN",
          coin,
          fromStep: coin.stepIndex,
          toStep: loopedStep,
          targetCoord,
          looped: true,
          description: `Advance coin #${coin.num} by ${score} steps (looping outer track, kill needed for inner ring)`
        });
      } else if (targetStep < finishStep) {
        // Normal move along path
        const targetCoord = path[targetStep];
        moves.push({
          type: "MOVE_COIN",
          coin,
          fromStep: coin.stepIndex,
          toStep: targetStep,
          targetCoord,
          isCapture: this.checkWillCapture(teamId, targetCoord),
          isSafe: targetCoord.safe || isSafeSquare(targetCoord.r, targetCoord.c),
          description: `Move coin #${coin.num} to (${targetCoord.r}, ${targetCoord.c})`
        });
      } else if (targetStep === finishStep) {
        // Exact landing on Center Sanctum: FINISH!
        const targetCoord = path[finishStep];
        moves.push({
          type: "FINISH_COIN",
          coin,
          fromStep: coin.stepIndex,
          toStep: finishStep,
          targetCoord,
          description: `Goal! Coin #${coin.num} enters the Center Sanctum!`
        });
      }
      // If targetStep > finishStep: overshot center, cannot move this coin with this roll
    }

    return moves;
  }

  // Check if landing on (r, c) captures an opponent coin
  checkWillCapture(teamId, targetCoord) {
    if (isSafeSquare(targetCoord.r, targetCoord.c)) return false;
    const opponentTeam = teamId === 1 ? 2 : 1;
    const occupants = this.getCoinsAtCoord(targetCoord.r, targetCoord.c);
    return occupants.some(c => c.team === opponentTeam);
  }

  // Execute a selected move
  executeMove(move) {
    if (this.status !== GAME_STATUS.WAITING_FOR_MOVE) return;

    this.status = GAME_STATUS.ANIMATING_MOVE;
    this.validMoves = [];
    this.emitChange();

    const player = this.getCurrentPlayer();
    const teamId = player.team;
    const path = getPlayerPath(teamId, this.pathStyle);

    if (move.type === "RELEASE_JAIL") {
      // Release coin(s) from jail to Home square
      const jailCoins = this.getJailCoins(teamId);
      const countToRelease = move.count || 1;
      const homeCoord = path[0];

      sounds.playJailRelease();

      for (let i = 0; i < countToRelease && i < jailCoins.length; i++) {
        const c = jailCoins[i];
        c.inJail = false;
        c.stepIndex = 0;
        c.coord = { r: homeCoord.r, c: homeCoord.c };
      }

      this.log(`🚪 ${player.name} released ${countToRelease} coin(s) from Jail onto Home Base!`);

      this.finishMove(this.currentRoll.isBonus);
    } else if (move.type === "MOVE_COIN" || move.type === "FINISH_COIN") {
      const coin = move.coin;
      const startStep = coin.stepIndex;
      const endStep = move.toStep;
      const isLooped = move.looped;

      // Animate hop step by step
      this.animateCoinHop(coin, path, startStep, endStep, isLooped, () => {
        coin.stepIndex = endStep;
        coin.coord = { ...move.targetCoord };

        if (move.type === "FINISH_COIN") {
          coin.isFinished = true;
          sounds.playBaaraTwelve();
          this.log(`🎉 Goal! ${player.name}'s Coin #${coin.num} reached the Center Sanctum!`);
        }

        // Check capture
        let captured = false;
        if (!isSafeSquare(coin.coord.r, coin.coord.c)) {
          const opponentTeam = teamId === 1 ? 2 : 1;
          const victims = this.getCoinsAtCoord(coin.coord.r, coin.coord.c).filter(c => c.team === opponentTeam);

          if (victims.length > 0) {
            captured = true;
            this.stats.capturesCount++;
            if (teamId === 1) this.team1Kills++;
            else this.team2Kills++;

            sounds.playCapture();

            victims.forEach(v => {
              v.inJail = true;
              v.stepIndex = -1;
              v.coord = { ...(v.team === 1 ? JAIL_COORDS.team1 : JAIL_COORDS.team2) };
              this.log(`💥 Katta! ${player.name} killed Team ${opponentTeam}'s Coin #${v.num}! Returned to Jail.`);
            });

            this.log(`⚡ Katta strike earned ${player.name} a Bonus Turn! Inner ring unlocked.`);
          }
        }

        // Check if game won
        if (this.checkWinCondition(teamId)) {
          this.winner = {
            team: teamId,
            player: player,
            stats: { ...this.stats, durationSec: Math.round((Date.now() - this.stats.startTime) / 1000) }
          };
          this.status = GAME_STATUS.GAME_OVER;
          sounds.playVictory();
          this.log(`🏆 GAME OVER! Team ${teamId} has won the game of Bharakhatta! Congratulations!`);
          this.emitChange();
          return;
        }

        // Determine if player gets another turn:
        // Bonus roll (1, 5, 6, 12) OR capture ("Kill") grants bonus turn!
        const getsBonusTurn = this.currentRoll.isBonus || captured;
        this.finishMove(getsBonusTurn);
      });
    }
  }

  // Step-by-step hopping animation
  animateCoinHop(coin, path, fromStep, toStep, isLooped, onDone) {
    let current = fromStep;
    const stepsQueue = [];

    if (isLooped) {
      // Traveled to 23, then wrapped around
      for (let s = fromStep + 1; s <= 23; s++) stepsQueue.push(s);
      for (let s = 0; s <= toStep; s++) stepsQueue.push(s);
    } else {
      for (let s = fromStep + 1; s <= toStep; s++) stepsQueue.push(s);
    }

    if (stepsQueue.length === 0) {
      onDone();
      return;
    }

    const stepInterval = Math.max(70, Math.min(150, 600 / stepsQueue.length));

    const nextStep = () => {
      if (stepsQueue.length === 0) {
        onDone();
        return;
      }
      const s = stepsQueue.shift();
      coin.coord = { r: path[s].r, c: path[s].c };
      sounds.playCoinStep();
      this.emitChange();
      setTimeout(nextStep, stepInterval);
    };

    nextStep();
  }

  finishMove(getsBonusTurn) {
    const player = this.getCurrentPlayer();

    if (getsBonusTurn) {
      this.stats.bonusTurnsCount++;
      this.log(`✨ ${player.name} gets a BONUS TURN! Roll again.`);
      this.status = GAME_STATUS.WAITING_FOR_ROLL;
      this.currentRoll = null;
      this.validMoves = [];
      this.emitChange();
      this.checkAITurn();
    } else {
      setTimeout(() => {
        this.advanceTurn();
      }, 500);
    }
  }

  advanceTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    this.currentRoll = null;
    this.validMoves = [];
    this.status = GAME_STATUS.WAITING_FOR_ROLL;

    const nextPlayer = this.getCurrentPlayer();
    this.log(`👉 Turn: ${nextPlayer.name} (Team ${nextPlayer.team})`);
    this.emitChange();

    this.checkAITurn();
  }

  checkWinCondition(teamId) {
    const finishedCoins = this.getFinishedCoins(teamId);
    return finishedCoins.length === 6;
  }

  checkAITurn() {
    const player = this.getCurrentPlayer();
    if (!player.isAI || this.status === GAME_STATUS.GAME_OVER) return;

    if (this.status === GAME_STATUS.WAITING_FOR_ROLL) {
      setTimeout(() => {
        this.roll();
      }, 900);
    } else if (this.status === GAME_STATUS.WAITING_FOR_MOVE) {
      setTimeout(() => {
        this.executeAIMove();
      }, 800);
    }
  }

  executeAIMove() {
    if (this.validMoves.length === 0) return;

    // AI Heuristics:
    // 1. Capture opponent pawn (huge priority)
    // 2. Reach center sanctum (finish coin)
    // 3. Release coins from jail (bring pawns into play)
    // 4. Move to a safe 'X' square
    // 5. Advance furthest forward coin
    let bestMove = this.validMoves[0];
    let bestScore = -999;

    for (const move of this.validMoves) {
      let score = 0;
      if (move.type === "FINISH_COIN") {
        score += 500;
      }
      if (move.isCapture) {
        score += 400;
      }
      if (move.type === "RELEASE_JAIL") {
        score += 250 + (move.count || 1) * 20;
      }
      if (move.isSafe) {
        score += 150;
      }
      if (move.type === "MOVE_COIN") {
        score += move.toStep; // prefer advancing forward
      }

      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }

    this.executeMove(bestMove);
  }

  log(msg) {
    if (this.onLog) {
      this.onLog({
        id: Date.now() + Math.random(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        text: msg
      });
    }
  }

  emitChange() {
    if (this.onStateChange) {
      this.onStateChange(this.getStateSnapshot());
    }
  }

  getStateSnapshot() {
    return {
      status: this.status,
      gameMode: this.gameMode,
      diceMode: this.diceMode,
      pathStyle: this.pathStyle,
      requireKill: this.requireKill,
      players: this.players,
      currentPlayer: this.getCurrentPlayer(),
      currentRoll: this.currentRoll,
      coins: this.coins.map(c => ({ ...c })),
      validMoves: this.validMoves,
      winner: this.winner,
      team1Kills: this.team1Kills,
      team2Kills: this.team2Kills,
      stats: { ...this.stats }
    };
  }
}
