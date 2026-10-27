/*
  Profissão: Direito
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "direito",
  nome: "Direito",
  icone: "⚖️",
  cor: "#312e81",
  resumo: "Defender pessoas e empresas, orientar sobre leis e resolver conflitos dentro e fora dos tribunais.",

  perfil: {
    pessoas: {
      peso: 4,
      gostar: "Defender pessoas e ajudar a resolver conflitos de verdade.",
      dificil: "Lidar com clientes aflitos, partes brigando e histórias de injustiça."
    },
    logica: {
      peso: 4,
      gostar: "Montar argumentos sólidos, ligando fatos e leis.",
      dificil: "Ler muito: leis longas, contratos e textos difíceis todos os dias."
    },
    pressao: {
      peso: 3,
      gostar: "A adrenalina de uma audiência e de um prazo cumprido.",
      dificil: "Prazos que não perdoam: perder um prazo pode prejudicar o cliente."
    },
    organizacao: {
      peso: 5,
      gostar: "Processos organizados, prazos em dia e documentos no lugar.",
      dificil: "Muita burocracia, papelada e processos que andam devagar."
    },
    criatividade: {
      peso: 3,
      gostar: "Achar uma tese nova e um jeito diferente de defender o cliente.",
      dificil: "A lei limita: nem sempre dá para fazer do jeito que parece mais justo."
    }
  },

  cursos: [
    "Bacharelado em Direito — 5 anos",
    "Exame da OAB para poder advogar",
    "Concursos públicos para carreiras como juiz, promotor, delegado e defensor"
  ],

  situacoes: [
    {
      horario: "08:30",
      titulo: "Cliente aflita",
      cena: "🏠 😟 📄",
      descricao: "Chega ao escritório uma cliente com uma pasta cheia de papéis e os olhos vermelhos.",
      conversa: [
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "bom dia, doutor(a)... desculpa o incômodo 😔" },
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "a imobiliária mandou uma carta dizendo que vou ser despejada" },
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "eu atrasei 3 meses porque fiquei doente... eu vou perder a minha casa?" }
      ],
      naVidaReal: "Advogados lidam com pessoas em momentos difíceis. Ouvir sem prometer o impossível é uma habilidade tão importante quanto conhecer as leis.",
      opcoes: [
        {
          texto: "Prometo que vou ganhar o caso, pode ficar tranquila.",
          reacao: "ai, graças a Deus! então não preciso me preocupar mais? 🙏",
          resultado: "Meses depois, o caso teve um resultado diferente do prometido, e ela se sentiu enganada.",
          pontos: {}
        },
        {
          texto: "Passo uma lista de artigos de lei para ela entender sozinha.",
          reacao: "artigo... parágrafo... eu não entendi nada, doutor(a) 😕",
          resultado: "Ela saiu com mais dúvidas do que quando chegou.",
          pontos: { logica: 1 }
        },
        {
          texto: "Escuto até o fim, peço os documentos e explico as opções sem prometer vitória.",
          reacao: "obrigada por me ouvir com calma... eu me sinto mais segura 💛",
          resultado: "Com os papéis em mãos, você montou um primeiro plano e ela saiu mais tranquila e informada.",
          pontos: { pessoas: 2, organizacao: 1 }
        },
        {
          texto: "Peço para ela voltar com os documentos organizados e encerro o atendimento.",
          reacao: "ah... tá. eu volto amanhã então 😞",
          resultado: "Você ganhou tempo, mas ela saiu sentindo que não tinha sido acolhida.",
          pontos: { organizacao: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "09:45",
      titulo: "Cláusula abusiva",
      cena: "📑 🔍 ⚠️",
      conversa: [
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "esse é o contrato de aluguel que eu assinei..." },
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "eu assino tudo sem ler, doutor(a) 🙈 tem alguma coisa estranha?" }
      ],
      pergunta: "Toque na cláusula que parece abusiva e pode ser contestada:",
      linhas: [
        "Aluguel mensal de R$ 1.500,00",
        "Prazo do contrato: 30 meses",
        "Reajuste anual pelo índice IGP-M",
        "Multa por atraso de 100% do valor do aluguel",
        "Devolução do imóvel com aviso prévio de 30 dias"
      ],
      correta: 3,
      explicacao: "Uma multa de 100% sobre o aluguel por atraso é desproporcional, e um juiz pode reduzi-la ou anulá-la. Ler contratos com atenção e achar esse tipo de cláusula é o dia a dia de quem atua com Direito.",
      traco: "logica"
    },
    {
      horario: "11:00",
      titulo: "Prazo acabando",
      urgente: true,
      cena: "⏰ 💻 📄",
      descricao: "A secretária entra no escritório com cara de preocupada.",
      conversa: [
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "doutor(a)!!! o prazo do recurso do seu Paulo vence HOJE às 18h 😱" },
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "e o sistema do tribunal tá lento demais. o que a gente faz?" }
      ],
      naVidaReal: "Prazos processuais são rígidos: perder um prazo pode significar perder o direito de recorrer. Por isso, organização e planejamento são essenciais na advocacia.",
      opcoes: [
        {
          texto: "Deixo para mais tarde: sempre dá certo no final.",
          reacao: "se o sistema cair às 17h58, o prazo vai embora... 😰",
          resultado: "O sistema caiu perto das 18h e o recurso quase não foi protocolado. Foi por pouco.",
          pontos: {}
        },
        {
          texto: "Escrevo um recurso perfeito de 40 páginas e protocolo às 17h59.",
          reacao: "17h59?! pelo amor de Deus, doutor(a) 😰",
          resultado: "O recurso ficou ótimo, mas por pouco o sistema não travou na hora do envio.",
          pontos: { logica: 1, pressao: 1 }
        },
        {
          texto: "Foco no essencial, protocolo cedo e guardo o comprovante.",
          reacao: "protocolado e comprovante salvo! respirei aliviada 😮‍💨",
          resultado: "O recurso foi enviado no meio da tarde, com folga, e o comprovante ficou arquivado no processo.",
          pontos: { organizacao: 2, pressao: 2 }
        },
        {
          texto: "Peço a um colega revisar enquanto eu finalizo, e protocolo juntos.",
          reacao: "duas cabeças pensam melhor mesmo, né? vou separar o comprovante 👍",
          resultado: "A revisão pegou um erro de digitação importante e o envio saiu a tempo.",
          pontos: { pessoas: 1, organizacao: 1, pressao: 1 }
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "Reunião de acordo",
      cena: "🤝 🏠 💬",
      descricao: "Você se reúne com o advogado da imobiliária para tentar um acordo para a Dona Rosa.",
      conversa: [
        { quem: "Dr. Henrique, advogado da imobiliária", avatar: "👨🏻‍💼", fala: "boa tarde, colega. vou ser direto: minha cliente quer o dinheiro dos 3 meses de aluguel" },
        { quem: "Dr. Henrique, advogado da imobiliária", avatar: "👨🏻‍💼", fala: "e quer a casa de volta. se não, vamos pra audiência. sua proposta?" }
      ],
      naVidaReal: "A maioria dos conflitos termina em acordo, e não numa sentença. Negociar bem evita meses ou anos de processo para todo mundo.",
      opcoes: [
        {
          texto: "Recuso qualquer acordo e sigo direto para a audiência.",
          reacao: "então nos vemos no fórum. mas vai demorar uns 2 anos, viu? 😬",
          resultado: "O processo seguiu devagar, e a Dona Rosa ficou meses angustiada sem saber se perderia a casa.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Aceito a primeira proposta para encerrar logo.",
          reacao: "ótimo! assina aqui então 😄",
          resultado: "O acordo saiu rápido, mas com condições piores do que as que você poderia ter conseguido.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Fico em silêncio e deixo a cliente decidir sozinha.",
          reacao: "ué, o(a) colega não vai falar nada? 🤔",
          resultado: "Sem orientação, a cliente aceitou algo que não entendeu direito.",
          pontos: {}
        },
        {
          texto: "Proponho parcelar a dívida com um desconto na multa, um acordo bom para os dois lados.",
          reacao: "hmm... parcelado, com desconto... isso eu consigo levar pra minha cliente 🤝",
          resultado: "O acordo foi fechado: a Dona Rosa paga em 6 parcelas e continua na casa.",
          pontos: { criatividade: 2, pessoas: 1, logica: 1, organizacao: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "15:00",
      titulo: "Qual prazo vence primeiro?",
      cena: "📅 ⏳ 🗂️",
      conversa: [
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "doutor(a), organizei os prazos da semana por processo 📋" },
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "olha quantos dias faltam pra cada um" }
      ],
      pergunta: "Qual processo exige ação primeiro?",
      grafico: [
        { rotulo: "Proc. A", valor: 12 },
        { rotulo: "Proc. B", valor: 2 },
        { rotulo: "Proc. C", valor: 7 },
        { rotulo: "Proc. D", valor: 20 }
      ],
      unidade: "dias",
      alternativas: ["Processo A", "Processo B", "Processo C", "Processo D"],
      correta: 1,
      explicacao: "O Processo B vence em apenas 2 dias, o menor prazo. Ordenar tarefas pelo que vence primeiro é a base da organização no Direito, onde um prazo perdido pode causar prejuízo ao cliente.",
      traco: "organizacao"
    },
    {
      horario: "16:15",
      titulo: "Audiência",
      urgente: true,
      cena: "🏛️ 👨‍⚖️ 🎤",
      descricao: "Chega a hora da audiência. A sala está cheia e o juiz olha direto para você.",
      conversa: [
        { quem: "Juiz Dr. Fábio", avatar: "👨🏿‍⚖️", fala: "doutor(a), o seu cliente não pagou nos últimos três meses. o senhor pode explicar por quê?" },
        { quem: "Juiz Dr. Fábio", avatar: "👨🏿‍⚖️", fala: "a palavra é sua." }
      ],
      naVidaReal: "Na audiência não há muito tempo para pensar: é preciso responder com segurança, com base nos fatos e nos documentos do processo.",
      opcoes: [
        {
          texto: "Peço desculpas e saio da sala sem responder.",
          reacao: "doutor(a)? a audiência continua. volte aqui, por favor. 😤",
          resultado: "A audiência foi adiada e o cliente ficou muito insatisfeito com a atitude.",
          pontos: {}
        },
        {
          texto: "Leio o texto que preparei, mesmo sem responder à pergunta.",
          reacao: "isso eu já li nos autos. responda a pergunta. 😑",
          resultado: "O juiz perdeu a paciência e pediu que você fosse direto ao ponto.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Improviso uma resposta sem olhar os documentos.",
          reacao: "hmm... isso não bate com o que está nos autos. 🤨",
          resultado: "A resposta contradisse um documento do processo e enfraqueceu a defesa.",
          pontos: { criatividade: 1, pressao: 1 }
        },
        {
          texto: "Respiro, explico a situação com fatos e menciono o acordo que o cliente propôs.",
          reacao: "entendi. isso é relevante. vou considerar na decisão. 👍",
          resultado: "O juiz levou em conta o acordo proposto e a audiência terminou de forma favorável.",
          pontos: { pressao: 2, logica: 1, pessoas: 1, organizacao: 1 }
        }
      ]
    },
    {
      horario: "17:30",
      titulo: "O cliente quer esconder um documento",
      cena: "🙈 📂 ⚖️",
      descricao: "Um cliente pede que você omita uma prova desfavorável do processo.",
      conversa: [
        { quem: "Seu Marcelo, cliente", avatar: "👨🏽", fala: "doutor(a), tem um e-mail que me prejudica no processo 😬" },
        { quem: "Seu Marcelo, cliente", avatar: "👨🏽", fala: "dá pra não mostrar? ninguém vai saber... eu pago bem." }
      ],
      naVidaReal: "A ética é parte central da advocacia: um advogado não pode mentir ao juiz nem esconder provas. Quem faz isso pode perder a carteira da OAB e responder por crime.",
      opcoes: [
        {
          texto: "Faço o que ele pede: o cliente manda.",
          reacao: "que bom que o(a) senhor(a) entende o jeito das coisas 😏",
          resultado: "Meses depois, a omissão foi descoberta e você respondeu a um processo ético.",
          pontos: {}
        },
        {
          texto: "Recuso e encerro o atendimento sem explicar.",
          reacao: "ué, por que tá me tratando assim?! 😠",
          resultado: "O cliente saiu irritado sem entender o motivo, e você perdeu um cliente que poderia ser orientado.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Peço um tempo, estudo o caso e volto com alternativas legais.",
          reacao: "tá bom, eu aguardo. mas não demore 😅",
          resultado: "Você descobriu uma estratégia legal de defesa que reduziu o impacto do e-mail.",
          pontos: { organizacao: 1, logica: 1 }
        },
        {
          texto: "Explico que mentir ao juiz é crime e proponho outra estratégia de defesa.",
          reacao: "poxa... então não tem jeito, né. e qual a outra estratégia? 🤔",
          resultado: "O cliente entendeu os riscos e aceitou a estratégia alternativa, que se mostrou mais segura.",
          pontos: { logica: 2, pessoas: 1, criatividade: 1, organizacao: 1 }
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "Pilha de processos",
      cena: "🗂️ 🌙 😮‍💨",
      descricao: "Fim do dia. Sua mesa está cheia de processos e post-its.",
      conversa: [
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "doutor(a), tá saindo? a mesa tá um caos 😅" },
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "tem 14 processos novos pra cadastrar e eu já tô de saída..." }
      ],
      naVidaReal: "Um escritório de advocacia lida com dezenas ou centenas de processos ao mesmo tempo. Sem um sistema de controle, os prazos escapam.",
      opcoes: [
        {
          texto: "Deixo tudo para amanhã: estou cansado(a).",
          reacao: "tá... mas amanhã de manhã tem 2 prazos novos 😬",
          resultado: "No dia seguinte, você descobriu um prazo que venceria em poucas horas.",
          pontos: {}
        },
        {
          texto: "Resolvo só o que parece mais interessante.",
          reacao: "e os outros? deixou de lado? 🤔",
          resultado: "Dois processos importantes ficaram esquecidos na pilha.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Peço ao estagiário para organizar tudo, sem conferir depois.",
          reacao: "ele ainda tá aprendendo, viu? 😬",
          resultado: "O estagiário cometeu dois erros de cadastro de prazo, que só foram notados depois.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Cadastro os prazos na agenda, separo por urgência e deixo tudo registrado.",
          reacao: "perfeito! amanhã é só abrir a agenda e seguir 🙌",
          resultado: "No dia seguinte, o escritório começou organizado e nenhum prazo escapou.",
          pontos: { organizacao: 2, logica: 1 }
        }
      ]
    }
  ]
});
