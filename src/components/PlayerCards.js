// Compact Header & Player status for Bharakhatta

export function renderHeader(gameState, soundMuted, mpState = null, options = {}) {
  const { gameMode, diceMode, status, currentPlayer, winner } = gameState;
  const inOnlineRoom = mpState && mpState.roomCode;
  const isPaired = inOnlineRoom && mpState.players && mpState.players.length >= 2;
  const walletCoins = options.walletCoins !== undefined ? options.walletCoins : 1000;
  const matchPot = options.matchPot || 0;
  const timeLeft = options.timeLeft !== undefined ? options.timeLeft : 30;
  const unreadChatCount = options.unreadChatCount || 0;

  let timerColorClass = "timer-normal";
  if (timeLeft <= 5) timerColorClass = "timer-urgent";
  else if (timeLeft <= 10) timerColorClass = "timer-warning";

  return `
    <header class="app-header">
      <div class="header-brand">
        <div class="brand-logo">
          <span class="logo-icon">🐚</span>
          <div>
            <h1 class="brand-title">BHARAKHATTA</h1>
            <span class="brand-subtitle">బాఱఖట్టా • Village Cowrie Board</span>
          </div>
        </div>

        <!-- Wallet Coins Chip -->
        <div class="wallet-header-pill" id="btn-open-wallet" title="Your Coin Wallet (Click to change bet)">
          <span class="coin-icon">🪙</span>
          <span class="coin-bal">${walletCoins.toLocaleString()}</span>
        </div>

        <!-- User Profile Badge -->
        ${options.user ? `
          <div class="user-header-pill" id="btn-open-profile" title="Player Profile & Match History (Click to view)">
            <span class="user-icon">👤</span>
            <span class="user-name-short">${options.user.name}</span>
            <span class="user-mob-badge">📱..${options.user.mobile.slice(-4)}</span>
          </div>
        ` : `
          <button class="btn-login-header" id="btn-header-login" title="Login with Mobile Number">
            📱 Login
          </button>
        `}

        <!-- Match Pot Badge (if bet is active) -->
        ${matchPot > 0 ? `
          <div class="pot-header-badge" title="Total Match Pot">
            <span class="pot-icon">🏆</span>
            <span class="pot-val">Pot: 🪙${matchPot.toLocaleString()}</span>
          </div>
        ` : ""}

        <!-- Room Indicator -->
        ${inOnlineRoom ? `
          <div class="room-indicator-pill" id="btn-open-mp-badge" title="Room #${mpState.roomCode}">
            <span class="live-dot">${isPaired ? "🟢" : "⏳"}</span>
            <span>Room: <strong>#${mpState.roomCode}</strong></span>
          </div>
        ` : ""}
      </div>

      <div class="header-controls">
        <!-- 30s Turn Timer Pill -->
        <div class="turn-timer-pill ${timerColorClass}" title="30-Second Turn Timer">
          <span class="timer-icon">⏳</span>
          <span class="timer-seconds">${timeLeft}s</span>
        </div>

        <!-- Show Chat button when paired in multiplayer -->
        ${isPaired ? `
          <button id="btn-open-chat" class="btn-icon btn-chat-glow" title="In-Game Live Chat">
            💬 Chat ${unreadChatCount > 0 ? `<span class="chat-badge">${unreadChatCount}</span>` : ""}
          </button>
        ` : ""}

        <!-- Only show 'Play with Friend' when NOT yet paired -->
        ${!isPaired ? `
          <button id="btn-open-multiplayer" class="btn-icon btn-mp-glow" title="Play with a friend on another mobile phone">
            👥 Play with Friend
          </button>
        ` : ""}

        <button id="btn-open-bet" class="btn-icon btn-bet-chip" title="Match Coin Stake / Bet">
          🪙 Bet
        </button>

        <button id="btn-toggle-dice" class="btn-toggle-mode" title="Switch between 6 Guvvalu and Standard Die">
          ${diceMode === "cowries" ? "🐚 Guvvalu" : "🎲 Die"}
        </button>

        <button id="btn-toggle-sound" class="btn-icon ${soundMuted ? "btn-muted" : ""}" title="Toggle Sound">
          ${soundMuted ? "🔇" : "🔊"}
        </button>

        <button id="btn-open-rules" class="btn-icon" title="Game Rules & Guide">
          📜
        </button>

        <!-- Exit Match Button -->
        <button id="btn-open-exit" class="btn-icon btn-exit-glow" title="Exit Match">
          🚪 Exit
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
