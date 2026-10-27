/*
  Conquistas (medalhas).

  Cada conquista tem uma função "verificar" que recebe um "contexto" com tudo
  o que aconteceu no dia que acabou de terminar:
  - nome         nome do jogador
  - profissao    profissão jogada
  - calculo      resultado de calcularAfinidade (afinidade, tracos e desafios)
  - medidores    energia e estresse no fim do dia
  - partidas     todos os resultados deste jogador (incluindo o dia atual, que é o último)
  - urgencias    { total, esgotadas, menorFolga } — menorFolga = segundos que sobraram
                 na resposta mais apertada (null se não houve urgência com cronômetro)
  - cronometroLigado

  Para criar uma conquista nova, basta adicionar um item à lista.
*/

"use strict";

// Atalho: valor do jogador em um traço (0 a 100) no dia atual.
function valorDoTraco(contexto, tracoId) {
  const traco = contexto.calculo.tracos.find(t => t.id === tracoId);
  return traco ? traco.jogador : null;
}

const CONQUISTAS = [
  {
    id: "primeiro-dia",
    icone: "🎒",
    nome: "Primeiro expediente",
    descricao: "Termine seu primeiro dia de trabalho.",
    verificar: () => true
  },
  {
    id: "explorador",
    icone: "🧭",
    nome: "Explorador(a)",
    descricao: "Jogue 3 profissões diferentes.",
    verificar: c => new Set(c.partidas.map(p => p.profissaoId)).size >= Math.min(3, PROFISSOES.length)
  },
  {
    id: "na-mosca",
    icone: "🎯",
    nome: "Na mosca",
    descricao: "Chegue a 90% de afinidade ou mais em uma profissão.",
    verificar: c => c.calculo.afinidade >= 90
  },
  {
    id: "segunda-chance",
    icone: "🔁",
    nome: "Segunda chance",
    descricao: "Jogue de novo uma profissão e melhore sua afinidade.",
    verificar: c => {
      const mesmaProfissao = c.partidas.filter(p => p.profissaoId === c.profissao.id);
      const anteriores = mesmaProfissao.slice(0, -1);
      return anteriores.length > 0 && c.calculo.afinidade > Math.max(...anteriores.map(p => p.afinidade));
    }
  },
  {
    id: "sangue-frio",
    icone: "🧊",
    nome: "Sangue frio",
    descricao: "Com o cronômetro ligado, responda todas as urgências do dia a tempo.",
    verificar: c => c.cronometroLigado && c.urgencias.total > 0 && c.urgencias.esgotadas === 0
  },
  {
    id: "por-um-fio",
    icone: "😅",
    nome: "Por um fio",
    descricao: "Responda uma urgência com menos de 3 segundos sobrando.",
    verificar: c => c.urgencias.menorFolga !== null && c.urgencias.menorFolga < 3
  },
  {
    id: "zen",
    icone: "🧘",
    nome: "Zen",
    descricao: "Termine um dia com o estresse abaixo de 30%.",
    verificar: c => c.medidores.estresse < 30
  },
  {
    id: "dia-intenso",
    icone: "🔥",
    nome: "Dia intenso",
    descricao: "Termine um dia com menos de 30% de energia.",
    verificar: c => c.medidores.energia < 30
  },
  {
    id: "coracao-de-ouro",
    icone: "💛",
    nome: "Coração de ouro",
    descricao: "Chegue a 100% em Lidar com pessoas.",
    verificar: c => valorDoTraco(c, "pessoas") === 100
  },
  {
    id: "cacador-de-bugs",
    icone: "🐞",
    nome: "Caçador(a) de bugs",
    descricao: "Acerte um desafio de achar o erro no código.",
    verificar: c => c.calculo.desafios.lista.some(d => d.situacao.codigo && d.acertou)
  },
  {
    id: "genio-dos-desafios",
    icone: "🧠",
    nome: "Gênio dos desafios",
    descricao: "Acerte todos os desafios de um dia.",
    verificar: c => c.calculo.desafios.total > 0 && c.calculo.desafios.acertos === c.calculo.desafios.total
  },
  {
    id: "mente-afiada",
    icone: "🧩",
    nome: "Mente afiada",
    descricao: "Chegue a 100% em Resolver problemas técnicos/lógicos.",
    verificar: c => valorDoTraco(c, "logica") === 100
  },
  {
    id: "nervos-de-aco",
    icone: "🛡️",
    nome: "Nervos de aço",
    descricao: "Chegue a 100% em Trabalhar sob pressão.",
    verificar: c => valorDoTraco(c, "pressao") === 100
  },
  {
    id: "tudo-nos-conformes",
    icone: "🗂️",
    nome: "Tudo nos conformes",
    descricao: "Chegue a 100% em Organização e rotina.",
    verificar: c => valorDoTraco(c, "organizacao") === 100
  },
  {
    id: "ideia-brilhante",
    icone: "✨",
    nome: "Ideia brilhante",
    descricao: "Chegue a 100% em Criatividade.",
    verificar: c => valorDoTraco(c, "criatividade") === 100
  }
];

// Confere quais conquistas o jogador ganhou agora, salva e devolve só as novas.
function verificarConquistas(contexto) {
  const ganhas = lerConquistas(contexto.nome);
  const novas = CONQUISTAS.filter(conquista => !ganhas[conquista.id] && conquista.verificar(contexto));
  const agora = new Date().toISOString();
  novas.forEach(conquista => { ganhas[conquista.id] = agora; });
  if (novas.length) salvarConquistas(contexto.nome, ganhas);
  return novas;
}
