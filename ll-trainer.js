'use strict';

// ═══════════════════════════════════════
//  OLL — 57 casos
// ═══════════════════════════════════════
const OLL = [
  // Dot Case
  { name: "OLL 1",  group: "Dot",       moves: "R U2 R2 F R F' U2 R' F R F'" },
  { name: "OLL 2",  group: "Dot",       moves: "F R U R' U' S R U R' U' f'" },
  { name: "OLL 3",  group: "Dot",       moves: "y' f R U R' U' f' U' F R U R' U' F'" },
  { name: "OLL 4",  group: "Dot",       moves: "y' f R U R' U' f' U F R U R' U' F'" },
  { name: "OLL 17", group: "Dot",       moves: "R U R' U R' F R F' U2 R' F R F'" },
  { name: "OLL 18", group: "Dot",       moves: "y R U2 R2 F R F' U2 M' U R U' r'" },
  { name: "OLL 19", group: "Dot",       moves: "y S' R U R' S U' R' F R F'" },
  { name: "OLL 20", group: "Dot",       moves: "r U R' U' M2 U R U' R' U' M'" },
  // Square Shapes
  { name: "OLL 5",  group: "Square",    moves: "r' U2 R U R' U r" },
  { name: "OLL 6",  group: "Square",    moves: "r U2 R' U' R U' r'" },
  // Lightning Shapes
  { name: "OLL 7",  group: "Lightning", moves: "r U R' U R U2 r'" },
  { name: "OLL 8",  group: "Lightning", moves: "y2 r' U' R U' R' U2 r" },
  { name: "OLL 11", group: "Lightning", moves: "M R U R' U R U2 R' U M'" },
  { name: "OLL 12", group: "Lightning", moves: "y' M' R' U' R U' R' U2 R U' M" },
  { name: "OLL 39", group: "Lightning", moves: "y L F' L' U' L U F U' L'" },
  { name: "OLL 40", group: "Lightning", moves: "y R' F R U R' U' F' U R" },
  // Fish Shapes
  { name: "OLL 9",  group: "Fish",      moves: "y R U R' U' R' F R2 U R' U' F'" },
  { name: "OLL 10", group: "Fish",      moves: "R U R' U R' F R F' R U2 R'" },
  { name: "OLL 35", group: "Fish",      moves: "R U2 R2 F R F' R U2 R'" },
  { name: "OLL 37", group: "Fish",      moves: "F R' F' R U R U' R'" },
  // Knight Move Shapes
  { name: "OLL 13", group: "Knight",    moves: "F U R U2 R' U' R U R' F'" },
  { name: "OLL 14", group: "Knight",    moves: "R' F R U R' F' R F U' F'" },
  { name: "OLL 15", group: "Knight",    moves: "r' U' r R' U' R U r' U r" },
  { name: "OLL 16", group: "Knight",    moves: "r U r' R U R' U' r U' r'" },
  // C Shapes
  { name: "OLL 34", group: "C",         moves: "y f R f' U' r' U' R U M'" },
  { name: "OLL 46", group: "C",         moves: "R' U' R' F R F' U R" },
  // T Shapes
  { name: "OLL 33", group: "T",         moves: "R U R' U' R' F R F'" },
  { name: "OLL 45", group: "T",         moves: "F R U R' U' F'" },
  // P Shapes
  { name: "OLL 31", group: "P",         moves: "R' U' F U R U' R' F' R" },
  { name: "OLL 32", group: "P",         moves: "S R U R' U' R' F R f'" },
  { name: "OLL 43", group: "P",         moves: "y R' U' F' U F R" },
  { name: "OLL 44", group: "P",         moves: "f R U R' U' f'" },
  // W Shapes
  { name: "OLL 36", group: "W",         moves: "y R U R2 F' U' F U R2 U2 R'" },
  { name: "OLL 38", group: "W",         moves: "R U R' U R U' R' U' R' F R F'" },
  // L Shapes
  { name: "OLL 47", group: "L",         moves: "F' L' U' L U L' U' L U F" },
  { name: "OLL 48", group: "L",         moves: "F R U R' U' R U R' U' F'" },
  { name: "OLL 49", group: "L",         moves: "y2 r U' r2 U r2 U r2 U' r" },
  { name: "OLL 50", group: "L",         moves: "r' U r2 U' r2 U' r2 U r'" },
  { name: "OLL 53", group: "L",         moves: "r' U' R U' R' U R U' R' U2 r" },
  { name: "OLL 54", group: "L",         moves: "r U R' U R U' R' U R U2 r'" },
  // Line Shapes
  { name: "OLL 51", group: "Line",      moves: "y2 F U R U' R' U R U' R' F'" },
  { name: "OLL 52", group: "Line",      moves: "y2 R' F' U' F U' R U R' U R" },
  { name: "OLL 55", group: "Line",      moves: "R U2 R2 U' R U' R' U2 F R F'" },
  { name: "OLL 56", group: "Line",      moves: "r U r' U R U' R' U R U' R' r U' r'" },
  // Awkward Shapes
  { name: "OLL 29", group: "Awkward",   moves: "r2 D' r U r' D r2 U' r' U' r" },
  { name: "OLL 30", group: "Awkward",   moves: "y2 F U R U2 R' U' R U2 R' U' F'" },
  { name: "OLL 41", group: "Awkward",   moves: "y2 R U R' U R U2 R' F R U R' U' F'" },
  { name: "OLL 42", group: "Awkward",   moves: "R' U' R U' R' U2 R F R U R' U' F'" },
  // OCLL
  { name: "OLL 21", group: "OCLL",      moves: "R U R' U R U' R' U R U2 R'" },
  { name: "OLL 22", group: "OCLL",      moves: "R U2 R2 U' R2 U' R2 U2 R" },
  { name: "OLL 23", group: "OCLL",      moves: "R2 D R' U2 R D' R' U2 R'" },
  { name: "OLL 24", group: "OCLL",      moves: "r U R' U' r' F R F'" },
  { name: "OLL 25", group: "OCLL",      moves: "F' r U R' U' r' F R" },
  { name: "OLL 26", group: "OCLL",      moves: "y R U2 R' U' R U' R'" },
  { name: "OLL 27", group: "OCLL",      moves: "R U R' U R U2 R'" },
  // All Corners Oriented
  { name: "OLL 28", group: "Corners",   moves: "r U R' U' M U R U' R'" },
  { name: "OLL 57", group: "Corners",   moves: "R U R' U' M' U R U' r'" },
];

// ═══════════════════════════════════════
//  PLL — 21 casos
// ═══════════════════════════════════════
const PLL = [
  { name: "Aa-perm", group: "A", moves: "x R' U R' D2 R U' R' D2 R2 x'" },
  { name: "Ab-perm", group: "A", moves: "x R2 D2 R U R' D2 R U' R x'" },
  { name: "E-perm",  group: "E", moves: "x' R U' R' D R U R' D' R U R' D R U' R' D' x" },
  { name: "F-perm",  group: "F", moves: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R" },
  { name: "Ga-perm", group: "G", moves: "R2 U R' U R' U' R U' R2 D U' R' U R D'" },
  { name: "Gb-perm", group: "G", moves: "R' U' R U D' R2 U R' U R U' R U' R2 D" },
  { name: "Gc-perm", group: "G", moves: "R2 U' R U' R U R' U R2 D' U R U' R' D" },
  { name: "Gd-perm", group: "G", moves: "R U R' U' D R2 U' R U' R' U R' U R2 D'" },
  { name: "H-perm",  group: "H", moves: "M2 U M2 U2 M2 U M2" },
  { name: "Ja-perm", group: "J", moves: "x R2 F R F' R U2 r' U r U2 x'" },
  { name: "Jb-perm", group: "J", moves: "R U R' F' R U R' U' R' F R2 U' R'" },
  { name: "Na-perm", group: "N", moves: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'" },
  { name: "Nb-perm", group: "N", moves: "R' U L' U2 R U' L R' U L' U2 R U' L U2" },
  { name: "Ra-perm", group: "R", moves: "R U' R' U' R U R D R' U' R D' R' U2 R'" },
  { name: "Rb-perm", group: "R", moves: "R' U2 R U2 R' F R U R' U' R' F' R2" },
  { name: "T-perm",  group: "T", moves: "R U R' U' R' F R2 U' R' U' R U R' F'" },
  { name: "Ua-perm", group: "U", moves: "R U' R U R U R U' R' U' R2" },
  { name: "Ub-perm", group: "U", moves: "R2 U R U R' U' R' U' R' U R'" },
  { name: "V-perm",  group: "V", moves: "R' U R' U' y R' F' R2 U' R' U R' F R F" },
  { name: "Y-perm",  group: "Y", moves: "F R U' R' U' R U R' F' R U R' U' R' F R F'" },
  { name: "Z-perm",  group: "Z", moves: "M2 U M2 U M' U2 M2 U2 M' U2" },
];

// ═══════════════════════════════════════
//  COLOR SYSTEM
// ═══════════════════════════════════════
const COLOR_PRESETS = {
  'Estándar': { U: '#F9C700', F: '#2E7D32', R: '#E65100', L: '#C41E1E', B: '#1565C0', D: '#EFEFED' },
  'Oscuro':   { U: '#E6B800', F: '#1B5E20', R: '#BF360C', L: '#B71C1C', B: '#0D47A1', D: '#BDBDBD' },
  'Pastel':   { U: '#FFF176', F: '#A5D6A7', R: '#FFCC80', L: '#EF9A9A', B: '#90CAF9', D: '#F5F5F5' },
  'Alto C':   { U: '#FFD600', F: '#00C853', R: '#FF6D00', L: '#FF1744', B: '#2979FF', D: '#FFFFFF' },
};
const FACE_NAMES   = ['U', 'F', 'R', 'L', 'B', 'D'];
const FACE_LABELS  = { U: 'Arriba', F: 'Frente', R: 'Derecha', L: 'Izquierda', B: 'Atrás', D: 'Abajo' };

let faceColors = { ...COLOR_PRESETS['Estándar'] };

function getFaceColMap() {
  return {
    yellow: faceColors.U,
    green:  faceColors.F,
    orange: faceColors.R,
    red:    faceColors.L,
    blue:   faceColors.B,
    white:  faceColors.D,
    grey:   '#303040',
  };
}

function stickerHex(colorName) {
  const m = getFaceColMap();
  return m[colorName] || m.grey;
}

// ═══════════════════════════════════════
//  CUBE ENGINE
// ═══════════════════════════════════════
function initCube() {
  return {
    U: Array(9).fill('yellow'), F: Array(9).fill('green'),
    R: Array(9).fill('orange'), L: Array(9).fill('red'),
    B: Array(9).fill('blue'),   D: Array(9).fill('white'),
  };
}
const cloneCube = c => ({ U: [...c.U], F: [...c.F], R: [...c.R], L: [...c.L], B: [...c.B], D: [...c.D] });
const cw  = f => [f[6], f[3], f[0], f[7], f[4], f[1], f[8], f[5], f[2]];
const ccw = f => [f[2], f[5], f[8], f[1], f[4], f[7], f[0], f[3], f[6]];

function applyMove(c, m) {
  const p = cloneCube(c);
  switch (m) {
    case 'U':   c.U = cw(p.U);  [0,1,2].forEach(i => { c.F[i]=p.R[i]; c.R[i]=p.B[i]; c.B[i]=p.L[i]; c.L[i]=p.F[i]; }); break;
    case "U'":  c.U = ccw(p.U); [0,1,2].forEach(i => { c.F[i]=p.L[i]; c.L[i]=p.B[i]; c.B[i]=p.R[i]; c.R[i]=p.F[i]; }); break;
    case 'U2':  applyMove(c,'U'); applyMove(c,'U'); break;
    case 'D':   c.D = cw(p.D);  [6,7,8].forEach(i => { c.F[i]=p.L[i]; c.L[i]=p.B[i]; c.B[i]=p.R[i]; c.R[i]=p.F[i]; }); break;
    case "D'":  c.D = ccw(p.D); [6,7,8].forEach(i => { c.F[i]=p.R[i]; c.R[i]=p.B[i]; c.B[i]=p.L[i]; c.L[i]=p.F[i]; }); break;
    case 'D2':  applyMove(c,'D'); applyMove(c,'D'); break;
    case 'R':   c.R=cw(p.R);   c.U[2]=p.F[2]; c.U[5]=p.F[5]; c.U[8]=p.F[8]; c.F[2]=p.D[2]; c.F[5]=p.D[5]; c.F[8]=p.D[8]; c.D[2]=p.B[6]; c.D[5]=p.B[3]; c.D[8]=p.B[0]; c.B[0]=p.U[8]; c.B[3]=p.U[5]; c.B[6]=p.U[2]; break;
    case "R'":  c.R=ccw(p.R);  c.U[2]=p.B[6]; c.U[5]=p.B[3]; c.U[8]=p.B[0]; c.B[0]=p.D[8]; c.B[3]=p.D[5]; c.B[6]=p.D[2]; c.D[2]=p.F[2]; c.D[5]=p.F[5]; c.D[8]=p.F[8]; c.F[2]=p.U[2]; c.F[5]=p.U[5]; c.F[8]=p.U[8]; break;
    case 'R2':  applyMove(c,'R'); applyMove(c,'R'); break;
    case 'L':   c.L=cw(p.L);   c.U[0]=p.B[8]; c.U[3]=p.B[5]; c.U[6]=p.B[2]; c.B[2]=p.D[6]; c.B[5]=p.D[3]; c.B[8]=p.D[0]; c.D[0]=p.F[0]; c.D[3]=p.F[3]; c.D[6]=p.F[6]; c.F[0]=p.U[0]; c.F[3]=p.U[3]; c.F[6]=p.U[6]; break;
    case "L'":  c.L=ccw(p.L);  c.U[0]=p.F[0]; c.U[3]=p.F[3]; c.U[6]=p.F[6]; c.F[0]=p.D[0]; c.F[3]=p.D[3]; c.F[6]=p.D[6]; c.D[0]=p.B[8]; c.D[3]=p.B[5]; c.D[6]=p.B[2]; c.B[2]=p.U[6]; c.B[5]=p.U[3]; c.B[8]=p.U[0]; break;
    case 'L2':  applyMove(c,'L'); applyMove(c,'L'); break;
    case 'F':   c.F=cw(p.F);   c.U[6]=p.L[8]; c.U[7]=p.L[5]; c.U[8]=p.L[2]; c.R[0]=p.U[6]; c.R[3]=p.U[7]; c.R[6]=p.U[8]; c.D[0]=p.R[6]; c.D[1]=p.R[3]; c.D[2]=p.R[0]; c.L[2]=p.D[0]; c.L[5]=p.D[1]; c.L[8]=p.D[2]; break;
    case "F'":  c.F=ccw(p.F);  c.U[6]=p.R[0]; c.U[7]=p.R[3]; c.U[8]=p.R[6]; c.L[2]=p.U[8]; c.L[5]=p.U[7]; c.L[8]=p.U[6]; c.D[0]=p.L[2]; c.D[1]=p.L[5]; c.D[2]=p.L[8]; c.R[0]=p.D[2]; c.R[3]=p.D[1]; c.R[6]=p.D[0]; break;
    case 'F2':  applyMove(c,'F'); applyMove(c,'F'); break;
    case 'B':   c.B=cw(p.B);   c.U[0]=p.R[2]; c.U[1]=p.R[5]; c.U[2]=p.R[8]; c.L[0]=p.U[2]; c.L[3]=p.U[1]; c.L[6]=p.U[0]; c.D[6]=p.L[0]; c.D[7]=p.L[3]; c.D[8]=p.L[6]; c.R[2]=p.D[8]; c.R[5]=p.D[7]; c.R[8]=p.D[6]; break;
    case "B'":  c.B=ccw(p.B);  c.U[0]=p.L[6]; c.U[1]=p.L[3]; c.U[2]=p.L[0]; c.R[2]=p.U[0]; c.R[5]=p.U[1]; c.R[8]=p.U[2]; c.D[6]=p.R[8]; c.D[7]=p.R[5]; c.D[8]=p.R[2]; c.L[0]=p.D[6]; c.L[3]=p.D[7]; c.L[6]=p.D[8]; break;
    case 'B2':  applyMove(c,'B'); applyMove(c,'B'); break;
    case 'M':   c.U[1]=p.B[7]; c.U[4]=p.B[4]; c.U[7]=p.B[1]; c.B[1]=p.D[7]; c.B[4]=p.D[4]; c.B[7]=p.D[1]; c.D[1]=p.F[1]; c.D[4]=p.F[4]; c.D[7]=p.F[7]; c.F[1]=p.U[1]; c.F[4]=p.U[4]; c.F[7]=p.U[7]; break;
    case "M'":  c.U[1]=p.F[1]; c.U[4]=p.F[4]; c.U[7]=p.F[7]; c.F[1]=p.D[1]; c.F[4]=p.D[4]; c.F[7]=p.D[7]; c.D[1]=p.B[7]; c.D[4]=p.B[4]; c.D[7]=p.B[1]; c.B[1]=p.U[7]; c.B[4]=p.U[4]; c.B[7]=p.U[1]; break;
    case 'M2':  applyMove(c,'M'); applyMove(c,'M'); break;
    case 'E':   c.F[3]=p.L[3]; c.F[4]=p.L[4]; c.F[5]=p.L[5]; c.L[3]=p.B[3]; c.L[4]=p.B[4]; c.L[5]=p.B[5]; c.B[3]=p.R[3]; c.B[4]=p.R[4]; c.B[5]=p.R[5]; c.R[3]=p.F[3]; c.R[4]=p.F[4]; c.R[5]=p.F[5]; break;
    case "E'":  c.F[3]=p.R[3]; c.F[4]=p.R[4]; c.F[5]=p.R[5]; c.R[3]=p.B[3]; c.R[4]=p.B[4]; c.R[5]=p.B[5]; c.B[3]=p.L[3]; c.B[4]=p.L[4]; c.B[5]=p.L[5]; c.L[3]=p.F[3]; c.L[4]=p.F[4]; c.L[5]=p.F[5]; break;
    case 'E2':  applyMove(c,'E'); applyMove(c,'E'); break;
    case 'S':   c.U[3]=p.L[7]; c.U[4]=p.L[4]; c.U[5]=p.L[1]; c.R[1]=p.U[3]; c.R[4]=p.U[4]; c.R[7]=p.U[5]; c.D[3]=p.R[7]; c.D[4]=p.R[4]; c.D[5]=p.R[1]; c.L[1]=p.D[5]; c.L[4]=p.D[4]; c.L[7]=p.D[3]; break;
    case "S'":  c.U[3]=p.R[1]; c.U[4]=p.R[4]; c.U[5]=p.R[7]; c.L[1]=p.U[5]; c.L[4]=p.U[4]; c.L[7]=p.U[3]; c.D[3]=p.L[7]; c.D[4]=p.L[4]; c.D[5]=p.L[1]; c.R[1]=p.D[3]; c.R[4]=p.D[4]; c.R[7]=p.D[5]; break;
    case 'S2':  applyMove(c,'S'); applyMove(c,'S'); break;
    case 'r':   applyMove(c,'R'); applyMove(c,"M'"); break;
    case "r'":  applyMove(c,"R'"); applyMove(c,'M'); break;
    case 'r2':  applyMove(c,'r'); applyMove(c,'r'); break;
    case 'l':   applyMove(c,'L'); applyMove(c,'M'); break;
    case "l'":  applyMove(c,"L'"); applyMove(c,"M'"); break;
    case 'l2':  applyMove(c,'l'); applyMove(c,'l'); break;
    case 'f':   applyMove(c,'F'); applyMove(c,'S'); break;
    case "f'":  applyMove(c,"F'"); applyMove(c,"S'"); break;
    case 'f2':  applyMove(c,'f'); applyMove(c,'f'); break;
    case 'u':   applyMove(c,'U'); applyMove(c,"E'"); break;
    case "u'":  applyMove(c,"U'"); applyMove(c,'E'); break;
    case 'u2':  applyMove(c,'u'); applyMove(c,'u'); break;
    case 'x':   applyMove(c,'R'); applyMove(c,"M'"); applyMove(c,"L'"); break;
    case "x'":  applyMove(c,"R'"); applyMove(c,'M'); applyMove(c,'L'); break;
    case 'x2':  applyMove(c,'x'); applyMove(c,'x'); break;
    case 'y':   applyMove(c,'U'); applyMove(c,"E'"); applyMove(c,"D'"); break;
    case "y'":  applyMove(c,"U'"); applyMove(c,'E'); applyMove(c,'D'); break;
    case 'y2':  applyMove(c,'y'); applyMove(c,'y'); break;
    case 'z':   applyMove(c,'F'); applyMove(c,'S'); applyMove(c,"B'"); break;
    case "z'":  applyMove(c,"F'"); applyMove(c,"S'"); applyMove(c,'B'); break;
    case 'z2':  applyMove(c,'z'); applyMove(c,'z'); break;
    default: break;
  }
}

function tokenize(s) {
  if (!s || s === '—') return [];
  return s.trim().match(/[rludfbxyzRLUDFBMSE]w?'?2?/g) || [];
}
function applyAlg(c, s) { tokenize(s).forEach(t => applyMove(c, t)); }

// ═══════════════════════════════════════
//  CANVAS SETUP
// ═══════════════════════════════════════
function setupCanvas(sz) {
  const canvas = document.getElementById('cubeCanvas');
  const dpr = window.devicePixelRatio || 1;
  canvas.style.width  = sz + 'px';
  canvas.style.height = sz + 'px';
  canvas.width  = Math.round(sz * dpr);
  canvas.height = Math.round(sz * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, S: sz };
}

function drawS(ctx, x, y, w, h, colorName) {
  const hex  = stickerHex(colorName);
  const minS = Math.min(w, h);
  const rad  = Math.max(1.5, minS * 0.17);
  const ins  = minS * 0.09;
  ctx.fillStyle = '#0c0c16';
  ctx.beginPath(); ctx.roundRect(x, y, w, h, rad + 1); ctx.fill();
  ctx.fillStyle = hex;
  ctx.beginPath(); ctx.roundRect(x + ins, y + ins, w - ins * 2, h - ins * 2, rad); ctx.fill();
  const gl = ctx.createLinearGradient(x, y + ins, x, y + h * 0.52);
  gl.addColorStop(0, 'rgba(255,255,255,0.26)');
  gl.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gl;
  ctx.beginPath(); ctx.roundRect(x + ins, y + ins, w - ins * 2, (h - ins * 2) * 0.44, rad); ctx.fill();
}

// ═══════════════════════════════════════
//  PLAN VIEW — OLL or PLL
// ═══════════════════════════════════════
function drawPlanView(cube, ollMode) {
  const { ctx, S } = setupCanvas(280);
  ctx.clearRect(0, 0, S, S);
  ctx.fillStyle = '#0e0e18'; ctx.beginPath(); ctx.roundRect(0, 0, S, S, 12); ctx.fill();

  const PAD = 13, FG = 6, SG = 3;
  const usz = (S - 2 * PAD - 2 * FG - 2 * SG) / 4;
  const sh  = usz / 2;
  const Ux  = PAD + sh + FG, Uy = PAD + sh + FG;
  const ux  = c => Ux + c * (usz + SG);
  const uy  = r => Uy + r * (usz + SG);
  const By  = PAD, Fy = Uy + 3 * usz + 2 * SG + FG;
  const Lx  = PAD, Rx = Ux + 3 * usz + 2 * SG + FG;

  const uCol = c => ollMode ? (c === 'yellow' ? 'yellow' : 'grey') : 'yellow';
  const sCol = c => ollMode ? (c === 'yellow' ? 'yellow' : 'grey') : c;

  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) drawS(ctx, ux(c), uy(r), usz, usz, uCol(cube.U[r * 3 + c]));
  for (let c = 0; c < 3; c++) drawS(ctx, ux(c), By, usz, sh, sCol(cube.B[2 - c]));
  for (let c = 0; c < 3; c++) drawS(ctx, ux(c), Fy, usz, sh, sCol(cube.F[c]));
  for (let r = 0; r < 3; r++) drawS(ctx, Lx, uy(r), sh, usz, sCol(cube.L[r]));
  for (let r = 0; r < 3; r++) drawS(ctx, Rx, uy(r), sh, usz, sCol(cube.R[2 - r]));
}

// ═══════════════════════════════════════
//  ISO 3D VIEW — Full LL
// ═══════════════════════════════════════
function drawIso3D(cube) {
  const { ctx, S } = setupCanvas(280);
  ctx.clearRect(0, 0, S, S);
  ctx.fillStyle = '#0e0e18'; ctx.beginPath(); ctx.roundRect(0, 0, S, S, 12); ctx.fill();

  const unit = S * 0.148, GAP = S * 0.007, cx = S * 0.50, cy = S * 0.54;
  const pt = (r, d, z) => ({ x: cx + (r - d) * unit, y: cy + (r + d) * unit * 0.5 - z * unit });

  function isoS(corners, colorName, br) {
    const hex = stickerHex(colorName);
    const rv = parseInt(hex.slice(1, 3), 16) * br | 0;
    const gv = parseInt(hex.slice(3, 5), 16) * br | 0;
    const bv = parseInt(hex.slice(5, 7), 16) * br | 0;
    ctx.beginPath(); ctx.moveTo(corners[0].x, corners[0].y);
    for (let i = 1; i < corners.length; i++) ctx.lineTo(corners[i].x, corners[i].y);
    ctx.closePath();
    ctx.fillStyle = `rgb(${Math.min(255,rv)},${Math.min(255,gv)},${Math.min(255,bv)})`;
    ctx.fill();
    const gl = ctx.createLinearGradient(corners[0].x, corners[0].y, corners[2].x, corners[2].y);
    gl.addColorStop(0, 'rgba(255,255,255,0.20)'); gl.addColorStop(0.45, 'rgba(255,255,255,0)');
    ctx.fillStyle = gl; ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.6)'; ctx.lineWidth = 0.9; ctx.stroke();
  }

  const g = GAP / unit;
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++)
    isoS([pt(c+g,r+g,3), pt(c+1-g,r+g,3), pt(c+1-g,r+1-g,3), pt(c+g,r+1-g,3)], cube.U[r*3+c], 1.0);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++)
    isoS([pt(c+g,3,(2-r)+1-g), pt(c+1-g,3,(2-r)+1-g), pt(c+1-g,3,(2-r)+g), pt(c+g,3,(2-r)+g)], cube.F[r*3+c], 0.86);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++)
    isoS([pt(3,(2-c)+g,(2-r)+1-g), pt(3,(2-c)+1-g,(2-r)+1-g), pt(3,(2-c)+1-g,(2-r)+g), pt(3,(2-c)+g,(2-r)+g)], cube.R[r*3+c], 0.72);

  ctx.strokeStyle = 'rgba(0,0,0,0.92)'; ctx.lineWidth = 2.4; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  const ln = (a, b) => { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); };
  ln(pt(0,0,3),pt(3,0,3)); ln(pt(3,0,3),pt(3,3,3)); ln(pt(3,3,3),pt(0,3,3)); ln(pt(0,3,3),pt(0,0,3));
  ln(pt(0,0,3),pt(0,0,0)); ln(pt(3,0,3),pt(3,0,0)); ln(pt(3,3,3),pt(3,3,0)); ln(pt(0,3,3),pt(0,3,0));
  ln(pt(0,3,0),pt(3,3,0)); ln(pt(3,3,0),pt(3,0,0));
}

function renderCube(cube) {
  if (mode === 'full')      drawIso3D(cube);
  else if (mode === 'oll')  drawPlanView(cube, true);
  else                      drawPlanView(cube, false);
}

// ═══════════════════════════════════════
//  ALG INVERSION
// ═══════════════════════════════════════
function invertAlg(alg) {
  return tokenize(alg).reverse().map(t => {
    if (t.endsWith("'")) return t.slice(0, -1);
    if (t.endsWith('2')) return t;
    return t + "'";
  }).join(' ');
}

const rand = a => a[Math.floor(Math.random() * a.length)];

// ═══════════════════════════════════════
//  APP STATE
// ═══════════════════════════════════════
let mode = 'full';
let currentOLL = null, currentPLL = null, currentAlg = null;
let showCase  = false;
let showMoves = false;
let timerState = 'idle';
let timerStart = 0, timerInterval = null, holdTimeout = null;
let solves = [], algStats = {};

// ═══════════════════════════════════════
//  SUBSET — nested group → specific case
// ═══════════════════════════════════════
const OLL_GROUPS = [...new Set(OLL.map(a => a.group))].sort();
const PLL_GROUPS = [...new Set(PLL.map(a => a.group))].sort();
let ollFilter = { group: null, specific: null };
let pllFilter = { group: null, specific: null };

function getFilter() { return mode === 'oll' ? ollFilter : pllFilter; }
function setFilter(f) { if (mode === 'oll') ollFilter = f; else pllFilter = f; }

function getPool() {
  const all = mode === 'oll' ? OLL : PLL;
  const f = getFilter();
  if (f.specific) return all.filter(a => a.name === f.specific);
  if (f.group)    return all.filter(a => a.group === f.group);
  return all;
}

function buildSubsetUI() {
  const sec = document.getElementById('subsetSection');
  const bar = document.getElementById('subsetBar');
  if (mode === 'full') { sec.style.display = 'none'; return; }
  sec.style.display = 'block';

  const all    = mode === 'oll' ? OLL : PLL;
  const groups = mode === 'oll' ? OLL_GROUPS : PLL_GROUPS;
  const f      = getFilter();
  bar.innerHTML = '';

  const groupRow = document.createElement('div');
  groupRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px;margin-bottom:4px';

  groupRow.appendChild(makeChip('Todos', f.group === null && f.specific === null, () => {
    setFilter({ group: null, specific: null }); buildSubsetUI(); nextAlg();
  }));

  groups.forEach(g => {
    groupRow.appendChild(makeChip(g, f.group === g, () => {
      setFilter(f.group === g ? { group: null, specific: null } : { group: g, specific: null });
      buildSubsetUI(); nextAlg();
    }));
  });
  bar.appendChild(groupRow);

  if (f.group) {
    const cases   = all.filter(a => a.group === f.group);
    const caseRow = document.createElement('div');
    caseRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:4px;padding-left:4px;border-left:2px solid var(--border);margin-top:2px';
    caseRow.appendChild(makeChip('Random', f.specific === null, () => {
      setFilter({ group: f.group, specific: null }); buildSubsetUI(); nextAlg();
    }, true));
    cases.forEach(a => {
      caseRow.appendChild(makeChip(a.name, f.specific === a.name, () => {
        setFilter(f.specific === a.name ? { group: f.group, specific: null } : { group: f.group, specific: a.name });
        buildSubsetUI(); nextAlg();
      }, true));
    });
    bar.appendChild(caseRow);
  }
}

function makeChip(label, active, onClick, small = false) {
  const btn = document.createElement('button');
  btn.className = 'subset-chip' + (active ? ' active' : '');
  if (small) btn.style.fontSize = '.52rem';
  btn.textContent = label;
  btn.addEventListener('click', onClick);
  return btn;
}

// ═══════════════════════════════════════
//  NEXT ALG
// ═══════════════════════════════════════
function nextAlg() {
  showCase = false;
  document.getElementById('btnToggleCase').textContent = 'Ver caso';
  if (mode === 'full') {
    currentOLL = rand(OLL); currentPLL = rand(PLL); currentAlg = null;
  } else if (mode === 'oll') {
    const pool = getPool(); currentAlg = pool.length ? rand(pool) : rand(OLL);
  } else {
    const pool = getPool(); currentAlg = pool.length ? rand(pool) : rand(PLL);
  }
  buildScramble(); renderInfo(); resetTimer();
}

// ═══════════════════════════════════════
//  SCRAMBLE
// ═══════════════════════════════════════
function fixF2L(cube) {
  cube.D = Array(9).fill('white');
  ['F', 'R', 'L', 'B'].forEach(face => {
    const col = face === 'F' ? 'green' : face === 'R' ? 'orange' : face === 'L' ? 'red' : 'blue';
    for (let i = 3; i < 9; i++) cube[face][i] = col;
  });
}

function buildScramble() {
  let sc;
  if (mode === 'full') {
    sc = invertAlg(currentOLL.moves) + ' ' + invertAlg(currentPLL.moves);
  } else {
    sc = invertAlg(currentAlg.moves);
  }
  document.getElementById('scrambleText').textContent = sc;
  const cube = initCube();
  applyAlg(cube, sc);
  fixF2L(cube);
  renderCube(cube);
}

// ═══════════════════════════════════════
//  INFO CARDS
// ═══════════════════════════════════════
function renderInfo() {
  const row = document.getElementById('algInfoRow');
  row.innerHTML = '';
  if (mode === 'full') {
    row.appendChild(makeCard('oll', currentOLL));
    row.appendChild(makeCard('pll', currentPLL));
  } else {
    row.appendChild(makeCard(mode, currentAlg));
  }
}

function makeCard(phase, alg) {
  const d     = document.createElement('div');
  d.className = `alg-card ${phase}-card`;
  const setup = invertAlg(alg.moves);
  d.innerHTML =
    `<div class="alg-card-phase">${phase.toUpperCase()}</div>` +
    `<div class="alg-card-name">${showCase ? alg.name : '?'}</div>` +
    `<div class="alg-card-group">${showCase ? 'Tipo: ' + alg.group : '— oculto —'}</div>` +
    `<div class="alg-card-moves${showMoves ? ' visible' : ''}">` +
      `<b style="color:var(--accent2)">Alg:</b> ${alg.moves}<br>` +
      `<b style="color:var(--accent3)">Setup:</b> ${setup}` +
    `</div>`;
  return d;
}

function toggleCase() {
  showCase = !showCase;
  renderInfo();
  document.getElementById('btnToggleCase').textContent = showCase ? 'Ocultar caso' : 'Ver caso';
}

function toggleMoves() {
  showMoves = !showMoves;
  document.querySelectorAll('.alg-card-moves').forEach(el => el.classList.toggle('visible', showMoves));
  document.getElementById('btnToggle').textContent = showMoves ? 'Ocultar alg' : 'Ver/ocultar alg';
}

// ═══════════════════════════════════════
//  TIMER
// ═══════════════════════════════════════
function fmt(ms) {
  if (ms < 60000) return (ms / 1000).toFixed(3);
  const s = Math.floor(ms / 1000), m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}.${String(Math.floor(ms % 1000)).padStart(3, '0')}`;
}

const timerEl = () => document.getElementById('timerDisplay');
const subEl   = () => document.getElementById('timerSub');
const tzEl    = () => document.getElementById('touchZone');
const barEl   = () => document.getElementById('spaceBar');

function resetTimer() {
  clearInterval(timerInterval); timerState = 'idle';
  timerEl().textContent = '0.000'; timerEl().className = 'timer-display';
  tzEl().className = 'touch-zone';
  subEl().textContent = 'mantén para preparar · suelta para iniciar';
}
function startTimer() {
  timerStart = performance.now(); timerState = 'running';
  timerEl().className = 'timer-display running'; tzEl().className = 'touch-zone running';
  subEl().textContent = 'toca para parar';
  timerInterval = setInterval(() => { timerEl().textContent = fmt(performance.now() - timerStart); }, 28);
}
function stopTimer() {
  clearInterval(timerInterval);
  const ms = performance.now() - timerStart; timerState = 'done';
  timerEl().textContent = fmt(ms); timerEl().className = 'timer-display done';
  tzEl().className = 'touch-zone done';
  subEl().textContent = 'toca → siguiente  ·  desliza ← borrar';
  recordSolve(ms);
}
function setHolding() {
  timerState = 'holding'; tzEl().className = 'touch-zone holding';
  barEl().classList.add('held'); subEl().textContent = 'mantén...';
  holdTimeout = setTimeout(() => {
    timerState = 'ready'; tzEl().className = 'touch-zone ready';
    timerEl().className = 'timer-display ready';
    subEl().textContent = '¡listo! suelta para iniciar';
  }, 550);
}
function cancelHold() {
  clearTimeout(holdTimeout); barEl().classList.remove('held');
  if (timerState === 'holding') {
    timerState = 'idle'; timerEl().className = 'timer-display';
    tzEl().className = 'touch-zone';
    subEl().textContent = 'mantén para preparar · suelta para iniciar';
  }
}

// ═══════════════════════════════════════
//  KEYBOARD
// ═══════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    e.preventDefault(); if (e.repeat) return;
    if (timerState === 'running') { stopTimer(); return; }
    if (timerState === 'done')    { nextAlg();  return; }
    if (timerState === 'idle')    { setHolding(); }
  }
  if ((e.code === 'Delete' || e.code === 'Backspace') && timerState === 'done') {
    deleteLast(); resetTimer(); renderInfo();
  }
});
document.addEventListener('keyup', e => {
  if (e.code !== 'Space') return; e.preventDefault();
  if (timerState === 'ready') startTimer(); else cancelHold();
});

// ═══════════════════════════════════════
//  POINTER / TOUCH
// ═══════════════════════════════════════
const tz = document.getElementById('touchZone');
let pId = null, pX0 = 0;
tz.addEventListener('pointerdown', e => {
  if (e.target.closest('button')) return;
  tz.setPointerCapture(e.pointerId); pId = e.pointerId; pX0 = e.clientX;
  if (timerState === 'running') { stopTimer(); return; }
  if (timerState === 'done')    { nextAlg();  return; }
  if (timerState === 'idle')    { setHolding(); }
});
tz.addEventListener('pointerup', e => {
  if (e.pointerId !== pId) return; pId = null;
  if (timerState === 'done') {
    if (e.clientX - pX0 < -60) { deleteLast(); resetTimer(); renderInfo(); } return;
  }
  if (timerState === 'ready') startTimer(); else cancelHold();
});
tz.addEventListener('pointercancel', e => {
  if (e.pointerId !== pId) return; pId = null; cancelHold();
});

// ═══════════════════════════════════════
//  BUTTONS
// ═══════════════════════════════════════
document.getElementById('btnNext').addEventListener('click', () => nextAlg());
document.getElementById('btnToggleCase').addEventListener('click', () => toggleCase());
document.getElementById('btnToggle').addEventListener('click', () => toggleMoves());
document.getElementById('btnClear').addEventListener('click', clearAll);

// ═══════════════════════════════════════
//  STATS — localStorage persistence
// ═══════════════════════════════════════
const LS_KEY = 'll-trainer-stats-v1';

function saveStats() {
  try { localStorage.setItem(LS_KEY, JSON.stringify({ solves, algStats })); } catch (e) {}
}
function loadStats() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (Array.isArray(d.solves))                solves   = d.solves;
    if (d.algStats && typeof d.algStats === 'object') algStats = d.algStats;
  } catch (e) {}
}

function algLabel() {
  if (mode === 'full') return `${currentOLL.name} + ${currentPLL.name}`;
  return currentAlg.name;
}
function recordSolve(ms) {
  const lbl = algLabel(); solves.push({ lbl, ms });
  if (!algStats[lbl]) algStats[lbl] = [];
  algStats[lbl].push(ms);
  updateStats(); renderHistory(); renderChips(); saveStats();
}
function deleteLast() {
  if (!solves.length) return;
  const rem = solves.pop();
  const arr = algStats[rem.lbl];
  if (arr) { const i = arr.lastIndexOf(rem.ms); if (i > -1) arr.splice(i, 1); }
  updateStats(); renderHistory(); renderChips(); saveStats();
}
function ao(n, arr) {
  if (arr.length < n) return null;
  const s = [...arr].slice(-n).sort((a, b) => a - b);
  return s.slice(1, n - 1).reduce((a, b) => a + b, 0) / (n - 2);
}
function updateStats() {
  const t = solves.map(s => s.ms);
  document.getElementById('sCount').textContent = t.length;
  if (!t.length) { ['sAvg','sBest','sWorst','sAo5','sAo12'].forEach(id => document.getElementById(id).textContent = '—'); return; }
  document.getElementById('sAvg').textContent   = fmt(t.reduce((a, b) => a + b) / t.length);
  document.getElementById('sBest').textContent  = fmt(Math.min(...t));
  document.getElementById('sWorst').textContent = fmt(Math.max(...t));
  const a5 = ao(5, t), a12 = ao(12, t);
  document.getElementById('sAo5').textContent  = a5  ? fmt(a5)  : '—';
  document.getElementById('sAo12').textContent = a12 ? fmt(a12) : '—';
}
function renderHistory() {
  const el = document.getElementById('historyList');
  if (!solves.length) { el.innerHTML = '<div class="empty-hint">Sin intentos aún</div>'; return; }
  const best = Math.min(...solves.map(s => s.ms));
  el.innerHTML = '';
  [...solves].reverse().forEach((s, i) => {
    const num = solves.length - i, pb = s.ms === best;
    const div = document.createElement('div');
    div.className = 'history-item' + (pb ? ' pb' : '');
    div.innerHTML =
      `<span class="history-num">#${num}</span>` +
      `<span class="history-alg" title="${s.lbl}">${s.lbl}</span>` +
      `<span class="history-time">${fmt(s.ms)}</span>` +
      `<button class="history-del" data-i="${solves.length - 1 - i}">×</button>`;
    el.appendChild(div);
  });
  el.querySelectorAll('.history-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.i, rem = solves.splice(idx, 1)[0];
      const arr = algStats[rem.lbl];
      if (arr) { const j = arr.lastIndexOf(rem.ms); if (j > -1) arr.splice(j, 1); }
      updateStats(); renderHistory(); renderChips(); saveStats();
    });
  });
}
function renderChips() {
  const el = document.getElementById('algChips');
  const entries = Object.entries(algStats).filter(([, v]) => v.length);
  if (!entries.length) { el.innerHTML = '<div class="empty-hint">Sin datos aún</div>'; return; }
  el.innerHTML = '';
  entries
    .sort((a, b) => (a[1].reduce((x, y) => x + y) / a[1].length) - (b[1].reduce((x, y) => x + y) / b[1].length))
    .forEach(([name, times]) => {
      const best = Math.min(...times), avg = times.reduce((a, b) => a + b) / times.length;
      const ch = document.createElement('div');
      ch.className = 'alg-chip'; ch.title = `${times.length} intento(s)`;
      ch.innerHTML =
        `<span class="chip-name">${name}</span>` +
        `<span class="chip-n">${times.length}×</span>` +
        `<span class="chip-best">▼${fmt(best)}</span>` +
        `<span class="chip-avg">⌀${fmt(avg)}</span>`;
      el.appendChild(ch);
    });
}
function clearAll() {
  if (!solves.length || !confirm('¿Borrar todas las estadísticas?')) return;
  solves = []; algStats = {};
  updateStats(); renderHistory(); renderChips(); saveStats();
}

// ═══════════════════════════════════════
//  MODE SELECTOR
// ═══════════════════════════════════════
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); mode = btn.dataset.mode;
    buildSubsetUI(); nextAlg();
  });
});

// ═══════════════════════════════════════
//  MOBILE TABS
// ═══════════════════════════════════════
const isMob = () => window.innerWidth <= 600;
function activateTab(name) {
  if (!isMob()) return;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
}
document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => activateTab(b.dataset.tab)));
window.addEventListener('resize', () => {
  if (!isMob()) document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('active'));
  else { const a = document.querySelector('.tab-btn.active'); if (a) activateTab(a.dataset.tab); }
  if (currentOLL || currentAlg) buildScramble();
});

// ═══════════════════════════════════════
//  COLOR SETTINGS MODAL
// ═══════════════════════════════════════
function buildColorModal() {
  const pr = document.getElementById('presetRow'); pr.innerHTML = '';
  Object.keys(COLOR_PRESETS).forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'preset-btn'; btn.textContent = name;
    btn.addEventListener('click', () => { faceColors = { ...COLOR_PRESETS[name] }; buildColorModal(); refreshCubeColors(); });
    pr.appendChild(btn);
  });
  const grid = document.getElementById('colorGrid'); grid.innerHTML = '';
  FACE_NAMES.forEach(face => {
    const item  = document.createElement('div'); item.className = 'color-item';
    const lbl   = document.createElement('div'); lbl.className = 'color-label'; lbl.textContent = FACE_LABELS[face];
    const swatch = document.createElement('div'); swatch.className = 'color-swatch'; swatch.style.background = faceColors[face];
    const inp   = document.createElement('input'); inp.type = 'color'; inp.className = 'color-input'; inp.value = faceColors[face];
    inp.addEventListener('input', () => { faceColors[face] = inp.value; swatch.style.background = inp.value; refreshCubeColors(); });
    swatch.addEventListener('click', () => inp.click());
    item.appendChild(lbl); item.appendChild(swatch); item.appendChild(inp);
    grid.appendChild(item);
  });
}
function refreshCubeColors() { if (currentOLL || currentAlg) buildScramble(); }

document.getElementById('btnColors').addEventListener('click', () => {
  buildColorModal(); document.getElementById('colorModal').classList.add('open');
});
document.getElementById('modalClose').addEventListener('click', () => document.getElementById('colorModal').classList.remove('open'));
document.getElementById('colorModal').addEventListener('click', e => {
  if (e.target === document.getElementById('colorModal')) document.getElementById('colorModal').classList.remove('open');
});
document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(faceColors, null, 2)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'll-trainer-colors.json'; a.click();
});
document.getElementById('importBtn').addEventListener('click', () => document.getElementById('importInput').click());
document.getElementById('importInput').addEventListener('change', e => {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const d = JSON.parse(ev.target.result);
      FACE_NAMES.forEach(f => { if (d[f]) faceColors[f] = d[f]; });
      buildColorModal(); refreshCubeColors();
    } catch (err) { alert('Archivo inválido'); }
  };
  reader.readAsText(file); e.target.value = '';
});

// ═══════════════════════════════════════
//  roundRect polyfill (Safari)
// ═══════════════════════════════════════
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    this.moveTo(x + r, y); this.lineTo(x + w - r, y); this.arcTo(x + w, y, x + w, y + r, r);
    this.lineTo(x + w, y + h - r); this.arcTo(x + w, y + h, x + w - r, y + h, r);
    this.lineTo(x + r, y + h); this.arcTo(x, y + h, x, y + h - r, r);
    this.lineTo(x, y + r); this.arcTo(x, y, x + r, y, r); this.closePath();
  };
}

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
loadStats();
updateStats(); renderHistory(); renderChips();
buildSubsetUI();
nextAlg();
