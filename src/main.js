// Main application coordinator for Bharakhatta
// Single-screen mobile layout, 30s Turn Timer, In-Game Chat & Virtual Coin Betting

import "./styles/app.css";
import { BharakhattaEngine, GAME_STATUS } from "./game/engine.js";
import { renderBoard } from "./components/BoardView.js";
import { renderCowrieArea } from "./components/CowrieShellsView.js";
import { renderHeader, renderToastFeed } from "./components/PlayerCards.js";
import { renderRulesModal } from "./components/RulesModal.js";
import { renderVictoryModal } from "./components/VictoryModal.js";
import { renderMobileModal, generateMobileQr } from "./components/MobileModal.js";
import { renderMultiplayerModal } from "./components/MultiplayerModal.js";
import { renderChatDrawer, renderFloatingChatToast, QUICK_TAUNTS } from "./components/ChatDrawer.js";
import { renderBetModal } from "./components/BetModal.js";
import { MultiplayerClient, generateUnique4DigitTableCode } from "./game/multiplayerClient.js";
import { wallet } from "./game/wallet.js";
import { userManager, computeNickName } from "./game/userManager.js";
import { renderLoginModal } from "./components/LoginModal.js";
import { renderComputerMatchModal } from "./components/ComputerMatchModal.js";
import { renderProfileHistoryModal } from "./components/ProfileHistoryModal.js";
import { renderExitConfirmModal, renderInactivityModal } from "./components/ExitModal.js";
import { renderGatePromptModal } from "./components/GatePromptModal.js";
import { renderLobbyView } from "./components/LobbyView.js";
import { renderFriendsHubModal } from "./components/FriendsHubModal.js";
import { renderHomePickerModal } from "./components/HomePickerModal.js";
import { renderCreateRoomModal, renderJoinRoomModal, renderAddFriendModal, renderCelebrationSplash } from "./components/RoomCodeModal.js";
import { renderMatchHistoryModal } from "./components/MatchHistoryModal.js";
import { TurnTimer } from "./game/turnTimer.js";
import { sounds } from "./audio/soundManager.js";
import { haptics } from "./utils/haptics.js";
import { t, getLanguage, toggleLanguage } from "./utils/i18n.js";
import { getOppositeHome } from "./game/board.js";

class BharakhattaApp {
  constructor() {
    this.logs = [];
    this.rulesOpen = false;
    this.mobileOpen = false;
    this.mpModalOpen = false;
    this.chatOpen = false;
    this.betModalOpen = false;
    this.gatePromptOpen = false;
    this.loginModalOpen = !userManager.isLoggedIn();
    this.loginTab = "login";
    this.computerModalOpen = false;
    this.computerPlayerCount = 2;
    this.computerBet = 250;
    this.inLobby = userManager.isLoggedIn();
    this.playerCount = 2; // 2 or 4 players
    this.lobbyMode = "solo";
    this.selectedBet = 250;
    this.profileModalOpen = false;
    this.exitModalOpen = false;
    this.inactivityModalOpen = false;
    this.awayDurationSec = 0;
    this.backgroundTimestamp = null;
    this.loginError = null;
    this.soundMuted = false;
    this.qrDataUrl = null;
    this.roomQrDataUrl = null;

    // Friends Hub & 4-Digit Room Codes (Matching user screenshot)
    this.friendsHubOpen = false;
    this.friendsTab = "create";
    this.friendsSearchQuery = "";
    this.isEditingFriends = false;
    this.createRoomModalOpen = false;
    this.joinRoomModalOpen = false;
    this.addFriendModalOpen = false;
    this.matchHistoryModalOpen = false;
    this.celebrationSplash = { isOpen: false, tableCode: "", friendName: "" };
    this.enteredJoinCode = "";
    this.joinRoomError = null;
    this.addFriendError = null;
    this.roomCreationMode = "2p";
    this.current4DigitCode = generateUnique4DigitTableCode();

    // Dynamic Starting Home Selection & Online Matchmaking
    this.homePickerOpen = false;
    this.homePickerData = null;
    this.isSearchingOnlineMatch = false;
    this.onlineFallbackTimer = null;

    // 1-second ticker for hourly reward countdown and live timers
    this.hourlyTicker = setInterval(() => {
      if (this.friendsHubOpen || this.inLobby) {
        const rewardEl = document.getElementById("btn-lobby-hourly-reward");
        const navRewardEl = document.getElementById("btn-nav-reward");
        const status = userManager.getHourlyRewardStatus();
        const text = status.canClaim ? "Free 500🪙" : `${Math.floor(status.secondsLeft / 60)}m ${status.secondsLeft % 60}s`;
        if (rewardEl) {
          const subEl = rewardEl.querySelector(".ticket-sub");
          const titleEl = rewardEl.querySelector(".ticket-title");
          if (subEl && titleEl) {
            titleEl.textContent = status.canClaim ? t("freeCoinsClaim") : t("freeCoinsBtn");
            subEl.textContent = status.canClaim ? "Free 500 Coins Ready!" : `Wait: ${text}`;
            if (status.canClaim) {
              rewardEl.classList.remove("claim-ticket-cooldown");
              rewardEl.classList.add("claim-ticket-ready");
            } else {
              rewardEl.classList.remove("claim-ticket-ready");
              rewardEl.classList.add("claim-ticket-cooldown");
            }
          } else {
            rewardEl.className = `btn-hourly-reward-lobby ${status.canClaim ? 'reward-claim-glow' : 'reward-wait'}`;
            rewardEl.innerHTML = `<span>🎁</span><span>${text}</span>`;
          }
        }
        if (navRewardEl) {
          navRewardEl.innerHTML = `<span class="nav-icon">🎁</span><span class="nav-label">${text}</span>${status.canClaim ? '<span class="nav-badge-dot">!</span>' : ''}`;
        }
      }
    }, 1000);

    // Betting & Economy
    this.currentBet = 250;
    this.matchPot = 500;
    this.winnerAwarded = false;

    // Chat
    this.chatMessages = [];
    this.activeChatToast = null;
    this.chatToastTimer = null;
    this.unreadChatCount = 0;

    // 30-Second Turn Timer
    this.turnTimer = new TurnTimer({
      duration: 30,
      onTick: (secs) => this.renderTimerOnly(secs),
      onWarning: () => { if (!this.soundMuted) sounds.playCoinStep(); },
      onUrgent: () => { if (!this.soundMuted) sounds.playBonusRoll(); },
      onTimeout: () => this.handleTurnTimeout()
    });

    // Official high-speed GitHub Pages URL
    const githubPagesUrl = "https://maheshwar567.github.io/bharakhatta/";
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    this.baseMobileUrl = isLocal ? githubPagesUrl : window.location.href.split("?")[0].replace(/\/?$/, "/");
    this.localWifiUrl = "http://192.168.31.186:5173/";

    this.selectedHome = 1; // Default starting home base (East H1) - Opponent guaranteed gets opposite base

    this.mpState = {
      isConnected: false,
      roomCode: null,
      myPlayerId: null,
      myTeam: null,
      isHost: false,
      players: [],
      errorMsg: null
    };

    this.mpClient = new MultiplayerClient({
      onRoomCreated: (data) => this.handleRoomCreated(data),
      onRoomJoined: (data) => this.handleRoomJoined(data),
      onPlayerJoined: (player, players) => this.handlePlayerJoined(player, players),
      onPlayerLeft: (playerId, players) => this.handlePlayerLeft(playerId, players),
      onForfeit: (msg) => this.handleRemoteForfeit(msg),
      onSyncRoll: (rollResult) => this.handleRemoteRoll(rollResult),
      onSyncMove: (move) => this.handleRemoteMove(move),
      onSyncRestart: () => this.handleRemoteRestart(),
      onChatReceived: (chatMsg) => this.handleChatReceived(chatMsg),
      onBetSynced: (bet) => this.handleBetSynced(bet),
      onSyncTimeoutPass: (msg) => this.handleRemoteTimeoutPass(msg),
      onStart4pAIPair: (msg) => this.handleStart4pAIPair(msg),
      onSyncGameState: (state) => this.handleRemoteGameState(state),
      onGate23Decision: (decision) => this.handleRemoteGate23Decision(decision),
      onHomeSelected: (msg) => this.handleHomeSelected(msg),
      onError: (msg) => {
        this.mpState.errorMsg = msg;
        this.render();
      },
      onStatusChange: (status) => {
        this.mpState.isConnected = status === "connected";
        this.render();
      }
    });

    // Auto-move timer (1-second pause after toss)
    this.autoMoveTimer = null;
    this.selectedCoinId = null;

    this.initDOM();

    this.engine = new BharakhattaEngine({
      gameMode: "2p",
      diceMode: "cowries",
      onStateChange: () => {
        if (this.engine) {
          this.render();
          this.checkAutoMove();
        }
      },
      onLog: (entry) => this.addLog(entry),
      onTurnChange: (player) => this.handleTurnChange(player),
      onBothGatesOpen: () => this.handleBothGatesOpen(),
      onNeedHomeSelection: (data) => this.handleNeedHomeSelection(data)
    });

    this.bindGlobalKeys();
    this.initMobileAudioUnlock();
    this.initBackgroundDetection();
    this.checkUrlRoomParam();
    if (!this.loginModalOpen && !this.inLobby) {
      this.turnTimer.start();
    }
    this.render();
  }

  startGame(mode = "solo", bet = 250) {
    if (!wallet.canAfford(bet)) {
      alert(`You don't have enough coins (Need 🪙${bet.toLocaleString()}! Current: 🪙${wallet.getBalance().toLocaleString()})`);
      return false;
    }
    wallet.placeBet(bet);
    this.currentBet = bet;
    this.matchPot = bet * 2;
    this.inLobby = false;

    const user = userManager.getCurrentUser();
    const myName = user ? (user.nickName || user.name) : "Player 1";

    if (this.playerCount === 4) {
      if (mode === "4p_solo") {
        this.engine.gameMode = "4p";
        this.engine.initGame([
          { id: 1, team: 1, name: `${myName} (You)`, avatar: "👑", color: "#e67e22", isAI: false },
          { id: 2, team: 2, name: "System AI 1", avatar: "🦚", color: "#27ae60", isAI: true },
          { id: 3, team: 1, name: "Teammate AI", avatar: "🦁", color: "#d35400", isAI: true },
          { id: 4, team: 2, name: "System AI 2", avatar: "🦜", color: "#16a085", isAI: true }
        ], this.selectedHome);
        this.winnerAwarded = false;
        this.turnTimer.start();
        this.engine.log(`🎲 4-Player Solo match started! You & Teammate AI (Team 1) vs System AI Pair (Team 2). Pot: 🪙${this.matchPot.toLocaleString()}`);
        this.render();
        return true;
      }

      // 4P Online (2 Friends + 2 AI Pair or 4 Friends)
      this.mpModalOpen = true;
      this.turnTimer.stop();
      if (!this.mpState.roomCode) {
        this.mpClient.createRoom("4p", myName, null, null, this.currentBet, this.selectedHome);
      }
      this.render();
      return true;
    }

    // 2-Player Modes:
    if (mode === "friend") {
      this.mpModalOpen = true;
      this.turnTimer.stop();
      if (!this.mpState.roomCode) {
        this.mpClient.createRoom("2p", myName, null, null, this.currentBet, this.selectedHome);
      }
      this.render();
      return true;
    }

    // Solo Mode vs System AI:
    this.mpState.roomCode = null;
    this.mpState.myPlayerId = null;
    this.mpState.myTeam = null;
    this.mpState.isHost = false;
    this.mpState.players = [];
    if (this.mpClient) {
      this.mpClient.roomCode = null;
      this.mpClient.myPlayerId = null;
      this.mpClient.myTeam = null;
    }

    this.engine.gameMode = "2p";
    this.engine.initGame([
      { id: 1, team: 1, name: `${myName} (You)`, avatar: "👑", color: "#e67e22", isAI: false },
      { id: 2, team: 2, name: "System AI (Top)", avatar: "🦚", color: "#27ae60", isAI: true }
    ], null);
    this.winnerAwarded = false;
    this.turnTimer.start();
    this.engine.log(`🎲 2-Player Game started vs System AI! Stake: 🪙${bet.toLocaleString()} | Winner Pot: 🪙${this.matchPot.toLocaleString()}`);
    this.render();
    return true;
  }

  handleNeedHomeSelection(data) {
    this.homePickerOpen = true;
    this.homePickerData = data;
    this.render();
  }

  handleHomeSelected(msg) {
    if (this.engine) {
      this.engine.assignHomes(msg.teamId, msg.chosenHome);
      this.homePickerOpen = false;
      this.homePickerData = null;
      this.render();
    }
  }

  async startOnlineQuickMatch() {
    const bet = 250;
    if (!wallet.canAfford(bet)) {
      alert(`You need 🪙${bet.toLocaleString()} coins for Online Matchmaking! Current balance: 🪙${wallet.getBalance().toLocaleString()}`);
      return;
    }

    const user = userManager.getCurrentUser();
    const myName = user ? (user.nickName || user.name) : "Player";
    const userMeta = {
      mobile: user?.mobile || "",
      nickName: user?.nickName || myName,
      fullName: user?.name || myName
    };

    this.isSearchingOnlineMatch = true;
    this.addLog("🌐 Searching for an online player... (4s quick match)");
    this.render();

    if (this.onlineFallbackTimer) {
      clearTimeout(this.onlineFallbackTimer);
      this.onlineFallbackTimer = null;
    }

    // 4-second quick matchmaking fallback to online AI bot
    this.onlineFallbackTimer = setTimeout(() => {
      if (this.isSearchingOnlineMatch) {
        this.isSearchingOnlineMatch = false;
        this.mpClient.cancelFindMatch();
        this.onlineFallbackTimer = null;

        // Instant match with online AI player
        wallet.placeBet(bet);
        this.currentBet = bet;
        this.matchPot = bet * 2;
        this.inLobby = false;
        this.mpState.roomCode = null;
        this.mpState.myPlayerId = null;
        this.mpState.myTeam = null;
        this.mpState.isHost = false;
        this.mpState.players = [];
        if (this.mpClient) {
          this.mpClient.roomCode = null;
          this.mpClient.myPlayerId = null;
          this.mpClient.myTeam = null;
        }

        const botNames = [
          { name: "Arjun (Online)", avatar: "⚡" },
          { name: "Priya (Online)", avatar: "🌸" },
          { name: "Vikram (Online)", avatar: "🛡️" },
          { name: "Sneha (Online)", avatar: "💎" }
        ];
        const bot = botNames[Math.floor(Math.random() * botNames.length)];

        this.engine.gameMode = "2p";
        this.engine.initGame([
          { id: 1, team: 1, name: `${myName} (You)`, avatar: "👑", color: "#e67e22", isAI: false },
          { id: 2, team: 2, name: `${bot.name}`, avatar: bot.avatar, color: "#27ae60", isAI: true }
        ], null);
        this.winnerAwarded = false;
        this.turnTimer.start();
        this.engine.log(`🎲 Matched with ${bot.name}! 1v1 Online Match started. Stake: 🪙${bet.toLocaleString()} | Pot: 🪙${this.matchPot.toLocaleString()}`);
        this.render();
      }
    }, 4000);

    try {
      await this.mpClient.findOnlineMatch(myName, userMeta);
    } catch (e) {
      console.warn("Online match find failed:", e);
    }
  }

  async checkUrlRoomParam() {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");
    if (room) {
      this.mpModalOpen = true;
      try {
        await this.mpClient.joinRoom(room, "Player 2");
      } catch (e) {
        console.error("Auto-join room failed:", e);
      }
    }
  }

  initMobileAudioUnlock() {
    const unlock = () => {
      sounds.init();
      haptics.light();
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("pointerdown", unlock);
    };
    document.addEventListener("touchstart", unlock, { passive: true });
    document.addEventListener("pointerdown", unlock, { passive: true });
  }

  initDOM() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <div id="header-container"></div>
      
      <main class="game-main-content">
        <div id="board-container" class="board-wrapper"></div>
        <div id="cowrie-container" style="width: 100%; display: flex; justify-content: center;"></div>
        <div id="ticker-container" style="width: 100%; display: flex; justify-content: center;"></div>
      </main>

      <div id="modal-container"></div>
    `;
  }

  addLog(entry) {
    this.logs.push(entry);
    if (this.logs.length > 40) this.logs.shift();
    const tickerEl = document.getElementById("ticker-container");
    if (tickerEl) {
      tickerEl.innerHTML = renderToastFeed(this.logs);
    }
  }

  bindGlobalKeys() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space" && !this.rulesOpen && !this.mobileOpen && !this.mpModalOpen && !this.chatOpen && !this.betModalOpen) {
        e.preventDefault();
        this.attemptRoll();
      }
      if (e.key === "Escape") {
        this.rulesOpen = false;
        this.mobileOpen = false;
        this.mpModalOpen = false;
        this.chatOpen = false;
        this.betModalOpen = false;
        this.render();
      }
    });
  }

  handleTurnChange(player) {
    this.selectedCoinId = null;
    if (this.autoMoveTimer) {
      clearTimeout(this.autoMoveTimer);
      this.autoMoveTimer = null;
    }
    this.turnTimer.reset();
    const isMyTurn = this.mpState.roomCode
      ? player.id === this.mpState.myPlayerId
      : !player.isAI;

    if (isMyTurn && !this.soundMuted) {
      sounds.playBaaraTwelve();
      haptics.light();
    }
    this.render();
  }

  handleTurnTimeout() {
    const state = this.engine.getStateSnapshot();
    if (state.status === GAME_STATUS.GAME_OVER) return;

    const isMyTurn = this.mpState.roomCode
      ? state.currentPlayer.id === this.mpState.myPlayerId
      : !state.currentPlayer.isAI;

    if (isMyTurn) {
      this.engine.log(`⏰ Time's up (30s)! No roll chance. Turn forfeited to next player.`);
      if (this.mpState.roomCode) {
        this.mpClient.sendTimeoutPass(this.mpState.myPlayerId);
      }
      this.turnTimer.reset();
      this.engine.advanceTurn();
    } else if (this.mpState.roomCode) {
      this.engine.log(`⏰ Opponent timed out (30s)! No roll chance. Turn forfeited.`);
      this.turnTimer.reset();
      this.engine.advanceTurn();
    } else if (state.currentPlayer.isAI) {
      this.engine.log(`⏰ System AI timed out (30s)! Turn forfeited.`);
      this.turnTimer.reset();
      this.engine.advanceTurn();
    }
  }

  initBackgroundDetection() {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        this.backgroundTimestamp = Date.now();
      } else if (document.visibilityState === "visible") {
        if (this.backgroundTimestamp) {
          const elapsed = Math.floor((Date.now() - this.backgroundTimestamp) / 1000);
          this.backgroundTimestamp = null;
          // If away for more than 2 minutes (120 seconds) during active game:
          if (elapsed >= 120 && this.engine && this.engine.status !== GAME_STATUS.GAME_OVER && !this.loginModalOpen) {
            this.handleInactivityForfeit(elapsed);
          }
        }
      }
    });
  }

  handleInactivityForfeit(awaySec) {
    this.awayDurationSec = awaySec;
    this.turnTimer.stop();

    if (this.mpState.roomCode) {
      // In multiplayer: forfeit match and award pot to remote opponent
      this.engine.log(`⏰ Match forfeited: You were away in other apps for >2 minutes (${Math.floor(awaySec / 60)}m ${awaySec % 60}s).`);
      const myTeam = this.mpState.myTeam || 1;
      this.mpClient.sendForfeit(myTeam, this.mpState.myPlayerId);
      this.engine.forfeit(myTeam);

      // Record forfeit in user history
      userManager.recordMatch({
        matchId: `m_${Date.now()}`,
        opponent: myTeam === 1 ? this.mpClient.guestName : this.mpClient.hostName,
        mode: `Online Room #${this.mpState.roomCode}`,
        bet: this.currentBet,
        pot: this.matchPot,
        result: "FORFEITED",
        coinsChange: -this.currentBet,
        durationSec: Math.round((Date.now() - this.engine.stats.startTime) / 1000),
        kills: myTeam === 1 ? this.engine.team1Kills : this.engine.team2Kills
      });
    } else {
      // Solo play
      this.engine.log(`⏸️ You were away in other apps for >2 minutes (${Math.floor(awaySec / 60)}m ${awaySec % 60}s).`);
    }

    this.inactivityModalOpen = true;
    this.render();
  }

  renderTimerOnly(secs) {
    const timerSecondsEl = document.querySelector(".timer-seconds");
    const timerPillEl = document.querySelector(".turn-timer-pill");
    const cowrieTimerEl = document.querySelector(".turn-timer-sub");

    if (timerSecondsEl) timerSecondsEl.textContent = `${secs}s`;
    if (cowrieTimerEl) cowrieTimerEl.textContent = `⏳ ${secs}s`;

    if (timerPillEl) {
      timerPillEl.classList.remove("timer-normal", "timer-warning", "timer-urgent");
      if (secs <= 5) timerPillEl.classList.add("timer-urgent");
      else if (secs <= 10) timerPillEl.classList.add("timer-warning");
      else timerPillEl.classList.add("timer-normal");
    }
  }

  handleChatReceived(msg) {
    this.chatMessages.push(msg);
    if (!this.chatOpen) {
      this.unreadChatCount++;
      this.showChatToast(msg);
    }
    if (!this.soundMuted) {
      sounds.playCoinStep();
    }
    this.render();
  }

  showChatToast(msg) {
    this.activeChatToast = msg;
    if (this.chatToastTimer) clearTimeout(this.chatToastTimer);
    this.chatToastTimer = setTimeout(() => {
      this.activeChatToast = null;
      this.render();
    }, 3500);
  }

  handleBetSynced(bet) {
    this.currentBet = bet;
    this.matchPot = bet * 2;
    this.engine.log(`🪙 Match bet set to 🪙${bet}! Pot: 🪙${this.matchPot.toLocaleString()}`);
    this.render();
  }

  attemptRoll() {
    const state = this.engine.getStateSnapshot();
    if (state.status !== GAME_STATUS.WAITING_FOR_ROLL) return;
    if (this.mpState.roomCode && state.currentPlayer.id !== this.mpState.myPlayerId) return;
    if (!this.mpState.roomCode && state.currentPlayer.isAI) return;

    this.selectedCoinId = null;
    if (this.autoMoveTimer) {
      clearTimeout(this.autoMoveTimer);
      this.autoMoveTimer = null;
    }

    haptics.rollTumble();
    this.turnTimer.reset();
    const roll = this.engine.roll();
    if (this.mpState.roomCode && roll) {
      this.mpClient.sendRoll(roll);
      setTimeout(() => {
        if (this.mpClient) this.mpClient.sendGameState(this.engine.getStateSnapshot());
      }, 2100);
    }
  }

  attemptMove(move) {
    this.selectedCoinId = null;
    if (this.autoMoveTimer) {
      clearTimeout(this.autoMoveTimer);
      this.autoMoveTimer = null;
    }

    const state = this.engine.getStateSnapshot();
    if (state.status !== GAME_STATUS.WAITING_FOR_MOVE) return;
    if (this.mpState.roomCode && state.currentPlayer.id !== this.mpState.myPlayerId) return;

    haptics.step();
    this.turnTimer.reset();
    this.engine.executeMove(move);
    if (this.mpState.roomCode) {
      this.mpClient.sendMove(move);
      setTimeout(() => {
        if (this.mpClient) this.mpClient.sendGameState(this.engine.getStateSnapshot());
      }, 700);
    }
  }

  checkAutoMove() {
    const state = this.engine.getStateSnapshot();
    if (state.status !== GAME_STATUS.WAITING_FOR_MOVE) {
      if (this.autoMoveTimer) {
        clearTimeout(this.autoMoveTimer);
        this.autoMoveTimer = null;
      }
      return;
    }

    const isMyTurn = this.mpState.roomCode
      ? state.currentPlayer.id === this.mpState.myPlayerId
      : !state.currentPlayer.isAI;

    if (!isMyTurn) {
      if (this.autoMoveTimer) {
        clearTimeout(this.autoMoveTimer);
        this.autoMoveTimer = null;
      }
      return;
    }

    // If an auto-move is already queued, let it finish its 1-second countdown
    if (this.autoMoveTimer) return;

    const singleMove = this.engine.getSingleMovableMove();
    if (singleMove) {
      // Auto move after 1-second pause per user requirement:
      // "after toss wait for a sec for every time"
      // "if there is only one coin from out of jail - dont ask for the user to move do auto move upon toss becuase there is no coin other than one"
      this.engine.log(`⚡ Single movable coin (#${singleMove.coin?.num || 1}) - auto-moving in 1s...`);
      this.autoMoveTimer = setTimeout(() => {
        this.autoMoveTimer = null;
        if (this.engine && this.engine.status === GAME_STATUS.WAITING_FOR_MOVE) {
          this.attemptMove(singleMove);
        }
      }, 1000);
    }
  }

  async handleRoomCreated(data) {
    if (this.onlineFallbackTimer) {
      clearTimeout(this.onlineFallbackTimer);
      this.onlineFallbackTimer = null;
    }
    this.isSearchingOnlineMatch = false;

    this.mpState.roomCode = data.roomCode;
    this.mpState.myPlayerId = data.playerId;
    this.mpState.myTeam = data.team;
    this.mpState.isHost = true;
    this.mpState.players = data.players;
    this.mpState.errorMsg = null;
    this.winnerAwarded = false;

    // Deduct host bet
    wallet.placeBet(this.currentBet);
    this.matchPot = this.currentBet * 2;

    this.engine.isMultiplayer = true;
    this.engine.isHost = true;
    const user = userManager.getCurrentUser();
    const myName = user ? (user.nickName || user.name) : "Player 1";
    const players = [
      { id: 1, team: 1, name: `${myName} (You)`, avatar: "👑", color: "#e67e22", isAI: false },
      { id: 2, team: 2, name: data.isMatchmaking ? "Online Player" : "Player 2 (Friend)", avatar: "🦚", color: "#27ae60", isAI: false }
    ];
    const team1Home = data.team1Home || null;
    this.engine.initGame(players, team1Home);
    this.turnTimer.start();

    if (data.isMatchmaking) {
      this.inLobby = false;
      this.friendsHubOpen = false;
      this.createRoomModalOpen = false;
      this.joinRoomModalOpen = false;
      this.mpModalOpen = false;
      this.engine.log(`⚡ Online match started on Board #${data.roomCode}!`);
    } else {
      const shareUrl = `${this.baseMobileUrl}?room=${data.roomCode}`;
      this.roomQrDataUrl = await generateMobileQr(shareUrl);
      this.engine.log(`🏠 Created Room #${data.roomCode} (Bet 🪙${this.currentBet}). Share code with friend!`);
    }
    this.render();
  }

  async handleRoomJoined(data) {
    if (this.onlineFallbackTimer) {
      clearTimeout(this.onlineFallbackTimer);
      this.onlineFallbackTimer = null;
    }
    this.isSearchingOnlineMatch = false;

    this.mpState.roomCode = data.roomCode;
    this.mpState.myPlayerId = data.playerId;
    this.mpState.myTeam = data.team;
    this.mpState.isHost = false;
    this.mpState.players = data.players;
    this.mpState.errorMsg = null;
    this.winnerAwarded = false;

    if (data.bet) {
      this.currentBet = data.bet;
      this.matchPot = data.bet * 2;
    }
    // Deduct guest bet
    wallet.placeBet(this.currentBet);

    this.engine.isMultiplayer = true;
    this.engine.isHost = false;
    const user = userManager.getCurrentUser();
    const myName = user ? (user.nickName || user.name) : "Player 2";
    const players = [
      { id: 1, team: 1, name: data.isMatchmaking ? "Online Player" : "Player 1 (Friend)", avatar: "👑", color: "#e67e22", isAI: false },
      { id: 2, team: 2, name: `${myName} (You)`, avatar: "🦚", color: "#27ae60", isAI: false }
    ];
    const guestTeam1Home = data.team1Home || null;
    this.engine.initGame(players, guestTeam1Home);
    this.turnTimer.start();

    // Mutual friend exchange: Save host details on guest device
    if (data.hostMobile) {
      userManager.addOrUpdateFriend({
        mobile: data.hostMobile,
        nickName: data.hostNick || "Host",
        fullName: data.hostFullName || data.hostNick || "Host"
      });
    }

    // Direct game auto-start per user requirement (no start button required):
    this.inLobby = false;
    this.joinRoomModalOpen = false;
    this.createRoomModalOpen = false;
    this.friendsHubOpen = false;
    this.mpModalOpen = false;

    // Show celebration splash
    this.celebrationSplash = {
      isOpen: true,
      tableCode: data.roomCode,
      friendName: data.hostNick || "Host"
    };

    const shareUrl = `${this.baseMobileUrl}?room=${data.roomCode}`;
    this.roomQrDataUrl = await generateMobileQr(shareUrl);
    this.engine.log(`🤝 Joined Room #${data.roomCode}! You are Team ${data.team}. Match pot: 🪙${this.matchPot.toLocaleString()}`);
    this.render();

    setTimeout(() => {
      this.celebrationSplash.isOpen = false;
      this.render();
    }, 1500);
  }

  async submitJoinTableCode(rawCode) {
    if (this.isJoiningTable) return;
    const code = (rawCode || this.enteredJoinCode || "").toString().trim().replace(/[^0-9]/g, "").slice(0, 4);
    if (!code || code.length !== 4) {
      this.joinRoomError = "Please enter a valid 4-digit code (e.g. 4821).";
      this.render();
      return;
    }

    this.isJoiningTable = true;
    this.joinRoomError = null;
    this.render();

    const user = userManager.getCurrentUser();
    const myName = user ? (user.nickName || user.name) : "Player 2";
    const userMeta = {
      mobile: user?.mobile || "",
      nickName: user?.nickName || myName,
      fullName: user?.name || myName
    };

    try {
      if (this.mpClient.isHost || this.mpState.isHost) {
        this.mpClient.leaveRoom();
        this.mpState.roomCode = null;
        this.mpState.isHost = false;
      }
      await this.mpClient.joinRoom(code, myName, userMeta);
    } catch (err) {
      this.joinRoomError = err.message || "Failed to connect to table.";
    } finally {
      this.isJoiningTable = false;
      this.render();
    }
  }

  handlePlayerJoined(player, players) {
    this.mpState.players = players;
    this.engine.log(`🎉 ${player.name} connected to Table #${this.mpState.roomCode}! Starting match directly...`);
    sounds.playBonusRoll();
    this.turnTimer.reset();

    // Mutual friend exchange: Save guest details on host device
    if (player.mobile) {
      userManager.addOrUpdateFriend({
        mobile: player.mobile,
        nickName: player.nickName || player.name || "Friend",
        fullName: player.fullName || player.name || "Friend"
      });
    }

    // Direct game auto-start on host screen:
    this.inLobby = false;
    this.createRoomModalOpen = false;
    this.joinRoomModalOpen = false;
    this.friendsHubOpen = false;
    this.mpModalOpen = false;

    // Show celebration splash on host screen
    this.celebrationSplash = {
      isOpen: true,
      tableCode: this.mpState.roomCode,
      friendName: player.nickName || player.name || "Friend"
    };

    if (this.mpState.isHost && this.mpClient) {
      this.mpClient.sendGameState(this.engine.getStateSnapshot());
    }
    this.render();

    setTimeout(() => {
      this.celebrationSplash.isOpen = false;
      this.render();
    }, 1500);
  }

  handlePlayerLeft(playerId, players) {
    this.mpState.players = players;
    this.engine.log(`⚠️ Opponent disconnected / left the table.`);
    if (this.engine && !this.engine.winner && this.engine.status !== GAME_STATUS.GAME_OVER && !this.inLobby) {
      const myTeam = this.mpState.myTeam || 1;
      const oppTeam = myTeam === 1 ? 2 : 1;
      this.engine.forfeit(oppTeam);
    }
    this.render();
  }

  handleRemoteForfeit(msg) {
    this.engine.log(`🚪 Opponent quit the game. You won by default!`);
    const quittingTeam = (msg && msg.quittingTeam) ? msg.quittingTeam : (this.mpState.myTeam === 1 ? 2 : 1);
    if (this.engine && !this.engine.winner) {
      this.engine.forfeit(quittingTeam);
    }
    this.render();
  }

  handleRemoteRoll(rollResult) {
    if (this.autoMoveTimer) {
      clearTimeout(this.autoMoveTimer);
      this.autoMoveTimer = null;
    }

    haptics.rollTumble();
    this.engine.status = GAME_STATUS.ROLLING;
    sounds.playCowrieRoll();
    this.engine.currentRoll = rollResult;
    this.turnTimer.reset();
    this.render();

    setTimeout(() => {
      this.engine.resolveRoll(rollResult);
      this.render();
    }, 2000);
  }

  handleRemoteMove(move) {
    haptics.step();
    // Force execute remote move directly on the authoritative coin instance
    this.engine.executeMove(move, true);
    this.turnTimer.reset();
    this.render();
  }

  handleRemoteGameState(state) {
    if (!state || !this.engine) return;
    this.engine.applyStateSnapshot(state);
    this.render();
  }

  handleBothGatesOpen() {
    this.gatePromptOpen = true;
    sounds.playBaaraTwelve();
    this.render();
  }

  handleGate23Decision(decision) {
    this.gatePromptOpen = false;
    if (this.mpState.roomCode) {
      this.mpClient.sendGate23Decision(decision);
    }
    if (decision === "continue") {
      this.engine.log(`⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad.`);
      this.render();
    } else if (decision === "restart") {
      this.engine.log(`🔄 Restarting match by mutual agreement.`);
      if (this.mpState.roomCode) {
        this.mpClient.sendRestart();
      }
      this.engine.initGame();
      this.turnTimer.start();
      this.render();
    }
  }

  handleRemoteGate23Decision(decision) {
    this.gatePromptOpen = false;
    if (decision === "continue") {
      this.engine.log(`⚔️ Both teams unlocked Gate 23! Game continues toward 5/5 squad.`);
      this.render();
    } else if (decision === "restart") {
      this.engine.log(`🔄 Opponent agreed to restart match from scratch.`);
      this.engine.initGame();
      this.turnTimer.start();
      this.render();
    }
  }

  handleRemoteRestart() {
    this.engine.initGame();
    this.winnerAwarded = false;
    this.turnTimer.start();
    this.engine.log(`🔄 Host restarted the game!`);
    this.render();
  }

  handleRemoteTimeoutPass(msg) {
    this.engine.log(`⏰ Opponent timed out (30s)! No roll chance. Turn forfeited.`);
    this.turnTimer.reset();
    this.engine.advanceTurn();
  }

  handleStart4pAIPair(msg) {
    this.mpModalOpen = false;
    if (msg && msg.bet) {
      this.currentBet = msg.bet;
      this.matchPot = msg.bet * 2;
    }
    const hostName = this.mpClient.hostName || "Host";
    const guestName = this.mpClient.guestName || "Friend";

    this.engine.gameMode = "4p";
    this.engine.initGame([
      { id: 1, team: 1, name: `${hostName} ${this.mpState.isHost ? '(You)' : ''}`, avatar: "👑", color: "#e67e22", isAI: false },
      { id: 2, team: 2, name: "System AI 1", avatar: "🦚", color: "#27ae60", isAI: true },
      { id: 3, team: 1, name: `${guestName} ${!this.mpState.isHost ? '(You)' : ''}`, avatar: "🦁", color: "#d35400", isAI: false },
      { id: 4, team: 2, name: "System AI 2", avatar: "🦜", color: "#16a085", isAI: true }
    ]);

    this.winnerAwarded = false;
    this.turnTimer.start();
    this.engine.log(`🤝 4-Player Match Active! Team 1 (${hostName} & ${guestName}) vs Team 2 (System AI Opposite Pair). Pot: 🪙${this.matchPot.toLocaleString()}`);
    sounds.playBonusRoll();
    this.render();
  }

  render() {
    if (!this.engine) return;
    const state = this.engine.getStateSnapshot();

    const headerEl = document.getElementById("header-container");
    const boardEl = document.getElementById("board-container");
    const cowrieEl = document.getElementById("cowrie-container");
    const tickerEl = document.getElementById("ticker-container");
    const modalEl = document.getElementById("modal-container");

    const headerOptions = {
      user: userManager.getCurrentUser(),
      walletCoins: wallet.getBalance(),
      matchPot: this.matchPot,
      timeLeft: this.turnTimer.getTimeLeft(),
      unreadChatCount: this.unreadChatCount
    };

    if (headerEl) headerEl.innerHTML = renderHeader(state, this.soundMuted, this.mpState, headerOptions);
    if (boardEl) boardEl.innerHTML = renderBoard(state, this.mpState, this.selectedCoinId);
    if (cowrieEl) cowrieEl.innerHTML = renderCowrieArea(state, this.mpState, this.turnTimer.getTimeLeft());
    if (tickerEl) tickerEl.innerHTML = renderToastFeed(this.logs);

    let modalsHtml = "";
    if (this.loginModalOpen) {
      modalsHtml += renderLoginModal(true, "", "", "", this.loginError, this.loginTab);
    } else if (this.inLobby) {
      modalsHtml += renderLobbyView({
        user: userManager.getCurrentUser(),
        walletCoins: wallet.getBalance(),
        selectedBet: this.selectedBet,
        playerCount: this.playerCount,
        selectedMode: this.lobbyMode,
        hourlyRewardStatus: userManager.getHourlyRewardStatus(),
        isSearchingOnlineMatch: this.isSearchingOnlineMatch
      });
    }

    if (this.homePickerOpen && this.homePickerData) {
      modalsHtml += renderHomePickerModal(true, this.homePickerData);
    }

    if (this.computerModalOpen) {
      modalsHtml += renderComputerMatchModal(true, {
        playerCount: this.computerPlayerCount,
        selectedBet: this.computerBet,
        selectedHome: this.selectedHome,
        walletCoins: wallet.getBalance()
      });
    }

    if (this.friendsHubOpen) {
      const friends = userManager.getFriends(this.friendsSearchQuery);
      const hourlyRewardStatus = userManager.getHourlyRewardStatus();
      const code = this.mpState.roomCode || this.current4DigitCode;
      const shareUrl = `${this.baseMobileUrl}?room=${code}`;
      modalsHtml += renderFriendsHubModal({
        isOpen: true,
        friends,
        searchQuery: this.friendsSearchQuery,
        isEditing: this.isEditingFriends,
        activeTab: this.friendsTab || 'create',
        walletCoins: wallet.getBalance(),
        diamonds: 385,
        roomCode: code,
        roomMode: this.roomCreationMode || '2p',
        selectedBet: this.currentBet || 250,
        shareUrl,
        joinCode: this.enteredJoinCode || '',
        joinError: this.joinRoomError || null,
        isJoining: this.isJoiningTable || false,
        hourlyRewardStatus
      });
    }

    if (this.createRoomModalOpen) {
      const code = this.mpState.roomCode || this.current4DigitCode;
      const shareUrl = `${this.baseMobileUrl}?room=${code}`;
      modalsHtml += renderCreateRoomModal(true, {
        roomCode: code,
        mode: this.roomCreationMode,
        selectedBet: this.currentBet,
        selectedHome: this.selectedHome,
        walletCoins: wallet.getBalance(),
        shareUrl,
        qrDataUrl: this.roomQrDataUrl,
        isWaiting: true
      });
    }

    if (this.joinRoomModalOpen) {
      modalsHtml += renderJoinRoomModal(true, {
        errorMsg: this.joinRoomError,
        enteredCode: this.enteredJoinCode,
        isJoining: this.isJoiningTable || false
      });
    }

    if (this.addFriendModalOpen) {
      modalsHtml += renderAddFriendModal(true, {
        errorMsg: this.addFriendError
      });
    }

    if (this.matchHistoryModalOpen) {
      const stats = userManager.getStats();
      const history = userManager.getHistory();
      modalsHtml += renderMatchHistoryModal(true, stats, history);
    }

    if (this.celebrationSplash.isOpen) {
      modalsHtml += renderCelebrationSplash(true, this.celebrationSplash.tableCode, this.celebrationSplash.friendName);
    }
    if (this.profileModalOpen) {
      const user = userManager.getCurrentUser();
      const stats = userManager.getStats();
      const history = userManager.getHistory();
      modalsHtml += renderProfileHistoryModal(true, user, stats, history);
    }
    if (this.exitModalOpen) {
      modalsHtml += renderExitConfirmModal(true);
    }
    if (this.inactivityModalOpen) {
      modalsHtml += renderInactivityModal(true, this.awayDurationSec, !!this.mpState.roomCode);
    }
    if (this.rulesOpen) {
      modalsHtml += renderRulesModal(true);
    }
    if (this.mobileOpen) {
      modalsHtml += renderMobileModal(true, this.qrDataUrl, this.baseMobileUrl);
    }
    if (this.mpModalOpen) {
      const roomLink = this.mpState.roomCode ? `${this.baseMobileUrl}?room=${this.mpState.roomCode}` : "";
      modalsHtml += renderMultiplayerModal(true, this.mpState, this.roomQrDataUrl, roomLink);
    }
    if (this.gatePromptOpen) {
      modalsHtml += renderGatePromptModal(true);
    }
    if (this.chatOpen) {
      modalsHtml += renderChatDrawer(true, this.chatMessages, this.mpState.myPlayerId || 1);
    }
    if (this.betModalOpen) {
      modalsHtml += renderBetModal(true, wallet.getBalance(), this.currentBet, this.mpState.roomCode ? "multiplayer" : "solo");
    }
    if (this.activeChatToast) {
      modalsHtml += renderFloatingChatToast(this.activeChatToast);
    }
    if (state.winner) {
      if (!this.winnerAwarded) {
        this.winnerAwarded = true;
        this.turnTimer.stop();
        const myTeam = this.mpState.roomCode ? this.mpState.myTeam : 1;
        const won = state.winner.team === myTeam;
        if (won) {
          wallet.awardPot(this.matchPot);
          this.engine.log(`🏆 MATCH WON! You received the full pot: 🪙${this.matchPot.toLocaleString()} coins!`);
        }
        // Record match in user history
        userManager.recordMatch({
          matchId: `m_${Date.now()}`,
          opponent: this.mpState.roomCode ? (myTeam === 1 ? this.mpClient.guestName : this.mpClient.hostName) : "System AI",
          mode: this.mpState.roomCode ? `Online Room #${this.mpState.roomCode}` : "Solo vs AI",
          bet: this.currentBet,
          pot: this.matchPot,
          result: won ? "WON" : "LOST",
          coinsChange: won ? this.matchPot - this.currentBet : -this.currentBet,
          durationSec: Math.round((Date.now() - this.engine.stats.startTime) / 1000),
          kills: myTeam === 1 ? state.team1Kills : state.team2Kills
        });
      }
      haptics.victory();
      modalsHtml += renderVictoryModal(state.winner);
    }
    if (modalEl) modalEl.innerHTML = modalsHtml;

    this.attachEventListeners(state);
  }

  attachEventListeners(state) {
    // Roll Button & Cupped Palm Tap
    const btnRoll = document.getElementById("btn-roll-dice");
    const palmBox = document.getElementById("palm-cupped-box");
    if (btnRoll) {
      btnRoll.onclick = () => this.attemptRoll();
    }
    if (palmBox) {
      palmBox.onclick = () => this.attemptRoll();
    }

    // Release Jail Buttons
    const btnReleaseT1 = document.getElementById("btn-release-jail-t1");
    if (btnReleaseT1) {
      btnReleaseT1.onclick = () => {
        const move = state.validMoves.find(m => m.type === "RELEASE_JAIL");
        if (move) this.attemptMove(move);
      };
    }

    const btnReleaseT2 = document.getElementById("btn-release-jail-t2");
    if (btnReleaseT2) {
      btnReleaseT2.onclick = () => {
        const move = state.validMoves.find(m => m.type === "RELEASE_JAIL");
        if (move) this.attemptMove(move);
      };
    }

    // Coin clicks (supports selecting a coin, and moving into a box that already has other coins)
    const coinEls = document.querySelectorAll(".coin-piece");
    coinEls.forEach(el => {
      el.onclick = (e) => {
        e.stopPropagation();
        const coinId = el.getAttribute("data-coin-id");
        if (!coinId) return;

        // Case A: A coin is already selected, and user clicks on a cell containing another coin
        // that happens to be the selected coin's target destination!
        // This allows placing two or more coins in the same box without accidentally moving the existing coin away!
        if (this.selectedCoinId && this.selectedCoinId !== coinId) {
          const cellEl = el.closest(".board-cell");
          if (cellEl) {
            const r = parseInt(cellEl.getAttribute("data-r"), 10);
            const c = parseInt(cellEl.getAttribute("data-c"), 10);
            const selectedMove = state.validMoves.find(m => m.coin && m.coin.id === this.selectedCoinId && m.targetCoord && m.targetCoord.r === r && m.targetCoord.c === c);
            if (selectedMove) {
              this.selectedCoinId = null;
              this.attemptMove(selectedMove);
              return;
            }
          }
        }

        // Case B: Check if this coin has valid moves
        const movesForThisCoin = state.validMoves.filter(m => m.coin && m.coin.id === coinId);
        if (movesForThisCoin.length > 0) {
          // If only 1 movable coin exists across the board or user tapped the already selected coin: execute!
          const allMovableCoinIds = new Set(state.validMoves.filter(m => m.coin).map(m => m.coin.id));
          if (this.selectedCoinId === coinId || allMovableCoinIds.size === 1) {
            this.selectedCoinId = null;
            this.attemptMove(movesForThisCoin[0]);
          } else {
            // Select this coin so user can view its destination
            this.selectedCoinId = coinId;
            this.render();
          }
          return;
        }

        // Case C: Jail release click
        if (state.validMoves.some(m => m.type === "RELEASE_JAIL")) {
          const jailMove = state.validMoves.find(m => m.type === "RELEASE_JAIL");
          if (jailMove) {
            this.selectedCoinId = null;
            this.attemptMove(jailMove);
          }
        }
      };
    });

    // Target cell clicks (moves selected coin or matching coin into this box)
    const targetCells = document.querySelectorAll(".cell-valid-target");
    targetCells.forEach(cell => {
      cell.onclick = () => {
        const r = parseInt(cell.getAttribute("data-r"), 10);
        const c = parseInt(cell.getAttribute("data-c"), 10);

        // If a coin is selected, move that selected coin into this cell
        if (this.selectedCoinId) {
          const move = state.validMoves.find(m => m.coin && m.coin.id === this.selectedCoinId && m.targetCoord && m.targetCoord.r === r && m.targetCoord.c === c);
          if (move) {
            this.selectedCoinId = null;
            this.attemptMove(move);
            return;
          }
        }

        // If no coin is selected, move the coin targeting this cell
        const move = state.validMoves.find(m => m.targetCoord && m.targetCoord.r === r && m.targetCoord.c === c);
        if (move) {
          this.selectedCoinId = null;
          this.attemptMove(move);
        }
      };
    });

    // Multiplayer Modal Open
    const btnOpenMp = document.getElementById("btn-open-multiplayer");
    const btnMpBadge = document.getElementById("btn-open-mp-badge");
    if (btnOpenMp) btnOpenMp.onclick = () => { this.mpModalOpen = true; this.render(); };
    if (btnMpBadge) btnMpBadge.onclick = () => { this.mpModalOpen = true; this.render(); };

    // Chat Drawer Open / Close
    const btnOpenChat = document.getElementById("btn-open-chat");
    const btnCloseChat = document.getElementById("btn-close-chat");
    if (btnOpenChat) {
      btnOpenChat.onclick = () => {
        this.chatOpen = true;
        this.unreadChatCount = 0;
        this.render();
      };
    }
    if (btnCloseChat) {
      btnCloseChat.onclick = () => {
        this.chatOpen = false;
        this.render();
      };
    }

    // Send Chat Message / Smilies / Taunts
    const btnSendChat = document.getElementById("btn-send-chat");
    const inputChatText = document.getElementById("input-chat-text");
    const doSendChat = (customText = null) => {
      let text = customText;
      if (!text && inputChatText) {
        text = inputChatText.value.trim();
        inputChatText.value = "";
      }
      if (!text) return;

      const user = userManager.getCurrentUser();
      const myName = user ? (user.nickName || user.name) : (this.mpState.myPlayerId === 2 ? "Player 2" : "Player 1");

      if (this.mpState.roomCode) {
        this.mpClient.sendChat(text, myName);
      } else {
        // Solo play vs AI
        const msg = {
          senderId: 1,
          senderName: myName,
          text,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        this.handleChatReceived(msg);

        // System AI responses with fun village banter
        if (this.engine.players && this.engine.players[1] && this.engine.players[1].isAI) {
          setTimeout(() => {
            const aiReplies = [
              "బాగుంది! కానీ సెంటర్ హోమ్ నాదే! (Nice! But the Center is mine!) 🦚",
              "కట్టా పడకుండా జాగ్రత్త మిత్రమా! (Watch out for Katta strike!) 💥",
              "హాహా! బాఱ 12 పడితే నేనే విజేత! (Haha! If I roll Baara 12, I win!) 🎲",
              "మంచి మూవ్! చూద్దాం ఎవరు గెలుస్తారో! (Good move! Let's see who wins!) 👑",
              "గువ్వలు నా వైపే ఉన్నాయి! (The cowries favor me!) 🐚"
            ];
            const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
            this.handleChatReceived({
              senderId: 2,
              senderName: "System AI 🦚",
              text: reply,
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            });
          }, 650);
        }
      }
    };

    if (btnSendChat) btnSendChat.onclick = () => doSendChat();
    if (inputChatText) {
      inputChatText.onkeydown = (e) => {
        if (e.key === "Enter") doSendChat();
      };
    }

    // Smiley Chip Buttons
    document.querySelectorAll(".btn-smiley-chip").forEach(btn => {
      btn.onclick = () => {
        const emoji = btn.getAttribute("data-emoji");
        if (emoji) doSendChat(emoji);
      };
    });

    // Quick Taunt Buttons
    document.querySelectorAll(".btn-quick-taunt").forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute("data-taunt-index"), 10);
        const taunt = QUICK_TAUNTS[idx];
        if (taunt) doSendChat(taunt.text);
      };
    });

    // Wallet & Bet Modal Open / Close
    const btnOpenWallet = document.getElementById("btn-open-wallet");
    const btnOpenBet = document.getElementById("btn-open-bet");
    const btnCloseBet = document.getElementById("btn-close-bet");
    if (btnOpenWallet) btnOpenWallet.onclick = () => { this.betModalOpen = true; this.render(); };
    if (btnOpenBet) btnOpenBet.onclick = () => { this.betModalOpen = true; this.render(); };
    if (btnCloseBet) btnCloseBet.onclick = () => { this.betModalOpen = false; this.render(); };

    // Bet Chips Selection
    document.querySelectorAll(".bet-chip").forEach(chip => {
      chip.onclick = () => {
        const amt = parseInt(chip.getAttribute("data-bet-amount"), 10);
        if (amt && wallet.canAfford(amt)) {
          this.currentBet = amt;
          this.render();
        }
      };
    });

    // Confirm Bet
    const btnConfirmBet = document.getElementById("btn-confirm-bet");
    if (btnConfirmBet) {
      btnConfirmBet.onclick = () => {
        if (wallet.canAfford(this.currentBet)) {
          this.matchPot = this.currentBet * 2;
          if (this.mpState.roomCode) {
            this.mpClient.sendBet(this.currentBet);
          }
          this.betModalOpen = false;
          this.engine.log(`🪙 Bet set to 🪙${this.currentBet}! Total pot: 🪙${this.matchPot.toLocaleString()}`);
          this.render();
        }
      };
    }

    // Claim Village Refill
    const btnClaimBonus = document.getElementById("btn-claim-village-bonus");
    if (btnClaimBonus) {
      btnClaimBonus.onclick = () => {
        if (wallet.claimRefill()) {
          sounds.playBonusRoll();
          haptics.light();
          this.engine.log(`🎁 Claimed Village Bonus! +500 Coins added to wallet.`);
          this.render();
        }
      };
    }

    // Create Room Action
    const btnCreateRoom = document.getElementById("btn-action-create-room");
    if (btnCreateRoom) {
      btnCreateRoom.onclick = async () => {
        const nameInput = document.getElementById("input-host-name");
        const modeSelect = document.getElementById("select-mp-mode");
        const name = nameInput ? nameInput.value.trim() : "Player 1";
        const mode = modeSelect ? modeSelect.value : "2p";
        await this.mpClient.createRoom(mode, name);
      };
    }

    // Join Room Action
    const btnJoinRoom = document.getElementById("btn-action-join-room");
    if (btnJoinRoom) {
      btnJoinRoom.onclick = async () => {
        const codeInput = document.getElementById("input-join-code");
        const nameInput = document.getElementById("input-join-name");
        const code = codeInput ? codeInput.value.trim() : "";
        const name = nameInput ? nameInput.value.trim() : "Player 2";
        if (!code) {
          alert("Please enter the Board Number (e.g. BK-260915-101-482).");
          return;
        }
        await this.mpClient.joinRoom(code, name);
      };
    }

    // Copy Board Number
    const btnCopyBoardNum = document.getElementById("btn-copy-board-number");
    if (btnCopyBoardNum) {
      btnCopyBoardNum.onclick = () => {
        const digits = document.getElementById("text-board-number");
        if (digits) {
          navigator.clipboard.writeText(digits.textContent.trim());
          btnCopyBoardNum.textContent = "✅ Copied!";
          setTimeout(() => { if (btnCopyBoardNum) btnCopyBoardNum.textContent = "📋 Copy"; }, 1800);
        }
      };
    }

    // Start 4-Player Match with System AI Opposite Pair
    const btnStart4pAi = document.getElementById("btn-start-4p-ai-pair");
    if (btnStart4pAi) {
      btnStart4pAi.onclick = () => {
        this.mpClient.sendStart4pAIPair();
        this.handleStart4pAIPair({ bet: this.currentBet });
      };
    }

    // Copy Room Link
    const btnCopyRoomLink = document.getElementById("btn-copy-room-link");
    if (btnCopyRoomLink) {
      btnCopyRoomLink.onclick = () => {
        const input = document.getElementById("input-mp-room-link");
        if (input) {
          navigator.clipboard.writeText(input.value);
          btnCopyRoomLink.textContent = "✅ Copied!";
          setTimeout(() => { if (btnCopyRoomLink) btnCopyRoomLink.textContent = "📋 Copy Link"; }, 1800);
        }
      };
    }

    // Leave Room
    const btnLeaveRoom = document.getElementById("btn-leave-room");
    if (btnLeaveRoom) {
      btnLeaveRoom.onclick = () => {
        this.mpClient.leaveRoom();
        this.mpState.roomCode = null;
        this.mpState.players = [];
        this.mpModalOpen = false;
        this.winnerAwarded = false;
        this.engine.initGame();
        this.turnTimer.start();
        this.render();
      };
    }

    // Play Now from Room Modal
    const btnMpPlayNow = document.getElementById("btn-mp-play-now");
    if (btnMpPlayNow) {
      btnMpPlayNow.onclick = () => {
        this.mpModalOpen = false;
        this.render();
      };
    }

    const btnCloseMp = document.getElementById("btn-close-mp");
    const btnModalMpClose = document.getElementById("btn-modal-mp-close");
    if (btnCloseMp) btnCloseMp.onclick = () => { this.mpModalOpen = false; this.render(); };
    if (btnModalMpClose) btnModalMpClose.onclick = () => { this.mpModalOpen = false; this.render(); };

    // Mobile QR Modal Open
    const btnMobile = document.getElementById("btn-open-mobile");
    if (btnMobile) {
      btnMobile.onclick = async () => {
        if (!this.qrDataUrl) {
          this.qrDataUrl = await generateMobileQr(this.baseMobileUrl);
        }
        this.mobileOpen = true;
        this.render();
      };
    }

    const btnCloseMobile = document.getElementById("btn-close-mobile");
    const btnMobileDone = document.getElementById("btn-modal-mobile-done");
    if (btnCloseMobile) btnCloseMobile.onclick = () => { this.mobileOpen = false; this.render(); };
    if (btnMobileDone) btnMobileDone.onclick = () => { this.mobileOpen = false; this.render(); };

    // Rules Modal Open
    const btnRules = document.getElementById("btn-open-rules");
    if (btnRules) {
      btnRules.onclick = () => {
        this.rulesOpen = true;
        this.render();
      };
    }

    const btnCloseRules = document.getElementById("btn-close-rules");
    const btnGotIt = document.getElementById("btn-modal-got-it");
    if (btnCloseRules) btnCloseRules.onclick = () => { this.rulesOpen = false; this.render(); };
    if (btnGotIt) btnGotIt.onclick = () => { this.rulesOpen = false; this.render(); };

    // Dice Toggle (Cowries vs Die)
    const btnToggleDice = document.getElementById("btn-toggle-dice");
    if (btnToggleDice) {
      btnToggleDice.onclick = () => {
        this.engine.diceMode = this.engine.diceMode === "cowries" ? "die" : "cowries";
        haptics.light();
        this.render();
      };
    }

    // Sound Toggle
    const btnSound = document.getElementById("btn-toggle-sound");
    if (btnSound) {
      btnSound.onclick = () => {
        this.soundMuted = sounds.toggleMute();
        haptics.light();
        this.render();
      };
    }

    // Restart Button
    const btnRestart = document.getElementById("btn-restart-game");
    if (btnRestart) {
      btnRestart.onclick = () => {
        if (confirm("Start a new match?")) {
          this.engine.initGame();
          this.winnerAwarded = false;
          this.turnTimer.start();
          if (this.mpState.roomCode) {
            this.mpClient.sendRestart();
          }
        }
      };
    }

    // Victory Rematch / Next Game -> Return to Match Lobby
    const btnVictoryRestart = document.getElementById("btn-victory-restart");
    if (btnVictoryRestart) {
      btnVictoryRestart.onclick = () => {
        this.winnerAwarded = false;
        this.turnTimer.stop();
        this.inLobby = true;
        this.render();
      };
    }

    // Login Modal Open from Header
    const btnHeaderLogin = document.getElementById("btn-header-login");
    if (btnHeaderLogin) {
      btnHeaderLogin.onclick = () => {
        this.loginModalOpen = true;
        this.loginError = null;
        this.render();
      };
    }

    // Login Tab Switching (Login vs Sign Up)
    const tabLoginBtn = document.getElementById("tab-login-btn");
    const tabSignupBtn = document.getElementById("tab-signup-btn");
    const linkSwitchSignup = document.getElementById("link-switch-signup");
    const linkSwitchLogin = document.getElementById("link-switch-login");

    if (tabLoginBtn) {
      tabLoginBtn.onclick = () => {
        this.loginTab = "login";
        this.loginError = null;
        this.render();
      };
    }
    if (tabSignupBtn) {
      tabSignupBtn.onclick = () => {
        this.loginTab = "signup";
        this.loginError = null;
        this.render();
      };
    }
    if (linkSwitchSignup) {
      linkSwitchSignup.onclick = (e) => {
        e.preventDefault();
        this.loginTab = "signup";
        this.loginError = null;
        this.render();
      };
    }
    if (linkSwitchLogin) {
      linkSwitchLogin.onclick = (e) => {
        e.preventDefault();
        this.loginTab = "login";
        this.loginError = null;
        this.render();
      };
    }

    // Login Submission & Live Nickname Preview
    const btnSubmitLogin = document.getElementById("btn-submit-login");
    const inputLoginMobile = document.getElementById("input-login-mobile");
    const inputLoginFull = document.getElementById("input-login-fullname");
    const inputLoginNick = document.getElementById("input-login-nickname");
    const nickPreviewBadge = document.getElementById("nickname-preview-badge");

    const updateNickPreview = () => {
      if (!nickPreviewBadge) return;
      const fullVal = inputLoginFull ? inputLoginFull.value : "";
      const nickVal = inputLoginNick ? inputLoginNick.value : "";
      nickPreviewBadge.textContent = computeNickName(fullVal, nickVal);
    };
    if (inputLoginFull) inputLoginFull.oninput = updateNickPreview;
    if (inputLoginNick) inputLoginNick.oninput = updateNickPreview;

    const doLogin = () => {
      if (!inputLoginMobile) return;
      const mob = inputLoginMobile.value.trim();

      if (this.loginTab === "login") {
        // Returning user: Login with Mobile Number only!
        const res = userManager.login(mob, "", "", false);
        if (res.success) {
          this.loginModalOpen = false;
          this.loginError = null;
          this.inLobby = true;
          if (this.engine.players && this.engine.players[0]) {
            this.engine.players[0].name = res.user.nickName || res.user.name;
          }
          this.engine.log(`👤 Welcome back, ${res.user.nickName || res.user.name}! Profile restored.`);
          this.render();
        } else {
          this.loginError = res.error;
          if (res.isNotRegistered) {
            // Auto-switch to Sign Up tab so user can enter full name
            this.loginTab = "signup";
          }
          this.render();
        }
      } else {
        // New user: Sign up with Mobile + Full Name + Nick Name (optional)
        const fullName = inputLoginFull ? inputLoginFull.value.trim() : "";
        const nickName = inputLoginNick ? inputLoginNick.value.trim() : "";
        const res = userManager.login(mob, fullName, nickName, true);
        if (res.success) {
          this.loginModalOpen = false;
          this.loginError = null;
          this.inLobby = true;
          if (this.engine.players && this.engine.players[0]) {
            this.engine.players[0].name = res.user.nickName || res.user.name;
          }
          this.engine.log(`👤 Welcome, ${res.user.nickName || res.user.name}! 🪙1,000 joining bonus credited!`);
          this.render();
        } else {
          this.loginError = res.error;
          this.render();
        }
      }
    };

    if (btnSubmitLogin) btnSubmitLogin.onclick = doLogin;
    if (inputLoginMobile) {
      inputLoginMobile.onkeydown = (e) => {
        if (e.key === "Enter") doLogin();
      };
    }
    if (inputLoginFull) {
      inputLoginFull.onkeydown = (e) => {
        if (e.key === "Enter") doLogin();
      };
    }
    if (inputLoginNick) {
      inputLoginNick.onkeydown = (e) => {
        if (e.key === "Enter") doLogin();
      };
    }

    // Modern Home Menu: 3 Hero Mode Cards
    const btnModeComputer = document.getElementById("btn-mode-computer");
    if (btnModeComputer) {
      btnModeComputer.onclick = () => {
        this.mpState.roomCode = null;
        this.mpState.myPlayerId = null;
        this.mpState.myTeam = null;
        this.mpState.isHost = false;
        this.mpState.players = [];
        if (this.mpClient) {
          this.mpClient.roomCode = null;
          this.mpClient.myPlayerId = null;
          this.mpClient.myTeam = null;
        }
        this.computerModalOpen = true;
        this.render();
      };
    }

    const btnModeOnline = document.getElementById("btn-mode-online");
    if (btnModeOnline) {
      btnModeOnline.onclick = async () => {
        await this.startOnlineQuickMatch();
      };
    }

    const btnModeFriends = document.getElementById("btn-mode-friends");
    if (btnModeFriends) {
      btnModeFriends.onclick = async () => {
        this.friendsHubOpen = true;
        this.friendsTab = "create";
        if (!this.mpState.roomCode) {
          this.current4DigitCode = generateUnique4DigitTableCode();
          const user = userManager.getCurrentUser();
          const myName = user ? (user.nickName || user.name) : "Player 1";
          const userMeta = {
            mobile: user?.mobile || "",
            nickName: user?.nickName || myName,
            fullName: user?.name || myName
          };
          await this.mpClient.createRoom(this.roomCreationMode || "2p", myName, this.current4DigitCode, userMeta, this.currentBet, null);
        }
        this.render();
      };
    }

    const btnLobbyFriendsDirect = document.getElementById("btn-lobby-friends-direct");
    if (btnLobbyFriendsDirect) {
      btnLobbyFriendsDirect.onclick = () => {
        this.friendsHubOpen = true;
        this.render();
      };
    }

    // Dynamic Starting Home Selection (First 1/5/6 Roll)
    document.querySelectorAll(".btn-picker-home[data-pick-home]").forEach(btn => {
      btn.onclick = () => {
        const homeVal = parseInt(btn.getAttribute("data-pick-home"), 10);
        const teamId = this.homePickerData ? this.homePickerData.teamId : (this.mpState.myTeam || 1);
        this.engine.assignHomes(teamId, homeVal);
        if (this.mpState.roomCode && this.mpClient) {
          this.mpClient.sendHomeSelection(teamId, homeVal);
        }
        this.homePickerOpen = false;
        this.homePickerData = null;
        this.render();
      };
    });

    // Computer Match Modal Listeners
    const btnCloseComputerModal = document.getElementById("btn-close-computer-modal");
    if (btnCloseComputerModal) {
      btnCloseComputerModal.onclick = () => {
        this.computerModalOpen = false;
        this.render();
      };
    }

    const btnCmFormat2p = document.getElementById("btn-cm-format-2p");
    const btnCmFormat4p = document.getElementById("btn-cm-format-4p");
    if (btnCmFormat2p) {
      btnCmFormat2p.onclick = () => {
        this.computerPlayerCount = 2;
        this.render();
      };
    }
    if (btnCmFormat4p) {
      btnCmFormat4p.onclick = () => {
        this.computerPlayerCount = 4;
        this.render();
      };
    }

    document.querySelectorAll(".btn-cm-bet").forEach(chip => {
      chip.onclick = () => {
        const bet = parseInt(chip.getAttribute("data-bet"), 10);
        if (bet) {
          this.computerBet = bet;
          this.render();
        }
      };
    });

    document.querySelectorAll(".btn-cm-home, .btn-room-home").forEach(homeBtn => {
      homeBtn.onclick = () => {
        const homeVal = parseInt(homeBtn.getAttribute("data-cm-home") || homeBtn.getAttribute("data-room-home"), 10);
        if (homeVal) {
          this.selectedHome = homeVal;
          if (this.mpClient) {
            this.mpClient.team1Home = homeVal;
            this.mpClient.team2Home = getOppositeHome(homeVal);
          }
          this.render();
        }
      };
    });

    const btnStartComputerGame = document.getElementById("btn-start-computer-game");
    if (btnStartComputerGame) {
      btnStartComputerGame.onclick = () => {
        if (!wallet.canAfford(this.computerBet)) {
          alert(`You need 🪙${this.computerBet.toLocaleString()} coins! Current balance: 🪙${wallet.getBalance().toLocaleString()}`);
          return;
        }
        wallet.placeBet(this.computerBet);
        this.currentBet = this.computerBet;
        this.matchPot = this.computerBet * 2;
        this.inLobby = false;
        this.computerModalOpen = false;

        // Reset multiplayer state completely so solo gameplay is never blocked
        this.mpState.roomCode = null;
        this.mpState.myPlayerId = null;
        this.mpState.myTeam = null;
        this.mpState.isHost = false;
        this.mpState.players = [];
        if (this.mpClient) {
          this.mpClient.roomCode = null;
          this.mpClient.myPlayerId = null;
          this.mpClient.myTeam = null;
        }

        const user = userManager.getCurrentUser();
        const myName = user ? (user.nickName || user.name) : "Player 1";

        if (this.computerPlayerCount === 4) {
          this.engine.gameMode = "4p";
          this.engine.initGame([
            { id: 1, team: 1, name: `${myName} (You)`, avatar: "👑", color: "#e67e22", isAI: false },
            { id: 2, team: 2, name: "System AI 1", avatar: "🦚", color: "#27ae60", isAI: true },
            { id: 3, team: 1, name: "Teammate AI", avatar: "🦁", color: "#d35400", isAI: true },
            { id: 4, team: 2, name: "System AI 2", avatar: "🦜", color: "#16a085", isAI: true }
          ], null);
          this.winnerAwarded = false;
          this.turnTimer.start();
          this.engine.log(`🎲 4-Player Offline match vs System AI Pair started! Pot: 🪙${this.matchPot.toLocaleString()}`);
        } else {
          this.engine.gameMode = "2p";
          this.engine.initGame([
            { id: 1, team: 1, name: `${myName} (You)`, avatar: "👑", color: "#e67e22", isAI: false },
            { id: 2, team: 2, name: "System AI (Top)", avatar: "🦚", color: "#27ae60", isAI: true }
          ], null);
          this.winnerAwarded = false;
          this.turnTimer.start();
          this.engine.log(`🎲 2-Player Offline match vs System AI started! Stake: 🪙${this.currentBet.toLocaleString()} | Pot: 🪙${this.matchPot.toLocaleString()}`);
        }
        this.render();
      };
    }

    // Legacy / Fallback lobby mode selection listeners
    const btnCount2p = document.getElementById("btn-count-2p");
    const btnCount4p = document.getElementById("btn-count-4p");
    if (btnCount2p) {
      btnCount2p.onclick = () => {
        this.playerCount = 2;
        this.lobbyMode = "solo";
        this.render();
      };
    }
    if (btnCount4p) {
      btnCount4p.onclick = () => {
        this.playerCount = 4;
        this.lobbyMode = "4p_ai_pair";
        this.render();
      };
    }

    const btnModeSolo = document.getElementById("btn-select-mode-solo");
    const btnModeFriend = document.getElementById("btn-select-mode-friend");
    const btnMode4pPair = document.getElementById("btn-select-mode-4p-pair");
    const btnMode4pSolo = document.getElementById("btn-select-mode-4p-solo");
    const btnMode4pFriends = document.getElementById("btn-select-mode-4p-friends");

    if (btnModeSolo) {
      btnModeSolo.onclick = () => {
        this.lobbyMode = "solo";
        this.render();
      };
    }
    if (btnModeFriend) {
      btnModeFriend.onclick = () => {
        this.lobbyMode = "friend";
        this.render();
      };
    }
    if (btnMode4pPair) {
      btnMode4pPair.onclick = () => {
        this.lobbyMode = "4p_ai_pair";
        this.render();
      };
    }
    if (btnMode4pSolo) {
      btnMode4pSolo.onclick = () => {
        this.lobbyMode = "4p_solo";
        this.render();
      };
    }
    if (btnMode4pFriends) {
      btnMode4pFriends.onclick = () => {
        this.lobbyMode = "4p_friends";
        this.render();
      };
    }

    // Prominent Hero "Request Friend to Play on Same Board" Button -> Opens Friends Hub
    const btnLobbyReqFriend = document.getElementById("btn-lobby-request-friend");
    if (btnLobbyReqFriend) {
      btnLobbyReqFriend.onclick = () => {
        this.friendsHubOpen = true;
        this.render();
      };
    }

    // In-Game Header Friends Button
    const btnHeaderFriends = document.getElementById("btn-header-friends");
    if (btnHeaderFriends) {
      btnHeaderFriends.onclick = () => {
        this.friendsHubOpen = true;
        this.render();
      };
    }

    // Friends Hub Close & Back
    const btnCloseFriendsHub = document.getElementById("btn-close-friends-hub");
    if (btnCloseFriendsHub) {
      btnCloseFriendsHub.onclick = () => {
        this.friendsHubOpen = false;
        this.render();
      };
    }

    // Friends Hub Sub-Tabs
    document.querySelectorAll("[data-fhub-tab]").forEach(tabBtn => {
      tabBtn.onclick = () => {
        const nextTab = tabBtn.getAttribute("data-fhub-tab");
        if (this.friendsTab !== nextTab) {
          this.friendsTab = nextTab;
          if (nextTab === "join") {
            if (this.mpState.isHost && this.mpState.players.length <= 1) {
              if (this.mpClient) this.mpClient.leaveRoom();
              this.mpState.roomCode = null;
              this.mpState.isHost = false;
            }
          }
          this.render();
        }
      };
    });

    // Friends Hub Search
    const inputFhubSearch = document.getElementById("input-fhub-search");
    if (inputFhubSearch) {
      inputFhubSearch.oninput = (e) => {
        this.friendsSearchQuery = e.target.value;
        this.render();
      };
    }

    const btnClearFhubSearch = document.getElementById("btn-clear-fhub-search");
    if (btnClearFhubSearch) {
      btnClearFhubSearch.onclick = () => {
        this.friendsSearchQuery = "";
        this.render();
      };
    }

    // Friends Hub Tab 1: Create Table Controls
    const btnCopy4Digit = document.getElementById("btn-copy-4digit-code");
    if (btnCopy4Digit) {
      btnCopy4Digit.onclick = () => {
        const code = btnCopy4Digit.getAttribute("data-code") || this.current4DigitCode;
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(code);
        }
        btnCopy4Digit.textContent = `✅ Copied (${code})!`;
        setTimeout(() => this.render(), 1500);
      };
    }

    document.querySelectorAll("[data-create-bet]").forEach(chip => {
      chip.onclick = () => {
        const bet = parseInt(chip.getAttribute("data-create-bet"), 10);
        if (bet) {
          this.currentBet = bet;
          this.render();
        }
      };
    });

    document.querySelectorAll("input[name='create-room-mode']").forEach(radio => {
      radio.onchange = () => {
        this.roomCreationMode = radio.value;
        this.render();
      };
    });

    // Friends Hub & Join Table PIN / Keypad Controls
    const input4Digit = document.getElementById("input-4digit-code");
    const btnSubmitJoin = document.getElementById("btn-submit-join-code");
    if (input4Digit) {
      input4Digit.oninput = (e) => {
        this.enteredJoinCode = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
        this.render();
      };
      input4Digit.onkeydown = (e) => {
        if (e.key === "Enter") {
          this.submitJoinTableCode(this.enteredJoinCode || input4Digit.value);
        }
      };
    }

    // Virtual Touch Keypad for Frictionless Input
    document.querySelectorAll(".btn-fhub-keypad-key[data-join-key]").forEach(keyBtn => {
      keyBtn.onclick = () => {
        const key = keyBtn.getAttribute("data-join-key");
        if (!this.enteredJoinCode) this.enteredJoinCode = "";
        if (key === "clear") {
          this.enteredJoinCode = "";
          this.joinRoomError = null;
        } else if (key === "back") {
          this.enteredJoinCode = this.enteredJoinCode.slice(0, -1);
          this.joinRoomError = null;
        } else if (/^[0-9]$/.test(key)) {
          if (this.enteredJoinCode.length < 4) {
            this.enteredJoinCode += key;
            this.joinRoomError = null;
          }
        }
        this.render();
      };
    });

    // Paste from Clipboard Button
    const btnPasteJoinCode = document.getElementById("btn-paste-join-code");
    if (btnPasteJoinCode) {
      btnPasteJoinCode.onclick = async () => {
        try {
          if (navigator.clipboard?.readText) {
            const text = await navigator.clipboard.readText();
            if (text) {
              const match = text.match(/\b\d{4}\b/);
              if (match) {
                this.enteredJoinCode = match[0];
                this.joinRoomError = null;
                this.render();
              } else {
                const digits = text.replace(/[^0-9]/g, "").slice(0, 4);
                if (digits.length > 0) {
                  this.enteredJoinCode = digits;
                  this.joinRoomError = null;
                  this.render();
                }
              }
            }
          }
        } catch (err) {
          console.warn("Could not read clipboard:", err);
        }
      };
    }

    if (btnSubmitJoin) {
      btnSubmitJoin.onclick = () => {
        this.submitJoinTableCode(this.enteredJoinCode || input4Digit?.value);
      };
    }

    // Friends Hub: Invite Friends on WhatsApp
    const btnFhubInviteWa = document.getElementById("btn-fhub-invite-whatsapp");
    if (btnFhubInviteWa) {
      btnFhubInviteWa.onclick = () => {
        const code = this.mpState.roomCode || this.current4DigitCode || generateUnique4DigitTableCode();
        const shareUrl = `${this.baseMobileUrl}?room=${code}`;
        const msg = encodeURIComponent(`Namaskaram! 🎲 Join my Bharakhatta table room! Table Code: *${code}*\nTap here to play: ${shareUrl}`);
        window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
      };
    }

    // Friends Hub: Add Friend Modal
    const btnFhubAddFriend = document.getElementById("btn-fhub-add-friend");
    const btnFhubEmptyAdd = document.getElementById("btn-fhub-empty-add");
    if (btnFhubAddFriend) {
      btnFhubAddFriend.onclick = () => {
        this.addFriendModalOpen = true;
        this.addFriendError = null;
        this.render();
      };
    }
    if (btnFhubEmptyAdd) {
      btnFhubEmptyAdd.onclick = () => {
        this.addFriendModalOpen = true;
        this.addFriendError = null;
        this.render();
      };
    }

    // Friends Hub: Toggle Edit Mode (Pencil -> Delete button)
    const btnFhubToggleEdit = document.getElementById("btn-fhub-toggle-edit");
    if (btnFhubToggleEdit) {
      btnFhubToggleEdit.onclick = () => {
        this.isEditingFriends = !this.isEditingFriends;
        this.render();
      };
    }

    // Friend Card Actions: Gift, Challenge, Delete
    document.querySelectorAll(".btn-fcard-gift").forEach(btn => {
      btn.onclick = () => {
        sounds.playBonusRoll();
        haptics.light();
        alert("🎁 You sent 100 Free Coins Gift to your friend!");
      };
    });

    document.querySelectorAll(".btn-fcard-challenge").forEach(btn => {
      btn.onclick = async () => {
        const friendName = btn.getAttribute("data-friend-name") || "Friend";
        this.current4DigitCode = generateUnique4DigitTableCode();
        const user = userManager.getCurrentUser();
        const myName = user ? (user.nickName || user.name) : "Player 1";
        const userMeta = {
          mobile: user?.mobile || "",
          nickName: user?.nickName || myName,
          fullName: user?.name || myName
        };
        await this.mpClient.createRoom("2p", myName, this.current4DigitCode, userMeta, this.currentBet, this.selectedHome);
        this.createRoomModalOpen = true;
        this.engine.log(`⚔️ Challenged ${friendName} to Table #${this.current4DigitCode}!`);
        this.render();
      };
    });

    document.querySelectorAll(".btn-fcard-delete").forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-friend-id");
        if (id) {
          userManager.removeFriend(id);
          this.render();
        }
      };
    });

    // Bottom Navigation Bar Items
    const btnNavHome = document.getElementById("btn-nav-home");
    const btnNavFriends = document.getElementById("btn-nav-friends");
    const btnNavReward = document.getElementById("btn-nav-reward");
    const btnNavHistory = document.getElementById("btn-nav-history");
    const btnNavProfile = document.getElementById("btn-nav-profile");

    if (btnNavHome) {
      btnNavHome.onclick = () => {
        this.computerModalOpen = false;
        this.friendsHubOpen = false;
        this.joinRoomModalOpen = false;
        this.createRoomModalOpen = false;
        this.profileModalOpen = false;
        this.rulesOpen = false;
        this.matchHistoryModalOpen = false;
        this.inLobby = true;
        this.render();
      };
    }
    if (btnNavFriends) {
      btnNavFriends.onclick = () => {
        this.friendsHubOpen = true;
        this.render();
      };
    }

    // Hourly Free Rewards Claiming
    const doClaimHourlyReward = () => {
      const res = userManager.claimHourlyReward();
      if (res.success) {
        sounds.playBonusRoll();
        haptics.heavy();
        this.engine.log(res.message);
        alert(res.message);
      } else {
        alert(res.error);
      }
      this.render();
    };

    if (btnNavReward) btnNavReward.onclick = doClaimHourlyReward;
    const btnLobbyHourly = document.getElementById("btn-lobby-hourly-reward");
    if (btnLobbyHourly) btnLobbyHourly.onclick = doClaimHourlyReward;

    // Dedicated Match History Modal
    if (btnNavHistory) {
      btnNavHistory.onclick = () => {
        this.matchHistoryModalOpen = true;
        this.render();
      };
    }

    const btnLobbyHistory = document.getElementById("btn-lobby-history");
    if (btnLobbyHistory) {
      btnLobbyHistory.onclick = () => {
        this.matchHistoryModalOpen = true;
        this.render();
      };
    }

    const btnCloseMatchHist = document.getElementById("btn-close-match-history");
    const btnDoneMatchHist = document.getElementById("btn-done-match-history");
    if (btnCloseMatchHist) btnCloseMatchHist.onclick = () => { this.matchHistoryModalOpen = false; this.render(); };
    if (btnDoneMatchHist) btnDoneMatchHist.onclick = () => { this.matchHistoryModalOpen = false; this.render(); };

    if (btnNavProfile) {
      btnNavProfile.onclick = () => {
        this.profileModalOpen = true;
        this.render();
      };
    }

    // Create Room Modal Handlers
    const btnCloseCreateRoom = document.getElementById("btn-close-create-room");
    if (btnCloseCreateRoom) {
      btnCloseCreateRoom.onclick = () => {
        this.createRoomModalOpen = false;
        this.render();
      };
    }

    const radioMode1v1 = document.getElementById("radio-mode-1v1");
    const radioMode2v2 = document.getElementById("radio-mode-2v2");
    if (radioMode1v1) {
      radioMode1v1.onchange = () => {
        this.roomCreationMode = "2p";
        this.render();
      };
    }
    if (radioMode2v2) {
      radioMode2v2.onchange = () => {
        this.roomCreationMode = "4p";
        this.render();
      };
    }

    document.querySelectorAll("[data-create-bet]").forEach(btn => {
      btn.onclick = () => {
        const bet = parseInt(btn.getAttribute("data-create-bet"), 10);
        if (bet) {
          this.currentBet = bet;
          this.matchPot = bet * 2;
          this.render();
        }
      };
    });

    const btnCopy4DigitCode = document.getElementById("btn-copy-4digit-code");
    if (btnCopy4DigitCode) {
      btnCopy4DigitCode.onclick = () => {
        const code = btnCopy4DigitCode.getAttribute("data-code");
        if (code) {
          navigator.clipboard.writeText(code);
          btnCopy4DigitCode.textContent = "✅ Copied!";
          setTimeout(() => { if (btnCopy4DigitCode) btnCopy4DigitCode.textContent = `📋 Copy Code (${code})`; }, 1800);
        }
      };
    }

    // Join Room Modal Handlers
    const btnCloseJoinRoom = document.getElementById("btn-close-join-room");
    if (btnCloseJoinRoom) {
      btnCloseJoinRoom.onclick = () => {
        this.joinRoomModalOpen = false;
        this.render();
      };
    }

    if (this.joinRoomModalOpen) {
      const input4DigitCode = document.getElementById("input-4digit-code");
      const btnSubmitJoinCode = document.getElementById("btn-submit-join-code");
      if (input4DigitCode) {
        input4DigitCode.oninput = (e) => {
          this.enteredJoinCode = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
          this.render();
        };
        input4DigitCode.onkeydown = (e) => {
          if (e.key === "Enter") this.submitJoinTableCode(this.enteredJoinCode || input4DigitCode.value);
        };
      }
      if (btnSubmitJoinCode) {
        btnSubmitJoinCode.onclick = () => {
          this.submitJoinTableCode(this.enteredJoinCode || input4DigitCode?.value);
        };
      }
    }

    // Add Friend Modal Handlers
    const btnCloseAddFriend = document.getElementById("btn-close-add-friend");
    if (btnCloseAddFriend) {
      btnCloseAddFriend.onclick = () => {
        this.addFriendModalOpen = false;
        this.render();
      };
    }

    const inputFriendMobile = document.getElementById("input-friend-mobile");
    const btnSubmitAddFriend = document.getElementById("btn-submit-add-friend");

    const doSubmitAddFriend = () => {
      if (!inputFriendMobile) return;
      const mob = inputFriendMobile.value.trim();
      const res = userManager.addFriendByMobile(mob);
      if (res.success) {
        this.addFriendModalOpen = false;
        this.addFriendError = null;
        alert(res.message);
        this.render();
      } else {
        this.addFriendError = res.error;
        this.render();
      }
    };

    if (btnSubmitAddFriend) btnSubmitAddFriend.onclick = doSubmitAddFriend;
    if (inputFriendMobile) {
      inputFriendMobile.onkeydown = (e) => {
        if (e.key === "Enter") doSubmitAddFriend();
      };
    }

    document.querySelectorAll(".btn-lobby-tier").forEach(tierBtn => {
      tierBtn.onclick = () => {
        const betVal = parseInt(tierBtn.getAttribute("data-bet"), 10);
        if (betVal) {
          this.selectedBet = betVal;
          this.render();
        }
      };
    });

    const btnLobbyStartGame = document.getElementById("btn-lobby-start-game");
    if (btnLobbyStartGame) {
      btnLobbyStartGame.onclick = () => {
        this.startGame(this.lobbyMode, this.selectedBet);
      };
    }

    const btnLobbyProfile = document.getElementById("btn-lobby-profile");
    if (btnLobbyProfile) btnLobbyProfile.onclick = () => { this.profileModalOpen = true; this.render(); };

    const btnLobbyRules = document.getElementById("btn-lobby-rules");
    if (btnLobbyRules) btnLobbyRules.onclick = () => { this.rulesOpen = true; this.render(); };

    const btnLobbySwitchAcc = document.getElementById("btn-lobby-switch-acc");
    if (btnLobbySwitchAcc) {
      btnLobbySwitchAcc.onclick = () => {
        userManager.logout();
        this.inLobby = false;
        this.loginModalOpen = true;
        this.loginError = null;
        this.render();
      };
    }

    // Profile Modal Open / Close / Switch Account
    const btnOpenProfile = document.getElementById("btn-open-profile");
    const btnCloseProfile = document.getElementById("btn-close-profile");
    const btnProfileDone = document.getElementById("btn-profile-done");
    const btnSwitchAccount = document.getElementById("btn-switch-account");

    if (btnOpenProfile) btnOpenProfile.onclick = () => { this.profileModalOpen = true; this.render(); };
    if (btnCloseProfile) btnCloseProfile.onclick = () => { this.profileModalOpen = false; this.render(); };
    if (btnProfileDone) btnProfileDone.onclick = () => { this.profileModalOpen = false; this.render(); };
    if (btnSwitchAccount) {
      btnSwitchAccount.onclick = () => {
        userManager.logout();
        this.profileModalOpen = false;
        this.inLobby = false;
        this.loginModalOpen = true;
        this.loginError = null;
        this.render();
      };
    }

    // Exit Game Modal Open / Cancel / Confirm
    const btnOpenExit = document.getElementById("btn-open-exit");
    const btnCloseExit = document.getElementById("btn-close-exit");
    const btnCancelExit = document.getElementById("btn-cancel-exit");
    const btnConfirmExit = document.getElementById("btn-confirm-exit");

    if (btnOpenExit) btnOpenExit.onclick = () => { this.exitModalOpen = true; this.render(); };
    if (btnCloseExit) btnCloseExit.onclick = () => { this.exitModalOpen = false; this.render(); };
    if (btnCancelExit) btnCancelExit.onclick = () => { this.exitModalOpen = false; this.render(); };
    if (btnConfirmExit) {
      btnConfirmExit.onclick = () => {
        const myTeam = this.mpState.roomCode ? this.mpState.myTeam : 1;
        userManager.recordMatch({
          matchId: `m_${Date.now()}`,
          opponent: this.mpState.roomCode ? (myTeam === 1 ? this.mpClient.guestName : this.mpClient.hostName) : "System AI",
          mode: this.mpState.roomCode ? `Online Room #${this.mpState.roomCode}` : "Solo vs AI",
          bet: this.currentBet,
          pot: this.matchPot,
          result: "FORFEITED",
          coinsChange: -this.currentBet,
          durationSec: Math.round((Date.now() - this.engine.stats.startTime) / 1000),
          kills: myTeam === 1 ? this.engine.team1Kills : this.engine.team2Kills
        });

        if (this.mpState.roomCode) {
          this.mpClient.sendForfeit(myTeam, this.mpState.myPlayerId);
          this.mpClient.leaveRoom();
        }

        this.engine.forfeit(myTeam);

        this.exitModalOpen = false;
        this.turnTimer.stop();
        this.inLobby = true;
        this.engine.log("🚪 You exited the match.");
        this.render();
      };
    }

    // Inactivity Dismissal -> Return to Lobby
    const btnInactivityDismiss = document.getElementById("btn-inactivity-dismiss");
    if (btnInactivityDismiss) {
      btnInactivityDismiss.onclick = () => {
        this.inactivityModalOpen = false;
        this.turnTimer.stop();
        this.inLobby = true;
        this.render();
      };
    }

    // Dual Gate 23 Decision Modal
    const btnGateContinue = document.getElementById("btn-gate-continue");
    if (btnGateContinue) {
      btnGateContinue.onclick = () => this.handleGate23Decision("continue");
    }

    const btnGateRestart = document.getElementById("btn-gate-restart");
    if (btnGateRestart) {
      btnGateRestart.onclick = () => this.handleGate23Decision("restart");
    }

    // Language Toggles
    const btnToggleLang = document.getElementById("btn-toggle-lang");
    if (btnToggleLang) {
      btnToggleLang.onclick = () => {
        toggleLanguage();
        this.render();
      };
    }

    const btnLobbyLang = document.getElementById("btn-lobby-lang-toggle");
    if (btnLobbyLang) {
      btnLobbyLang.onclick = () => {
        toggleLanguage();
        this.render();
      };
    }

    const btnLoginLang = document.getElementById("btn-login-lang-toggle");
    if (btnLoginLang) {
      btnLoginLang.onclick = () => {
        toggleLanguage();
        this.render();
      };
    }

    // Currency & Store Actions
    const btnLobbyAddCoins = document.getElementById("btn-lobby-add-coins");
    const btnNavStore = document.getElementById("btn-nav-store");
    const onAddCoins = () => {
      const res = wallet.claimRefill();
      if (res.success) {
        sounds.playBonusRoll();
        alert(`🎁 Free Refill! Added 🪙${res.amount.toLocaleString()} coins!\nNew Balance: 🪙${res.balance.toLocaleString()}`);
        this.render();
      } else {
        alert(`🪙 Coin Refill: Available when balance is under 🪙250. You currently have 🪙${wallet.getBalance().toLocaleString()}!`);
      }
    };
    if (btnLobbyAddCoins) btnLobbyAddCoins.onclick = (e) => { e.stopPropagation(); onAddCoins(); };
    if (btnNavStore) btnNavStore.onclick = onAddCoins;
  }
}

function initBharakhatta() {
  new BharakhattaApp();
}

window.initBharakhatta = initBharakhatta;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBharakhatta);
} else {
  initBharakhatta();
}
