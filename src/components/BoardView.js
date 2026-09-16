// Board View component for Bharakhatta - Single-Screen Mobile Optimized
// Renders the 7x7 village board, the 9 'X' safe squares, integrated top & bottom jails, and tokens

import { isSafeSquare, isCenterSquare } from "../game/board.js";

export function renderBoard(gameState, mpState = null) {
  const { coins, validMoves, currentPlayer, status, team1Kills, team2Kills, players } = gameState;
  const isWaitingMove = status === "WAITING_FOR_MOVE";
  const currentTeam = currentPlayer.team;

  // In online multiplayer, check if it's my turn to move
  let isMyTurn = true;
  if (mpState && mpState.roomCode) {
    isMyTurn = currentPlayer.id === mpState.myPlayerId;
  } else if (currentPlayer.isAI) {
    isMyTurn = false;
  }

  // Group coins by coordinate
  const cellCoinsMap = {};
  coins.forEach(coin => {
    if (!coin.inJail && !coin.isFinished) {
      const key = `${coin.coord.r}_${coin.coord.c}`;
      if (!cellCoinsMap[key]) cellCoinsMap[key] = [];
      cellCoinsMap[key].push(coin);
    }
  });

  const team1JailCoins = coins.filter(c => c.team === 1 && c.inJail);
  const team2JailCoins = coins.filter(c => c.team === 2 && c.inJail);

  const team1Finished = coins.filter(c => c.team === 1 && c.isFinished);
  const team2Finished = coins.filter(c => c.team === 2 && c.isFinished);

  const releaseMove = validMoves.find(m => m.type === "RELEASE_JAIL");
  const canRelease = isWaitingMove && isMyTurn && !!releaseMove;

  // Players info
  const t1Player = players.find(p => p.team === 1) || { name: "Team 1" };
  const t2Player = players.find(p => p.team === 2) || { name: "Team 2" };

  // Build 7x7 grid cells
  let gridHtml = "";
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      const isSafe = isSafeSquare(r, c);
      const isCenter = isCenterSquare(r, c);
      const cellKey = `${r}_${c}`;
      const occupants = cellCoinsMap[cellKey] || [];

      // Check if this cell is a target destination for any valid move
      const matchingMove = (isWaitingMove && isMyTurn)
        ? validMoves.find(m => m.targetCoord && m.targetCoord.r === r && m.targetCoord.c === c)
        : null;

      const isH1Gate = (r === 4 && c === 6);
      const isH2Gate = (r === 0 && c === 4);
      const isH3Gate = (r === 2 && c === 0);
      const isH4Gate = (r === 6 && c === 2);
      const isAnyGate = isH1Gate || isH2Gate || isH3Gate || isH4Gate;

      let cellClasses = ["board-cell"];
      if (isSafe) cellClasses.push("cell-safe-katta");
      if (isCenter) cellClasses.push("cell-center-sanctum");
      if (r === 3 && c === 6) cellClasses.push("cell-home-h1");
      if (r === 0 && c === 3) cellClasses.push("cell-home-h2");
      if (r === 3 && c === 0) cellClasses.push("cell-home-h3");
      if (r === 6 && c === 3) cellClasses.push("cell-home-h4");
      if (isAnyGate) cellClasses.push("cell-gate-step23");
      if (matchingMove) cellClasses.push("cell-valid-target");

      // Cell interior content: 'X' marking for safe squares or center emblem
      let markerHtml = "";
      if (isCenter) {
        const hasFinishedCoins = (team1Finished.length + team2Finished.length) > 0;
        markerHtml = `
          <div class="center-sanctum-emblem happy-home-emblem ${hasFinishedCoins ? 'has-happy-coins' : ''}">
            <svg viewBox="0 0 100 100" class="sanctum-svg">
              <circle cx="50" cy="50" r="46" fill="rgba(241, 196, 15, 0.22)" stroke="#d4ac0d" stroke-width="3" stroke-dasharray="6 3" />
              <circle cx="50" cy="50" r="34" fill="rgba(230, 126, 34, 0.25)" />
              <line x1="16" y1="16" x2="84" y2="84" stroke="#c0392b" stroke-width="3" />
              <line x1="84" y1="16" x2="16" y2="84" stroke="#c0392b" stroke-width="3" />
              <circle cx="50" cy="50" r="18" fill="#ffd700" opacity="0.5" />
            </svg>
            <div class="happy-home-label">
              <span class="happy-home-star">✨</span>
              <span class="happy-home-text">HAPPY HOME</span>
              <span class="happy-home-star">🎉</span>
            </div>
            <div class="finished-coins-stack">
              ${renderFinishedCoins(team1Finished, team2Finished)}
            </div>
          </div>
        `;
      } else if (isSafe) {
        let homeLabel = "";
        if (r === 3 && c === 6) homeLabel = "H1 (EAST)";
        else if (r === 0 && c === 3) homeLabel = "H2 (NORTH)";
        else if (r === 3 && c === 0) homeLabel = "H3 (WEST)";
        else if (r === 6 && c === 3) homeLabel = "H4 (SOUTH)";

        markerHtml = `
          <div class="katta-x-mark">
            <svg viewBox="0 0 100 100" class="cross-svg">
              <line x1="10" y1="10" x2="90" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
              <line x1="90" y1="10" x2="10" y2="90" stroke="#8a2512" stroke-width="6" stroke-linecap="round" />
            </svg>
            ${homeLabel ? `<span class="cell-tag">${homeLabel}</span>` : ""}
          </div>
        `;
      } else if (isAnyGate) {
        markerHtml = `
          <div class="gate-marker" title="Gate 23: Opponent kill needed to enter inside 5/5 ring!">
            <span class="cell-gate-tag">GATE 23</span>
          </div>
        `;
      }

      // Coins inside this cell
      const coinsHtml = occupants.map((coin, idx) => {
        const hasMove = isWaitingMove && isMyTurn && validMoves.some(m => m.coin && m.coin.id === coin.id);
        return renderCoinPiece(coin, hasMove, occupants.length, idx);
      }).join("");

      gridHtml += `
        <div class="${cellClasses.join(" ")}" data-r="${r}" data-c="${c}">
          ${markerHtml}
          <div class="cell-coins-container">
            ${coinsHtml}
          </div>
          ${matchingMove ? `<div class="target-indicator">⭐</div>` : ""}
        </div>
      `;
    }
  }

  // Top Jail (Team 2 Green)
  const isT2Active = currentTeam === 2;
  const topJailHtml = `
    <div class="jail-box jail-top ${isT2Active ? 'jail-turn-active' : ''} ${currentTeam === 2 && canRelease ? 'jail-actionable' : ''}" id="jail-team2">
      <div class="jail-header-compact">
        <div class="jail-team-tag t2-tag">
          <span>🦚 ${t2Player.name}</span>
          ${isT2Active ? '<span class="jail-turn-pulse">👉 TURN</span>' : ''}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${team2Kills} Kills ${team2Kills > 0 ? '🔓 5/5 Open' : '🔒 Gate 23 Stop'}</span>
          <span class="meta-count">${team2JailCoins.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${team2JailCoins.map((coin, idx) => {
            const isPlayable = isWaitingMove && isMyTurn && currentTeam === 2 && canRelease;
            return renderCoinPiece(coin, isPlayable, team2JailCoins.length, idx, true);
          }).join("")}
        </div>

        ${currentTeam === 2 && canRelease ? `
          <button class="btn-release-jail" id="btn-release-jail-t2">
            ⚡ Release ${releaseMove.count} to Home!
          </button>
        ` : ""}
      </div>
    </div>
  `;

  // Bottom Jail (Team 1 Saffron)
  const isT1Active = currentTeam === 1;
  const bottomJailHtml = `
    <div class="jail-box jail-bottom ${isT1Active ? 'jail-turn-active' : ''} ${currentTeam === 1 && canRelease ? 'jail-actionable' : ''}" id="jail-team1">
      <div class="jail-header-compact">
        <div class="jail-team-tag t1-tag">
          <span>👑 ${t1Player.name}</span>
          ${isT1Active ? '<span class="jail-turn-pulse">👉 TURN</span>' : ''}
        </div>
        <div class="jail-meta">
          <span class="meta-kill">⚔️ ${team1Kills} Kills ${team1Kills > 0 ? '🔓 5/5 Open' : '🔒 Gate 23 Stop'}</span>
          <span class="meta-count">${team1JailCoins.length} in Jail</span>
        </div>
      </div>

      <div class="jail-content-row">
        <div class="jail-slots">
          ${team1JailCoins.map((coin, idx) => {
            const isPlayable = isWaitingMove && isMyTurn && currentTeam === 1 && canRelease;
            return renderCoinPiece(coin, isPlayable, team1JailCoins.length, idx, true);
          }).join("")}
        </div>

        ${currentTeam === 1 && canRelease ? `
          <button class="btn-release-jail" id="btn-release-jail-t1">
            ⚡ Release ${releaseMove.count} to Home!
          </button>
        ` : ""}
      </div>
    </div>
  `;

  return `
    <div class="board-wrapper">
      ${topJailHtml}
      
      <div class="board-container">
        <div class="board-frame">
          <div class="board-grid">
            ${gridHtml}
          </div>
        </div>
      </div>

      ${bottomJailHtml}
    </div>
  `;
}

// Renders an individual Coin Piece (Pawn)
export function renderCoinPiece(coin, isSelectable, totalInCell = 1, indexInCell = 0, isJail = false) {
  const teamColorClass = coin.team === 1 ? "coin-team1" : "coin-team2";
  const selectableClass = isSelectable ? "coin-selectable" : "";
  const isStoppedAt23 = coin.stepIndex === 23;

  let offsetStyle = "";
  if (!isJail && totalInCell > 1) {
    const angle = (indexInCell / totalInCell) * 2 * Math.PI;
    const radius = Math.min(14, totalInCell * 3.5);
    const ox = Math.round(Math.cos(angle) * radius);
    const oy = Math.round(Math.sin(angle) * radius);
    offsetStyle = `style="transform: translate(${ox}px, ${oy}px); z-index: ${10 + indexInCell};"`;
  }

  const pieceTitle = isStoppedAt23
    ? `Team ${coin.team} Coin #${coin.num} (Stopped at Step 23 Gate - Opponent kill required to enter inside 5/5 ring)`
    : `Team ${coin.team} Coin #${coin.num} ${isSelectable ? '- Click to Move' : ''}`;

  return `
    <div class="coin-piece ${teamColorClass} ${selectableClass} ${isStoppedAt23 ? 'coin-stopped-23' : ''}" 
         data-coin-id="${coin.id}" 
         data-team="${coin.team}"
         ${offsetStyle}
         title="${pieceTitle}">
      <span class="coin-num">${coin.num}</span>
      ${isStoppedAt23 ? `<span class="coin-gate-badge">23</span>` : ""}
      ${isSelectable ? `<span class="coin-pulse-ring"></span>` : ""}
    </div>
  `;
}

function renderFinishedCoins(t1Finished, t2Finished) {
  if (t1Finished.length === 0 && t2Finished.length === 0) return "";

  return `
    <div class="finished-summary happy-coins-summary">
      ${t1Finished.length > 0 ? `<span class="fin-badge t1-fin" title="${t1Finished.length} Team 1 coins reached Happy Home!">👑 ${t1Finished.length} 🎉</span>` : ""}
      ${t2Finished.length > 0 ? `<span class="fin-badge t2-fin" title="${t2Finished.length} Team 2 coins reached Happy Home!">🦚 ${t2Finished.length} 🌟</span>` : ""}
    </div>
  `;
}
