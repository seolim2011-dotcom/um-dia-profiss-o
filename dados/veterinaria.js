/*
  Profissão: Medicina Veterinária
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "veterinaria",
  nome: "Medicina Veterinária",
  icone: "🐾",
  cor: "#0d1b3d",
  area: "saude",
  resumo: "Cuidar da saúde dos animais em clínicas, hospitais, fazendas e na saúde pública.",

  perfil: {
    pessoas: {
      peso: 4,
      gostar: "Criar vínculo com os animais e com as famílias que cuidam deles.",
      dificil: "Conversar com tutores aflitos e dar notícias difíceis, inclusive sobre eutanásia."
    },
    logica: {
      peso: 3,
      gostar: "Investigar sintomas de pacientes que não podem falar.",
      dificil: "Estudar muitas espécies diferentes e fazer cálculos de dose por peso."
    },
    pressao: {
      peso: 4,
      gostar: "Agir rápido em emergências e salvar um animal em risco.",
      dificil: "Plantões, fins de semana e animais em estado grave, com tutores desesperados."
    },
    organizacao: {
      peso: 3,
      gostar: "Agenda, fichas e vacinas sempre em dia.",
      dificil: "Controlar estoque de remédios, registros e prazos de vacina de dezenas de animais."
    },
    criatividade: {
      peso: 2,
      gostar: "Achar soluções para tratar bichos assustados ou famílias com pouco dinheiro.",
      dificil: "Nem sempre o tratamento ideal cabe no orçamento da família."
    }
  },

  cursos: [
    "Graduação em Medicina Veterinária (cerca de 5 anos)",
    "Registro no Conselho Regional de Medicina Veterinária (CRMV) para atuar",
    "Residência ou especialização: clínica, cirurgia, animais silvestres, grandes animais, saúde pública e outras"
  ],

  situacoes: [
    {
      horario: "08:00",
      titulo: "Cachorro assustado",
      cena: "🐕 😨 🩺",
      descricao: "Um cachorro de grande porte chega muito assustado, rosnando e tentando morder.",
      conversa: [
        { quem: "Seu Paulo, tutor", avatar: "👨🏽", fala: "bom dia, doutor(a)! esse é o Rex 🐕" },
        { quem: "Seu Paulo, tutor", avatar: "👨🏽", fala: "ele nunca fez isso antes, juro... deve ser o cheiro da clínica 😅" },
        { quem: "Rex, paciente", avatar: "🐶", fala: "grrrrr... 😾" }
      ],
      naVidaReal: "Animais com dor ou medo podem morder, arranhar ou dar coices. Técnicas de contenção e segurança são aprendidas desde o começo do curso.",
      opcoes: [
        {
          texto: "Tento examinar logo, sem proteção, para ganhar a confiança dele.",
          reacao: "cuidado, doutor(a)!! ele não tá bem! 😱",
          resultado: "Você levou uma mordida de raspão na mão. Acidentes com mordidas e arranhões são comuns na profissão.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Desisto do exame e peço para o tutor voltar outro dia.",
          reacao: "ah... mas ele tá com dor, será que espera? 😟",
          resultado: "O cachorro continuou com dor e voltou dois dias depois, pior.",
          pontos: {}
        },
        {
          texto: "Peço ajuda ao tutor para acalmá-lo, coloco a focinheira com cuidado e examino com calma.",
          reacao: "ele confia em mim, deixa que eu seguro a cabeça dele 🥺",
          resultado: "Com segurança e paciência, o exame foi tranquilo. Ele estava com dor no ouvido, e por isso estava tão agressivo.",
          pontos: { pressao: 1, pessoas: 1 }
        },
        {
          texto: "Passo um calmante antes de qualquer exame, sem investigar o motivo.",
          reacao: "ele dormiu... mas ainda não sabemos o que tem 🤔",
          resultado: "O cachorro se acalmou, mas a causa da dor só foi descoberta no exame seguinte.",
          pontos: { organizacao: 1, criatividade: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "09:15",
      titulo: "Dose por peso",
      cena: "⚖️ 💊 🧮",
      conversa: [
        { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "o Rex tá com infecção no ouvido 🐕" },
        { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "ele pesa 12 kg. o antibiótico é na dose de 10 mg por kg. quanto você dá?" }
      ],
      pergunta: "Qual é a dose total de antibiótico para um cachorro de 12 kg, na dose de 10 mg por kg?",
      alternativas: ["12 mg", "22 mg", "120 mg", "1.200 mg"],
      correta: 2,
      explicacao: "Dose total = peso × dose por kg = 12 kg × 10 mg = 120 mg. Na veterinária, a dose depende do peso de cada animal, e um erro de vírgula pode ser perigoso. Por isso a conta sempre é conferida duas vezes.",
      traco: "logica"
    },
    {
      horario: "10:30",
      titulo: "Cirurgia de castração",
      cena: "🏥 🔪 🐈",
      descricao: "Você vai auxiliar uma cirurgia. Há sangue, cheiro forte de produtos hospitalares e é preciso ficar em pé por quase uma hora.",
      conversa: [
        { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "bora lá, vamos castrar a Mel 🐈" },
        { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "vai ficar em pé uns 50 minutos e vai ter sangue. você segura a onda? 😉" }
      ],
      naVidaReal: "Durante a graduação, todo estudante passa por aulas de anatomia, cirurgia e necropsia. Mesmo quem trabalha só com consultas lida com sangue e procedimentos.",
      opcoes: [
        {
          texto: "Fico enjoado(a) com o sangue e preciso sair da sala no meio.",
          reacao: "tudo bem, acontece com muita gente no começo 😅",
          resultado: "A equipe precisou chamar outra pessoa às pressas. Nem todo mundo se acostuma com o centro cirúrgico.",
          pontos: {}
        },
        {
          texto: "Participo, mas me sinto desconfortável e só seguro os materiais.",
          reacao: "isso melhora com a prática, viu? 🙂",
          resultado: "Você ajudou, mas perdeu a chance de aprender.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Fico concentrado(a), acompanho cada etapa e monitoro a anestesia do animal.",
          reacao: "olha só, você percebeu a queda nos batimentos antes de mim 👏",
          resultado: "A cirurgia correu bem e você percebeu a tempo uma pequena queda nos batimentos, avisando a cirurgiã.",
          pontos: { logica: 1, pressao: 1, organizacao: 1 }
        },
        {
          texto: "Fico atento(a) ao conforto da Mel e converso com ela antes da anestesia.",
          reacao: "ela é uma fofa, né? 🥰 fica tranquila, Mel!",
          resultado: "A paciente relaxou antes de dormir, e a equipe percebeu seu cuidado.",
          pontos: { pessoas: 2 }
        }
      ]
    },
    {
      horario: "11:45",
      titulo: "O tratamento é caro",
      cena: "💸 😿 🧾",
      descricao: "Uma gata precisa de uma cirurgia que custa mais do que a família pode pagar.",
      conversa: [
        { quem: "Dona Marlene, tutora", avatar: "👩🏻‍🦳", fala: "doutor(a), quanto custa a cirurgia da Mimi? 😢" },
        { quem: "Dona Marlene, tutora", avatar: "👩🏻‍🦳", fala: "...nossa. eu não tenho esse dinheiro. o que eu faço? ela é como uma filha pra mim." }
      ],
      naVidaReal: "Lidar com a questão financeira é uma das partes mais difíceis da clínica veterinária: muitas vezes o tratamento ideal não é possível e é preciso buscar alternativas.",
      opcoes: [
        {
          texto: "Digo que, sem pagamento, não há o que fazer.",
          reacao: "então... ela vai ficar assim? 😭",
          resultado: "A tutora saiu sem alternativa e a gata ficou sem tratamento.",
          pontos: {}
        },
        {
          texto: "Faço a cirurgia de graça, mesmo que a clínica perca dinheiro: a vida da gata vem antes de qualquer conta.",
          reacao: "ai, obrigada! deus lhe pague! 😭",
          resultado: "A família ficou muito grata. Mas, na semana seguinte, outras três famílias pediram o mesmo, e a clínica não se manteria assim.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Explico as opções possíveis, incluindo tratamentos mais simples e formas de pagamento.",
          reacao: "parcelado em 6 vezes eu consigo! e o remédio mais simples ajuda enquanto isso? 🙏",
          resultado: "Vocês encontraram um tratamento que cabe no orçamento da família. A gata vai ficar bem.",
          pontos: { pessoas: 2, criatividade: 1, logica: 1 }
        },
        {
          texto: "Fico tão abalado(a) que peço para outro(a) veterinário(a), mais experiente, conversar com ela.",
          reacao: "ué... o(a) doutor(a) não vai falar comigo? 😕",
          resultado: "Seu colega assumiu a conversa. Sentir é humano, mas situações assim serão frequentes.",
          pontos: { pessoas: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "13:30",
      titulo: "Confira a ficha",
      cena: "📋 💉 🔍",
      conversa: [
        { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "o Thor volta hoje à tarde e eu preciso da ficha dele atualizada 📋" },
        { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "tem uma data errada aí. acha pra mim?" }
      ],
      pergunta: "A vacina antirrábica é anual (1 vez por ano). Toque na linha da ficha com a data errada:",
      linhas: [
        "Nome: Thor",
        "Espécie: cão, 14 anos",
        "Peso: 32 kg",
        "Vacina antirrábica (anual) aplicada em: março de 2025",
        "Próxima dose: março de 2027"
      ],
      correta: 4,
      explicacao: "Se a vacina é anual e foi aplicada em março de 2025, a próxima dose deve ser em março de 2026, e não 2027. Um erro assim deixaria o animal sem proteção por um ano inteiro. Manter as fichas conferidas é parte do cuidado.",
      traco: "organizacao"
    },
    {
      horario: "15:00",
      titulo: "A conversa mais difícil",
      cena: "🕯️ 🐕 💔",
      descricao: "O Thor, um cachorro de 14 anos, está com uma doença grave e sente muita dor. Não há mais tratamento possível.",
      conversa: [
        { quem: "Dona Rita, tutora", avatar: "👩🏽‍🦱", fala: "doutor(a), o Thor não come mais e chora de dor 😭" },
        { quem: "Dona Rita, tutora", avatar: "👩🏽‍🦱", fala: "ele tá com a gente há 14 anos... a gente precisa decidir, né?" },
        { quem: "Dona Rita, tutora", avatar: "👩🏽‍🦱", fala: "me fala a verdade. o que é melhor pra ele?" }
      ],
      naVidaReal: "A eutanásia faz parte da medicina veterinária quando não há como aliviar o sofrimento do animal. Muitos profissionais dizem que esse é o lado mais pesado da profissão.",
      opcoes: [
        {
          texto: "Explico a situação, respeito o tempo da família e deixo que eles se despeçam.",
          reacao: "obrigada por cuidar tão bem dele... e de nós 💔",
          resultado: "Foi um momento muito triste, mas a família agradeceu pelo respeito e pelo carinho com o Thor.",
          pontos: { pessoas: 2, pressao: 1, logica: 1 }
        },
        {
          texto: "Fico muito mal e acho que não conseguiria fazer isso.",
          reacao: "doutor(a)... eu sei que é difícil pra você também 🥺",
          resultado: "Sentir tristeza é natural, mas é importante saber que essa situação vai se repetir ao longo da carreira.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Explico de forma direta e técnica, sem me envolver emocionalmente, para não aumentar o sofrimento.",
          reacao: "...entendi. então é isso. 😶",
          resultado: "A família entendeu, mas sentiu falta de acolhimento em um momento tão difícil.",
          pontos: { logica: 2, pressao: 2 }
        },
        {
          texto: "Evito o assunto e sugiro mais exames, mesmo sabendo que não vão ajudar, para a família ter mais alguns dias.",
          reacao: "então tem esperança? 🥺",
          resultado: "O Thor continuou sofrendo por mais alguns dias e a família gastou com exames que não mudariam nada.",
          pontos: {}
        }
      ]
    },
    {
      horario: "16:30",
      titulo: "Cachorro comeu chocolate",
      urgente: true,
      cena: "🍫 🐶 📞",
      descricao: "O telefone da clínica toca em desespero.",
      conversa: [
        { quem: "Dona Flávia, tutora", avatar: "👩🏻", fala: "doutor(a)!!! meu cachorro comeu uma barra de chocolate inteira!! 😱" },
        { quem: "Dona Flávia, tutora", avatar: "👩🏻", fala: "ele é pequenininho, uns 5 kg!! tá bem agitado! o que eu faço?!" }
      ],
      naVidaReal: "Chocolate é perigoso para cães: pode causar vômito, tremores e arritmias. Em intoxicações, o tempo faz diferença, e a orientação rápida e clara é essencial.",
      opcoes: [
        {
          texto: "Digo para esperar e ver se ele piora.",
          reacao: "esperar?? e se ele passar mal?? 😰",
          resultado: "Horas depois, o cachorro começou a ter tremores, e a chegada ao hospital foi atrasada.",
          pontos: {}
        },
        {
          texto: "Mando dar leite e deixar ele dormir.",
          reacao: "leite? tá bom... ele tá agitado, mas vou tentar 😟",
          resultado: "O leite não ajuda em nada nesse caso, e o tempo para o tratamento adequado foi perdido.",
          pontos: {}
        },
        {
          texto: "Peço que traga o cachorro e a embalagem agora e peço que não dê nada por conta própria.",
          reacao: "tô saindo agora! vou levar a embalagem também! 🚗",
          resultado: "Com a embalagem, você identificou o tipo de chocolate e a dose, e iniciou o tratamento na chegada.",
          pontos: { organizacao: 1, logica: 1, pessoas: 1 }
        },
        {
          texto: "Pergunto o tipo e a quantidade do chocolate e o peso do cão, e peço que venha já.",
          reacao: "era chocolate meio amargo, 100 g!! tô levando agora!! 🏃‍♀️",
          resultado: "Em 20 minutos o cachorro estava na clínica, recebeu tratamento a tempo e se recuperou bem.",
          pontos: { logica: 1, pressao: 2, pessoas: 1, organizacao: 1 }
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "Emergência na hora de fechar",
      urgente: true,
      cena: "🚗 🐈 🆘",
      descricao: "Você está fechando a clínica quando chega um gato atropelado, nos braços de um tutor desesperado.",
      conversa: [
        { quem: "Seu Tiago, tutor", avatar: "👨🏻‍🦱", fala: "SOCORRO!! ATROPELARAM O MEU GATO!! 😭" },
        { quem: "Seu Tiago, tutor", avatar: "👨🏻‍🦱", fala: "ele tá respirando mal! por favor, ajuda!!" }
      ],
      naVidaReal: "Emergências não têm hora. Muitos veterinários trabalham em plantões noturnos e fins de semana, principalmente em hospitais 24 horas.",
      opcoes: [
        {
          texto: "Digo que a clínica está fechada e indico outro lugar.",
          reacao: "mas ele não aguenta ir até lá!! 😭",
          resultado: "O tutor saiu correndo atrás de outro atendimento, sem saber se o gato aguentaria.",
          pontos: {}
        },
        {
          texto: "Faço os primeiros socorros e encaminho para um hospital veterinário 24 horas.",
          reacao: "obrigado... eu vou direto pra lá! 🙏",
          resultado: "O gato chegou estável ao hospital. Foi uma decisão responsável.",
          pontos: { organizacao: 1, logica: 1, pessoas: 1, criatividade: 1 }
        },
        {
          texto: "Fico, faço o atendimento de emergência e mantenho o tutor informado a cada passo.",
          reacao: "obrigado por ficar... eu não sei o que faria sem você 😭",
          resultado: "Você saiu duas horas mais tarde, mas o gato foi estabilizado e passou bem a noite.",
          pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Examino rápido e peço que o tutor volte amanhã cedo.",
          reacao: "amanhã?? ele pode não resistir até lá!! 😰",
          resultado: "Sem tratamento imediato, o quadro do gato piorou durante a noite.",
          pontos: { organizacao: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("veterinaria", [
  {
    horario: "08:00",
    titulo: "A gata que não come",
    cena: "🐈 📦 😾",
    descricao: "Uma tutora chega com uma gata que não come há três dias. Dentro da caixa de transporte, a gata rosna para quem chega perto.",
    conversa: [
      { quem: "Dona Cecília, tutora", avatar: "👵🏼", fala: "a Mia não come desde sábado, doutor(a) 😟" },
      { quem: "Dona Cecília, tutora", avatar: "👵🏼", fala: "mas cuidado, ela tá brava. já me arranhou hoje cedo" }
    ],
    naVidaReal: "Gato que para de comer por mais de um ou dois dias pode desenvolver uma doença grave no fígado. Clínicas \"amigas dos gatos\" atendem em ambiente silencioso, com calma e sem forçar o animal a sair da caixa.",
    opcoes: [
      {
        texto: "Tiro a gata da caixa à força para examinar logo.",
        reacao: "ai, coitada, ela tá apavorada! 😨",
        resultado: "A gata se debateu, arranhou você e ficou tão estressada que o exame quase não serviu.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Digo que gato é assim mesmo, que muda de humor com facilidade, e que ela vai voltar a comer sozinha em alguns dias.",
        reacao: "tem certeza? já são três dias... 😟",
        resultado: "A gata piorou em casa e voltou dois dias depois, bem mais doente.",
        pontos: {}
      },
      {
        texto: "Abaixo a luz e examino a gata dentro da própria caixa, com uma toalha para segurá-la.",
        reacao: "nossa, ela até ficou quietinha 😮",
        resultado: "Com calma, você examinou a gata sem estresse e descobriu uma inflamação na gengiva que doía ao comer.",
        pontos: { pressao: 1, pessoas: 1 }
      },
      {
        texto: "Receito um remédio para abrir o apetite, sem examinar.",
        reacao: "só isso resolve? 🤔",
        resultado: "O remédio não resolveu, porque a causa, uma dor na boca, continuou sem tratamento.",
        pontos: { organizacao: 1, criatividade: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "09:15",
    titulo: "Repor a hidratação",
    cena: "💧 🐕 🧮",
    conversa: [
      { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "o Bob, de 20 kg, chegou com diarreia e 5% de desidratação 💧" },
      { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "quanto de soro ele precisa pra repor o que perdeu?" }
    ],
    pergunta: "Déficit de líquido = peso (kg) × porcentagem de desidratação. Quanto um cão de 20 kg com 5% de desidratação perdeu?",
    alternativas: ["100 mL", "500 mL", "1.000 mL", "5.000 mL"],
    correta: 2,
    explicacao: "20 kg × 0,05 = 1 kg de água, ou seja, cerca de 1.000 mL (1 litro). Esse é só o que ele perdeu: o veterinário ainda soma o que o cão precisa por dia e o que continua perdendo, e divide a reposição ao longo das horas.",
    traco: "logica"
  },
  {
    horario: "10:30",
    titulo: "Parto na fazenda",
    cena: "🐄 🚜 🌾",
    descricao: "Você acompanha a veterinária num atendimento numa fazenda: uma vaca está com dificuldade no parto.",
    conversa: [
      { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "o bezerro tá virado. vou precisar de você do meu lado 🐄" },
      { quem: "Seu Joaquim, produtor", avatar: "👨🏼‍🌾", fala: "doutora, essa vaca é a melhor que eu tenho, pelo amor de Deus 😰" }
    ],
    naVidaReal: "Muitos veterinários trabalham com animais de produção, em fazendas e no campo, com bois, vacas, porcos e galinhas. O trabalho é físico, ao ar livre e em qualquer horário.",
    opcoes: [
      {
        texto: "Fico assustado(a) com o tamanho do animal e espero perto do carro.",
        reacao: "preciso de você aqui! 😤",
        resultado: "A veterinária ficou sem ajuda num momento crítico, e o produtor teve que ajudar no seu lugar.",
        pontos: {}
      },
      {
        texto: "Só separo os materiais e deixo a veterinária fazer tudo.",
        reacao: "tá, me passa a corda... e as luvas 🧤",
        resultado: "Os materiais estavam à mão, mas você perdeu a chance de aprender o procedimento.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Ajudo a corrigir a posição do bezerro, cuido da higiene e anoto o horário de cada etapa.",
        reacao: "isso, puxa junto com a contração... agora! 💪",
        resultado: "O bezerro nasceu bem, e suas anotações ajudaram a acompanhar a vaca nos dias seguintes.",
        pontos: { logica: 1, pressao: 1, organizacao: 1 }
      },
      {
        texto: "Fico conversando com o produtor, que está muito nervoso, para acalmá-lo e evitar que ele atrapalhe o trabalho.",
        reacao: "obrigado, viu... é que essa vaca é tudo pra mim 🥺",
        resultado: "O produtor se acalmou, mas a veterinária precisou de mãos extras no parto.",
        pontos: { pessoas: 2 }
      }
    ]
  },
  {
    horario: "11:45",
    titulo: "Resgatado sem dinheiro",
    cena: "🐕 💸 🏠",
    descricao: "Uma voluntária de uma ONG traz um cão resgatado da rua, magro e com sarna. A ONG está sem dinheiro.",
    conversa: [
      { quem: "Bruna, voluntária de ONG", avatar: "👩🏻‍🦱", fala: "achei ele na beira da estrada 😢" },
      { quem: "Bruna, voluntária de ONG", avatar: "👩🏻‍🦱", fala: "a ONG tá no vermelho esse mês... dá pra fazer alguma coisa?" }
    ],
    naVidaReal: "Veterinários lidam o tempo todo com o limite financeiro dos tutores. Muitas prefeituras e universidades oferecem castração e vacinação gratuitas, e montar um plano por prioridade ajuda a tratar sem desistir do animal.",
    opcoes: [
      {
        texto: "Digo que a clínica não faz desconto e encerro o atendimento.",
        reacao: "então ele vai voltar pra rua... 😞",
        resultado: "O cão ficou sem tratamento, e a ONG nunca mais voltou à clínica.",
        pontos: {}
      },
      {
        texto: "Faço tudo de graça, sem combinar com a clínica: ela resgatou o cão e não pode ficar sem ajuda.",
        reacao: "sério?? muito obrigada!! 🥹",
        resultado: "O cão foi tratado, mas a dona da clínica não gostou de saber depois, e o custo ficou para a equipe.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Trato o urgente, monto um plano de custos por etapas e indico campanhas gratuitas.",
        reacao: "dá pra ir pagando por etapas? perfeito!! 🙌",
        resultado: "O cão melhorou em poucas semanas, foi castrado numa campanha gratuita e acabou adotado.",
        pontos: { pessoas: 2, criatividade: 1, logica: 1 }
      },
      {
        texto: "Fico com muita pena e peço para outro colega conversar com ela, porque não consigo negar ajuda.",
        reacao: "tá bom... eu espero 😕",
        resultado: "O colega atendeu, mas a voluntária esperou mais de uma hora.",
        pontos: { pessoas: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "13:30",
    titulo: "Remédio de gente",
    cena: "🐈 💊 ⚠️",
    conversa: [
      { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "o estagiário escreveu a receita da Mia pra depois da castração 📝" },
      { quem: "Dra. Lúcia, veterinária chefe", avatar: "👩🏼‍⚕️", fala: "tem uma linha que pode matar a gata. qual?" }
    ],
    pergunta: "Toque na linha perigosa da receita da gata:",
    linhas: [
      "Paciente: Mia, gata, 4 kg",
      "Motivo: dor após a castração",
      "Repouso e colar protetor por 10 dias",
      "Paracetamol 75 mg, 1 vez ao dia",
      "Retorno em 7 dias"
    ],
    correta: 3,
    explicacao: "O paracetamol é muito tóxico para gatos, mesmo em doses pequenas, porque o organismo deles não consegue eliminar esse remédio. Muitos medicamentos de uso humano são perigosos para animais: só o veterinário pode indicar o remédio certo.",
    traco: "organizacao"
  },
  {
    horario: "15:00",
    titulo: "Um pedido que não dá para aceitar",
    cena: "🐕 🏠 💔",
    descricao: "Um tutor pede para sacrificar o cachorro saudável dele porque vai se mudar para um apartamento que não aceita animais.",
    conversa: [
      { quem: "Seu Henrique, tutor", avatar: "👨🏻‍💼", fala: "olha, eu me mudo semana que vem e lá não pode cachorro" },
      { quem: "Seu Henrique, tutor", avatar: "👨🏻‍💼", fala: "é melhor sacrificar o Thor do que deixar ele sofrendo por aí, né? 😕" }
    ],
    naVidaReal: "Pelas regras do Conselho Federal de Medicina Veterinária, a eutanásia só é indicada quando não há outra forma de aliviar um sofrimento ou quando há risco. Um animal saudável deve ter outro destino, como a adoção responsável.",
    opcoes: [
      {
        texto: "Explico que não fazemos eutanásia em animal saudável e ajudo a procurar um novo lar.",
        reacao: "eu não sabia que tinha outra saída... me ajuda então? 😢",
        resultado: "Em duas semanas, uma família do bairro adotou o Thor.",
        pontos: { pessoas: 2, pressao: 1, logica: 1 }
      },
      {
        texto: "Fico tão abalado(a) que não consigo nem continuar a conversa.",
        reacao: "ué, você tá bem? 😳",
        resultado: "O tutor ficou sem resposta e saiu dizendo que ia procurar outra clínica.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Explico de forma técnica a norma do Conselho de Medicina Veterinária e recuso, sem discutir alternativas.",
        reacao: "tá, entendi a regra. e o que eu faço com ele? 🤷",
        resultado: "A regra foi cumprida, mas o cachorro corria o risco de ser abandonado.",
        pontos: { logica: 2, pressao: 2 }
      },
      {
        texto: "Faço o que ele pede para evitar um conflito.",
        reacao: "obrigado... é o melhor pra ele 😔",
        resultado: "Você foi contra as regras da profissão e passou o resto da semana mal com isso.",
        pontos: {}
      }
    ]
  },
  {
    horario: "16:30",
    titulo: "A gata mordeu um lírio",
    urgente: true,
    cena: "🌸 🐈 📞",
    descricao: "Uma tutora liga desesperada: a gata dela mordeu as folhas de um buquê de lírios.",
    conversa: [
      { quem: "Dona Flávia, tutora", avatar: "👩🏽", fala: "ganhei um buquê de lírios e a Nina mordeu as folhas 🌸" },
      { quem: "Dona Flávia, tutora", avatar: "👩🏽", fala: "ela parece bem... é perigoso? 😰" }
    ],
    naVidaReal: "Lírios são extremamente tóxicos para gatos: até um pouco de folha, flor ou pólen pode causar falência dos rins. O tratamento precisa começar nas primeiras horas, mesmo que o gato pareça bem.",
    opcoes: [
      {
        texto: "Digo que planta não faz mal e que é só observar.",
        reacao: "ufa, que alívio 😌",
        resultado: "No dia seguinte a gata parou de urinar e chegou à clínica em estado grave.",
        pontos: {}
      },
      {
        texto: "Mando dar leite para \"cortar o veneno\" e esperar.",
        reacao: "tá, vou dar agora! 🥛",
        resultado: "O leite não ajuda e ainda pode causar vômito. As horas mais importantes se perderam.",
        pontos: {}
      },
      {
        texto: "Peço que ela traga a gata e um pedaço da planta agora mesmo, sem perder tempo com perguntas pelo telefone.",
        reacao: "tô indo! levo o buquê junto 🚗",
        resultado: "A gata chegou rápido e começou o tratamento. Você só confirmou o tipo de planta depois que ela chegou.",
        pontos: { organizacao: 1, logica: 1, pessoas: 1 }
      },
      {
        texto: "Pergunto quando foi e quanto ela comeu, explico que lírio é perigoso para gatos e peço para vir já.",
        reacao: "faz 20 minutos. tô indo agora mesmo! 🚗💨",
        resultado: "Com as informações em mãos, a equipe já esperava a gata pronta para começar o tratamento. Ela se recuperou.",
        pontos: { logica: 1, pressao: 2, pessoas: 1, organizacao: 1 }
      }
    ]
  },
  {
    horario: "18:30",
    titulo: "Parto na hora de fechar",
    urgente: true,
    cena: "🐕 🍼 🌙",
    descricao: "Na hora de fechar, chega uma cadela em trabalho de parto há horas. Nenhum filhote nasceu.",
    conversa: [
      { quem: "Seu Tiago, tutor", avatar: "👨🏽", fala: "ela tá fazendo força desde as 2 da tarde e nada 😰" },
      { quem: "Seu Tiago, tutor", avatar: "👨🏽", fala: "por favor, não fecha não!" }
    ],
    naVidaReal: "Quando a cadela faz força por muito tempo sem nascer nenhum filhote, pode ser preciso uma cesárea de urgência. Emergências não escolhem horário, e muitos veterinários fazem plantão ou trabalham em hospitais 24 horas.",
    opcoes: [
      {
        texto: "Digo que já fechamos e indico outra clínica.",
        reacao: "mas ela não aguenta ir mais longe! 😭",
        resultado: "O tutor perdeu tempo procurando outro lugar, e um dos filhotes não resistiu.",
        pontos: {}
      },
      {
        texto: "Avalio, estabilizo e encaminho para um hospital veterinário 24 horas, com uma carta explicando o caso.",
        reacao: "tá bom, eu levo agora. obrigado pela carta 🙏",
        resultado: "O hospital já recebeu a cadela sabendo de tudo, e os filhotes nasceram por cesárea.",
        pontos: { organizacao: 1, logica: 1, pessoas: 1, criatividade: 1 }
      },
      {
        texto: "Fico, avalio a cadela, preparo a cesárea com a equipe e informo o tutor a cada passo.",
        reacao: "nasceram 5!! 😭🐶 obrigado, obrigado!",
        resultado: "Todos os filhotes nasceram bem, e você saiu da clínica perto da meia-noite.",
        pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
      },
      {
        texto: "Examino rápido e peço que ele volte amanhã cedo se os filhotes não nascerem até lá, porque muitas cadelas demoram.",
        reacao: "amanhã?? 😟",
        resultado: "A cadela piorou durante a noite e voltou em estado grave.",
        pontos: { organizacao: 1 }
      }
    ]
  }
]);
