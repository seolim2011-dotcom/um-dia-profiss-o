/*
  Profissão: Engenharia Civil
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "engenharia-civil",
  nome: "Engenharia Civil",
  icone: "🏗️",
  cor: "#2747d6",
  area: "tecnologia",
  resumo: "Planejar e acompanhar a construção de casas, prédios, pontes e estradas, com segurança e dentro do orçamento.",

  perfil: {
    pessoas: {
      peso: 3,
      gostar: "Liderar uma equipe de obra e ver o projeto virar realidade.",
      dificil: "Negociar com clientes, fornecedores e operários, cada um com uma opinião."
    },
    logica: {
      peso: 5,
      gostar: "Cálculos, projetos e a satisfação de ver uma estrutura de pé.",
      dificil: "Muita matemática e física na graduação, e um erro de cálculo é muito sério."
    },
    pressao: {
      peso: 4,
      gostar: "Resolver imprevistos da obra e entregar no prazo.",
      dificil: "Prazos, chuva, atraso de material e responsabilidade pela segurança de pessoas."
    },
    organizacao: {
      peso: 4,
      gostar: "Cronogramas, orçamentos e obra funcionando como um relógio.",
      dificil: "Muita documentação, licenças, medições e controle de custos."
    },
    criatividade: {
      peso: 3,
      gostar: "Achar soluções para terrenos difíceis e economizar sem perder segurança.",
      dificil: "As normas técnicas limitam o que é permitido, mesmo quando a ideia é boa."
    }
  },

  cursos: [
    "Bacharelado em Engenharia Civil (5 anos)",
    "Registro no CREA para assinar projetos e obras",
    "Técnico em Edificações (cerca de 2 anos, para atuar no apoio às obras)"
  ],

  situacoes: [
    {
      horario: "07:00",
      titulo: "Dia de concretagem",
      cena: "🏗️ 🌧️ 🚚",
      descricao: "Você chega à obra e o céu está fechando. Hoje é dia de concretar a laje.",
      conversa: [
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "bom dia, doutor(a)! o caminhão de concreto já tá na porta 🚚" },
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "mas olha esse céu... vai chover daqui a pouco ☁️" },
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "o que a gente faz?" }
      ],
      naVidaReal: "A chuva pode atrapalhar uma concretagem e comprometer a qualidade da laje. Decidir rápido e reorganizar o cronograma faz parte do trabalho de quem cuida da obra.",
      opcoes: [
        {
          texto: "Concreta mesmo assim: chuva é frescura.",
          reacao: "ih... a água vai estragar a mistura, doutor(a) 😰",
          resultado: "A chuva forte alterou a mistura e parte da laje precisou ser refeita, com prejuízo de tempo e dinheiro.",
          pontos: {}
        },
        {
          texto: "Cubro a área com lona e acompanho a chuva decidindo a cada meia hora.",
          reacao: "lona? boa ideia! vou chamar o pessoal 💪",
          resultado: "A improvisação deu certo por algumas horas, mas a obra ficou à mercê do tempo.",
          pontos: { criatividade: 1, pressao: 1 }
        },
        {
          texto: "Cancelo a obra do dia inteira sem avisar ninguém.",
          reacao: "ué, mas a gente combinou com o caminhão... 😕",
          resultado: "O caminhão foi embora sem aviso, e a empresa pagou uma multa de cancelamento.",
          pontos: {}
        },
        {
          texto: "Reviso o cronograma, remarco a concretagem para outro horário e aviso todos.",
          reacao: "boa! vou avisar o motorista e o pessoal agora 📞",
          resultado: "A concretagem foi para o dia seguinte, com sol, e a obra seguiu sem prejuízo.",
          pontos: { organizacao: 2, logica: 1, pressao: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "08:30",
      titulo: "Quantidade de piso",
      cena: "🧮 🧱 📐",
      conversa: [
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "doutor(a), preciso comprar o piso da sala 🛒" },
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "a sala é de 5 por 4 metros. cada caixa cobre 2 metros quadrados" }
      ],
      pergunta: "Quantas caixas de piso são necessárias para cobrir a sala inteira (sem contar perdas)?",
      alternativas: ["5 caixas", "8 caixas", "10 caixas", "20 caixas"],
      correta: 2,
      explicacao: "A área da sala é 5 m × 4 m = 20 m². Como cada caixa cobre 2 m², são 20 ÷ 2 = 10 caixas. Na prática, compra-se cerca de 10% a mais para cobrir cortes e perdas.",
      traco: "logica"
    },
    {
      horario: "10:00",
      titulo: "Risco no andaime",
      urgente: true,
      cena: "⚠️ 👷 🪜",
      descricao: "Você vê um operário no alto do andaime sem cinto de segurança.",
      conversa: [
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "doutor(a)!! olha o Jorge lá em cima sem cinto!! 😨" },
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "o vento tá forte hoje, ele pode cair!" }
      ],
      naVidaReal: "A segurança no trabalho é uma das principais responsabilidades do engenheiro. Acidentes em obra podem ser fatais e levar a processos e interdições.",
      opcoes: [
        {
          texto: "Falo: “depois eu vejo isso”.",
          reacao: "depois?! ele tá lá agora!! 😱",
          resultado: "O operário escorregou e se machucou. Foi um acidente que poderia ter sido evitado.",
          pontos: {}
        },
        {
          texto: "Anoto num caderno para falar na reunião de sexta.",
          reacao: "sexta?? doutor(a), até lá... 😰",
          resultado: "Nada aconteceu naquele dia, mas o risco continuou presente por mais dias.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Faço uma bronca na frente de todo mundo e sigo meu caminho.",
          reacao: "ele desceu... mas ficou todo sem graça 😕",
          resultado: "O operário desceu, mas a equipe passou o dia desconfortável e ninguém se sentiu acolhido.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Paro a atividade na hora, corrijo o risco e converso com a equipe sobre segurança.",
          reacao: "obrigado, doutor(a). a gente esquece, mas o cinto salva vida 🙏",
          resultado: "O operário colocou o cinto e a equipe reforçou os cuidados no dia a dia.",
          pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "11:30",
      titulo: "Vistoria do andaime",
      cena: "📋 🔍 🪜",
      conversa: [
        { quem: "Carol, técnica de segurança", avatar: "👩🏻‍🔧", fala: "doutor(a), tô fazendo a lista de verificação do andaime 📋" },
        { quem: "Carol, técnica de segurança", avatar: "👩🏻‍🔧", fala: "tem um item aí que não me cheira bem. consegue achar?" }
      ],
      pergunta: "Toque no item da lista que representa um risco de segurança:",
      linhas: [
        "Andaime apoiado sobre tijolos soltos",
        "Piso do andaime completo e firme",
        "Guarda-corpo nos quatro lados",
        "Operários com capacete e cinto de segurança",
        "Rodapé para evitar queda de ferramentas"
      ],
      correta: 0,
      explicacao: "Um andaime nunca deve ser apoiado em tijolos soltos: eles podem ceder com o peso e provocar uma queda. Ele precisa de base firme e nivelada. Conferir esses itens é rotina de quem cuida da segurança da obra.",
      traco: "organizacao"
    },
    {
      horario: "13:30",
      titulo: "A cliente quer derrubar a parede",
      cena: "🏠 🔨 🤔",
      descricao: "A dona da obra aparece e quer mudar o projeto.",
      conversa: [
        { quem: "Dona Sandra, cliente", avatar: "👩🏻‍🦰", fala: "oi, doutor(a)! tive uma ideia genial 😍" },
        { quem: "Dona Sandra, cliente", avatar: "👩🏻‍🦰", fala: "quero derrubar aquela parede da cozinha pra ficar tudo integrado" },
        { quem: "Dona Sandra, cliente", avatar: "👩🏻‍🦰", fala: "é só uma parede, né? rapidinho 🙂" }
      ],
      naVidaReal: "Nem toda parede pode ser derrubada: algumas sustentam a estrutura. Explicar isso de forma clara, e propor alternativas, evita acidentes e frustração do cliente.",
      opcoes: [
        {
          texto: "Derrubo a parede mesmo: a cliente é quem paga a obra e sabe o que quer para a própria casa.",
          reacao: "que bom, vai ficar lindo! 😍",
          resultado: "A parede era estrutural. Surgiram rachaduras e foi preciso reforçar a estrutura, com um custo enorme.",
          pontos: {}
        },
        {
          texto: "Digo “não dá” e não explico o motivo.",
          reacao: "ué, por quê? não gostei desse jeito 😒",
          resultado: "A cliente se sentiu desrespeitada e passou a desconfiar de outras decisões.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Peço a um colega para conversar com ela.",
          reacao: "mas foi o(a) senhor(a) que fez o projeto... 🤨",
          resultado: "A conversa atrasou e a cliente ficou confusa sobre quem era o responsável.",
          pontos: {}
        },
        {
          texto: "Explico que é parede estrutural, mostro no projeto e proponho uma alternativa segura.",
          reacao: "ah, que susto! 😮 então vamos colocar uma viga e abrir só uma parte?",
          resultado: "Com uma viga de reforço, vocês criaram um vão amplo e seguro, e a cliente adorou o resultado.",
          pontos: { logica: 2, criatividade: 1, pessoas: 1 }
        }
      ]
    },
    {
      horario: "15:00",
      titulo: "O orçamento estourou",
      cena: "💸 📈 🧱",
      descricao: "O fornecedor avisa que o preço do material subiu.",
      conversa: [
        { quem: "Rodrigo, fornecedor", avatar: "👨🏽‍💼", fala: "doutor(a), tenho uma notícia chata 😬" },
        { quem: "Rodrigo, fornecedor", avatar: "👨🏽‍💼", fala: "o aço e o cimento subiram 12% essa semana" },
        { quem: "Rodrigo, fornecedor", avatar: "👨🏽‍💼", fala: "o orçamento que a gente fechou não vale mais" }
      ],
      naVidaReal: "O controle de custos é parte central do trabalho. O preço dos materiais muda, e o engenheiro precisa reavaliar o orçamento sem comprometer a segurança.",
      opcoes: [
        {
          texto: "Escondo o aumento do cliente e absorvo o prejuízo sozinho(a).",
          reacao: "poxa, o(a) senhor(a) é gente boa, viu 😅",
          resultado: "Você ficou no prejuízo, e o problema se repetiu nas obras seguintes.",
          pontos: {}
        },
        {
          texto: "Troco o material por outro mais barato, sem testar nem consultar a norma.",
          reacao: "esse é mais barato mesmo! 🤷‍♂️",
          resultado: "O material novo não atendia à norma e parte da obra precisou ser refeita.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Aviso a cliente com os números e proponho duas opções de ajuste para ela escolher.",
          reacao: "ih, a cliente vai gostar de ser avisada com transparência 👍",
          resultado: "A cliente apreciou a clareza e escolheu uma das opções, mantendo a confiança.",
          pontos: { pessoas: 2, organizacao: 1 }
        },
        {
          texto: "Negocio com fornecedores e busco materiais equivalentes e seguros.",
          reacao: "se for pegar em quantidade maior, consigo um desconto 😉",
          resultado: "Com uma compra conjunta e um material equivalente aprovado, o aumento ficou em apenas 3%.",
          pontos: { organizacao: 2, criatividade: 1, logica: 1 }
        }
      ]
    },
    {
      horario: "16:30",
      titulo: "Rachadura na viga",
      urgente: true,
      cena: "🚧 🔦 😨",
      descricao: "Um operário corre até você, assustado.",
      conversa: [
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "doutor(a)!!! tá aparecendo uma rachadura na viga do segundo andar!! 😨" },
        { quem: "Seu Zé, mestre de obras", avatar: "👷🏽", fala: "tem gente trabalhando embaixo. manda parar ou deixa?" }
      ],
      naVidaReal: "Rachaduras em elementos estruturais exigem atenção imediata. A primeira prioridade é a segurança das pessoas, e só depois a avaliação técnica da causa.",
      opcoes: [
        {
          texto: "Passo massa em cima e escondo a rachadura.",
          reacao: "mas... e se piorar? 😰",
          resultado: "A rachadura piorou à noite e foi preciso interditar o andar.",
          pontos: {}
        },
        {
          texto: "Paro a obra inteira por uma semana até alguém resolver.",
          reacao: "uma semana?! e o prazo?? 😳",
          resultado: "A segurança foi priorizada, mas o abandono sem avaliação causou atrasos desnecessários.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Meço a rachadura, escoro a viga provisoriamente e acompanho por algumas horas.",
          reacao: "escorou! agora a gente consegue trabalhar mais tranquilo 😮‍💨",
          resultado: "O escoramento segurou a estrutura até a chegada do especialista, e ninguém se machucou.",
          pontos: { logica: 1, criatividade: 1, pressao: 1 }
        },
        {
          texto: "Isolo a área, fotografo a rachadura e chamo um engenheiro estrutural para avaliar.",
          reacao: "isolei! vou chamar o pessoal pra fora 🚧",
          resultado: "A área foi liberada só depois de o especialista confirmar que não havia risco imediato.",
          pontos: { pressao: 2, logica: 1, organizacao: 1 }
        }
      ]
    },
    {
      horario: "18:00",
      titulo: "Diário de obra",
      cena: "📔 🖊️ 🌇",
      descricao: "Fim do dia. Falta preencher o diário de obra.",
      conversa: [
        { quem: "Carol, técnica de segurança", avatar: "👩🏻‍🔧", fala: "doutor(a), já fez o diário de obra de hoje? 📔" },
        { quem: "Carol, técnica de segurança", avatar: "👩🏻‍🔧", fala: "a fiscalização pode pedir a qualquer momento!" }
      ],
      naVidaReal: "O diário de obra é um documento oficial: registra clima, equipe, atividades e ocorrências. Ele pode ser usado como prova em caso de problemas.",
      opcoes: [
        {
          texto: "Deixo para preencher amanhã cedo, com a cabeça descansada, quando eu lembrar melhor de tudo.",
          reacao: "amanhã? você já vai ter esquecido metade 😅",
          resultado: "No dia seguinte, vários detalhes importantes já tinham sido esquecidos.",
          pontos: {}
        },
        {
          texto: "Escrevo só “dia normal, sem problemas”.",
          reacao: "e a rachadura? e o aumento de preço? 🤨",
          resultado: "Meses depois, a falta de registro dificultou comprovar o que tinha acontecido.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Registro o que foi feito, os imprevistos e as decisões, com data e fotos.",
          reacao: "perfeito! assim fica tudo documentado 👏",
          resultado: "O diário completo foi essencial quando a prefeitura pediu explicações sobre o dia da rachadura.",
          pontos: { organizacao: 2, logica: 1 }
        },
        {
          texto: "Peço para o mestre de obras escrever, já que ele acompanhou tudo de perto, e assino sem revisar.",
          reacao: "eu escrevo, mas o senhor(a) confere, né? ✍️",
          resultado: "O mestre registrou o que viu, mas faltaram termos técnicos importantes.",
          pontos: { pessoas: 1, organizacao: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("engenharia-civil", [
  {
    horario: "07:00",
    titulo: "Entrega errada",
    cena: "🚚 🔩 📏",
    descricao: "O caminhão chega com o aço para a laje de hoje, mas as barras são mais finas do que o projeto pede.",
    conversa: [
      { quem: "Seu Zé, mestre de obras", avatar: "👷🏽‍♂️", fala: "engenheiro(a), o projeto pede barra de 12,5 e veio de 10 😬" },
      { quem: "Seu Zé, mestre de obras", avatar: "👷🏽‍♂️", fala: "a turma tá toda aqui esperando. a gente usa assim mesmo?" }
    ],
    naVidaReal: "O diâmetro das barras de aço é calculado no projeto estrutural. Trocar por uma mais fina sem um novo cálculo pode comprometer a segurança da estrutura. Conferir o material na entrega é rotina da obra.",
    opcoes: [
      {
        texto: "Uso assim mesmo: a diferença é pequena.",
        reacao: "beleza, bora armar então 👍",
        resultado: "A fiscalização encontrou o problema depois, e parte da laje teve que ser refeita.",
        pontos: {}
      },
      {
        texto: "Improviso colocando mais barras finas, que somadas dão quase a mesma área de aço, sem refazer o cálculo.",
        reacao: "dá pra compensar assim? 🤔",
        resultado: "A ideia pode até funcionar, mas sem cálculo ninguém podia garantir a segurança.",
        pontos: { criatividade: 1, pressao: 1 }
      },
      {
        texto: "Mando devolver tudo e paro a obra até o aço certo chegar, sem avisar o cliente.",
        reacao: "e a turma fica fazendo o quê? 😕",
        resultado: "O dia foi perdido, e o cliente soube do atraso pelos outros.",
        pontos: {}
      },
      {
        texto: "Recuso a entrega, peço a troca urgente e reorganizo as tarefas do dia.",
        reacao: "beleza, a turma adianta a alvenaria enquanto o aço não chega 👷",
        resultado: "O aço certo chegou à tarde, e ninguém ficou parado.",
        pontos: { organizacao: 2, logica: 1, pressao: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "08:30",
    titulo: "Concreto da laje",
    cena: "🧱 📐 🧮",
    conversa: [
      { quem: "Seu Zé, mestre de obras", avatar: "👷🏽‍♂️", fala: "a laje tem 5 m por 4 m e 10 cm de espessura 📐" },
      { quem: "Seu Zé, mestre de obras", avatar: "👷🏽‍♂️", fala: "quantos metros cúbicos de concreto eu peço pra concreteira?" }
    ],
    pergunta: "Volume = comprimento × largura × espessura. Quanto concreto é preciso para uma laje de 5 m × 4 m × 0,10 m?",
    alternativas: ["0,2 m³", "2 m³", "20 m³", "200 m³"],
    correta: 1,
    explicacao: "5 × 4 × 0,10 = 2 m³. Na prática, o engenheiro ainda acrescenta uma pequena margem para perdas. Pedir concreto a menos para a obra no meio; pedir a mais é dinheiro jogado fora.",
    traco: "logica"
  },
  {
    horario: "10:00",
    titulo: "Sem cinto no telhado",
    urgente: true,
    cena: "🏗️ ⚠️ 🪢",
    descricao: "Você vê um pedreiro trabalhando na beira do telhado, a seis metros de altura, sem cinto de segurança.",
    conversa: [
      { quem: "Carol, técnica de segurança", avatar: "👩🏽‍🔧", fala: "olha lá em cima! o Josias tá sem cinto 😱" },
      { quem: "Josias, pedreiro", avatar: "👨🏿‍🔧", fala: "relaxa, eu faço isso há 20 anos, nunca caí 😎" }
    ],
    naVidaReal: "Quedas de altura estão entre as principais causas de acidentes graves na construção civil. A norma NR-35 exige cinto de segurança preso a um ponto de ancoragem para trabalhos acima de 2 metros.",
    opcoes: [
      {
        texto: "Deixo para falar com ele depois.",
        reacao: "e se ele cair antes? 😰",
        resultado: "Por sorte nada aconteceu, mas o risco continuou o dia inteiro.",
        pontos: {}
      },
      {
        texto: "Anoto o nome dele para comentar na reunião de segurança de sexta, com toda a equipe reunida.",
        reacao: "sexta é daqui a quatro dias... 😬",
        resultado: "A anotação ficou registrada, mas o trabalho perigoso continuou.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Grito com ele de longe e sigo para o escritório.",
        reacao: "tá bom, tá bom... 🙄",
        resultado: "Ele colocou o cinto, mas tirou de novo quando você saiu.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Peço que ele desça, providencio o cinto preso à linha de vida e converso com a equipe.",
        reacao: "...é, minha filha ia me matar se eu caísse 😅",
        resultado: "Ele voltou ao trabalho com o cinto, e a equipe passou a conferir o equipamento uns dos outros.",
        pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "11:30",
    titulo: "Vistoria da vala",
    cena: "🕳️ 📋 🔍",
    conversa: [
      { quem: "Carol, técnica de segurança", avatar: "👩🏽‍🔧", fala: "antes de liberar a vala do esgoto, confere o checklist 📋" },
      { quem: "Carol, técnica de segurança", avatar: "👩🏽‍🔧", fala: "tem um item perigoso aí" }
    ],
    pergunta: "Toque no item da vala de 2 metros que está errado:",
    linhas: [
      "Profundidade da escavação: 2 metros",
      "Paredes da vala escoradas",
      "Escada para entrar e sair",
      "Sinalização e cerca ao redor",
      "Terra retirada amontoada bem na beira da vala"
    ],
    correta: 4,
    explicacao: "Terra amontoada na beira faz peso sobre a parede da vala e pode causar um desmoronamento em cima de quem está lá dentro. As normas de segurança pedem que o material fique afastado da borda.",
    traco: "organizacao"
  },
  {
    horario: "13:30",
    titulo: "O vizinho reclama",
    cena: "🏠 🧱 😠",
    descricao: "O vizinho da obra aparece irritado: diz que a obra rachou a parede da casa dele.",
    conversa: [
      { quem: "Seu Arlindo, vizinho", avatar: "👴🏽", fala: "desde que começou essa obra minha parede rachou toda! 😠" },
      { quem: "Seu Arlindo, vizinho", avatar: "👴🏽", fala: "quem vai pagar isso?" }
    ],
    naVidaReal: "Antes de começar uma obra, é comum fazer uma vistoria das casas vizinhas, com fotos e laudo. Ela ajuda a saber se um dano já existia ou se foi causado pela obra, e evita brigas e processos.",
    opcoes: [
      {
        texto: "Digo que a obra não tem nada a ver com isso.",
        reacao: "vou procurar um advogado então! 😡",
        resultado: "O caso foi para a Justiça, e a obra ganhou fama ruim no bairro.",
        pontos: {}
      },
      {
        texto: "Peço que ele mande a reclamação por escrito, com fotos, para a construtora analisar, e encerro a conversa.",
        reacao: "por escrito? tô falando com você agora! 😤",
        resultado: "A reclamação chegou por escrito, mas o vizinho ficou ainda mais irritado.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Peço para um colega atender ele.",
        reacao: "ninguém resolve nada aqui! 😠",
        resultado: "O colega não conhecia a obra, e a conversa não deu em nada.",
        pontos: {}
      },
      {
        texto: "Fotografo as rachaduras, comparo com a vistoria feita antes da obra e combino um acompanhamento.",
        reacao: "...as rachaduras do quarto já tavam nas fotos? mas a da sala é nova 🤔",
        resultado: "A vistoria mostrou o que era antigo e o que era novo, e a construtora reparou só o dano causado pela obra.",
        pontos: { logica: 2, criatividade: 1, pessoas: 1 }
      }
    ]
  },
  {
    horario: "15:00",
    titulo: "Dá para entregar antes?",
    cena: "📅 🏠 ⏩",
    descricao: "A cliente quer receber a casa um mês antes do combinado, porque o aluguel dela vai acabar.",
    conversa: [
      { quem: "Dona Sandra, cliente", avatar: "👩🏻", fala: "meu contrato de aluguel acaba em outubro 😰" },
      { quem: "Dona Sandra, cliente", avatar: "👩🏻", fala: "tem como entregar a casa um mês antes?" }
    ],
    naVidaReal: "Algumas etapas de obra não podem ser apressadas, como o tempo de cura do concreto, que garante a resistência da estrutura. Planejar quais serviços podem acontecer ao mesmo tempo é o jeito seguro de ganhar prazo.",
    opcoes: [
      {
        texto: "Prometo que dá, mesmo sem saber se é possível.",
        reacao: "jura?? que alívio! 😍",
        resultado: "A obra atrasou mesmo assim, e a cliente se sentiu enganada.",
        pontos: {}
      },
      {
        texto: "Encurto o tempo de cura do concreto para ganhar uns dias: com o calor que está fazendo, ele seca mais rápido.",
        reacao: "e isso é seguro? 🤔",
        resultado: "Ganhou dias, mas a estrutura ficou com resistência menor do que o projeto exigia.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Explico com calma o que dá e o que não dá para adiantar.",
        reacao: "entendi... pelo menos agora eu sei 😕",
        resultado: "A cliente entendeu os limites, mas ainda não tinha uma nova data para planejar a mudança.",
        pontos: { pessoas: 2, organizacao: 1 }
      },
      {
        texto: "Refaço o cronograma, vejo quais serviços podem correr juntos e proponho uma data possível.",
        reacao: "três semanas antes já me salva! 🙌",
        resultado: "Com as equipes trabalhando em paralelo, a casa ficou pronta três semanas antes, com segurança.",
        pontos: { organizacao: 2, criatividade: 1, logica: 1 }
      }
    ]
  },
  {
    horario: "16:30",
    titulo: "Temporal na escavação",
    urgente: true,
    cena: "⛈️ 🕳️ 🚧",
    descricao: "Um temporal começa de repente. A escavação do subsolo enche de água e um pedaço da parede de terra começa a escorregar.",
    conversa: [
      { quem: "Seu Zé, mestre de obras", avatar: "👷🏽‍♂️", fala: "a água tá subindo na escavação!! 🌊" },
      { quem: "Seu Zé, mestre de obras", avatar: "👷🏽‍♂️", fala: "e o barranco do lado da rua tá cedendo! tem gente lá embaixo!" }
    ],
    naVidaReal: "Chuva forte pode fazer paredes de terra desmoronarem. A prioridade é tirar as pessoas do local; depois, isolar a área e chamar um especialista em solos (geotecnia) para avaliar a contenção.",
    opcoes: [
      {
        texto: "Mando continuar o trabalho: é só água.",
        reacao: "com o barranco cedendo?? 😱",
        resultado: "Um trecho desmoronou, e por pouco ninguém se feriu.",
        pontos: {}
      },
      {
        texto: "Paro tudo e mando todo mundo para casa na hora, sem organizar nada, porque a chuva só piora.",
        reacao: "e o barranco? e a rua? 😰",
        resultado: "As pessoas saíram, mas a área ficou sem isolamento e a calçada cedeu durante a noite.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Improviso uma bomba para tirar a água e mando a equipe continuar, para não atrasar a fundação.",
        reacao: "a bomba ajuda... mas e o barranco? 😬",
        resultado: "A água baixou, mas a equipe continuou exposta ao risco de desmoronamento.",
        pontos: { logica: 1, criatividade: 1, pressao: 1 }
      },
      {
        texto: "Tiro todos da escavação, isolo a área e chamo o engenheiro de solos.",
        reacao: "todo mundo fora! área isolada 👷",
        resultado: "O barranco cedeu à noite, mas sem ninguém por perto. A contenção foi reforçada no dia seguinte.",
        pontos: { pressao: 2, logica: 1, organizacao: 1 }
      }
    ]
  },
  {
    horario: "18:00",
    titulo: "Medição do mês",
    cena: "📏 💰 📋",
    descricao: "É dia de medir os serviços feitos pela empreiteira no mês, para liberar o pagamento.",
    conversa: [
      { quem: "Rogério, dono da empreiteira", avatar: "👨🏽‍💼", fala: "fizemos 400 m² de alvenaria esse mês 💪" },
      { quem: "Rogério, dono da empreiteira", avatar: "👨🏽‍💼", fala: "dá pra liberar o pagamento hoje? meu pessoal precisa receber" }
    ],
    naVidaReal: "A medição confere o que foi realmente executado antes de pagar quem fez o serviço. Ela protege o dinheiro do cliente e evita pagar por serviço que não existe ou foi mal feito.",
    opcoes: [
      {
        texto: "Pago o que ele pediu, sem medir.",
        reacao: "valeu, chefe! 😁",
        resultado: "Depois se descobriu que só 310 m² estavam prontos. A diferença foi difícil de recuperar.",
        pontos: {}
      },
      {
        texto: "Faço a medição correndo, \"no olho\".",
        reacao: "tá bom, então 👍",
        resultado: "A medição saiu rápida, mas com erros que geraram discussão no mês seguinte.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Meço o que foi feito e confiro com o projeto antes de liberar o pagamento.",
        reacao: "deu 310 m²... é, a parede do fundo ainda não tá pronta mesmo 😅",
        resultado: "O pagamento saiu certo e no mesmo dia, sem discussão.",
        pontos: { organizacao: 2, logica: 1 }
      },
      {
        texto: "Peço para a empreiteira medir, já que ela conhece o serviço que fez, e eu só assino.",
        reacao: "pode deixar, a gente mede 😏",
        resultado: "A medição veio a mais, e você assinou um documento pelo qual é responsável.",
        pontos: { pessoas: 1, organizacao: 1 }
      }
    ]
  }
]);
