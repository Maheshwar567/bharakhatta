// Board representation, coordinates, safe squares (kattas), and movement paths for Bharakhatta

export const GRID_SIZE = 7;

// 9 Safe squares (Kattas / Ghattas marked with 'X' in the traditional board)
export const SAFE_SQUARES = [
  { r: 0, c: 3, id: "top-home", name: "Top Home Base" },
  { r: 6, c: 3, id: "bottom-home", name: "Bottom Home Base" },
  { r: 3, c: 0, id: "left-ghatta", name: "West Safe Katta" },
  { r: 3, c: 6, id: "right-ghatta", name: "East Safe Katta" },
  { r: 1, c: 1, id: "nw-ghatta", name: "North-West Safe Katta" },
  { r: 1, c: 5, id: "ne-ghatta", name: "North-East Safe Katta" },
  { r: 5, c: 1, id: "sw-ghatta", name: "South-West Safe Katta" },
  { r: 5, c: 5, id: "se-ghatta", name: "South-East Safe Katta" },
  { r: 3, c: 3, id: "center-sanctum", name: "Center Home Sanctum" }
];

export function isSafeSquare(r, c) {
  return SAFE_SQUARES.some(sq => sq.r === r && sq.c === c);
}

export function isCenterSquare(r, c) {
  return r === 3 && c === 3;
}

// 24 perimeter squares ordered counter-clockwise starting from Bottom Home (6, 3)
export const OUTER_PATH_TEAM1 = [
  { r: 6, c: 3, step: 0, label: "Home 1" },
  { r: 6, c: 4, step: 1 },
  { r: 6, c: 5, step: 2 },
  { r: 6, c: 6, step: 3 }, // SE Corner
  { r: 5, c: 6, step: 4 },
  { r: 4, c: 6, step: 5 },
  { r: 3, c: 6, step: 6, safe: true }, // East Katta
  { r: 2, c: 6, step: 7 },
  { r: 1, c: 6, step: 8 },
  { r: 0, c: 6, step: 9 }, // NE Corner
  { r: 0, c: 5, step: 10 },
  { r: 0, c: 4, step: 11 },
  { r: 0, c: 3, step: 12, safe: true, label: "Opponent Home 2" }, // Top Home
  { r: 0, c: 2, step: 13 },
  { r: 0, c: 1, step: 14 },
  { r: 0, c: 0, step: 15 }, // NW Corner (15th step!)
  { r: 1, c: 0, step: 16 },
  { r: 2, c: 0, step: 17 },
  { r: 3, c: 0, step: 18, safe: true }, // West Katta
  { r: 4, c: 0, step: 19 },
  { r: 5, c: 0, step: 20 },
  { r: 6, c: 0, step: 21 }, // SW Corner
  { r: 6, c: 1, step: 22 },
  { r: 6, c: 2, step: 23 }
];

// For Team 2 (starts at Top Home 0, 3):
// Shifts the outer path by 12 steps so step 0 is (0, 3) and step 3 is (0, 0)
export const OUTER_PATH_TEAM2 = [
  ...OUTER_PATH_TEAM1.slice(12),
  ...OUTER_PATH_TEAM1.slice(0, 12)
].map((pt, idx) => ({ ...pt, step: idx }));

// Home Column / Straight Finish Path:
// Team 1: after completing outer loop at (6, 2), enters (5, 3) -> (4, 3) -> (3, 3) Center
export const HOME_COLUMN_TEAM1 = [
  { r: 5, c: 3, step: 24 },
  { r: 4, c: 3, step: 25 },
  { r: 3, c: 3, step: 26, isCenter: true, safe: true }
];

// Team 2: after completing outer loop at (0, 4), enters (1, 3) -> (2, 3) -> (3, 3) Center
export const HOME_COLUMN_TEAM2 = [
  { r: 1, c: 3, step: 24 },
  { r: 2, c: 3, step: 25 },
  { r: 3, c: 3, step: 26, isCenter: true, safe: true }
];

// Exact 40-Step Numbered Spiral Path matching user hand-drawn diagram
// Outer track: Steps 0 to 23 (24 squares)
// Inner track: Steps 24 to 40 (17 squares ending at Center Sanctum (3,3))

// Team 1 Inner Path (symmetrical 180° rotation of user's numbered diagram)
const INNER_PATH_TEAM1 = [
  { r: 5, c: 1, step: 24 }, // 24
  { r: 4, c: 1, step: 25 }, // 25
  { r: 3, c: 1, step: 26 }, // 26
  { r: 2, c: 1, step: 27 }, // 27
  { r: 1, c: 1, step: 28, safe: true }, // 28 (NW Katta)
  { r: 1, c: 2, step: 29 }, // 29
  { r: 1, c: 3, step: 30 }, // 30
  { r: 1, c: 4, step: 31 }, // 31
  { r: 2, c: 4, step: 32 }, // 32
  { r: 3, c: 4, step: 33 }, // 33
  { r: 4, c: 4, step: 34 }, // 34
  { r: 4, c: 3, step: 35 }, // 35
  { r: 4, c: 2, step: 36 }, // 36
  { r: 3, c: 2, step: 37 }, // 37
  { r: 2, c: 2, step: 38 }, // 38
  { r: 2, c: 3, step: 39 }, // 39
  { r: 3, c: 3, step: 40, isCenter: true, safe: true } // 40 (Final Home)
];

export const SPIRAL_PATH_TEAM1 = [
  ...OUTER_PATH_TEAM1,
  ...INNER_PATH_TEAM1
].map((pt, idx) => ({ ...pt, step: idx }));

// Team 2 Inner Path (Exact 1-to-40 steps drawn from H2 in user's photo)
const INNER_PATH_TEAM2 = [
  { r: 1, c: 5, step: 24 }, // 24
  { r: 2, c: 5, step: 25 }, // 25
  { r: 3, c: 5, step: 26 }, // 26
  { r: 4, c: 5, step: 27 }, // 27
  { r: 5, c: 5, step: 28, safe: true }, // 28 (SE Katta)
  { r: 5, c: 4, step: 29 }, // 29
  { r: 5, c: 3, step: 30 }, // 30
  { r: 5, c: 2, step: 31 }, // 31
  { r: 4, c: 2, step: 32 }, // 32
  { r: 3, c: 2, step: 33 }, // 33
  { r: 2, c: 2, step: 34 }, // 34
  { r: 2, c: 3, step: 35 }, // 35
  { r: 2, c: 4, step: 36 }, // 36
  { r: 3, c: 4, step: 37 }, // 37
  { r: 4, c: 4, step: 38 }, // 38
  { r: 4, c: 3, step: 39 }, // 39
  { r: 3, c: 3, step: 40, isCenter: true, safe: true } // 40 (Final Home)
];

export const SPIRAL_PATH_TEAM2 = [
  ...OUTER_PATH_TEAM2,
  ...INNER_PATH_TEAM2
].map((pt, idx) => ({ ...pt, step: idx }));

// Standard Classic Path (Ludo-style home column finish)
export const CLASSIC_PATH_TEAM1 = [
  ...OUTER_PATH_TEAM1,
  ...HOME_COLUMN_TEAM1
].map((pt, idx) => ({ ...pt, step: idx }));

export const CLASSIC_PATH_TEAM2 = [
  ...OUTER_PATH_TEAM2,
  ...HOME_COLUMN_TEAM2
].map((pt, idx) => ({ ...pt, step: idx }));

export function getPlayerPath(teamId, pathStyle = "spiral") {
  if (pathStyle === "classic") {
    return teamId === 1 ? CLASSIC_PATH_TEAM1 : CLASSIC_PATH_TEAM2;
  }
  return teamId === 1 ? SPIRAL_PATH_TEAM1 : SPIRAL_PATH_TEAM2;
}

// Jail coordinates (visual representation outside top and bottom edges)
export const JAIL_COORDS = {
  team1: { r: 7, c: 3, name: "Bottom Jail (Team 1)" },
  team2: { r: -1, c: 3, name: "Top Jail (Team 2)" }
};
