// Main application coordinator for Bharakhatta
// Single-screen mobile layout & Real-time multiplayer across multiple mobiles

import "./styles/app.css";
import { BharakhattaEngine, GAME_STATUS } from "./game/engine.js";
import { renderBoard } from "./components/BoardView.js";
import { renderCowrieArea } from "./components/CowrieShellsView.js";
import { renderHeader, renderToastFeed } from "./components/PlayerCards.js";
import { renderRulesModal } from "./components/RulesModal.js";
import { renderVictoryModal } from "./components/VictoryModal.js";
import { renderMobileModal, generateMobileQr } from "./components/MobileModal.js";
import { renderMultiplayerModal } from "./components/MultiplayerModal.js";
import { MultiplayerClient } from "./game/multiplayerClient.js";
import { sounds } from "./audio/soundManager.js";
import { haptics } from "./utils/haptics.js";

class BharakhattaApp {
  constructor() {
    this.logs = [];
    this.rulesOpen = false;
    this.mobileOpen = false;
    this.mpModalOpen = false;
    this.soundMuted = false;
    this.qrDataUrl = null;
    this.roomQrDataUrl = null;

    // Official high-speed GitHub Pages URL (works on all devices, iOS, Android, no ISP blocks)
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
      onLog: (entry) => this.addLog(entry)
    });

    this.bindGlobalKeys();
    this.initMobileAudioUnlock();
    this.checkUrlRoomParam();
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
      if (e.code === "Space" && !this.rulesOpen && !this.mobileOpen && !this.mpModalOpen) {
        e.preventDefault();
        this.attemptRoll();
      }
      if (e.key === "Escape") {
        this.rulesOpen = false;
        this.mobileOpen = false;
        this.mpModalOpen = false;
        this.render();
      }
    });
  }

  attemptRoll() {
    const state = this.engine.getStateSnapshot();
    if (state.status !== GAME_STATUS.WAITING_FOR_ROLL) return;

    // Check multiplayer turn
    if (this.mpState.roomCode && state.currentPlayer.id !== this.mpState.myPlayerId) {
      return;
    }
    if (!this.mpState.roomCode && state.currentPlayer.isAI) {
      return;
    }

    haptics.rollTumble();
    const rollResult = this.engine.roll();

    // Broadcast roll to room peer
    if (this.mpState.roomCode && rollResult) {
      this.mpClient.sendRoll(rollResult);
    }
  }

  attemptMove(move) {
    const state = this.engine.getStateSnapshot();
    if (state.status !== GAME_STATUS.WAITING_FOR_MOVE) return;

    // Check multiplayer turn
    if (this.mpState.roomCode && state.currentPlayer.id !== this.mpState.myPlayerId) {
      return;
    }

    haptics.step();
    this.engine.executeMove(move);

    // Broadcast move to room peer
    if (this.mpState.roomCode) {
      this.mpClient.sendMove(move);
    }
  }

  // Multiplayer handlers
  async handleRoomCreated(data) {
    this.mpState.roomCode = data.roomCode;
    this.mpState.myPlayerId = data.playerId;
    this.mpState.myTeam = data.team;
    this.mpState.isHost = true;
    this.mpState.players = data.players;
    this.mpState.errorMsg = null;

    // Configure engine for 2 human players on separate devices
    this.engine.players = [
      { id: 1, team: 1, name: "Player 1 (You)", avatar: "👑", isAI: false },
      { id: 2, team: 2, name: "Player 2 (Friend)", avatar: "🦚", isAI: false }
    ];
    this.engine.initGame();

    const roomLink = `${this.baseMobileUrl}?room=${data.roomCode}`;
    this.roomQrDataUrl = await generateMobileQr(roomLink);

    this.engine.log(`🏠 Created Room #${data.roomCode}. Share link or QR code with your friend!`);
    this.render();
  }

  async handleRoomJoined(data) {
    this.mpState.roomCode = data.roomCode;
    this.mpState.myPlayerId = data.playerId;
    this.mpState.myTeam = data.team;
    this.mpState.isHost = false;
    this.mpState.players = data.players;
    this.mpState.errorMsg = null;

    this.engine.players = [
      { id: 1, team: 1, name: "Player 1 (Friend)", avatar: "👑", isAI: false },
      { id: 2, team: 2, name: "Player 2 (You)", avatar: "🦚", isAI: false }
    ];
    this.engine.initGame();

    const roomLink = `${this.baseMobileUrl}?room=${data.roomCode}`;
    this.roomQrDataUrl = await generateMobileQr(roomLink);

    this.engine.log(`🤝 Joined Friend's Room #${data.roomCode}! You are Team ${data.team}.`);
    this.render();
  }

  handlePlayerJoined(player, players) {
    this.mpState.players = players;
    this.engine.log(`🎉 ${player.name} connected to the room! Let the Bharakhatta match begin!`);
    sounds.playBonusRoll();
    this.render();
  }

  handlePlayerLeft(playerId, players) {
    this.mpState.players = players;
    this.engine.log(`⚠️ A player disconnected from the room.`);
    this.render();
  }

  handleRemoteRoll(rollResult) {
    // Peer rolled shells: mirror the roll locally
    haptics.rollTumble();
    this.engine.status = GAME_STATUS.ROLLING;
    sounds.playCowrieRoll();
    this.engine.currentRoll = rollResult;
    this.render();

    setTimeout(() => {
      this.engine.resolveRoll(rollResult);
      this.render();
    }, 600);
  }

  handleRemoteMove(move) {
    // Peer moved a coin: mirror the move locally
    haptics.step();
    // Find matching local coin reference
    if (move.type === "RELEASE_JAIL") {
      const localRelease = this.engine.validMoves.find(m => m.type === "RELEASE_JAIL");
      if (localRelease) {
        this.engine.executeMove(localRelease);
      }
    } else {
      const localMove = this.engine.validMoves.find(m => m.coin && m.coin.id === move.coin.id && m.toStep === move.toStep);
      if (localMove) {
        this.engine.executeMove(localMove);
      }
    }
  }

  handleRemoteRestart() {
    this.engine.initGame();
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

    if (headerEl) headerEl.innerHTML = renderHeader(state, this.soundMuted, this.mpState);
    if (boardEl) boardEl.innerHTML = renderBoard(state, this.mpState);
    if (cowrieEl) cowrieEl.innerHTML = renderCowrieArea(state, this.mpState);
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
    if (state.winner) {
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

    // Multiplayer Header Buttons
    const btnOpenMp = document.getElementById("btn-open-multiplayer");
    const btnMpBadge = document.getElementById("btn-open-mp-badge");
    if (btnOpenMp) {
      btnOpenMp.onclick = () => {
        this.mpModalOpen = true;
        this.render();
      };
    }
    if (btnMpBadge) {
      btnMpBadge.onclick = () => {
        this.mpModalOpen = true;
        this.render();
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
        this.engine.initGame();
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
