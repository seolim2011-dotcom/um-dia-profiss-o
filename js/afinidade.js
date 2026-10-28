/*
  Cálculos do jogo: afinidade, energia/estresse e classe do perfil.

  Como a afinidade funciona:
  1. Perfil do jogador: em cada traço, somamos os pontos das opções escolhidas
     e dividimos pelo máximo possível naquele traço nas situações da profissão.
     O resultado vai de 0 a 100%.
  2. Perfil ideal da profissão: peso × 20 (peso 5 = 100%, peso 2 = 40%).
  3. Proximidade em cada traço: 100 − a diferença entre o jogador e o ideal.
  4. Afinidade: média das proximidades, ponderada pelo peso de cada traço.
     Assim, os traços mais importantes da profissão contam mais.
  5. Desafios: depois de cada desafio a pessoa diz se curtiria fazer aquilo
     todo dia (😩 0, 😐 1, 😍 2). Esse "gosto pelas tarefas reais" entra na
     média do passo 4 como se fosse mais um traço, com peso PESO_DESAFIOS e
     ideal de 100%. Acertar ou errar o desafio NÃO muda a afinidade (a pessoa
     ainda não estudou a profissão); só mexe no estresse e nas medalhas.

  As funções deste arquivo só fazem contas: não mexem na tela nem no localStorage.
*/

"use strict";

// Faixas de afinidade mostradas no relatório (da maior para a menor).
const NIVEIS = [
  {
    minimo: 75,
    id: "alta",
    titulo: "Alta afinidade",
    mensagem: "Seu jeito de encarar a rotina real — inclusive as partes difíceis — é parecido com o que a profissão exige. Vale a pena se aprofundar: converse com quem trabalha na área e pesquise os cursos."
  },
  {
    minimo: 50,
    id: "media",
    titulo: "Afinidade moderada",
    mensagem: "Algumas partes da rotina combinam com você, outras podem ser um desafio. Antes de decidir, investigue melhor os pontos que aparecem como difíceis."
  },
  {
    minimo: 0,
    id: "baixa",
    titulo: "Baixa afinidade",
    mensagem: "Pelas suas escolhas, a rotina real desta profissão parece não combinar muito com você agora. Isso não é um veredito, é uma pista: que tal experimentar outra profissão?"
  }
];

/* ---------- Escolhas ---------- */

// Valor guardado no lugar da escolha quando o tempo de uma urgência acaba.
const TEMPO_ESGOTADO = -1;

// Peso do "gosto pelas tarefas reais" (resposta depois dos desafios) na afinidade.
const PESO_DESAFIOS = 3;

// Uma etapa do dia pode ser uma situação de decisão ou um desafio.
// No desafio, a escolha guardada é { acertou: true/false, gosto: 0, 1 ou 2 }.
function ehDesafio(situacao) {
  return situacao.tipo === "desafio";
}

// "Opção" usada quando o tempo acaba: não dá pontos para nenhum traço.
const OPCAO_TEMPO_ESGOTADO = {
  texto: "⏰ O tempo acabou antes de você decidir.",
  resultado: "Enquanto você hesitava, a situação seguiu sem você — e piorou. Em urgências, decidir rápido também faz parte do trabalho.",
  pontos: {}
};

// Procura uma profissão pelo id. Devolve null se ela não existir.
function buscarProfissao(id) {
  return PROFISSOES.find(profissao => profissao.id === id) || null;
}

// Resposta livre: o jogador escreveu o que faria e a IA avaliou. A escolha guardada é
// { livre: true, texto, fala, resultado, pontos, quem?, avatar? }. Ela carrega os próprios
// pontos, então o relatório não precisa chamar a IA de novo para recalcular a afinidade.
function ehRespostaLivre(escolha) {
  return Boolean(escolha) && typeof escolha === "object" && escolha.livre === true;
}

// A opção que corresponde a uma escolha salva (ou a opção de "tempo esgotado").
function opcaoEscolhida(situacao, escolha) {
  if (ehRespostaLivre(escolha)) {
    // Se a IA escolheu qual personagem responde, a reação leva o nome e o avatar dele.
    const reacao = escolha.quem
      ? { quem: escolha.quem, avatar: escolha.avatar || "💬", fala: escolha.fala }
      : escolha.fala;
    return { texto: escolha.texto, resultado: escolha.resultado, pontos: escolha.pontos, reacao };
  }
  return escolha === TEMPO_ESGOTADO ? OPCAO_TEMPO_ESGOTADO : situacao.opcoes[escolha];
}

// Quantos pontos uma opção dá para um traço (0 se a opção não citar o traço).
function pontosDoTraco(opcao, tracoId) {
  return (opcao.pontos && opcao.pontos[tracoId]) || 0;
}

// Soma de todos os pontos de uma opção: quanto "esforço" ela representa.
function somaDosPontos(opcao) {
  return Object.values(opcao.pontos || {}).reduce((soma, valor) => soma + valor, 0);
}

// Quanto uma opção "combina" com a profissão: soma dos pontos × peso de cada traço.
function encaixeNaProfissao(profissao, opcao) {
  return TRACOS.reduce((soma, traco) => soma + pontosDoTraco(opcao, traco.id) * profissao.perfil[traco.id].peso, 0);
}

// Diz se uma escolha combinou muito, em parte ou pouco com a profissão,
// comparando com a opção que mais combina naquela situação.
function sintoniaDaEscolha(profissao, situacao, escolha) {
  const melhorEncaixe = Math.max(...situacao.opcoes.map(opcao => encaixeNaProfissao(profissao, opcao)));
  const razao = melhorEncaixe ? encaixeNaProfissao(profissao, opcaoEscolhida(situacao, escolha)) / melhorEncaixe : 1;
  if (razao >= 0.99) return { id: "alta", texto: "Combinou muito" };
  if (razao >= 0.5) return { id: "media", texto: "Combinou em parte" };
  return { id: "baixa", texto: "Combinou pouco" };
}

// Confere se as escolhas salvas ainda batem com as situações da profissão
// (importante se alguém editar o arquivo de dados depois de jogar).
// "completas" = true exige uma escolha para cada situação.
function escolhasValidas(profissao, escolhas, completas) {
  if (!Array.isArray(escolhas)) return false;
  if (completas && escolhas.length !== profissao.situacoes.length) return false;
  return escolhas.every((escolha, i) => {
    const situacao = profissao.situacoes[i];
    if (!situacao) return false;
    if (ehDesafio(situacao)) {
      return Boolean(escolha) && typeof escolha.acertou === "boolean" && [0, 1, 2].includes(escolha.gosto);
    }
    if (ehRespostaLivre(escolha)) return respostaLivreValida(escolha);
    if (escolha === TEMPO_ESGOTADO) return Boolean(situacao.urgente);
    return Boolean(situacao.opcoes[escolha]);
  });
}

// Confere o formato de uma resposta livre salva (texto e pontos de 0 a 2 em traços que existem).
function respostaLivreValida(escolha) {
  if (typeof escolha.texto !== "string" || typeof escolha.resultado !== "string" || typeof escolha.fala !== "string") return false;
  if (escolha.quem !== undefined && typeof escolha.quem !== "string") return false;
  if (escolha.avatar !== undefined && typeof escolha.avatar !== "string") return false;
  if (!escolha.pontos || typeof escolha.pontos !== "object") return false;
  return Object.keys(escolha.pontos).every(id =>
    TRACOS.some(traco => traco.id === id) && [0, 1, 2].includes(escolha.pontos[id])
  );
}

// Trava os pontos que a IA deu a uma resposta livre. Assim a IA nunca "dá nota máxima":
// 1) cada traço fica entre 0 e o máximo que as opções oficiais da situação oferecem;
// 2) o encaixe total (pontos × peso da profissão) nunca passa o da melhor opção oficial.
//    Se passar, tiramos pontos dos traços menos importantes para a profissão.
function limitarPontosLivres(profissao, situacao, pontosDaIA) {
  const pontos = {};
  TRACOS.forEach(traco => {
    const bruto = Math.round(Number(pontosDaIA && pontosDaIA[traco.id]) || 0);
    const valor = Math.max(0, Math.min(bruto, 2, maximoNaEtapa(situacao, traco.id)));
    if (valor > 0) pontos[traco.id] = valor;
  });

  const melhorEncaixe = Math.max(...situacao.opcoes.map(opcao => encaixeNaProfissao(profissao, opcao)));
  while (Object.keys(pontos).length && encaixeNaProfissao(profissao, { pontos }) > melhorEncaixe) {
    const menosImportante = Object.keys(pontos).sort((a, b) => profissao.perfil[a].peso - profissao.perfil[b].peso)[0];
    pontos[menosImportante] -= 1;
    if (pontos[menosImportante] <= 0) delete pontos[menosImportante];
  }
  return pontos;
}

// Pontos de um traço numa etapa do dia. Desafios não dão pontos nos traços:
// eles contam à parte, pelo gosto (veja o passo 5 lá em cima).
function pontosNaEtapa(situacao, escolha, tracoId) {
  if (ehDesafio(situacao)) return 0;
  return pontosDoTraco(opcaoEscolhida(situacao, escolha), tracoId);
}

// Máximo de pontos que um traço pode receber numa etapa do dia.
function maximoNaEtapa(situacao, tracoId) {
  if (ehDesafio(situacao)) return 0;
  return Math.max(...situacao.opcoes.map(opcao => pontosDoTraco(opcao, tracoId)));
}

/* ---------- Afinidade ---------- */

// Calcula tudo o que o relatório precisa a partir das escolhas de um dia completo.
function calcularAfinidade(profissao, escolhas) {
  // Passos 1 a 3: perfil do jogador, perfil ideal e proximidade em cada traço.
  const tracos = TRACOS.map(traco => {
    const perfil = profissao.perfil[traco.id];
    let obtidos = 0;
    let maximo = 0;

    profissao.situacoes.forEach((situacao, i) => {
      maximo += maximoNaEtapa(situacao, traco.id);
      obtidos += pontosNaEtapa(situacao, escolhas[i], traco.id);
    });

    // Se nenhuma opção da profissão dá pontos para o traço, ele fica de fora da conta.
    const jogador = maximo > 0 ? Math.round((obtidos / maximo) * 100) : null;
    const ideal = perfil.peso * 20;

    return {
      id: traco.id,
      nome: traco.nome,
      curto: traco.curto,
      icone: traco.icone,
      peso: perfil.peso,
      gostar: perfil.gostar,
      dificil: perfil.dificil,
      jogador: jogador,
      ideal: ideal,
      proximidade: jogador === null ? null : 100 - Math.abs(jogador - ideal)
    };
  });

  // Passo 5: gosto pelos desafios (0 a 100%), se o dia teve desafios.
  const desafios = profissao.situacoes
    .map((situacao, i) => ({ situacao, escolha: escolhas[i] }))
    .filter(etapa => ehDesafio(etapa.situacao))
    .map(etapa => ({ situacao: etapa.situacao, acertou: etapa.escolha.acertou, gosto: etapa.escolha.gosto }));
  const gostoPelosDesafios = desafios.length
    ? Math.round((desafios.reduce((soma, d) => soma + d.gosto, 0) / (desafios.length * 2)) * 100)
    : null;

  // Passo 4 (com o passo 5 incluído): média das proximidades, ponderada pelo peso.
  // O gosto pelos desafios tem ideal de 100%, então a proximidade dele é o próprio gosto.
  const considerados = tracos.filter(traco => traco.proximidade !== null);
  let somaPesos = considerados.reduce((soma, traco) => soma + traco.peso, 0);
  let somaPonderada = considerados.reduce((soma, traco) => soma + traco.proximidade * traco.peso, 0);
  if (gostoPelosDesafios !== null) {
    somaPesos += PESO_DESAFIOS;
    somaPonderada += gostoPelosDesafios * PESO_DESAFIOS;
  }
  const afinidade = somaPesos ? Math.round(somaPonderada / somaPesos) : 0;

  // Cada etapa do dia: decisões (com o quanto combinaram) e desafios (acerto e gosto).
  const momentos = profissao.situacoes.map((situacao, i) => {
    if (ehDesafio(situacao)) {
      return { situacao, desafio: true, acertou: escolhas[i].acertou, gosto: escolhas[i].gosto };
    }
    return {
      situacao,
      opcao: opcaoEscolhida(situacao, escolhas[i]),
      tempoEsgotado: escolhas[i] === TEMPO_ESGOTADO,
      livre: ehRespostaLivre(escolhas[i]),
      sintonia: sintoniaDaEscolha(profissao, situacao, escolhas[i])
    };
  });

  return {
    afinidade,
    tracos,
    momentos,
    desafios: {
      lista: desafios,
      total: desafios.length,
      acertos: desafios.filter(d => d.acertou).length,
      gosto: gostoPelosDesafios
    }
  };
}

// Devolve a faixa (alta, moderada ou baixa) de uma porcentagem de afinidade.
function nivelDaAfinidade(afinidade) {
  return NIVEIS.find(nivel => afinidade >= nivel.minimo);
}

// Olha só os traços importantes da profissão (peso 3 ou mais) e separa:
// - gostar:  o jogador ficou perto do ideal ou acima (até 15 pontos abaixo)
// - dificil: o jogador ficou bem abaixo do ideal (mais de 25 pontos abaixo)
function separarGostarDificil(tracos) {
  const importantes = tracos
    .filter(traco => traco.peso >= 3 && traco.jogador !== null)
    .sort((a, b) => b.peso - a.peso);
  return {
    gostar: importantes.filter(traco => traco.jogador >= traco.ideal - 15),
    dificil: importantes.filter(traco => traco.jogador < traco.ideal - 25)
  };
}

// "Classe de personagem" do jogador: vem do traço em que ele foi mais forte.
// O segundo traço mais forte (se tiver 40% ou mais) vira o "ponto forte secundário".
function classeDoPerfil(tracos) {
  const ordenados = tracos
    .filter(traco => traco.jogador !== null)
    .sort((a, b) => b.jogador - a.jogador || b.peso - a.peso);
  const principal = ordenados[0];

  if (!principal || principal.jogador === 0) {
    return { icone: "🌱", nome: "Aprendiz", lema: "Seu perfil ainda está se formando. Experimente outras escolhas e outras profissões!", secundario: null };
  }

  const traco = TRACOS.find(t => t.id === principal.id);
  const segundo = ordenados[1] && ordenados[1].jogador >= 40 ? ordenados[1] : null;
  return { icone: traco.icone, nome: traco.classe, lema: traco.lema, secundario: segundo };
}

/* ---------- Energia e estresse ---------- */

const ENERGIA_INICIAL = 100;
const ESTRESSE_INICIAL = 10;

// Quanto uma escolha muda a energia e o estresse.
// - Energia: toda escolha cansa um pouco, e as que exigem mais esforço
//   (mais pontos) cansam mais. Urgências cansam um pouco além disso.
// - Estresse: escolhas que combinam pouco com a profissão deixam problemas
//   para trás, e por isso estressam mais. Deixar o tempo acabar estressa muito.
// - Desafios: pensar cansa um pouco (−4 de energia) e errar estressa (+8).
// Uma opção pode definir seus próprios valores com o campo "efeitos".
function efeitosDaEscolha(profissao, situacao, escolha) {
  if (ehDesafio(situacao)) return { energia: -4, estresse: escolha.acertou ? 0 : 8 };
  if (escolha === TEMPO_ESGOTADO) return { energia: -6, estresse: 20 };

  const opcao = opcaoEscolhida(situacao, escolha); // inclui a resposta livre (que não tem "efeitos")
  if (opcao.efeitos) {
    return { energia: opcao.efeitos.energia || 0, estresse: opcao.efeitos.estresse || 0 };
  }

  const extraUrgente = situacao.urgente ? 3 : 0;
  const estressePorSintonia = { alta: 2, media: 8, baixa: 15 };
  const sintonia = sintoniaDaEscolha(profissao, situacao, escolha);
  return {
    energia: -(5 + 2 * somaDosPontos(opcao) + extraUrgente),
    estresse: estressePorSintonia[sintonia.id] + extraUrgente
  };
}

// Mantém um valor entre 0 e 100.
function limitarPorcentagem(valor) {
  return Math.max(0, Math.min(100, valor));
}

// Energia e estresse depois das escolhas já feitas no dia.
function medidoresDoDia(profissao, escolhas) {
  let energia = ENERGIA_INICIAL;
  let estresse = ESTRESSE_INICIAL;
  escolhas.forEach((escolha, i) => {
    const efeito = efeitosDaEscolha(profissao, profissao.situacoes[i], escolha);
    energia = limitarPorcentagem(energia + efeito.energia);
    estresse = limitarPorcentagem(estresse + efeito.estresse);
  });
  return { energia, estresse };
}

// Frase sobre como a pessoa terminou o dia.
function resumoDoDia(medidores) {
  const cansado = medidores.energia < 50;
  const tranquilo = medidores.estresse <= 40;
  if (cansado && tranquilo) return "Você deu tudo de si e saiu com a sensação de dever cumprido.";
  if (cansado) return "Dia pesado: você se esforçou, mas muita coisa saiu do controle.";
  if (tranquilo) return "Dia leve! Você poupou energia e manteve tudo sob controle.";
  return "Você se poupou, mas os problemas foram se acumulando ao longo do dia.";
}

/* ---------- Conferência dos dados ---------- */

// Avisa no console (F12) sobre erros comuns ao criar ou editar uma profissão.
function conferirDados() {
  const aviso = texto => console.warn("[Um Dia na Profissão] " + texto);
  const ids = new Set();

  PROFISSOES.forEach(profissao => {
    if (ids.has(profissao.id)) aviso(`id repetido: "${profissao.id}".`);
    ids.add(profissao.id);

    TRACOS.forEach(traco => {
      const perfil = profissao.perfil && profissao.perfil[traco.id];
      if (!perfil || !(perfil.peso >= 1 && perfil.peso <= 5)) {
        aviso(`${profissao.nome}: o traço "${traco.id}" precisa de um peso de 1 a 5 em "perfil".`);
      }
      const usado = profissao.situacoes.some(s => maximoNaEtapa(s, traco.id) > 0);
      if (!usado) aviso(`${profissao.nome}: nenhuma opção dá pontos para "${traco.id}", então ele fica fora da afinidade.`);
    });

    profissao.situacoes.forEach((situacao, i) => {
      const onde = `${profissao.nome}, etapa ${i + 1} (${situacao.titulo})`;
      (situacao.conversa || []).forEach((mensagem, j) => {
        if (!mensagem.fala) aviso(`${onde}: a mensagem ${j + 1} da conversa está sem "fala".`);
      });

      if (ehDesafio(situacao)) {
        const formatos = { "escolha": "alternativas", "encontre-o-erro": "linhas", "ordenar": "itens" };
        const lista = situacao[formatos[situacao.formato]];
        if (!formatos[situacao.formato]) aviso(`${onde}: formato "${situacao.formato}" não existe (use escolha, encontre-o-erro ou ordenar).`);
        else if (!Array.isArray(lista) || lista.length < 2) aviso(`${onde}: o desafio precisa de pelo menos 2 itens em "${formatos[situacao.formato]}".`);
        else if (situacao.formato !== "ordenar" && !lista[situacao.correta]) aviso(`${onde}: "correta" não aponta para um item da lista.`);
        if (situacao.traco && !TRACOS.some(traco => traco.id === situacao.traco)) aviso(`${onde}: o traço "${situacao.traco}" não existe.`);
        return;
      }

      situacao.opcoes.forEach((opcao, j) => {
        Object.keys(opcao.pontos || {}).forEach(chave => {
          if (!TRACOS.some(traco => traco.id === chave)) {
            aviso(`${onde}, opção ${j + 1}: o traço "${chave}" não existe em dados/tracos.js.`);
          }
        });
      });
    });
  });
}
