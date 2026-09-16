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
      <!-- Top Row: Logo, Live Timer, and Prominent Quit Button -->
      <div class="header-top-row">
        <div class="header-brand">
          <span class="logo-icon">🐚</span>
          <div class="brand-text-col">
            <h1 class="brand-title">${t("appTitle")}</h1>
            <span class="brand-subtitle">${currentLang === "en" ? "బాఱఖట్టా" : "Bharakhatta"}</span>
          </div>
        </div>

        <!-- 30s Turn Timer -->
        <div class="turn-timer-pill ${timerColorClass}" title="30-Second Turn Timer">
          <span class="timer-icon">⏳</span>
          <span class="timer-seconds">${timeLeft}s</span>
        </div>

        <!-- Prominent ALWAYS VISIBLE Quit Match Button -->
        <button id="btn-open-exit" class="btn-quit-game-header" title="${t("exit")}">
          🚪 ${t("exit")}
        </button>
      </div>

      <!-- Formatted Middle Line: Game Coins - Nick Name - Pot Coins -->
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

        <!-- Room Indicator -->
        ${inOnlineRoom ? `
          <div class="room-indicator-pill" id="btn-open-mp-badge" title="${t("boardNumber")}: #${mpState.roomCode}">
            <span class="live-dot">${isPaired ? "🟢" : "⏳"}</span>
            <span>Table: <strong>#${mpState.roomCode}</strong></span>
          </div>
        ` : ""}
      </div>

      <!-- Quick Action Controls -->
      <div class="header-controls">
        <!-- In-Game Chat Button -->
        <button id="btn-open-chat" class="btn-icon btn-chat-glow" title="${t("chat")}">
          💬 ${t("chat")} ${unreadChatCount > 0 ? `<span class="chat-badge">${unreadChatCount}</span>` : ""}
        </button>

        <!-- Friends Hub Button -->
        <button id="btn-header-friends" class="btn-icon btn-friends-glow" title="Friends & Rooms">
          👥 Friends
        </button>

        <!-- Bet Adjust -->
        <button id="btn-open-bet" class="btn-icon btn-bet-chip" title="${t("bet")}">
          🪙 ${t("bet")}
        </button>

        <!-- Language Toggle -->
        <button id="btn-toggle-lang" class="btn-icon btn-lang-toggle" title="Switch Language / భాష మార్చండి">
          ${currentLang === "en" ? "🌐 తెలుగు" : "🌐 English"}
        </button>

        <!-- Sound Toggle -->
        <button id="btn-toggle-sound" class="btn-icon ${soundMuted ? "btn-muted" : ""}" title="Toggle Sound">
          ${soundMuted ? "🔇" : "🔊"}
        </button>

        <!-- Rules -->
        <button id="btn-open-rules" class="btn-icon" title="${t("rules")}">
          📜
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
