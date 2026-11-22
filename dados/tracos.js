/*
  Traços de perfil usados no jogo inteiro.

  Cada opção de escolha dá pontos para um ou mais destes traços, e cada
  profissão diz qual é o peso (a importância) de cada traço no dia a dia.
  Se mudar um "id" aqui, mude também nos arquivos das profissões.

  Campos:
  - id      identificador usado nos arquivos das profissões
  - nome    nome completo, mostrado no relatório
  - curto   nome curto, usado no gráfico radar
  - icone   emoji do traço
  - classe  "classe de personagem" de quem tem este traço como o mais forte
  - lema    frase que aparece junto da classe no relatório
*/

const TRACOS = [
  {
    id: "pessoas", nome: "Lidar com pessoas", curto: "Pessoas", icone: "🤝",
    classe: "Coração Valente", lema: "Você se importa de verdade com as pessoas e sabe cuidar delas."
  },
  {
    id: "logica", nome: "Resolver problemas técnicos/lógicos", curto: "Lógica", icone: "🧩",
    classe: "Mente Brilhante", lema: "Você adora entender como as coisas funcionam e resolver quebra-cabeças."
  },
  {
    id: "pressao", nome: "Trabalhar sob pressão", curto: "Pressão", icone: "⏱️",
    classe: "Cabeça Fria", lema: "Quando tudo aperta, você respira fundo e age."
  },
  {
    id: "organizacao", nome: "Organização e rotina", curto: "Organização", icone: "📋",
    classe: "Mestre da Ordem", lema: "Você transforma bagunça em plano e plano em resultado."
  },
  {
    id: "criatividade", nome: "Criatividade", curto: "Criatividade", icone: "💡",
    classe: "Faísca Criativa", lema: "Você sempre encontra um jeito diferente de resolver as coisas."
  }
];

// Áreas usadas no filtro da escolha de profissão. Cada profissão diz a sua
// área no campo "area" (por exemplo area: "saude").
const AREAS = [
  { id: "saude", nome: "Saúde", icone: "🩺" },
  { id: "tecnologia", nome: "Tecnologia e engenharia", icone: "💻" },
  { id: "criativas", nome: "Criativas", icone: "🎨" },
  { id: "negocios", nome: "Negócios", icone: "📊" },
  { id: "sociedade", nome: "Sociedade", icone: "⚖️" }
];

// Lista de profissões do jogo. Começa vazia: cada arquivo da pasta dados/
// adiciona a sua profissão com PROFISSOES.push({ ... }).
const PROFISSOES = [];

// Banco de versões: acrescenta mais uma versão a cada etapa de uma profissão.
// "novas" tem uma posição para cada etapa do dia, na mesma ordem; use null para
// deixar uma etapa com uma versão só. A cada nova tentativa na profissão, o jogo
// alterna entre as versões (veja versoesDaTentativa em js/afinidade.js).
// Dica: para o equilíbrio da afinidade não mudar, cada versão nova pode repetir
// os mesmos "pontos" das opções da versão original, em outra situação.
function adicionarVersoes(id, novas) {
  const profissao = PROFISSOES.find(p => p.id === id);
  if (!profissao) {
    console.warn(`[Your Career] adicionarVersoes: a profissão "${id}" não existe (confira a ordem dos <script>).`);
    return;
  }
  novas.forEach((nova, i) => {
    const etapa = profissao.situacoes[i];
    if (!nova) return;
    if (!etapa) {
      console.warn(`[Your Career] adicionarVersoes("${id}"): não existe a etapa ${i + 1}.`);
      return;
    }
    profissao.situacoes[i] = { versoes: [...(etapa.versoes || [etapa]), nova] };
  });
}
