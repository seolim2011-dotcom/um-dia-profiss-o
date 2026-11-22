/*
  Profissão: Gestão Hospitalar
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "gestao-hospitalar",
  nome: "Gestão Hospitalar",
  icone: "🏥",
  cor: "#0d1b3d",
  area: "saude",
  resumo: "Organizar o funcionamento de hospitais e clínicas: equipes, leitos, custos e qualidade do atendimento.",

  perfil: {
    pessoas: {
      peso: 4,
      gostar: "Liderar equipes e resolver conflitos para o hospital funcionar melhor.",
      dificil: "Negociar com médicos, equipes, fornecedores e pacientes irritados, às vezes no mesmo dia."
    },
    logica: {
      peso: 3,
      gostar: "Usar dados e indicadores para descobrir onde estão os problemas.",
      dificil: "Planilhas, orçamentos e relatórios fazem parte de quase todos os dias."
    },
    pressao: {
      peso: 4,
      gostar: "Tomar decisões importantes que melhoram o atendimento de muita gente.",
      dificil: "Falta de leitos, de dinheiro e de pessoal: decisões difíceis, com cobrança de todos os lados."
    },
    organizacao: {
      peso: 5,
      gostar: "Criar processos, escalas e rotinas que fazem tudo funcionar 24 horas por dia.",
      dificil: "Muita burocracia: contratos, normas, fiscalizações e documentos sempre em dia."
    },
    criatividade: {
      peso: 3,
      gostar: "Inventar soluções para fazer mais com menos recursos.",
      dificil: "Mudanças em hospital são lentas e esbarram em regras, orçamento e resistência das equipes."
    }
  },

  cursos: [
    "Tecnólogo em Gestão Hospitalar (cerca de 2 a 3 anos)",
    "Bacharelado em Administração, com especialização em gestão em saúde (cerca de 4 anos, mais a pós)",
    "Pós-graduação ou MBA em Gestão Hospitalar, para quem já trabalha na área da saúde"
  ],

  situacoes: [
    {
      horario: "08:00",
      titulo: "Reunião de indicadores",
      cena: "📈 🏥 ⏳",
      descricao: "Reunião da diretoria. Os números do último mês aparecem no telão.",
      conversa: [
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "viu os números do pronto-socorro?" },
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "40% a mais de espera. em UM mês." },
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "quero um plano na minha mesa até sexta. sem desculpa." }
      ],
      naVidaReal: "Gestores de saúde trabalham o tempo todo com indicadores: tempo de espera, ocupação de leitos, custos, infecções. Decidir com base em dados, e não no “achismo”, é parte central da profissão.",
      opcoes: [
        {
          texto: "Vou direto conversar com a equipe do pronto-socorro para ouvir o que está acontecendo.",
          reacao: "conversar é bom. mas eu preciso de número, não de opinião.",
          resultado: "A equipe se sentiu ouvida e deu boas pistas, mas sem os dados você não conseguiu mostrar à diretoria onde está o problema.",
          pontos: { pessoas: 2 }
        },
        {
          texto: "Cruzo os dados por horário e dia da semana para achar o gargalo e depois converso com a equipe do pronto-socorro.",
          reacao: "à noite, então. ótimo. isso eu consigo defender na diretoria 👍",
          resultado: "Você descobriu que o problema se concentra à noite, quando há só um médico na triagem. O plano ficou certeiro.",
          pontos: { logica: 2, organizacao: 1, pessoas: 1 }
        },
        {
          texto: "Proponho contratar mais médicos, que é o jeito mais rápido de resolver.",
          reacao: "com que dinheiro? 🙄",
          resultado: "A diretoria lembrou que não há orçamento para isso e pediu uma proposta mais bem fundamentada.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Números e planilhas não são comigo: peço para outra pessoa fazer a análise.",
          reacao: "você é gestor(a). planilha faz parte.",
          resultado: "A análise atrasou e o plano não ficou pronto até sexta.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "08:45",
      titulo: "Leia os dados",
      cena: "📊 🔍 ⏱️",
      conversa: [
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "taí o tempo médio de espera no pronto-socorro, por turno" },
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "me mostra onde tá o problema." }
      ],
      pergunta: "Em qual turno está o gargalo do pronto-socorro?",
      grafico: [
        { rotulo: "Manhã", valor: 40 },
        { rotulo: "Tarde", valor: 45 },
        { rotulo: "Noite", valor: 130 },
        { rotulo: "Madrugada", valor: 50 }
      ],
      unidade: "min",
      alternativas: ["Manhã", "Tarde", "Noite", "Madrugada"],
      correta: 2,
      explicacao: "À noite a espera chega a 130 minutos, quase o triplo dos outros turnos. É ali que o plano precisa agir, por exemplo com mais um médico na triagem. Gestores tomam decisões lendo dados como esses todos os dias.",
      traco: "logica"
    },
    {
      horario: "09:30",
      titulo: "Hospital lotado",
      urgente: true,
      cena: "🛏️ 🚑 📞",
      descricao: "Todos os leitos estão ocupados e seis pacientes esperam internação no pronto-socorro. O telefone toca.",
      conversa: [
        { quem: "Dra. Helena, médica do pronto-socorro", avatar: "👩🏼‍⚕️", fala: "alô?! aqui é a Helena, do PS" },
        { quem: "Dra. Helena, médica do pronto-socorro", avatar: "👩🏼‍⚕️", fala: "tenho SEIS pacientes em maca no corredor 😤" },
        { quem: "Dra. Helena, médica do pronto-socorro", avatar: "👩🏼‍⚕️", fala: "preciso de leito. e preciso agora!" }
      ],
      naVidaReal: "A gestão de leitos é um dos maiores desafios dos hospitais. O gestor quase não atende pacientes, mas suas decisões afetam diretamente quem está esperando atendimento.",
      opcoes: [
        {
          texto: "Ligo para outros hospitais da rede e negocio a transferência de alguns pacientes.",
          reacao: "transferência demora... mas ok, já ajuda 😮‍💨",
          resultado: "Você conseguiu duas vagas fora, mas as transferências levaram a tarde toda.",
          pontos: { criatividade: 1, pessoas: 1, pressao: 1 }
        },
        {
          texto: "Digo à médica que não há o que fazer e que ela vai ter que esperar.",
          reacao: "como assim?! vou subir aí agora! 😡",
          resultado: "Os pacientes passaram a noite em macas no corredor e o caso chegou à diretoria.",
          pontos: {}
        },
        {
          texto: "Reviso com as equipes quais pacientes já podem ter alta hoje e agilizo a liberação desses leitos.",
          reacao: "4 leitos até o meio-dia? perfeito, obrigada! 🙏",
          resultado: "Quatro leitos foram liberados até o meio-dia. A médica ainda reclamou, mas a fila andou.",
          pontos: { organizacao: 2, pressao: 1, pessoas: 1 }
        }
      ]
    },
    {
      horario: "11:00",
      titulo: "A escala não fecha",
      cena: "📅 🤒 🌙",
      descricao: "Duas técnicas de enfermagem apresentaram atestado médico e o plantão da noite ficou descoberto.",
      conversa: [
        { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "temos um problema 😩" },
        { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "duas técnicas pegaram atestado pra hoje à noite" },
        { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "e ninguém quer fazer hora extra, tá todo mundo exausto. o que a gente faz?" }
      ],
      naVidaReal: "Montar escalas, cobrir faltas e lidar com o cansaço das equipes é rotina. O gestor precisa conhecer as leis trabalhistas e manter o hospital funcionando 24 horas por dia.",
      opcoes: [
        {
          texto: "Converso com a equipe, explico a situação e monto um rodízio justo de horas extras, deixando tudo registrado.",
          reacao: "assim fica justo. vou passar pro pessoal 👍",
          resultado: "O plantão foi coberto e a equipe aceitou melhor por entender os critérios.",
          pontos: { organizacao: 2, pessoas: 1, pressao: 1 }
        },
        {
          texto: "Analiso a ocupação dos setores e remanejo profissionais de um setor menos movimentado.",
          reacao: "fechou... mas o pessoal da pediatria vai reclamar, viu 😬",
          resultado: "A escala fechou, mas os profissionais remanejados reclamaram por não terem sido consultados.",
          pontos: { organizacao: 1, pressao: 1, logica: 1 }
        },
        {
          texto: "Ofereço uma folga extra no fim de semana para quem cobrir o plantão.",
          reacao: "uma pessoa topou! mas e o domingo, quem cobre? 🤔",
          resultado: "Uma pessoa topou, mas a folga extra desfalcou o plantão de domingo.",
          pontos: { criatividade: 1, pessoas: 1 }
        },
        {
          texto: "Deixo como está e torço para a noite ser tranquila.",
          reacao: "torcer?! não dá pra deixar plantão descoberto! 😱",
          resultado: "A noite foi agitada e a equipe reduzida não deu conta. Houve reclamações e risco para os pacientes.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "12:00",
      titulo: "Confira a escala",
      cena: "📅 🔍 ⏰",
      conversa: [
        { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "montei a escala da semana 📋" },
        { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "dá uma conferida antes de eu publicar? tô tão cansada que posso ter errado 😅" }
      ],
      pergunta: "Regra: ninguém pode trabalhar mais de 12 horas seguidas. Toque na linha da escala que quebra a regra:",
      linhas: [
        "Sônia: segunda, das 7h às 19h",
        "Rafael: segunda, das 19h às 7h",
        "Bruna: terça, das 7h às 19h e das 19h às 7h",
        "Carla: quarta, das 19h às 7h",
        "Diego: quinta, folga"
      ],
      correta: 2,
      explicacao: "A Bruna ficaria 24 horas seguidas: das 7h às 19h e depois das 19h às 7h. Escala mal feita cansa a equipe e aumenta o risco de erro com pacientes. Por isso, conferir as regras é parte do trabalho de quem faz a gestão.",
      traco: "organizacao"
    },
    {
      horario: "13:30",
      titulo: "Corte no orçamento",
      cena: "💰 ✂️ 📉",
      descricao: "Chega um e-mail da diretoria sobre o orçamento do próximo trimestre.",
      conversa: [
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "📧 Assunto: Orçamento (URGENTE)" },
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "precisamos cortar 10% dos gastos no próximo trimestre." },
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "sem piorar o atendimento, claro." }
      ],
      naVidaReal: "Boa parte do trabalho é financeira: orçamento, contratos com fornecedores, negociação com planos de saúde e com o SUS. Cada corte precisa ser bem pensado para não prejudicar o cuidado.",
      opcoes: [
        {
          texto: "Corto 10% de todos os setores igualmente, que é mais simples.",
          reacao: "simples, né? até a UTI reclamar. 😒",
          resultado: "A conta fechou, mas setores que já estavam no limite, como a UTI, ficaram prejudicados.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Faço uma reunião com os chefes de setor para que cada um sugira onde economizar.",
          reacao: "boas ideias. mas a conta ainda não fecha.",
          resultado: "Surgiram boas ideias, mas a soma das sugestões não chegou aos 10%.",
          pontos: { pessoas: 1, criatividade: 1 }
        },
        {
          texto: "Analiso contratos e desperdícios setor por setor e proponho alternativas, como compras em conjunto com outros hospitais.",
          reacao: "compra em conjunto... gostei. aprovado ✅",
          resultado: "Você encontrou economia em contratos e materiais sem mexer nas equipes. A diretoria aprovou o plano.",
          pontos: { logica: 2, organizacao: 1, criatividade: 1 }
        },
        {
          texto: "Fico desconfortável: não gosto de decisões que envolvem dinheiro e cortes.",
          reacao: "desconfortável? é o seu trabalho.",
          resultado: "Decisões financeiras são frequentes na gestão: adiar só deixa o problema maior.",
          pontos: {}
        }
      ]
    },
    {
      horario: "15:00",
      titulo: "Reclamação na ouvidoria",
      cena: "😡 📝 📲",
      descricao: "Chegou uma reclamação na ouvidoria do hospital.",
      conversa: [
        { quem: "Seu Marcos, paciente", avatar: "🧔🏻", fala: "esperei CINCO horas por um exame 😡" },
        { quem: "Seu Marcos, paciente", avatar: "🧔🏻", fala: "e a moça da recepção ainda foi grossa comigo" },
        { quem: "Seu Marcos, paciente", avatar: "🧔🏻", fala: "se ninguém me responder hoje, vou postar tudo nas redes 📱" }
      ],
      naVidaReal: "A satisfação dos pacientes e a imagem do hospital também são responsabilidade da gestão. Saber ouvir críticas e transformar reclamações em melhorias faz parte do trabalho.",
      opcoes: [
        {
          texto: "Envio uma resposta padrão por e-mail.",
          reacao: "“agradecemos o seu contato”... sério? 😑",
          resultado: "O paciente achou a resposta fria e publicou a reclamação mesmo assim.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Fico na defensiva: a recepção está sobrecarregada, a culpa não é nossa.",
          reacao: "ah, então a culpa é minha?! 😡",
          resultado: "A conversa piorou e o caso repercutiu mal para o hospital.",
          pontos: {}
        },
        {
          texto: "Analiso os horários de agendamento para descobrir por que os exames atrasam.",
          reacao: "ninguém me respondeu até agora. já postei. 📱",
          resultado: "Você achou a causa do atraso, mas o paciente ficou sem resposta e publicou a reclamação.",
          pontos: { logica: 1, organizacao: 1 }
        },
        {
          texto: "Ligo para o paciente, peço desculpas, ouço o que aconteceu e crio com a recepção um jeito de avisar sobre atrasos.",
          reacao: "...olha, obrigado por ligar. não esperava isso 🙂",
          resultado: "O paciente se acalmou e agradeceu o retorno. O aviso de atrasos reduziu as reclamações nas semanas seguintes.",
          pontos: { pessoas: 2, pressao: 1, criatividade: 1 }
        }
      ]
    },
    {
      horario: "17:00",
      titulo: "Fiscalização surpresa",
      urgente: true,
      cena: "🕵️ 📁 ⚠️",
      descricao: "Fiscais chegam sem aviso. Você sabe que alguns registros de manutenção de equipamentos estão atrasados.",
      conversa: [
        { quem: "Fiscal da vigilância sanitária", avatar: "🕵🏽‍♀️", fala: "boa tarde! vigilância sanitária 🪪" },
        { quem: "Fiscal da vigilância sanitária", avatar: "🕵🏽‍♀️", fala: "visita de rotina. pode me mostrar os registros de manutenção dos equipamentos?" }
      ],
      naVidaReal: "Hospitais passam por fiscalizações e por processos de acreditação (selos de qualidade). Manter documentos, contratos e manutenções em dia é um trabalho constante de organização.",
      opcoes: [
        {
          texto: "Corro para atualizar os registros às pressas enquanto um colega distrai os fiscais.",
          reacao: "essas datas foram preenchidas hoje? 🤨",
          resultado: "Os fiscais perceberam a correria e as datas inconsistentes. O hospital recebeu uma advertência.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Acompanho os fiscais com transparência, mostro o que está em dia e apresento um plano com prazo para o que está atrasado.",
          reacao: "agradeço a transparência. vou registrar, mas com prazo para regularizar.",
          resultado: "Os fiscais registraram as pendências, mas deram prazo para regularizar por causa do plano apresentado.",
          pontos: { organizacao: 2, pressao: 1, pessoas: 1 }
        },
        {
          texto: "Fico nervoso(a) e deixo outra pessoa lidar com a visita.",
          reacao: "a pessoa responsável pela gestão não vai nos acompanhar? 🤔",
          resultado: "A coordenadora de enfermagem não tinha as informações administrativas e a inspeção foi ruim.",
          pontos: {}
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("gestao-hospitalar", [
  {
    horario: "08:00",
    titulo: "Consultas vazias",
    cena: "📅 🪑 📉",
    descricao: "O relatório do mês mostra que 30% dos pacientes agendados no ambulatório faltaram às consultas.",
    conversa: [
      { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏻‍💼", fala: "30% de faltas no ambulatório 😩" },
      { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏻‍💼", fala: "e tem gente esperando três meses por uma vaga. me traz uma solução?" }
    ],
    naVidaReal: "Faltas em consultas são um problema comum na saúde: a vaga fica vazia enquanto outras pessoas esperam. Lembretes por mensagem, horários melhores e entender o motivo das faltas costumam reduzir o problema.",
    opcoes: [
      {
        texto: "Vou à recepção conversar com os pacientes para entender por que eles faltam.",
        reacao: "boa, mas são milhares de consultas... dá pra ver o todo? 🤔",
        resultado: "Você ouviu histórias importantes, mas não sabia se elas representavam a maioria.",
        pontos: { pessoas: 2 }
      },
      {
        texto: "Cruzo os dados de faltas por especialidade, horário e bairro e depois converso com a recepção.",
        reacao: "as faltas são maiores às 7h e em quem mora longe? interessante 👀",
        resultado: "Com lembretes por mensagem e horários mais tarde para quem mora longe, as faltas caíram pela metade.",
        pontos: { logica: 2, organizacao: 1, pessoas: 1 }
      },
      {
        texto: "Proponho marcar dois pacientes por horário para compensar as faltas.",
        reacao: "e quando os dois vierem? 😬",
        resultado: "Em vários dias os dois vieram, e a espera dentro do ambulatório explodiu.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Deixo como está: faltas sempre existiram.",
        reacao: "então a fila de três meses vai continuar... 😕",
        resultado: "Nada mudou, e a fila de espera aumentou no mês seguinte.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "08:45",
    titulo: "Ocupação dos leitos",
    cena: "🛏️ 📊 🔍",
    conversa: [
      { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏻‍💼", fala: "olha a ocupação de leitos de hoje por setor 📊" },
      { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏻‍💼", fala: "qual precisa da nossa atenção primeiro?" }
    ],
    pergunta: "Porcentagem de leitos ocupados em cada setor. Qual está mais perto do limite?",
    grafico: [
      { rotulo: "Clínica", valor: 78 },
      { rotulo: "Pediatria", valor: 52 },
      { rotulo: "UTI", valor: 98 },
      { rotulo: "Ortopedia", valor: 71 }
    ],
    unidade: "%",
    alternativas: ["Clínica", "Pediatria", "UTI", "Ortopedia"],
    correta: 2,
    explicacao: "Com 98% dos leitos ocupados, a UTI quase não tem folga para uma emergência. Gestores acompanham a ocupação todos os dias para planejar altas, transferências e o uso de leitos de outros setores.",
    traco: "logica"
  },
  {
    horario: "09:30",
    titulo: "Acabou o antibiótico",
    urgente: true,
    cena: "💊 📦 ⚠️",
    descricao: "A farmácia avisa que um antibiótico muito usado acabou no estoque central, e o fornecedor só entrega amanhã.",
    conversa: [
      { quem: "Gisele, farmacêutica", avatar: "👩🏻‍🔬", fala: "o estoque central zerou 😱 e tem 12 pacientes usando esse antibiótico" },
      { quem: "Gisele, farmacêutica", avatar: "👩🏻‍🔬", fala: "a próxima dose é às 12h. o que a gente faz?" }
    ],
    naVidaReal: "Falta de medicamento é um problema real nos hospitais. A gestão de estoques, os contratos com fornecedores e os acordos entre hospitais existem para evitar que o tratamento seja interrompido.",
    opcoes: [
      {
        texto: "Ligo para hospitais da região e peço um empréstimo emergencial do antibiótico.",
        reacao: "o hospital vizinho tem 20 frascos! mandam em uma hora 🚑",
        resultado: "O empréstimo cobriu o dia, mas ninguém conferiu se os setores ainda tinham doses guardadas.",
        pontos: { criatividade: 1, pessoas: 1, pressao: 1 }
      },
      {
        texto: "Aviso os médicos que acabou e que eles se virem.",
        reacao: "como assim?? 😡",
        resultado: "Cada médico tentou resolver sozinho, e alguns pacientes ficaram sem a dose do meio-dia.",
        pontos: {}
      },
      {
        texto: "Confiro o estoque de todos os setores, remanejo as doses para quem mais precisa, aviso as equipes e faço uma compra emergencial.",
        reacao: "achei 15 doses espalhadas nos setores! dá pra hoje 🙌",
        resultado: "Nenhum paciente ficou sem a dose, e a compra emergencial chegou à noite.",
        pontos: { organizacao: 2, pressao: 1, pessoas: 1 }
      }
    ]
  },
  {
    horario: "11:00",
    titulo: "O tomógrafo quebrou",
    cena: "🩻 🔧 ⏳",
    descricao: "O único tomógrafo do hospital parou de funcionar. Há 18 exames marcados para hoje, alguns urgentes.",
    conversa: [
      { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "o tomógrafo travou de vez 😩" },
      { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "tem um paciente com suspeita de AVC chegando da emergência!" }
    ],
    naVidaReal: "Equipamentos param, e a gestão precisa ter plano para isso: contratos de manutenção com prazo, acordos com hospitais parceiros e prioridade para os casos urgentes, como a suspeita de AVC, em que cada minuto conta.",
    opcoes: [
      {
        texto: "Reorganizo a agenda com a equipe, mando as urgências para um hospital parceiro e registro tudo.",
        reacao: "o paciente do AVC já tá a caminho do parceiro 🚑",
        resultado: "Os casos urgentes foram atendidos a tempo, e os exames eletivos foram remarcados para a semana.",
        pontos: { organizacao: 2, pessoas: 1, pressao: 1 }
      },
      {
        texto: "Leio o contrato de manutenção e cobro da empresa o prazo de conserto.",
        reacao: "eles vêm amanhã cedo. mas e o paciente de agora? 😬",
        resultado: "A empresa cumpriu o contrato, mas o caso urgente demorou a ser encaminhado.",
        pontos: { organizacao: 1, pressao: 1, logica: 1 }
      },
      {
        texto: "Peço desculpas pessoalmente aos pacientes que esperam e ofereço um lanche.",
        reacao: "eles gostaram... mas continuam sem exame 😕",
        resultado: "O gesto foi simpático, mas não resolveu o problema de ninguém.",
        pontos: { criatividade: 1, pessoas: 1 }
      },
      {
        texto: "Aviso que não há previsão e mando todo mundo para casa.",
        reacao: "inclusive o do AVC?? 😱",
        resultado: "Um paciente grave ficou sem exame por horas, e o caso virou uma investigação interna.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "12:00",
    titulo: "Confira a compra",
    cena: "🧾 🧤 🔍",
    conversa: [
      { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏻‍💼", fala: "antes de aprovar a compra do mês, confere a planilha? 🧾" },
      { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏻‍💼", fala: "tem uma conta errada aí" }
    ],
    pergunta: "Toque na linha da planilha de compras que tem uma conta errada:",
    linhas: [
      "Luvas: 200 caixas × R$ 30,00 = R$ 6.000,00",
      "Seringas: 1.000 unidades × R$ 0,50 = R$ 500,00",
      "Máscaras: 300 caixas × R$ 20,00 = R$ 9.000,00",
      "Álcool em gel: 50 galões × R$ 40,00 = R$ 2.000,00"
    ],
    correta: 2,
    explicacao: "300 × R$ 20,00 = R$ 6.000,00, e não R$ 9.000,00. Conferir valores e quantidades evita pagar a mais com dinheiro que faria falta em outro setor. Na gestão, cada conta importa.",
    traco: "logica"
  },
  {
    horario: "13:30",
    titulo: "Comida no lixo",
    cena: "🍽️ 🗑️ 📉",
    descricao: "Uma auditoria mostrou que o hospital joga fora quase um terço das refeições preparadas todos os dias.",
    conversa: [
      { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏻‍💼", fala: "um terço da comida vai pro lixo 😳" },
      { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏻‍💼", fala: "é dinheiro e comida jogados fora. o que você propõe?" }
    ],
    naVidaReal: "Desperdício de alimentos é um custo alto em hospitais. Medir o que sobra, ajustar a produção à ocupação real e doar o excedente dentro das regras sanitárias (permitido por lei desde 2020) reduz o problema.",
    opcoes: [
      {
        texto: "Reduzo a quantidade de todas as refeições igualmente.",
        reacao: "e os setores em que falta comida? 🤔",
        resultado: "Sobrou menos comida, mas em alguns setores pacientes ficaram sem refeição.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Reúno a nutrição e a cozinha para darem ideias.",
        reacao: "a equipe adorou ser ouvida 😊",
        resultado: "Surgiram boas ideias, mas ninguém sabia ainda onde estava o maior desperdício.",
        pontos: { pessoas: 1, criatividade: 1 }
      },
      {
        texto: "Meço o desperdício por refeição e setor e proponho ajustes, como produzir pela ocupação do dia e doar o excedente.",
        reacao: "a maior sobra é do jantar da ortopedia! faz sentido 👏",
        resultado: "O desperdício caiu pela metade, e o excedente passou a ir para uma entidade do bairro.",
        pontos: { logica: 2, organizacao: 1, criatividade: 1 }
      },
      {
        texto: "Acho esse assunto chato e deixo para depois.",
        reacao: "o desperdício não espera... 😕",
        resultado: "O problema continuou, e o custo apareceu de novo no relatório do mês seguinte.",
        pontos: {}
      }
    ]
  },
  {
    horario: "15:00",
    titulo: "Demora na pediatria",
    cena: "👶 ⏳ 📱",
    descricao: "Uma mãe postou nas redes que esperou cinco horas com o filho febril na pediatria. O post está circulando.",
    conversa: [
      { quem: "Aline, mãe de paciente", avatar: "👩🏽", fala: "cinco horas com meu filho de 2 anos ardendo em febre 😡" },
      { quem: "Aline, mãe de paciente", avatar: "👩🏽", fala: "ninguém explicava nada. isso é um descaso!" }
    ],
    naVidaReal: "Muitas reclamações nascem da falta de informação sobre a espera. A classificação de risco (como a cor da pulseira) define quem é atendido primeiro, e explicar isso às famílias diminui a angústia.",
    opcoes: [
      {
        texto: "Respondo com uma nota padrão de \"lamentamos o ocorrido\".",
        reacao: "resposta de robô 🙄",
        resultado: "A nota gerou ainda mais comentários negativos.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Respondo que a culpa é da falta de médicos e não do hospital.",
        reacao: "e eu com isso?! 😡",
        resultado: "A resposta pareceu uma desculpa, e o caso chegou à imprensa local.",
        pontos: {}
      },
      {
        texto: "Analiso os horários de atendimento da pediatria para achar o gargalo.",
        reacao: "o pico é entre 18h e 22h, justo com um pediatra só 👀",
        resultado: "A análise mostrou o problema, mas a família continuou sem resposta.",
        pontos: { logica: 1, organizacao: 1 }
      },
      {
        texto: "Ligo para a mãe, peço desculpas, ouço o que houve e crio com a recepção um painel com o tempo de espera.",
        reacao: "...obrigada por ligar. ninguém tinha me explicado nada 😢",
        resultado: "A mãe atualizou o post agradecendo a ligação, e o painel de espera reduziu as reclamações.",
        pontos: { pessoas: 2, pressao: 1, criatividade: 1 }
      }
    ]
  },
  {
    horario: "17:00",
    titulo: "Apagão",
    urgente: true,
    cena: "⚡ 🔦 🏥",
    descricao: "Uma tempestade derruba a energia do bairro inteiro. O hospital fica no escuro por alguns segundos.",
    conversa: [
      { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "faltou luz!! 😱" },
      { quem: "Sônia, coordenadora de enfermagem", avatar: "👩🏽‍⚕️", fala: "o gerador ligou, mas não sei se tá segurando a UTI e o centro cirúrgico" }
    ],
    naVidaReal: "Hospitais precisam ter geradores e um plano de contingência testado, porque UTIs e centros cirúrgicos não podem ficar sem energia. A gestão é responsável por manter esse plano funcionando.",
    opcoes: [
      {
        texto: "Corro até a casa de máquinas para tentar mexer no gerador eu mesmo(a).",
        reacao: "você nem é da manutenção! 😳",
        resultado: "Você não sabia operar o gerador, e ninguém coordenou o resto do hospital enquanto isso.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Aciono o plano de contingência: confirmo que o gerador assumiu a UTI e o centro cirúrgico, organizo as equipes e informo pacientes e famílias.",
        reacao: "UTI e centro cirúrgico ok! 👍 os corredores tão com luz de emergência",
        resultado: "Nenhum paciente correu risco, e a energia voltou duas horas depois.",
        pontos: { organizacao: 2, pressao: 1, pessoas: 1 }
      },
      {
        texto: "Fico esperando a energia voltar sozinha.",
        reacao: "e se o gerador falhar? 😰",
        resultado: "Por sorte o gerador aguentou, mas ninguém coordenou a crise.",
        pontos: {}
      }
    ]
  }
]);
