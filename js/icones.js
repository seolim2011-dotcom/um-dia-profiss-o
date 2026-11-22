/*
  Ícones em pixel art da tela inicial.

  Mesmo formato dos avatares (js/avatares.js): cada ícone é uma grade em que
  cada letra é uma cor e o ponto (.) é transparente. O desenho é feito pela
  função gradeParaSvg, que fica em avatares.js.

  Cores: K = azul-marinho, C = azul-cobalto, Y = amarelo, L = azul bem claro, W = branco.
  No ícone "seta", K usa a cor do texto do botão (currentColor).
*/

"use strict";

const CORES_ICONE = { K: "#0d1b3d", C: "#2747d6", Y: "#ffd23f", L: "#cdd7ff", W: "#ffffff" };

const ICONES = {
  // Crachá com rosto: "Crie seu perfil"
  perfil: [
    "......KKKK......",
    "......KYYK......",
    "..KKKKKKKKKKKK..",
    ".KCCCCCCCCCCCCK.",
    ".KCCCCCKKCCCCCK.",
    ".KWWWWWWWWWWWWK.",
    ".KWLLLLWWWWWWWK.",
    ".KWLKKLWKKKKKWK.",
    ".KWLYYLWWWWWWWK.",
    ".KWCCCCWCCCWWWK.",
    ".KWWWWWWLLLLWWK.",
    ".KWWWWWWWWWWWWK.",
    ".KYYYYYYYYYYYYK.",
    "..KKKKKKKKKKKK..",
    "................",
    "................"
  ],
  // Maleta com um alerta: "Viva sua profissão"
  profissao: [
    ".........KKKKKK.",
    ".........KYKKYK.",
    ".........KYKKYK.",
    ".........KYYYYK.",
    ".........KYKKYK.",
    ".........KKKKKK.",
    "....KKKK..KK....",
    "....K..K........",
    ".KKKKKKKKKKK....",
    ".KLCCCCCCCCK....",
    ".KCCCCCCCCCK....",
    ".KKKKKYKKKKK....",
    ".KCCCCCCCCCK....",
    ".KCCCCCCCCCK....",
    ".KKKKKKKKKKK....",
    "................"
  ],
  // Troféu com estrela: "Desbloqueie conquistas"
  conquista: [
    "...KKKKKKKKKK...",
    ".KKKYYYYYYYYKKK.",
    ".K.KYYYWWYYYK.K.",
    ".K.KYWWWWWWYK.K.",
    ".KKKYYWWWWYYKKK.",
    "...KYYWYYWYYK...",
    "....KYYYYYYK....",
    ".....KYYYYK.....",
    "......KYYK......",
    "......KYYK......",
    ".....KKKKKK.....",
    "....KCCCCCCK....",
    "....KCLLLLCK....",
    "....KCCCCCCK....",
    "...KKKKKKKKKK...",
    "................"
  ],
  // Gráfico de barras: "Comparar resultados"
  grafico: [
    "................",
    "................",
    "...........KKK..",
    "...........KYK..",
    ".......KKK.KYK..",
    ".......KCK.KYK..",
    "...KKK.KCK.KYK..",
    "...KCK.KCK.KYK..",
    "...KCK.KCK.KYK..",
    "...KCK.KCK.KYK..",
    "...KCK.KCK.KYK..",
    "...KCK.KCK.KYK..",
    "..KKKKKKKKKKKKK.",
    "................",
    "................",
    "................"
  ],
  // Seta do botão "Iniciar experiência"
  seta: [
    "...K....",
    "...KK...",
    "KKKKKK..",
    "KKKKKKK.",
    "KKKKKKK.",
    "KKKKKK..",
    "...KK...",
    "...K...."
  ]
};

// HTML do ícone (um <svg>), decorativo: o texto ao lado já diz o que ele é.
function desenharIcone(nome, classe = "") {
  const grade = ICONES[nome];
  const cores = nome === "seta" ? { K: "currentColor" } : CORES_ICONE;
  return `<svg class="icone-pixel ${classe}" viewBox="0 0 ${grade[0].length} ${grade.length}" shape-rendering="crispEdges" aria-hidden="true" focusable="false">${gradeParaSvg(grade, cores)}</svg>`;
}
