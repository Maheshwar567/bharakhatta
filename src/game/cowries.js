// 6 Cowrie Shells (Guvvalu) roll simulation and scoring rules

export const SCORE_NAMES = {
  1: { te: "Okkati", en: "One", isBonus: true, releasesCoins: 1 },
  2: { te: "Rendu", en: "Two", isBonus: false, releasesCoins: 0 },
  3: { te: "Moodu", en: "Three", isBonus: false, releasesCoins: 0 },
  4: { te: "Naalugu", en: "Four", isBonus: false, releasesCoins: 0 },
  5: { te: "Aidu", en: "Five", isBonus: true, releasesCoins: 0 },
  6: { te: "Aaru", en: "Six", isBonus: true, releasesCoins: 0 },
  12: { te: "Baara", en: "Twelve (Baara!)", isBonus: true, releasesCoins: 0 }
};

export class CowrieDice {
  constructor() {
    this.shells = [
      { id: 0, isOpen: true, rot: 15, x: 0, y: 0 },
      { id: 1, isOpen: true, rot: -25, x: 0, y: 0 },
      { id: 2, isOpen: false, rot: 40, x: 0, y: 0 },
      { id: 3, isOpen: true, rot: -10, x: 0, y: 0 },
      { id: 4, isOpen: false, rot: 65, x: 0, y: 0 },
      { id: 5, isOpen: true, rot: -50, x: 0, y: 0 }
    ];
  }

  // Roll 6 cowrie shells
  // Each shell lands Face A (isOpen = true) or Face B (isOpen = false)
  roll(forcedScore = null) {
    let openCount = 0;
    let score = 0;

    if (forcedScore !== null) {
      score = forcedScore;
      openCount = score === 12 ? 0 : score;
    } else {
      // Natural toss with slight physical bias of cowries
      this.shells.forEach(shell => {
        // Natural cowries land mouth up ~48% of the time due to rounded back
        shell.isOpen = Math.random() < 0.48;
        if (shell.isOpen) openCount++;

        // Random tumbling visual rotation and scatter offset
        shell.rot = Math.floor(Math.random() * 360);
        shell.x = (Math.random() - 0.5) * 24;
        shell.y = (Math.random() - 0.5) * 16;
      });

      // User's Rule:
      // All Face A (6 open) = 6
      // 1 Face A = 1
      // 2 Face A = 2
      // 3 Face A = 3
      // 4 Face A = 4
      // 5 Face A = 5
      // All Face B (0 open) = 12 (BAARA!)
      if (openCount === 0) {
        score = 12;
      } else {
        score = openCount;
      }
    }

    // Set shell states matching forcedScore if applied
    if (forcedScore !== null) {
      this.shells.forEach((shell, idx) => {
        shell.isOpen = idx < openCount;
        shell.rot = Math.floor(Math.random() * 360);
        shell.x = (Math.random() - 0.5) * 24;
        shell.y = (Math.random() - 0.5) * 16;
      });
    }

    const info = SCORE_NAMES[score] || { te: `${score}`, en: `${score}`, isBonus: false, releasesCoins: 0 };

    return {
      score,
      openCount,
      shells: this.shells.map(s => ({ ...s })),
      isBonus: info.isBonus, // 1, 5, 6, 12 grant bonus turns!
      releasesCoins: info.releasesCoins,
      titleTe: info.te,
      titleEn: info.en
    };
  }

  // Alternative standard single 6-sided die roll
  rollDie() {
    const score = Math.floor(Math.random() * 6) + 1;
    const isBonus = score === 1 || score === 5 || score === 6;
    const releasesCoins = score === 1 ? 1 : 0;
    const info = SCORE_NAMES[score];

    return {
      score,
      openCount: score,
      shells: [],
      isBonus,
      releasesCoins,
      titleTe: info.te,
      titleEn: info.en
    };
  }
}
