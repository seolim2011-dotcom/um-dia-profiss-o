/*
  Profissão: Professor(a)
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "professor",
  nome: "Professor(a)",
  icone: "📚",
  cor: "#0d1b3d",
  area: "sociedade",
  resumo: "Ensinar e acompanhar o desenvolvimento de crianças e adolescentes na escola.",

  perfil: {
    pessoas: {
      peso: 5,
      gostar: "Ver alunos aprendendo e criar vínculo ao longo dos anos.",
      dificil: "Turmas cheias, conflitos, bullying e famílias exigentes."
    },
    logica: {
      peso: 2,
      gostar: "Explicar um conteúdo de forma clara e descobrir onde o aluno travou.",
      dificil: "Corrigir dezenas de provas e atividades com justiça e atenção."
    },
    pressao: {
      peso: 3,
      gostar: "Manter o controle da sala e transformar bagunça em aula boa.",
      dificil: "Salas lotadas, imprevistos e cobrança de notas e resultados."
    },
    organizacao: {
      peso: 4,
      gostar: "Planejar aulas, usar bem o tempo e acompanhar cada turma.",
      dificil: "Planejar e corrigir fora do horário de aula, diários e burocracia."
    },
    criatividade: {
      peso: 4,
      gostar: "Inventar jogos, exemplos e aulas diferentes.",
      dificil: "Pouco material e tempo para fazer aulas diferentes quando a rotina aperta."
    }
  },

  cursos: [
    "Licenciatura na disciplina que você quer ensinar (Matemática, Letras, História, Biologia...) (cerca de 4 anos)",
    "Pedagogia, para educação infantil e anos iniciais do ensino fundamental (cerca de 4 anos)",
    "Pós-graduação em educação, educação especial, gestão escolar e outras"
  ],

  situacoes: [
    {
      horario: "07:00",
      titulo: "Primeira aula do dia",
      cena: "🏫 🍕 🙋",
      descricao: "Você entra na sala do 7º ano. São 38 alunos, metade conversando alto.",
      conversa: [
        { quem: "Davi, aluno", avatar: "🧒🏽", fala: "oi, professor(a)! hoje a aula é de quê? 😴" },
        { quem: "Bia, aluna", avatar: "👧🏻", fala: "se for fração, eu já vou dormir kkkk 🙃" },
        { quem: "Davi, aluno", avatar: "🧒🏽", fala: "dá pra fazer a aula lá fora?" }
      ],
      naVidaReal: "Manter a atenção de uma turma grande é um desafio diário. Um professor pode dar aula para várias turmas no mesmo dia, cada uma com um clima diferente.",
      opcoes: [
        {
          texto: "Grito para todos ficarem quietos e começo a escrever no quadro.",
          reacao: "nossa, que susto... 😒",
          resultado: "A turma ficou quieta por cinco minutos e depois voltou a conversar. Você terminou a aula com dor de garganta.",
          pontos: {}
        },
        {
          texto: "Espero em silêncio na frente da sala até eles pararem.",
          reacao: "ih, o(a) professor(a) tá esperando... 🤫",
          resultado: "Demorou alguns minutos, mas a turma foi se acalmando. Sobrou pouco tempo para a explicação.",
          pontos: { pressao: 1, organizacao: 1 }
        },
        {
          texto: "Começo com um desafio rápido: “Como dividir 3 pizzas igualmente entre 4 pessoas?”.",
          reacao: "ué, 3 pizzas pra 4 pessoas? cada um come menos de uma inteira! 🍕",
          resultado: "A turma entrou na discussão e, sem perceber, já estavam falando de frações.",
          pontos: { criatividade: 2, pessoas: 1 }
        },
        {
          texto: "Combino com a turma algumas regras de convivência e depois começo o conteúdo.",
          reacao: "regras? tá, mas e se a gente quiser escolher alguma? 🤔",
          resultado: "Você gastou 10 minutos com as regras, mas a aula fluiu melhor e elas vão ajudar no resto do ano.",
          pontos: { organizacao: 1, pessoas: 1, logica: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "08:30",
      titulo: "Confira o gabarito",
      cena: "📝 ➗ 🔍",
      conversa: [
        { quem: "Prof. Marcos, colega", avatar: "👨🏽‍🏫", fala: "ei, você que montou o gabarito da prova de hoje? 😅" },
        { quem: "Prof. Marcos, colega", avatar: "👨🏽‍🏫", fala: "vi um negocinho estranho numa conta. confere aí antes de corrigir 100 provas?" }
      ],
      pergunta: "Toque na linha em que o gabarito (do professor) está errado:",
      linhas: [
        "Questão: 1/2 + 1/3 = ?",
        "Passo 1: o menor múltiplo comum de 2 e 3 é 6",
        "Passo 2: 1/2 = 3/6 e 1/3 = 2/6",
        "Passo 3: 3/6 + 2/6 = 6/6 = 1"
      ],
      correta: 3,
      explicacao: "3/6 + 2/6 = 5/6, e não 6/6. Um erro no gabarito multiplicado por 100 provas prejudicaria todos os alunos. Conferir o próprio material antes de usar é parte do cuidado de quem ensina.",
      traco: "organizacao"
    },
    {
      horario: "10:20",
      titulo: "Briga no intervalo",
      urgente: true,
      cena: "👊 📱 😱",
      descricao: "Dois alunos começam a brigar no pátio por causa de um post nas redes.",
      conversa: [
        { quem: "Camila, aluna", avatar: "👧🏽", fala: "professor(a)!!! o Pedro e o Gabriel tão brigando no pátio!! 😱" },
        { quem: "Camila, aluna", avatar: "👧🏽", fala: "o pessoal tá filmando tudo! vão postar!!" }
      ],
      naVidaReal: "Mediar conflitos e casos que começam nas redes sociais faz parte do dia a dia da escola, e não só da coordenação.",
      opcoes: [
        {
          texto: "Finjo que não vi: não é minha aula, meu intervalo é curto e tem inspetor no pátio para isso.",
          reacao: "ué... ninguém vai fazer nada? 😳",
          resultado: "A briga piorou e um dos alunos se machucou. Na escola, todos os adultos são responsáveis pelos alunos.",
          pontos: {}
        },
        {
          texto: "Dou uma bronca nos dois na frente de todo mundo, para servir de exemplo e ninguém mais filmar briga.",
          reacao: "poxa, na frente de todo mundo? 😠",
          resultado: "A briga parou, mas os dois se sentiram humilhados e o conflito continuou nas redes sociais.",
          pontos: { pressao: 1, pessoas: 1 }
        },
        {
          texto: "Separo os dois, peço que guardem os celulares e levo a conversa para a coordenação.",
          reacao: "tá bom, professor(a)... a gente se calma 😮‍💨",
          resultado: "A briga parou. Com a coordenação, os dois conversaram e o vídeo foi apagado.",
          pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Chamo outro professor para me ajudar e separamos juntos.",
          reacao: "ufa, chegou ajuda! 🙌",
          resultado: "Com dois adultos, a briga terminou rápido e ninguém se machucou.",
          pontos: { pessoas: 1, pressao: 1 }
        }
      ]
    },
    {
      horario: "12:30",
      titulo: "Correndo para a outra escola",
      cena: "🚌 🍱 🕐",
      descricao: "Você dá aula em duas escolas e tem 40 minutos para almoçar e chegar à segunda.",
      conversa: [
        { quem: "Prof. Marcos, colega", avatar: "👨🏽‍🏫", fala: "vai pra outra escola agora? 😮" },
        { quem: "Prof. Marcos, colega", avatar: "👨🏽‍🏫", fala: "são 40 minutos de ônibus e você ainda nem almoçou. como você faz isso todo dia? 😅" }
      ],
      naVidaReal: "Muitos professores completam a carga horária em mais de uma escola, o que exige deslocamentos e jornadas longas.",
      opcoes: [
        {
          texto: "Penso que esse ritmo é cansativo demais e que eu não aguentaria todo dia.",
          reacao: "é mesmo cansativo... mas muita gente faz isso 😕",
          resultado: "É uma rotina puxada e comum na profissão. É importante saber disso antes de escolher.",
          pontos: {}
        },
        {
          texto: "Paro para almoçar com calma, mesmo chegando alguns minutos atrasado(a).",
          reacao: "pelo menos você almoçou direito 🍽️",
          resultado: "Você chegou mais disposto(a), mas a turma ficou sozinha no começo da aula.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Levo marmita, como no ônibus e aproveito o trajeto para revisar a aula da tarde.",
          reacao: "uau, multitarefa! 🙌",
          resultado: "Você chegou a tempo e com a aula na cabeça. Corrido, mas deu certo.",
          pontos: { organizacao: 2, pressao: 1 }
        },
        {
          texto: "Peço para sair mais cedo da primeira escola e chegar com folga à segunda.",
          reacao: "tem que combinar com a coordenação, né? 🤔",
          resultado: "A coordenação liberou apenas dessa vez, e você ainda teve que repor a aula depois.",
          pontos: { criatividade: 1, organizacao: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "ordenar",
      horario: "14:00",
      titulo: "Monte a aula",
      cena: "🧩 📋 ✏️",
      conversa: [
        { quem: "Coordenadora Sílvia", avatar: "👩🏼‍🏫", fala: "oi! pra reunião pedagógica, me mostra como você organiza uma aula 📋" },
        { quem: "Coordenadora Sílvia", avatar: "👩🏼‍🏫", fala: "coloca os passos na ordem que você acha que funciona melhor 👇" }
      ],
      pergunta: "Toque nas etapas na ordem em que uma boa aula costuma acontecer:",
      itens: [
        "Começar com uma pergunta ou desafio que desperte curiosidade",
        "Explicar o conteúdo com exemplos",
        "Propor uma atividade para os alunos praticarem",
        "Fechar revisando o que foi aprendido"
      ],
      explicacao: "Uma aula costuma funcionar melhor quando começa despertando curiosidade, passa pela explicação, abre espaço para os alunos praticarem e termina com uma revisão. Planejar assim ajuda a usar bem o tempo da turma.",
      traco: "organizacao"
    },
    {
      horario: "15:00",
      titulo: "Reunião com a família",
      urgente: true,
      cena: "😠 👩‍👧 🏫",
      descricao: "A mãe de uma aluna chega irritada à escola.",
      conversa: [
        { quem: "Dona Carmem, mãe da Lia", avatar: "👩🏽", fala: "o(a) senhor(a) é o professor(a) de matemática da Lia?" },
        { quem: "Dona Carmem, mãe da Lia", avatar: "👩🏽", fala: "minha filha tirou 3 na prova! 😠 e eu acho que o senhor(a) tá perseguindo ela" },
        { quem: "Dona Carmem, mãe da Lia", avatar: "👩🏽", fala: "quero uma explicação AGORA" }
      ],
      naVidaReal: "Conversar com as famílias, inclusive em momentos tensos, faz parte da profissão. Ter registros organizados das atividades ajuda muito nessas horas.",
      opcoes: [
        {
          texto: "Me defendo e digo que a filha dela não faz as tarefas.",
          reacao: "como é que é?! vou falar com a direção! 😡",
          resultado: "A conversa virou discussão e a mãe foi reclamar com a direção.",
          pontos: {}
        },
        {
          texto: "Peço para a coordenação participar da conversa, porque com alguém de fora a mãe se acalma mais rápido.",
          reacao: "ah, tá... então vamos conversar com a coordenadora também 😤",
          resultado: "Com a coordenação presente, a conversa ficou mais tranquila e vocês chegaram a um acordo.",
          pontos: { organizacao: 1, pessoas: 1 }
        },
        {
          texto: "Escuto sem interromper, mostro as atividades da Lia e proponho um plano de estudos.",
          reacao: "ah... eu não sabia que ela tava faltando às atividades 😔 vamos fazer esse plano, sim.",
          resultado: "A mãe se acalmou ao ver as atividades e vocês combinaram um acompanhamento semanal.",
          pontos: { pessoas: 2, organizacao: 1, pressao: 1 }
        },
        {
          texto: "Digo que vou rever a nota, só para ela ir embora.",
          reacao: "ah, que bom! eu sabia que tinha algo errado 😤",
          resultado: "Você mudou a nota sem justificativa, e outros pais passaram a pedir a mesma coisa.",
          pontos: { criatividade: 1 }
        }
      ]
    },
    {
      horario: "16:30",
      titulo: "“Eu sou burro”",
      cena: "😔 ✏️ 💡",
      descricao: "Um aluno quieto do fundo da sala diz algo que te preocupa.",
      conversa: [
        { quem: "Lucas, aluno", avatar: "🧑🏻", fala: "professor(a)... eu não entendo nada de matemática 😞" },
        { quem: "Lucas, aluno", avatar: "🧑🏻", fala: "sou burro mesmo. nem adianta explicar de novo." }
      ],
      naVidaReal: "Numa mesma turma há alunos em níveis muito diferentes. Adaptar a explicação para quem tem dificuldade, sem deixar os outros parados, é uma das habilidades mais exigidas.",
      opcoes: [
        {
          texto: "Digo que ele precisa prestar mais atenção nas aulas.",
          reacao: "é... eu sabia. não adianta mesmo. 😞",
          resultado: "Lucas se fechou ainda mais e não fez a atividade.",
          pontos: {}
        },
        {
          texto: "Peço para um colega que já entendeu ajudar o Lucas, porque às vezes um aluno explica melhor que o professor.",
          reacao: "tá bom... mas e se ele rir de mim? 😟",
          resultado: "Os dois trabalharam juntos e o Lucas avançou. Você conseguiu atender outros alunos ao mesmo tempo.",
          pontos: { organizacao: 1, criatividade: 1, logica: 1 }
        },
        {
          texto: "Sento perto dele, explico de outro jeito, com um desenho, e mostro o que ele já sabe.",
          reacao: "ahhh... então é só isso?? 😮 por que ninguém me explicou assim antes?",
          resultado: "Na terceira tentativa, ele entendeu e abriu um sorriso. Pela primeira vez, ele levantou a mão na aula.",
          pontos: { pessoas: 2, criatividade: 2 }
        },
        {
          texto: "Digo que vou chamar a família dele para uma conversa.",
          reacao: "não, por favor! minha mãe vai brigar comigo 😰",
          resultado: "O Lucas ficou com medo e se fechou ainda mais.",
          pontos: { organizacao: 1 }
        }
      ]
    },
    {
      horario: "19:30",
      titulo: "Depois do expediente",
      cena: "🏠 📖 🌙",
      descricao: "Já em casa, você ainda tem muito trabalho pela frente.",
      conversa: [
        { quem: "Mensagem da coordenação", avatar: "📲", fala: "lembrete: as notas do bimestre precisam estar no sistema até sexta 📝" },
        { quem: "Você, pensando", avatar: "🤔", fala: "120 provas pra corrigir + aula pra planejar... e já são 19h30 😮‍💨" }
      ],
      naVidaReal: "Pela lei, parte da jornada do professor deve ser reservada para planejar e corrigir. Na prática, muitos professores também fazem isso em casa.",
      opcoes: [
        {
          texto: "Deixo tudo para a última noite e corrijo de madrugada.",
          reacao: "(o relógio marca 3h da manhã)",
          resultado: "Você entregou no prazo, mas exausto(a), e não conseguiu dar um retorno com calma para os alunos.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Fico desanimado(a): não queria ter que trabalhar em casa todos os dias.",
          reacao: "(você olha para a pilha de provas e suspira)",
          resultado: "É um sentimento comum. Correção e planejamento fora do horário de aula fazem parte da rotina da maioria dos professores.",
          pontos: {}
        },
        {
          texto: "Planejo primeiro uma aula diferente, com um jogo de revisão, e deixo as provas para depois.",
          reacao: "(a aula ficou ótima! mas as provas ainda esperam...)",
          resultado: "A aula ficou ótima, mas as provas acumularam para o fim da semana.",
          pontos: { criatividade: 2, pessoas: 1 }
        },
        {
          texto: "Monto um cronograma: corrijo um pouco por dia e reaproveito ideias de aulas que deram certo.",
          reacao: "(sexta-feira) ✅ provas corrigidas, notas lançadas e aulas prontas!",
          resultado: "Na sexta, as provas estavam corrigidas e as aulas planejadas, sem virar a noite.",
          pontos: { organizacao: 2, pessoas: 1, logica: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("professor", [
  {
    horario: "07:00",
    titulo: "Todo mundo no celular",
    cena: "📱 🏫 😑",
    descricao: "Você entra na sala do 9º ano e metade da turma está no celular.",
    conversa: [
      { quem: "Davi, aluno", avatar: "👦🏽", fala: "peraí, professor(a), só terminando aqui 📱" },
      { quem: "Bia, aluna", avatar: "👧🏻", fala: "a aula de hoje vai ser chata de novo? 😴" }
    ],
    naVidaReal: "Desde 2025, uma lei federal restringe o uso de celulares nas escolas, permitindo o uso pedagógico com orientação do professor. Começar a aula com algo que desperte a curiosidade costuma funcionar melhor do que brigar.",
    opcoes: [
      {
        texto: "Recolho todos os celulares aos gritos.",
        reacao: "nossa, que estresse 🙄",
        resultado: "Os celulares saíram de cena, mas o clima da aula ficou pesado.",
        pontos: {}
      },
      {
        texto: "Espero em silêncio na frente da sala até eles perceberem e guardarem os celulares sozinhos.",
        reacao: "...gente, guarda aí que o(a) professor(a) tá esperando 😅",
        resultado: "Funcionou, mas levou dez minutos da aula.",
        pontos: { pressao: 1, organizacao: 1 }
      },
      {
        texto: "Faço uma enquete rápida no celular sobre o tema e depois peço para guardarem.",
        reacao: "68% da sala errou?? como assim?! 😮",
        resultado: "A turma ficou curiosa para descobrir a resposta certa e guardou os celulares sozinha.",
        pontos: { criatividade: 2, pessoas: 1 }
      },
      {
        texto: "Lembro a regra da escola sobre celulares, aviso que vou recolher de quem insistir e começo o conteúdo.",
        reacao: "tá bom, tá bom... 😐",
        resultado: "A turma guardou os celulares, mas sem muita vontade de prestar atenção.",
        pontos: { organizacao: 1, pessoas: 1, logica: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "08:30",
    titulo: "Corrija a redação",
    cena: "📝 🔤 🔍",
    conversa: [
      { quem: "Prof.ª Helena, coordenadora", avatar: "👩🏻‍🏫", fala: "antes de devolver as redações, confere essa aqui? 📝" },
      { quem: "Prof.ª Helena, coordenadora", avatar: "👩🏻‍🏫", fala: "tem um erro de concordância que aparece em muitas" }
    ],
    pergunta: "Toque na frase com erro de português:",
    linhas: [
      "Fazem dois anos que eu penso em ser professor.",
      "Muitos jovens escolhem a profissão sem conhecer a rotina.",
      "Por isso, é importante pesquisar antes de decidir.",
      "Conversar com profissionais da área ajuda muito.",
      "Assim, a escolha fica mais consciente."
    ],
    correta: 0,
    explicacao: "Quando indica tempo, o verbo \"fazer\" não vai para o plural: o certo é \"Faz dois anos\". É um erro muito comum, e explicar o porquê ajuda mais o aluno do que só riscar a frase.",
    traco: "organizacao"
  },
  {
    horario: "10:20",
    titulo: "Um aluno desmaiou",
    urgente: true,
    cena: "😵 🏫 🚑",
    descricao: "No meio da aula, um aluno fica pálido e desmaia na carteira.",
    conversa: [
      { quem: "Camila, aluna", avatar: "👧🏾", fala: "professor(a)!! o Pedro desmaiou!! 😱" },
      { quem: "Davi, aluno", avatar: "👦🏽", fala: "ele não tomou café hoje, falou que tava tonto 😰" }
    ],
    naVidaReal: "Professores são, muitas vezes, os primeiros a agir numa emergência. Manter a calma, deitar a pessoa com as pernas elevadas, chamar ajuda e acionar o SAMU (192) se ela não acordar logo são primeiros socorros básicos.",
    opcoes: [
      {
        texto: "Continuo a aula: deve ser só fome.",
        reacao: "ele não tá acordando!! 😱",
        resultado: "Os alunos entraram em pânico, e a coordenação chegou sem ninguém ter ajudado.",
        pontos: {}
      },
      {
        texto: "Pego o aluno no colo e corro sozinho(a) pelo corredor até a secretaria, onde tem o kit de primeiros socorros.",
        reacao: "e a turma sozinha?? 😰",
        resultado: "Ele acordou no caminho, mas a turma ficou sozinha e assustada.",
        pontos: { pressao: 1, pessoas: 1 }
      },
      {
        texto: "Deito o aluno com as pernas para cima, peço que chamem a coordenação e o SAMU se ele não acordar.",
        reacao: "ele tá acordando! 😮‍💨",
        resultado: "Ele acordou em um minuto, foi atendido e a família foi avisada. A turma se acalmou rápido.",
        pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
      },
      {
        texto: "Chamo o professor da sala ao lado e decidimos juntos o que fazer.",
        reacao: "o professor já tá vindo! 🏃",
        resultado: "Com ajuda, o aluno foi atendido, mas alguns minutos se perderam.",
        pontos: { pessoas: 1, pressao: 1 }
      }
    ]
  },
  {
    horario: "12:30",
    titulo: "120 redações para corrigir",
    cena: "📚 ⏰ ☕",
    descricao: "Você tem 50 minutos livres entre as aulas e 120 redações para devolver até sexta.",
    conversa: [
      { quem: "Prof. Marcos, colega", avatar: "👨🏽‍🏫", fala: "120 redações até sexta? haja café ☕😅" },
      { quem: "Prof. Marcos, colega", avatar: "👨🏽‍🏫", fala: "como você vai dar conta?" }
    ],
    naVidaReal: "Boa parte do trabalho do professor acontece fora da sala: planejar, corrigir e preencher registros. Organizar a correção em blocos, com critérios claros, torna esse trabalho mais justo e possível.",
    opcoes: [
      {
        texto: "Desanimo e passo o tempo no celular.",
        reacao: "eu também faço isso às vezes, viu 😅",
        resultado: "As redações acumularam, e a quinta à noite foi longa.",
        pontos: {}
      },
      {
        texto: "Tento corrigir o máximo possível hoje, bem rápido, sem ler direito, para devolver logo para a turma.",
        reacao: "cuidado pra não ser injusto(a) com a nota 🤔",
        resultado: "Você corrigiu muitas, mas os comentários ficaram vagos e alguns alunos reclamaram da nota.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Divido as redações em blocos por dia e corrijo um bloco agora, com uma grade de critérios.",
        reacao: "boa! a grade deixa tudo mais justo e rápido 👏",
        resultado: "As redações foram devolvidas na sexta, com comentários úteis para cada aluno.",
        pontos: { organizacao: 2, pressao: 1 }
      },
      {
        texto: "Crio um sistema em que os alunos corrigem as redações uns dos outros, e eu só dou a nota final no fim.",
        reacao: "ideia legal, mas a nota final é sua, hein 😉",
        resultado: "Os alunos aprenderam muito revisando, mas você ainda precisou conferir tudo.",
        pontos: { criatividade: 1, organizacao: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "ordenar",
    horario: "14:00",
    titulo: "Monte a prova",
    cena: "📝 🎯 ✅",
    conversa: [
      { quem: "Prof.ª Helena, coordenadora", avatar: "👩🏻‍🏫", fala: "a prova do bimestre fica com você 📝" },
      { quem: "Prof.ª Helena, coordenadora", avatar: "👩🏻‍🏫", fala: "me mostra como você organiza esse trabalho? 👇" }
    ],
    pergunta: "Toque nas etapas na ordem certa para preparar uma avaliação:",
    itens: [
      "Definir o que os alunos precisavam ter aprendido",
      "Escrever as questões",
      "Montar o gabarito e os critérios de correção",
      "Aplicar a prova e dar o retorno aos alunos"
    ],
    explicacao: "Uma boa avaliação começa pelo objetivo: o que se quer verificar. As questões vêm depois, junto com critérios claros de correção. O retorno aos alunos fecha o ciclo e mostra o que ainda precisa ser revisto.",
    traco: "organizacao"
  },
  {
    horario: "15:00",
    titulo: "Um relato preocupante",
    urgente: true,
    cena: "🫂 🏫 📞",
    descricao: "No fim da aula, uma aluna fica para trás e conta, chorando, que tem medo de voltar para casa por causa do padrasto.",
    conversa: [
      { quem: "Lia, aluna", avatar: "👧🏽", fala: "professor(a), posso falar uma coisa? 😢" },
      { quem: "Lia, aluna", avatar: "👧🏽", fala: "eu não queria voltar pra casa hoje... promete que não conta pra ninguém?" }
    ],
    naVidaReal: "Pelo Estatuto da Criança e do Adolescente (ECA), a escola deve comunicar ao Conselho Tutelar qualquer suspeita de maus-tratos. O professor acolhe, ouve sem pressionar, não promete segredo e leva o caso à coordenação no mesmo dia.",
    opcoes: [
      {
        texto: "Digo que isso é assunto da família, não da escola.",
        reacao: "...tá bom. esquece 😞",
        resultado: "A aluna se fechou, e ninguém soube do que estava acontecendo.",
        pontos: {}
      },
      {
        texto: "Levo ela direto para a coordenação, sem conversar antes, porque quem sabe lidar com esses casos é a equipe de lá.",
        reacao: "você vai contar pra todo mundo? 😰",
        resultado: "O caso chegou a quem precisava, mas a aluna se sentiu exposta e com medo.",
        pontos: { organizacao: 1, pessoas: 1 }
      },
      {
        texto: "Escuto sem fazer muitas perguntas, explico que não posso guardar segredo e vamos juntos à coordenação.",
        reacao: "...tá. mas você fica comigo? 🥺",
        resultado: "A coordenação acionou o Conselho Tutelar, e a aluna passou a ter acompanhamento e proteção.",
        pontos: { pessoas: 2, organizacao: 1, pressao: 1 }
      },
      {
        texto: "Prometo guardar segredo e mudo de assunto.",
        reacao: "obrigada... 😔",
        resultado: "A promessa deixou a aluna sem proteção, e o caso só apareceu meses depois.",
        pontos: { criatividade: 1 }
      }
    ]
  },
  {
    horario: "16:30",
    titulo: "A prova que não termina",
    cena: "⏳ 📄 😣",
    descricao: "Pedro, que tem TDAH, nunca consegue terminar as provas no tempo da aula, e as notas dele estão caindo.",
    conversa: [
      { quem: "Pedro, aluno", avatar: "👦🏻", fala: "eu sei a matéria, professor(a), juro... mas não consigo terminar 😣" },
      { quem: "Pedro, aluno", avatar: "👦🏻", fala: "tem muito barulho e eu me perco nas questões" }
    ],
    naVidaReal: "Alunos com TDAH e outras necessidades têm direito a adaptações nas avaliações, como mais tempo, provas divididas em partes e um ambiente com menos distrações. Adaptar não é facilitar: é medir o que o aluno realmente sabe.",
    opcoes: [
      {
        texto: "Digo que ele precisa se esforçar como todo mundo, porque na vida ninguém vai dar tempo a mais.",
        reacao: "eu me esforço... 😞",
        resultado: "As notas continuaram caindo, e o Pedro começou a achar que não era capaz.",
        pontos: {}
      },
      {
        texto: "Peço para um colega sentar do lado dele na prova, para ajudar a ler as questões e não deixar ele travar.",
        reacao: "ajuda um pouco, mas ainda me perco 😕",
        resultado: "O colega ajudou a manter o foco, mas o tempo continuou curto.",
        pontos: { organizacao: 1, criatividade: 1, logica: 1 }
      },
      {
        texto: "Proponho adaptações: prova em partes, mais tempo e um lugar mais silencioso.",
        reacao: "em partes eu consigo!! 😃",
        resultado: "Na prova seguinte, ele terminou tudo e tirou a maior nota do bimestre.",
        pontos: { pessoas: 2, criatividade: 2 }
      },
      {
        texto: "Chamo a família para uma conversa.",
        reacao: "minha mãe vai achar que é bagunça... 😟",
        resultado: "A conversa foi útil, mas nada mudou na prova seguinte.",
        pontos: { organizacao: 1 }
      }
    ]
  },
  {
    horario: "19:30",
    titulo: "Mensagens das famílias",
    cena: "📱 🌙 💬",
    descricao: "Em casa, à noite, o celular não para: famílias de alunos mandam dúvidas e reclamações pelo seu número pessoal.",
    conversa: [
      { quem: "Mensagem da mãe do Davi", avatar: "👩🏽", fala: "professor(a), qual é a tarefa de amanhã? 🤔" },
      { quem: "Mensagem do pai da Bia", avatar: "👨🏻", fala: "por que a minha filha tirou 6?? me explica agora" }
    ],
    naVidaReal: "A comunicação com as famílias é importante, mas sem limites ela invade a vida pessoal do professor. Muitas escolas usam canais oficiais, com horários de resposta combinados, e avisos semanais com as informações mais pedidas.",
    opcoes: [
      {
        texto: "Respondo tudo na hora, até meia-noite.",
        reacao: "e quando você vai descansar? 😴",
        resultado: "Você respondeu todo mundo, mas dormiu pouco e chegou exausto(a) no dia seguinte.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Fico desanimado(a): não queria ter que trabalhar em casa todos os dias.",
        reacao: "é cansativo mesmo, né... 😕",
        resultado: "As mensagens continuaram chegando, e nada mudou.",
        pontos: {}
      },
      {
        texto: "Gravo um vídeo semanal para as famílias explicando a matéria e as tarefas, e mando no grupo de cada turma toda segunda.",
        reacao: "adorei o vídeo! 😍",
        resultado: "As famílias gostaram, mas as mensagens no seu número continuaram.",
        pontos: { criatividade: 2, pessoas: 1 }
      },
      {
        texto: "Combino com a escola um canal oficial com horários de resposta e um aviso semanal com as dúvidas comuns.",
        reacao: "faz sentido, assim todo mundo sabe onde procurar 👍",
        resultado: "As mensagens noturnas quase sumiram, e as famílias ficaram mais bem informadas.",
        pontos: { organizacao: 2, pessoas: 1, logica: 1 }
      }
    ]
  }
]);
