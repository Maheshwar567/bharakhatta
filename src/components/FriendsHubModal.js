// Friends Hub & Challenge View for Bharakhatta
// Matches the authentic layout and styling from user screenshot (media_1789544757774.png)

import { t } from "../utils/i18n.js";

export function renderFriendsHubModal(options = {}) {
  const {
    isOpen = false,
    friends = [],
    searchQuery = "",
    isEditing = false,
    activeTab = "challenge", // "challenge", "gifts", "inbox"
    walletCoins = 1000,
    diamonds = 385,
    hourlyRewardStatus = { canClaim: true, secondsLeft: 0, rewardAmount: 500 }
  } = options;

  if (!isOpen) return "";

  const formatCountdown = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  return `
    <div class="modal-backdrop friends-hub-backdrop" id="friends-hub-backdrop">
      <div class="friends-hub-dialog">
        <!-- Top Bar: Title & Currencies -->
        <header class="friends-hub-topbar">
          <div class="fhub-title-row">
            <button class="btn-fhub-back" id="btn-close-friends-hub" title="Back to Game">
              ‹
            </button>
            <h2 class="fhub-title">Friends</h2>
          </div>

          <div class="fhub-currencies">
            <!-- Diamonds / Gems -->
            <div class="currency-pill diamond-pill" title="Diamonds">
              <span class="curr-icon">💎</span>
              <span class="curr-val">${diamonds}</span>
              <button class="btn-curr-plus">+</button>
            </div>

            <!-- Coins Balance -->
            <div class="currency-pill coin-pill" id="btn-fhub-wallet" title="Coins Wallet">
              <span class="curr-icon">🪙</span>
              <span class="curr-val">${walletCoins.toLocaleString()}</span>
              <button class="btn-curr-plus">+</button>
            </div>
          </div>
        </header>

        <!-- Sub-Tabs: Challenge | Gifts | Inbox -->
        <nav class="fhub-tabs-strip">
          <button class="fhub-tab ${activeTab === 'challenge' ? 'tab-active' : ''}" data-fhub-tab="challenge">
            Challenge
          </button>
          <button class="fhub-tab ${activeTab === 'gifts' ? 'tab-active' : ''}" data-fhub-tab="gifts">
            Gifts
          </button>
          <button class="fhub-tab ${activeTab === 'inbox' ? 'tab-active' : ''}" data-fhub-tab="inbox">
            Inbox
            <span class="tab-badge-dot">!</span>
          </button>
        </nav>

        <div class="friends-hub-content-scroll">
          <!-- Private Room Action Banner -->
          <div class="fhub-private-room-banner">
            <div class="pr-text-col">
              <span class="pr-title">Private room with</span>
              <span class="pr-subtitle">up to 4 friends</span>
            </div>
            <div class="pr-buttons-col">
              <button class="btn-glossy-green" id="btn-fhub-create-room">
                Create Room
              </button>
              <button class="btn-glossy-gold" id="btn-fhub-join-room">
                Join Room
              </button>
            </div>
          </div>

          <!-- Search & Action Strip -->
          <div class="fhub-action-strip">
            <div class="fhub-search-box">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                id="input-fhub-search" 
                placeholder="Search list..." 
                value="${searchQuery}" 
              />
              ${searchQuery ? `<button class="btn-clear-search" id="btn-clear-fhub-search">&times;</button>` : ''}
            </div>

            <button class="btn-fhub-pill btn-invite-whatsapp" id="btn-fhub-invite-whatsapp" title="Share via WhatsApp">
              <span class="pill-icon">👥</span>
              <span>Invite friends</span>
            </button>

            <button class="btn-fhub-pill btn-add-friend" id="btn-fhub-add-friend" title="Add friend by mobile number">
              <span class="pill-icon">👤+</span>
              <span>Add Friend</span>
            </button>

            <button class="btn-fhub-edit-toggle ${isEditing ? 'edit-active' : ''}" id="btn-fhub-toggle-edit" title="Toggle Delete Friends Mode">
              ${isEditing ? '✔' : '✏️'}
            </button>
          </div>

          <!-- Friends / Challenge List -->
          <div class="fhub-friends-list">
            ${friends.length === 0 ? `
              <div class="fhub-empty-state">
                <span class="empty-icon">👥</span>
                <p>No friends found in your list.</p>
                <button class="btn-primary" id="btn-fhub-empty-add">👤+ Add Friend by Mobile Number</button>
              </div>
            ` : friends.map(friend => `
              <div class="friend-card-row">
                <div class="fcard-avatar-wrap">
                  <div class="fcard-avatar">
                    <span>${friend.avatar || '👤'}</span>
                  </div>
                  <div class="fcard-level-star">
                    <span>⭐</span>
                    <span class="star-num">${friend.level || 33}</span>
                  </div>
                </div>

                <div class="fcard-info">
                  <span class="fcard-name">${friend.nickName || friend.name || 'Friend'}</span>
                </div>

                <div class="fcard-actions">
                  <button class="btn-fcard-gift" data-friend-id="${friend.id}" title="Send Free Coins Gift">
                    🎁
                  </button>

                  <button class="btn-glossy-green btn-fcard-challenge" data-friend-name="${friend.nickName || friend.name}" data-friend-id="${friend.id}">
                    Challenge
                  </button>

                  ${isEditing ? `
                    <button class="btn-fcard-delete" data-friend-id="${friend.id}" title="Delete Friend">
                      🗑️
                    </button>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Bottom Navigation Bar (Matching App Theme) -->
        <nav class="fhub-bottom-nav">
          <button class="fhub-nav-item" id="btn-nav-home">
            <span class="nav-icon">🏠</span>
            <span class="nav-label">Home</span>
          </button>

          <button class="fhub-nav-item nav-active" id="btn-nav-friends">
            <span class="nav-icon">👥</span>
            <span class="nav-label">Friends</span>
          </button>

          <button class="fhub-nav-item" id="btn-nav-reward" title="Claim 500 Free Coins Every Hour">
            <span class="nav-icon">🎁</span>
            <span class="nav-label">
              ${hourlyRewardStatus.canClaim ? 'Free 500🪙' : formatCountdown(hourlyRewardStatus.secondsLeft)}
            </span>
            ${hourlyRewardStatus.canClaim ? `<span class="nav-badge-dot">!</span>` : ''}
          </button>

          <button class="fhub-nav-item" id="btn-nav-history" title="View Match History">
            <span class="nav-icon">📜</span>
            <span class="nav-label">History</span>
          </button>

          <button class="fhub-nav-item" id="btn-nav-profile" title="View Profile">
            <span class="nav-icon">👤</span>
            <span class="nav-label">Profile</span>
          </button>
        </nav>
      </div>
    </div>
  `;
}
