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
    this.pathStyle = options.pathStyle || "spiral"; // 'spiral' (traditional 3-ring spiral) or 'classic'
    this.requireKill = options.requireKill !== undefined ? options.requireKill : true;

    this.onStateChange = options.onStateChange || (() => {});
    this.onLog = options.onLog || (() => {});
    this.onTurnChange = options.onTurnChange || (() => {});
    this.onBothGatesOpen = options.onBothGatesOpen || (() => {});
    this.isMultiplayer = options.isMultiplayer || false;
    this.isHost = options.isHost !== undefined ? options.isHost : true;
    this.bothGatesPrompted = false;

    this.initGame();
  }

  initGame(customPlayers = null) {
    this.bothGatesPrompted = false;
    // 2p Mode: Player 1 (Team 1) vs Player 2 (Team 2)
    // 4p Mode: P1 & P3 (Team 1) vs P2 & P4 (Team 2)
    if (customPlayers && Array.isArray(customPlayers) && customPlayers.length > 0) {
      this.players = customPlayers.map(p => ({ ...p }));
      this.gameMode = this.players.length >= 4 ? "4p" : "2p";
    } else if (this.isMultiplayer) {
      // In online multiplayer 2P, both players are human (never auto-roll!)
      this.players = [
        { id: 1, team: 1, name: "Player 1", avatar: "👑", color: "#e67e22", isAI: false },
        { id: 2, team: 2, name: "Player 2", avatar: "🦚", color: "#27ae60", isAI: false }
      ];
    } else if (this.gameMode === "4p") {
      this.players = [
        { id: 1, team: 1, name: "Player 1", avatar: "👑", color: "#e67e22", isAI: false },
        { id: 2, team: 2, name: "System AI 1", avatar: "🦚", color: "#27ae60", isAI: true },
        { id: 3, team: 1, name: "Player 3", avatar: "🦁", color: "#d35400", isAI: false },
        { id: 4, team: 2, name: "System AI 2", avatar: "🦜", color: "#16a085", isAI: true }
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
    this.lastRoll = null;
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
    this.lastRoll = rollResult;

    // Shake folded palm for 2 seconds (2000ms) per user requirement:
    // "the first step is palm folded (per image) -> shake palm 2 sec -> release palm -> show shells only not palm"
    // "once palm shake over show the number on screen instead palm fold"
    setTimeout(() => {
      this.resolveRoll(rollResult);
    }, 2000);

    return rollResult;
  }

  resolveRoll(rollResult) {
    const player = this.getCurrentPlayer();
    const teamId = player.team;
    const score = rollResult.score;
    this.lastRoll = rollResult;

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
      // Once palm shake is over, show the number on screen instead of palm fold!
      this.status = GAME_STATUS.WAITING_FOR_MOVE;
      this.emitChange();
      this.log(`⚠️ No valid moves possible with roll of ${score}.`);

      // Even if bonus was rolled, if no moves exist, turn continues or ends?
      // If bonus was rolled (1, 5, 6, 12), player gets to roll again!
      // After toss wait 1.2s so player clearly sees the settled number on screen
      if (rollResult.isBonus) {
        this.stats.bonusTurnsCount++;
        this.log(`✨ Bonus roll allowed ${player.name} another roll!`);
        setTimeout(() => {
          this.status = GAME_STATUS.WAITING_FOR_ROLL;
          this.currentRoll = null;
          this.validMoves = [];
          this.emitChange();
          this.checkAITurn();
        }, 1200);
      } else {
        // Pass turn after 1.2s so player clearly sees the settled number on screen
        setTimeout(() => {
          this.advanceTurn();
        }, 1200);
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

    // Rule: Can release from jail ONLY on roll of 1 (Okkati), releasing exactly 1 coin
    const canReleaseFromJail = (score === 1) && jailCoins.length > 0;

    if (canReleaseFromJail) {
      moves.push({
        type: "RELEASE_JAIL",
        coin: jailCoins[0],
        count: 1,
        description: `Release 1 coin (#${jailCoins[0].num}) from Jail to Home base`
      });
    }

    // Rule: Moving active coins along the path
    const activeCoins = teamCoins.filter(c => !c.inJail && !c.isFinished);
    const hasKill = teamId === 1 ? this.team1Kills > 0 : this.team2Kills > 0;

    for (const coin of activeCoins) {
      const finishStep = path.length - 1; // Center Sanctum step (48 in spiral)

      // Step 23 & Inside 5/5 Ring Entry Rule:
      // Outer perimeter is 24 squares (step 0 to step 23).
      // If team has 0 kills, coin CANNOT enter the inside 5/5 ring (step 24+).
      // Must land EXACTLY on Step 23. If roll overshoots 23 (e.g. at step 22 rolling 2+), NO MOVE is possible!
      if (this.requireKill && !hasKill) {
        if (coin.stepIndex === 23) {
          // Already stopped at step 23 waiting for kill: cannot move forward
          continue;
        } else if (coin.stepIndex < 23) {
          if (coin.stepIndex + score > 23) {
            // Cannot overshoot Gate 23 without a kill! E.g. at step 22, rolling 2+ gives no move
            continue;
          } else if (coin.stepIndex + score === 23) {
            // Exact landing on Gate 23!
            const targetCoord = path[23];
            moves.push({
              type: "MOVE_COIN",
              coin,
              fromStep: coin.stepIndex,
              toStep: 23,
              targetCoord,
              isCapture: this.checkWillCapture(teamId, targetCoord),
              isSafe: targetCoord.safe || isSafeSquare(targetCoord.r, targetCoord.c),
              description: `Advance coin #${coin.num} to Step 23 (Gate 23! Opponent kill needed to enter inside 5/5 ring)`
            });
            continue;
          }
        }
      }

      const targetStep = coin.stepIndex + score;

      if (targetStep < finishStep) {
        // Normal move along path
        const targetCoord = path[targetStep];
        const isEnteringInside = coin.stepIndex <= 23 && targetStep > 23;
        moves.push({
          type: "MOVE_COIN",
          coin,
          fromStep: coin.stepIndex,
          toStep: targetStep,
          targetCoord,
          isCapture: this.checkWillCapture(teamId, targetCoord),
          isSafe: targetCoord.safe || isSafeSquare(targetCoord.r, targetCoord.c),
          description: isEnteringInside
            ? `Advance coin #${coin.num} into Inside 5/5 Ring (Step ${targetStep})!`
            : `Move coin #${coin.num} to (${targetCoord.r}, ${targetCoord.c})`
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
          description: `Goal! Coin #${coin.num} enters the Center Sanctum (Final Home)!`
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
  executeMove(move, force = false, instant = false) {
    if (!move) return;
    if (!force && this.status !== GAME_STATUS.WAITING_FOR_MOVE) return;

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

      const isBonus = this.currentRoll ? this.currentRoll.isBonus : false;
      this.finishMove(isBonus);
    } else if (move.type === "MOVE_COIN" || move.type === "FINISH_COIN") {
      // Find actual internal coin instance
      const coin = (move.coin && move.coin.id)
        ? (this.coins.find(c => c.id === move.coin.id) || move.coin)
        : move.coin;
      const startStep = coin.stepIndex;
      const endStep = move.toStep;
      const isLooped = move.looped;

      const onHopDone = () => {
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

            this.log(`⚡ Katta strike earned ${player.name} a Bonus Turn! Inside 5/5 ring unlocked.`);

            // Dual Gate 23 Unlock Rule: when both teams have made at least 1 kill
            if (this.team1Kills >= 1 && this.team2Kills >= 1 && !this.bothGatesPrompted) {
              this.bothGatesPrompted = true;
              this.log(`⚔️ Both Home 1 and Home 2 have unlocked Gate 23!`);
              if (this.onBothGatesOpen) {
                this.onBothGatesOpen();
              }
            }
          }
        }

        // Check if game won:
        // 1. Traditional: all 6 coins reached Center Sanctum
        // 2. Squad Escape: all 6 coins safely entered inside 5/5 squad (zero coins left in outer 7/7 or jail)
        const allInSanctum = this.checkWinCondition(teamId);
        const allIn5x5Squad = this.checkSquad5x5Win(teamId);

        if (allInSanctum || allIn5x5Squad) {
          const reason = allIn5x5Squad && !allInSanctum ? "SQUAD_5X5_COMPLETE" : "CENTER_SANCTUM";
          this.winner = {
            team: teamId,
            player: player,
            reason,
            stats: { ...this.stats, durationSec: Math.round((Date.now() - this.stats.startTime) / 1000) }
          };
          this.status = GAME_STATUS.GAME_OVER;
          sounds.playVictory();
          if (reason === "SQUAD_5X5_COMPLETE") {
            this.log(`🏆 ALL 6 COINS ENTERED 5/5 SQUAD! Team ${teamId} has no coins left in outer 7/7 zone! Team ${teamId} Wins!`);
          } else {
            this.log(`🏆 GAME OVER! Team ${teamId} has won the game of Bharakhatta! Congratulations!`);
          }
          this.emitChange();
          return;
        }

        // Determine if player gets another turn:
        // Bonus roll (1, 5, 6, 12) OR capture ("Kill") grants bonus turn!
        const isBonus = this.currentRoll ? this.currentRoll.isBonus : false;
        const getsBonusTurn = isBonus || captured;
        this.finishMove(getsBonusTurn);
      };

      if (instant) {
        onHopDone();
      } else {
        this.animateCoinHop(coin, path, startStep, endStep, isLooped, onHopDone);
      }
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
    if (this.currentRoll) {
      this.lastRoll = this.currentRoll;
    }

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
    if (this.currentRoll) {
      this.lastRoll = this.currentRoll;
    }
    this.currentRoll = null;
    this.validMoves = [];
    this.status = GAME_STATUS.WAITING_FOR_ROLL;

    const nextPlayer = this.getCurrentPlayer();
    this.log(`👉 Turn: ${nextPlayer.name} (Team ${nextPlayer.team})`);
    this.emitChange();

    if (this.onTurnChange) {
      this.onTurnChange(nextPlayer);
    }

    this.checkAITurn();
  }

  getBestLegalMove() {
    if (this.validMoves.length === 0) return null;

    let bestMove = this.validMoves[0];
    let bestScore = -999;

    for (const move of this.validMoves) {
      let score = 0;
      if (move.type === "FINISH_COIN") score += 500;
      if (move.isCapture) score += 400;
      if (move.type === "RELEASE_JAIL") score += 250 + (move.count || 1) * 20;
      if (move.isSafe) score += 150;
      if (move.type === "MOVE_COIN") score += move.toStep;

      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }
    return bestMove;
  }

  autoPlayTurn() {
    if (this.status === GAME_STATUS.WAITING_FOR_ROLL) {
      return this.roll();
    } else if (this.status === GAME_STATUS.WAITING_FOR_MOVE) {
      const best = this.getBestLegalMove();
      if (best) {
        this.executeMove(best);
        return best;
      }
    }
    return null;
  }

  // Check if there is only 1 coin out of jail, or only 1 single legal move possible
  // In that case, no choice is needed from the player -> auto-move upon toss!
  getSingleMovableMove() {
    if (this.status !== GAME_STATUS.WAITING_FOR_MOVE) return null;
    if (!this.validMoves || this.validMoves.length === 0) return null;

    const currentTeam = this.getCurrentTeam();
    const teamCoins = this.getTeamCoins(currentTeam);
    const activeCoins = teamCoins.filter(c => !c.inJail && !c.isFinished);

    // If exactly 1 coin is out of jail:
    if (activeCoins.length === 1) {
      const coinMoves = this.validMoves.filter(m => m.type === "MOVE_COIN" || m.type === "FINISH_COIN");
      // If no jail release option exists (e.g. roll was not 1):
      if (coinMoves.length === 1 && !this.validMoves.some(m => m.type === "RELEASE_JAIL")) {
        return coinMoves[0];
      }
      if (this.validMoves.length === 1) {
        return this.validMoves[0];
      }
    }

    // If only 1 move is possible across the board:
    if (this.validMoves.length === 1) {
      return this.validMoves[0];
    }

    return null;
  }

  checkWinCondition(teamId) {
    const finishedCoins = this.getFinishedCoins(teamId);
    return finishedCoins.length === 6;
  }

  // 6 out of 6 enter 5/5 Squad win condition:
  // All 6 coins of the team have entered step 24+ or finished in center sanctum,
  // leaving 0 coins in jail and 0 coins in outer 7/7 perimeter track for opponent to kill!
  checkSquad5x5Win(teamId) {
    const coins = this.getTeamCoins(teamId);
    if (coins.length !== 6) return false;
    return coins.every(c => !c.inJail && (c.stepIndex >= 24 || c.isFinished));
  }

  checkAITurn() {
    const player = this.getCurrentPlayer();
    // Human players NEVER auto-roll!
    if (!player.isAI || this.status === GAME_STATUS.GAME_OVER) return;

    // In multiplayer: if not host, host will broadcast AI action
    if (this.isMultiplayer && !this.isHost) return;

    if (this.status === GAME_STATUS.WAITING_FOR_ROLL) {
      setTimeout(() => {
        this.roll();
      }, 900);
    } else if (this.status === GAME_STATUS.WAITING_FOR_MOVE) {
      setTimeout(() => {
        this.executeAIMove();
      }, 1000);
    }
  }

  executeAIMove() {
    const bestMove = this.getBestLegalMove();
    if (bestMove) {
      this.executeMove(bestMove);
    }
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
      lastRoll: this.lastRoll,
      coins: this.coins.map(c => ({ ...c })),
      validMoves: this.validMoves,
      winner: this.winner,
      team1Kills: this.team1Kills,
      team2Kills: this.team2Kills,
      stats: { ...this.stats }
    };
  }

  applyStateSnapshot(snapshot) {
    if (!snapshot) return;
    this.status = snapshot.status;
    this.gameMode = snapshot.gameMode || this.gameMode;
    if (snapshot.players && Array.isArray(snapshot.players)) {
      this.players = snapshot.players.map(p => ({ ...p }));
    }
    if (snapshot.currentPlayer) {
      const idx = this.players.findIndex(p => p.id === snapshot.currentPlayer.id);
      if (idx !== -1) {
        this.currentPlayerIndex = idx;
      }
    }
    this.currentRoll = snapshot.currentRoll || null;
    if (snapshot.lastRoll) {
      this.lastRoll = snapshot.lastRoll;
    }
    if (snapshot.coins && Array.isArray(snapshot.coins)) {
      this.coins = snapshot.coins.map(c => ({ ...c }));
    }
    this.validMoves = snapshot.validMoves || [];
    this.winner = snapshot.winner || null;
    if (snapshot.team1Kills !== undefined) this.team1Kills = snapshot.team1Kills;
    if (snapshot.team2Kills !== undefined) this.team2Kills = snapshot.team2Kills;
    if (snapshot.stats) {
      this.stats = { ...snapshot.stats };
    }
    this.emitChange();
  }
}
