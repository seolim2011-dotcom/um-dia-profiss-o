/*
  Profissão: Marketing Digital
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "marketing-digital",
  nome: "Marketing Digital",
  icone: "📣",
  cor: "#be123c",
  resumo: "Criar campanhas, cuidar das redes sociais e usar dados para fazer marcas chegarem às pessoas certas.",

  perfil: {
    pessoas: {
      peso: 4,
      gostar: "Entender o público e criar conexão com quem consome a marca.",
      dificil: "Lidar com clientes exigentes e com comentários agressivos nas redes."
    },
    logica: {
      peso: 3,
      gostar: "Ler números e descobrir o que realmente funciona numa campanha.",
      dificil: "Métricas, planilhas e relatórios, que mudam o tempo todo."
    },
    pressao: {
      peso: 4,
      gostar: "A emoção de ver uma campanha “viralizar” e de agir rápido numa crise.",
      dificil: "Crises nas redes que exigem resposta em minutos, até em fins de semana."
    },
    organizacao: {
      peso: 3,
      gostar: "Calendário de posts e campanhas bem planejado.",
      dificil: "Muitas tarefas ao mesmo tempo, com prazos de várias campanhas."
    },
    criatividade: {
      peso: 5,
      gostar: "Inventar ideias, textos e formatos que chamem atenção.",
      dificil: "A pressão por uma “ideia nova” toda semana e por acompanhar as tendências."
    }
  },

  cursos: [
    "Tecnólogo em Marketing — de 2 a 3 anos",
    "Bacharelado em Publicidade e Propaganda, Marketing ou Comunicação Social — cerca de 4 anos",
    "Cursos livres de mídias pagas, análise de dados e redes sociais ajudam muito"
  ],

  situacoes: [
    {
      horario: "09:00",
      titulo: "Reunião de ideias",
      cena: "💡 🍦 📣",
      descricao: "A equipe se reúne para criar uma campanha para uma sorveteria.",
      conversa: [
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "bom dia, time! 🍦 o cliente é uma sorveteria artesanal" },
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "o Dia dos Namorados tá chegando e eles querem vender mais" },
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "alguém tem uma ideia? 💭" }
      ],
      naVidaReal: "Muitas campanhas nascem em reuniões de ideias, e ninguém acerta de primeira. O importante é trazer várias ideias e conseguir defendê-las.",
      opcoes: [
        {
          texto: "Fico quieto(a), com medo de falar uma ideia ruim.",
          reacao: "ninguém tem nada? 😕 vamos precisar de ideia, gente...",
          resultado: "Outras pessoas dominaram a reunião e a sua ideia nunca foi ouvida.",
          pontos: {}
        },
        {
          texto: "Sugiro copiar a campanha de uma marca famosa.",
          reacao: "essa campanha todo mundo já viu... precisa ser a nossa 🤔",
          resultado: "A ideia foi descartada por falta de originalidade.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Proponho uma ideia: “sorvete em dupla”, com 2 bolas e um desconto para casais, e explico o porquê.",
          reacao: "gostei! “casal que divide, ganha desconto” 😍 vamos desenvolver!",
          resultado: "A ideia foi aprovada e virou o centro da campanha.",
          pontos: { criatividade: 2, pessoas: 1, logica: 1 }
        },
        {
          texto: "Falo só números e métricas, sem trazer nenhuma ideia.",
          reacao: "números ajudam, mas a gente precisa de uma ideia 😅",
          resultado: "Os dados foram úteis, mas a reunião terminou sem uma proposta criativa.",
          pontos: { logica: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "10:15",
      titulo: "Leia a campanha",
      cena: "📊 💰 🔍",
      conversa: [
        { quem: "Diego, analista de dados", avatar: "🧑🏻‍💻", fala: "rodamos 4 anúncios no fim de semana 📊" },
        { quem: "Diego, analista de dados", avatar: "🧑🏻‍💻", fala: "o investimento foi igual em todos: R$ 100 cada. olha o resultado de vendas 👇" }
      ],
      pergunta: "Qual anúncio trouxe mais vendas para o mesmo investimento?",
      grafico: [
        { rotulo: "Anúncio A", valor: 3 },
        { rotulo: "Anúncio B", valor: 5 },
        { rotulo: "Anúncio C", valor: 8 },
        { rotulo: "Anúncio D", valor: 2 }
      ],
      unidade: "vendas",
      alternativas: ["Anúncio A", "Anúncio B", "Anúncio C", "Anúncio D"],
      correta: 2,
      explicacao: "Com o mesmo investimento de R$ 100, o Anúncio C trouxe 8 vendas, o melhor resultado. Comparar anúncios por resultado, e não por achismo, é o que permite investir melhor no próximo mês.",
      traco: "logica"
    },
    {
      horario: "11:30",
      titulo: "Crise nas redes",
      urgente: true,
      cena: "🔥 📱 😱",
      descricao: "Um post da marca está dando muito errado nas redes sociais.",
      conversa: [
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "GENTE. o post da sorveteria tá bombando... mas do jeito ruim 😱" },
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "tem um erro no texto que ofendeu um monte de gente e os comentários tão explodindo" },
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "o que a gente faz?? agora??" }
      ],
      naVidaReal: "Crises de imagem nas redes podem crescer em minutos. O profissional de marketing precisa agir rápido, mas com cabeça fria e sem apagar provas ou discutir com o público.",
      opcoes: [
        {
          texto: "Apago o post e todos os comentários e finjo que nada aconteceu.",
          reacao: "apagou? o pessoal já tirou print 😬",
          resultado: "Os prints continuaram circulando, e a marca foi acusada de esconder o erro.",
          pontos: {}
        },
        {
          texto: "Respondo os comentários um por um, discutindo com quem reclamou.",
          reacao: "ih, a discussão virou notícia agora 😰",
          resultado: "As brigas nos comentários aumentaram a crise e a marca passou a ser mais comentada.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Fico esperando para ver se a crise passa sozinha.",
          reacao: "já tem 3 mil comentários, não dá pra esperar! 😰",
          resultado: "A crise piorou durante a noite, e a marca virou assunto no dia seguinte.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Corrijo o texto, publico um pedido de desculpas sincero e fico monitorando as respostas.",
          reacao: "ótimo texto! sincero e sem enrolação 🙏",
          resultado: "A maioria dos comentários passou a ser positiva e o assunto perdeu força em um dia.",
          pontos: { pressao: 2, pessoas: 1, criatividade: 1 }
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "O cliente quer viralizar",
      cena: "🤩 📈 🎬",
      descricao: "O dono da sorveteria liga com uma expectativa irreal.",
      conversa: [
        { quem: "Seu Beto, dono da sorveteria", avatar: "👨🏻‍🍳", fala: "oi, pessoal! vi que vocês fizeram aquela campanha 😄" },
        { quem: "Seu Beto, dono da sorveteria", avatar: "👨🏻‍🍳", fala: "quero que ela viralize e traga 10 mil clientes amanhã! 🤩" },
        { quem: "Seu Beto, dono da sorveteria", avatar: "👨🏻‍🍳", fala: "dá pra garantir?" }
      ],
      naVidaReal: "Ninguém pode garantir que um conteúdo viralize. Profissionais sérios alinham expectativas com o cliente e trabalham com metas realistas.",
      opcoes: [
        {
          texto: "Garanto que sim: vamos viralizar!",
          reacao: "que ótimo! já vou contratar mais gente! 🎉",
          resultado: "A campanha teve bons resultados, mas muito abaixo do prometido, e o cliente ficou frustrado.",
          pontos: {}
        },
        {
          texto: "Digo que é impossível e que ele deveria fazer outra coisa.",
          reacao: "ué, então pra que eu contratei vocês? 😒",
          resultado: "O cliente se sentiu desrespeitado e considerou trocar de agência.",
          pontos: { logica: 1 }
        },
        {
          texto: "Explico que não dá para garantir, mostro metas realistas e um plano com resultados medidos por semana.",
          reacao: "ah, entendi. faz mais sentido assim 🙂 vamos acompanhar toda semana, então?",
          resultado: "O cliente passou a confiar no trabalho e entendeu os resultados como um processo.",
          pontos: { pessoas: 2, logica: 1, organizacao: 1 }
        },
        {
          texto: "Mudo de assunto para não desagradá-lo.",
          reacao: "então... dá pra garantir ou não? 😅",
          resultado: "A dúvida do cliente não foi resolvida e voltou, mais forte, na reunião seguinte.",
          pontos: { criatividade: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "15:00",
      titulo: "Revise o anúncio",
      cena: "📝 🔎 🍦",
      conversa: [
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "antes de publicar, revisa esse anúncio comigo? 🙏" },
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "tem uma conta que não bate. se sair errado, a gente paga o preço 😬" }
      ],
      pergunta: "O desconto é de 20%. Toque na linha do anúncio com a informação errada:",
      linhas: [
        "Título: Sorvete artesanal com 20% de desconto",
        "Texto: só até sexta",
        "Preço: de R$ 10,00 por R$ 9,00",
        "Botão: peça agora",
        "Endereço: Rua das Flores, 120"
      ],
      correta: 2,
      explicacao: "20% de R$ 10,00 são R$ 2,00, então o preço promocional seria R$ 8,00, e não R$ 9,00. Erros em anúncios podem gerar reclamações e até processos de clientes. Revisar números faz parte do trabalho.",
      traco: "logica"
    },
    {
      horario: "16:15",
      titulo: "Hora de aproveitar a tendência",
      urgente: true,
      cena: "🔥 🎶 ⏱️",
      descricao: "Uma música viralizou hoje e todo mundo está fazendo vídeos com ela.",
      conversa: [
        { quem: "Diego, analista de dados", avatar: "🧑🏻‍💻", fala: "ei! a trend do momento é essa música aí 🎶" },
        { quem: "Diego, analista de dados", avatar: "🧑🏻‍💻", fala: "ela vai estourar por 24h e depois todo mundo esquece 😅 dá tempo da sorveteria entrar?" }
      ],
      naVidaReal: "Tendências nas redes duram pouco. Quem consegue criar rápido, mas com sentido para a marca, ganha alcance; quem força a barra pode passar vergonha.",
      opcoes: [
        {
          texto: "Ignoro: eu só faço campanha com planejamento de um mês.",
          reacao: "ah... a trend vai passar e a gente não vai aparecer 😕",
          resultado: "Os concorrentes aproveitaram a tendência e a sorveteria ficou de fora.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Posto qualquer vídeo na trend, sem pensar se combina com a marca.",
          reacao: "ué... o que isso tem a ver com sorvete? 🤨",
          resultado: "O vídeo foi ignorado e algumas pessoas estranharam a ligação com a marca.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Crio rápido um vídeo adaptando a trend para a ideia da “dupla de sorvetes”, e posto no mesmo dia.",
          reacao: "uau! isso ficou perfeito: a trend e a campanha juntas 😍",
          resultado: "O vídeo teve 10 vezes mais alcance que um post comum e trouxe novos seguidores.",
          pontos: { criatividade: 2, pressao: 2, organizacao: 1 }
        },
        {
          texto: "Peço para a equipe votar em 3 ideias antes de decidir qualquer coisa.",
          reacao: "a votação demorou... a trend já tá esfriando 😕",
          resultado: "Quando o vídeo ficou pronto, a tendência já estava perdendo força.",
          pontos: { pessoas: 1 }
        }
      ]
    },
    {
      horario: "17:15",
      titulo: "Resultado abaixo do esperado",
      cena: "📉 😕 📊",
      descricao: "A campanha da semana passada não teve o resultado esperado.",
      conversa: [
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "olha, a campanha de ontem não deu o resultado que a gente esperava 😕" },
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "vendeu só 30% do que a gente previu. o que você acha que aconteceu?" }
      ],
      naVidaReal: "Nem toda campanha dá certo. O que diferencia bons profissionais é analisar os dados, entender o que falhou e testar novas ideias.",
      opcoes: [
        {
          texto: "Digo que a culpa foi do cliente e do produto.",
          reacao: "hmm... só isso? 🤨",
          resultado: "A conversa terminou sem aprendizado e o mesmo erro se repetiu na campanha seguinte.",
          pontos: {}
        },
        {
          texto: "Defendo a campanha e digo que o problema é o orçamento.",
          reacao: "pode ser, mas dá pra ver outras causas também 🤔",
          resultado: "Sem analisar os dados, a equipe não descobriu o motivo real do baixo resultado.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Analiso os números: horário, público e criativo, e proponho um teste com duas versões.",
          reacao: "boa análise! ficou claro o que melhorar 👏",
          resultado: "O teste mostrou que o anúncio funcionava melhor à noite e para um público mais jovem.",
          pontos: { logica: 2, criatividade: 1, organizacao: 1 }
        },
        {
          texto: "Proponho trocar tudo e começar do zero, sem olhar o que funcionou.",
          reacao: "do zero? mas a campanha tinha coisas boas... 😕",
          resultado: "A equipe jogou fora elementos que funcionavam e gastou tempo à toa.",
          pontos: { pressao: 1 }
        }
      ]
    },
    {
      horario: "18:15",
      titulo: "Calendário de posts",
      cena: "🗓️ 📲 ✏️",
      descricao: "Fim do dia: falta organizar os posts da semana que vem.",
      conversa: [
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "antes de ir: o calendário de posts da semana que vem tá vazio 😅" },
        { quem: "Carla, chefe de marketing", avatar: "👩🏽‍💼", fala: "são 5 clientes. dá pra deixar tudo planejado hoje?" }
      ],
      naVidaReal: "Planejar o conteúdo com antecedência evita correria e permite revisar tudo com calma. Redes sociais exigem constância.",
      opcoes: [
        {
          texto: "Deixo para improvisar de manhã, quando a ideia vier.",
          reacao: "improvisar com 5 clientes?? 😰",
          resultado: "Na segunda de manhã, faltaram posts e dois clientes ficaram sem publicação.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Planejo só um cliente e deixo os outros para depois.",
          reacao: "e os outros 4? 🤔",
          resultado: "Dois dos clientes reclamaram de falta de posts durante a semana.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Monto um calendário com datas, ideias e responsáveis para cada cliente, e deixo tudo compartilhado.",
          reacao: "que organização! agora todo mundo sabe o que fazer 🙌",
          resultado: "A semana seguinte correu sem sustos e todos os posts saíram no horário.",
          pontos: { organizacao: 2, logica: 1, pessoas: 1 }
        },
        {
          texto: "Copio o calendário da semana passada, sem mudar nada.",
          reacao: "ué, os mesmos posts de novo? 😅",
          resultado: "Os seguidores perceberam a repetição e o engajamento caiu.",
          pontos: {}
        }
      ]
    }
  ]
});
