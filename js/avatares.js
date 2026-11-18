/*
  Avatares do jogador, em pixel art.

  Cada desenho é uma grade de 20 x 20 "pixels". Cada letra da grade é uma cor
  e o ponto (.) é transparente. Os rostos de pessoas são montados em camadas:
  primeiro o rosto base (cabeça, olhos, boca e ombros) e, por cima, o cabelo
  e os acessórios. Na camada de cima, o ponto deixa aparecer o que está embaixo.

  O id é o que fica salvo no navegador. O nome é lido pelo leitor de tela.
  Para criar um avatar novo, basta adicionar um item à lista AVATARES.
*/

"use strict";

// Cores que todos os desenhos usam
const CORES_PIXEL = {
  K: "#0b1640", // contorno (azul quase preto)
  E: "#0b1640", // olhos
  M: "#0b1640", // boca
  W: "#ffffff", // branco
  B: "#8fb3ff", // azul claro (detalhes)
  L: "#c9d9ff", // lente dos óculos e corpo do robô
  N: "#0a2472"  // azul escuro
};

/* ---------- Camadas dos rostos de pessoas ---------- */

// S = pele, C = camiseta, H = cabelo, h = reflexo do cabelo
const ROSTO_BASE = [
  "....................",
  "....................",
  "......KKKKKKKK......",
  ".....KSSSSSSSSK.....",
  "....KSSSSSSSSSSK....",
  "....KSSSSSSSSSSK....",
  "....KSSSSSSSSSSK....",
  "....KSSSSSSSSSSK....",
  "...KKSSESSSSESSKK...",
  "...KSSSESSSSESSSK...",
  "...KKSSSSSSSSSSKK...",
  "....KSSMSSSSMSSK....",
  "....KSSSMMMMSSSK....",
  ".....KSSSSSSSSK.....",
  "......KKSSSSKK......",
  ".......KSSSSK.......",
  "....KKKKSSSSKKKK....",
  "...KCCCCKSSKCCCCK...",
  "..KCCCCCCKKCCCCCCK..",
  "..KCCCCCCCCCCCCCCK.."
];

const CAMADAS = {
  curto: [
    "....................",
    "......KKKKKKKK......",
    ".....KHHHHHHHHK.....",
    "....KHHHHHHhHHHK....",
    "....KHHHHHHHHHHK....",
    "....KHH.....HHHK....",
    "....KH..............",
    "....KH.............."
  ],
  comprido: [
    "....................",
    "......KKKKKKKK......",
    ".....KHHHHHHHHK.....",
    "....KHHHHHhHHHHK....",
    "...KHHHHHHHHHHHHK...",
    "...KHHH......HHHK...",
    "...KH..........HK...",
    "...KH..........HK...",
    "...KH..........HK...",
    "...KH..........HK...",
    "...KH..........HK...",
    "...KH..........HK...",
    "...KH..........HK...",
    "...KHH........HHK...",
    "...KHH........HHK...",
    "...KKKK......KKKK..."
  ],
  raspado: [
    "....................",
    "....................",
    "......KKKKKKKK......",
    ".....KHhHhHhHhK.....",
    "....KhHhHhHhHhHK....",
    "....KHhHhHhHhHhK...."
  ],
  cacheado: [
    ".....KKKKKKKKKK.....",
    "...KKHHHHhHHHHHKK...",
    "..KHHhHHHHHHHhHHHK..",
    ".KHHHHHHhHHHHHHHHHK.",
    ".KHhHHHHHHHHHHHhHHK.",
    ".KHHHH.H.HH.H.HHHHK.",
    ".KHHH..........HHHK.",
    ".KHhH..........HhHK.",
    ".KHH............HHK.",
    ".KHH............HHK.",
    "..KK............KK.."
  ],
  rabo: [
    "....................",
    "....................",
    "....................",
    "....................",
    "................KK..",
    "...............KBHK.",
    "................KHHK",
    "................KHHK",
    "................KHHK",
    ".................KHK",
    ".................KHK",
    "..................K."
  ],
  coque: [
    ".......KKKKKK.......",
    "......KHHhHHHK......",
    ".....KKHHHHHHKK.....",
    ".....KHHHHHHHHK.....",
    "....KHHHhHHHHHHK....",
    "....KHH......HHK....",
    "....KH........HK...."
  ],
  brinco: [
    "....................", "....................", "....................", "....................",
    "....................", "....................", "....................", "....................",
    "....................", "....................", "....................",
    "...B................",
    "...B................"
  ],
  barba: [
    "....................", "....................", "....................", "....................",
    "....................", "....................", "....................", "....................",
    "....................", "....................",
    ".....H........H.....",
    ".....HHHHHHHHHH.....",
    ".....HHHWWWWHHH.....",
    ".....KHHHHHHHHK.....",
    "......KHHHHHHK......",
    ".......KKKKKK......."
  ],
  oculos: [
    "....................", "....................", "....................", "....................",
    "....................", "....................", "....................",
    ".....KKKK..KKKK.....",
    "....KKL.KKKK.LKK....",
    ".....KL.K..K.LK.....",
    ".....KKKK..KKKK....."
  ],
  bone: [
    "....................",
    "......KKKKKKKK......",
    ".....KBBBBBBBBK.....",
    "....KBBBWWBBBBBK....",
    "....KBBBBBBBBBBK....",
    "....KKKKKKKKKKKKKKK.",
    "....KH.........KKKK."
  ]
};

// Junta as camadas: cada camada de cima cobre a de baixo, menos nos pontos.
function juntarCamadas(camadas) {
  const grade = ROSTO_BASE.map(linha => linha.split(""));
  camadas.forEach(nome => {
    CAMADAS[nome].forEach((linha, y) => {
      [...linha].forEach((letra, x) => { if (letra !== ".") grade[y][x] = letra; });
    });
  });
  return grade.map(linha => linha.join(""));
}

function pessoa({ camadas, pele, cabelo, reflexo, camiseta }) {
  return { grade: juntarCamadas(camadas), cores: { S: pele, H: cabelo, h: reflexo || cabelo, C: camiseta } };
}

/* ---------- Bichos e robô (desenhados inteiros) ---------- */

const RAPOSA = {
  cores: { O: "#f08a3c", d: "#a8441a" },
  grade: [
    "..KK............KK..",
    ".KOOK..........KOOK.",
    ".KOdOK........KOdOK.",
    ".KOddOKKKKKKKKOddOK.",
    ".KOOOOOOOOOOOOOOOOK.",
    "KOOOOOOOOOOOOOOOOOOK",
    "KOOOOOOOOOOOOOOOOOOK",
    "KOOOOOEOOOOOOEOOOOOK",
    "KOOOOOEOOOOOOEOOOOOK",
    "KWWOOOOOOOOOOOOOOWWK",
    ".KWWWOOOOOOOOOOWWWK.",
    ".KWWWWWOOEEOOWWWWWK.",
    "..KWWWWWWEEWWWWWWK..",
    "...KWWWWMWWMWWWWK...",
    "....KWWWWMMWWWWK....",
    ".....KKWWWWWWKK.....",
    ".......KKKKKK.......",
    "....................",
    "....................",
    "...................."
  ]
};

const PANDA = {
  cores: { D: "#1d1a24" },
  grade: [
    "...KKK........KKK...",
    "..KDDDK......KDDDK..",
    "..KDDDKKKKKKKKDDDK..",
    "..KDDWWWWWWWWWWDDK..",
    ".KWWWWWWWWWWWWWWWWK.",
    ".KWWWWWWWWWWWWWWWWK.",
    "KWWWDDDWWWWWWDDDWWWK",
    "KWWDDWDDWWWWDDWDDWWK",
    "KWWDDDDDWWWWDDDDDWWK",
    "KWWWDDDWWWWWWDDDWWWK",
    "KWWWWWWWWDDWWWWWWWWK",
    "KWWWWWWWMWWMWWWWWWWK",
    ".KWWWWWWWMMWWWWWWWK.",
    ".KWWWWWWWWWWWWWWWWK.",
    "..KWWWWWWWWWWWWWWK..",
    "...KKWWWWWWWWWWKK...",
    ".....KKKKKKKKKK.....",
    "....................",
    "....................",
    "...................."
  ]
};

const ROBO = {
  cores: {},
  grade: [
    "........KBBK........",
    ".........KK.........",
    ".........KK.........",
    "...KKKKKKKKKKKKKK...",
    "..KLLLLLLLLLLLLLLK..",
    "..KLKKKKKKKKKKKKLK..",
    ".KKLKNNNNNNNNNNKLKK.",
    "KBKLKNNNNNNNNNNKLKBK",
    "KBKLKNNBNNNNBNNKLKBK",
    "KBKLKNNBNNNNBNNKLKBK",
    ".KKLKNNNNNNNNNNKLKK.",
    "..KLKNNBNNNNBNNKLK..",
    "..KLKNNNBBBBNNNKLK..",
    "..KLKKKKKKKKKKKKLK..",
    "..KLLLLLLLLLLLLLLK..",
    "..KLBLBLLLLLLLLLLK..",
    "...KKKKKKKKKKKKKK...",
    "....................",
    "....................",
    "...................."
  ]
};

const SAPO = {
  cores: { G: "#6cc04a", g: "#3d7a2a" },
  grade: [
    "...KKKK......KKKK...",
    "..KGGGGK....KGGGGK..",
    ".KGWWWWGK..KGWWWWGK.",
    ".KGWEEWGK..KGWEEWGK.",
    ".KGWEEWGKKKKGWEEWGK.",
    "KGGGWWGGGGGGGGWWGGGK",
    "KGGGGGGGGGGGGGGGGGGK",
    "KGGGGGGGgGGgGGGGGGGK",
    "KGGGGGGGGGGGGGGGGGGK",
    "KGMGGGGGGGGGGGGGGMGK",
    "KGGMGGGGGGGGGGGGMGGK",
    "KGGGMMMMMMMMMMMMGGGK",
    ".KGGGGGGGGGGGGGGGGK.",
    "..KGGGGGGGGGGGGGGK..",
    "...KKKKKKKKKKKKKK...",
    "....................",
    "....................",
    "....................",
    "....................",
    "...................."
  ]
};

/* ---------- Lista de avatares ---------- */

const AVATARES = [
  { id: "curto", nome: "Cabelo curto", ...pessoa({ camadas: ["curto"], pele: "#c98e62", cabelo: "#2b1d16", reflexo: "#4a3426", camiseta: "#2a56c6" }) },
  { id: "comprido", nome: "Cabelo comprido", ...pessoa({ camadas: ["comprido"], pele: "#f9d5b5", cabelo: "#5a3a24", reflexo: "#7a5236", camiseta: "#8fb3ff" }) },
  { id: "raspado", nome: "Cabelo raspadinho", ...pessoa({ camadas: ["raspado"], pele: "#6b4127", cabelo: "#1d1a24", reflexo: "#3a3340", camiseta: "#0a2472" }) },
  { id: "cacheado", nome: "Cabelo cacheado", ...pessoa({ camadas: ["cacheado"], pele: "#9b6340", cabelo: "#2b1d16", reflexo: "#4a3426", camiseta: "#8fb3ff" }) },
  { id: "ruivo", nome: "Rabo de cavalo ruivo", ...pessoa({ camadas: ["rabo", "curto"], pele: "#f9d5b5", cabelo: "#d4642c", reflexo: "#e88a4e", camiseta: "#2a56c6" }) },
  { id: "coque", nome: "Coque loiro com brinco", ...pessoa({ camadas: ["coque", "brinco"], pele: "#c98e62", cabelo: "#f2c14e", reflexo: "#f8d98a", camiseta: "#0a2472" }) },
  { id: "barba", nome: "Barba e óculos", ...pessoa({ camadas: ["curto", "barba", "oculos"], pele: "#c98e62", cabelo: "#5a3a24", reflexo: "#7a5236", camiseta: "#8fb3ff" }) },
  { id: "bone", nome: "Boné", ...pessoa({ camadas: ["curto", "bone"], pele: "#e8b48c", cabelo: "#2b1d16", camiseta: "#2a56c6" }) },
  { id: "raposa", nome: "Raposa", ...RAPOSA },
  { id: "panda", nome: "Panda", ...PANDA },
  { id: "robo", nome: "Robô", ...ROBO },
  { id: "sapo", nome: "Sapo", ...SAPO }
];

const AVATAR_PADRAO = AVATARES[0].id;

// As primeiras versões do jogo salvavam o avatar como emoji.
// Este mapa troca cada emoji antigo pelo avatar parecido.
const AVATARES_ANTIGOS = {
  "🙂": "curto", "🧑🏽": "curto", "👩🏻": "comprido", "👨🏿": "raspado", "👩🏾‍🦱": "cacheado",
  "🧑🏻‍🦰": "ruivo", "👱🏽‍♀️": "coque", "🧔🏽": "barba", "🧑🏼‍🦱": "bone",
  "🦊": "raposa", "🐼": "panda", "🤖": "robo", "🐸": "sapo"
};

// Devolve sempre um id válido, mesmo se o que estava salvo for antigo ou estranho.
function normalizarAvatar(valor) {
  if (AVATARES.some(avatar => avatar.id === valor)) return valor;
  return AVATARES_ANTIGOS[valor] || AVATAR_PADRAO;
}

// Transforma a grade em retângulos de SVG. Pixels vizinhos da mesma cor
// na mesma linha viram um retângulo só, para o desenho ficar leve.
function gradeParaSvg(grade, cores) {
  const paleta = { ...CORES_PIXEL, ...cores };
  // Os bichos não têm ombros: descemos o desenho para ele ficar no meio do quadro.
  const usadas = grade.map((linha, y) => /[^.]/.test(linha) ? y : -1).filter(y => y >= 0);
  const descer = Math.max(0, Math.floor((grade.length - 1 - usadas[usadas.length - 1] - usadas[0]) / 2));
  let retangulos = "";
  grade.forEach((linha, indice) => {
    const y = indice + descer;
    let x = 0;
    while (x < linha.length) {
      const letra = linha[x];
      let largura = 1;
      while (linha[x + largura] === letra) largura++;
      if (letra !== "." && paleta[letra]) {
        retangulos += `<rect x="${x}" y="${y}" width="${largura}" height="1" fill="${paleta[letra]}"/>`;
      }
      x += largura;
    }
  });
  return retangulos;
}

const desenhosProntos = {};

// HTML do desenho do avatar (um <svg>). "classe" serve para tamanhos diferentes.
function desenharAvatar(id, classe = "") {
  const avatar = AVATARES.find(a => a.id === normalizarAvatar(id));
  if (!desenhosProntos[avatar.id]) desenhosProntos[avatar.id] = gradeParaSvg(avatar.grade, avatar.cores);
  return `<svg class="avatar-svg ${classe}" viewBox="0 0 20 20" shape-rendering="crispEdges" aria-hidden="true" focusable="false">${desenhosProntos[avatar.id]}</svg>`;
}
