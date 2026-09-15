// Modal for Requesting Friends, Sharing Guaranteed Board Numbers & Real-Time Multiplayer

export function renderMultiplayerModal(isOpen, state, qrDataUrl, roomLink) {
  if (!isOpen) return "";

  const { isConnected, roomCode, myPlayerId, isHost, players, errorMsg, gameMode = "2p" } = state;
  const is4p = gameMode === "4p" || (state.mode === "4p");

  let bodyContent = "";

  if (roomCode) {
    const isReady = is4p ? players.length >= 4 : players.length >= 2;
    const hasPair = players.length >= 2;

    const whatsappMsg = encodeURIComponent(
      `Namaskaram! 🎲 Join my Bharakhatta cowrie board match! 🐚\n` +
      `Board Number: ${roomCode}\n` +
      `Tap here to join immediately on your mobile: ${roomLink}`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?text=${whatsappMsg}`;

    bodyContent = `
      <div class="mp-room-active">
        <!-- Guaranteed Non-Repeating Board Number Hero Card -->
        <div class="board-number-hero-card">
          <div class="bn-badge-tag">🎯 GUARANTEED BOARD NUMBER</div>
          <div class="bn-code-row">
            <span class="bn-digits" id="text-board-number">${roomCode}</span>
            <button class="btn-copy-bn" id="btn-copy-board-number" title="Copy Board Number">📋 Copy</button>
          </div>
          <span class="bn-subhint">Guaranteed unique board number — will never repeat in match history!</span>
        </div>

        <!-- 1-Tap Quick Share Actions -->
        <div class="mp-quick-actions-bar">
          <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp-share" id="btn-share-whatsapp" rel="noopener noreferrer">
            <span class="wa-icon">💬</span>
            <span>Request Friend on WhatsApp</span>
          </a>
        </div>

        <!-- QR Code & Link Row -->
        <div class="mp-qr-box">
          ${qrDataUrl ? `<img src="${qrDataUrl}" alt="Scan to join room" class="mp-qr-img" />` : '<div class="qr-loading">Generating QR...</div>'}
          <p class="mp-qr-hint">📱 Friend can scan this with mobile camera to join instantly!</p>
        </div>

        <div class="mp-share-link-row">
          <input type="text" readonly value="${roomLink}" class="url-input" id="input-mp-room-link" />
          <button class="btn-copy-url" id="btn-copy-room-link">📋 Copy Link</button>
        </div>

        <!-- Player Slots Status -->
        <div class="mp-players-list">
          <div class="slots-header-row">
            <h4>👥 Board Players (${players.length} / ${is4p ? '4' : '2'}):</h4>
            <span class="slots-mode-tag">${is4p ? '4-Player 2v2 Teams' : '2-Player 1v1'}</span>
          </div>

          <div class="mp-player-chips">
            ${players.map(p => `
              <div class="mp-player-chip ${p.id === myPlayerId ? 'mp-chip-me' : ''}">
                <span class="chip-avatar">${p.team === 1 ? (p.id === 1 ? '👑' : '🦁') : (p.id === 2 ? '🦚' : '🦜')}</span>
                <div class="chip-details">
                  <span class="chip-name">${p.name}</span>
                  <span class="chip-team">Team ${p.team} ${p.id === myPlayerId ? '(You)' : ''}</span>
                </div>
              </div>
            `).join('')}

            ${is4p && players.length < 4 ? `
              <div class="mp-player-chip chip-slot-empty">
                <span class="chip-avatar">🤖</span>
                <div class="chip-details">
                  <span class="chip-name">System AI Pair</span>
                  <span class="chip-team">Opposite Team 2</span>
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- 4-Player Pair Option or Waiting Notice -->
        ${is4p && hasPair && players.length < 4 ? `
          <div class="mp-ai-pair-card">
            <div class="ai-pair-info">
              <strong>👥 2 Friends Connected!</strong>
              <span>You two are Team 1. You can start right now with the System AI playing as the opposite pair (Team 2)!</span>
            </div>
            <button class="btn-primary btn-start-ai-pair" id="btn-start-4p-ai-pair">
              🤝 Start Now with System AI Opposite Pair
            </button>
          </div>
        ` : ''}

        ${!isReady && (!is4p || players.length < 2) ? `
          <div class="mp-waiting-notice">
            <div class="waiting-spinner">⏳</div>
            <p>Waiting for your friend to open the link or enter Board Number on their phone...</p>
          </div>
        ` : isReady ? `
          <div class="mp-ready-notice">
            <span>🎉 All players connected! Board match is active in real time.</span>
          </div>
        ` : ''}
      </div>
    `;
  } else {
    // Create / Join selection view
    bodyContent = `
      <div class="mp-setup-tabs">
        <div class="mp-tab-content">
          ${errorMsg ? `<div class="mp-error-banner">⚠️ ${errorMsg}</div>` : ""}
          
          <div class="mp-form-card">
            <h3>🎮 Request Friends to Play on Same Board</h3>
            <p class="mp-card-sub">Creates a guaranteed unique Board Number to share with your friends</p>
            <div class="form-row">
              <label>Your Name:</label>
              <input type="text" id="input-host-name" value="Player 1" class="mp-input" maxlength="16" />
            </div>
            <div class="form-row">
              <label>Match Type:</label>
              <select id="select-mp-mode" class="header-select">
                <option value="2p">2 Players (1 vs 1)</option>
                <option value="4p">4 Players (2 vs 2 Teams / AI Pair)</option>
              </select>
            </div>
            <button class="btn-primary btn-create-room" id="btn-action-create-room">
              🚀 Generate Board Number & Invite Friends
            </button>
          </div>

          <div class="mp-divider"><span>OR</span></div>

          <div class="mp-form-card">
            <h3>🔑 Join with Friend's Board Number</h3>
            <p class="mp-card-sub">Enter the Board Number shared by your friend (e.g. BK-260915-101-482)</p>
            <div class="form-row">
              <label>Board Number:</label>
              <input type="text" id="input-join-code" placeholder="e.g. BK-260915-101-482" class="mp-input mp-code-input" maxlength="28" />
            </div>
            <div class="form-row">
              <label>Your Name:</label>
              <input type="text" id="input-join-name" value="Player 2" class="mp-input" maxlength="16" />
            </div>
            <button class="btn-primary btn-join-room" id="btn-action-join-room">
              🤝 Join Board
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
            <span class="modal-icon">🤝</span>
            <div>
              <h2 class="modal-title">Request Friend to Play on Same Board</h2>
              <span class="modal-subtitle">Real-time multiplayer over Wi-Fi / Mobile Network</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-mp">&times;</button>
        </div>

        <div class="modal-body">
          ${bodyContent}
        </div>

        <div class="modal-footer">
          ${roomCode ? `
            <button class="btn-icon btn-leave-room" id="btn-leave-room">Leave Board</button>
            <button class="btn-primary" id="btn-mp-play-now">Start Playing!</button>
          ` : `
            <button class="btn-primary" id="btn-modal-mp-close">Close</button>
          `}
        </div>
      </div>
    </div>
  `;
}

