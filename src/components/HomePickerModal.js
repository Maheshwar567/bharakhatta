// Dynamic Starting Home Selection Modal
// Appears when a player rolls 1, 5, or 6 for the first time
// Player chooses their home base; opponent automatically receives the opposite home

import { t } from "../utils/i18n.js";

export function renderHomePickerModal(isOpen, options = {}) {
  if (!isOpen) return "";

  const {
    playerName = "Player 1",
    score = 1,
    teamId = 1
  } = options;

  return `
    <div class="modal-backdrop home-picker-backdrop" id="home-picker-backdrop">
      <div class="modal-dialog home-picker-dialog">
        <div class="home-picker-header">
          <span class="picker-trophy">🎉</span>
          <h2 class="picker-title">Choose Your Starting Home!</h2>
          <p class="picker-subtitle">
            <strong>${playerName}</strong> rolled <strong>${score}</strong>! Pick your home base — your opponent will automatically receive the opposite home.
          </p>
        </div>

        <div class="picker-homes-grid">
          <button type="button" class="btn-picker-home" data-pick-home="1">
            <span class="picker-home-badge">H1</span>
            <div class="picker-home-details">
              <strong>Home 1 (East)</strong>
              <span>Opponent gets Home 3 (West)</span>
            </div>
            <span class="picker-arrow">➔</span>
          </button>

          <button type="button" class="btn-picker-home" data-pick-home="2">
            <span class="picker-home-badge">H2</span>
            <div class="picker-home-details">
              <strong>Home 2 (North)</strong>
              <span>Opponent gets Home 4 (South)</span>
            </div>
            <span class="picker-arrow">➔</span>
          </button>

          <button type="button" class="btn-picker-home" data-pick-home="3">
            <span class="picker-home-badge">H3</span>
            <div class="picker-home-details">
              <strong>Home 3 (West)</strong>
              <span>Opponent gets Home 1 (East)</span>
            </div>
            <span class="picker-arrow">➔</span>
          </button>

          <button type="button" class="btn-picker-home" data-pick-home="4">
            <span class="picker-home-badge">H4</span>
            <div class="picker-home-details">
              <strong>Home 4 (South)</strong>
              <span>Opponent gets Home 2 (North)</span>
            </div>
            <span class="picker-arrow">➔</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
