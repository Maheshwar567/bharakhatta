// Mobile Number Login & Sign Up Modal Component for Bharakhatta
// Fully bilingual in English and Telugu with instant language switcher and permanent session saving

import { t, getLanguage } from "../utils/i18n.js";

export function renderLoginModal(isOpen, currentMobile = "", currentFullName = "", currentNickName = "", error = null, activeTab = "login") {
  if (!isOpen) return "";

  const isLoginTab = activeTab === "login";
  const currentLang = getLanguage();

  return `
    <div class="modal-backdrop login-modal-backdrop" id="login-modal-backdrop">
      <div class="modal-dialog modal-login modal-login-redesign">
        <!-- Header with Brand and Instant Language Switcher -->
        <div class="modal-header login-header-styled">
          <div class="login-brand-banner">
            <span class="login-brand-icon">🐚</span>
            <div>
              <h2 class="login-main-title">${t("appTitle")}</h2>
              <span class="login-sub-title">${t("appSubtitle")}</span>
            </div>
          </div>
          <button class="btn-login-lang-toggle" id="btn-login-lang-toggle" title="Switch Language / భాష మార్చండి">
            ${currentLang === "en" ? "🌐 తెలుగు" : "🌐 English"}
          </button>
        </div>

        <!-- Login / Sign Up Tab Switcher -->
        <div class="login-tabs-bar">
          <button class="btn-login-tab ${isLoginTab ? 'tab-active' : ''}" id="tab-login-btn">
            ${t("tabExistingLogin")}
          </button>
          <button class="btn-login-tab ${!isLoginTab ? 'tab-active' : ''}" id="tab-signup-btn">
            ${t("tabNewSignUp")}
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
              <span>📱 ${t("mobileNumber")}</span>
              <span class="label-badge required">${t("tenDigits")}</span>
            </label>
            <div class="mobile-input-wrapper">
              <span class="country-prefix">+91</span>
              <input 
                type="tel" 
                id="input-login-mobile" 
                class="form-input mobile-input" 
                placeholder="${t("mobilePlaceholder")}" 
                maxlength="10" 
                pattern="[0-9]{10}" 
                value="${currentMobile}" 
                autocomplete="tel"
                required
              />
            </div>
            <span class="input-hint">
              ${isLoginTab ? t("loginMobileHint") : t("signupMobileHint")}
            </span>
          </div>

          ${!isLoginTab ? `
            <!-- Full Name (Required for Sign Up) -->
            <div class="form-group">
              <label for="input-login-fullname" class="form-label">
                <span>👤 ${t("fullName")}</span>
                <span class="label-badge required">${t("required")}</span>
              </label>
              <input 
                type="text" 
                id="input-login-fullname" 
                class="form-input" 
                placeholder="${t("fullNamePlaceholder")}" 
                maxlength="30"
                value="${currentFullName}" 
              />
            </div>

            <!-- Nick Name (Optional for Sign Up) -->
            <div class="form-group">
              <label for="input-login-nickname" class="form-label">
                <span>🏷️ ${t("nickName")}</span>
                <span class="label-badge optional">${t("optional")}</span>
              </label>
              <input 
                type="text" 
                id="input-login-nickname" 
                class="form-input" 
                placeholder="${t("nickNamePlaceholder")}" 
                maxlength="15"
                value="${currentNickName}" 
              />
              <div class="nickname-preview-box">
                <span>${t("gameDisplayName")}: </span>
                <strong id="nickname-preview-badge" class="preview-badge">${currentNickName || "MR"}</strong>
              </div>
            </div>
          ` : `
            <!-- Quick Hint for Returning User -->
            <div class="existing-login-hint-box">
              <span>⚡ ${t("loginMobileHint")}</span>
            </div>
          `}
        </div>

        <div class="modal-footer login-footer-centered">
          <button class="btn-primary btn-enter-bharakhatta" id="btn-submit-login">
            ${isLoginTab ? t("loginSubmitBtn") : t("signUpSubmitBtn")}
          </button>

          <div class="login-switch-action-row">
            ${isLoginTab ? `
              <span class="switch-prompt">${t("firstTimePrompt")} </span>
              <button class="btn-link-switch" id="link-switch-signup">${t("signUpHere")}</button>
            ` : `
              <span class="switch-prompt">${t("alreadyHaveAccount")} </span>
              <button class="btn-link-switch" id="link-switch-login">${t("loginHere")}</button>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}
