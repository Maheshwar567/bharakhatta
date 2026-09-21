// Friends Hub & Challenge View for Bharakhatta
// Unifies Create Table, Join Table, and Friends List into a single friction-free modal

import { t } from "../utils/i18n.js";
import { BET_TIERS } from "../game/wallet.js";

export function renderFriendsHubModal(options = {}) {
  const {
    isOpen = false,
    friends = [],
    searchQuery = "",
    isEditing = false,
    activeTab = "create", // "create", "join", "friends"
    walletCoins = 1000,
    diamonds = 385,
    roomCode = "4821",
    roomMode = "2p",
    selectedBet = 250,
    shareUrl = "",
    joinCode = "",
    joinError = null,
    isJoining = false,
    hourlyRewardStatus = { canClaim: true, secondsLeft: 0, rewardAmount: 500 }
  } = options;

  if (!isOpen) return "";

  const joinDigits = (joinCode || "").split('');

  const formatCountdown = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  const is4p = roomMode === "4p";
  const pot = selectedBet * 2;

  const whatsappMsg = encodeURIComponent(
    `Namaskaram! 🎲 Join my Bharakhatta match on table *${roomCode}* (${is4p ? '2v2 Teams' : '1v1'})!\n` +
    `Pot: 🪙${pot.toLocaleString()} coins.\n` +
    `Tap here to play: ${shareUrl || ('https://maheshwar567.github.io/bharakhatta/?room=' + roomCode)}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${whatsappMsg}`;

  return `
    <div class="modal-backdrop friends-hub-backdrop" id="friends-hub-backdrop">
      <div class="friends-hub-dialog">
        <!-- Top Bar: Title & Currencies -->
        <header class="friends-hub-topbar">
          <div class="fhub-title-row">
            <button class="btn-fhub-back" id="btn-close-friends-hub" title="Back to Game">
              ‹
            </button>
            <h2 class="fhub-title">Play with Friends</h2>
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

        <!-- Sub-Tabs: Create Table | Join Table | Friends List -->
        <nav class="fhub-tabs-strip">
          <button class="fhub-tab ${activeTab === 'create' ? 'tab-active' : ''}" data-fhub-tab="create">
            🎲 Create Table
          </button>
          <button class="fhub-tab ${activeTab === 'join' ? 'tab-active' : ''}" data-fhub-tab="join">
            🚪 Join Table
          </button>
          <button class="fhub-tab ${activeTab === 'friends' ? 'tab-active' : ''}" data-fhub-tab="friends">
            👥 Friends List (${friends.length})
          </button>
        </nav>

        <div class="friends-hub-content-scroll">
          ${activeTab === 'create' ? `
            <!-- Tab 1: Create Table -->
            <div class="fhub-tab-pane fhub-create-pane">
              <!-- Mode Selection: 1v1 vs 2v2 Checkboxes -->
              <div class="room-setup-section">
                <label class="setup-section-label">Select Match Mode:</label>
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

              <!-- Huge 4-Digit Table Code Display -->
              <div class="table-code-hero-card">
                <span class="table-code-label">TABLE CODE (SHARE WITH FRIEND)</span>
                <div class="table-digits-display">
                  ${(roomCode || "4821").split('').map(digit => `<span class="digit-box digit-box-gold">${digit}</span>`).join('')}
                </div>
                <div class="table-code-actions">
                  <button class="btn-copy-code" id="btn-copy-4digit-code" data-code="${roomCode || '4821'}">
                    📋 Copy Code (${roomCode || '4821'})
                  </button>
                  <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp-share-code" id="btn-whatsapp-room-share" rel="noopener noreferrer">
                    💬 Share on WhatsApp
                  </a>
                </div>
              </div>

              <!-- Waiting Indicator -->
              <div class="room-waiting-indicator">
                <div class="pulse-waiting-ring"></div>
                <span>Waiting for friend to enter code <strong>${roomCode || '4821'}</strong>...</span>
              </div>
            </div>
          ` : activeTab === 'join' ? `
            <!-- Tab 2: Join Table -->
            <div class="fhub-tab-pane fhub-join-pane">
              <div class="join-code-entry-wrap">
                <div class="join-card-header">
                  <span class="join-header-icon">🚪</span>
                  <label class="join-code-label" for="input-4digit-code">Enter 4-Digit Table Code</label>
                  <p class="join-code-sub">Enter the code shared by your friend to join their board</p>
                </div>

                <!-- 4 Golden PIN Digit Boxes -->
                <div class="join-pin-row" id="join-pin-display-row">
                  ${[0, 1, 2, 3].map(i => {
                    const digit = joinDigits[i] || "";
                    const isActive = i === joinDigits.length && !isJoining;
                    return `
                      <span class="join-pin-box ${digit ? 'pin-filled' : ''} ${isActive ? 'pin-active' : ''}">
                        ${digit || '•'}
                      </span>
                    `;
                  }).join('')}
                </div>

                <!-- Hidden/Transparent Input for Physical Keyboard & Autofill -->
                <input 
                  type="text" 
                  id="input-4digit-code" 
                  maxlength="4" 
                  placeholder="e.g. 4821" 
                  value="${joinCode}"
                  autocomplete="off"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  class="join-code-input"
                  autofocus
                />

                <!-- Quick Action: Paste from Clipboard -->
                <button type="button" class="btn-paste-code" id="btn-paste-join-code" title="Paste 4-digit code from clipboard">
                  📋 Paste from Clipboard
                </button>

                <!-- Touch Keypad for Frictionless Mobile Input -->
                <div class="join-keypad-grid">
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="1">1</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="2">2</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="3">3</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="4">4</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="5">5</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="6">6</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="7">7</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="8">8</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="9">9</button>
                  <button type="button" class="btn-fhub-keypad-key btn-keypad-action" data-join-key="clear">CLR</button>
                  <button type="button" class="btn-fhub-keypad-key" data-join-key="0">0</button>
                  <button type="button" class="btn-fhub-keypad-key btn-keypad-action" data-join-key="back">⌫</button>
                </div>

                ${joinError ? `<div class="join-code-error">⚠️ ${joinError}</div>` : ''}

                <button class="btn-glossy-green btn-submit-join ${isJoining ? 'btn-joining-loading' : ''}" id="btn-submit-join-code" ${isJoining ? 'disabled' : ''}>
                  ${isJoining ? '⏳ Connecting to Table...' : '🚀 Join Table & Play'}
                </button>
              </div>
            </div>
          ` : `
            <!-- Tab 3: Friends List -->
            <div class="fhub-tab-pane fhub-friends-pane">
              <!-- Search & Action Strip -->
              <div class="fhub-action-strip">
                <div class="fhub-search-box">
                  <span class="search-icon">🔍</span>
                  <input 
                    type="text" 
                    id="input-fhub-search" 
                    placeholder="Search friends..." 
                    value="${searchQuery}" 
                  />
                  ${searchQuery ? `<button class="btn-clear-search" id="btn-clear-fhub-search">&times;</button>` : ''}
                </div>

                <button class="btn-fhub-pill btn-invite-whatsapp" id="btn-fhub-invite-whatsapp" title="Share via WhatsApp">
                  <span class="pill-icon">👥</span>
                  <span>Invite WhatsApp</span>
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
                        <span class="star-num">${friend.level || 1}</span>
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
                        ⚔️ Challenge
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
          `}
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
