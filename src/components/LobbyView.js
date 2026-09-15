// Pre-Game Lobby & Pot Coins Setup View for Bharakhatta
// Displays 2/4 player selection, mode selector, prominent 'Request Friend' action, and bet selector

import { BET_TIERS } from "../game/wallet.js";

export function renderLobbyView(options = {}) {
  const {
    user,
    walletCoins = 1000,
    selectedBet = 250,
    playerCount = 2, // 2 or 4
    selectedMode = "solo" // "solo", "friend", "4p_solo", "4p_ai_pair", "4p_friends"
  } = options;

  const nickName = user ? (user.nickName || user.name || "Player") : "Player";
  const potAmount = selectedBet * 2;

  return `
    <div class="lobby-overlay-container">
      <div class="lobby-card">
        <!-- Lobby Brand Header -->
        <div class="lobby-header">
          <div class="lobby-title-wrap">
            <span class="lobby-shell-icon">🐚</span>
            <div>
              <h1 class="lobby-title">బాఱఖట్టా • BHARAKHATTA</h1>
              <span class="lobby-subtitle">Traditional 7x7 Village Cowrie Board Game</span>
            </div>
          </div>
          <div class="lobby-user-pill" id="btn-lobby-profile" title="View Profile & Match History">
            <span class="user-avatar">👤</span>
            <span class="user-nick">${nickName}</span>
            <span class="user-balance">🪙 ${walletCoins.toLocaleString()}</span>
          </div>
        </div>

        <div class="lobby-body">
          <!-- Step 1: Player Count Selection (2 or 4 Players) -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">1</span>
              <span class="section-heading">Choose Player Count (2 or 4)</span>
            </div>
            <div class="player-count-toggle-grid">
              <button class="btn-player-count ${playerCount === 2 ? 'count-active' : ''}" id="btn-count-2p" data-count="2">
                <span class="count-icon">👥</span>
                <div class="count-text">
                  <strong>2 Players</strong>
                  <span>1 vs 1 Head to Head</span>
                </div>
                ${playerCount === 2 ? '<span class="count-check">✔</span>' : ''}
              </button>

              <button class="btn-player-count ${playerCount === 4 ? 'count-active' : ''}" id="btn-count-4p" data-count="4">
                <span class="count-icon">👥👥</span>
                <div class="count-text">
                  <strong>4 Players</strong>
                  <span>2 vs 2 Team Match</span>
                </div>
                ${playerCount === 4 ? '<span class="count-check">✔</span>' : ''}
              </button>
            </div>
          </div>

          <!-- Step 2: Match Setup / Mode Selection -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">2</span>
              <span class="section-heading">${playerCount === 2 ? 'Select 2-Player Mode' : 'Select 4-Player Mode'}</span>
            </div>

            ${playerCount === 2 ? `
              <!-- 2-Player Options -->
              <div class="mode-options-grid">
                <button class="btn-mode-card ${selectedMode === 'solo' ? 'mode-active' : ''}" id="btn-select-mode-solo">
                  <span class="mode-icon">🤖</span>
                  <div class="mode-info">
                    <strong>Play vs Computer (1v1)</strong>
                    <span>Solo match with System AI</span>
                  </div>
                  ${selectedMode === 'solo' ? '<span class="mode-check">✔</span>' : ''}
                </button>

                <button class="btn-mode-card ${selectedMode === 'friend' ? 'mode-active' : ''}" id="btn-select-mode-friend">
                  <span class="mode-icon">👥</span>
                  <div class="mode-info">
                    <strong>Play with Friend (1v1)</strong>
                    <span>Invite friend on other mobile with Board #</span>
                  </div>
                  ${selectedMode === 'friend' ? '<span class="mode-check">✔</span>' : ''}
                </button>
              </div>
            ` : `
              <!-- 4-Player Options -->
              <div class="mode-options-grid mode-grid-3">
                <button class="btn-mode-card ${selectedMode === '4p_ai_pair' ? 'mode-active' : ''}" id="btn-select-mode-4p-pair">
                  <span class="mode-icon">🤝</span>
                  <div class="mode-info">
                    <strong>2 Friends + 2 AI Pair</strong>
                    <span>You & Friend (Team 1) vs System AI Pair (Team 2)</span>
                  </div>
                  ${selectedMode === '4p_ai_pair' ? '<span class="mode-check">✔</span>' : ''}
                </button>

                <button class="btn-mode-card ${selectedMode === '4p_solo' ? 'mode-active' : ''}" id="btn-select-mode-4p-solo">
                  <span class="mode-icon">🤖</span>
                  <div class="mode-info">
                    <strong>Solo (1 Human + 3 AI)</strong>
                    <span>You & AI Partner vs 2 AI Opponents</span>
                  </div>
                  ${selectedMode === '4p_solo' ? '<span class="mode-check">✔</span>' : ''}
                </button>

                <button class="btn-mode-card ${selectedMode === '4p_friends' ? 'mode-active' : ''}" id="btn-select-mode-4p-friends">
                  <span class="mode-icon">👥👥</span>
                  <div class="mode-info">
                    <strong>4 Friends Online</strong>
                    <span>Send Board # to request friends</span>
                  </div>
                  ${selectedMode === '4p_friends' ? '<span class="mode-check">✔</span>' : ''}
                </button>
              </div>
            `}

            <!-- Prominent Request Friend to Play on Same Board Button -->
            <div class="request-friend-banner">
              <button class="btn-request-friend-hero" id="btn-lobby-request-friend">
                <span class="rf-icon">📲</span>
                <div class="rf-content">
                  <strong>Request Friend to Play on Same Board</strong>
                  <span>Share Board Number, WhatsApp Invite & QR Code</span>
                </div>
                <span class="rf-arrow">➔</span>
              </button>
            </div>
          </div>

          <!-- Step 3: Bet Stakes & Pot Selection -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">3</span>
              <span class="section-heading">Choose Pot Coins / Bet Stakes</span>
            </div>
            
            <div class="bet-chips-grid">
              ${BET_TIERS.map(tier => {
                const isSelected = tier === selectedBet;
                const pot = tier * 2;
                const canAfford = walletCoins >= tier;
                return `
                  <button 
                    class="btn-lobby-tier ${isSelected ? 'tier-selected' : ''} ${!canAfford ? 'tier-disabled' : ''}"
                    data-bet="${tier}"
                    ${!canAfford ? 'disabled title="Not enough coins"' : ''}
                  >
                    <span class="tier-chip-icon">🪙</span>
                    <span class="tier-stake">${tier.toLocaleString()}</span>
                    <span class="tier-pot-label">Pot: 🪙${pot.toLocaleString()}</span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Pot Summary Card -->
            <div class="pot-preview-banner">
              <div class="preview-item">
                <span class="preview-label">Your Stake</span>
                <span class="preview-val stake-val">🪙 ${selectedBet.toLocaleString()}</span>
              </div>
              <div class="preview-arrow">➔</div>
              <div class="preview-item">
                <span class="preview-label">Winner Takes Pot</span>
                <span class="preview-val pot-val">🏆 🪙 ${potAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4: Start Game (Centered Down Middle) -->
        <div class="lobby-footer-center">
          <button class="btn-primary btn-start-game-lobby" id="btn-lobby-start-game">
            🎲 Start Game (Pot: 🪙${potAmount.toLocaleString()})
          </button>

          <div class="lobby-sub-actions">
            <button class="btn-sub-link" id="btn-lobby-rules">📜 Rules Guide</button>
            <span class="dot-sep">•</span>
            <button class="btn-sub-link" id="btn-lobby-history">📊 Match History</button>
            <span class="dot-sep">•</span>
            <button class="btn-sub-link" id="btn-lobby-switch-acc">🔄 Switch Account</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
