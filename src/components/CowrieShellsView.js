// Visual component for 6 Cowrie Shells (Guvvalu) with Cupped Palm Toss - Single Screen Mobile Optimized

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

export function renderFoldedPalm(isRolling, canRoll, isMyTurn) {
  return `
    <div class="palm-toss-stage ${isRolling ? 'palm-state-tossing' : 'palm-state-cupped'} ${canRoll ? 'palm-clickable' : ''}" 
         id="palm-cupped-box" 
         title="${canRoll ? 'Tap folded palm to shake for 2s and toss guvvalu!' : ''}">
      
      <!-- Authentic Village Folded Fist Graphic (Per User Photo) -->
      <div class="folded-fist-graphic ${isRolling ? 'shake-folded-fist' : ''}">
        <svg viewBox="0 0 140 140" class="folded-palm-svg">
          <defs>
            <radialGradient id="fistGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffd194" stop-opacity="0.35" />
              <stop offset="100%" stop-color="#d49a6a" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="fistSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f8d6ab" />
              <stop offset="35%" stop-color="#e0a370" />
              <stop offset="70%" stop-color="#b6733c" />
              <stop offset="100%" stop-color="#7c431b" />
            </linearGradient>
          </defs>

          <!-- Aura glow behind fist -->
          <circle cx="70" cy="70" r="60" fill="url(#fistGlow)" />

          <!-- Wrist / Forearm base -->
          <path d="M 50,118 L 48,138 L 92,138 L 90,118 Z" fill="#9e5f30" stroke="#502910" stroke-width="2" />

          <!-- Main palm back / ball of thumb -->
          <path d="M 38,72 C 34,90 42,118 52,122 C 64,126 84,124 94,116 C 104,106 108,86 104,68 C 100,52 92,44 76,44 C 54,44 42,54 38,72 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2.5" />

          <!-- 4 Folded Finger Knuckles curled tightly holding shells inside -->
          <!-- Index finger (top) -->
          <path d="M 56,46 C 56,36 74,34 82,42 C 86,46 88,54 84,58 C 78,62 60,60 56,46 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2" />
          <!-- Middle finger -->
          <path d="M 52,58 C 50,52 74,50 84,56 C 88,60 88,68 82,72 C 74,76 56,72 52,58 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2" />
          <!-- Ring finger -->
          <path d="M 48,72 C 46,66 70,64 80,70 C 84,74 84,82 78,86 C 70,90 52,86 48,72 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2" />
          <!-- Pinky finger -->
          <path d="M 46,86 C 44,82 66,80 74,84 C 78,88 78,96 72,98 C 64,102 48,98 46,86 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2" />

          <!-- Folded Thumb clamped over fingers -->
          <path d="M 40,82 C 32,70 34,54 44,48 C 52,42 64,48 68,58 C 72,68 68,82 56,88 C 48,92 42,88 40,82 Z" 
                fill="url(#fistSkin)" stroke="#502910" stroke-width="2.2" />

          <!-- Thumbnail highlight -->
          <ellipse cx="48" cy="54" rx="5" ry="7" fill="#f8e4cc" stroke="#b07b48" stroke-width="1" transform="rotate(-25 48 54)" />

          <!-- Crease lines -->
          <path d="M 64,62 Q 74,68 84,62" fill="none" stroke="#683415" stroke-width="1.6" stroke-linecap="round" />
          <path d="M 60,76 Q 70,82 80,76" fill="none" stroke="#683415" stroke-width="1.6" stroke-linecap="round" />
          <path d="M 56,90 Q 66,94 74,90" fill="none" stroke="#683415" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </div>

      <!-- Village Folded Palm Interaction Prompt -->
      <div class="palm-prompt-badge ${canRoll ? 'pulse-gold' : ''}">
        <span class="palm-prompt-icon">✊</span>
        <span class="palm-prompt-text">${canRoll ? 'Folded Palm — Tap to Shake & Toss!' : isRolling ? 'Shaking Palm (2 sec)...' : 'Folded Palm with Guvvalu'}</span>
      </div>
    </div>
  `;
}

// For backwards compatibility
export const renderCuppedPalm = renderFoldedPalm;

export function renderCowrieArea(gameState, mpState = null, timeLeft = 30) {
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

    // User rule:
    // 1st step: palm folded (per image)
    // 2nd step: shake palm 2 sec
    // 3rd step: release palm -> SHOW SHELLS ONLY, NOT PALM!
    if (status === "WAITING_FOR_ROLL" || isRolling) {
      shellsHtml = renderFoldedPalm(isRolling, canRoll, isMyTurn);
    } else {
      // Settled after toss: show SHELLS ONLY on the board mat, NO PALM!
      shellsHtml = `
        <div class="settled-cowrie-mat">
          <div class="mat-label">🌾 Tossed on Board Mat</div>
          <div class="compact-cowrie-tray">
            ${shells.map(s => renderCowrieShell(s, false)).join("")}
          </div>
        </div>
      `;
    }
  }

  // Score & status display
  let scoreBadgeHtml = "";
  if (currentRoll && !isRolling) {
    const isBonus = currentRoll.isBonus;
    scoreBadgeHtml = `
      <div class="compact-score-badge ${isBonus ? 'score-bonus-glow' : ''}">
        <div class="score-main">
          <span class="score-large">${currentRoll.score}</span>
          <span class="score-name">${currentRoll.titleTe || ''}</span>
        </div>
        ${isBonus ? '<span class="bonus-pill">⭐ BONUS!</span>' : ''}
      </div>
    `;
  } else if (isRolling) {
    scoreBadgeHtml = `
      <div class="compact-score-badge rolling-badge">
        <span class="rolling-dot">⏳</span>
        <span>Shaking Palm (2 sec)...</span>
      </div>
    `;
  } else {
    scoreBadgeHtml = `
      <div class="compact-score-badge idle-badge ${isMyTurn ? "badge-my-turn" : ""}">
        <span class="turn-prompt">${isMyTurn ? "👉 Your Turn!" : `⏳ ${currentPlayer.name}'s Turn`}</span>
        <span class="turn-timer-sub">⏳ ${timeLeft}s</span>
      </div>
    `;
  }

  // Button text
  let rollBtnText = "✊ TOSS GUVVALU";
  if (isRolling) rollBtnText = "Shaking (2s)...";
  else if (!isMyTurn) {
    rollBtnText = mpState && mpState.roomCode ? `Waiting for ${currentPlayer.name}...` : "Computer Thinking...";
  }

  return `
    <div class="mobile-cowrie-console ${isMyTurn && canRoll ? "console-my-turn" : ""}">
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

