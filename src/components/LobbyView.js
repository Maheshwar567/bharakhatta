// Pre-Game Lobby & Pot Coins Setup View for Bharakhatta
// Displays 2/4 player selection, mode selector, prominent 'Request Friend' action, and bet selector

import { BET_TIERS } from "../game/wallet.js";
import { t, getLanguage } from "../utils/i18n.js";

export function renderLobbyView(options = {}) {
  const {
    user,
    walletCoins = 1000,
    selectedBet = 250,
    playerCount = 2, // 2 or 4
    selectedMode = "solo" // "solo", "friend", "4p_solo", "4p_ai_pair", "4p_friends"
  } = options;

  const nickName = user ? (user.nickName || user.name || "Player") : "Player";
  const potAmount = selectedBet * 2;
  const currentLang = getLanguage();

  return `
    <div class="lobby-overlay-container">
      <div class="lobby-card">
        <!-- Lobby Brand Header -->
        <div class="lobby-header">
          <div class="lobby-title-wrap">
            <span class="lobby-shell-icon">🐚</span>
            <div>
              <h1 class="lobby-title">బాఱఖట్టా • BHARAKHATTA</h1>
              <span class="lobby-subtitle">${t("appSubtitle")}</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn-icon btn-lang-toggle" id="btn-lobby-lang-toggle" title="Switch Language / భాష మార్చండి" style="font-weight: 700; color: #f1c40f; border: 1px solid rgba(241,196,15,0.4); background: rgba(241,196,15,0.12); padding: 6px 10px; border-radius: 20px; cursor: pointer;">
              ${currentLang === "en" ? "🌐 తెలుగు" : "🌐 English"}
            </button>
            <div class="lobby-user-pill" id="btn-lobby-profile" title="View Profile & Match History">
              <span class="user-avatar">👤</span>
              <span class="user-nick">${nickName}</span>
              <span class="user-balance">🪙 ${walletCoins.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div class="lobby-body">
          <!-- Step 1: Player Count Selection (2 or 4 Players) -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">1</span>
              <span class="section-heading">${t("selectPlayerCount")}</span>
            </div>
            <div class="player-count-toggle-grid">
              <button class="btn-player-count ${playerCount === 2 ? 'count-active' : ''}" id="btn-count-2p" data-count="2">
                <span class="count-icon">👥</span>
                <div class="count-text">
                  <strong>${t("twoPlayers")}</strong>
                  <span>${t("twoPlayersSub")}</span>
                </div>
                ${playerCount === 2 ? '<span class="count-check">✔</span>' : ''}
              </button>

              <button class="btn-player-count ${playerCount === 4 ? 'count-active' : ''}" id="btn-count-4p" data-count="4">
                <span class="count-icon">👥👥</span>
                <div class="count-text">
                  <strong>${t("fourPlayers")}</strong>
                  <span>${t("fourPlayersSub")}</span>
                </div>
                ${playerCount === 4 ? '<span class="count-check">✔</span>' : ''}
              </button>
            </div>
          </div>

          <!-- Step 2: Match Setup / Mode Selection -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">2</span>
              <span class="section-heading">${playerCount === 2 ? t("selectMode2p") : t("selectMode4p")}</span>
            </div>

            ${playerCount === 2 ? `
              <!-- 2-Player Options -->
              <div class="mode-options-grid">
                <button class="btn-mode-card ${selectedMode === 'solo' ? 'mode-active' : ''}" id="btn-select-mode-solo">
                  <span class="mode-icon">🤖</span>
                  <div class="mode-info">
                    <strong>${t("playVsComputer")}</strong>
                    <span>${t("playVsComputerSub")}</span>
                  </div>
                  ${selectedMode === 'solo' ? '<span class="mode-check">✔</span>' : ''}
                </button>

                <button class="btn-mode-card ${selectedMode === 'friend' ? 'mode-active' : ''}" id="btn-select-mode-friend">
                  <span class="mode-icon">👥</span>
                  <div class="mode-info">
                    <strong>${t("playWithFriend2p")}</strong>
                    <span>${t("playWithFriend2pSub")}</span>
                  </div>
                  ${selectedMode === 'friend' ? '<span class="mode-check">✔</span>' : ''}
                </button>
              </div>
            ` : `
              <!-- 4-Player Options -->
              <div class="mode-options-grid mode-grid-3">
                <button class="btn-mode-card ${selectedMode === '4p_ai_pair' ? 'mode-active' : ''}" id="btn-select-mode-4p-pair">
                  <span class="mode-icon">🤝</span>
                  <div class="mode-info">
                    <strong>${t("twoFriendsAIPair")}</strong>
                    <span>${t("twoFriendsAIPairSub")}</span>
                  </div>
                  ${selectedMode === '4p_ai_pair' ? '<span class="mode-check">✔</span>' : ''}
                </button>

                <button class="btn-mode-card ${selectedMode === '4p_solo' ? 'mode-active' : ''}" id="btn-select-mode-4p-solo">
                  <span class="mode-icon">🤖</span>
                  <div class="mode-info">
                    <strong>${t("solo4p")}</strong>
                    <span>${t("solo4pSub")}</span>
                  </div>
                  ${selectedMode === '4p_solo' ? '<span class="mode-check">✔</span>' : ''}
                </button>

                <button class="btn-mode-card ${selectedMode === '4p_friends' ? 'mode-active' : ''}" id="btn-select-mode-4p-friends">
                  <span class="mode-icon">👥👥</span>
                  <div class="mode-info">
                    <strong>${t("fourFriendsOnline")}</strong>
                    <span>${t("fourFriendsOnlineSub")}</span>
                  </div>
                  ${selectedMode === '4p_friends' ? '<span class="mode-check">✔</span>' : ''}
                </button>
              </div>
            `}

            <!-- Prominent Request Friend to Play on Same Board Button -->
            <div class="request-friend-banner">
              <button class="btn-request-friend-hero" id="btn-lobby-request-friend">
                <span class="rf-icon">📲</span>
                <div class="rf-content">
                  <strong>${t("requestFriendHero")}</strong>
                  <span>${t("requestFriendHeroSub")}</span>
                </div>
                <span class="rf-arrow">➔</span>
              </button>
            </div>
          </div>

          <!-- Step 3: Bet Stakes & Pot Selection -->
          <div class="lobby-section">
            <div class="section-title-bar">
              <span class="step-num">3</span>
              <span class="section-heading">${t("choosePotCoins")}</span>
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
                <span class="preview-label">${t("yourStake")}</span>
                <span class="preview-val stake-val">🪙 ${selectedBet.toLocaleString()}</span>
              </div>
              <div class="preview-arrow">➔</div>
              <div class="preview-item">
                <span class="preview-label">${t("winnerTakesPot")}</span>
                <span class="preview-val pot-val">🏆 🪙 ${potAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4: Start Game (Centered Down Middle) -->
        <div class="lobby-footer-center">
          <button class="btn-primary btn-start-game-lobby" id="btn-lobby-start-game">
            🎲 ${t("startGame")} (Pot: 🪙${potAmount.toLocaleString()})
          </button>

          <div class="lobby-sub-actions">
            <button class="btn-sub-link" id="btn-lobby-rules">📜 ${t("rulesGuide")}</button>
            <span class="dot-sep">•</span>
            <button class="btn-sub-link" id="btn-lobby-history">📊 ${t("matchHistory")}</button>
            <span class="dot-sep">•</span>
            <button class="btn-sub-link" id="btn-lobby-switch-acc">🔄 ${t("switchAccount")}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
