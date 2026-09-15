// Profile & Lifetime Match History Modal Component for Bharakhatta
// Displays user profile, lifetime statistics, and chronological match history

export function renderProfileHistoryModal(isOpen, user, stats, history = []) {
  if (!isOpen || !user) return "";

  const winRate = stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0;

  const historyRowsHtml = (history && history.length > 0)
    ? history.map(item => {
        const isWin = item.result === "WON";
        const resultClass = isWin ? "result-won" : "result-lost";
        const resultIcon = isWin ? "🏆" : (item.result === "FORFEITED" ? "⚠️" : "❌");
        const coinDeltaClass = item.coinsChange > 0 ? "delta-positive" : (item.coinsChange < 0 ? "delta-negative" : "");
        const coinPrefix = item.coinsChange > 0 ? "+" : "";

        return `
          <tr class="history-row">
            <td>
              <div class="history-date">${item.date}</div>
              <div class="history-time">${item.time}</div>
            </td>
            <td>
              <div class="history-mode">${item.mode}</div>
              <div class="history-opp">vs ${item.opponent}</div>
            </td>
            <td>
              <span class="history-badge ${resultClass}">
                ${resultIcon} ${item.result}
              </span>
            </td>
            <td>
              <span class="history-kills">⚔️ ${item.kills}</span>
            </td>
            <td class="text-right">
              <span class="history-delta ${coinDeltaClass}">
                ${coinPrefix}${item.coinsChange ? item.coinsChange.toLocaleString() : "0"} 🪙
              </span>
            </td>
          </tr>
        `;
      }).join("")
    : `
      <tr>
        <td colspan="5" class="empty-history">
          🎲 No matches played yet on this mobile number. Play a match to start your record!
        </td>
      </tr>
    `;

  return `
    <div class="modal-backdrop" id="profile-modal-backdrop">
      <div class="modal-dialog modal-profile">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">👤</span>
            <div>
              <h2 class="modal-title">${user.name}</h2>
              <span class="modal-subtitle">📱 +91 ${user.mobile} • Registered Player</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-profile">&times;</button>
        </div>

        <div class="modal-body">
          <!-- Stats Summary Grid -->
          <div class="stats-overview-grid">
            <div class="stat-card">
              <span class="stat-value">🪙 ${stats.balance.toLocaleString()}</span>
              <span class="stat-label">Coin Balance</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">${stats.gamesWon} / ${stats.gamesPlayed}</span>
              <span class="stat-label">Wins / Played</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">${winRate}%</span>
              <span class="stat-label">Win Rate</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">⚔️ ${stats.totalKills}</span>
              <span class="stat-label">Total Kills</span>
            </div>
          </div>

          <!-- Match History Section -->
          <div class="history-section">
            <div class="history-section-header">
              <h3>📜 Match History (${history.length})</h3>
              <span class="history-hint">Synced to mobile ${user.mobile}</span>
            </div>

            <div class="history-table-wrapper">
              <table class="history-table">
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Match</th>
                    <th>Result</th>
                    <th>Kills</th>
                    <th class="text-right">Coins</th>
                  </tr>
                </thead>
                <tbody>
                  ${historyRowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="modal-footer modal-footer-split">
          <button class="btn-secondary" id="btn-switch-account">
            🔄 Switch Account
          </button>
          <button class="btn-primary" id="btn-profile-done">
            Close
          </button>
        </div>
      </div>
    </div>
  `;
}
