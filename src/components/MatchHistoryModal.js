// Dedicated Prominent Match History View for Bharakhatta
// Displays lifetime stats and detailed records with Table Code, Opponent Nick Name, Result & Coins

import { t } from "../utils/i18n.js";

export function renderMatchHistoryModal(isOpen, stats = {}, history = []) {
  if (!isOpen) return "";

  const {
    gamesPlayed = 0,
    gamesWon = 0,
    winRate = 0,
    totalCoinsWon = 0,
    totalKills = 0
  } = stats;

  return `
    <div class="modal-backdrop match-history-backdrop" id="match-history-backdrop">
      <div class="modal-dialog match-history-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">📜</span>
            <div>
              <h2 class="modal-title">Match History & Stats</h2>
              <span class="modal-subtitle">Your lifetime performance and past table records</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-match-history">&times;</button>
        </div>

        <div class="modal-body match-history-body">
          <!-- Lifetime Stats Banner -->
          <div class="history-stats-banner">
            <div class="hstat-box">
              <span class="hstat-val">${gamesPlayed}</span>
              <span class="hstat-label">Matches</span>
            </div>
            <div class="hstat-box">
              <span class="hstat-val stat-green">${gamesWon}</span>
              <span class="hstat-label">Wins</span>
            </div>
            <div class="hstat-box">
              <span class="hstat-val stat-gold">${winRate}%</span>
              <span class="hstat-label">Win Rate</span>
            </div>
            <div class="hstat-box">
              <span class="hstat-val stat-gold">🪙 ${(totalCoinsWon || 0).toLocaleString()}</span>
              <span class="hstat-label">Coins Won</span>
            </div>
          </div>

          <!-- Match History List -->
          <div class="history-records-list">
            <h3 class="history-list-heading">Recent Tables & Matches</h3>

            ${history.length === 0 ? `
              <div class="history-empty-card">
                <span class="empty-icon">🎲</span>
                <p>No matches recorded yet. Play a game to record history!</p>
              </div>
            ` : history.map(item => {
              const isWin = item.result === "WON";
              const isForfeit = item.result === "FORFEITED";
              const tableCode = item.tableCode || (item.id ? String(item.id).replace(/[^0-9]/g, "").slice(-4) : "1001");
              const durationMin = Math.floor((item.durationSec || 0) / 60);
              const durationSec = (item.durationSec || 0) % 60;

              return `
                <div class="history-record-card ${isWin ? 'record-win' : (isForfeit ? 'record-forfeit' : 'record-loss')}">
                  <div class="record-top-row">
                    <div class="record-table-badge">
                      <span class="table-icon">🎯</span>
                      <strong>Table #${tableCode}</strong>
                      <span class="record-mode-tag">${item.mode || '1v1'}</span>
                    </div>

                    <div class="record-result-badge ${isWin ? 'badge-win' : (isForfeit ? 'badge-forfeit' : 'badge-loss')}">
                      ${isWin ? `🏆 WON (+🪙${(item.pot || item.coinsChange || 500).toLocaleString()})` : 
                        (isForfeit ? `🚪 FORFEIT (-🪙${(item.bet || 250).toLocaleString()})` : `❌ LOST (-🪙${(item.bet || 250).toLocaleString()})`)}
                    </div>
                  </div>

                  <div class="record-details-row">
                    <div class="record-opponent">
                      <span class="opponent-label">Opponent:</span>
                      <span class="opponent-name">${item.opponent || 'System AI'}</span>
                    </div>

                    <div class="record-meta">
                      <span>⚔️ ${item.kills || 0} kills</span>
                      <span>•</span>
                      <span>⏱️ ${durationMin}m ${durationSec < 10 ? '0' : ''}${durationSec}s</span>
                      <span>•</span>
                      <span>📅 ${item.date || ''} ${item.time || ''}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-done-match-history">
            ✔ Back to Game
          </button>
        </div>
      </div>
    </div>
  `;
}
