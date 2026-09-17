// Mobile Number Login & Sign Up Modal Component for Bharakhatta
// Supports returning players logging in with mobile number only, and new players signing up

export function renderLoginModal(isOpen, currentMobile = "", currentFullName = "", currentNickName = "", error = null, activeTab = "login") {
  if (!isOpen) return "";

  const isLoginTab = activeTab === "login";

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

        <!-- Login / Sign Up Tab Switcher -->
        <div class="login-tabs-bar">
          <button class="btn-login-tab ${isLoginTab ? 'tab-active' : ''}" id="tab-login-btn">
            📱 Existing Player: Login
          </button>
          <button class="btn-login-tab ${!isLoginTab ? 'tab-active' : ''}" id="tab-signup-btn">
            ✨ New Player: Sign Up
          </button>
        </div>

        <div class="modal-body login-body-styled">
          <div class="login-perks-row">
            <div class="perk-pill">
              <span class="perk-ico">🪙</span>
              <span><strong>1,000 Coins</strong> Balance</span>
            </div>
            <div class="perk-pill">
              <span class="perk-ico">📜</span>
              <span><strong>Lifetime History</strong> & Stats</span>
            </div>
          </div>

          ${error ? `<div class="login-error-box">⚠️ ${error}</div>` : ""}

          <!-- Mobile Number (Required for both Login & Sign Up) -->
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
            <span class="input-hint">
              ${isLoginTab 
                ? "Enter your 10-digit number to restore your Nick Name, Coins & History" 
                : "Your mobile number is securely kept private. Only your Nick Name is shown in-game"}
            </span>
          </div>

          ${!isLoginTab ? `
            <!-- Full Name (Required for Sign Up) -->
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

            <!-- Nick Name (Optional for Sign Up) -->
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
                <span>Game Display Name: </span>
                <strong id="nickname-preview-badge" class="preview-badge">${currentNickName || "MR"}</strong>
              </div>
            </div>
          ` : `
            <!-- Quick Hint for Returning User -->
            <div class="existing-login-hint-box">
              <span>⚡ Returning player? Just tap Login below. No need to re-enter your name!</span>
            </div>
          `}
        </div>

        <div class="modal-footer login-footer-centered">
          <button class="btn-primary btn-enter-bharakhatta" id="btn-submit-login">
            ${isLoginTab ? "🎮 Login to Bharakhatta" : "🚀 Sign Up & Claim 1,000 Coins"}
          </button>

          <div class="login-switch-action-row">
            ${isLoginTab ? `
              <span class="switch-prompt">First time playing Bharakhatta? </span>
              <button class="btn-link-switch" id="link-switch-signup">Sign Up here ➔</button>
            ` : `
              <span class="switch-prompt">Already have an account? </span>
              <button class="btn-link-switch" id="link-switch-login">Login with mobile ➔</button>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}
