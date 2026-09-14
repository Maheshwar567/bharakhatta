// Compact Header & Player status for Bharakhatta

export function renderHeader(gameState, soundMuted, mpState = null) {
  const { gameMode, diceMode, status, currentPlayer, winner } = gameState;
  const inOnlineRoom = mpState && mpState.roomCode;

  return `
    <header class="app-header">
      <div class="header-brand">
        <div class="brand-logo">
          <span class="logo-icon">🐚</span>
          <div>
            <h1 class="brand-title">BHARAKHATTA</h1>
            <span class="brand-subtitle">బాఱఖట్టా • Village Cowrie Board Game</span>
          </div>
        </div>

        ${inOnlineRoom ? `
          <div class="room-indicator-pill" id="btn-open-mp-badge" title="Click to view room details">
            <span class="live-dot">🟢</span>
            <span>Room: <strong>#${mpState.roomCode}</strong></span>
          </div>
        ` : ""}
      </div>

      <div class="header-controls">
        <button id="btn-open-multiplayer" class="btn-icon btn-mp-glow" title="Play with a friend on another mobile phone">
          👥 Play with Friend
        </button>

        <button id="btn-open-mobile" class="btn-icon" title="Scan QR Code to open on phone">
          📱 QR
        </button>

        <button id="btn-toggle-dice" class="btn-toggle-mode" title="Switch between 6 Guvvalu and Standard Die">
          ${diceMode === "cowries" ? "🐚 Guvvalu" : "🎲 Die"}
        </button>

        <button id="btn-toggle-sound" class="btn-icon ${soundMuted ? "btn-muted" : ""}" title="Toggle Sound">
          ${soundMuted ? "🔇" : "🔊"}
        </button>

        <button id="btn-open-rules" class="btn-icon" title="Game Rules & Guide">
          📜 Rules
        </button>

        <button id="btn-restart-game" class="btn-primary-sm" title="New Match">
          🔄
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
