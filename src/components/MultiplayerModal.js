// Modal for Creating, Joining, and Sharing Real-Time Multiplayer Rooms

export function renderMultiplayerModal(isOpen, state, qrDataUrl, roomLink) {
  if (!isOpen) return "";

  const { isConnected, roomCode, myPlayerId, isHost, players, errorMsg } = state;

  let bodyContent = "";

  if (roomCode) {
    // Inside active room view
    const isReady = players.length >= 2;
    bodyContent = `
      <div class="mp-room-active">
        <div class="room-code-badge">
          <span class="room-lbl">ROOM CODE</span>
          <span class="room-code-digits">${roomCode}</span>
        </div>

        <div class="mp-qr-box">
          ${qrDataUrl ? `<img src="${qrDataUrl}" alt="Scan to join room" class="mp-qr-img" />` : '<div class="qr-loading">Generating QR...</div>'}
          <p class="mp-qr-hint">📱 Friend can scan this with phone camera to join instantly!</p>
        </div>

        <div class="mp-share-link-row">
          <input type="text" readonly value="${roomLink}" class="url-input" id="input-mp-room-link" />
          <button class="btn-copy-url" id="btn-copy-room-link">📋 Copy Link</button>
        </div>

        <div class="mp-players-list">
          <h4>👥 Players in Room (${players.length} / 2):</h4>
          <div class="mp-player-chips">
            ${players.map(p => `
              <div class="mp-player-chip ${p.id === myPlayerId ? 'mp-chip-me' : ''}">
                <span class="chip-avatar">${p.team === 1 ? '👑' : '🦚'}</span>
                <span class="chip-name">${p.name}</span>
                <span class="chip-team">Team ${p.team}</span>
                ${p.id === myPlayerId ? '<span class="chip-you">(You)</span>' : ''}
              </div>
            `).join('')}
          </div>
        </div>

        ${!isReady ? `
          <div class="mp-waiting-notice">
            <div class="waiting-spinner">⏳</div>
            <p>Waiting for your friend to join on their mobile...</p>
          </div>
        ` : `
          <div class="mp-ready-notice">
            <span>🎉 Match is Ready! You are playing together in real time.</span>
          </div>
        `}
      </div>
    `;
  } else {
    // Create / Join selection view
    bodyContent = `
      <div class="mp-setup-tabs">
        <div class="mp-tab-content">
          ${errorMsg ? `<div class="mp-error-banner">⚠️ ${errorMsg}</div>` : ""}
          
          <div class="mp-form-card">
            <h3>🎮 Create a New Room</h3>
            <p class="mp-card-sub">Start a game on your phone and invite your friend</p>
            <div class="form-row">
              <label>Your Name:</label>
              <input type="text" id="input-host-name" value="Player 1" class="mp-input" maxlength="16" />
            </div>
            <div class="form-row">
              <label>Mode:</label>
              <select id="select-mp-mode" class="header-select">
                <option value="2p">2 Players (1 vs 1)</option>
                <option value="4p">4 Players (2 vs 2)</option>
              </select>
            </div>
            <button class="btn-primary btn-create-room" id="btn-action-create-room">
              🚀 Create Online Room
            </button>
          </div>

          <div class="mp-divider"><span>OR</span></div>

          <div class="mp-form-card">
            <h3>🔑 Join Existing Room</h3>
            <p class="mp-card-sub">Enter the 4-digit code shown on your friend's phone</p>
            <div class="form-row">
              <label>Room Code:</label>
              <input type="text" id="input-join-code" placeholder="e.g. 4829" class="mp-input mp-code-input" maxlength="6" />
            </div>
            <div class="form-row">
              <label>Your Name:</label>
              <input type="text" id="input-join-name" value="Player 2" class="mp-input" maxlength="16" />
            </div>
            <button class="btn-primary btn-join-room" id="btn-action-join-room">
              🤝 Join Friend's Room
            </button>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="modal-backdrop" id="multiplayer-modal-backdrop">
      <div class="modal-dialog mp-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">👥</span>
            <div>
              <h2 class="modal-title">Play with Friend on Other Mobile</h2>
              <span class="modal-subtitle">Real-time multiplayer over Wi-Fi / Network</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-mp">&times;</button>
        </div>

        <div class="modal-body">
          ${bodyContent}
        </div>

        <div class="modal-footer">
          ${roomCode ? `
            <button class="btn-icon btn-leave-room" id="btn-leave-room">Leave Room</button>
            <button class="btn-primary" id="btn-mp-play-now">Start Playing!</button>
          ` : `
            <button class="btn-primary" id="btn-modal-mp-close">Close</button>
          `}
        </div>
      </div>
    </div>
  `;
}
