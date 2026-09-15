// In-Game Real-Time Chat Drawer & Floating Chat Bubbles

export const QUICK_TAUNTS = [
  { emoji: '🎲', label: 'బాఱ! (Baara 12!)', text: 'బాఱ! (Baara 12!) 🎲' },
  { emoji: '💥', label: 'కట్టా! (Katta!)', text: 'కట్టా! (Katta Strike!) 💥' },
  { emoji: '👏', label: 'Good Move!', text: 'Super move, friend! 👏' },
  { emoji: '🏃', label: 'Catch me!', text: 'Catch my coin if you can! 🏃' },
  { emoji: '⏳', label: 'Hurry up!', text: 'Hurry up, timer is running! ⏳' },
  { emoji: '😂', label: 'Haha!', text: 'Haha! Better luck next roll! 😂' },
  { emoji: '🤝', label: 'Good match!', text: 'Great game! Good match! 🤝' },
  { emoji: '🔥', label: 'I will win!', text: 'Center Home is mine! 🔥' }
];

export const SMILIES_LIST = ['😀', '😂', '🤣', '😎', '🥳', '🔥', '👏', '🎲', '💥', '🏃', '⏳', '👑', '🪙', '🤝', '🎯', '🤩'];

export function renderChatDrawer(isOpen, messages = [], myPlayerId = 1) {
  if (!isOpen) return '';

  const messagesHtml = messages.length === 0
    ? '<div class="chat-empty-state">💬 Send a smiley, village taunt, or chat message!</div>'
    : messages.map(m => {
        const isMe = m.senderId === myPlayerId;
        return `
          <div class="chat-msg-row ${isMe ? 'msg-me' : 'msg-friend'}">
            <span class="msg-sender">${isMe ? 'You' : m.senderName}:</span>
            <span class="msg-bubble">${escapeHtml(m.text)}</span>
            <span class="msg-time">${m.time || ''}</span>
          </div>
        `;
      }).join('');

  return `
    <div class="modal-backdrop" id="chat-modal-backdrop">
      <div class="modal-dialog chat-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">💬</span>
            <div>
              <h2 class="modal-title">Live Chat & Reactions</h2>
              <span class="modal-subtitle">Chat, smileys & village taunts</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-chat">&times;</button>
        </div>

        <div class="chat-body">
          <!-- Quick Smilies Bar -->
          <div class="smilies-bar-section">
            <div class="smilies-bar-title">😀 Tap a Smiley to send:</div>
            <div class="smilies-bar-row">
              ${SMILIES_LIST.map(emoji => `
                <button class="btn-smiley-chip" data-emoji="${emoji}" title="${emoji}">${emoji}</button>
              `).join('')}
            </div>
          </div>

          <!-- Quick Village Taunts -->
          <div class="quick-taunts-section">
            <div class="quick-taunts-title">⚡ Quick Village Taunts:</div>
            <div class="quick-taunts-grid">
              ${QUICK_TAUNTS.map((t, idx) => `
                <button class="btn-quick-taunt" data-taunt-index="${idx}">
                  ${t.emoji} ${t.label}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Message History -->
          <div class="chat-history" id="chat-history-scroll">
            ${messagesHtml}
          </div>
        </div>

        <div class="chat-input-bar">
          <input type="text" id="input-chat-text" class="chat-input" placeholder="Type a message..." maxlength="100" />
          <button class="btn-primary btn-send-chat" id="btn-send-chat">Send 📤</button>
        </div>
      </div>
    </div>
  `;
}

export function renderFloatingChatToast(activeMessage) {
  if (!activeMessage) return '';
  return `
    <div class="floating-chat-bubble animated-bubble">
      <span class="bubble-avatar">💬</span>
      <div class="bubble-content">
        <span class="bubble-sender">${escapeHtml(activeMessage.senderName)}:</span>
        <span class="bubble-text">${escapeHtml(activeMessage.text)}</span>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
