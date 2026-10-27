/*
  Efeitos especiais: sons e confete.

  Os sons são gerados pelo próprio navegador (Web Audio API), sem arquivos
  de áudio: cada som é uma sequência curta de notas.
  O confete é desenhado num <canvas> que cobre a tela por 3 segundos.
*/

"use strict";

let somLigado = true;
let contextoDeAudio = null;

function definirSom(ligado) {
  somLigado = ligado;
}

// Toca uma sequência de notas. Cada nota é [frequência em Hz, duração em segundos].
function tocarNotas(notas, tipoDeOnda, volume) {
  if (!somLigado) return;
  try {
    // O navegador só libera o áudio depois que a pessoa clica em algo.
    if (!contextoDeAudio) contextoDeAudio = new (window.AudioContext || window.webkitAudioContext)();
    if (contextoDeAudio.state === "suspended") contextoDeAudio.resume();

    let inicio = contextoDeAudio.currentTime;
    notas.forEach(([frequencia, duracao]) => {
      const oscilador = contextoDeAudio.createOscillator();
      const ganho = contextoDeAudio.createGain();
      oscilador.type = tipoDeOnda;
      oscilador.frequency.value = frequencia;
      // Volume começa alto e cai rápido, como uma nota de piano.
      ganho.gain.setValueAtTime(volume, inicio);
      ganho.gain.exponentialRampToValueAtTime(0.001, inicio + duracao);
      oscilador.connect(ganho);
      ganho.connect(contextoDeAudio.destination);
      oscilador.start(inicio);
      oscilador.stop(inicio + duracao);
      inicio += duracao * 0.85;
    });
  } catch (erro) {
    // Navegador sem áudio: o jogo segue em silêncio.
  }
}

const SONS = {
  clique:    () => tocarNotas([[660, 0.06]], "triangle", 0.08),
  escolha:   () => tocarNotas([[523, 0.09], [784, 0.14]], "triangle", 0.14),
  avancar:   () => tocarNotas([[392, 0.07], [523, 0.1]], "sine", 0.1),
  mensagem:  () => tocarNotas([[880, 0.05]], "sine", 0.05),
  tique:     () => tocarNotas([[1200, 0.03]], "square", 0.04),
  acerto:    () => tocarNotas([[523, 0.08], [659, 0.08], [784, 0.18]], "triangle", 0.14),
  erro:      () => tocarNotas([[330, 0.14], [247, 0.24]], "triangle", 0.14),
  alarme:    () => tocarNotas([[440, 0.15], [330, 0.15], [440, 0.15], [330, 0.25]], "sawtooth", 0.07),
  conquista: () => tocarNotas([[523, 0.1], [659, 0.1], [784, 0.1], [1047, 0.3]], "triangle", 0.14),
  fimDoDia:  () => tocarNotas([[392, 0.12], [523, 0.12], [659, 0.12], [784, 0.12], [1047, 0.45]], "triangle", 0.14)
};

function tocarSom(nome) {
  if (SONS[nome]) SONS[nome]();
}

// Solta confete colorido pela tela.
function soltarConfete(quantidade) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.className = "confete";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);

  const pincel = canvas.getContext("2d");
  const largura = (canvas.width = window.innerWidth);
  const altura = (canvas.height = window.innerHeight);
  const cores = ["#7c3aed", "#ec4899", "#fbbf24", "#10b981", "#3b82f6", "#f97316"];
  const duracao = 3000;

  const pedacos = Array.from({ length: quantidade || 150 }, () => ({
    x: largura / 2 + (Math.random() - 0.5) * largura * 0.5,
    y: altura * 0.3,
    velocidadeX: (Math.random() - 0.5) * 16,
    velocidadeY: -Math.random() * 15 - 4,
    tamanho: 7 + Math.random() * 7,
    giro: Math.random() * Math.PI,
    velocidadeGiro: (Math.random() - 0.5) * 0.3,
    cor: cores[Math.floor(Math.random() * cores.length)]
  }));

  const inicio = performance.now();
  function desenharQuadro(agora) {
    const tempo = agora - inicio;
    pincel.clearRect(0, 0, largura, altura);
    pedacos.forEach(pedaco => {
      pedaco.velocidadeY += 0.35;      // gravidade
      pedaco.velocidadeX *= 0.99;      // resistência do ar
      pedaco.x += pedaco.velocidadeX;
      pedaco.y += pedaco.velocidadeY;
      pedaco.giro += pedaco.velocidadeGiro;

      pincel.save();
      pincel.translate(pedaco.x, pedaco.y);
      pincel.rotate(pedaco.giro);
      pincel.globalAlpha = Math.max(0, 1 - tempo / duracao);
      pincel.fillStyle = pedaco.cor;
      pincel.fillRect(-pedaco.tamanho / 2, -pedaco.tamanho / 4, pedaco.tamanho, pedaco.tamanho / 2);
      pincel.restore();
    });
    if (tempo < duracao) requestAnimationFrame(desenharQuadro);
    else canvas.remove();
  }
  requestAnimationFrame(desenharQuadro);
}
