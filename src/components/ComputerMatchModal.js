// Computer Match Setup Dialog for Bharakhatta
// Allows player to choose 1v1 or 2v2 vs System AI and choose virtual bet chips

import { BET_TIERS } from "../game/wallet.js";

export function renderComputerMatchModal(options = {}) {
  const {
    isOpen = false,
    playerCount = 2,
    selectedBet = 250,
    walletCoins = 1000
  } = options;

  if (!isOpen) return "";

  const pot = selectedBet * 2;

  return `
    <div class="modal-backdrop" id="computer-match-backdrop">
      <div class="modal-dialog modal-computer-match">
        <div class="modal-header computer-match-header">
          <div class="cm-title-wrap">
            <span class="cm-icon">🤖</span>
            <div>
              <h2 class="cm-main-title">Play with Computer</h2>
              <span class="cm-sub-title">100% Offline Match • No Internet Needed</span>
            </div>
          </div>
          <button class="modal-close-btn" id="btn-close-computer-modal">✕</button>
        </div>

        <div class="modal-body computer-match-body">
          <!-- Player Count Selection -->
          <div class="cm-section">
            <label class="cm-section-label">1. Choose Match Format</label>
            <div class="cm-format-grid">
              <button class="btn-cm-format ${playerCount === 2 ? 'format-active' : ''}" id="btn-cm-format-2p" data-count="2">
                <span class="format-icon">👥</span>
                <div class="format-info">
                  <strong>1 vs 1 Solo</strong>
                  <span>Head-to-head vs System AI</span>
                </div>
                ${playerCount === 2 ? '<span class="format-check">✔</span>' : ''}
              </button>

              <button class="btn-cm-format ${playerCount === 4 ? 'format-active' : ''}" id="btn-cm-format-4p" data-count="4">
                <span class="format-icon">👥👥</span>
                <div class="format-info">
                  <strong>2 vs 2 Teams</strong>
                  <span>You & AI vs Opposite Pair AI</span>
                </div>
                ${playerCount === 4 ? '<span class="format-check">✔</span>' : ''}
              </button>
            </div>
          </div>

          <!-- Pot Stake Chips Selection -->
          <div class="cm-section">
            <div class="cm-section-header-row">
              <label class="cm-section-label">2. Choose Pot Coins / Bet</label>
              <span class="cm-wallet-badge">Wallet: 🪙 ${walletCoins.toLocaleString()}</span>
            </div>

            <div class="cm-bet-grid">
              ${BET_TIERS.map(tier => {
                const isSelected = tier === selectedBet;
                const canAfford = walletCoins >= tier;
                return `
                  <button 
                    class="btn-cm-bet ${isSelected ? 'bet-active' : ''} ${!canAfford ? 'bet-disabled' : ''}" 
                    data-bet="${tier}"
                    ${!canAfford ? 'disabled title="Not enough coins"' : ''}
                  >
                    <span class="bet-chip">🪙</span>
                    <span class="bet-amount">${tier.toLocaleString()}</span>
                    <span class="bet-pot">Pot: 🪙${(tier * 2).toLocaleString()}</span>
                  </button>
                `;
              }).join("")}
            </div>

            <!-- Pot Summary Card -->
            <div class="cm-pot-summary">
              <div class="cm-pot-box">
                <span class="pot-lbl">Your Stake</span>
                <strong class="pot-val stake-val">🪙 ${selectedBet.toLocaleString()}</strong>
              </div>
              <span class="cm-arrow">➔</span>
              <div class="cm-pot-box">
                <span class="pot-lbl">Winner Takes Pot</span>
                <strong class="pot-val pot-highlight">🏆 🪙 ${pot.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer computer-match-footer">
          <button class="btn-primary btn-start-computer-match" id="btn-start-computer-game">
            🎲 Start Game (Pot: 🪙${pot.toLocaleString()})
          </button>
        </div>
      </div>
    </div>
  `;
}
