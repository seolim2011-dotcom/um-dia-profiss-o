/*
  Profissão: Professor(a)
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "professor",
  nome: "Professor(a)",
  icone: "📚",
  cor: "#4d7c0f",
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
    "Licenciatura na disciplina que você quer ensinar (Matemática, Letras, História, Biologia...) — cerca de 4 anos",
    "Pedagogia, para educação infantil e anos iniciais do ensino fundamental — cerca de 4 anos",
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
          texto: "Finjo que não vi: não é minha aula e meu intervalo é curto.",
          reacao: "ué... ninguém vai fazer nada? 😳",
          resultado: "A briga piorou e um dos alunos se machucou. Na escola, todos os adultos são responsáveis pelos alunos.",
          pontos: {}
        },
        {
          texto: "Dou uma bronca nos dois na frente de todo mundo, para servir de exemplo.",
          reacao: "poxa, na frente de todo mundo? 😠",
          resultado: "A briga parou, mas os dois se sentiram humilhados e o conflito continuou nas redes sociais.",
          pontos: { pressao: 1, pessoas: 1 }
        },
        {
          texto: "Separo os dois com calma, peço que guardem os celulares e levo a conversa para a coordenação.",
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
          texto: "Peço para a coordenação participar da conversa.",
          reacao: "ah, tá... então vamos conversar com a coordenadora também 😤",
          resultado: "Com a coordenação presente, a conversa ficou mais tranquila e vocês chegaram a um acordo.",
          pontos: { organizacao: 1, pessoas: 1 }
        },
        {
          texto: "Escuto sem interromper, mostro as atividades da Lia e proponho um plano de estudos juntos.",
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
          texto: "Peço para um colega que já entendeu ajudar o Lucas.",
          reacao: "tá bom... mas e se ele rir de mim? 😟",
          resultado: "Os dois trabalharam juntos e o Lucas avançou. Você conseguiu atender outros alunos ao mesmo tempo.",
          pontos: { organizacao: 1, criatividade: 1, logica: 1 }
        },
        {
          texto: "Sento perto dele, explico de outro jeito, com um desenho, e mostro o que ele já sabe fazer.",
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
