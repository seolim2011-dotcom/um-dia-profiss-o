/*
  Salvamento no navegador (localStorage).

  Guardamos:
  - o último jogador (nome e avatar)
  - o dia em andamento (para continuar depois, se a página fechar)
  - os resultados dos dias concluídos
  - as conquistas de cada jogador
  - as preferências (som e cronômetro)

  O localStorage só guarda texto, então convertemos os dados com JSON.
  Tudo fica dentro de try/catch: se o navegador bloquear o armazenamento,
  o jogo continua funcionando, só não salva.
*/

"use strict";

const CHAVES = {
  jogador: "umDiaNaProfissao.jogador",
  progresso: "umDiaNaProfissao.progresso",
  resultados: "umDiaNaProfissao.resultados",
  conquistas: "umDiaNaProfissao.conquistas",
  preferencias: "umDiaNaProfissao.preferencias"
};

// AVATAR_PADRAO e normalizarAvatar vêm de avatares.js.

// Uma versão anterior do jogo tinha IA opcional e podia guardar a chave da API aqui.
// A IA foi retirada; por segurança, apagamos qualquer chave que tenha ficado salva.
try { localStorage.removeItem("umDiaNaProfissao.chaveIA"); } catch (erro) { /* ignorado */ }
try { sessionStorage.removeItem("umDiaNaProfissao.chaveIA"); } catch (erro) { /* ignorado */ }

/* ---------- Funções básicas ---------- */

function lerDoNavegador(chave, valorPadrao) {
  try {
    const texto = localStorage.getItem(chave);
    return texto === null ? valorPadrao : JSON.parse(texto);
  } catch (erro) {
    return valorPadrao;
  }
}

function salvarNoNavegador(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch (erro) {
    // Sem armazenamento disponível: seguimos sem salvar.
  }
}

function apagarDoNavegador(chave) {
  try {
    localStorage.removeItem(chave);
  } catch (erro) {
    // Mesmo motivo acima.
  }
}

/* ---------- Jogador ---------- */

// Devolve { nome, avatar }. A primeira versão do jogo guardava só o nome.
function lerJogador() {
  const salvo = lerDoNavegador(CHAVES.jogador, null);
  if (typeof salvo === "string") return { nome: salvo, avatar: AVATAR_PADRAO };
  if (salvo && typeof salvo.nome === "string") return { nome: salvo.nome, avatar: normalizarAvatar(salvo.avatar) };
  return { nome: "", avatar: AVATAR_PADRAO };
}

function salvarJogador(jogador) {
  salvarNoNavegador(CHAVES.jogador, { nome: jogador.nome, avatar: jogador.avatar });
}

/* ---------- Preferências ---------- */

function lerPreferencias() {
  const salvas = lerDoNavegador(CHAVES.preferencias, {}) || {};
  return {
    som: salvas.som !== false,
    cronometro: salvas.cronometro !== false
  };
}

function salvarPreferencias(preferencias) {
  salvarNoNavegador(CHAVES.preferencias, preferencias);
}

/* ---------- Dia em andamento ---------- */

// Devolve o dia salvo ou null se não houver (ou se o que estava salvo não
// combina mais com os dados das profissões).
function lerProgresso() {
  const salvo = lerDoNavegador(CHAVES.progresso, null);
  const base = salvo && buscarProfissao(salvo.profissaoId);
  if (!base || !salvo.nome || !versoesValidas(base, salvo.versoes)) return null;
  const profissao = montarDia(base, salvo.versoes); // o dia com as versões que estavam sendo jogadas

  const indiceValido = salvo.indice >= 0 && salvo.indice < profissao.situacoes.length;
  const escolhasOk = escolhasValidas(profissao, salvo.escolhas, false) && salvo.escolhas.length <= salvo.indice + 1;
  if (!indiceValido || !escolhasOk || !pausaValida(profissao, salvo.pausa, salvo.escolhas.length)) return null;

  return {
    nome: salvo.nome,
    avatar: normalizarAvatar(salvo.avatar),
    profissao,
    versoes: salvo.versoes || profissao.situacoes.map(() => 0),
    tentativa: Number.isInteger(salvo.tentativa) && salvo.tentativa >= 0 ? salvo.tentativa : 0,
    indice: salvo.indice,
    escolhas: salvo.escolhas,
    urgencias: salvo.urgencias || { total: 0, esgotadas: 0, menorFolga: null },
    pausa: salvo.pausa ?? null,
    tempoRestante: tempoRestanteValido(salvo.tempoRestante, salvo.indice) ? salvo.tempoRestante : null
  };
}

// Tempo que sobrava no cronômetro quando a pessoa pausou: { indice, segundos }.
function tempoRestanteValido(tempo, indice) {
  return Boolean(tempo) && tempo.indice === indice && typeof tempo.segundos === "number" && tempo.segundos > 0;
}

// progresso = { nome, avatar, profissaoId, versoes, tentativa, indice, escolhas, urgencias, pausa, tempoRestante }
function salvarProgresso(progresso) {
  salvarNoNavegador(CHAVES.progresso, progresso);
}

function apagarProgresso() {
  apagarDoNavegador(CHAVES.progresso);
}

/* ---------- Resultados ---------- */

// Lista dos dias concluídos, do mais antigo para o mais recente.
// A afinidade é recalculada na hora, para acompanhar mudanças nos dados.
function lerResultados() {
  const lista = lerDoNavegador(CHAVES.resultados, []);
  if (!Array.isArray(lista)) return [];

  return lista
    .filter(resultado => {
      const base = resultado && buscarProfissao(resultado.profissaoId);
      return base && versoesValidas(base, resultado.versoes) &&
        escolhasValidas(montarDia(base, resultado.versoes), resultado.escolhas, true) &&
        pausaValida(base, resultado.pausa, resultado.escolhas.length);
    })
    .map(resultado => ({
      id: resultado.id,
      nome: resultado.nome,
      avatar: normalizarAvatar(resultado.avatar),
      profissaoId: resultado.profissaoId,
      versoes: resultado.versoes,
      pausa: resultado.pausa ?? null,
      data: resultado.data,
      escolhas: resultado.escolhas,
      afinidade: calcularAfinidade(montarDia(buscarProfissao(resultado.profissaoId), resultado.versoes), resultado.escolhas).afinidade
    }));
}

// resultado = { id, nome, avatar, profissaoId, versoes, pausa, data, escolhas, afinidade }
// "pausa" é a etapa depois da qual a pessoa fez a pausa do café (null = sem pausa).
// "versoes" diz qual versão de cada etapa foi jogada (resultados antigos não têm: contam como a primeira).
function adicionarResultado(resultado) {
  const lista = lerDoNavegador(CHAVES.resultados, []);
  salvarNoNavegador(CHAVES.resultados, (Array.isArray(lista) ? lista : []).concat(resultado));
}

function apagarResultados() {
  apagarDoNavegador(CHAVES.resultados);
}

/* ---------- Conquistas ---------- */

// Todas as conquistas, no formato { "Nome do jogador": { idDaConquista: "data" } }
function lerTodasConquistas() {
  const todas = lerDoNavegador(CHAVES.conquistas, {});
  return todas && typeof todas === "object" && !Array.isArray(todas) ? todas : {};
}

// Conquistas de um jogador: { idDaConquista: "data em que ganhou" }
function lerConquistas(nome) {
  return lerTodasConquistas()[nome] || {};
}

function salvarConquistas(nome, conquistas) {
  const todas = lerTodasConquistas();
  todas[nome] = conquistas;
  salvarNoNavegador(CHAVES.conquistas, todas);
}

function apagarConquistas() {
  apagarDoNavegador(CHAVES.conquistas);
}

// Nomes de todas as pessoas que já jogaram neste navegador.
function nomesDeJogadores() {
  const nomes = new Set(lerResultados().map(resultado => resultado.nome));
  Object.keys(lerTodasConquistas()).forEach(nome => nomes.add(nome));
  return [...nomes].sort((a, b) => a.localeCompare(b, "pt-BR"));
}
