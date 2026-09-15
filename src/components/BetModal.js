// Coin Bet Selection Modal for Solo & Multiplayer

import { BET_TIERS } from "../game/wallet.js";

export function renderBetModal(isOpen, currentBalance, selectedBet = 250, mode = "solo") {
  if (!isOpen) return "";

  const potPreview = selectedBet * 2;
  const canAffordCurrent = currentBalance >= selectedBet;

  return `
    <div class="modal-backdrop" id="bet-modal-backdrop">
      <div class="modal-dialog bet-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🪙</span>
            <div>
              <h2 class="modal-title">${mode === "multiplayer" ? "Set Room Coin Stake" : "Choose Match Bet"}</h2>
              <span class="modal-subtitle">Winner takes the entire pot!</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-bet">&times;</button>
        </div>

        <div class="modal-body bet-modal-body">
          <!-- Balance Display -->
          <div class="wallet-balance-card">
            <div class="wallet-lbl">Your Coin Balance</div>
            <div class="wallet-val">🪙 ${currentBalance.toLocaleString()}</div>
            ${currentBalance < 100 ? `
              <button class="btn-refill-coins" id="btn-claim-village-bonus">
                🎁 Claim Village Bonus (+500 Coins)
              </button>
            ` : ""}
          </div>

          <!-- Pot Preview Card -->
          <div class="pot-preview-box">
            <div class="pot-title">🏆 TOTAL MATCH POT:</div>
            <div class="pot-amount">🪙 ${potPreview.toLocaleString()}</div>
            <div class="pot-sub">You put 🪙${selectedBet} + Opponent puts 🪙${selectedBet}</div>
          </div>

          <!-- Bet Tiers Selection -->
          <div class="bet-selection-area">
            <div class="bet-section-label">Select Your Coin Bet:</div>
            <div class="bet-chips-grid">
              ${BET_TIERS.map(tier => {
                const isSelected = tier === selectedBet;
                const canAfford = currentBalance >= tier;
                return `
                  <button class="bet-chip ${isSelected ? "bet-chip-selected" : ""} ${!canAfford ? "bet-chip-disabled" : ""}"
                          data-bet-amount="${tier}" ${!canAfford ? "disabled" : ""}>
                    <span class="chip-coin-icon">🪙</span>
                    <span class="chip-amount">${tier >= 1000 ? (tier / 1000) + "K" : tier}</span>
                  </button>
                `;
              }).join("")}
            </div>
          </div>

          ${!canAffordCurrent ? `
            <div class="bet-error-msg">⚠️ Insufficient coins for this bet. Select a lower bet or claim your bonus!</div>
          ` : ""}
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-confirm-bet" id="btn-confirm-bet" ${!canAffordCurrent ? "disabled" : ""}>
            ⚔️ Start Match (Bet 🪙${selectedBet})
          </button>
        </div>
      </div>
    </div>
  `;
}
