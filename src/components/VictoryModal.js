// Victory modal celebration with confetti and match statistics

import confetti from "canvas-confetti";

export function renderVictoryModal(winner, onRestart) {
  if (!winner) return "";

  // Trigger celebration confetti burst
  setTimeout(() => {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 250);
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  }, 100);

  const teamName = winner.team === 1 ? "Team 1 (Saffron / Bottom)" : "Team 2 (Green / Top)";

  return `
    <div class="modal-backdrop" id="victory-modal-backdrop">
      <div class="modal-dialog victory-dialog">
        <div class="victory-header">
          <div class="trophy-bounce">🏆</div>
          <h2 class="victory-title">VICTORY!</h2>
          <span class="victory-subtitle">${teamName} Wins Bharakhatta!</span>
        </div>

        <div class="victory-body">
          <div class="victory-stats-grid">
            <div class="stat-card">
              <span class="stat-num">${winner.stats.rollsCount || 0}</span>
              <span class="stat-lbl">Total Rolls</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">${winner.stats.capturesCount || 0}</span>
              <span class="stat-lbl">Katta Strikes</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">${winner.stats.bonusTurnsCount || 0}</span>
              <span class="stat-lbl">Bonus Chances</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">${winner.stats.durationSec || 0}s</span>
              <span class="stat-lbl">Match Duration</span>
            </div>
          </div>
          <p class="victory-quote">All 6 coins have reached the inner sanctum home! Superb strategy and village gaming prowess.</p>
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-play-again" id="btn-victory-restart">
            🔄 Play Rematch
          </button>
        </div>
      </div>
    </div>
  `;
}
