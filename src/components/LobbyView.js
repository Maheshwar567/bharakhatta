// Pre-Game Lobby & Pot Coins Setup View for Bharakhatta
// Displays game mode selection, bet & pot selector, and prominent 'Start Game' button

import { BET_TIERS } from "../game/wallet.js";

export function renderLobbyView(options = {}) {
  const {
    user,
    walletCoins = 1000,
    selectedBet = 250,
    selectedMode = "solo" // "solo" or "friend"
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
              <span class="lobby-subtitle">Traditional 7x7 Village Cowrie Game</span>
            </div>
          </div>
          <div class="lobby-user-pill" id="btn-lobby-profile" title="View Profile & Match History">
            <span class="user-avatar">👤</span>
            <span class="user-nick">${nickName}</span>
            <span class="user-balance">🪙 ${walletCoins.toLocaleString()}</span>
          </div>
        </div>

        <div class="lobby-body">
          <!-- Step 1: Mode Selection -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">1</span>
              <span class="section-heading">Select Match Mode</span>
            </div>
            <div class="mode-options-grid">
              <button class="btn-mode-card ${selectedMode === 'solo' ? 'mode-active' : ''}" id="btn-select-mode-solo">
                <span class="mode-icon">🤖</span>
                <div class="mode-info">
                  <strong>Play vs Computer</strong>
                  <span>Fast offline match with System AI</span>
                </div>
                ${selectedMode === 'solo' ? '<span class="mode-check">✔</span>' : ''}
              </button>

              <button class="btn-mode-card ${selectedMode === 'friend' ? 'mode-active' : ''}" id="btn-select-mode-friend">
                <span class="mode-icon">👥</span>
                <div class="mode-info">
                  <strong>Play with Friend</strong>
                  <span>2-Player room on other mobile phone</span>
                </div>
                ${selectedMode === 'friend' ? '<span class="mode-check">✔</span>' : ''}
              </button>
            </div>
          </div>

          <!-- Step 2: Bet Stakes & Pot Selection -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">2</span>
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

        <!-- Step 3: Start Game (Centered Down Middle) -->
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
