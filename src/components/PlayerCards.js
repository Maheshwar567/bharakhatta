// Compact Header & Player status for Bharakhatta
import { t, getLanguage } from "../utils/i18n.js";

export function renderHeader(gameState, soundMuted, mpState = null, options = {}) {
  const { gameMode, diceMode, status, currentPlayer, winner } = gameState;
  const inOnlineRoom = mpState && mpState.roomCode;
  const isPaired = inOnlineRoom && mpState.players && mpState.players.length >= 2;
  const walletCoins = options.walletCoins !== undefined ? options.walletCoins : 1000;
  const matchPot = options.matchPot || 0;
  const timeLeft = options.timeLeft !== undefined ? options.timeLeft : 30;
  const unreadChatCount = options.unreadChatCount || 0;
  const currentLang = getLanguage();

  let timerColorClass = "timer-normal";
  if (timeLeft <= 5) timerColorClass = "timer-urgent";
  else if (timeLeft <= 10) timerColorClass = "timer-warning";

  return `
    <header class="app-header">
      <div class="header-brand">
        <div class="brand-logo">
          <span class="logo-icon">🐚</span>
          <div>
            <h1 class="brand-title">${t("appTitle")}</h1>
            <span class="brand-subtitle">${currentLang === "en" ? "బాఱఖట్టా" : "Bharakhatta"}</span>
          </div>
        </div>

        <!-- Formatted Top Line: Game Coins - Login Name (Nick) - Pot Coins -->
        <div class="header-economy-bar" id="game-header-bar">
          <div class="econ-pill econ-wallet" id="btn-open-wallet" title="${t("gameCoins")}">
            <span class="econ-icon">🪙</span>
            <span class="econ-label">${t("gameCoins")}:</span>
            <strong class="econ-val">${walletCoins.toLocaleString()}</strong>
          </div>

          <span class="econ-sep">•</span>

          ${options.user ? `
            <div class="econ-pill econ-user" id="btn-open-profile" title="${t("name")}">
              <span class="econ-icon">👤</span>
              <span class="econ-label">${t("name")}:</span>
              <strong class="econ-val econ-nick">${options.user.nickName || options.user.name}</strong>
            </div>
          ` : `
            <button class="btn-login-header" id="btn-header-login" title="Login with Mobile Number">
              📱 Login
            </button>
          `}

          <span class="econ-sep">•</span>

          <div class="econ-pill econ-pot" id="btn-open-bet" title="${t("potCoins")}">
            <span class="econ-icon">🏆</span>
            <span class="econ-label">${t("potCoins")}:</span>
            <strong class="econ-val">🪙${matchPot.toLocaleString()}</strong>
          </div>
        </div>

        <!-- Room Indicator -->
        ${inOnlineRoom ? `
          <div class="room-indicator-pill" id="btn-open-mp-badge" title="${t("boardNumber")}: #${mpState.roomCode}">
            <span class="live-dot">${isPaired ? "🟢" : "⏳"}</span>
            <span>${t("room")}: <strong>#${mpState.roomCode}</strong></span>
          </div>
        ` : ""}
      </div>

      <div class="header-controls">
        <!-- 30s Turn Timer Pill -->
        <div class="turn-timer-pill ${timerColorClass}" title="30-Second Turn Timer">
          <span class="timer-icon">⏳</span>
          <span class="timer-seconds">${timeLeft}s</span>
        </div>

        <!-- Language Toggle Button: English / Telugu -->
        <button id="btn-toggle-lang" class="btn-icon btn-lang-toggle" title="Switch Language / భాష మార్చండి" style="font-weight: 700; color: #f1c40f; border: 1px solid rgba(241,196,15,0.4); background: rgba(241,196,15,0.12);">
          ${currentLang === "en" ? "🌐 తెలుగు" : "🌐 English"}
        </button>

        <!-- In-Game Chat Button (Always available for smilies & text) -->
        <button id="btn-open-chat" class="btn-icon btn-chat-glow" title="${t("chat")}">
          💬 ${t("chat")} ${unreadChatCount > 0 ? `<span class="chat-badge">${unreadChatCount}</span>` : ""}
        </button>

        <!-- Only show 'Play with Friend' when NOT yet paired -->
        ${!isPaired ? `
          <button id="btn-open-multiplayer" class="btn-icon btn-mp-glow" title="${t("playWithFriend")}">
            👥 ${t("playWithFriend")}
          </button>
        ` : ""}

        <button id="btn-open-bet" class="btn-icon btn-bet-chip" title="${t("bet")}">
          🪙 ${t("bet")}
        </button>

        <button id="btn-toggle-dice" class="btn-toggle-mode" title="Switch between 6 Guvvalu and Standard Die">
          ${diceMode === "cowries" ? "🐚 Guvvalu" : "🎲 Die"}
        </button>

        <button id="btn-toggle-sound" class="btn-icon ${soundMuted ? "btn-muted" : ""}" title="Toggle Sound">
          ${soundMuted ? "🔇" : "🔊"}
        </button>

        <button id="btn-open-rules" class="btn-icon" title="${t("rules")}">
          📜
        </button>

        <!-- Exit Match Button -->
        <button id="btn-open-exit" class="btn-icon btn-exit-glow" title="${t("exit")}">
          🚪 ${t("exit")}
        </button>
      </div>
    </header>
  `;
}

export function renderToastFeed(logs) {
  if (!logs || logs.length === 0) return "";
  const latest = logs[logs.length - 1];

  return `
    <div class="live-ticker-strip">
      <span class="ticker-icon">📢</span>
      <span class="ticker-text">${latest.text}</span>
    </div>
  `;
}

export function renderLogFeed(logs) {
  const recent = logs.slice(-6).reverse();

  return `
    <div class="activity-log-card">
      <div class="log-header">
        <span>📜 Action Chronicle</span>
        <span class="log-hint">Live match events</span>
      </div>
      <div class="log-entries">
        ${recent.map(l => `
          <div class="log-entry">
            <span class="log-time">${l.time}</span>
            <span class="log-msg">${l.text}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
