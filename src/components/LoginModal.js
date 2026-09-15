// Mobile Number Login Modal Component for Bharakhatta
// Handles mobile number input, instant validation, and existing user detection

export function renderLoginModal(isOpen, currentMobile = "", currentName = "", error = null) {
  if (!isOpen) return "";

  return `
    <div class="modal-backdrop" id="login-modal-backdrop">
      <div class="modal-dialog modal-login">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">📱</span>
            <div>
              <h2 class="modal-title">Player Login</h2>
              <span class="modal-subtitle">Enter your mobile number to load your saved coins & match history</span>
            </div>
          </div>
        </div>

        <div class="modal-body">
          <div class="login-banner">
            <div class="login-perk">
              <span class="perk-icon">🪙</span>
              <div>
                <strong>1,000 Bonus Coins</strong>
                <p>Credited for new players</p>
              </div>
            </div>
            <div class="login-perk">
              <span class="perk-icon">📊</span>
              <div>
                <strong>Persistent History</strong>
                <p>All wins, kills & coins saved on your number</p>
              </div>
            </div>
          </div>

          ${error ? `<div class="login-error-box">⚠️ ${error}</div>` : ""}

          <div class="form-group">
            <label for="input-login-mobile" class="form-label">
              <span>Mobile Number (10 Digits)</span>
              <span class="label-badge">Required</span>
            </label>
            <div class="mobile-input-wrapper">
              <span class="country-prefix">+91</span>
              <input 
                type="tel" 
                id="input-login-mobile" 
                class="form-input mobile-input" 
                placeholder="e.g. 9876543210" 
                maxlength="10" 
                pattern="[0-9]{10}" 
                value="${currentMobile}" 
                autocomplete="tel"
                required
              />
            </div>
            <span class="input-hint" id="login-number-hint">Existing players will have all match records restored automatically</span>
          </div>

          <div class="form-group">
            <label for="input-login-name" class="form-label">
              <span>Display Name</span>
              <span class="label-badge optional">Optional</span>
            </label>
            <input 
              type="text" 
              id="input-login-name" 
              class="form-input" 
              placeholder="e.g. Maheshwar or King" 
              maxlength="20"
              value="${currentName}" 
            />
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-block btn-start-game" id="btn-submit-login">
            🎮 Enter Bharakhatta
          </button>
        </div>
      </div>
    </div>
  `;
}
