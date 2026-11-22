/*
  Profissão: Psicologia
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "psicologia",
  nome: "Psicologia",
  icone: "🧠",
  cor: "#2747d6",
  area: "saude",
  resumo: "Ouvir, acolher e ajudar pessoas a lidar com emoções, relações e momentos difíceis da vida.",

  perfil: {
    pessoas: {
      peso: 5,
      gostar: "Ajudar alguém a se entender melhor e a atravessar fases difíceis.",
      dificil: "Ouvir sofrimento todos os dias sem levar tudo para casa."
    },
    logica: {
      peso: 3,
      gostar: "Entender padrões de comportamento e estudar pesquisas.",
      dificil: "Muita teoria, leitura científica e estatística durante a graduação."
    },
    pressao: {
      peso: 4,
      gostar: "Manter a calma e acolher quem está em crise.",
      dificil: "Situações de crise, como risco de vida, exigem decisões delicadas e rápidas."
    },
    organizacao: {
      peso: 3,
      gostar: "Agenda organizada, sessões com começo e fim, e sigilo bem cuidado.",
      dificil: "Prontuários, relatórios e limites rígidos de ética e sigilo."
    },
    criatividade: {
      peso: 3,
      gostar: "Usar jogos, desenhos e dinâmicas para ajudar cada pessoa.",
      dificil: "Cada pessoa é única: não existe receita pronta que sirva para todo mundo."
    }
  },

  cursos: [
    "Graduação em Psicologia (5 anos)",
    "Registro no Conselho Regional de Psicologia (CRP) para atuar",
    "Especializações: clínica, escolar, organizacional, saúde, neuropsicologia e outras"
  ],

  situacoes: [
    {
      horario: "08:30",
      titulo: "Primeira sessão",
      cena: "🛋️ 🎲 🤫",
      descricao: "Lucas, de 16 anos, chega ao consultório levado pela mãe. Ele cruza os braços e olha pro chão.",
      conversa: [
        { quem: "Lucas, paciente", avatar: "🧑🏻‍🦱", fala: "oi." },
        { quem: "Lucas, paciente", avatar: "🧑🏻‍🦱", fala: "minha mãe que me obrigou a vir 🙄" },
        { quem: "Lucas, paciente", avatar: "🧑🏻‍🦱", fala: "eu não tenho nada pra falar. pode ser rápido?" }
      ],
      naVidaReal: "Muitos pacientes chegam sem querer estar ali. Criar vínculo e confiança leva tempo, e o primeiro passo é respeitar o ritmo da pessoa.",
      opcoes: [
        {
          texto: "Digo que ele precisa falar, senão não adianta vir.",
          reacao: "então não vou falar. pronto. 😒",
          resultado: "Ele ficou ainda mais fechado e a sessão terminou em silêncio.",
          pontos: {}
        },
        {
          texto: "Explico como funciona, garanto o sigilo e deixo ele escolher por onde começar.",
          reacao: "...sigilo, tipo, minha mãe não fica sabendo de nada? 🤨 tá. tem uns assuntos de escola...",
          resultado: "Aos poucos ele começou a falar de um problema na escola, e a sessão rendeu mais do que o esperado.",
          pontos: { pessoas: 2, criatividade: 1 }
        },
        {
          texto: "Proponho um jogo de cartas enquanto a gente conversa.",
          reacao: "jogo de cartas? 😳 ...tá, eu jogo. mas não vou falar.",
          resultado: "Ele topou jogar e, depois de uns minutos, começou a puxar assunto sozinho.",
          pontos: { criatividade: 2, pessoas: 1 }
        },
        {
          texto: "Faço um questionário de 20 perguntas, uma atrás da outra.",
          reacao: "isso aqui parece prova... 🙄",
          resultado: "Você coletou dados, mas ele respondeu tudo com uma palavra só.",
          pontos: { organizacao: 1, logica: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "09:45",
      titulo: "Qual resposta acolhe?",
      cena: "👂 💬 💜",
      conversa: [
        { quem: "Camila, paciente", avatar: "👩🏼", fala: "eu sinto que sou um fracasso 😞" },
        { quem: "Camila, paciente", avatar: "👩🏼", fala: "tudo que eu tento dá errado. já nem sei por que continuo tentando." }
      ],
      pergunta: "Qual resposta ajuda mais a Camila a se sentir ouvida?",
      alternativas: [
        "“Que isso, você não é fracasso! Anima aí!”",
        "“Parece que você está se cobrando muito. Quer me contar o que aconteceu?”",
        "“Todo mundo se sente assim às vezes, passa.”",
        "“Você só precisa pensar positivo.”"
      ],
      correta: 1,
      explicacao: "Em vez de negar o que a pessoa sente ou dar um conselho pronto, o profissional acolhe e abre espaço para ela falar. Isso se chama escuta ativa e é a base do trabalho em Psicologia.",
      traco: "pessoas"
    },
    {
      horario: "11:00",
      titulo: "Sinal de alerta",
      urgente: true,
      cena: "📱 🚨 💔",
      descricao: "Chega uma mensagem de uma paciente fora do horário da sessão.",
      conversa: [
        { quem: "Camila, paciente", avatar: "👩🏼", fala: "oi... desculpa te mandar mensagem assim 😞" },
        { quem: "Camila, paciente", avatar: "👩🏼", fala: "eu tô cansada de tudo. não sei se vale a pena continuar." },
        { quem: "Camila, paciente", avatar: "👩🏼", fala: "acho que você é a única pessoa com quem eu consigo falar..." }
      ],
      naVidaReal: "Mensagens assim exigem atenção imediata. No Brasil, o CVV atende de graça, 24 horas, pelo telefone 188, e o SAMU pelo 192, em caso de risco imediato.",
      opcoes: [
        {
          texto: "Respondo amanhã, na próxima sessão.",
          reacao: "(a mensagem foi visualizada, mas ela não respondeu mais)",
          resultado: "Ela ficou sem apoio naquele momento difícil, e você só soube dias depois como ela passou.",
          pontos: {}
        },
        {
          texto: "Mando um “calma, vai passar” e volto ao trabalho.",
          reacao: "tá... obrigada. 😔",
          resultado: "A resposta rápida foi bem-intencionada, mas não acolheu nem avaliou o risco.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Ligo, escuto e, se houver risco, aciono a rede de apoio e o serviço de emergência.",
          reacao: "(ela atende) ...eu tô com medo de mim mesma. 😢",
          resultado: "Você avaliou o risco, combinou com a família e acionou o apoio necessário. Ela foi encaminhada com segurança.",
          pontos: { pressao: 2, logica: 1, organizacao: 1 }
        },
        {
          texto: "Respondo agora, acolho, pergunto diretamente se ela pensa em se machucar e combino quem pode ficar com ela.",
          reacao: "...eu pensei, sim. mas minha irmã tá em casa. posso chamar ela. 🥺",
          resultado: "A conversa direta fez ela se abrir, a irmã ficou com ela e vocês marcaram uma sessão extra no dia seguinte.",
          pontos: { pessoas: 2, pressao: 2 }
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "Sigilo",
      cena: "🤐 👩 📋",
      descricao: "A mãe do Lucas te procura na saída da sessão, curiosa.",
      conversa: [
        { quem: "Marta, mãe do Lucas", avatar: "👩🏽‍🦱", fala: "oi, doutor(a)! então, como foi o Lucas? 😊" },
        { quem: "Marta, mãe do Lucas", avatar: "👩🏽‍🦱", fala: "me conta tudo que ele falou. eu pago a sessão, tenho direito de saber, né?" }
      ],
      naVidaReal: "O sigilo é um dos pilares da Psicologia. Mesmo com pacientes menores de idade, o profissional compartilha só o necessário, de forma combinada com o paciente.",
      opcoes: [
        {
          texto: "Conto tudo: ela é a mãe e paga a sessão.",
          reacao: "nossa, então era isso! vou ter uma conversa séria com ele 😠",
          resultado: "O Lucas descobriu e deixou de confiar em você. Ele parou de falar na sessão seguinte.",
          pontos: {}
        },
        {
          texto: "Explico que o conteúdo é sigiloso, mas posso orientar a família sobre como ajudar.",
          reacao: "ah, entendi... e como eu posso ajudar ele, então? 🤔",
          resultado: "Ela entendeu a regra e saiu com algumas orientações práticas, sem exposição do filho.",
          pontos: { organizacao: 2, pessoas: 1 }
        },
        {
          texto: "Digo que não posso falar nada e vou embora sem explicar.",
          reacao: "ué... foi grosseiro, viu? 😤",
          resultado: "A mãe ficou ofendida e ameaçou tirar o filho do tratamento.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Marco uma conversa com os dois para combinar juntos o que pode ser compartilhado.",
          reacao: "ah, boa ideia! assim eu sei onde posso ajudar 😊",
          resultado: "Mãe e filho combinaram o que seria dito, e o Lucas se sentiu respeitado.",
          pontos: { pessoas: 2, organizacao: 1, criatividade: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "ordenar",
      horario: "15:00",
      titulo: "Monte a sessão",
      cena: "🛋️ 📝 ⏱️",
      conversa: [
        { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "pra supervisão de hoje, me conta como você estrutura uma sessão 📝" },
        { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "coloca os passos na ordem que faz mais sentido 👇" }
      ],
      pergunta: "Toque nas etapas na ordem em que uma sessão costuma acontecer:",
      itens: [
        "Acolher e perguntar como a pessoa está",
        "Ouvir o que ela traz, sem interromper",
        "Ajudar a pessoa a nomear o que sente",
        "Combinar o que fazer até a próxima sessão"
      ],
      explicacao: "Uma sessão costuma começar com acolhimento, passa pela escuta, ajuda a pessoa a dar nome ao que sente e termina com um combinado até o próximo encontro. Ter essa estrutura em mente dá segurança ao profissional.",
      traco: "organizacao"
    },
    {
      horario: "16:15",
      titulo: "Um caso que mexe com você",
      cena: "💭 😔 🌧️",
      descricao: "A história de um paciente te tocou bem mais do que o normal.",
      conversa: [
        { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "vi que o caso do Rodrigo te abalou bastante hoje... 🫂" },
        { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "como você está se sentindo?" }
      ],
      naVidaReal: "Psicólogos também fazem terapia e supervisão, justamente para cuidar da própria saúde mental. Quem escuta sofrimento o dia todo precisa de cuidado.",
      opcoes: [
        {
          texto: "Finjo que não me abalou nada.",
          reacao: "hum... tá bom. mas se precisar, eu tô aqui, viu? 😶",
          resultado: "O sentimento ficou acumulado e começou a afetar seu sono nas semanas seguintes.",
          pontos: {}
        },
        {
          texto: "Levo o caso para casa e passo a noite pensando nele.",
          reacao: "isso vai te desgastar... 😟",
          resultado: "Você passou a noite em claro e chegou exausto(a) ao dia seguinte.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Passo o caso para outro profissional e evito situações parecidas daqui pra frente.",
          reacao: "entendo, mas situações assim vão se repetir na profissão 😕",
          resultado: "Você se protegeu, mas o paciente precisou recomeçar com outra pessoa.",
          pontos: {}
        },
        {
          texto: "Converso com a supervisora e reservo um tempo para cuidar de mim.",
          reacao: "isso é maturidade profissional, viu? 💜",
          resultado: "A supervisão te ajudou a entender o que o caso despertou em você, e você se sentiu mais leve.",
          pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
        }
      ]
    },
    {
      horario: "17:30",
      titulo: "O paciente que falta",
      cena: "📅 ❌ 📱",
      descricao: "Marcos faltou às últimas três sessões sem avisar.",
      conversa: [
        { quem: "Recepção da clínica", avatar: "💁🏽‍♀️", fala: "oi, doutor(a)! o Marcos faltou de novo hoje 😕" },
        { quem: "Recepção da clínica", avatar: "💁🏽‍♀️", fala: "e é a terceira vez seguida. o que a gente faz?" }
      ],
      naVidaReal: "Faltas e abandono são comuns na terapia. Entender o motivo, em vez de só cobrar, costuma ajudar a pessoa a voltar.",
      opcoes: [
        {
          texto: "Desisto: se ele não quer, não adianta.",
          reacao: "ok... vou arquivar o caso então 📁",
          resultado: "O Marcos nunca mais voltou. Meses depois, você soube que ele passava por um momento muito difícil.",
          pontos: {}
        },
        {
          texto: "Cobro as sessões faltadas com o valor cheio e mando um aviso formal.",
          reacao: "que frieza, né... 😬",
          resultado: "A cobrança foi legal, mas afastou ainda mais o paciente.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Mando uma mensagem acolhedora perguntando como ele está e se prefere outro horário.",
          reacao: "(ele responde) oi... desculpa. tô sem tempo. outro horário seria ótimo 🙏",
          resultado: "O Marcos respondeu e marcou um novo horário, que cabia melhor na rotina dele.",
          pontos: { pessoas: 2, organizacao: 1 }
        },
        {
          texto: "Proponho sessões por vídeo ou uma dinâmica diferente, mais leve.",
          reacao: "(ele responde) por vídeo eu consigo! antes eu enrolava no trânsito 😅",
          resultado: "Com a opção de vídeo, o Marcos voltou ao tratamento com mais regularidade.",
          pontos: { criatividade: 2, pessoas: 1, logica: 1 }
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "O prontuário",
      cena: "🗄️ 🔒 📝",
      descricao: "Última tarefa do dia: registrar as sessões antes de ir embora.",
      conversa: [
        { quem: "Recepção da clínica", avatar: "💁🏽‍♀️", fala: "doutor(a), tá faltando registrar as sessões de hoje 📝" },
        { quem: "Recepção da clínica", avatar: "💁🏽‍♀️", fala: "e o conselho exige que fique tudo guardado com segurança 🔒" }
      ],
      naVidaReal: "O registro das sessões é obrigatório, mas deve ser sucinto e guardado com segurança. Ele existe para proteger o paciente e o profissional.",
      opcoes: [
        {
          texto: "Conto o caso com detalhes no grupo de mensagens da equipe para pedir opinião.",
          reacao: "no grupo?! 😱 isso pode virar problema sério!",
          resultado: "A informação vazou e você respondeu a uma denúncia no conselho de ética.",
          pontos: {}
        },
        {
          texto: "Não registro nada: confio na memória.",
          reacao: "o conselho vai cobrar, viu? 😬",
          resultado: "Meses depois, um detalhe importante da história do paciente foi esquecido.",
          pontos: {}
        },
        {
          texto: "Anoto num caderno pessoal e deixo em cima da mesa.",
          reacao: "em cima da mesa? e se alguém ver? 😳",
          resultado: "Uma funcionária da limpeza viu a capa do caderno com o nome de um paciente.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Registro só o necessário, de forma clara, e guardo com segurança.",
          reacao: "perfeito! assim fica seguro pra todo mundo 🔒",
          resultado: "O prontuário ficou completo, objetivo e protegido, exatamente como o conselho pede.",
          pontos: { organizacao: 2, logica: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("psicologia", [
  {
    horario: "08:30",
    titulo: "O menino que não quer falar",
    cena: "🧸 🖍️ 🤐",
    descricao: "Primeira sessão com Theo, de 8 anos. A escola pediu acompanhamento porque ele anda muito quieto. Ele entra agarrado na mãe.",
    conversa: [
      { quem: "Patrícia, mãe do Theo", avatar: "👩🏽", fala: "ele não queria vir de jeito nenhum 😓" },
      { quem: "Theo, paciente", avatar: "👦🏻", fala: "..." },
      { quem: "Patrícia, mãe do Theo", avatar: "👩🏽", fala: "cumprimenta, filho!" }
    ],
    naVidaReal: "Com crianças, o brincar e o desenho são formas de comunicação tão importantes quanto a fala. A primeira sessão serve principalmente para a criança se sentir segura no espaço e com o profissional.",
    opcoes: [
      {
        texto: "Digo para a mãe que, se ele não falar, não tem como ajudar.",
        reacao: "então a gente veio à toa? 😕",
        resultado: "O Theo se fechou ainda mais, e a família ficou sem saber se voltava.",
        pontos: {}
      },
      {
        texto: "Me apresento, explico com palavras simples o que a gente faz ali e deixo ele explorar a sala no tempo dele.",
        reacao: "...posso mexer naqueles bonecos? 👀",
        resultado: "Depois de uns minutos, ele começou a brincar e, aos poucos, a contar sobre a escola.",
        pontos: { pessoas: 2, criatividade: 1 }
      },
      {
        texto: "Pego papel e lápis de cor e proponho desenharmos juntos enquanto conversamos.",
        reacao: "eu desenho um dinossauro! 🦖",
        resultado: "Ele se soltou no desenho, mas ainda não ficou claro o que estava incomodando.",
        pontos: { criatividade: 2, pessoas: 1 }
      },
      {
        texto: "Aplico logo uma lista de perguntas de avaliação.",
        reacao: "não sei... não sei... 😶",
        resultado: "Ele respondeu \"não sei\" para quase tudo, e a sessão rendeu pouco.",
        pontos: { organizacao: 1, logica: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "09:45",
    titulo: "Pergunta aberta",
    cena: "💬 👂 💜",
    conversa: [
      { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "o paciente disse: \"não aguento mais o meu trabalho\" 💼" },
      { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "qual dessas respostas ajuda ele a continuar falando?" }
    ],
    pergunta: "Qual resposta convida a pessoa a contar mais, sem julgar?",
    alternativas: [
      "\"Você já pensou em pedir demissão?\"",
      "\"Todo mundo passa por isso, faz parte.\"",
      "\"O que tem sido mais difícil para você no trabalho?\"",
      "\"Você precisa ser mais forte.\""
    ],
    correta: 2,
    explicacao: "Perguntas abertas (\"o que\", \"como\") convidam a pessoa a explicar com as próprias palavras. Conselhos rápidos, comparações e cobranças costumam encerrar a conversa antes de entender o problema.",
    traco: "pessoas"
  },
  {
    horario: "11:00",
    titulo: "Crise na sala de espera",
    urgente: true,
    cena: "💨 💓 🪑",
    descricao: "A recepcionista bate na porta: um paciente que espera a sessão está tremendo, sem ar, dizendo que vai morrer.",
    conversa: [
      { quem: "Recepção da clínica", avatar: "🧑🏽‍💼", fala: "vem rápido! o Renan tá passando muito mal aqui fora 😰" },
      { quem: "Renan, paciente", avatar: "👨🏻", fala: "meu coração... eu não consigo respirar... eu vou morrer 😱" }
    ],
    naVidaReal: "Uma crise de pânico dá sintomas físicos fortes, como falta de ar e coração acelerado, mas costuma passar em alguns minutos. Ficar junto, falar com calma e ajudar a respirar devagar ajuda. Se houver dúvida sobre um problema físico, chama-se o serviço de emergência.",
    opcoes: [
      {
        texto: "Continuo a sessão que estou fazendo e peço para a recepção resolver.",
        reacao: "eu não sei o que fazer!! 😰",
        resultado: "A recepcionista ficou sozinha com a crise, e o paciente passou mais tempo apavorado.",
        pontos: {}
      },
      {
        texto: "Digo \"calma, respira, não é nada\" e volto para a sala.",
        reacao: "como não é nada?! 😱",
        resultado: "Ele se sentiu ignorado, e a crise durou ainda mais.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Verifico se há sinais de problema físico, chamo o SAMU se for preciso e registro o que aconteceu.",
        reacao: "tá... tá passando um pouco... 😮‍💨",
        resultado: "Não era nada físico. O registro ajudou depois a entender o que disparou a crise.",
        pontos: { pressao: 2, logica: 1, organizacao: 1 }
      },
      {
        texto: "Vou até ele, falo devagar, peço que respire no meu ritmo e fico junto até passar.",
        reacao: "...tá passando. desculpa o susto 😓",
        resultado: "Em poucos minutos a crise passou. Na sessão, vocês conversaram sobre o que ele sentiu.",
        pontos: { pessoas: 2, pressao: 2 }
      }
    ]
  },
  {
    horario: "13:30",
    titulo: "A escola quer saber tudo",
    cena: "🏫 📄 🤐",
    descricao: "A coordenadora da escola de um paciente de 15 anos liga pedindo um relatório detalhado sobre o que ele conta nas sessões.",
    conversa: [
      { quem: "Sueli, coordenadora da escola", avatar: "👩🏼‍💼", fala: "preciso entender o que se passa com o Gabriel, ele brigou de novo 😓" },
      { quem: "Sueli, coordenadora da escola", avatar: "👩🏼‍💼", fala: "me manda um relatório com tudo o que ele falou, por favor" }
    ],
    naVidaReal: "O Código de Ética do psicólogo protege o sigilo. Documentos para a escola só são feitos com autorização da família e trazem apenas o necessário para ajudar, sem expor o que o paciente contou.",
    opcoes: [
      {
        texto: "Mando o relatório completo, com tudo o que ele contou.",
        reacao: "nossa, quanta coisa... vou mostrar pra direção 😳",
        resultado: "O Gabriel descobriu que a escola sabia seus segredos e parou de confiar em você.",
        pontos: {}
      },
      {
        texto: "Explico o sigilo e ofereço um documento só com o necessário, com autorização da família.",
        reacao: "ah, entendi. pode ser assim, sim",
        resultado: "A escola recebeu orientações úteis, e o paciente continuou confiando nas sessões.",
        pontos: { organizacao: 2, pessoas: 1 }
      },
      {
        texto: "Digo que não posso falar nada e desligo.",
        reacao: "mas eu só quero ajudar o menino... 😕",
        resultado: "O sigilo foi mantido, mas a escola ficou sem saber como apoiar o aluno.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Proponho uma reunião com a família e a escola para combinar como apoiar o Gabriel, sem expor o que ele contou.",
        reacao: "ótima ideia, marco pra semana que vem 👍",
        resultado: "A reunião criou um plano em conjunto, e o Gabriel participou da decisão.",
        pontos: { pessoas: 2, organizacao: 1, criatividade: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "ordenar",
    horario: "15:00",
    titulo: "Primeiros cuidados na crise",
    cena: "🤝 🧭 📞",
    conversa: [
      { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "vamos treinar o atendimento a alguém em crise 🤝" },
      { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "coloca as etapas na ordem 👇" }
    ],
    pergunta: "Toque nas etapas na ordem em que costumam acontecer no atendimento a uma pessoa em crise:",
    itens: [
      "Acolher a pessoa e ouvir sem julgar",
      "Avaliar se há risco para ela ou para outras pessoas",
      "Acionar a rede de apoio: família e serviços de saúde",
      "Combinar o acompanhamento dos próximos dias"
    ],
    explicacao: "Primeiro a pessoa precisa se sentir acolhida; só assim é possível entender se há risco. Depois, a rede de apoio é acionada, e o cuidado continua nos dias seguintes. Ninguém atende uma crise sozinho.",
    traco: "organizacao"
  },
  {
    horario: "16:15",
    titulo: "O paciente que te ofendeu",
    cena: "😠 💬 🌧️",
    descricao: "Durante a sessão, um paciente se irritou e te disse coisas muito ofensivas antes de sair batendo a porta.",
    conversa: [
      { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "ouvi a porta batendo. tudo bem com você? 😟" },
      { quem: "Dra. Beatriz, supervisora", avatar: "👩🏽‍🏫", fala: "quer conversar sobre isso antes do próximo atendimento?" }
    ],
    naVidaReal: "Pacientes podem descarregar raiva no profissional, e isso costuma dizer algo sobre a história deles. A supervisão ajuda a entender o que aconteceu e a separar o que é do paciente e o que é seu.",
    opcoes: [
      {
        texto: "Digo que está tudo bem e que não me afetou em nada.",
        reacao: "tem certeza? 🤔",
        resultado: "Você atendeu os próximos pacientes distraído(a), com a cena na cabeça.",
        pontos: {}
      },
      {
        texto: "Fico remoendo as ofensas a noite toda.",
        reacao: "não carrega isso sozinho(a), tá? 💜",
        resultado: "Você dormiu mal e chegou cansado(a) no dia seguinte.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Decido não atender mais esse paciente, sem conversar com ninguém.",
        reacao: "hmm, vamos pensar juntos antes de decidir? 😕",
        resultado: "O paciente ficou sem atendimento, e o motivo da raiva nunca foi entendido.",
        pontos: {}
      },
      {
        texto: "Aceito a conversa, levo o caso à supervisão e penso com ela o que a raiva dele pode significar.",
        reacao: "isso. e você também pode se cuidar depois de um dia assim 💜",
        resultado: "Você entendeu melhor o paciente, e ele voltou na semana seguinte pedindo desculpas.",
        pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
      }
    ]
  },
  {
    horario: "17:30",
    titulo: "Quero parar a terapia",
    cena: "🚪 🗓️ 💭",
    descricao: "Uma paciente que vem há seis meses manda mensagem dizendo que quer encerrar a terapia a partir de hoje.",
    conversa: [
      { quem: "Larissa, paciente", avatar: "👩🏻", fala: "oi! acho que já tô bem, quero parar a terapia 😊" },
      { quem: "Larissa, paciente", avatar: "👩🏻", fala: "e também tá meio pesado pagar toda semana..." }
    ],
    naVidaReal: "O encerramento da terapia faz parte do processo e é bom que seja conversado. Muitas vezes há outras saídas, como diminuir a frequência, mudar o formato ou procurar atendimento gratuito em clínicas-escola.",
    opcoes: [
      {
        texto: "Aceito e não pergunto mais nada.",
        reacao: "tá bom, obrigada por tudo! 👋",
        resultado: "Ela parou de repente, sem conversar sobre o que ainda estava em aberto.",
        pontos: {}
      },
      {
        texto: "Mando o contrato lembrando a regra de aviso prévio.",
        reacao: "ah... ok. 😐",
        resultado: "A regra foi cumprida, mas ela sentiu que só o pagamento importava.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Proponho uma sessão de encerramento para conversarmos sobre a decisão.",
        reacao: "faz sentido, uma última pra fechar 🙂",
        resultado: "Na última sessão, vocês revisaram o que mudou e combinaram como ela pode voltar se precisar.",
        pontos: { pessoas: 2, organizacao: 1 }
      },
      {
        texto: "Sugiro mudar o formato: sessões a cada 15 dias ou online, que pesam menos no bolso.",
        reacao: "a cada 15 dias? assim eu consigo! 😃",
        resultado: "Ela continuou o tratamento num ritmo possível e terminou com segurança meses depois.",
        pontos: { criatividade: 2, pessoas: 1, logica: 1 }
      }
    ]
  },
  {
    horario: "18:30",
    titulo: "Mensagens à meia-noite",
    cena: "📱 🌙 🔔",
    descricao: "Um paciente começou a mandar mensagens longas todos os dias, de madrugada, esperando resposta na hora.",
    conversa: [
      { quem: "Recepção da clínica", avatar: "🧑🏽‍💼", fala: "o Diego mandou 14 mensagens no seu número ontem à noite 😬" },
      { quem: "Recepção da clínica", avatar: "🧑🏽‍💼", fala: "ele disse que fica bravo quando você não responde" }
    ],
    naVidaReal: "Combinar limites claros de contato faz parte do trabalho e protege o paciente e o profissional. Também é importante deixar registrado o que fazer numa emergência fora do horário, como procurar o CVV (188) ou o SAMU (192).",
    opcoes: [
      {
        texto: "Passo a responder tudo na hora, a qualquer hora.",
        reacao: "isso vai te esgotar... 😟",
        resultado: "Em poucas semanas você estava exausto(a), e as mensagens só aumentaram.",
        pontos: {}
      },
      {
        texto: "Bloqueio o número dele sem avisar.",
        reacao: "e se for uma emergência de verdade? 😳",
        resultado: "Ele se sentiu abandonado e faltou às sessões seguintes.",
        pontos: {}
      },
      {
        texto: "Configuro uma resposta automática dizendo que só respondo em horário comercial.",
        reacao: "ajuda... mas não resolve a conversa 🤔",
        resultado: "As mensagens diminuíram, mas o motivo delas nunca foi conversado.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Combino com ele regras claras de contato, explico o que fazer numa emergência e deixo isso registrado.",
        reacao: "faz sentido. e na sessão a gente fala do que me aflige à noite 🙏",
        resultado: "As mensagens viraram assunto da terapia, e ele passou a usar o CVV quando precisava.",
        pontos: { organizacao: 2, logica: 1 }
      }
    ]
  }
]);
