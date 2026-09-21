// Victory modal celebration with confetti and match statistics

import confetti from "canvas-confetti";
import { t } from "../utils/i18n.js";

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

  const teamName = winner.team === 1 ? "Team 1 (Saffron)" : "Team 2 (Green)";
  const isSquadWin = winner.reason === "SQUAD_5X5_COMPLETE";
  const isForfeitWin = winner.reason === "OPPONENT_QUIT";
  const victoryQuote = isForfeitWin 
    ? (winner.quittingPlayerName ? `🚪 ${winner.quittingPlayerName} quit the match! ${t("winReasonForfeit")}` : t("winReasonForfeit"))
    : (isSquadWin ? t("winReasonSquad", { team: winner.team }) : t("winReasonCenter"));

  const subtitle = isForfeitWin 
    ? `Default Win • ${winner.player?.name || teamName}`
    : `${t("victoryDesc", { team: winner.team })} (${teamName})`;

  return `
    <div class="modal-backdrop" id="victory-modal-backdrop">
      <div class="modal-dialog victory-dialog">
        <div class="victory-header">
          <div class="trophy-bounce">🏆</div>
          <h2 class="victory-title">${t("victoryTitle")}</h2>
          <span class="victory-subtitle">${subtitle}</span>
        </div>

        <div class="modal-body">
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
          <div style="margin-top: 14px; background: rgba(241, 196, 15, 0.15); border: 1px solid rgba(241, 196, 15, 0.4); padding: 12px; border-radius: 8px;">
            <p class="victory-quote" style="margin: 0; color: #f1c40f; font-weight: 500; font-size: 0.95rem;">
              ${victoryQuote}
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary btn-play-again" id="btn-victory-restart">
            ${t("rematchBtn")}
          </button>
        </div>
      </div>
    </div>
  `;
}
