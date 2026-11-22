/*
  Profissão: Jornalismo
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "jornalismo",
  nome: "Jornalismo",
  icone: "📰",
  cor: "#0d1b3d",
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

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("jornalismo", [
  {
    horario: "08:00",
    titulo: "Pauta da educação",
    cena: "📰 🏫 💬",
    descricao: "Na reunião de pauta, o tema da semana é educação pública.",
    conversa: [
      { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "saiu o resultado do Ideb, o índice das escolas 📊" },
      { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "não quero só a tabela de sempre. alguma ideia? 👀" }
    ],
    naVidaReal: "Dados ficam mais fortes quando viram histórias de pessoas reais. Uma boa reportagem combina números confiáveis com o olhar de quem vive aquela realidade.",
    opcoes: [
      {
        texto: "Proponho publicar a tabela com a nota de todas as escolas da cidade.",
        reacao: "útil, mas todo mundo vai fazer igual 😐",
        resultado: "A tabela foi publicada, mas se perdeu entre as de outros veículos.",
        pontos: { logica: 1, organizacao: 1 }
      },
      {
        texto: "Proponho passar um dia numa escola que melhorou muito, contando a história de professores e alunos com os números.",
        reacao: "\"a escola que saiu do último lugar\"? amei, vai 🔥",
        resultado: "A reportagem foi a mais lida da semana, e outras escolas pediram para conhecer o projeto.",
        pontos: { criatividade: 2, pessoas: 1 }
      },
      {
        texto: "Fico calado(a) e pego a pauta que sobrar.",
        reacao: "sobrou a da reunião da Câmara, então 😅",
        resultado: "Você passou o dia numa pauta burocrática que pouca gente leu.",
        pontos: {}
      },
      {
        texto: "Sugiro um vídeo de briga numa escola, que está viralizando.",
        reacao: "clique a gente tem... mas e a pauta da semana? 🤨",
        resultado: "O vídeo deu cliques no dia, mas não tinha nada a ver com o plano da redação.",
        pontos: { pressao: 1 }
      }
    ]
  },
  {
    horario: "09:30",
    titulo: "Boato de morte",
    urgente: true,
    cena: "📱 ⚠️ 🎤",
    descricao: "Um perfil nas redes anuncia a morte de uma cantora famosa. O assunto explode.",
    conversa: [
      { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "MORREU A CANTORA?? 😱 tá em todo lugar!" },
      { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "três sites já publicaram. a gente posta também??" }
    ],
    naVidaReal: "Boatos de morte de famosos são comuns e se espalham em minutos. Jornalistas só publicam depois de confirmar com fontes oficiais, como a família, a assessoria ou um hospital, mesmo que isso custe alguns minutos.",
    opcoes: [
      {
        texto: "Ligo para a assessoria e a família, confirmo que é falso e publico uma nota curta desmentindo.",
        reacao: "a assessoria confirmou: ela tá ótima, num show em Portugal! 😮‍💨",
        resultado: "O portal foi o primeiro a desmentir, e os sites que publicaram tiveram que se retratar.",
        pontos: { pressao: 2, logica: 1, organizacao: 1 }
      },
      {
        texto: "Publico a notícia da morte para sair na frente.",
        reacao: "a própria cantora acabou de postar um vídeo... 😬",
        resultado: "O portal teve que apagar a notícia e pedir desculpas publicamente.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Espero o dia inteiro para ver se aparece algo oficial.",
        reacao: "todo mundo já desmentiu, menos a gente 😕",
        resultado: "Você não errou, mas o público buscou a informação em outro lugar.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Ignoro: não é assunto para o nosso portal.",
        reacao: "é o assunto mais buscado do país... 🤔",
        resultado: "Os leitores ficaram sem uma informação confiável sobre o assunto do dia.",
        pontos: {}
      }
    ]
  },
  {
    horario: "11:00",
    titulo: "O campeão tímido",
    cena: "🏅 🎤 😳",
    descricao: "Você vai entrevistar um menino de 14 anos, de uma comunidade da periferia, que ganhou uma olimpíada nacional de matemática. Ele é muito tímido.",
    conversa: [
      { quem: "Joel, estudante", avatar: "👦🏿", fala: "oi... 😳" },
      { quem: "Dona Rose, mãe do Joel", avatar: "👩🏿", fala: "ele é tímido, viu? mas é um menino de ouro 🥹" }
    ],
    naVidaReal: "Entrevistar bem é deixar a pessoa à vontade para contar a própria história. O Código de Ética dos Jornalistas também proíbe distorcer o que as pessoas dizem: as falas publicadas precisam ser verdadeiras.",
    opcoes: [
      {
        texto: "Faço as perguntas rápido, uma atrás da outra, para terminar logo.",
        reacao: "...sim. ...não. ...não sei. 😶",
        resultado: "Ele respondeu com monossílabos, e a matéria ficou sem vida.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Converso antes de ligar o gravador, deixo ele à vontade e pergunto como ele começou a gostar de matemática.",
        reacao: "...eu fazia as contas da venda de bolo da minha mãe desde os 7 😄",
        resultado: "A história dele emocionou os leitores, e uma empresa ofereceu uma bolsa de estudos.",
        pontos: { pessoas: 2, pressao: 1 }
      },
      {
        texto: "Escrevo a matéria só com os dados da competição.",
        reacao: "certinho, mas cadê o Joel nessa história? 🤔",
        resultado: "A matéria ficou correta, mas fria, e pouca gente leu.",
        pontos: { logica: 1 }
      },
      {
        texto: "Invento uma frase de efeito para ele, que fica mais bonita na matéria.",
        reacao: "eu nunca falei isso... 😟",
        resultado: "A família reclamou, e o portal teve que corrigir a matéria.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "13:00",
    titulo: "Confira os números",
    cena: "🔢 📝 ✅",
    conversa: [
      { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "o comunicado da prefeitura diz: 12 escolas reformadas, 3.400 alunos, R$ 6 milhões, entrega em março 📄" },
      { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "confere o texto do Vini antes de publicar 👇" }
    ],
    pergunta: "Toque na frase que não bate com o comunicado:",
    linhas: [
      "A prefeitura reformou 12 escolas municipais.",
      "As obras beneficiaram 3.400 alunos.",
      "O investimento foi de R$ 60 milhões.",
      "As obras foram entregues em março.",
      "A Secretaria de Educação foi procurada pela reportagem."
    ],
    correta: 2,
    explicacao: "O comunicado fala em R$ 6 milhões, e não R$ 60 milhões. Um zero a mais muda completamente a notícia. Checar números, nomes e datas com a fonte original é parte essencial do trabalho.",
    traco: "logica"
  },
  {
    horario: "14:30",
    titulo: "A fonte que pede segredo",
    cena: "🤫 🏥 📄",
    descricao: "Uma funcionária de um hospital conta que remédios vencidos estão sendo usados, mas pede para não ter o nome publicado.",
    conversa: [
      { quem: "Fonte anônima", avatar: "👤", fala: "tem remédio vencido sendo usado no hospital, eu vi 😟" },
      { quem: "Fonte anônima", avatar: "👤", fala: "mas se meu nome sair, eu perco o emprego. por favor..." }
    ],
    naVidaReal: "A Constituição garante ao jornalista o sigilo da fonte. Mas uma denúncia anônima não basta: ela precisa ser confirmada com documentos e outras fontes, e o acusado tem direito de responder antes da publicação.",
    opcoes: [
      {
        texto: "Desisto da matéria para proteger a fonte.",
        reacao: "...então ninguém vai saber? 😔",
        resultado: "A fonte ficou protegida, mas o problema no hospital continuou.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Protejo o nome dela, confirmo a denúncia com documentos e outra fonte e ouço o hospital antes de publicar.",
        reacao: "o hospital admitiu e recolheu os lotes 😮",
        resultado: "A reportagem saiu confirmada, sem expor ninguém, e a vigilância sanitária abriu uma investigação.",
        pontos: { pressao: 2, logica: 1, pessoas: 1 }
      },
      {
        texto: "Publico na hora, só com o relato dela, em tom de escândalo.",
        reacao: "o hospital diz que é mentira e vai processar 😬",
        resultado: "Sem provas, a matéria foi contestada, e a denúncia perdeu força.",
        pontos: { criatividade: 1, pressao: 1 }
      },
      {
        texto: "Passo o caso para a editora e esqueço o assunto.",
        reacao: "e quem vai apurar? 😕",
        resultado: "A denúncia ficou esquecida na caixa de e-mails da redação.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "ordenar",
    horario: "16:00",
    titulo: "Reportagem de TV",
    cena: "🎥 ✂️ 📺",
    conversa: [
      { quem: "Caio, cinegrafista", avatar: "👨🏻", fala: "a reportagem do Joel vai pra TV também 🎥" },
      { quem: "Caio, cinegrafista", avatar: "👨🏻", fala: "bora organizar a produção? 👇" }
    ],
    pergunta: "Toque nas etapas na ordem em que uma reportagem de TV costuma ser feita:",
    itens: [
      "Gravar as entrevistas e as imagens",
      "Assistir ao material e escolher os melhores trechos",
      "Escrever o texto narrado e montar a edição",
      "Revisar e exibir a reportagem"
    ],
    explicacao: "Depois de gravar, a equipe assiste a tudo e escolhe os trechos mais fortes. Em seguida vem o texto narrado (o \"off\") e a edição. A revisão final evita erros antes de ir ao ar.",
    traco: "organizacao"
  },
  {
    horario: "17:00",
    titulo: "O nome errado",
    urgente: true,
    cena: "⚠️ 📰 😰",
    descricao: "Um leitor avisa: a matéria publicada de manhã sobre um assalto traz o nome errado do suspeito. O nome é de um morador inocente.",
    conversa: [
      { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "o rapaz da matéria do assalto não é o suspeito 😱" },
      { quem: "Sandra, editora-chefe", avatar: "👩🏽‍💼", fala: "ele tá sendo xingado no bairro por nossa causa!" }
    ],
    naVidaReal: "Errar acontece, mas esconder o erro é pior. Veículos sérios corrigem rápido e publicam uma correção visível, explicando o que estava errado. Um erro assim também pode gerar direito de resposta e indenização.",
    opcoes: [
      {
        texto: "Corrijo na hora, publico uma correção visível explicando o erro, aviso a editora e procuro o rapaz.",
        reacao: "ele agradeceu por a gente ter assumido o erro 🙏",
        resultado: "A correção circulou tanto quanto a matéria, e o rapaz teve o nome limpo.",
        pontos: { pressao: 2, organizacao: 1, criatividade: 1 }
      },
      {
        texto: "Ligo para o rapaz para pedir desculpas, mas deixo a matéria como está.",
        reacao: "e a matéria continua lá com meu nome? 😠",
        resultado: "O pedido de desculpas não resolveu, porque o erro continuou publicado.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Troco o nome em silêncio, sem avisar ninguém.",
        reacao: "o print da versão errada tá circulando... 😬",
        resultado: "A troca silenciosa foi descoberta, e o portal foi acusado de esconder o erro.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Deixo como está: ninguém vai perceber.",
        reacao: "ele já procurou um advogado 😳",
        resultado: "O portal foi processado e teve que publicar a correção por ordem judicial.",
        pontos: {}
      }
    ]
  },
  {
    horario: "18:30",
    titulo: "Ataques nas redes",
    cena: "📱 😡 🛡️",
    descricao: "Depois da reportagem do hospital, você começa a receber ofensas e até ameaças nas redes.",
    conversa: [
      { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "cara, olha o que tão mandando pra você 😨" },
      { quem: "Vini, estagiário", avatar: "🧑🏾", fala: "tem gente dizendo que sabe onde você mora..." }
    ],
    naVidaReal: "Jornalistas são alvo frequente de ataques online, principalmente depois de reportagens incômodas. A orientação é registrar as ameaças, avisar o veículo e, quando há risco, procurar a polícia. A transparência sobre como a matéria foi feita também ajuda.",
    opcoes: [
      {
        texto: "Ignoro tudo, até as ameaças mais graves.",
        reacao: "não acho que dá pra ignorar isso... 😟",
        resultado: "As ameaças aumentaram, e ninguém da redação sabia de nada.",
        pontos: {}
      },
      {
        texto: "Respondo os ataques no mesmo tom.",
        reacao: "agora virou briga pública 🤦",
        resultado: "As respostas viraram print e alimentaram ainda mais os ataques.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Guardo prints das ameaças, aviso a editora, e o jornal publica um texto explicando como a reportagem foi apurada.",
        reacao: "a direção já acionou o jurídico e a polícia 👍",
        resultado: "Você ficou protegido(a), e o texto de transparência ganhou o apoio dos leitores.",
        pontos: { criatividade: 1, pessoas: 1, logica: 1, pressao: 1 }
      },
      {
        texto: "Peço para fecharem os comentários de todo o portal.",
        reacao: "de todo o portal? 😕",
        resultado: "Os comentários pararam no site, mas as ameaças continuaram nas redes sociais.",
        pontos: { organizacao: 1 }
      }
    ]
  }
]);
