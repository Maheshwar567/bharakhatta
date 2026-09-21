// Room Creation, 4-Digit Table Code, Joining & Friend Addition Dialogs
// Provides 1v1 / 2v2 selection, 4-digit code generation, WhatsApp sharing, and auto-start celebration

import { BET_TIERS } from "../game/wallet.js";
import { t } from "../utils/i18n.js";

export function renderCreateRoomModal(isOpen, options = {}) {
  if (!isOpen) return "";

  const {
    roomCode = "4821",
    mode = "2p", // "2p" (1v1) or "4p" (2v2)
    selectedBet = 250,
    selectedHome = 1,
    walletCoins = 1000,
    shareUrl = "",
    qrDataUrl = null,
    isWaiting = true
  } = options;

  const pot = selectedBet * 2;
  const is4p = mode === "4p";

  const whatsappMsg = encodeURIComponent(
    `Namaskaram! 🎲 Join my Bharakhatta match on table *${roomCode}* (${is4p ? '2v2 Teams' : '1v1'})!\n` +
    `Pot: 🪙${pot.toLocaleString()} coins.\n` +
    `Tap here to play: ${shareUrl || ('https://maheshwar567.github.io/bharakhatta/?room=' + roomCode)}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${whatsappMsg}`;

  return `
    <div class="modal-backdrop room-modal-backdrop" id="create-room-modal-backdrop">
      <div class="modal-dialog room-code-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🎲</span>
            <div>
              <h2 class="modal-title">Create Table Room</h2>
              <span class="modal-subtitle">Configure match and share the 4-digit code</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-create-room">&times;</button>
        </div>

        <div class="modal-body room-code-body">
          <!-- Mode Selection: 1v1 vs 2v2 Checkboxes -->
          <div class="room-setup-section">
            <label class="setup-section-label">Select Game Mode:</label>
            <div class="mode-checkbox-grid">
              <label class="mode-checkbox-card ${!is4p ? 'mode-checked' : ''}">
                <input type="radio" name="create-room-mode" value="2p" ${!is4p ? 'checked' : ''} id="radio-mode-1v1" />
                <div class="mode-card-content">
                  <span class="mode-card-icon">👥</span>
                  <div class="mode-card-texts">
                    <strong>1v1 (2 Players)</strong>
                    <span>Head-to-head match</span>
                  </div>
                </div>
              </label>

              <label class="mode-checkbox-card ${is4p ? 'mode-checked' : ''}">
                <input type="radio" name="create-room-mode" value="4p" ${is4p ? 'checked' : ''} id="radio-mode-2v2" />
                <div class="mode-card-content">
                  <span class="mode-card-icon">👥👥</span>
                  <div class="mode-card-texts">
                    <strong>2v2 (4 Players)</strong>
                    <span>Partner & team play</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Pot / Stake Selection -->
          <div class="room-setup-section">
            <label class="setup-section-label">Bet Stake (Winner takes Pot):</label>
            <div class="bet-chips-grid bet-chips-compact">
              ${BET_TIERS.map(tier => {
                const isSelected = tier === selectedBet;
                const canAfford = walletCoins >= tier;
                return `
                  <button 
                    type="button"
                    class="btn-lobby-tier ${isSelected ? 'tier-selected' : ''} ${!canAfford ? 'tier-disabled' : ''}"
                    data-create-bet="${tier}"
                    ${!canAfford ? 'disabled' : ''}
                  >
                    <span class="tier-chip-icon">🪙</span>
                    <span class="tier-stake">${tier}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Starting Home Selection (Opposite Home Rule) -->
          <div class="room-setup-section">
            <div class="cm-section-header-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <label class="setup-section-label" style="margin-bottom: 0;">Starting Home Base:</label>
              <span class="cm-opposite-hint">Opponent gets Opposite Home</span>
            </div>
            <div class="cm-homes-grid">
              <button type="button" class="btn-cm-home btn-room-home ${selectedHome === 1 ? 'home-active' : ''}" data-room-home="1">
                <span class="cm-home-badge">H1</span>
                <div class="cm-home-info">
                  <strong>Home 1 (East)</strong>
                  <span>Opponent: Home 3 (West)</span>
                </div>
                ${selectedHome === 1 ? '<span class="format-check">✔</span>' : ''}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${selectedHome === 4 ? 'home-active' : ''}" data-room-home="4">
                <span class="cm-home-badge">H4</span>
                <div class="cm-home-info">
                  <strong>Home 4 (South)</strong>
                  <span>Opponent: Home 2 (North)</span>
                </div>
                ${selectedHome === 4 ? '<span class="format-check">✔</span>' : ''}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${selectedHome === 2 ? 'home-active' : ''}" data-room-home="2">
                <span class="cm-home-badge">H2</span>
                <div class="cm-home-info">
                  <strong>Home 2 (North)</strong>
                  <span>Opponent: Home 4 (South)</span>
                </div>
                ${selectedHome === 2 ? '<span class="format-check">✔</span>' : ''}
              </button>
              <button type="button" class="btn-cm-home btn-room-home ${selectedHome === 3 ? 'home-active' : ''}" data-room-home="3">
                <span class="cm-home-badge">H3</span>
                <div class="cm-home-info">
                  <strong>Home 3 (West)</strong>
                  <span>Opponent: Home 1 (East)</span>
                </div>
                ${selectedHome === 3 ? '<span class="format-check">✔</span>' : ''}
              </button>
            </div>
          </div>

          <!-- Huge 4-Digit Table Code Display -->
          <div class="table-code-hero-card">
            <span class="table-code-label">TABLE CODE (SHARE WITH FRIEND)</span>
            <div class="table-digits-display">
              ${roomCode.split('').map(digit => `<span class="digit-box">${digit}</span>`).join('')}
            </div>
            <div class="table-code-actions">
              <button class="btn-copy-code" id="btn-copy-4digit-code" data-code="${roomCode}">
                📋 Copy Code (${roomCode})
              </button>
              <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp-share-code" id="btn-whatsapp-room-share" rel="noopener noreferrer">
                💬 Share on WhatsApp
              </a>
            </div>
          </div>

          <!-- Waiting Spinner -->
          ${isWaiting ? `
            <div class="room-waiting-indicator">
              <div class="pulse-waiting-ring"></div>
              <span>Waiting for friend to enter code <strong>${roomCode}</strong>...</span>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

export function renderJoinRoomModal(isOpen, options = {}) {
  if (!isOpen) return "";

  const {
    errorMsg = null,
    enteredCode = ""
  } = options;

  return `
    <div class="modal-backdrop room-modal-backdrop" id="join-room-modal-backdrop">
      <div class="modal-dialog room-code-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🚪</span>
            <div>
              <h2 class="modal-title">Join Table</h2>
              <span class="modal-subtitle">Enter the 4-digit code shared by your friend</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-join-room">&times;</button>
        </div>

        <div class="modal-body room-code-body">
          <div class="join-code-entry-wrap">
            <label class="join-code-label" for="input-4digit-code">4-Digit Table Code:</label>
            <input 
              type="text" 
              id="input-4digit-code" 
              maxlength="4" 
              placeholder="e.g. 4821" 
              value="${enteredCode}"
              autocomplete="off"
              inputmode="numeric"
              pattern="[0-9]*"
              class="join-code-input"
              autofocus
            />

            ${errorMsg ? `<div class="join-code-error">⚠️ ${errorMsg}</div>` : ''}

            <button class="btn-glossy-green btn-submit-join" id="btn-submit-join-code">
              🚀 Join Table & Play
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderAddFriendModal(isOpen, options = {}) {
  if (!isOpen) return "";

  const { errorMsg = null } = options;

  return `
    <div class="modal-backdrop room-modal-backdrop" id="add-friend-modal-backdrop">
      <div class="modal-dialog room-code-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">👤+</span>
            <div>
              <h2 class="modal-title">Add Friend</h2>
              <span class="modal-subtitle">Enter your friend's 10-digit mobile number</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-add-friend">&times;</button>
        </div>

        <div class="modal-body room-code-body">
          <div class="join-code-entry-wrap">
            <label class="join-code-label" for="input-friend-mobile">Mobile Number (10 Digits):</label>
            <input 
              type="tel" 
              id="input-friend-mobile" 
              maxlength="10" 
              placeholder="e.g. 9876543210" 
              class="join-code-input join-mobile-input"
              inputmode="numeric"
              pattern="[0-9]*"
              autofocus
            />

            <span class="add-friend-privacy-hint">
              🔒 Privacy Guaranteed: Your friend will be displayed by their Nick Name only during gameplay. Mobile numbers remain private.
            </span>

            ${errorMsg ? `<div class="join-code-error">⚠️ ${errorMsg}</div>` : ''}

            <button class="btn-glossy-green btn-submit-join" id="btn-submit-add-friend">
              ➕ Add Friend to List
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderCelebrationSplash(isOpen, tableCode, friendName) {
  if (!isOpen) return "";

  return `
    <div class="celebration-splash-overlay" id="celebration-splash">
      <div class="celebration-splash-card">
        <div class="splash-trophy">🎉</div>
        <h2 class="splash-title">Friend Connected!</h2>
        <p class="splash-text">
          <strong>${friendName || 'Friend'}</strong> joined Table <strong>#${tableCode}</strong>!
        </p>
        <span class="splash-starting-badge">🚀 Match Starting Directly...</span>
      </div>
    </div>
  `;
}
