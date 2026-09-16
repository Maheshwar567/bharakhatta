// Board representation, coordinates, safe squares (kattas), and movement paths for Bharakhatta
// 7x7 board with 9 'X' safe squares, 4 Homes (H1, H2, H3, H4), and authentic 48-step spiral path

export const GRID_SIZE = 7;

// 9 Safe squares (Kattas / Ghattas marked with 'X' in traditional board)
export const SAFE_SQUARES = [
  { r: 3, c: 6, id: "home-1", name: "Home 1 Base (East)" },
  { r: 0, c: 3, id: "home-2", name: "Home 2 Base (North)" },
  { r: 3, c: 0, id: "home-3", name: "Home 3 Base (West)" },
  { r: 6, c: 3, id: "home-4", name: "Home 4 Base (South)" },
  { r: 1, c: 1, id: "nw-ghatta", name: "North-West Safe Katta" },
  { r: 1, c: 5, id: "ne-ghatta", name: "North-East Safe Katta" },
  { r: 5, c: 1, id: "sw-ghatta", name: "South-West Safe Katta" },
  { r: 5, c: 5, id: "se-ghatta", name: "South-East Safe Katta" },
  { r: 3, c: 3, id: "center-sanctum", name: "Happy Home Sanctum" }
];

export function isSafeSquare(r, c) {
  return SAFE_SQUARES.some(sq => sq.r === r && sq.c === c);
}

export function isCenterSquare(r, c) {
  return r === 3 && c === 3;
}

// Exact 48-Step Spiral Path for Home 1 (H1 East Base: r=3, c=6)
// Step 0: Home 1 Start (3, 6)
// Steps 1..23: Outer 7x7 Track (24 squares around perimeter)
// Steps 24..39: Middle 5x5 Squad Track (16 squares)
// Steps 40..47: Inner 3x3 Track (8 squares)
// Step 48: Happy Final Home (Center Sanctum r=3, c=3)
export const PATH_H1 = [
  { r: 3, c: 6, step: 0, safe: true, label: "Home 1" },
  { r: 2, c: 6, step: 1 },
  { r: 1, c: 6, step: 2 },
  { r: 0, c: 6, step: 3 }, // NE Corner
  { r: 0, c: 5, step: 4 },
  { r: 0, c: 4, step: 5 },
  { r: 0, c: 3, step: 6, safe: true, label: "Home 2" }, // North Katta
  { r: 0, c: 2, step: 7 },
  { r: 0, c: 1, step: 8 },
  { r: 0, c: 0, step: 9 }, // NW Corner
  { r: 1, c: 0, step: 10 },
  { r: 2, c: 0, step: 11 },
  { r: 3, c: 0, step: 12, safe: true, label: "Home 3" }, // West Katta
  { r: 4, c: 0, step: 13 },
  { r: 5, c: 0, step: 14 },
  { r: 6, c: 0, step: 15 }, // SW Corner
  { r: 6, c: 1, step: 16 },
  { r: 6, c: 2, step: 17 },
  { r: 6, c: 3, step: 18, safe: true, label: "Home 4" }, // South Katta
  { r: 6, c: 4, step: 19 },
  { r: 6, c: 5, step: 20 },
  { r: 6, c: 6, step: 21 }, // SE Corner
  { r: 5, c: 6, step: 22 },
  { r: 4, c: 6, step: 23, isGate: true }, // Gate 23 (just below H1)

  // 5x5 Middle Ring (Steps 24 to 39)
  { r: 5, c: 5, step: 24, safe: true }, // SE Katta
  { r: 5, c: 4, step: 25 },
  { r: 5, c: 3, step: 26 },
  { r: 5, c: 2, step: 27 },
  { r: 5, c: 1, step: 28, safe: true }, // SW Katta
  { r: 4, c: 1, step: 29 },
  { r: 3, c: 1, step: 30 },
  { r: 2, c: 1, step: 31 },
  { r: 1, c: 1, step: 32, safe: true }, // NW Katta
  { r: 1, c: 2, step: 33 },
  { r: 1, c: 3, step: 34 },
  { r: 1, c: 4, step: 35 },
  { r: 1, c: 5, step: 36, safe: true }, // NE Katta
  { r: 2, c: 5, step: 37 },
  { r: 3, c: 5, step: 38 },
  { r: 4, c: 5, step: 39 },

  // 3x3 Inner Ring (Steps 40 to 47)
  { r: 4, c: 4, step: 40 },
  { r: 4, c: 3, step: 41 },
  { r: 4, c: 2, step: 42 },
  { r: 3, c: 2, step: 43 },
  { r: 2, c: 2, step: 44 },
  { r: 2, c: 3, step: 45 },
  { r: 2, c: 4, step: 46 },
  { r: 3, c: 4, step: 47 },

  // Happy Final Home (Step 48)
  { r: 3, c: 3, step: 48, isCenter: true, safe: true, label: "Happy Home" }
];

// Exact 48-Step Spiral Path for Home 2 (H2 North Base: r=0, c=3) - Rotated 90° CCW
export const PATH_H2 = PATH_H1.map((pt, idx) => ({
  ...pt,
  r: 6 - pt.c,
  c: pt.r,
  step: idx,
  label: idx === 0 ? "Home 2" : (idx === 48 ? "Happy Home" : pt.label)
}));

// Exact 48-Step Spiral Path for Home 3 (H3 West Base: r=3, c=0) - Rotated 180°
export const PATH_H3 = PATH_H1.map((pt, idx) => ({
  ...pt,
  r: 6 - pt.r,
  c: 6 - pt.c,
  step: idx,
  label: idx === 0 ? "Home 3" : (idx === 48 ? "Happy Home" : pt.label)
}));

// Exact 48-Step Spiral Path for Home 4 (H4 South Base: r=6, c=3) - Rotated 270° CCW
export const PATH_H4 = PATH_H1.map((pt, idx) => ({
  ...pt,
  r: pt.c,
  c: 6 - pt.r,
  step: idx,
  label: idx === 0 ? "Home 4" : (idx === 48 ? "Happy Home" : pt.label)
}));

// Path getter supporting teams/players 1, 2, 3, 4
export function getPlayerPath(id, pathStyle = "spiral") {
  if (id === 1) return PATH_H1;
  if (id === 2) return PATH_H2;
  if (id === 3) return PATH_H3;
  if (id === 4) return PATH_H4;
  return PATH_H1;
}

export const JAIL_COORDS = {
  1: { r: 3, c: 6, name: "Home 1 Jail" },
  2: { r: 0, c: 3, name: "Home 2 Jail" },
  3: { r: 3, c: 0, name: "Home 3 Jail" },
  4: { r: 6, c: 3, name: "Home 4 Jail" },
  team1: { r: 3, c: 6, name: "Home 1 Jail" },
  team2: { r: 0, c: 3, name: "Home 2 Jail" },
  team3: { r: 3, c: 0, name: "Home 3 Jail" },
  team4: { r: 6, c: 3, name: "Home 4 Jail" }
};

// Aliases for backwards compatibility with tests
export const OUTER_PATH_TEAM1 = PATH_H1.slice(0, 24);
export const OUTER_PATH_TEAM2 = PATH_H2.slice(0, 24);
export const SPIRAL_PATH_TEAM1 = PATH_H1;
export const SPIRAL_PATH_TEAM2 = PATH_H2;
