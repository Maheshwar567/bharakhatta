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
import { MultiplayerClient } from "./game/multiplayerClient.js";
import { wallet } from "./game/wallet.js";
import { TurnTimer } from "./game/turnTimer.js";
import { sounds } from "./audio/soundManager.js";
import { haptics } from "./utils/haptics.js";

class BharakhattaApp {
  constructor() {
    this.logs = [];
    this.rulesOpen = false;
    this.mobileOpen = false;
    this.mpModalOpen = false;
    this.chatOpen = false;
    this.betModalOpen = false;
    this.soundMuted = false;
    this.qrDataUrl = null;
    this.roomQrDataUrl = null;

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
      onSyncRoll: (rollResult) => this.handleRemoteRoll(rollResult),
      onSyncMove: (move) => this.handleRemoteMove(move),
      onSyncRestart: () => this.handleRemoteRestart(),
      onChatReceived: (chatMsg) => this.handleChatReceived(chatMsg),
      onBetSynced: (bet) => this.handleBetSynced(bet),
      onError: (msg) => {
        this.mpState.errorMsg = msg;
        this.render();
      },
      onStatusChange: (status) => {
        this.mpState.isConnected = status === "connected";
        this.render();
      }
    });

    this.initDOM();

    this.engine = new BharakhattaEngine({
      gameMode: "2p",
      diceMode: "cowries",
      onStateChange: () => {
        if (this.engine) this.render();
      },
      onLog: (entry) => this.addLog(entry),
      onTurnChange: (player) => this.handleTurnChange(player)
    });

    this.bindGlobalKeys();
    this.initMobileAudioUnlock();
    this.checkUrlRoomParam();
    this.turnTimer.start();
    this.render();
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
      this.engine.log(`⏰ Time's up (30s)! Auto-playing for ${state.currentPlayer.name}...`);
      if (state.status === GAME_STATUS.WAITING_FOR_ROLL) {
        this.attemptRoll();
      } else if (state.status === GAME_STATUS.WAITING_FOR_MOVE) {
        const move = this.engine.getBestLegalMove();
        if (move) {
          this.attemptMove(move);
        } else {
          this.engine.advanceTurn();
        }
      }
    }
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

    haptics.rollTumble();
    this.turnTimer.reset();
    const roll = this.engine.roll();
    if (this.mpState.roomCode && roll) {
      this.mpClient.sendRoll(roll);
    }
  }

  attemptMove(move) {
    const state = this.engine.getStateSnapshot();
    if (state.status !== GAME_STATUS.WAITING_FOR_MOVE) return;
    if (this.mpState.roomCode && state.currentPlayer.id !== this.mpState.myPlayerId) return;

    haptics.step();
    this.turnTimer.reset();
    this.engine.executeMove(move);
    if (this.mpState.roomCode) {
      this.mpClient.sendMove(move);
    }
  }

  async handleRoomCreated(data) {
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

    this.engine.players = [
      { id: 1, team: 1, name: "Player 1 (You)", avatar: "👑", isAI: false },
      { id: 2, team: 2, name: "Player 2 (Friend)", avatar: "🦚", isAI: false }
    ];
    this.engine.initGame();
    this.turnTimer.start();

    const shareUrl = `${this.baseMobileUrl}?room=${data.roomCode}`;
    this.roomQrDataUrl = await generateMobileQr(shareUrl);
    this.engine.log(`🏠 Created Room #${data.roomCode} (Bet 🪙${this.currentBet}). Share code with friend!`);
    this.render();
  }

  async handleRoomJoined(data) {
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

    this.engine.players = [
      { id: 1, team: 1, name: "Player 1 (Friend)", avatar: "👑", isAI: false },
      { id: 2, team: 2, name: "Player 2 (You)", avatar: "🦚", isAI: false }
    ];
    this.engine.initGame();
    this.turnTimer.start();

    const shareUrl = `${this.baseMobileUrl}?room=${data.roomCode}`;
    this.roomQrDataUrl = await generateMobileQr(shareUrl);
    this.engine.log(`🤝 Joined Room #${data.roomCode}! You are Team ${data.team}. Match pot: 🪙${this.matchPot.toLocaleString()}`);
    this.render();
  }

  handlePlayerJoined(player, players) {
    this.mpState.players = players;
    this.engine.log(`🎉 ${player.name} connected! Both players paired. Match pot: 🪙${this.matchPot.toLocaleString()}`);
    sounds.playBonusRoll();
    this.turnTimer.reset();
    this.render();
  }

  handlePlayerLeft(playerId, players) {
    this.mpState.players = players;
    this.engine.log(`⚠️ Opponent disconnected.`);
    this.render();
  }

  handleRemoteRoll(rollResult) {
    haptics.rollTumble();
    this.engine.status = GAME_STATUS.ROLLING;
    sounds.playCowrieRoll();
    this.engine.currentRoll = rollResult;
    this.turnTimer.reset();
    this.render();

    setTimeout(() => {
      this.engine.resolveRoll(rollResult);
      this.render();
    }, 600);
  }

  handleRemoteMove(move) {
    haptics.step();
    // Force execute remote move directly on the authoritative coin instance
    this.engine.executeMove(move, true);
    this.turnTimer.reset();
  }

  handleRemoteRestart() {
    this.engine.initGame();
    this.winnerAwarded = false;
    this.turnTimer.start();
    this.engine.log(`🔄 Host restarted the game!`);
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
      walletCoins: wallet.getBalance(),
      matchPot: this.matchPot,
      timeLeft: this.turnTimer.getTimeLeft(),
      unreadChatCount: this.unreadChatCount
    };

    if (headerEl) headerEl.innerHTML = renderHeader(state, this.soundMuted, this.mpState, headerOptions);
    if (boardEl) boardEl.innerHTML = renderBoard(state, this.mpState);
    if (cowrieEl) cowrieEl.innerHTML = renderCowrieArea(state, this.mpState, this.turnTimer.getTimeLeft());
    if (tickerEl) tickerEl.innerHTML = renderToastFeed(this.logs);

    let modalsHtml = "";
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
        if (state.winner.team === myTeam) {
          wallet.awardPot(this.matchPot);
          this.engine.log(`🏆 MATCH WON! You received the full pot: 🪙${this.matchPot.toLocaleString()} coins!`);
        }
      }
      haptics.victory();
      modalsHtml += renderVictoryModal(state.winner);
    }
    if (modalEl) modalEl.innerHTML = modalsHtml;

    this.attachEventListeners(state);
  }

  attachEventListeners(state) {
    // Roll Button
    const btnRoll = document.getElementById("btn-roll-dice");
    if (btnRoll) {
      btnRoll.onclick = () => this.attemptRoll();
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

    // Coin clicks
    const coinEls = document.querySelectorAll(".coin-selectable");
    coinEls.forEach(el => {
      el.onclick = (e) => {
        e.stopPropagation();
        const coinId = el.getAttribute("data-coin-id");
        const move = state.validMoves.find(m => m.coin && m.coin.id === coinId);
        if (move) {
          this.attemptMove(move);
        } else if (state.validMoves.some(m => m.type === "RELEASE_JAIL")) {
          const jailMove = state.validMoves.find(m => m.type === "RELEASE_JAIL");
          if (jailMove) this.attemptMove(jailMove);
        }
      };
    });

    // Target cell clicks
    const targetCells = document.querySelectorAll(".cell-valid-target");
    targetCells.forEach(cell => {
      cell.onclick = () => {
        const r = parseInt(cell.getAttribute("data-r"), 10);
        const c = parseInt(cell.getAttribute("data-c"), 10);
        const move = state.validMoves.find(m => m.targetCoord && m.targetCoord.r === r && m.targetCoord.c === c);
        if (move) this.attemptMove(move);
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

    // Send Chat Message
    const btnSendChat = document.getElementById("btn-send-chat");
    const inputChatText = document.getElementById("input-chat-text");
    const doSendChat = () => {
      if (!inputChatText) return;
      const text = inputChatText.value.trim();
      if (!text) return;
      const myName = this.mpState.myPlayerId === 2 ? "Player 2" : "Player 1";
      this.mpClient.sendChat(text, myName);
      inputChatText.value = "";
    };
    if (btnSendChat) btnSendChat.onclick = doSendChat;
    if (inputChatText) {
      inputChatText.onkeydown = (e) => {
        if (e.key === "Enter") doSendChat();
      };
    }

    // Quick Taunt Buttons
    document.querySelectorAll(".btn-quick-taunt").forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute("data-taunt-index"), 10);
        const taunt = QUICK_TAUNTS[idx];
        if (taunt) {
          const myName = this.mpState.myPlayerId === 2 ? "Player 2" : "Player 1";
          this.mpClient.sendChat(taunt.text, myName);
        }
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
          alert("Please enter a 4-digit room code.");
          return;
        }
        await this.mpClient.joinRoom(code, name);
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

    // Victory Rematch
    const btnVictoryRestart = document.getElementById("btn-victory-restart");
    if (btnVictoryRestart) {
      btnVictoryRestart.onclick = () => {
        this.engine.initGame();
        this.winnerAwarded = false;
        this.turnTimer.start();
        if (this.mpState.roomCode) {
          this.mpClient.sendRestart();
        }
      };
    }
  }
}

function initBharakhatta() {
  new BharakhattaApp();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBharakhatta);
} else {
  initBharakhatta();
}
