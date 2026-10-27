/*
  Um Dia na Profissão — telas e eventos.

  Este arquivo cuida do que aparece na tela e do que acontece quando a pessoa
  clica. Os cálculos ficam em js/afinidade.js, o salvamento em
  js/armazenamento.js, as medalhas em js/conquistas.js e os sons e o confete
  em js/efeitos.js.

  Cada tela é uma <section class="tela"> no index.html:
    inicio → cadastro → jogo → relatorio → comparacao / conquistas
*/

"use strict";

const LETRAS = "ABCDEF";                  // letras das opções (também usadas como atalho)
const CIRCUNFERENCIA = 2 * Math.PI * 52;  // contorno do círculo de afinidade (raio 52)
const TEMPO_PADRAO = 20;                  // segundos do cronômetro nas urgências
const AVATARES = ["🧑🏽", "👩🏻", "👨🏿", "👩🏾‍🦱", "🧑🏻‍🦰", "👱🏽‍♀️", "🧔🏽", "🧑🏼‍🦱", "🦊", "🐼", "🤖", "🐸"];
const FRASES_DE_PASSAGEM = ["O tempo voa...", "Algumas horas depois...", "Mais tarde...", "O dia continua..."];

// Respostas para "Você curtiria fazer isso todo dia?", depois de cada desafio.
const GOSTOS = [
  { valor: 2, emoji: "😍", texto: "Curti muito" },
  { valor: 1, emoji: "😐", texto: "Mais ou menos" },
  { valor: 0, emoji: "😩", texto: "Não curti" }
];
const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Tudo o que o jogo precisa lembrar enquanto a página está aberta.
const estado = {
  nome: "",                 // nome de quem está jogando
  avatar: AVATARES[0],      // avatar escolhido
  selecionada: null,        // id da profissão marcada na tela de cadastro
  profissao: null,          // profissão do dia em andamento
  indice: 0,                // número da situação atual (começa em 0)
  escolhas: [],             // opção escolhida em cada situação (-1 = tempo esgotado)
  urgencias: { total: 0, esgotadas: 0, menorFolga: null },
  desafio: null,            // desafio em andamento: { acertou: null/true/false, ordem: [...] }
  preferencias: { som: true, cronometro: true },
  filtroJogador: null       // de quem são os resultados nas telas de comparação e conquistas
};

// Animações e cronômetro em andamento (para poder cancelar quando a tela muda).
const andamento = {
  conversa: 0,          // número da conversa atual; animações de conversas antigas param sozinhas
  esperaConversa: null, // setTimeout da próxima mensagem
  pularConversa: null,  // função que mostra a conversa inteira de uma vez
  cronometro: null,     // { intervalo, restante() }
  passagem: null        // função que encerra a tela de passagem de tempo
};

/* ---------- Utilidades ---------- */

// Atalho para buscar um elemento da página: $("#id-do-elemento")
function $(seletor) {
  return document.querySelector(seletor);
}

// Protege um texto antes de colocá-lo no HTML (um nome como "<b>" não vira código).
function esc(texto) {
  const trocas = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(texto).replace(/[&<>"']/g, caractere => trocas[caractere]);
}

// Período do dia de um horário "HH:MM": muda a cor do céu e o ícone.
function periodoDoDia(horario) {
  const hora = parseInt(horario, 10);
  if (hora >= 5 && hora < 12) return { id: "manha", astro: "🌤️", nome: "Manhã" };
  if (hora >= 12 && hora < 17) return { id: "tarde", astro: "☀️", nome: "Tarde" };
  if (hora >= 17 && hora < 19) return { id: "entardecer", astro: "🌇", nome: "Fim de tarde" };
  return { id: "noite", astro: "🌙", nome: "Noite" };
}

function formatarData(dataIso) {
  return new Date(dataIso).toLocaleString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit"
  });
}

// Mostra um número com sinal: +8, −11 ou 0.
function formatarDelta(valor) {
  if (valor > 0) return "+" + valor;
  if (valor < 0) return "−" + Math.abs(valor);
  return "0";
}

function situacaoAtual() {
  return estado.profissao.situacoes[estado.indice];
}

// Mostra só a tela pedida, esconde as outras e leva o foco para o título.
function mostrarTela(nome) {
  if (nome !== "jogo") {
    pararCronometro();
    cancelarConversa();
  }
  document.querySelectorAll(".tela").forEach(tela => {
    tela.hidden = tela.id !== "tela-" + nome;
  });
  document.body.dataset.tela = nome; // o CSS usa isso para esconder o botão de som flutuante no jogo
  window.scrollTo(0, 0);
  const titulo = document.querySelector("#tela-" + nome + " .titulo-tela");
  if (titulo) titulo.focus({ preventScroll: true });
}

// Rola a página só o necessário para o elemento aparecer inteiro
// (sem ficar escondido atrás do painel do jogador).
function rolarAte(elemento) {
  const painel = $(".hud");
  const topoLivre = $("#tela-jogo").hidden ? 16 : painel.getBoundingClientRect().bottom + 12;
  const caixa = elemento.getBoundingClientRect();
  if (caixa.bottom > window.innerHeight) {
    window.scrollBy({
      top: Math.min(caixa.top - topoLivre, caixa.bottom - window.innerHeight + 16),
      behavior: reduzirMovimento ? "auto" : "smooth"
    });
  }
}

// Anima barras e círculos: eles nascem vazios e crescem até o valor de "data-alvo".
function animarBarras(container) {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    container.querySelectorAll("[data-alvo]").forEach(elemento => {
      if (elemento.tagName.toLowerCase() === "circle") elemento.style.strokeDashoffset = elemento.dataset.alvo;
      else elemento.style.width = elemento.dataset.alvo + "%";
    });
  }));
}

/* ---------- Som ---------- */

function aplicarSom() {
  const ligado = estado.preferencias.som;
  definirSom(ligado);
  // Há dois botões de som: o flutuante e o do painel do jogo.
  document.querySelectorAll("#botao-som, .botao-som-painel").forEach(botao => {
    botao.textContent = ligado ? "🔊" : "🔇";
    botao.setAttribute("aria-pressed", String(ligado));
    botao.setAttribute("aria-label", ligado ? "Som ligado" : "Som desligado");
  });
}

function alternarSom() {
  estado.preferencias.som = !estado.preferencias.som;
  salvarPreferencias(estado.preferencias);
  aplicarSom();
  tocarSom("clique");
}

/* ---------- 1. Tela inicial ---------- */

function abrirInicio() {
  $("#inicio-icones").innerHTML = PROFISSOES.map(p => `<span>${esc(p.icone)}</span>`).join("");

  // Se existe um dia pela metade, oferece continuar.
  const progresso = lerProgresso();
  const botaoContinuar = $("#btn-continuar");
  botaoContinuar.hidden = !progresso;
  if (progresso) {
    botaoContinuar.textContent = `Continuar o dia de ${progresso.avatar} ${progresso.nome} em ${progresso.profissao.icone} ${progresso.profissao.nome}`;
  }

  $("#btn-comparar-inicio").hidden = lerResultados().length === 0;
  mostrarTela("inicio");
}

/* ---------- 2. Personagem e profissão ---------- */

function abrirCadastro() {
  $("#campo-nome").value = estado.nome;
  $("#opcao-cronometro").checked = estado.preferencias.cronometro;
  $("#erro-cadastro").hidden = true;

  $("#avatar-previa").textContent = estado.avatar;
  $("#lista-avatares").innerHTML = AVATARES.map(avatar => `
    <button type="button" class="avatar-opcao" data-acao="avatar" data-avatar="${avatar}"
            aria-pressed="${avatar === estado.avatar}" aria-label="Avatar ${avatar}">${avatar}</button>`).join("");

  $("#lista-profissoes").innerHTML = PROFISSOES.map(profissao => {
    // Os dois traços de maior peso aparecem no cartão como "Mais exige".
    const principais = TRACOS
      .slice()
      .sort((a, b) => profissao.perfil[b.id].peso - profissao.perfil[a.id].peso)
      .slice(0, 2)
      .map(traco => `${traco.icone} ${traco.nome}`)
      .join(" · ");
    const urgentes = profissao.situacoes.filter(s => s.urgente).length;

    return `
      <button type="button" class="card-profissao" data-acao="selecionar" data-id="${esc(profissao.id)}"
              aria-pressed="${estado.selecionada === profissao.id}" style="--cor-profissao: ${esc(profissao.cor)}">
        <span class="card-icone" aria-hidden="true">${esc(profissao.icone)}</span>
        <span class="card-nome">${esc(profissao.nome)}</span>
        <span class="card-resumo">${esc(profissao.resumo)}</span>
        <span class="card-info">Mais exige: ${esc(principais)}<br>${profissao.situacoes.length} situações${urgentes ? ` · 🚨 ${urgentes} urgência${urgentes > 1 ? "s" : ""}` : ""}</span>
      </button>`;
  }).join("");

  mostrarTela("cadastro");
}

function escolherAvatar(avatar) {
  estado.avatar = avatar;
  document.querySelectorAll(".avatar-opcao").forEach(botao => {
    botao.setAttribute("aria-pressed", String(botao.dataset.avatar === avatar));
  });
  const previa = $("#avatar-previa");
  previa.textContent = avatar;
  previa.classList.remove("pulo");
  void previa.offsetWidth; // reinicia a animação
  previa.classList.add("pulo");
}

function selecionarProfissao(id) {
  estado.selecionada = id;
  document.querySelectorAll(".card-profissao").forEach(cartao => {
    cartao.setAttribute("aria-pressed", String(cartao.dataset.id === id));
  });
  $("#erro-cadastro").hidden = true;
}

function mostrarErro(mensagem, campo) {
  const erro = $("#erro-cadastro");
  erro.textContent = mensagem;
  erro.hidden = false;
  if (campo) campo.focus();
}

function enviarCadastro(evento) {
  evento.preventDefault(); // impede o formulário de recarregar a página

  const campo = $("#campo-nome");
  const nome = campo.value.trim().replace(/\s+/g, " ");
  if (!nome) return mostrarErro("Digite seu nome para começar.", campo);

  const profissao = buscarProfissao(estado.selecionada);
  if (!profissao) return mostrarErro("Escolha uma profissão para viver o dia.");

  estado.nome = nome;
  salvarJogador({ nome: estado.nome, avatar: estado.avatar });
  iniciarDia(profissao);
}

/* ---------- 3. O dia de trabalho ---------- */

function guardarProgresso() {
  salvarProgresso({
    nome: estado.nome,
    avatar: estado.avatar,
    profissaoId: estado.profissao.id,
    indice: estado.indice,
    escolhas: estado.escolhas,
    urgencias: estado.urgencias
  });
}

function iniciarDia(profissao) {
  estado.profissao = profissao;
  estado.indice = 0;
  estado.escolhas = [];
  estado.urgencias = { total: 0, esgotadas: 0, menorFolga: null };
  guardarProgresso();
  prepararSituacao();
  mostrarTela("jogo");
  tocarSom("avancar");

  const primeiroHorario = profissao.situacoes[0].horario;
  mostrarPassagem({
    astro: periodoDoDia(primeiroHorario).astro,
    para: primeiroHorario,
    texto: `Começa o seu expediente em ${profissao.icone} ${profissao.nome}!`
  }, comecarSituacao);
}

function continuarDia() {
  const progresso = lerProgresso();
  if (!progresso) return abrirInicio();
  estado.nome = progresso.nome;
  estado.avatar = progresso.avatar;
  estado.profissao = progresso.profissao;
  estado.indice = progresso.indice;
  estado.escolhas = progresso.escolhas;
  estado.urgencias = progresso.urgencias;
  prepararSituacao();
  mostrarTela("jogo");
  comecarSituacao();
}

// Preenche a parte fixa da tela: painel, céu, cena, progresso e narração.
function prepararSituacao() {
  const profissao = estado.profissao;
  const situacao = situacaoAtual();
  const periodo = periodoDoDia(situacao.horario);

  $("#tela-jogo").style.setProperty("--cor-profissao", profissao.cor);

  // Painel do jogador
  $("#hud-avatar").textContent = estado.avatar;
  $("#hud-nome").textContent = estado.nome;
  $("#hud-profissao").textContent = `${profissao.icone} ${profissao.nome}`;
  atualizarPainel(medidoresDoDia(profissao, estado.escolhas.slice(0, estado.indice)), null);

  // Céu, relógio, título e cena
  $("#ceu").dataset.periodo = periodo.id;
  $("#astro").textContent = periodo.astro;
  $("#relogio").textContent = situacao.horario;
  $("#situacao-titulo").textContent = situacao.titulo;
  $("#cena").innerHTML = (situacao.cena || profissao.icone)
    .split(/\s+/)
    .filter(Boolean)
    .map(emoji => `<span>${esc(emoji)}</span>`)
    .join("");

  // Barra de progresso: uma parte para cada etapa (as dos desafios ficam amarelas).
  $("#etapa").textContent = `Etapa ${estado.indice + 1} de ${profissao.situacoes.length}`;
  $("#periodo").textContent = periodo.nome;
  $("#progresso").innerHTML = profissao.situacoes.map((etapa, i) => {
    const classes = [i < estado.indice ? "feita" : i === estado.indice ? "atual" : "", ehDesafio(etapa) ? "desafio" : ""];
    return `<span class="${classes.join(" ").trim()}"></span>`;
  }).join("");

  // Cartão da situação, ainda sem conversa, sem opções e sem desafio.
  const desafio = ehDesafio(situacao);
  const cartao = $("#cartao-situacao");
  cartao.classList.toggle("urgente", Boolean(situacao.urgente));
  cartao.classList.toggle("desafio", desafio);

  const etiqueta = $("#etiqueta-situacao");
  etiqueta.hidden = !situacao.urgente && !desafio;
  etiqueta.className = "etiqueta-situacao " + (desafio ? "desafio" : "urgente");
  etiqueta.textContent = desafio ? "⚡ Desafio da profissão" : "🚨 Urgente!";

  $("#situacao-descricao").textContent = situacao.descricao || "";
  $("#situacao-descricao").hidden = !situacao.descricao;
  $("#conversa").innerHTML = "";
  $("#area-decisao").hidden = true;
  $("#area-desafio").hidden = true;
  $("#cronometro").hidden = true;
  $("#feedback").hidden = true;
  estado.desafio = null;

  cartao.classList.remove("animar");
  void cartao.offsetWidth; // reinicia a animação de entrada
  cartao.classList.add("animar");
}

// Começa a parte animada: a conversa e, depois dela, as opções (ou o desafio).
function comecarSituacao() {
  const situacao = situacaoAtual();
  const escolhaFeita = estado.escolhas[estado.indice];

  // Etapa já respondida (ao continuar um dia salvo): mostra tudo pronto.
  if (escolhaFeita !== undefined) {
    mostrarConversaInteira(situacao);
    if (ehDesafio(situacao)) mostrarDesafioRespondido(escolhaFeita);
    else mostrarResposta(escolhaFeita, false);
    return;
  }
  animarConversa(situacao, ehDesafio(situacao) ? mostrarDesafio : mostrarDecisao);
}

/* ----- Conversa em formato de chat ----- */

function htmlDoBalao(mensagem) {
  return `
    <div class="balao">
      <span class="balao-avatar" aria-hidden="true">${esc(mensagem.avatar || "💬")}</span>
      <div class="balao-corpo">
        <span class="balao-nome">${esc(mensagem.quem || "")}</span>
        <p>${esc(mensagem.fala)}</p>
      </div>
    </div>`;
}

function htmlDigitando(mensagem) {
  return `
    <div class="balao digitando" aria-hidden="true">
      <span class="balao-avatar">${esc(mensagem.avatar || "💬")}</span>
      <div class="balao-corpo"><i></i><i></i><i></i></div>
    </div>`;
}

function cancelarConversa() {
  andamento.conversa += 1;
  clearTimeout(andamento.esperaConversa);
  andamento.pularConversa = null;
  $("#btn-pular").hidden = true;
}

function mostrarConversaInteira(situacao) {
  cancelarConversa();
  $("#conversa").innerHTML = (situacao.conversa || []).map(htmlDoBalao).join("");
}

// Mostra as mensagens uma por uma, com "digitando..." antes de cada uma.
// Quando acaba (ou quando a pessoa clica em "Pular"), chama aoTerminar().
function animarConversa(situacao, aoTerminar) {
  cancelarConversa();
  const id = andamento.conversa;
  const mensagens = situacao.conversa || [];
  const caixa = $("#conversa");
  let mostradas = 0;
  caixa.innerHTML = "";

  const terminar = () => {
    if (id !== andamento.conversa) return;
    if (mostradas < mensagens.length) caixa.innerHTML = mensagens.map(htmlDoBalao).join("");
    cancelarConversa();
    aoTerminar();
  };

  if (reduzirMovimento || !mensagens.length) return terminar();
  andamento.pularConversa = terminar;
  $("#btn-pular").hidden = false;

  const mostrarProxima = () => {
    if (id !== andamento.conversa) return;
    if (mostradas === mensagens.length) return terminar();

    const mensagem = mensagens[mostradas];
    caixa.insertAdjacentHTML("beforeend", htmlDigitando(mensagem));
    // Mensagens mais longas demoram um pouco mais para "serem digitadas".
    const tempoDigitando = Math.min(1600, 500 + mensagem.fala.length * 14);

    andamento.esperaConversa = setTimeout(() => {
      if (id !== andamento.conversa) return;
      caixa.lastElementChild.outerHTML = htmlDoBalao(mensagem);
      mostradas += 1;
      tocarSom("mensagem");
      andamento.esperaConversa = setTimeout(mostrarProxima, 400);
    }, tempoDigitando);
  };
  mostrarProxima();
}

/* ----- Decisão e cronômetro ----- */

// Ordem em que as opções aparecem na tela. Ela "gira" um pouco a cada etapa,
// para a melhor opção não ficar sempre na mesma letra. É uma regra fixa (não
// sorteada), então ao continuar um dia salvo as opções aparecem no mesmo lugar.
// Devolve os índices originais das opções, na ordem da tela.
function ordemDasOpcoes() {
  const quantidade = situacaoAtual().opcoes.length;
  const giro = (estado.indice * 3 + estado.profissao.id.length) % quantidade;
  return Array.from({ length: quantidade }, (_, posicao) => (posicao + giro) % quantidade);
}

function mostrarDecisao() {
  const situacao = situacaoAtual();
  const area = $("#area-decisao");

  $("#opcoes").innerHTML = ordemDasOpcoes().map((original, posicao) => `
    <button type="button" class="opcao" data-acao="escolher" data-indice="${original}" style="--ordem: ${posicao}">
      <span class="opcao-letra" aria-hidden="true">${LETRAS[posicao]}</span>
      <span>${esc(situacao.opcoes[original].texto)}</span>
    </button>`).join("");
  area.hidden = false;

  if (situacao.urgente && estado.preferencias.cronometro) iniciarCronometro(situacao.tempo || TEMPO_PADRAO, tempoEsgotou);
  else $("#cronometro").hidden = true;

  rolarAte(area);
}

// Mostra o cronômetro e chama aoAcabar() quando o tempo chega a zero.
function iniciarCronometro(segundos, aoAcabar) {
  pararCronometro();
  const caixa = $("#cronometro");
  const total = segundos * 1000;
  let restante = total;
  let ultimoInstante = performance.now();
  let ultimoSegundo = segundos;

  const desenhar = () => {
    caixa.querySelector(".cronometro-barra span").style.width = Math.max(0, (restante / total) * 100) + "%";
    $("#cronometro-texto").textContent = Math.max(0, Math.ceil(restante / 1000)) + "s";
    caixa.classList.toggle("acabando", restante <= 5000);
  };

  caixa.hidden = false;
  caixa.setAttribute("aria-label", `Você tem ${segundos} segundos`);
  desenhar();

  andamento.cronometro = {
    restante: () => Math.max(0, restante / 1000),
    intervalo: setInterval(() => {
      const agora = performance.now();
      if (!document.hidden) restante -= agora - ultimoInstante; // pausa se a aba ficar escondida
      ultimoInstante = agora;

      const segundo = Math.ceil(restante / 1000);
      if (segundo !== ultimoSegundo && segundo > 0 && segundo <= 5) tocarSom("tique");
      ultimoSegundo = segundo;
      desenhar();

      if (restante <= 0) {
        pararCronometro();
        aoAcabar();
      }
    }, 100)
  };
}

// Para o cronômetro e devolve quantos segundos sobraram (ou null se não havia cronômetro).
function pararCronometro() {
  if (!andamento.cronometro) return null;
  clearInterval(andamento.cronometro.intervalo);
  const folga = andamento.cronometro.restante();
  andamento.cronometro = null;
  $("#cronometro").classList.remove("acabando");
  $("#cronometro").hidden = true;
  return folga;
}

function escolher(indiceOpcao) {
  if (estado.escolhas[estado.indice] !== undefined || $("#area-decisao").hidden) return;

  const folga = pararCronometro();
  if (folga !== null) {
    estado.urgencias.total += 1;
    estado.urgencias.menorFolga = estado.urgencias.menorFolga === null ? folga : Math.min(estado.urgencias.menorFolga, folga);
  }
  tocarSom("escolha");
  registrarEscolha(indiceOpcao);
}

function tempoEsgotou() {
  if (estado.escolhas[estado.indice] !== undefined) return;
  estado.urgencias.total += 1;
  estado.urgencias.esgotadas += 1;
  tocarSom("alarme");
  registrarEscolha(TEMPO_ESGOTADO);
}

function registrarEscolha(escolha) {
  estado.escolhas[estado.indice] = escolha;
  guardarProgresso();
  mostrarResposta(escolha, true);
}

/* ----- Resultado da escolha ----- */

// Etiqueta de efeito, como "⚡ Energia −11". No estresse, subir é ruim.
function htmlDoEfeito(rotulo, valor, subirEhRuim) {
  const classe = valor === 0 ? "neutro" : (valor > 0) === subirEhRuim ? "ruim" : "bom";
  return `<span class="efeito ${classe}">${rotulo} ${formatarDelta(valor)}</span>`;
}

// Quem responde à escolha no chat: o personagem indicado na opção ou,
// se a reação for só um texto, o primeiro personagem da conversa.
function mensagemDeReacao(situacao, opcao) {
  if (!opcao.reacao) return null;
  if (typeof opcao.reacao === "object") return opcao.reacao;
  const primeiro = (situacao.conversa || [])[0] || { quem: "", avatar: "💬" };
  return { quem: primeiro.quem, avatar: primeiro.avatar, fala: opcao.reacao };
}

// Mostra a escolha na conversa, a resposta do personagem, "O que aconteceu"
// e atualiza energia e estresse.
// "animar" = false quando a tela é reaberta ao continuar um dia salvo.
function mostrarResposta(escolha, animar) {
  const situacao = situacaoAtual();
  const opcao = opcaoEscolhida(situacao, escolha);
  const reacao = mensagemDeReacao(situacao, opcao);
  const caixa = $("#conversa");

  pararCronometro();
  $("#area-decisao").hidden = true;

  // A escolha entra na conversa como uma mensagem sua.
  caixa.insertAdjacentHTML("beforeend", escolha === TEMPO_ESGOTADO
    ? `<div class="balao balao-sistema"><p>${esc(opcao.texto)}</p></div>`
    : `<div class="balao balao-jogador">
         <span class="balao-avatar" aria-hidden="true">${esc(estado.avatar)}</span>
         <div class="balao-corpo"><span class="balao-nome">Você</span><p>${esc(opcao.texto)}</p></div>
       </div>`);

  // O personagem "digita" e responde; só depois aparece o resultado.
  if (reacao && animar && !reduzirMovimento) {
    cancelarConversa();
    const id = andamento.conversa;
    caixa.insertAdjacentHTML("beforeend", htmlDigitando(reacao));
    rolarAte(caixa.lastElementChild);
    andamento.esperaConversa = setTimeout(() => {
      if (id !== andamento.conversa) return;
      caixa.lastElementChild.outerHTML = htmlDoBalao(reacao);
      tocarSom("mensagem");
      mostrarResultadoDaEscolha(escolha, true);
    }, Math.min(1500, 600 + reacao.fala.length * 10));
    return;
  }
  if (reacao) caixa.insertAdjacentHTML("beforeend", htmlDoBalao(reacao));
  mostrarResultadoDaEscolha(escolha, animar);
}

// Preenche o cartão "O que aconteceu" de uma situação de decisão.
function mostrarResultadoDaEscolha(escolha, animar) {
  const profissao = estado.profissao;
  const situacao = situacaoAtual();
  const opcao = opcaoEscolhida(situacao, escolha);
  const efeito = efeitosDaEscolha(profissao, situacao, escolha);

  $("#feedback-titulo").textContent = "O que aconteceu";
  $("#pergunta-gosto").hidden = true;
  $("#feedback-resultado").textContent = opcao.resultado;
  $("#feedback-efeitos").innerHTML =
    htmlDoEfeito("⚡ Energia", efeito.energia, false) + htmlDoEfeito("😰 Estresse", efeito.estresse, true);

  const tracosDaEscolha = TRACOS.filter(traco => pontosDoTraco(opcao, traco.id) > 0);
  $("#feedback-chips").innerHTML = tracosDaEscolha.length
    ? `<span class="chips-rotulo">Nessa escolha você mostrou:</span>` +
      tracosDaEscolha.map((traco, i) => `<span class="chip" style="animation-delay: ${i * 120}ms">${esc(traco.icone)} ${esc(traco.nome)}</span>`).join("")
    : `<span class="chips-rotulo">Essa parte da rotina parece ser um desafio para você — e tudo bem: descobrir isso é justamente o objetivo do jogo.</span>`;
  $("#feedback-real").textContent = situacao.naVidaReal;

  const botaoProxima = $("#btn-proxima");
  botaoProxima.textContent = textoDoBotaoProxima();
  botaoProxima.hidden = false;
  $("#feedback").hidden = false;

  const medidores = medidoresDoDia(profissao, estado.escolhas.slice(0, estado.indice + 1));
  atualizarPainel(medidores, animar ? efeito : null);

  if (animar) {
    rolarAte($("#feedback"));
    botaoProxima.focus({ preventScroll: true });
  }
}

function textoDoBotaoProxima() {
  const ultima = estado.indice === estado.profissao.situacoes.length - 1;
  return ultima ? "Encerrar o expediente 🏁" : "Continuar →";
}

/* ----- Desafios (mini problemas da profissão) ----- */

// Embaralha uma lista sem deixar ela na ordem original.
function embaralhar(lista) {
  const copia = lista.slice();
  do {
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
  } while (copia.length > 1 && copia.every((item, i) => item === lista[i]));
  return copia;
}

// Gráfico de barras horizontais (usado no formato "escolha", se houver "grafico").
function htmlDoGrafico(grafico, unidade) {
  const maior = Math.max(...grafico.map(item => item.valor));
  const sufixo = unidade ? " " + unidade : "";
  return `
    <div class="grafico" role="img" aria-label="${esc(grafico.map(item => item.rotulo + ": " + item.valor + sufixo).join(", "))}">
      ${grafico.map(item => `
        <div class="grafico-linha">
          <span>${esc(item.rotulo)}</span>
          <div class="barra"><span data-alvo="${Math.round((item.valor / maior) * 100)}"></span></div>
          <strong>${esc(item.valor + sufixo)}</strong>
        </div>`).join("")}
    </div>`;
}

// Monta o HTML do desafio conforme o formato.
function htmlDoDesafio(situacao) {
  if (situacao.formato === "escolha") {
    return `
      ${situacao.grafico ? htmlDoGrafico(situacao.grafico, situacao.unidade) : ""}
      <div class="opcoes">
        ${situacao.alternativas.map((alternativa, i) => `
          <button type="button" class="opcao opcao-desafio" data-acao="responder-desafio" data-indice="${i}" style="--ordem: ${i}">
            <span class="opcao-letra" aria-hidden="true">${LETRAS[i]}</span>
            <span>${esc(alternativa)}</span>
          </button>`).join("")}
      </div>`;
  }

  if (situacao.formato === "encontre-o-erro") {
    return `
      <ol class="linhas-desafio${situacao.codigo ? " codigo" : ""}">
        ${situacao.linhas.map((linha, i) => `
          <li>
            <button type="button" class="linha-desafio opcao-desafio" data-acao="responder-desafio" data-indice="${i}">
              <span class="linha-numero" aria-hidden="true">${i + 1}</span>
              <span class="linha-texto">${esc(linha)}</span>
            </button>
          </li>`).join("")}
      </ol>`;
  }

  // Formato "ordenar": os itens aparecem embaralhados e a pessoa toca na ordem certa.
  return `
    <ol class="ordem-montada" id="ordem-montada"></ol>
    <div class="itens-ordenar">
      ${embaralhar(situacao.itens.map((_, i) => i)).map(i => `
        <button type="button" class="opcao item-ordenar" data-acao="ordenar-item" data-indice="${i}">${esc(situacao.itens[i])}</button>`).join("")}
    </div>
    <button type="button" class="btn btn-texto btn-desfazer" id="btn-desfazer" data-acao="ordenar-desfazer" hidden>↩ Desfazer</button>`;
}

function mostrarDesafio() {
  const situacao = situacaoAtual();
  estado.desafio = { acertou: null, ordem: [] };

  $("#desafio-pergunta").textContent = situacao.pergunta;
  $("#desafio-conteudo").innerHTML = htmlDoDesafio(situacao);
  $("#area-desafio").hidden = false;
  animarBarras($("#desafio-conteudo"));

  if (situacao.tempo && estado.preferencias.cronometro) iniciarCronometro(situacao.tempo, () => responderDesafio(false));
  else $("#cronometro").hidden = true;

  rolarAte($("#area-desafio"));
}

// Formatos "escolha" e "encontre-o-erro": a pessoa tocou em um item.
function responderPorIndice(indice) {
  const situacao = situacaoAtual();
  const itens = situacao.formato === "escolha" ? situacao.alternativas : situacao.linhas;
  if (indice < 0 || indice >= itens.length) return;
  responderDesafio(indice === situacao.correta, indice);
}

// Formato "ordenar": a pessoa tocou no próximo passo.
function escolherItemDaOrdem(indice) {
  const desafio = estado.desafio;
  if (!desafio || desafio.acertou !== null || desafio.ordem.includes(indice)) return;
  desafio.ordem.push(indice);
  tocarSom("clique");
  atualizarOrdem();

  const itens = situacaoAtual().itens;
  if (desafio.ordem.length === itens.length) {
    responderDesafio(desafio.ordem.every((item, posicao) => item === posicao));
  }
}

function desfazerOrdem() {
  if (!estado.desafio || estado.desafio.acertou !== null) return;
  estado.desafio.ordem.pop();
  atualizarOrdem();
}

// Mostra os passos já escolhidos e apaga os botões usados.
function atualizarOrdem() {
  const itens = situacaoAtual().itens;
  const ordem = estado.desafio.ordem;
  $("#ordem-montada").innerHTML = ordem.map(i => `<li>${esc(itens[i])}</li>`).join("");
  document.querySelectorAll(".item-ordenar").forEach(botao => {
    botao.disabled = ordem.includes(Number(botao.dataset.indice));
  });
  $("#btn-desfazer").hidden = ordem.length === 0;
}

// Pinta a resposta certa de verde (e a escolhida, se errada, de vermelho).
function marcarRespostaDoDesafio(indiceEscolhido) {
  const situacao = situacaoAtual();

  if (situacao.formato === "ordenar") {
    const ordem = estado.desafio.ordem;
    $("#ordem-montada").innerHTML = situacao.itens.map((item, posicao) => {
      const classe = ordem.length === 0 ? "" : ordem[posicao] === posicao ? "certa" : "corrigida";
      return `<li class="${classe}">${esc(item)}</li>`;
    }).join("");
    document.querySelector(".itens-ordenar").hidden = true;
    $("#btn-desfazer").hidden = true;
    return;
  }

  document.querySelectorAll("#desafio-conteudo .opcao-desafio").forEach((botao, i) => {
    botao.disabled = true;
    botao.classList.toggle("certa", i === situacao.correta);
    botao.classList.toggle("errada", i === indiceEscolhido && i !== situacao.correta);
  });
}

function respostaCertaEmTexto(situacao) {
  if (situacao.formato === "escolha") return situacao.alternativas[situacao.correta];
  if (situacao.formato === "encontre-o-erro") return `a linha ${situacao.correta + 1}`;
  return "a ordem mostrada acima";
}

function responderDesafio(acertou, indiceEscolhido) {
  if (!estado.desafio || estado.desafio.acertou !== null) return;
  pararCronometro();
  estado.desafio.acertou = acertou;
  tocarSom(acertou ? "acerto" : "erro");
  marcarRespostaDoDesafio(indiceEscolhido);
  mostrarRetornoDoDesafio(acertou, true);
}

// Cartão de resultado do desafio, com a pergunta "Você curtiria fazer isso todo dia?".
function mostrarRetornoDoDesafio(acertou, animar) {
  const profissao = estado.profissao;
  const situacao = situacaoAtual();
  const efeito = efeitosDaEscolha(profissao, situacao, { acertou, gosto: 0 });
  const traco = TRACOS.find(t => t.id === situacao.traco);

  $("#feedback-titulo").textContent = acertou ? "✅ Acertou!" : "❌ Não foi dessa vez";
  $("#feedback-resultado").textContent = acertou
    ? "Mandou bem! Veja por que essa é a resposta:"
    : `A resposta certa era ${respostaCertaEmTexto(situacao)}. Tudo bem errar: você ainda vai aprender isso no curso.`;
  $("#feedback-efeitos").innerHTML =
    htmlDoEfeito("⚡ Energia", efeito.energia, false) + htmlDoEfeito("😰 Estresse", efeito.estresse, true);
  $("#feedback-chips").innerHTML = traco
    ? `<span class="chips-rotulo">Esse desafio exercita:</span><span class="chip">${esc(traco.icone)} ${esc(traco.nome)}</span>`
    : "";
  $("#feedback-real").textContent = situacao.explicacao;

  $("#botoes-gosto").innerHTML = GOSTOS.map(gosto => `
    <button type="button" class="botao-gosto" data-acao="avaliar-desafio" data-gosto="${gosto.valor}" aria-pressed="false">
      <span aria-hidden="true">${gosto.emoji}</span>${gosto.texto}
    </button>`).join("");
  $("#pergunta-gosto").hidden = false;
  $("#btn-proxima").hidden = true;
  $("#feedback").hidden = false;

  const escolhasComEsta = estado.escolhas.slice(0, estado.indice).concat({ acertou, gosto: 0 });
  atualizarPainel(medidoresDoDia(profissao, escolhasComEsta), animar ? efeito : null);

  if (animar) {
    rolarAte($("#feedback"));
    document.querySelector(".botao-gosto").focus({ preventScroll: true });
  }
}

// A pessoa respondeu se curtiu o desafio: agora a etapa está completa.
function avaliarDesafio(gosto) {
  const desafio = estado.desafio;
  if (!desafio || desafio.acertou === null || estado.escolhas[estado.indice] !== undefined) return;

  estado.escolhas[estado.indice] = { acertou: desafio.acertou, gosto };
  guardarProgresso();
  tocarSom("escolha");
  marcarGosto(gosto);

  const botaoProxima = $("#btn-proxima");
  botaoProxima.textContent = textoDoBotaoProxima();
  botaoProxima.hidden = false;
  rolarAte($("#feedback"));
  botaoProxima.focus({ preventScroll: true });
}

function marcarGosto(gosto) {
  document.querySelectorAll(".botao-gosto").forEach(botao => {
    const escolhido = Number(botao.dataset.gosto) === gosto;
    botao.disabled = true;
    botao.classList.toggle("escolhido", escolhido);
    botao.setAttribute("aria-pressed", String(escolhido));
  });
}

// Ao continuar um dia salvo: mostra o desafio já resolvido.
function mostrarDesafioRespondido(escolha) {
  const situacao = situacaoAtual();
  estado.desafio = { acertou: escolha.acertou, ordem: [] };
  $("#desafio-pergunta").textContent = situacao.pergunta;
  $("#desafio-conteudo").innerHTML = htmlDoDesafio(situacao);
  $("#area-desafio").hidden = false;
  animarBarras($("#desafio-conteudo"));
  marcarRespostaDoDesafio();
  mostrarRetornoDoDesafio(escolha.acertou, false);
  marcarGosto(escolha.gosto);
  $("#btn-proxima").textContent = textoDoBotaoProxima();
  $("#btn-proxima").hidden = false;
}

/* ----- Painel de energia e estresse ----- */

function atualizarPainel(medidores, efeito) {
  atualizarMedidor($("#medidor-energia"), medidores.energia, efeito ? efeito.energia : 0, medidores.energia < 30, false);
  atualizarMedidor($("#medidor-estresse"), medidores.estresse, efeito ? efeito.estresse : 0, medidores.estresse > 60, true);
}

function atualizarMedidor(medidor, valor, delta, critico, subirEhRuim) {
  medidor.querySelector(".medidor-hud-barra span").style.width = valor + "%";
  medidor.querySelector("strong").textContent = valor;
  medidor.classList.toggle("critico", critico);

  // Número que "salta" do medidor mostrando quanto mudou.
  if (delta) {
    const etiqueta = document.createElement("span");
    etiqueta.className = "delta " + ((delta > 0) === subirEhRuim ? "ruim" : "bom");
    etiqueta.textContent = formatarDelta(delta);
    medidor.appendChild(etiqueta);
    setTimeout(() => etiqueta.remove(), 1500);
  }
}

/* ----- Passagem de tempo e fim do dia ----- */

function proximaSituacao() {
  if (estado.escolhas[estado.indice] === undefined) return;
  const situacoes = estado.profissao.situacoes;
  if (estado.indice === situacoes.length - 1) return finalizarDia();

  const horarioAnterior = situacoes[estado.indice].horario;
  estado.indice += 1;
  guardarProgresso();
  tocarSom("avancar");
  prepararSituacao();
  window.scrollTo(0, 0);

  const horario = situacaoAtual().horario;
  mostrarPassagem({
    astro: periodoDoDia(horario).astro,
    de: horarioAnterior,
    para: horario,
    texto: ehDesafio(situacaoAtual())
      ? "⚡ Hora de um desafio da profissão!"
      : FRASES_DE_PASSAGEM[estado.indice % FRASES_DE_PASSAGEM.length]
  }, () => {
    $("#situacao-titulo").focus({ preventScroll: true });
    comecarSituacao();
  });
}

// Tela cheia com o relógio "correndo" de um horário para o outro.
// config = { astro, de, para, titulo, texto, duracao }
function mostrarPassagem(config, depois) {
  if (reduzirMovimento) return depois();

  const tela = $("#passagem");
  const relogio = $("#passagem-relogio");
  $("#passagem-astro").textContent = config.astro;
  $("#passagem-texto").textContent = config.texto;
  tela.classList.remove("saindo");
  tela.hidden = false;

  // Converte "HH:MM" em minutos e de volta, para animar o relógio.
  const emMinutos = horario => {
    const [horas, minutos] = horario.split(":").map(Number);
    return horas * 60 + minutos;
  };
  const emHorario = total => String(Math.floor(total / 60)).padStart(2, "0") + ":" + String(total % 60).padStart(2, "0");

  let quadro = null;
  if (config.titulo) {
    relogio.textContent = config.titulo;
  } else if (!config.de) {
    relogio.textContent = config.para;
  } else {
    const de = emMinutos(config.de);
    const para = emMinutos(config.para);
    const inicio = performance.now();
    const animarRelogio = agora => {
      const progresso = Math.min(1, (agora - inicio) / 900);
      const suave = 1 - Math.pow(1 - progresso, 3); // começa rápido e desacelera
      relogio.textContent = emHorario(Math.round(de + (para - de) * suave));
      if (progresso < 1) quadro = requestAnimationFrame(animarRelogio);
    };
    animarRelogio(inicio);
  }

  let encerrada = false;
  let espera = null;
  const encerrar = () => {
    if (encerrada) return;
    encerrada = true;
    cancelAnimationFrame(quadro);
    clearTimeout(espera);
    andamento.passagem = null;
    tela.classList.add("saindo");
    setTimeout(() => {
      tela.hidden = true;
      tela.classList.remove("saindo");
    }, 280);
    depois();
  };
  espera = setTimeout(encerrar, config.duracao || 1500);
  andamento.passagem = encerrar;
}

function finalizarDia() {
  const profissao = estado.profissao;
  const calculo = calcularAfinidade(profissao, estado.escolhas);
  const medidores = medidoresDoDia(profissao, estado.escolhas);
  const resultado = {
    id: Date.now().toString(36),
    nome: estado.nome,
    avatar: estado.avatar,
    profissaoId: profissao.id,
    data: new Date().toISOString(),
    escolhas: estado.escolhas.slice(),
    afinidade: calculo.afinidade
  };
  adicionarResultado(resultado);
  apagarProgresso();

  const conquistasNovas = verificarConquistas({
    nome: estado.nome,
    profissao,
    calculo,
    medidores,
    partidas: lerResultados().filter(r => r.nome === estado.nome),
    urgencias: estado.urgencias,
    cronometroLigado: estado.preferencias.cronometro
  });

  tocarSom("fimDoDia");
  mostrarPassagem({
    astro: "🏁",
    titulo: "Fim!",
    texto: "Você chegou ao fim do expediente. Vamos ver o seu relatório?",
    duracao: 1900
  }, () => {
    abrirRelatorio(resultado, conquistasNovas);
    if (calculo.afinidade >= 75) setTimeout(() => soltarConfete(160), 400);
    anunciarConquistas(conquistasNovas);
  });
}

// Mostra um aviso animado para cada conquista nova, um depois do outro.
function anunciarConquistas(conquistas) {
  conquistas.forEach((conquista, i) => {
    setTimeout(() => {
      const aviso = document.createElement("div");
      aviso.className = "aviso-conquista";
      aviso.innerHTML = `
        <span class="aviso-conquista-icone" aria-hidden="true">${esc(conquista.icone)}</span>
        <div><small>Conquista desbloqueada!</small><strong>${esc(conquista.nome)}</strong></div>`;
      $("#avisos").appendChild(aviso);
      tocarSom("conquista");
      setTimeout(() => aviso.classList.add("saindo"), 3200);
      setTimeout(() => aviso.remove(), 3650);
    }, 1300 + i * 1600);
  });
}

/* ---------- 4. Relatório ---------- */

// Texto do gosto pelo desafio, por exemplo "😍 Curti muito".
function htmlDoGosto(valor) {
  const gosto = GOSTOS.find(g => g.valor === valor);
  return gosto ? `${gosto.emoji} ${gosto.texto}` : "";
}

// Gráfico radar (pentágono) com o perfil do jogador e o da profissão.
function htmlDoRadar(tracos) {
  const centro = 150;
  const raio = 100;
  const ponto = (i, valor) => {
    const angulo = ((-90 + i * (360 / tracos.length)) * Math.PI) / 180;
    const distancia = (raio * valor) / 100;
    return [centro + distancia * Math.cos(angulo), centro + distancia * Math.sin(angulo)];
  };
  const poligono = valores => valores.map((valor, i) => ponto(i, valor).map(n => n.toFixed(1)).join(",")).join(" ");

  const grades = [25, 50, 75, 100]
    .map(nivel => `<polygon class="radar-grade" points="${poligono(tracos.map(() => nivel))}"></polygon>`)
    .join("");
  const eixos = tracos.map((_, i) => {
    const [x, y] = ponto(i, 100);
    return `<line class="radar-eixo" x1="${centro}" y1="${centro}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"></line>`;
  }).join("");
  // Rótulos em duas linhas (ícone em cima, nome embaixo), um pouco fora do pentágono.
  const rotulos = tracos.map((traco, i) => {
    const [x, y] = ponto(i, 130).map(n => n.toFixed(1));
    return `
      <text class="radar-rotulo" x="${x}" y="${y}" text-anchor="middle">
        <tspan class="radar-icone" x="${x}" dy="-0.3em">${esc(traco.icone)}</tspan>
        <tspan x="${x}" dy="1.25em">${esc(traco.curto)}</tspan>
      </text>`;
  }).join("");
  const descricao = tracos.map(t => `${t.curto}: você ${t.jogador === null ? 0 : t.jogador}%, profissão ${t.ideal}%`).join("; ");

  return `
    <svg class="radar" viewBox="-35 -10 370 295" role="img" aria-label="Gráfico radar do perfil. ${esc(descricao)}">
      ${grades}${eixos}
      <polygon class="radar-ideal" points="${poligono(tracos.map(t => t.ideal))}"></polygon>
      <polygon class="radar-jogador" points="${poligono(tracos.map(t => t.jogador || 0))}"></polygon>
      ${rotulos}
    </svg>`;
}

// conquistasNovas só existe quando o relatório abre logo depois de terminar o dia.
function abrirRelatorio(resultado, conquistasNovas) {
  const profissao = buscarProfissao(resultado.profissaoId);
  const calculo = calcularAfinidade(profissao, resultado.escolhas);
  const nivel = nivelDaAfinidade(calculo.afinidade);
  const classe = classeDoPerfil(calculo.tracos);
  const medidores = medidoresDoDia(profissao, resultado.escolhas);
  const { gostar, dificil } = separarGostarDificil(calculo.tracos);

  // Se nenhum traço ficou muito abaixo do ideal, ainda assim mostramos
  // o lado difícil do traço mais importante da profissão, como alerta.
  const tracoMaisImportante = calculo.tracos.slice().sort((a, b) => b.peso - a.peso)[0];

  const listaDeTracos = (tracos, campo) => `
    <ul class="lista">
      ${tracos.map(traco => `<li><strong>${esc(traco.icone)} ${esc(traco.nome)}:</strong> ${esc(traco[campo])}</li>`).join("")}
    </ul>`;

  $("#tela-relatorio").style.setProperty("--cor-profissao", profissao.cor);
  $("#relatorio-conteudo").innerHTML = `
    <section class="cartao relatorio-capa">
      <div class="avatar-grande" aria-hidden="true">${esc(resultado.avatar)}</div>
      <p class="selo">Relatório de afinidade</p>
      <h2 class="titulo-tela" tabindex="-1">O dia de ${esc(resultado.nome)}</h2>
      <p class="relatorio-meta">${esc(profissao.icone)} ${esc(profissao.nome)} · ${esc(formatarData(resultado.data))}</p>
      <div class="medidor nivel-${nivel.id}" role="img" aria-label="${calculo.afinidade}% de afinidade">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle class="medidor-trilho" cx="60" cy="60" r="52"></circle>
          <circle class="medidor-valor" cx="60" cy="60" r="52"
                  style="stroke-dasharray: ${CIRCUNFERENCIA}; stroke-dashoffset: ${CIRCUNFERENCIA}"
                  data-alvo="${CIRCUNFERENCIA * (1 - calculo.afinidade / 100)}"></circle>
        </svg>
        <div class="medidor-texto" aria-hidden="true"><strong>${calculo.afinidade}%</strong><span>de afinidade</span></div>
      </div>
      <p class="nivel-titulo nivel-${nivel.id}">${nivel.titulo}</p>
      <p class="nivel-mensagem">${nivel.mensagem}</p>
    </section>

    <section class="cartao">
      <h3>🎮 Sua ficha de personagem</h3>
      <div class="ficha">
        <div>
          ${htmlDoRadar(calculo.tracos)}
          <p class="legenda">
            <span class="legenda-jogador">Você</span>
            <span class="legenda-ideal">O que a profissão exige</span>
          </p>
        </div>
        <div class="classe">
          <small>Sua classe</small>
          <span class="classe-icone" aria-hidden="true">${esc(classe.icone)}</span>
          <strong>${esc(classe.nome)}</strong>
          <p>${esc(classe.lema)}</p>
          ${classe.secundario
            ? `<p class="classe-secundario">Ponto forte secundário: ${esc(classe.secundario.icone)} ${esc(classe.secundario.nome)}</p>`
            : ""}
        </div>
      </div>
      <h4>Seus números</h4>
      <ul class="valores-tracos">
        ${calculo.tracos.map(traco => `
          <li>
            <span>${esc(traco.icone)} ${esc(traco.nome)}</span>
            <span><b>você ${traco.jogador === null ? "–" : traco.jogador}%</b> <em>· profissão ${traco.ideal}%</em></span>
          </li>`).join("")}
      </ul>
    </section>

    <section class="cartao">
      <h3>🌙 Como você terminou o dia</h3>
      <div class="fim-do-dia">
        <div class="fim-do-dia-item">
          <span>⚡ Energia</span>
          <strong>${medidores.energia}%</strong>
          <div class="barra barra-energia"><span data-alvo="${medidores.energia}"></span></div>
        </div>
        <div class="fim-do-dia-item">
          <span>😰 Estresse</span>
          <strong>${medidores.estresse}%</strong>
          <div class="barra barra-estresse"><span data-alvo="${medidores.estresse}"></span></div>
        </div>
      </div>
      <p class="nota nota-final">${esc(resumoDoDia(medidores))}</p>
    </section>

    <div class="grade-2">
      <section class="cartao cartao-gostar">
        <h3>😊 Você provavelmente vai gostar</h3>
        ${gostar.length
          ? listaDeTracos(gostar, "gostar")
          : `<p class="nota">Os traços mais importantes desta profissão não apareceram fortes nas suas escolhas.</p>`}
      </section>
      <section class="cartao cartao-dificil">
        <h3>⚠️ Pode ser difícil</h3>
        ${dificil.length
          ? listaDeTracos(dificil, "dificil")
          : `<p class="nota">Suas escolhas combinaram com o que a profissão exige. Mesmo assim, fique atento(a):</p>
             ${listaDeTracos([tracoMaisImportante], "dificil")}`}
      </section>
    </div>

    ${calculo.desafios.total ? `
      <section class="cartao cartao-desafios">
        <h3>⚡ Desafios do dia</h3>
        <p class="nota">Você acertou ${calculo.desafios.acertos} de ${calculo.desafios.total}. Acertar não muda a afinidade — o que conta é se você curtiu fazer as tarefas de verdade da profissão.</p>
        <ul class="lista-desafios">
          ${calculo.desafios.lista.map(d => `
            <li>
              <span class="desafio-resultado" aria-hidden="true">${d.acertou ? "✅" : "❌"}</span>
              <div>
                <strong>${esc(d.situacao.titulo)}</strong>
                <span>${d.acertou ? "Acertou" : "Errou"} · ${htmlDoGosto(d.gosto)}</span>
              </div>
            </li>`).join("")}
        </ul>
        <div class="gosto-total">
          <span>Gosto pelas tarefas reais</span>
          <div class="barra"><span data-alvo="${calculo.desafios.gosto}"></span></div>
          <strong>${calculo.desafios.gosto}%</strong>
        </div>
      </section>` : ""}

    ${conquistasNovas && conquistasNovas.length ? `
      <section class="cartao">
        <h3>🏅 Medalhas que você ganhou hoje</h3>
        <div class="medalhas-do-dia">
          ${conquistasNovas.map(c => `<span class="medalha-mini">${esc(c.icone)} ${esc(c.nome)}</span>`).join("")}
        </div>
      </section>` : ""}

    <section class="cartao">
      <h3>Suas decisões ao longo do dia</h3>
      <ol class="linha-tempo">
        ${calculo.momentos.map(momento => momento.desafio ? `
          <li>
            <span class="lt-hora">${esc(momento.situacao.horario)}</span>
            <div>
              <strong>⚡ Desafio: ${esc(momento.situacao.titulo)}</strong>
              <p class="lt-escolha"></p>
              <span class="tag tag-${momento.acertou ? "alta" : "baixa"}">${momento.acertou ? "✅ Acertou" : "❌ Errou"}</span>
              <span class="tag tag-gosto">${htmlDoGosto(momento.gosto)}</span>
            </div>
          </li>` : `
          <li>
            <span class="lt-hora">${esc(momento.situacao.horario)}</span>
            <div>
              <strong>${esc(momento.situacao.titulo)}</strong>
              <p class="lt-escolha">${esc(momento.opcao.texto)}</p>
              <span class="tag tag-${momento.sintonia.id}">${momento.sintonia.texto}</span>
            </div>
          </li>`).join("")}
      </ol>
    </section>

    <section class="cartao">
      <h3>🎓 Como entrar na área</h3>
      <ul class="lista lista-cursos">${profissao.cursos.map(curso => `<li>${esc(curso)}</li>`).join("")}</ul>
      <h4>Próximos passos</h4>
      <ul class="lista lista-passos">
        <li>Converse com alguém que trabalha na área: pergunte do que mais gosta e do que menos gosta no trabalho.</li>
        <li>Procure vídeos e relatos de “um dia na vida” de profissionais reais.</li>
        <li>Jogue outra profissão e compare os resultados.</li>
      </ul>
    </section>

    <p class="aviso">Este relatório é uma ferramenta de reflexão baseada nas suas escolhas no jogo. Ele não substitui uma orientação vocacional profissional.</p>
  `;

  mostrarTela("relatorio");
  animarBarras($("#relatorio-conteudo"));
}

/* ---------- 5. Comparação de resultados ---------- */

// Escolhe de quem mostrar os resultados: o filtro atual, o jogador atual ou o primeiro da lista.
function definirFiltroJogador(nomes) {
  if (!nomes.includes(estado.filtroJogador)) {
    estado.filtroJogador = nomes.includes(estado.nome) ? estado.nome : nomes[0] || null;
  }
}

function htmlDoFiltro(nomes) {
  if (nomes.length < 2) return "";
  return `
    <div class="filtro">
      <label for="filtro-jogador">Jogador(a)</label>
      <select id="filtro-jogador">
        ${nomes.map(n => `<option value="${esc(n)}"${n === estado.filtroJogador ? " selected" : ""}>${esc(n)}</option>`).join("")}
      </select>
    </div>`;
}

function abrirComparacao() {
  mostrarComparacao();
  mostrarTela("comparacao");
}

function mostrarComparacao() {
  const conteudo = $("#comparacao-conteudo");
  const todos = lerResultados();

  if (!todos.length) {
    conteudo.innerHTML = `
      <div class="cartao vazio">
        <p>Nenhum dia de trabalho foi concluído neste navegador ainda.</p>
        <button type="button" class="btn btn-primario" data-acao="cadastro">▶ Jogar uma profissão</button>
      </div>`;
    return;
  }

  const nomes = [...new Set(todos.map(r => r.nome))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  definirFiltroJogador(nomes);

  // Para cada profissão vale a partida mais recente (a lista vem em ordem de data).
  const doJogador = todos.filter(r => r.nome === estado.filtroJogador);
  const ultimaPorProfissao = new Map();
  doJogador.forEach(r => ultimaPorProfissao.set(r.profissaoId, r));

  const linhas = [...ultimaPorProfissao.values()].sort((a, b) => b.afinidade - a.afinidade);
  const faltam = PROFISSOES.filter(p => !ultimaPorProfissao.has(p.id));
  const avatar = doJogador[doJogador.length - 1].avatar;

  conteudo.innerHTML = `
    ${htmlDoFiltro(nomes)}

    <section class="cartao">
      <h3>${esc(avatar)} Profissões que ${esc(estado.filtroJogador)} já jogou</h3>
      <ul class="partidas">
        ${linhas.map((resultado, posicao) => {
          const profissao = buscarProfissao(resultado.profissaoId);
          return `
            <li style="--cor-profissao: ${esc(profissao.cor)}">
              <span class="partida-icone" aria-hidden="true">${esc(profissao.icone)}</span>
              <div class="partida-info">
                <strong>${esc(profissao.nome)}</strong>${posicao === 0 && linhas.length > 1 ? ` <span class="tag tag-alta">🏆 Maior afinidade</span>` : ""}
                <div class="barra"><span data-alvo="${resultado.afinidade}"></span></div>
                <span>Jogado em ${esc(formatarData(resultado.data))}</span>
              </div>
              <span class="partida-pct nivel-${nivelDaAfinidade(resultado.afinidade).id}">${resultado.afinidade}%</span>
              <button type="button" class="btn btn-secundario btn-mini" data-acao="ver-relatorio" data-id="${esc(resultado.id)}">Ver relatório</button>
            </li>`;
        }).join("")}
      </ul>
      ${faltam.length
        ? `<p class="nota nota-rodape">Ainda falta experimentar: ${faltam.map(p => `${esc(p.icone)} ${esc(p.nome)}`).join(", ")}.</p>`
        : ""}
    </section>

    <div class="acoes">
      <button type="button" class="btn btn-primario" data-acao="cadastro">Jogar outra profissão</button>
      <button type="button" class="btn btn-perigo" data-acao="apagar-tudo">Apagar resultados e medalhas</button>
    </div>`;

  animarBarras(conteudo);
}

function confirmarApagarTudo() {
  if (!window.confirm("Apagar os resultados e as medalhas de todos os jogadores salvos neste navegador?")) return;
  apagarResultados();
  apagarConquistas();
  estado.filtroJogador = null;
  mostrarComparacao();
}

/* ---------- 6. Conquistas ---------- */

function abrirConquistas() {
  mostrarConquistas();
  mostrarTela("conquistas");
}

function mostrarConquistas() {
  const nomes = nomesDeJogadores();
  definirFiltroJogador(nomes);
  const ganhas = estado.filtroJogador ? lerConquistas(estado.filtroJogador) : {};
  const quantas = CONQUISTAS.filter(c => ganhas[c.id]).length;

  $("#conquistas-conteudo").innerHTML = `
    ${htmlDoFiltro(nomes)}
    ${nomes.length ? "" : `<p class="aviso-honestidade">Termine um dia de trabalho para começar a ganhar medalhas!</p>`}

    <div class="progresso-conquistas">
      <span>🏅 ${quantas} de ${CONQUISTAS.length}</span>
      <div class="barra"><span data-alvo="${Math.round((quantas / CONQUISTAS.length) * 100)}"></span></div>
    </div>

    <ul class="medalhas">
      ${CONQUISTAS.map(conquista => {
        const data = ganhas[conquista.id];
        return `
          <li class="medalha${data ? "" : " bloqueada"}">
            <span class="medalha-icone" aria-hidden="true">${data ? esc(conquista.icone) : "🔒"}</span>
            <strong>${esc(conquista.nome)}</strong>
            <span>${esc(conquista.descricao)}</span>
            <small>${data ? "Ganha em " + esc(new Date(data).toLocaleDateString("pt-BR")) : "Ainda bloqueada"}</small>
          </li>`;
      }).join("")}
    </ul>

    <div class="acoes">
      <button type="button" class="btn btn-primario" data-acao="cadastro">▶ Jogar</button>
    </div>`;

  animarBarras($("#conquistas-conteudo"));
}

/* ---------- Eventos ---------- */

// Cada botão tem um data-acao="..." que aponta para uma função desta lista.
const ACOES = {
  inicio: abrirInicio,
  cadastro: () => { estado.selecionada = null; abrirCadastro(); },
  continuar: continuarDia,
  comparacao: abrirComparacao,
  conquistas: abrirConquistas,
  avatar: botao => escolherAvatar(botao.dataset.avatar),
  selecionar: botao => selecionarProfissao(botao.dataset.id),
  escolher: botao => escolher(Number(botao.dataset.indice)),
  "responder-desafio": botao => responderPorIndice(Number(botao.dataset.indice)),
  "ordenar-item": botao => escolherItemDaOrdem(Number(botao.dataset.indice)),
  "ordenar-desfazer": desfazerOrdem,
  "avaliar-desafio": botao => avaliarDesafio(Number(botao.dataset.gosto)),
  proxima: proximaSituacao,
  "pular-conversa": () => { if (andamento.pularConversa) andamento.pularConversa(); },
  "pular-passagem": () => { if (andamento.passagem) andamento.passagem(); },
  "ver-relatorio": botao => {
    const resultado = lerResultados().find(r => r.id === botao.dataset.id);
    if (resultado) abrirRelatorio(resultado);
  },
  imprimir: () => window.print(),
  "apagar-tudo": confirmarApagarTudo,
  "alternar-som": alternarSom
};

// Ações que já tocam o próprio som (as outras fazem um "clique").
const ACOES_COM_SOM_PROPRIO = [
  "escolher", "proxima", "alternar-som", "pular-passagem",
  "responder-desafio", "ordenar-item", "avaliar-desafio"
];

function ligarEventos() {
  // Um único "ouvinte" de cliques para a página inteira.
  document.addEventListener("click", evento => {
    const botao = evento.target.closest("[data-acao]");
    if (!botao || botao.disabled || !ACOES[botao.dataset.acao]) return;
    if (!ACOES_COM_SOM_PROPRIO.includes(botao.dataset.acao)) tocarSom("clique");
    ACOES[botao.dataset.acao](botao);
  });

  document.addEventListener("change", evento => {
    // Troca de jogador nas telas de comparação e de conquistas.
    if (evento.target.id === "filtro-jogador") {
      estado.filtroJogador = evento.target.value;
      if ($("#tela-conquistas").hidden) mostrarComparacao();
      else mostrarConquistas();
      $("#filtro-jogador").focus();
    }
    // Liga/desliga o cronômetro das urgências.
    if (evento.target.id === "opcao-cronometro") {
      estado.preferencias.cronometro = evento.target.checked;
      salvarPreferencias(estado.preferencias);
    }
  });

  $("#form-cadastro").addEventListener("submit", enviarCadastro);

  // Atalhos de teclado.
  document.addEventListener("keydown", evento => {
    if (evento.altKey || evento.ctrlKey || evento.metaKey) return;

    // Qualquer tecla pula a tela de passagem de tempo.
    if (andamento.passagem) {
      evento.preventDefault();
      andamento.passagem();
      return;
    }

    if ($("#tela-jogo").hidden || evento.target.matches("input, select, textarea")) return;

    // Espaço pula a conversa.
    if (evento.key === " " && andamento.pularConversa && !evento.target.matches("button")) {
      evento.preventDefault();
      andamento.pularConversa();
      return;
    }

    // A–D ou 1–9 escolhem uma opção (ou uma linha/passo do desafio).
    let indice = -1;
    if (/^[1-9]$/.test(evento.key)) indice = Number(evento.key) - 1;
    else if (evento.key.length === 1) indice = LETRAS.indexOf(evento.key.toUpperCase());
    if (indice < 0) return;

    if (!$("#area-decisao").hidden && indice < situacaoAtual().opcoes.length) {
      evento.preventDefault();
      escolher(ordemDasOpcoes()[indice]); // a tecla vale para a posição na tela
    } else if (!$("#area-desafio").hidden && estado.desafio && estado.desafio.acertou === null) {
      evento.preventDefault();
      if (situacaoAtual().formato === "ordenar") {
        // No "ordenar", a tecla escolhe o botão naquela posição da tela.
        const botao = document.querySelectorAll(".item-ordenar")[indice];
        if (botao && !botao.disabled) escolherItemDaOrdem(Number(botao.dataset.indice));
      } else {
        responderPorIndice(indice);
      }
    }
  });
}

/* ---------- Começo do jogo ---------- */

if (!PROFISSOES.length) {
  $(".app").innerHTML = `<p class="cartao">Nenhuma profissão foi carregada. Confira os arquivos da pasta <code>dados/</code> no index.html.</p>`;
} else {
  conferirDados();
  const jogador = lerJogador();
  estado.nome = jogador.nome;
  estado.avatar = AVATARES.includes(jogador.avatar) ? jogador.avatar : AVATARES[0];
  estado.preferencias = lerPreferencias();
  aplicarSom();
  ligarEventos();
  abrirInicio();
}
