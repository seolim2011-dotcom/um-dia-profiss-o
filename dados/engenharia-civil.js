/*
  Profissão: Engenharia Civil
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "engenharia-civil",
  nome: "Engenharia Civil",
  icone: "🏗️",
  cor: "#854d0e",
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
    "Bacharelado em Engenharia Civil — 5 anos",
    "Registro no CREA para assinar projetos e obras",
    "Técnico em Edificações — cerca de 2 anos, para atuar no apoio às obras"
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
        "Piso do andaime completo e firme",
        "Guarda-corpo nos quatro lados",
        "Operários com capacete e cinto de segurança",
        "Andaime apoiado sobre tijolos soltos",
        "Rodapé para evitar queda de ferramentas"
      ],
      correta: 3,
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
          texto: "Derrubo a parede mesmo: o cliente manda.",
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
          texto: "Aviso a cliente com os números e proponho duas opções de ajuste.",
          reacao: "ih, a cliente vai gostar de ser avisada com transparência 👍",
          resultado: "A cliente apreciou a clareza e escolheu uma das opções, mantendo a confiança.",
          pontos: { pessoas: 2, organizacao: 1 }
        },
        {
          texto: "Reviso o orçamento, negocio com fornecedores e busco alternativas equivalentes e seguras.",
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
          texto: "Mando todo mundo embora e abandono a obra por uma semana.",
          reacao: "uma semana?! e o prazo?? 😳",
          resultado: "A segurança foi priorizada, mas o abandono sem avaliação causou atrasos desnecessários.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Meço a rachadura, escoro a viga provisoriamente e acompanho por algumas horas.",
          reacao: "escorou! agora a gente consegue trabalhar mais tranquilo 😮‍💨",
          resultado: "O escoramento segurou a estrutura até a chegada do especialista, e ninguém se machucou.",
          pontos: { logica: 2, criatividade: 1, pressao: 1 }
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
          texto: "Deixo para preencher amanhã, quando eu lembrar melhor.",
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
          texto: "Peço para o mestre de obras escrever sem revisar.",
          reacao: "eu escrevo, mas o senhor(a) confere, né? ✍️",
          resultado: "O mestre registrou o que viu, mas faltaram termos técnicos importantes.",
          pontos: { pessoas: 1, organizacao: 1 }
        }
      ]
    }
  ]
});
