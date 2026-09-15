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
            <span class="brand-subtitle">బాఱఖట్టా</span>
          </div>
        </div>

        <!-- Formatted Top Line: Game Coins - Login Name (Nick) - Pot Coins -->
        <div class="header-economy-bar" id="game-header-bar">
          <div class="econ-pill econ-wallet" id="btn-open-wallet" title="Your Game Coins (Click to view wallet / bet)">
            <span class="econ-icon">🪙</span>
            <span class="econ-label">Game Coins:</span>
            <strong class="econ-val">${walletCoins.toLocaleString()}</strong>
          </div>

          <span class="econ-sep">•</span>

          ${options.user ? `
            <div class="econ-pill econ-user" id="btn-open-profile" title="Player Profile & Lifetime History">
              <span class="econ-icon">👤</span>
              <span class="econ-label">Name:</span>
              <strong class="econ-val econ-nick">${options.user.nickName || options.user.name}</strong>
            </div>
          ` : `
            <button class="btn-login-header" id="btn-header-login" title="Login with Mobile Number">
              📱 Login
            </button>
          `}

          <span class="econ-sep">•</span>

          <div class="econ-pill econ-pot" id="btn-open-bet" title="Total Match Pot to Win">
            <span class="econ-icon">🏆</span>
            <span class="econ-label">Pot Coins:</span>
            <strong class="econ-val">🪙${matchPot.toLocaleString()}</strong>
          </div>
        </div>

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

        <!-- In-Game Chat Button (Always available for smilies & text) -->
        <button id="btn-open-chat" class="btn-icon btn-chat-glow" title="In-Game Live Chat & Smilies">
          💬 Chat ${unreadChatCount > 0 ? `<span class="chat-badge">${unreadChatCount}</span>` : ""}
        </button>

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
