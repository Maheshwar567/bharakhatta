// Modern Home / Main Menu Screen for Bharakhatta
// Inspired by casual mobile game lobby UI (media_1789641698793.png)
// Features top currency bar, golden CLAIM! ticket, 3D Computer (offline) and Friends hero buttons, and bottom nav

import { t, getLanguage } from "../utils/i18n.js";

export function renderLobbyView(options = {}) {
  const {
    user,
    walletCoins = 1000,
    hourlyRewardStatus = null
  } = options;

  const nickName = user ? (user.nickName || user.name || "Player") : "Player";
  const currentLang = getLanguage();
  const canClaimReward = hourlyRewardStatus?.canClaim;
  const rewardMins = Math.floor((hourlyRewardStatus?.secondsLeft || 0) / 60);
  const rewardSecs = (hourlyRewardStatus?.secondsLeft || 0) % 60;
  const timerText = canClaimReward ? t("freeCoinsClaim") : `${rewardMins}m ${rewardSecs}s`;

  return `
    <div class="lobby-overlay-container">
      <div class="lobby-card casual-mobile-lobby">
        <!-- 1. Top Bar: Profile, Level, Currencies & Language Switcher -->
        <div class="lobby-top-bar">
          <!-- User Profile & Level -->
          <div class="profile-chip" id="btn-lobby-profile" title="View Profile & Lifetime History">
            <div class="avatar-wrap">
              <span class="avatar-symbol">👤</span>
              <span class="avatar-lvl-badge">1</span>
            </div>
            <div class="profile-info-col">
              <span class="profile-nick">${nickName}</span>
              <div class="xp-bar-wrap">
                <span class="xp-star">⭐</span>
                <div class="xp-bar-fill"></div>
              </div>
            </div>
          </div>

          <!-- Currencies & Actions -->
          <div class="lobby-currencies-group">
            <!-- Coins Pill with Plus -->
            <div class="currency-pill coin-currency" id="btn-lobby-coins" title="Coins Wallet">
              <span class="curr-icon">🪙</span>
              <span class="curr-val">${walletCoins.toLocaleString()}</span>
              <button class="curr-plus-btn" id="btn-lobby-add-coins" title="Free Coins Refill">+</button>
            </div>

            <!-- Diamonds / Gems Pill -->
            <div class="currency-pill gem-currency" title="Diamonds">
              <span class="curr-icon">💎</span>
              <span class="curr-val">385</span>
              <button class="curr-plus-btn">+</button>
            </div>

            <!-- Language Switcher -->
            <button class="btn-lobby-lang" id="btn-lobby-lang-toggle" title="Switch Language / భాష మార్చండి">
              ${currentLang === "en" ? "తెలుగు" : "EN"}
            </button>

            <!-- Switch Account / Logout -->
            <button class="btn-lobby-switch-acc" id="btn-lobby-switch-acc" title="Switch Account / Logout">
              🔄
            </button>
          </div>
        </div>

        <!-- 2. Badges & Golden CLAIM! Ticket Row -->
        <div class="lobby-claim-section">
          <div class="mini-badges-row">
            <div class="mini-badge-pill">
              <span class="mb-icon">🛡️</span>
              <span class="mb-label">Ranking: <strong>Unranked</strong></span>
            </div>
            <div class="mini-badge-pill">
              <span class="mb-icon">🏆</span>
              <span class="mb-label">Leaderboard: <strong>4d 0h</strong></span>
            </div>
          </div>

          <!-- Big Radiant Golden CLAIM! Ticket -->
          <button 
            class="golden-claim-ticket ${canClaimReward ? 'claim-ticket-ready' : 'claim-ticket-cooldown'}" 
            id="btn-lobby-hourly-reward"
            title="Claim 500 Free Coins every hour based on mobile device time!"
          >
            <div class="ticket-sawtooth left-saw"></div>
            <div class="ticket-body">
              <span class="ticket-star">✨</span>
              <div class="ticket-text-wrap">
                <span class="ticket-title">${canClaimReward ? t("freeCoinsClaim") : t("freeCoinsBtn")}</span>
                <span class="ticket-sub">${canClaimReward ? "Free 500 Coins Ready!" : `Wait: ${timerText}`}</span>
              </div>
              <span class="ticket-gift">🎁</span>
            </div>
            <div class="ticket-sawtooth right-saw"></div>
          </button>
        </div>

        <!-- 3. Game Title Banner -->
        <div class="lobby-brand-bar">
          <span class="brand-cowrie-ico">🐚</span>
          <div class="brand-titles">
            <h1 class="brand-game-name">${t("appTitle")}</h1>
            <span class="brand-tagline">${t("appSubtitle")}</span>
          </div>
        </div>

        <!-- 4. Main Center Stage: 3D Game Buttons (Computer vs Friends) -->
        <div class="hero-game-modes-grid">
          <!-- Yellow 3D Button: Play with Computer (100% Offline) -->
          <button class="game-mode-3d-btn btn-mode-yellow" id="btn-mode-computer">
            <div class="btn-3d-sheen"></div>
            <div class="btn-3d-icon-box yellow-icon-box">
              <span class="device-icon">📱</span>
              <span class="vs-badge">VS</span>
            </div>
            <div class="btn-3d-text-wrap">
              <h2 class="btn-3d-title">${t("menuComputer")}</h2>
              <span class="btn-3d-desc">${t("menuComputerSub")}</span>
            </div>
            <span class="btn-3d-pill pill-offline">100% OFFLINE</span>
          </button>

          <!-- Cyan/Blue 3D Button: Play with Friends (Private Room) -->
          <button class="game-mode-3d-btn btn-mode-cyan" id="btn-mode-friends">
            <div class="btn-3d-sheen"></div>
            <div class="btn-3d-icon-box cyan-icon-box">
              <span class="friends-icon">👥</span>
              <span class="heart-badge">❤️</span>
            </div>
            <div class="btn-3d-text-wrap">
              <h2 class="btn-3d-title">${t("menuFriends")}</h2>
              <span class="btn-3d-desc">${t("menuFriendsSub")}</span>
            </div>
            <span class="btn-3d-pill pill-friends">4-DIGIT ROOM</span>
          </button>
        </div>

        <!-- 5. Bottom Navigation Bar -->
        <div class="casual-bottom-nav">
          <button class="bnav-item" id="btn-nav-store" title="Free Coin Refill">
            <span class="bnav-icon">🛒</span>
            <span class="bnav-badge-free">FREE</span>
            <span class="bnav-label">${t("store")}</span>
          </button>
          <button class="bnav-item bnav-active" id="btn-nav-home" title="Home Menu">
            <span class="bnav-icon">🏠</span>
            <span class="bnav-label">${t("home")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-friends-direct" title="Friends Hub">
            <span class="bnav-icon">👥</span>
            <span class="bnav-label">${t("menuFriends")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-history" title="Match History">
            <span class="bnav-icon">📜</span>
            <span class="bnav-label">${t("matchHistory")}</span>
          </button>
          <button class="bnav-item" id="btn-lobby-rules" title="Rules Guide">
            <span class="bnav-icon">📖</span>
            <span class="bnav-label">${t("rules")}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
