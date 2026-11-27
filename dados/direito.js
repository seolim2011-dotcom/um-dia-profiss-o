/*
  Profissão: Direito
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "direito",
  nome: "Direito",
  icone: "⚖️",
  cor: "#0d1b3d",
  area: "sociedade",
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
    "Bacharelado em Direito (5 anos)",
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
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "bom dia, doutor(a)... desculpa o incômodo" },
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "a imobiliária mandou uma carta dizendo que vou ser despejada" },
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "eu atrasei 3 meses porque fiquei doente... eu vou perder a minha casa?" }
      ],
      naVidaReal: "Advogados lidam com pessoas em momentos difíceis. Ouvir sem prometer o impossível é uma habilidade tão importante quanto conhecer as leis.",
      opcoes: [
        {
          texto: "Prometo que vou ganhar o caso, pode ficar tranquila.",
          reacao: "ai, graças a Deus! então não preciso me preocupar mais?",
          resultado: "Meses depois, o caso teve um resultado diferente do prometido, e ela se sentiu enganada.",
          pontos: {}
        },
        {
          texto: "Passo uma lista de artigos de lei para ela entender sozinha.",
          reacao: "artigo... parágrafo... eu não entendi nada, doutor(a)",
          resultado: "Ela saiu com mais dúvidas do que quando chegou.",
          pontos: { logica: 1 }
        },
        {
          texto: "Escuto até o fim, peço os documentos e explico as opções sem prometer vitória.",
          reacao: "obrigada por me ouvir com calma... eu me sinto mais segura",
          resultado: "Com os papéis em mãos, você montou um primeiro plano e ela saiu mais tranquila e informada.",
          pontos: { pessoas: 2, organizacao: 1 }
        },
        {
          texto: "Peço para ela voltar com os documentos organizados e encerro o atendimento.",
          reacao: "ah... tá. eu volto amanhã então",
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
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "eu assino tudo sem ler, doutor(a). tem alguma coisa estranha?" }
      ],
      pergunta: "Toque na cláusula que parece abusiva e pode ser contestada:",
      linhas: [
        "Multa por atraso de 100% do valor do aluguel",
        "Aluguel mensal de R$ 1.500,00",
        "Prazo do contrato: 30 meses",
        "Reajuste anual pelo índice IGP-M",
        "Devolução do imóvel com aviso prévio de 30 dias"
      ],
      correta: 0,
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
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "doutor(a)!!! o prazo do recurso do seu Paulo vence HOJE às 18h" },
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "e o sistema do tribunal tá lento demais. o que a gente faz?" }
      ],
      naVidaReal: "Prazos processuais são rígidos: perder um prazo pode significar perder o direito de recorrer. Por isso, organização e planejamento são essenciais na advocacia.",
      opcoes: [
        {
          texto: "Deixo para mais tarde: sempre dá certo no final.",
          reacao: "se o sistema cair às 17h58, o prazo vai embora...",
          resultado: "O sistema caiu perto das 18h e o recurso quase não foi protocolado. Foi por pouco.",
          pontos: {}
        },
        {
          texto: "Escrevo um recurso perfeito de 40 páginas e protocolo às 17h59.",
          reacao: "17h59?! pelo amor de Deus, doutor(a)",
          resultado: "O recurso ficou ótimo, mas por pouco o sistema não travou na hora do envio.",
          pontos: { logica: 1, pressao: 1 }
        },
        {
          texto: "Foco no essencial, protocolo cedo e guardo o comprovante.",
          reacao: "protocolado e comprovante salvo! respirei aliviada",
          resultado: "O recurso foi enviado no meio da tarde, com folga, e o comprovante ficou arquivado no processo.",
          pontos: { organizacao: 2, pressao: 2 }
        },
        {
          texto: "Peço a um colega revisar enquanto eu finalizo, e protocolo juntos.",
          reacao: "duas cabeças pensam melhor mesmo, né? vou separar o comprovante",
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
          reacao: "então nos vemos no fórum. mas vai demorar uns 2 anos, viu?",
          resultado: "O processo seguiu devagar, e a Dona Rosa ficou meses angustiada sem saber se perderia a casa.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Aceito a primeira proposta para encerrar logo.",
          reacao: "ótimo! assina aqui então",
          resultado: "O acordo saiu rápido, mas com condições piores do que as que você poderia ter conseguido.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Fico em silêncio e deixo a cliente decidir sozinha, já que a empresa é dela.",
          reacao: "ué, o(a) colega não vai falar nada?",
          resultado: "Sem orientação, a cliente aceitou algo que não entendeu direito.",
          pontos: {}
        },
        {
          texto: "Proponho parcelar a dívida com um desconto na multa.",
          reacao: "hmm... parcelado, com desconto... isso eu consigo levar pra minha cliente",
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
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "doutor(a), organizei os prazos da semana por processo" },
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
          reacao: "doutor(a)? a audiência continua. volte aqui, por favor.",
          resultado: "A audiência foi adiada e o cliente ficou muito insatisfeito com a atitude.",
          pontos: {}
        },
        {
          texto: "Leio o texto que preparei com cuidado na noite anterior, mesmo sem responder à pergunta do juiz.",
          reacao: "isso eu já li nos autos. responda a pergunta.",
          resultado: "O juiz perdeu a paciência e pediu que você fosse direto ao ponto.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Improviso uma resposta sem olhar os documentos.",
          reacao: "hmm... isso não bate com o que está nos autos.",
          resultado: "A resposta contradisse um documento do processo e enfraqueceu a defesa.",
          pontos: { criatividade: 1, pressao: 1 }
        },
        {
          texto: "Respiro, explico a situação com fatos e menciono o acordo que o cliente propôs.",
          reacao: "entendi. isso é relevante. vou considerar na decisão.",
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
        { quem: "Seu Marcelo, cliente", avatar: "👨🏽", fala: "doutor(a), tem um e-mail que me prejudica no processo" },
        { quem: "Seu Marcelo, cliente", avatar: "👨🏽", fala: "dá pra não mostrar? ninguém vai saber... eu pago bem." }
      ],
      naVidaReal: "A ética é parte central da advocacia: um advogado não pode mentir ao juiz nem esconder provas. Quem faz isso pode perder a carteira da OAB e responder por crime.",
      opcoes: [
        {
          texto: "Faço o que ele pede: o cliente manda.",
          reacao: "que bom que o(a) senhor(a) entende o jeito das coisas",
          resultado: "Meses depois, a omissão foi descoberta e você respondeu a um processo ético.",
          pontos: {}
        },
        {
          texto: "Recuso e encerro o atendimento sem explicar.",
          reacao: "ué, por que tá me tratando assim?!",
          resultado: "O cliente saiu irritado sem entender o motivo, e você perdeu um cliente que poderia ser orientado.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Peço um tempo, estudo o caso e volto com alternativas legais.",
          reacao: "tá bom, eu aguardo. mas não demore",
          resultado: "Você descobriu uma estratégia legal de defesa que reduziu o impacto do e-mail.",
          pontos: { organizacao: 1, logica: 1 }
        },
        {
          texto: "Explico que mentir ao juiz é crime e proponho outra estratégia de defesa.",
          reacao: "poxa... então não tem jeito, né. e qual a outra estratégia?",
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
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "doutor(a), tá saindo? a mesa tá um caos" },
        { quem: "Lena, secretária", avatar: "👩🏻‍💼", fala: "tem 14 processos novos pra cadastrar e eu já tô de saída..." }
      ],
      naVidaReal: "Um escritório de advocacia lida com dezenas ou centenas de processos ao mesmo tempo. Sem um sistema de controle, os prazos escapam.",
      opcoes: [
        {
          texto: "Deixo tudo para amanhã: estou cansado(a).",
          reacao: "tá... mas amanhã de manhã tem 2 prazos novos",
          resultado: "No dia seguinte, você descobriu um prazo que venceria em poucas horas.",
          pontos: {}
        },
        {
          texto: "Resolvo só o que parece mais interessante.",
          reacao: "e os outros? deixou de lado?",
          resultado: "Dois processos importantes ficaram esquecidos na pilha.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Peço ao estagiário para organizar tudo, sem conferir depois.",
          reacao: "ele ainda tá aprendendo, viu?",
          resultado: "O estagiário cometeu dois erros de cadastro de prazo, que só foram notados depois.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Cadastro os prazos na agenda, separo por urgência e deixo tudo registrado.",
          reacao: "perfeito! amanhã é só abrir a agenda e seguir",
          resultado: "No dia seguinte, o escritório começou organizado e nenhum prazo escapou.",
          pontos: { organizacao: 2, logica: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("direito", [
  {
    horario: "08:30",
    titulo: "Demitido sem receber",
    cena: "💼 📄 😔",
    descricao: "Um homem foi demitido depois de oito anos numa empresa e não recebeu nada do que tinha direito.",
    conversa: [
      { quem: "Seu Valdomiro, cliente", avatar: "👨🏿", fala: "oito anos lá dentro e me mandaram embora com uma mão na frente e outra atrás" },
      { quem: "Seu Valdomiro, cliente", avatar: "👨🏿", fala: "tenho três filhos. eu vou receber alguma coisa?" }
    ],
    naVidaReal: "Na advocacia trabalhista, o primeiro atendimento é para ouvir e reunir provas: carteira de trabalho, holerites, mensagens. Advogados não podem prometer resultado, mas devem explicar os caminhos e o tempo provável do processo.",
    opcoes: [
      {
        texto: "Prometo que ele vai receber tudo, e em dobro.",
        reacao: "em dobro?? graças a Deus!",
        resultado: "O processo terminou num acordo bem menor, e o cliente se sentiu enganado.",
        pontos: {}
      },
      {
        texto: "Explico os artigos da CLT, com termos técnicos.",
        reacao: "desculpa, não entendi nada...",
        resultado: "A explicação estava certa, mas o cliente saiu sem saber o que fazer.",
        pontos: { logica: 1 }
      },
      {
        texto: "Escuto até o fim, peço carteira, holerites e mensagens e explico os passos do processo.",
        reacao: "agora eu entendi o caminho. tenho tudo guardado em casa",
        resultado: "Com as provas organizadas, o caso terminou num acordo justo em poucos meses.",
        pontos: { pessoas: 2, organizacao: 1 }
      },
      {
        texto: "Peço que ele volte outro dia com todos os documentos organizados, para não perdermos tempo, e encerro o atendimento.",
        reacao: "tá... eu volto",
        resultado: "Ele demorou semanas para voltar, e uma prova importante se perdeu no caminho.",
        pontos: { organizacao: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "09:45",
    titulo: "Garantia em dobro",
    cena: "🏠 📑 🔍",
    conversa: [
      { quem: "Dra. Regina, sócia do escritório", avatar: "👩🏻‍💼", fala: "revisa esse contrato de aluguel pro nosso cliente inquilino?" },
      { quem: "Dra. Regina, sócia do escritório", avatar: "👩🏻‍💼", fala: "tem uma cláusula que a Lei do Inquilinato não permite" }
    ],
    pergunta: "Toque na cláusula proibida pela Lei do Inquilinato:",
    linhas: [
      "Prazo do contrato: 30 meses",
      "Garantias: fiador e, também, depósito caução de 3 aluguéis",
      "Aluguel: R$ 1.500,00 por mês",
      "Reajuste uma vez por ano, pelo índice combinado",
      "Pintura do imóvel por conta do inquilino na saída, se ele tiver estragado"
    ],
    correta: 1,
    explicacao: "A Lei do Inquilinato (Lei 8.245/1991) proíbe exigir mais de uma garantia no mesmo contrato: ou fiador, ou caução, ou seguro-fiança. Cobrar fiador e caução ao mesmo tempo é irregular.",
    traco: "logica"
  },
  {
    horario: "11:00",
    titulo: "Preso por engano",
    urgente: true,
    cena: "🚔 🪪 ⏳",
    descricao: "A mãe de um jovem liga desesperada: ele foi preso no lugar de outra pessoa com o mesmo nome.",
    conversa: [
      { quem: "Dona Célia, mãe do cliente", avatar: "👩🏾", fala: "prenderam meu filho! disseram que tinha um mandado no nome dele" },
      { quem: "Dona Célia, mãe do cliente", avatar: "👩🏾", fala: "mas é OUTRO Lucas Ferreira, de outra cidade! ele nunca fez nada!" }
    ],
    naVidaReal: "Prisões de pessoas com o mesmo nome (homônimos) acontecem. O advogado reúne documentos que provam o engano, como RG, CPF e nome dos pais, e pede a soltura com urgência ao juiz, inclusive em plantão.",
    opcoes: [
      {
        texto: "Digo para a família esperar até segunda-feira, quando o fórum abre e o processo anda mais rápido.",
        reacao: "ele vai passar o fim de semana preso??",
        resultado: "O jovem passou três dias preso por engano.",
        pontos: {}
      },
      {
        texto: "Escrevo uma petição longa e completa, com todas as teses possíveis, mesmo que leve a tarde toda.",
        reacao: "e enquanto isso?",
        resultado: "O pedido ficou bem fundamentado, mas saiu tarde, e ele dormiu na cela.",
        pontos: { logica: 1, pressao: 1 }
      },
      {
        texto: "Junto os documentos que provam o engano e peço a soltura ao juiz de plantão.",
        reacao: "o juiz mandou soltar!!",
        resultado: "Com as provas claras, ele foi solto no mesmo dia.",
        pontos: { organizacao: 2, pressao: 2 }
      },
      {
        texto: "Chamo um colega criminalista e fazemos o pedido juntos.",
        reacao: "dois advogados no caso!",
        resultado: "O pedido saiu à noite, bem feito, e ele foi solto no dia seguinte cedo.",
        pontos: { pessoas: 1, organizacao: 1, pressao: 1 }
      }
    ]
  },
  {
    horario: "13:30",
    titulo: "Com quem fica a criança?",
    cena: "👧 🏠 🤝",
    descricao: "Reunião com um casal que está se separando e com o advogado da outra parte. O ponto difícil é a guarda da filha de 7 anos.",
    conversa: [
      { quem: "Dr. Henrique, advogado da outra parte", avatar: "👨🏻‍💼", fala: "minha cliente quer a guarda só pra ela" },
      { quem: "Marcos, seu cliente", avatar: "👨🏽", fala: "eu não aceito ver minha filha só a cada 15 dias!" }
    ],
    naVidaReal: "No Brasil, a guarda compartilhada é a regra quando os dois pais têm condições. Advogados de família buscam acordos que coloquem o interesse da criança em primeiro lugar, muitas vezes com ajuda de mediação.",
    opcoes: [
      {
        texto: "Recuso qualquer conversa e levo tudo direto para o juiz, que vai decidir de forma imparcial o melhor para a criança.",
        reacao: "então vai demorar anos",
        resultado: "O processo se arrastou, e a criança ficou no meio da briga.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Aceito a primeira proposta da outra parte para encerrar logo e poupar a criança de um processo longo.",
        reacao: "você não me defendeu!",
        resultado: "O acordo saiu rápido, mas seu cliente se sentiu traído.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Deixo os dois discutirem sozinhos na reunião.",
        reacao: "isso tá virando gritaria...",
        resultado: "A reunião terminou sem acordo e com mais mágoa.",
        pontos: {}
      },
      {
        texto: "Proponho guarda compartilhada com um calendário que respeita a rotina escolar da filha.",
        reacao: "...é, a escola dela fica perto de nós dois. dá pra fazer",
        resultado: "O acordo foi assinado, e a filha passou a conviver bem com os dois.",
        pontos: { criatividade: 2, pessoas: 1, logica: 1, organizacao: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "15:00",
    titulo: "Onde entrar com a ação?",
    cena: "⚖️ 🧊 🏛️",
    conversa: [
      { quem: "Lena, secretária", avatar: "👩🏽‍💼", fala: "uma senhora ligou: a loja não entregou a geladeira dela" },
      { quem: "Lena, secretária", avatar: "👩🏽‍💼", fala: "são 3 mil reais e ela não tem dinheiro pra advogado. onde ela pode ir?" }
    ],
    pergunta: "Onde uma pessoa pode cobrar R$ 3.000 de uma loja, mesmo sem advogado?",
    alternativas: [
      "No Supremo Tribunal Federal",
      "No Juizado Especial Cível",
      "Na Justiça do Trabalho",
      "No Tribunal do Júri"
    ],
    correta: 1,
    explicacao: "O Juizado Especial Cível (o antigo \"pequenas causas\") julga casos simples de até 40 salários mínimos. Em causas de até 20 salários mínimos, a pessoa pode entrar sem advogado. Conhecer o caminho certo economiza tempo e dinheiro.",
    traco: "logica"
  },
  {
    horario: "16:15",
    titulo: "A testemunha mudou a história",
    urgente: true,
    cena: "🧑‍⚖️ 🗣️ 📄",
    descricao: "Na audiência, a principal testemunha do seu cliente conta uma versão diferente da que contou antes.",
    conversa: [
      { quem: "Juiz Dr. Fábio", avatar: "👨🏻‍⚖️", fala: "doutor(a), deseja fazer alguma pergunta à testemunha?" },
      { quem: "Testemunha", avatar: "🧔🏻", fala: "...é, pensando bem, acho que eu não vi direito o acidente" }
    ],
    naVidaReal: "Audiências têm surpresas. Advogados preparados conhecem os depoimentos anteriores e sabem mostrar contradições com calma, pedindo que fiquem registradas na ata.",
    opcoes: [
      {
        texto: "Fico sem reação e digo que não tenho perguntas.",
        reacao: "então está encerrado.",
        resultado: "A contradição passou despercebida, e o cliente perdeu a principal prova.",
        pontos: {}
      },
      {
        texto: "Leio as perguntas que preparei antes, sem tocar na mudança, para não perder o fio da minha estratégia.",
        reacao: "a testemunha já respondeu isso de outro jeito...",
        resultado: "As perguntas não ajudaram a entender a mudança de versão.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Improviso e acuso a testemunha de estar mentindo.",
        reacao: "doutor(a), mantenha o respeito na audiência",
        resultado: "O juiz chamou sua atenção, e a acusação sem provas pesou contra você.",
        pontos: { criatividade: 1, pressao: 1 }
      },
      {
        texto: "Mostro ao juiz o depoimento anterior e peço que a contradição fique registrada.",
        reacao: "registre-se em ata a divergência.",
        resultado: "A contradição ficou registrada e enfraqueceu a nova versão da testemunha.",
        pontos: { pressao: 2, logica: 1, pessoas: 1, organizacao: 1 }
      }
    ]
  },
  {
    horario: "17:30",
    titulo: "Um processo sem chance",
    cena: "😤 🏡 ⚖️",
    descricao: "Um cliente quer processar o vizinho porque \"ele olha torto\" e não cumprimenta.",
    conversa: [
      { quem: "Seu Osvaldo, cliente", avatar: "👴🏻", fala: "quero processar meu vizinho! ele me olha torto todo dia" },
      { quem: "Seu Osvaldo, cliente", avatar: "👴🏻", fala: "pago o que for preciso!" }
    ],
    naVidaReal: "O advogado tem o dever ético de orientar com honestidade, inclusive quando a resposta é que não vale a pena processar. Conflitos de vizinhança muitas vezes se resolvem melhor com conversa ou mediação.",
    opcoes: [
      {
        texto: "Aceito o caso e cobro os honorários.",
        reacao: "isso! vamos acabar com ele!",
        resultado: "O processo foi negado logo no início, e o cliente perdeu dinheiro.",
        pontos: {}
      },
      {
        texto: "Recuso e encerro o atendimento, sem explicar.",
        reacao: "vou procurar outro advogado então",
        resultado: "Outro advogado aceitou o caso, e o resultado foi o mesmo.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Peço um tempo para estudar o caso com cuidado, procurando alguma brecha na lei, e volto com uma resposta.",
        reacao: "tá bom, fico esperando",
        resultado: "A resposta veio certa, mas só uma semana depois.",
        pontos: { organizacao: 1, logica: 1 }
      },
      {
        texto: "Explico que não há base legal, mostro o custo e o risco de perder e sugiro uma mediação.",
        reacao: "...é, talvez eu só precise conversar com ele mesmo",
        resultado: "A mediação resolveu o mal-estar, e o cliente voltou ao escritório em outro caso.",
        pontos: { logica: 2, pessoas: 1, criatividade: 1, organizacao: 1 }
      }
    ]
  },
  {
    horario: "18:30",
    titulo: "Caixa de entrada lotada",
    cena: "📧 📅 🌙",
    descricao: "No fim do dia, chegaram 37 e-mails, entre intimações do tribunal e mensagens de clientes.",
    conversa: [
      { quem: "Lena, secretária", avatar: "👩🏽‍💼", fala: "chegaram três intimações novas pelo sistema do tribunal" },
      { quem: "Lena, secretária", avatar: "👩🏽‍💼", fala: "e os clientes tão mandando mensagem também. organiza antes de ir?" }
    ],
    naVidaReal: "Intimações abrem prazos que não esperam. Escritórios usam agendas de prazos e sistemas de controle para não perder nenhum, porque um prazo perdido pode significar perder o caso do cliente.",
    opcoes: [
      {
        texto: "Deixo tudo para amanhã: estou cansado(a).",
        reacao: "uma das intimações tem prazo curto, hein",
        resultado: "Um prazo curto quase passou despercebido.",
        pontos: {}
      },
      {
        texto: "Respondo primeiro as mensagens mais interessantes e deixo as burocráticas para o fim da semana.",
        reacao: "e as intimações?",
        resultado: "Os e-mails chatos ficaram para trás, inclusive uma intimação.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Peço para o estagiário cuidar de tudo, sem conferir depois: ele precisa aprender e eu preciso de tempo.",
        reacao: "ele cadastrou um prazo com a data errada",
        resultado: "Por pouco um prazo não foi perdido.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Cadastro os prazos novos na agenda e respondo primeiro o que vence antes.",
        reacao: "perfeito, amanhã a gente começa pelo prazo mais curto",
        resultado: "Nenhum prazo ficou de fora, e o dia seguinte começou organizado.",
        pontos: { organizacao: 2, logica: 1 }
      }
    ]
  }
]);
