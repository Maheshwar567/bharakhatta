// Visual component for 6 Cowrie Shells (Guvvalu) - Single Screen Mobile Optimized

export function renderCowrieShell(shell, isRolling) {
  const isOpen = shell.isOpen;
  const rotation = shell.rot || 0;
  const offsetX = (shell.x || 0) * 0.7;
  const offsetY = (shell.y || 0) * 0.7;

  const shellSvg = isOpen
    ? `
      <svg viewBox="0 0 60 90" class="cowrie-svg cowrie-open">
        <defs>
          <radialGradient id="openShellGrad_${shell.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff9ea" />
            <stop offset="60%" stop-color="#f1e0b8" />
            <stop offset="100%" stop-color="#cfb078" />
          </radialGradient>
        </defs>
        <path d="M 30,5 C 48,5 56,30 56,50 C 56,72 45,86 30,86 C 15,86 4,72 4,50 C 4,30 12,5 30,5 Z" 
              fill="url(#openShellGrad_${shell.id})" stroke="#b89354" stroke-width="2.5" />
        <path d="M 30,14 Q 35,50 30,78 Q 25,50 30,14 Z" fill="#4a3014" stroke="#2c1a08" stroke-width="1.2" />
        <line x1="22" y1="26" x2="30" y2="26" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="30" y1="26" x2="38" y2="26" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="20" y1="36" x2="29" y2="36" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="31" y1="36" x2="40" y2="36" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="19" y1="46" x2="29" y2="46" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="31" y1="46" x2="41" y2="46" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="20" y1="56" x2="29" y2="56" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="31" y1="56" x2="40" y2="56" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="22" y1="66" x2="30" y2="66" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <line x1="30" y1="66" x2="38" y2="66" stroke="#e8d5aa" stroke-width="2" stroke-linecap="round" />
        <text x="30" y="83" font-size="8" font-weight="900" fill="#694315" text-anchor="middle">OPEN</text>
      </svg>
    `
    : `
      <svg viewBox="0 0 60 90" class="cowrie-svg cowrie-closed">
        <defs>
          <radialGradient id="closedShellGrad_${shell.id}" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#fff9df" />
            <stop offset="35%" stop-color="#f5e08b" />
            <stop offset="70%" stop-color="#d4aa3b" />
            <stop offset="100%" stop-color="#a67b1e" />
          </radialGradient>
        </defs>
        <path d="M 30,5 C 48,5 57,30 57,50 C 57,72 46,86 30,86 C 14,86 3,72 3,50 C 3,30 12,5 30,5 Z" 
              fill="url(#closedShellGrad_${shell.id})" stroke="#8f6514" stroke-width="2.5" />
        <ellipse cx="26" cy="30" rx="14" ry="20" fill="#ffffff" opacity="0.35" transform="rotate(-15 26 30)" />
        <text x="30" y="83" font-size="8" font-weight="900" fill="#523506" text-anchor="middle">CLOSED</text>
      </svg>
    `;

  return `
    <div class="cowrie-shell-wrapper ${isRolling ? "rolling-tumble" : ""}" 
         style="transform: translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg);">
      ${shellSvg}
    </div>
  `;
}

export function renderCowrieArea(gameState, mpState = null) {
  const { status, currentRoll, diceMode, currentPlayer } = gameState;
  const isRolling = status === "ROLLING";

  // In online multiplayer, check if it is MY turn
  let isMyTurn = true;
  if (mpState && mpState.roomCode) {
    isMyTurn = currentPlayer.id === mpState.myPlayerId;
  } else if (currentPlayer.isAI) {
    isMyTurn = false;
  }

  const canRoll = status === "WAITING_FOR_ROLL" && isMyTurn;

  let shellsHtml = "";
  if (diceMode === "die") {
    const val = currentRoll ? currentRoll.score : 6;
    shellsHtml = `
      <div class="dice-single-cube ${isRolling ? "dice-shake" : ""}">
        <span class="dice-val">${val}</span>
      </div>
    `;
  } else {
    const shells = currentRoll && currentRoll.shells && currentRoll.shells.length === 6
      ? currentRoll.shells
      : [
          { id: 0, isOpen: true, rot: 10, x: -3, y: -2 },
          { id: 1, isOpen: true, rot: -15, x: 2, y: 1 },
          { id: 2, isOpen: false, rot: 25, x: -1, y: 2 },
          { id: 3, isOpen: true, rot: -8, x: 3, y: -1 },
          { id: 4, isOpen: false, rot: 30, x: -2, y: 2 },
          { id: 5, isOpen: true, rot: -25, x: 1, y: -2 }
        ];

    shellsHtml = `
      <div class="compact-cowrie-tray ${isRolling ? "mat-shaking" : ""}">
        ${shells.map(s => renderCowrieShell(s, isRolling)).join("")}
      </div>
    `;
  }

  // Score & status display
  let scoreBadgeHtml = "";
  if (currentRoll && !isRolling) {
    const isBonus = currentRoll.isBonus;
    scoreBadgeHtml = `
      <div class="compact-score-badge ${isBonus ? 'score-bonus-glow' : ''}">
        <div class="score-main">
          <span class="score-large">${currentRoll.score}</span>
          <span class="score-name">${currentRoll.titleTe}</span>
        </div>
        ${isBonus ? '<span class="bonus-pill">⭐ BONUS!</span>' : ''}
      </div>
    `;
  } else if (isRolling) {
    scoreBadgeHtml = `
      <div class="compact-score-badge rolling-badge">
        <span class="rolling-dot">⏳</span>
        <span>Rolling...</span>
      </div>
    `;
  } else {
    scoreBadgeHtml = `
      <div class="compact-score-badge idle-badge">
        <span class="turn-prompt">${isMyTurn ? "Your Turn!" : `${currentPlayer.name}'s Turn`}</span>
      </div>
    `;
  }

  // Button text
  let rollBtnText = "🎲 ROLL GUVVALU";
  if (isRolling) rollBtnText = "Tossing...";
  else if (!isMyTurn) {
    rollBtnText = mpState && mpState.roomCode ? `Waiting for ${currentPlayer.name}...` : "Computer Thinking...";
  }

  return `
    <div class="mobile-cowrie-console">
      <div class="cowrie-left-zone">
        ${shellsHtml}
        ${scoreBadgeHtml}
      </div>

      <div class="cowrie-right-zone">
        <button id="btn-roll-dice" class="btn-roll ${canRoll ? "btn-roll-active" : "btn-roll-disabled"}" 
                ${!canRoll ? "disabled" : ""}>
          ${rollBtnText}
        </button>
      </div>
    </div>
  `;
}
