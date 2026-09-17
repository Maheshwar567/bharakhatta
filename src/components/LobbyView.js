// Modern Home / Main Menu Screen for Bharakhatta
// Displays Play with Computer (Offline), Play Online, and Play with Friends (Private Room)
// Optimized to fit 100% inside single mobile viewport (100dvh) without scrolling cutoff

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

  return `
    <div class="lobby-overlay-container">
      <div class="lobby-card modern-home-menu">
        <!-- Top Sticky Header Strip: Always Visible on Screen -->
        <div class="home-top-header">
          <!-- User Profile Pill -->
          <div class="home-user-pill" id="btn-lobby-profile" title="View Profile & Lifetime History">
            <span class="user-avatar-badge">👤</span>
            <span class="user-display-nick">${nickName}</span>
          </div>

          <!-- Top Actions & Badges -->
          <div class="home-top-actions">
            <!-- Live Wallet Coins Balance -->
            <div class="home-coins-pill" title="Your Current Coin Balance">
              <span class="coin-icon">🪙</span>
              <span class="coin-amount">${walletCoins.toLocaleString()}</span>
            </div>

            <!-- Free 500 Coins Hourly Reward Button (Always Visible!) -->
            <button 
              class="btn-hourly-free-coins ${canClaimReward ? 'reward-ready-pulse' : 'reward-cooldown'}" 
              id="btn-lobby-hourly-reward" 
              title="Claim 500 Free Coins every hour based on mobile device time!"
            >
              <span class="reward-gift-icon">🎁</span>
              <span class="reward-btn-text">${canClaimReward ? 'Free 500🪙' : (rewardMins + 'm')}</span>
            </button>

            <!-- Language Switcher -->
            <button class="btn-home-lang" id="btn-lobby-lang-toggle" title="Switch Language">
              ${currentLang === "en" ? "తెలుగు" : "EN"}
            </button>

            <!-- Switch Account / Logout -->
            <button class="btn-home-logout" id="btn-lobby-switch-acc" title="Switch Account / Logout">
              🔄
            </button>
          </div>
        </div>

        <!-- Brand Title Strip -->
        <div class="home-brand-strip">
          <span class="home-brand-shell">🐚</span>
          <div class="home-brand-text">
            <h1 class="home-game-title">బాఱఖట్టా • BHARAKHATTA</h1>
            <span class="home-game-sub">Traditional Indian Village Cowrie Board Game</span>
          </div>
        </div>

        <!-- 3 Modern Hero Game Mode Cards -->
        <div class="home-modes-container">
          <!-- Mode 1: Play with Computer (Offline, No Internet Needed) -->
          <button class="hero-mode-card mode-card-computer" id="btn-mode-computer">
            <div class="mode-icon-circle icon-bg-computer">
              <span>🤖</span>
            </div>
            <div class="mode-card-content">
              <div class="mode-card-title-row">
                <h3 class="mode-card-heading">Play with Computer</h3>
                <span class="mode-badge badge-offline">OFFLINE</span>
              </div>
              <p class="mode-card-desc">Solo match vs System AI • No internet needed • Saves history</p>
              <div class="mode-card-tags">
                <span class="mode-tag">👥 1v1 Solo</span>
                <span class="mode-tag">👥👥 2v2 Teams</span>
                <span class="mode-tag">🪙 Select Chips</span>
              </div>
            </div>
            <span class="mode-arrow">➔</span>
          </button>

          <!-- Mode 2: Play Online (Quick Live Matchmaking) -->
          <button class="hero-mode-card mode-card-online" id="btn-mode-online">
            <div class="mode-icon-circle icon-bg-online">
              <span>🌐</span>
            </div>
            <div class="mode-card-content">
              <div class="mode-card-title-row">
                <h3 class="mode-card-heading">Play Online</h3>
                <span class="mode-badge badge-live">LIVE</span>
              </div>
              <p class="mode-card-desc">Quick match with online players • Live multiplayer</p>
              <div class="mode-card-tags">
                <span class="mode-tag">⚡ Quick Table</span>
                <span class="mode-tag">🏆 Win Pot Coins</span>
              </div>
            </div>
            <span class="mode-arrow">➔</span>
          </button>

          <!-- Mode 3: Play with Friends (Private Room with 4-Digit Codes & Match Requests) -->
          <button class="hero-mode-card mode-card-friends" id="btn-mode-friends">
            <div class="mode-icon-circle icon-bg-friends">
              <span>👥</span>
            </div>
            <div class="mode-card-content">
              <div class="mode-card-title-row">
                <h3 class="mode-card-heading">Play with Friends</h3>
                <span class="mode-badge badge-friends">PRIVATE ROOM</span>
              </div>
              <p class="mode-card-desc">Send match requests • Save friends • 4-digit table code</p>
              <div class="mode-card-tags">
                <span class="mode-tag">🏠 Create Room</span>
                <span class="mode-tag">🚪 Join Room</span>
                <span class="mode-tag">💬 WhatsApp</span>
              </div>
            </div>
            <span class="mode-arrow">➔</span>
          </button>
        </div>

        <!-- Bottom Quick Actions Navigation -->
        <div class="home-bottom-nav">
          <button class="btn-bottom-action" id="btn-lobby-history">
            <span class="b-icon">📜</span>
            <span>Match History</span>
          </button>
          <span class="nav-divider">|</span>
          <button class="btn-bottom-action" id="btn-lobby-rules">
            <span class="b-icon">📖</span>
            <span>Rules Guide</span>
          </button>
          <span class="nav-divider">|</span>
          <button class="btn-bottom-action" id="btn-lobby-friends-direct">
            <span class="b-icon">👥</span>
            <span>Friends Hub</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
