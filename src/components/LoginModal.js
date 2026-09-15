// Mobile Number Login Modal Component for Bharakhatta
// Handles 10-digit mobile number, Full Name, and Nick Name generation

export function renderLoginModal(isOpen, currentMobile = "", currentFullName = "", currentNickName = "", error = null) {
  if (!isOpen) return "";

  return `
    <div class="modal-backdrop" id="login-modal-backdrop">
      <div class="modal-dialog modal-login modal-login-redesign">
        <div class="modal-header login-header-styled">
          <div class="login-brand-banner">
            <span class="login-brand-icon">🐚</span>
            <div>
              <h2 class="login-main-title">బాఱఖట్టా • BHARAKHATTA</h2>
              <span class="login-sub-title">Traditional Indian Village Board Game</span>
            </div>
          </div>
        </div>

        <div class="modal-body login-body-styled">
          <div class="login-perks-row">
            <div class="perk-pill">
              <span class="perk-ico">🪙</span>
              <span><strong>1,000 Coins</strong> Joining Bonus</span>
            </div>
            <div class="perk-pill">
              <span class="perk-ico">📜</span>
              <span><strong>Lifetime Stats</strong> & History Saved</span>
            </div>
          </div>

          ${error ? `<div class="login-error-box">⚠️ ${error}</div>` : ""}

          <!-- Mobile Number -->
          <div class="form-group">
            <label for="input-login-mobile" class="form-label">
              <span>📱 Mobile Number</span>
              <span class="label-badge required">10 Digits</span>
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
            <span class="input-hint">Existing players restore all saved coins, win rate & match history</span>
          </div>

          <!-- Full Name -->
          <div class="form-group">
            <label for="input-login-fullname" class="form-label">
              <span>👤 Full Name</span>
              <span class="label-badge required">Required</span>
            </label>
            <input 
              type="text" 
              id="input-login-fullname" 
              class="form-input" 
              placeholder="e.g. Mahesh Reddy or maheshreddy" 
              maxlength="30"
              value="${currentFullName}" 
            />
          </div>

          <!-- Nick Name -->
          <div class="form-group">
            <label for="input-login-nickname" class="form-label">
              <span>🏷️ Nick Name</span>
              <span class="label-badge optional">Optional</span>
            </label>
            <input 
              type="text" 
              id="input-login-nickname" 
              class="form-input" 
              placeholder="Leave blank for auto-initials (e.g. MR or M)" 
              maxlength="15"
              value="${currentNickName}" 
            />
            <div class="nickname-preview-box">
              <span>Game In-Game Name: </span>
              <strong id="nickname-preview-badge" class="preview-badge">${currentNickName || "MR"}</strong>
            </div>
          </div>
        </div>

        <div class="modal-footer login-footer-centered">
          <button class="btn-primary btn-enter-bharakhatta" id="btn-submit-login">
            🎮 Enter Bharakhatta
          </button>
        </div>
      </div>
    </div>
  `;
}
