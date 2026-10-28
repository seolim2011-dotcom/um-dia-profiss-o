/*
  Salvamento no navegador (localStorage).

  Guardamos:
  - o último jogador (nome e avatar)
  - o dia em andamento (para continuar depois, se a página fechar)
  - os resultados dos dias concluídos
  - as conquistas de cada jogador
  - as preferências (som e cronômetro)
  - a chave da IA (opcional, só no navegador de quem a colou)

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

const AVATAR_PADRAO = "🙂";

// A chave da IA é guardada à parte, como texto puro (não como JSON).
const CHAVE_IA = "umDiaNaProfissao.chaveIA";

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
  if (salvo && typeof salvo.nome === "string") return { nome: salvo.nome, avatar: salvo.avatar || AVATAR_PADRAO };
  return { nome: "", avatar: AVATAR_PADRAO };
}

function salvarJogador(jogador) {
  salvarNoNavegador(CHAVES.jogador, { nome: jogador.nome, avatar: jogador.avatar });
}

/* ---------- Preferências ---------- */

function lerPreferencias() {
  const salvas = lerDoNavegador(CHAVES.preferencias, {});
  return {
    som: salvas.som !== false,
    cronometro: salvas.cronometro !== false
  };
}

function salvarPreferencias(preferencias) {
  salvarNoNavegador(CHAVES.preferencias, preferencias);
}

/* ---------- Chave da IA ---------- */

// Por segurança a chave NUNCA vai para o código nem para o GitHub: cada pessoa cola a sua.
// Por padrão ela fica só na aba (sessionStorage) e some quando a aba fecha.
// Com "lembrar neste navegador" ela vai para o localStorage.

function lerChaveIA() {
  try {
    return sessionStorage.getItem(CHAVE_IA) || localStorage.getItem(CHAVE_IA) || "";
  } catch (erro) {
    return "";
  }
}

function chaveIALembrada() {
  try {
    return Boolean(localStorage.getItem(CHAVE_IA));
  } catch (erro) {
    return false;
  }
}

function salvarChaveIA(chave, lembrar) {
  apagarChaveIA();
  try {
    (lembrar ? localStorage : sessionStorage).setItem(CHAVE_IA, chave);
  } catch (erro) {
    // Sem armazenamento: a IA funciona nesta página, mas não fica salva.
  }
}

function apagarChaveIA() {
  try { sessionStorage.removeItem(CHAVE_IA); } catch (erro) { /* ignorado */ }
  try { localStorage.removeItem(CHAVE_IA); } catch (erro) { /* ignorado */ }
}

/* ---------- Dia em andamento ---------- */

// Devolve o dia salvo ou null se não houver (ou se o que estava salvo não
// combina mais com os dados das profissões).
function lerProgresso() {
  const salvo = lerDoNavegador(CHAVES.progresso, null);
  const profissao = salvo && buscarProfissao(salvo.profissaoId);
  if (!profissao || !salvo.nome) return null;

  const indiceValido = salvo.indice >= 0 && salvo.indice < profissao.situacoes.length;
  const escolhasOk = escolhasValidas(profissao, salvo.escolhas, false) && salvo.escolhas.length <= salvo.indice + 1;
  if (!indiceValido || !escolhasOk) return null;

  return {
    nome: salvo.nome,
    avatar: salvo.avatar || AVATAR_PADRAO,
    profissao,
    indice: salvo.indice,
    escolhas: salvo.escolhas,
    urgencias: salvo.urgencias || { total: 0, esgotadas: 0, menorFolga: null }
  };
}

// progresso = { nome, avatar, profissaoId, indice, escolhas, urgencias }
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
      const profissao = resultado && buscarProfissao(resultado.profissaoId);
      return profissao && escolhasValidas(profissao, resultado.escolhas, true);
    })
    .map(resultado => ({
      id: resultado.id,
      nome: resultado.nome,
      avatar: resultado.avatar || AVATAR_PADRAO,
      profissaoId: resultado.profissaoId,
      data: resultado.data,
      escolhas: resultado.escolhas,
      afinidade: calcularAfinidade(buscarProfissao(resultado.profissaoId), resultado.escolhas).afinidade
    }));
}

// resultado = { id, nome, avatar, profissaoId, data, escolhas, afinidade }
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
