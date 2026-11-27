/*
  Profissão: Medicina
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "medicina",
  nome: "Medicina",
  icone: "🧑‍⚕️",
  cor: "#2747d6",
  area: "saude",
  resumo: "Diagnosticar e tratar doenças, acompanhar pacientes e decidir rápido quando uma vida está em risco.",

  perfil: {
    pessoas: {
      peso: 4,
      gostar: "Criar confiança com pacientes e famílias e ver gente se recuperando.",
      dificil: "Dar más notícias e lidar com a dor e o luto de pacientes e famílias."
    },
    logica: {
      peso: 5,
      gostar: "Juntar sintomas, exames e histórico para chegar a um diagnóstico.",
      dificil: "Estudar sem parar: a ciência muda o tempo todo e a responsabilidade pelas decisões é enorme."
    },
    pressao: {
      peso: 5,
      gostar: "Decidir rápido numa emergência e fazer diferença quando cada minuto conta.",
      dificil: "Plantões de 24 horas, noites e decisões com vidas em jogo e pouco tempo."
    },
    organizacao: {
      peso: 3,
      gostar: "Protocolos claros, rotina de visitas e prontuários em ordem.",
      dificil: "Muito registro, burocracia de convênios e papelada fora do atendimento."
    },
    criatividade: {
      peso: 2,
      gostar: "Encontrar soluções para casos que fogem do manual.",
      dificil: "Pouco espaço para improvisar: os protocolos existem para proteger o paciente."
    }
  },

  cursos: [
    "Graduação em Medicina (6 anos)",
    "Residência médica (de 2 a 5 anos, conforme a especialidade)",
    "A entrada é muito concorrida: exige nota alta no Enem ou no vestibular"
  ],

  situacoes: [
    {
      horario: "07:30",
      titulo: "Visita aos leitos",
      cena: "🏥 📋 🩺",
      descricao: "Começa a visita da manhã. Você acompanha os pacientes internados ao lado da médica chefe.",
      conversa: [
        { quem: "Dra. Vera, médica chefe", avatar: "👩🏼‍⚕️", fala: "bom dia, doutor(a)! café tomado? hoje o dia vai ser puxado ☕" },
        { quem: "Dra. Vera, médica chefe", avatar: "👩🏼‍⚕️", fala: "leito 8: seu Orlando, 70 anos, ficou com falta de ar na madrugada" },
        { quem: "Dra. Vera, médica chefe", avatar: "👩🏼‍⚕️", fala: "os exames chegaram agora. o que você faz? 👀" }
      ],
      naVidaReal: "A visita aos leitos é onde se acompanha a evolução de cada paciente. Olhar de novo, e não só repetir o que já estava escrito, evita erros.",
      opcoes: [
        {
          texto: "Passo rápido de leito em leito só para cumprir a lista.",
          reacao: "visita não é check-in, doutor(a) 😕 o paciente precisa ser olhado",
          resultado: "Você terminou cedo, mas deixou passar que o seu Orlando estava mais cansado do que ontem.",
          pontos: {}
        },
        {
          texto: "Repito a conduta da noite sem examinar de novo: o plantonista já avaliou e a lista de visitas está longa.",
          reacao: "hmm... e se o quadro mudou? 🤨",
          resultado: "A conduta anterior já não servia mais: ele precisou de ajuste de medicação à tarde.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Examino, reviso os exames e converso com o paciente antes de opinar.",
          reacao: "boa! exame fala muito, mas o paciente fala mais ainda 👏",
          resultado: "Cruzando a conversa com os exames, você notou sinais de retenção de líquido e ajustou o tratamento a tempo.",
          pontos: { logica: 2, pessoas: 1 }
        },
        {
          texto: "Peço para um colega mais experiente decidir tudo por mim, já que ainda estou aprendendo.",
          reacao: "perguntar é ótimo! mas arrisca uma hipótese também, tá? 😉",
          resultado: "O colega ajudou, mas você perdeu a chance de treinar o raciocínio clínico.",
          pontos: { pessoas: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "09:00",
      titulo: "Leia o exame",
      cena: "🧪 🔬 📄",
      conversa: [
        { quem: "Dra. Vera, médica chefe", avatar: "👩🏼‍⚕️", fala: "chegou o hemograma do paciente do leito 3" },
        { quem: "Dra. Vera, médica chefe", avatar: "👩🏼‍⚕️", fala: "ele tá com febre há 3 dias. olha os leucócitos aí 👇" }
      ],
      pergunta: "O paciente tem febre há 3 dias. Os leucócitos (células de defesa) estão assim. O que isso sugere?",
      grafico: [
        { rotulo: "Paciente", valor: 18 },
        { rotulo: "Limite normal", valor: 11 }
      ],
      unidade: "mil/mm³",
      alternativas: ["O corpo está combatendo uma infecção", "O paciente está com anemia", "Faltam plaquetas", "O exame está totalmente normal"],
      correta: 0,
      explicacao: "Os leucócitos são as células de defesa. Acima de 11 mil, junto com febre, costumam indicar infecção ou inflamação. Um exame sozinho nunca fecha o diagnóstico: ele se junta à conversa e ao exame físico.",
      traco: "logica"
    },
    {
      horario: "10:30",
      titulo: "Notícia difícil",
      cena: "📄 😢 🫂",
      descricao: "Saiu o resultado da biópsia do seu Ademar, de 68 anos. Ele e a filha esperam na sala.",
      conversa: [
        { quem: "Lúcia, filha do paciente", avatar: "👩🏽", fala: "doutor(a), saiu o resultado? 😟" },
        { quem: "Lúcia, filha do paciente", avatar: "👩🏽", fala: "meu pai tá muito nervoso, não dormiu a noite inteira..." },
        { quem: "Seu Ademar, paciente", avatar: "👴🏽", fala: "pode falar, doutor(a). eu aguento. acho." }
      ],
      naVidaReal: "Dar uma notícia difícil faz parte da rotina médica. Existem técnicas para isso, e a forma como se conta importa quase tanto quanto o conteúdo.",
      opcoes: [
        {
          texto: "Falo rápido e seco: “é grave, tem pouco a fazer”.",
          reacao: "...então é isso. ok. 😶",
          resultado: "A informação foi dada, mas a família saiu sem entender o que viria depois e sem acolhimento.",
          pontos: {}
        },
        {
          texto: "Sento com os dois, explico com palavras simples e combino os próximos passos.",
          reacao: "obrigada por explicar com calma... agora eu entendo o que vem pela frente 🙏",
          resultado: "Mesmo com a notícia dura, eles saíram com um plano e com a sensação de que não estão sozinhos.",
          pontos: { pessoas: 2, pressao: 1, organizacao: 1, logica: 1 }
        },
        {
          texto: "Peço que o colega dê a notícia, eu tenho outros pacientes.",
          reacao: "ué... não era o(a) senhor(a) que ia falar com a gente? 😕",
          resultado: "O colega cumpriu o papel, mas a família sentiu falta de quem acompanhava o caso desde o início.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Explico tudo com os termos técnicos certos e mostro o laudo, para não haver nenhuma dúvida sobre o diagnóstico.",
          reacao: "carcinoma... estadiamento... pai, você entendeu algo? 😵",
          resultado: "Eles não compreenderam quase nada e precisaram de uma segunda conversa para entender.",
          pontos: { logica: 1 }
        }
      ]
    },
    {
      horario: "12:00",
      titulo: "Chamado da emergência",
      urgente: true,
      cena: "🚨 ❤️ 🏃",
      descricao: "Na hora do almoço, o alarme do corredor toca.",
      conversa: [
        { quem: "Rafael, enfermeiro", avatar: "🧑🏿‍⚕️", fala: "DOUTOR(A)!! o paciente do leito 12 desmaiou!! 😱" },
        { quem: "Rafael, enfermeiro", avatar: "🧑🏿‍⚕️", fala: "tá sem pulso!! o que a gente faz?!" }
      ],
      naVidaReal: "A parada cardiorrespiratória é uma das emergências mais temidas. Existe um protocolo, treinado várias vezes, justamente para que o médico não precise “inventar” na hora.",
      opcoes: [
        {
          texto: "Congelo olhando o monitor, sem saber por onde começar.",
          reacao: "doutor(a)?! DOUTOR(A)?! 😰",
          resultado: "Perderam-se minutos preciosos até que outro profissional assumiu.",
          pontos: {}
        },
        {
          texto: "Corro para buscar um colega mais experiente e volto depois.",
          reacao: "não dá tempo, volta aqui!! 😰",
          resultado: "O colega chegou, mas a massagem só começou depois de alguns minutos de atraso.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Começo a massagem, mas esqueço de chamar o resto da equipe.",
          reacao: "tô sozinho aqui, preciso de ajuda!! 😓",
          resultado: "A massagem começou rápido, mas faltaram mãos para a medicação e para o desfibrilador.",
          pontos: { pressao: 1, logica: 1 }
        },
        {
          texto: "Peço o carrinho de parada, começo a massagem e chamo a equipe em voz alta.",
          reacao: "carrinho a caminho! equipe chamada! 🏃🏿",
          resultado: "Em poucos minutos a equipe estava completa, o paciente voltou ao ritmo normal e foi para a UTI.",
          pontos: { pressao: 2, logica: 1, pessoas: 1 }
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "Paciente que não segue o tratamento",
      cena: "💊 🙄 🩺",
      descricao: "Seu Zé tem pressão alta, mas confessa que não toma o remédio direito.",
      conversa: [
        { quem: "Seu Zé, paciente", avatar: "👨🏻‍🦲", fala: "ah, doutor(a)... eu esqueço, né 🙈" },
        { quem: "Seu Zé, paciente", avatar: "👨🏻‍🦲", fala: "e quando eu me sinto bem, penso: pra que tomar?" }
      ],
      naVidaReal: "Muitos pacientes abandonam o tratamento. Entender o motivo e achar um jeito que caiba na vida da pessoa costuma funcionar mais do que dar bronca.",
      opcoes: [
        {
          texto: "Dou uma bronca: “assim o senhor vai ter um infarto!”.",
          reacao: "ih, fiquei até nervoso agora... 😬",
          resultado: "Ele saiu assustado, mas sem plano. Dois meses depois voltou com a pressão ainda descontrolada.",
          pontos: {}
        },
        {
          texto: "Aumento a dose e pronto, o problema é a pressão.",
          reacao: "mais remédio? mas eu já esqueço o que tenho em casa... 😅",
          resultado: "A dose maior só resolveria se ele tomasse. Ele continuou esquecendo.",
          pontos: { logica: 1 }
        },
        {
          texto: "Anoto no prontuário e marco um retorno em 3 meses.",
          reacao: "tá bom, doutor(a)... 🙂",
          resultado: "O registro ficou impecável, mas o paciente continuou sem tomar o remédio.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Pergunto o motivo, explico os riscos com exemplos simples e combino um jeito de ele lembrar.",
          reacao: "ah, com o alarme do celular eu consigo! e minha neta me lembra também 😄",
          resultado: "Ele topou colocar um alarme e pediu ajuda da neta. Na consulta seguinte, a pressão estava controlada.",
          pontos: { pessoas: 2, criatividade: 1, logica: 1 }
        }
      ]
    },
    {
      horario: "15:30",
      titulo: "Cansaço no plantão",
      cena: "😵 ☕ 🌙",
      descricao: "Você está acordado(a) há quase 20 horas e ainda faltam várias horas de plantão.",
      conversa: [
        { quem: "Caio, médico plantonista", avatar: "👨🏽‍⚕️", fala: "ei, você tá com uma cara péssima 😬" },
        { quem: "Caio, médico plantonista", avatar: "👨🏽‍⚕️", fala: "tá há quanto tempo sem dormir?" }
      ],
      naVidaReal: "Plantões longos são comuns na medicina, e o cansaço aumenta o risco de erro. Saber a hora de pedir ajuda ou de descansar faz parte da profissão.",
      opcoes: [
        {
          texto: "Continuo sem parar: café resolve tudo.",
          reacao: "café não compra atenção, viu? 😟",
          resultado: "Mais tarde, você trocou o nome de dois pacientes ao escrever as prescrições.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Passo os casos mais pesados para o colega e vou embora mais cedo para dormir.",
          reacao: "ué, e o seu plantão? 😳",
          resultado: "O colega ficou sobrecarregado e a escala teve que ser refeita às pressas.",
          pontos: {}
        },
        {
          texto: "Descanso 20 minutos e peço para ser chamado(a) se algo piorar.",
          reacao: "boa! eu seguro aqui e te aviso se precisar 👍",
          resultado: "Voltou mais atento(a), e o plantão seguiu sem mais problemas.",
          pontos: { organizacao: 2, pressao: 1, logica: 1 }
        },
        {
          texto: "Divido os casos com o time e deixo tudo anotado para a troca de plantão.",
          reacao: "combinado! passa o resumo que eu cuido dos meus e dos seus 🤝",
          resultado: "A equipe se ajudou e a troca de plantão aconteceu sem falhas de informação.",
          pontos: { pessoas: 1, organizacao: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "17:00",
      titulo: "Receita errada",
      cena: "📝 💊 ⚠️",
      conversa: [
        { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "doutor(a), antes de assinar, confere essa prescrição? 🙏" },
        { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "tem uma coisa que me deixou desconfiada..." }
      ],
      pergunta: "Toque na linha da prescrição que representa um risco para a paciente:",
      linhas: [
        "Paciente: Maria, 8 anos",
        "Diagnóstico: infecção de garganta",
        "Alergia registrada: penicilina",
        "Prescrição: amoxicilina, de 8 em 8 horas",
        "Duração: 7 dias"
      ],
      correta: 3,
      explicacao: "A amoxicilina é um tipo de penicilina, e a Maria tem alergia registrada a esse grupo de medicamentos. Conferir alergias antes de prescrever é uma das barreiras de segurança mais importantes da medicina.",
      traco: "logica"
    },
    {
      horario: "18:30",
      titulo: "O convênio negou o exame",
      cena: "🧾 ❌ 🩻",
      descricao: "Uma paciente precisa de uma ressonância, mas o plano de saúde negou o pedido.",
      conversa: [
        { quem: "Dona Sônia, paciente", avatar: "👩🏻‍🦳", fala: "doutor(a), o plano disse que não autoriza o exame 😢" },
        { quem: "Dona Sônia, paciente", avatar: "👩🏻‍🦳", fala: "mas eu sinto uma dor horrível no joelho há meses... o que eu faço?" }
      ],
      naVidaReal: "Parte do trabalho médico é burocrática: relatórios, justificativas e pedidos para convênios. Isso consome muito tempo e nem sempre é o que se imagina da profissão.",
      opcoes: [
        {
          texto: "Digo que não tem o que fazer: o plano é quem manda.",
          reacao: "então eu vou continuar com dor... 😔",
          resultado: "Ela saiu sem solução e a dor continuou por mais um mês.",
          pontos: {}
        },
        {
          texto: "Peço o exame com outro nome, que o plano cobre, para ser aprovado mais rápido.",
          reacao: "ah, mas e se o hospital não aceitar?",
          resultado: "O exame foi feito, mas a cobrança gerou um problema administrativo para você e para o hospital.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Ligo para o convênio e discuto com o atendente.",
          reacao: "que bom que o senhor(a) tá me defendendo, mas e agora? 😅",
          resultado: "A discussão não adiantou: a negativa foi mantida.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Escrevo um relatório justificando o exame e oriento a paciente a recorrer ao plano.",
          reacao: "obrigada, doutor(a)! com esse relatório eu acho que consigo 🙏",
          resultado: "Com o relatório bem escrito, o plano liberou o exame em uma semana.",
          pontos: { organizacao: 2, logica: 1, pessoas: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("medicina", [
  {
    horario: "07:30",
    titulo: "Confusa desde a madrugada",
    cena: "🛏️ 👵 🌙",
    descricao: "Na visita, a enfermagem conta que uma paciente de 84 anos ficou confusa e agitada durante a noite. Ela estava lúcida ontem.",
    conversa: [
      { quem: "Dra. Vera, médica chefe", avatar: "👩🏻‍⚕️", fala: "a dona Benedita do leito 12 passou a noite agitada, falando coisas sem sentido" },
      { quem: "Dra. Vera, médica chefe", avatar: "👩🏻‍⚕️", fala: "a técnica da noite disse que \"é da idade\". o que você acha?" }
    ],
    naVidaReal: "Confusão que aparece de repente num idoso (o delirium) não é \"coisa da idade\". Muitas vezes é sinal de infecção, desidratação ou efeito de um remédio novo, e precisa ser investigada.",
    opcoes: [
      {
        texto: "Anoto \"paciente confusa\" no prontuário e sigo a lista de visitas: em idosos internados, isso é comum.",
        reacao: "só isso? 🤨",
        resultado: "Ninguém procurou a causa, e a paciente piorou ao longo do dia.",
        pontos: {}
      },
      {
        texto: "Mantenho a prescrição da noite e peço para reavaliar amanhã, quando ela estiver mais descansada.",
        reacao: "e se for algo que precisa de tratamento hoje? 🤔",
        resultado: "Ela passou mais um dia confusa, e a causa só apareceu no dia seguinte.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Examino, pergunto à filha como ela era antes e peço exames para achar a causa.",
        reacao: "boa linha de raciocínio. e olha o remédio pra dormir que começaram ontem 👀",
        resultado: "O exame de urina mostrou uma infecção. Com o tratamento e a suspensão do remédio novo, ela voltou a ficar lúcida.",
        pontos: { logica: 2, pessoas: 1 }
      },
      {
        texto: "Peço para o residente mais experiente decidir o que fazer.",
        reacao: "ele tá na emergência. mas posso te ajudar a pensar 🙂",
        resultado: "A decisão atrasou, mas a Dra. Vera te ajudou a montar o raciocínio.",
        pontos: { pessoas: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "09:00",
    titulo: "Calcule o IMC",
    cena: "⚖️ 📏 🧮",
    conversa: [
      { quem: "Dra. Vera, médica chefe", avatar: "👩🏻‍⚕️", fala: "paciente do ambulatório: 90 kg e 1,80 m de altura ⚖️" },
      { quem: "Dra. Vera, médica chefe", avatar: "👩🏻‍⚕️", fala: "calcula o IMC e me diz a classificação" }
    ],
    pergunta: "IMC = peso ÷ (altura × altura). Uma pessoa com 90 kg e 1,80 m está em qual faixa?",
    alternativas: [
      "Abaixo do peso (menos de 18,5)",
      "Peso normal (18,5 a 24,9)",
      "Sobrepeso (25 a 29,9)",
      "Obesidade (30 ou mais)"
    ],
    correta: 2,
    explicacao: "1,80 × 1,80 = 3,24. Então 90 ÷ 3,24 ≈ 27,8, que fica na faixa de sobrepeso. O IMC é uma triagem rápida: o médico também olha a cintura, os exames e os hábitos antes de qualquer conclusão.",
    traco: "logica"
  },
  {
    horario: "10:30",
    titulo: "Um diagnóstico para a vida toda",
    cena: "🩸 👦 💉",
    descricao: "Os exames confirmaram diabetes tipo 1 num menino de 12 anos. Ele e o pai esperam na sala.",
    conversa: [
      { quem: "Seu Marcos, pai do paciente", avatar: "👨🏾", fala: "doutor(a), é grave? ele vai ficar bom, né?" },
      { quem: "Davi, paciente", avatar: "👦🏾", fala: "vou ter que tomar injeção? eu odeio agulha 😟" }
    ],
    naVidaReal: "Dar um diagnóstico de doença crônica muda a vida de uma família. Médicos aprendem a comunicar com calma e em etapas, e a contar com a equipe de nutrição, enfermagem e psicologia no acompanhamento.",
    opcoes: [
      {
        texto: "Digo direto: \"é diabetes, vai precisar de insulina para sempre\", e entrego a receita com as doses anotadas para não haver erro.",
        reacao: "pra sempre?? 😢",
        resultado: "O menino saiu chorando, e o pai voltou para casa sem entender o que fazer.",
        pontos: {}
      },
      {
        texto: "Sento com os dois, explico o que muda no dia a dia e agendo a equipe de educação em diabetes.",
        reacao: "então dá pra jogar bola e ter vida normal? 😮 ufa",
        resultado: "A família saiu assustada, mas com um plano. Em poucas semanas o Davi já media a glicose sozinho.",
        pontos: { pessoas: 2, pressao: 1, organizacao: 1, logica: 1 }
      },
      {
        texto: "Entrego um folheto e encaminho para o endocrinologista.",
        reacao: "tá... mas o que eu faço hoje à noite? 😕",
        resultado: "O encaminhamento estava certo, mas a família ficou dias sem saber como aplicar a insulina.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Explico como o pâncreas funciona, com termos técnicos e o laudo na mão.",
        reacao: "desculpa, não entendi quase nada... 😳",
        resultado: "A explicação estava certa, mas o pai não conseguiu acompanhar.",
        pontos: { logica: 1 }
      }
    ]
  },
  {
    horario: "12:00",
    titulo: "Reação ao antibiótico",
    urgente: true,
    cena: "🚨 💉 😮‍💨",
    descricao: "Poucos minutos depois de começar um antibiótico na veia, o paciente fica com a boca inchada e com falta de ar.",
    conversa: [
      { quem: "Rafael, enfermeiro", avatar: "🧑🏿‍⚕️", fala: "doutor(a), vem rápido! o do leito 8 tá com o lábio inchando" },
      { quem: "Rafael, enfermeiro", avatar: "🧑🏿‍⚕️", fala: "tá chiando pra respirar e cheio de manchas vermelhas 😰" }
    ],
    naVidaReal: "Isso é uma anafilaxia, uma reação alérgica grave. O tratamento de primeira escolha é adrenalina no músculo da coxa, logo no início, junto com a suspensão do remédio que causou a reação.",
    opcoes: [
      {
        texto: "Fico observando para ver se os sintomas passam sozinhos.",
        reacao: "tá piorando!! 😱",
        resultado: "A falta de ar aumentou rápido, e a equipe teve que agir sem você.",
        pontos: {}
      },
      {
        texto: "Saio para chamar um colega mais experiente antes de fazer qualquer coisa, para não errar a dose.",
        reacao: "não dá tempo de procurar ninguém! 😰",
        resultado: "Minutos preciosos se perderam até o colega chegar.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Aplico a adrenalina, mas esqueço de suspender o antibiótico, que continua correndo.",
        reacao: "melhorou um pouco... mas o soro do antibiótico ainda tá aberto! 😬",
        resultado: "O paciente melhorou, mas voltou a piorar até alguém fechar o antibiótico.",
        pontos: { pressao: 1, logica: 1 }
      },
      {
        texto: "Suspendo o antibiótico, aplico adrenalina na coxa, peço oxigênio e chamo a equipe.",
        reacao: "adrenalina feita, oxigênio no rosto. a respiração já tá melhorando 😮‍💨",
        resultado: "Em minutos o inchaço diminuiu. A alergia foi registrada em destaque no prontuário.",
        pontos: { pressao: 2, logica: 1, pessoas: 1 }
      }
    ]
  },
  {
    horario: "13:30",
    titulo: "Quero antibiótico!",
    cena: "🤧 💊 🙄",
    descricao: "No ambulatório, um paciente com gripe há dois dias exige um antibiótico.",
    conversa: [
      { quem: "Seu Wagner, paciente", avatar: "👨🏼", fala: "doutor(a), eu sempre tomo amoxicilina quando fico gripado e melhoro rapidinho" },
      { quem: "Seu Wagner, paciente", avatar: "👨🏼", fala: "só passa a receita aí, que eu tenho que voltar pro trabalho 🙄" }
    ],
    naVidaReal: "Antibiótico não age contra vírus, como os da gripe e do resfriado. Usar sem necessidade causa efeitos colaterais e ajuda bactérias a ficarem resistentes, um problema de saúde pública no mundo todo.",
    opcoes: [
      {
        texto: "Receito o antibiótico para encerrar logo a discussão.",
        reacao: "isso! obrigado, doutor(a) 😁",
        resultado: "Ele saiu satisfeito, mas teve diarreia por causa do remédio, e a gripe passou no mesmo tempo de sempre.",
        pontos: {}
      },
      {
        texto: "Explico, de forma técnica e corrida, que antibiótico não age em vírus, e mostro o estudo científico que comprova isso.",
        reacao: "hã? mas da última vez funcionou... 🤨",
        resultado: "A informação estava certa, mas ele saiu sem acreditar e comprou o remédio por conta própria.",
        pontos: { logica: 1 }
      },
      {
        texto: "Anoto no prontuário que ele recusou a orientação e encerro a consulta.",
        reacao: "então vou procurar outro médico 😒",
        resultado: "O registro ficou correto, mas o paciente foi embora sem entender nada.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Explico com um exemplo do dia a dia por que antibiótico não mata vírus e o que fazer se piorar.",
        reacao: "ah, é tipo usar remédio de formiga pra matar barata? 😂 entendi",
        resultado: "Ele saiu sem antibiótico, com orientações para aliviar os sintomas e sabendo quando voltar.",
        pontos: { pessoas: 2, criatividade: 1, logica: 1 }
      }
    ]
  },
  {
    horario: "15:30",
    titulo: "Quase um erro",
    cena: "📝 😵 ☕",
    descricao: "Na 20ª hora de plantão, a farmacêutica liga: uma prescrição sua está com a dose dez vezes maior.",
    conversa: [
      { quem: "Caio, médico plantonista", avatar: "👨🏽‍⚕️", fala: "a farmácia ligou: a heparina do leito 3 tá com uma dose dez vezes maior 😳" },
      { quem: "Caio, médico plantonista", avatar: "👨🏽‍⚕️", fala: "acho que foi um zero a mais. cê tá bem? tá com uma cara de cansaço..." }
    ],
    naVidaReal: "Cansaço extremo aumenta o risco de erros. Hospitais têm barreiras de segurança, como a checagem da farmácia, e reconhecer o próprio limite é uma atitude de segurança, e não de fraqueza.",
    opcoes: [
      {
        texto: "Agradeço, corrijo e continuo trabalhando sem parar.",
        reacao: "beleza... mas olha o resto das prescrições também 👀",
        resultado: "A dose foi corrigida, mas você continuou exausto(a) e quase errou de novo à noite.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Fico irritado(a) e digo que sei muito bem o que estou fazendo.",
        reacao: "ninguém tá duvidando de você, só quero ajudar 😕",
        resultado: "O clima ficou ruim, e você deixou de revisar outras prescrições do mesmo período.",
        pontos: {}
      },
      {
        texto: "Corrijo, aviso a chefia, reviso o que prescrevi nas últimas horas e faço uma pausa.",
        reacao: "atitude certa. achei mais uma dose esquisita aqui, olha 👍",
        resultado: "A revisão encontrou mais um erro pequeno. Depois de 20 minutos de pausa, você voltou mais atento(a).",
        pontos: { organizacao: 2, pressao: 1, logica: 1 }
      },
      {
        texto: "Peço para o Caio conferir as minhas próximas prescrições até o fim do plantão, para não arriscar outro erro.",
        reacao: "fechado, um confere o outro 🤝",
        resultado: "A dupla conferência evitou novos erros até a troca de plantão.",
        pontos: { pessoas: 1, organizacao: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "17:00",
    titulo: "Dose perigosa",
    cena: "💊 📝 ⚠️",
    conversa: [
      { quem: "Dra. Vera, médica chefe", avatar: "👩🏻‍⚕️", fala: "revisa essa receita que o interno fez pra dor e febre 💊" },
      { quem: "Dra. Vera, médica chefe", avatar: "👩🏻‍⚕️", fala: "uma linha dela pode fazer mal ao fígado" }
    ],
    pergunta: "Toque na linha da receita que está errada para um adulto:",
    linhas: [
      "Paciente: Ana Paula, 34 anos, 60 kg",
      "Paracetamol 750 mg",
      "Em caso de febre ou dor",
      "Por até 3 dias",
      "Tomar 2 comprimidos de 4 em 4 horas"
    ],
    correta: 4,
    explicacao: "Dois comprimidos de 750 mg de 4 em 4 horas dão 9 gramas por dia. A dose máxima de paracetamol para um adulto costuma ser de 4 gramas por dia, e passar disso pode causar lesão grave no fígado. Remédio comum também tem limite.",
    traco: "logica"
  },
  {
    horario: "18:30",
    titulo: "Sem vaga na UTI",
    cena: "🏥 🛏️ 📞",
    descricao: "Um paciente da emergência precisa de UTI, mas não há leito livre no hospital. A família pressiona.",
    conversa: [
      { quem: "Dona Sônia, esposa do paciente", avatar: "👩🏾‍🦳", fala: "ele precisa de UTI e vocês não fazem nada?! 😭" },
      { quem: "Dona Sônia, esposa do paciente", avatar: "👩🏾‍🦳", fala: "eu vou gravar e postar isso na internet!" }
    ],
    naVidaReal: "No SUS, vagas de UTI são pedidas a uma central de regulação, que distribui os leitos da região por gravidade. Enquanto a vaga não sai, a equipe estabiliza o paciente e mantém a família informada.",
    opcoes: [
      {
        texto: "Digo que não tem vaga e que não há nada a fazer.",
        reacao: "então ele vai morrer aqui?! 😡",
        resultado: "A família ficou desesperada, e ninguém pediu a vaga pela regulação.",
        pontos: {}
      },
      {
        texto: "Monto uma \"UTI improvisada\" no corredor com aparelhos emprestados de outros setores, sem esperar autorização da coordenação.",
        reacao: "pelo menos alguém tá fazendo algo... 😟",
        resultado: "A intenção era boa, mas outros setores ficaram sem os aparelhos e a coordenação não sabia de nada.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Ligo para a central de vagas e discuto com o atendente.",
        reacao: "e aí? conseguiu? 😰",
        resultado: "A discussão não acelerou nada, porque o pedido não tinha os dados de que a regulação precisava.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Peço a vaga à regulação com um relatório completo, estabilizo o paciente e explico à família como funciona a fila.",
        reacao: "...tá. obrigada por explicar. eu só tô com muito medo 😢",
        resultado: "Com o relatório bem feito, a vaga saiu em algumas horas, e a família acompanhou cada passo.",
        pontos: { organizacao: 2, logica: 1, pessoas: 1 }
      }
    ]
  }
]);
