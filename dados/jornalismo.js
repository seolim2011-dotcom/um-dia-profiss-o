/*
  Profissão: Jornalismo
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "jornalismo",
  nome: "Jornalismo",
  icone: "📰",
  cor: "#0a2472",
  area: "sociedade",
  resumo: "Apurar fatos, ouvir pessoas e contar histórias verdadeiras de um jeito que todo mundo entenda.",

  perfil: {
    pessoas: {
      peso: 4,
      gostar: "Conversar com gente de todo tipo e dar voz a quem precisa ser ouvido.",
      dificil: "Entrevistar pessoas em momentos de dor e lidar com fontes que não querem falar."
    },
    logica: {
      peso: 3,
      gostar: "Conferir dados, cruzar informações e descobrir o que é verdade.",
      dificil: "Checar cada número e cada nome: um erro publicado não tem volta."
    },
    pressao: {
      peso: 5,
      gostar: "A adrenalina de uma notícia urgente e de ver a matéria publicada.",
      dificil: "Prazos o tempo todo, plantões em fins de semana e críticas públicas ao seu trabalho."
    },
    organizacao: {
      peso: 3,
      gostar: "Organizar entrevistas, anotações e fontes para contar a história certa.",
      dificil: "Manter várias pautas, contatos e versões de texto em ordem ao mesmo tempo."
    },
    criatividade: {
      peso: 4,
      gostar: "Encontrar um jeito novo de contar uma história em texto, vídeo ou redes sociais.",
      dificil: "Ser criativo sem nunca inventar nada: a história tem que ser fiel aos fatos."
    }
  },

  cursos: [
    "Bacharelado em Jornalismo (cerca de 4 anos)",
    "Desde 2009, o diploma não é obrigatório para trabalhar como jornalista, mas a faculdade e o estágio abrem portas",
    "Escrever todos os dias e saber trabalhar com vídeo, redes sociais e dados ajuda muito"
  ],

  situacoes: [
    {
      horario: "08:00",
      titulo: "Reunião de pauta",
      cena: "📰 💬 ☕",
      descricao: "Toda manhã, a equipe do portal de notícias decide o que vai cobrir no dia.",
      conversa: [
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "bom dia, gente ☕ pauta de hoje!" },
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "o tema da semana é transporte público. quero algo que ninguém fez ainda" },
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "e aí, o que você traz? 👀" }
      ],
      naVidaReal: "Na reunião de pauta, a redação escolhe os assuntos do dia. O \"ângulo\" é o jeito de olhar para um tema: um assunto comum vira notícia quando alguém encontra uma forma nova e verdadeira de contá-lo.",
      opcoes: [
        {
          texto: "Proponho uma matéria com a tabela completa dos horários de ônibus da cidade.",
          reacao: "útil... mas o site da prefeitura já tem isso 😐",
          resultado: "A matéria foi publicada, mas quase ninguém leu.",
          pontos: { logica: 1, organizacao: 1 }
        },
        {
          texto: "Proponho mostrar, com dados e com a história de uma trabalhadora, quanto tempo se perde por mês esperando ônibus.",
          reacao: "\"28 horas por mês no ponto\". ISSO é manchete 🔥",
          resultado: "A matéria foi a mais lida da semana e chegou até a Câmara de Vereadores.",
          pontos: { criatividade: 2, pessoas: 1 }
        },
        {
          texto: "Fico calado(a) e pego a pauta que sobrar.",
          reacao: "sobrou a da inauguração da rotatória, então 😅",
          resultado: "Você passou o dia numa pauta que não te empolgava e ninguém notou seu trabalho.",
          pontos: {}
        },
        {
          texto: "Sugiro a fofoca de famoso que está bombando, porque dá clique rápido.",
          reacao: "clique a gente tem... mas e o tema da semana? 🤨",
          resultado: "A matéria teve cliques no dia, mas não tinha nada a ver com o plano da redação.",
          pontos: { pressao: 1 }
        }
      ]
    },
    {
      horario: "09:30",
      titulo: "Incêndio no centro",
      urgente: true,
      cena: "🔥 🏢 📱",
      descricao: "Um prédio pega fogo no centro da cidade. Um vídeo no WhatsApp diz que há três mortos.",
      conversa: [
        { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "INCÊNDIO NO CENTRO 🔥 tá no grupo da família" },
        { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "o vídeo diz que morreram 3 pessoas! o portal concorrente ainda não deu nada" },
        { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "a gente publica?? 😱" }
      ],
      naVidaReal: "O jornalismo vive a tensão entre ser rápido e estar certo. Uma informação errada, como um número de vítimas, causa sofrimento e destrói a confiança no veículo. Por isso, só se publica o que foi confirmado por fontes oficiais ou apurado no local.",
      opcoes: [
        {
          texto: "Publico uma nota curta só com o que os bombeiros confirmaram e vou ao local apurar o resto.",
          reacao: "boa! os bombeiros acabaram de dizer: ninguém morreu 🙏",
          resultado: "O portal deu a notícia rápido e certo, enquanto outros sites tiveram que apagar o número falso.",
          pontos: { pressao: 2, logica: 1, organizacao: 1 }
        },
        {
          texto: "Publico o vídeo do WhatsApp com o número de mortos, para sair na frente.",
          reacao: "saímos na frente!... mas os bombeiros dizem que ninguém morreu 😨",
          resultado: "O portal teve que se desculpar publicamente, e famílias de moradores entraram em pânico.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Espero ter a matéria completa para publicar, nem que leve a tarde toda.",
          reacao: "todo mundo já deu a notícia, menos a gente 😕",
          resultado: "A matéria ficou boa, mas o público passou o dia procurando informação em outros sites.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Deixo para o pessoal da tarde cobrir.",
          reacao: "mas o incêndio é AGORA 😳",
          resultado: "O portal ficou de fora da notícia mais importante do dia.",
          pontos: {}
        }
      ]
    },
    {
      horario: "11:00",
      titulo: "Entrevista difícil",
      cena: "🎤 🏚️ 💔",
      descricao: "No local do incêndio, uma moradora que perdeu tudo está sentada na calçada, abalada.",
      conversa: [
        { quem: "Dona Neide, moradora", avatar: "👩🏾‍🦳", fala: "trinta anos morando ali... 😢" },
        { quem: "Dona Neide, moradora", avatar: "👩🏾‍🦳", fala: "minhas fotos, os documentos, tudo..." },
        { quem: "Caio, fotógrafo", avatar: "👨🏻", fala: "(baixinho) é a história mais forte daqui. como você quer fazer?" }
      ],
      naVidaReal: "O Código de Ética dos Jornalistas Brasileiros pede respeito à privacidade e à dignidade das pessoas. Entrevistar alguém num momento de dor exige pedir licença, ouvir com cuidado e aceitar um \"não\".",
      opcoes: [
        {
          texto: "Coloco o microfone perto dela e pergunto \"o que a senhora está sentindo?\".",
          reacao: "o que eu tô sentindo? sério? 😠",
          resultado: "Ela se irritou e foi embora, e o vídeo da cena foi criticado nas redes.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Me apresento, pergunto se ela aceita falar, ouço com calma e paro quando ela pede.",
          reacao: "obrigada por me ouvir com calma... 🙏",
          resultado: "Ela contou sua história com calma, e a matéria emocionou sem expor ninguém.",
          pontos: { pessoas: 2, pressao: 1 }
        },
        {
          texto: "Desisto da entrevista e escrevo só com os números oficiais da Defesa Civil.",
          reacao: "certinho, mas falta gente nessa história 🤔",
          resultado: "A matéria ficou correta, mas fria, e não mostrou o que o incêndio significou para quem vivia ali.",
          pontos: { logica: 1 }
        },
        {
          texto: "Peço para o Caio filmar ela chorando, sem pedir autorização.",
          reacao: "isso não tá certo... 😟",
          resultado: "A família reclamou, e o portal precisou tirar o vídeo do ar.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "13:00",
      titulo: "Checagem de fatos",
      cena: "🔎 📝 ✅",
      conversa: [
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "chegou o boletim dos bombeiros 📄" },
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "começou às 8h40, 2 pessoas atendidas por fumaça, NENHUMA morte e 12 famílias fora de casa" },
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "o Vini escreveu o texto. confere antes de publicar? 👇" }
      ],
      pergunta: "Toque na frase que não bate com o boletim dos bombeiros:",
      linhas: [
        "O incêndio começou por volta das 8h40, segundo o Corpo de Bombeiros.",
        "Duas pessoas foram atendidas por inalar fumaça.",
        "Três pessoas morreram no local.",
        "Doze famílias tiveram que deixar o prédio.",
        "A causa do incêndio ainda está sendo investigada."
      ],
      correta: 2,
      explicacao: "O boletim oficial diz que ninguém morreu. O número de três mortos veio do vídeo do WhatsApp e nunca foi confirmado. Checar cada informação com a fonte antes de publicar é uma das tarefas mais importantes do jornalismo.",
      traco: "logica"
    },
    {
      horario: "14:30",
      titulo: "Pressão da fonte",
      cena: "🏛️ 📞 ⚖️",
      descricao: "Você está fechando uma matéria sobre a obra de uma creche parada há dois anos. A assessoria da prefeitura liga.",
      conversa: [
        { quem: "Fernanda, assessora da prefeitura", avatar: "👩🏼", fala: "soube que vocês vão publicar sobre a creche 🙂" },
        { quem: "Fernanda, assessora da prefeitura", avatar: "👩🏼", fala: "olha, se sair essa matéria, a prefeitura não vai mais dar entrevista pra vocês" },
        { quem: "Fernanda, assessora da prefeitura", avatar: "👩🏼", fala: "pensa bem, tá? 😉" }
      ],
      naVidaReal: "Ouvir todos os lados é regra do bom jornalismo: quem é citado tem o direito de responder. Mas a decisão de publicar algo verdadeiro e de interesse público não pode depender de ameaça de quem é criticado.",
      opcoes: [
        {
          texto: "Desisto da matéria para não perder a fonte.",
          reacao: "ótima decisão 😊",
          resultado: "A prefeitura continuou dando entrevistas, mas as famílias continuaram sem creche e sem resposta.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Mantenho a matéria e dou à prefeitura um prazo para responder, publicando a versão dela junto.",
          reacao: "tá... vou mandar uma nota até as 17h 😒",
          resultado: "A matéria saiu com os dois lados, e um mês depois a obra foi retomada.",
          pontos: { pressao: 2, logica: 1, pessoas: 1 }
        },
        {
          texto: "Publico a matéria expondo a ameaça da assessora, em tom de ataque.",
          reacao: "uau, isso vai dar barulho 😬",
          resultado: "A briga virou o assunto, e o problema da creche ficou em segundo plano.",
          pontos: { criatividade: 1, pressao: 1 }
        },
        {
          texto: "Passo o problema para a editora e vou almoçar.",
          reacao: "e o que eu respondo pra ela? 😕",
          resultado: "A editora teve que resolver sozinha, e a matéria atrasou um dia.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "ordenar",
      horario: "16:00",
      titulo: "Monte a notícia",
      cena: "🔺 📰 ✍️",
      conversa: [
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "o texto do Vini tá com o mais importante lá no fim 😅" },
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "mostra pra ele a ordem certa dos blocos? 👇" }
      ],
      pergunta: "Toque nos blocos na ordem em que uma notícia costuma ser escrita:",
      itens: [
        "Lide: o que aconteceu, onde, quando e com quem",
        "Os detalhes mais importantes e os números confirmados",
        "Falas de testemunhas e das autoridades",
        "Contexto e informações complementares"
      ],
      explicacao: "Esse modelo se chama pirâmide invertida: o mais importante vem primeiro, no lide, porque muita gente lê só o começo. Depois vêm os detalhes, as falas e, por fim, o contexto. Assim, quem para de ler no meio já entendeu o principal.",
      traco: "organizacao"
    },
    {
      horario: "17:00",
      titulo: "Hora do fechamento",
      urgente: true,
      cena: "⏰ ✂️ 📰",
      descricao: "A matéria do incêndio vai para a edição especial em 20 minutos. O texto tem o dobro do espaço disponível.",
      conversa: [
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "20 minutos pro fechamento ⏰" },
        { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "seu texto tem 900 palavras e o espaço é de 450. corta!" }
      ],
      naVidaReal: "O fechamento é o horário-limite para entregar o texto, e ele não espera ninguém. Editar é escolher: manter o essencial e cortar o que é secundário, sem perder a precisão.",
      opcoes: [
        {
          texto: "Corto o que é secundário, mantenho os fatos e as falas mais fortes e entrego no horário.",
          reacao: "ficou mais forte que a versão longa! 👏",
          resultado: "O texto entrou no horário, enxuto e claro.",
          pontos: { pressao: 2, organizacao: 1, criatividade: 1 }
        },
        {
          texto: "Peço para a editora aumentar o espaço da matéria.",
          reacao: "não tem espaço, já falei 😤",
          resultado: "Você perdeu cinco minutos negociando e teve que cortar correndo do mesmo jeito.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Corto o fim do texto, do jeito que estiver.",
          reacao: "cortou a fala da Dona Neide... e deixou o parágrafo da rotatória? 😬",
          resultado: "O texto coube, mas perdeu a parte mais humana da história.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Entrego atrasado(a), mas com o texto inteiro.",
          reacao: "a edição já fechou 😩",
          resultado: "A matéria ficou de fora da edição especial.",
          pontos: {}
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "Montagem falsa",
      cena: "📱 🤥 🔁",
      descricao: "Uma imagem com o logo do portal e uma manchete falsa sobre o incêndio está se espalhando nas redes.",
      conversa: [
        { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "olha isso 😨" },
        { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "fizeram uma montagem com o nosso logo dizendo que o incêndio foi criminoso" },
        { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "já tem gente xingando a gente nos comentários" }
      ],
      naVidaReal: "Jornalistas também trabalham contra a desinformação. Agências de checagem e redações mostram lado a lado o que é falso e o que é verdadeiro, para ajudar o público a não cair em montagens.",
      opcoes: [
        {
          texto: "Ignoro: não fui eu que fiz a montagem.",
          reacao: "mas tá com o nosso nome... 😟",
          resultado: "A montagem chegou a milhares de pessoas, e muita gente acreditou nela.",
          pontos: {}
        },
        {
          texto: "Respondo cada comentário com raiva.",
          reacao: "agora a briga nos comentários virou notícia também 🤦",
          resultado: "As respostas irritadas espalharam ainda mais a montagem.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Aviso a editora e publico um alerta mostrando a montagem ao lado da matéria verdadeira.",
          reacao: "o alerta já tem mais compartilhamentos que a montagem 💪",
          resultado: "O público entendeu o golpe, e outros veículos repercutiram o alerta.",
          pontos: { criatividade: 1, pessoas: 1, logica: 1, pressao: 1 }
        },
        {
          texto: "Peço para tirarem a matéria verdadeira do ar até a confusão passar.",
          reacao: "mas aí só sobra a falsa circulando... 😬",
          resultado: "Sem a matéria original, ficou mais difícil mostrar que a imagem era falsa.",
          pontos: { organizacao: 1 }
        }
      ]
    }
  ]
});
