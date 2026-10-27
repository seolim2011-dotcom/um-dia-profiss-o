/*
  Profissão: Gestão Hospitalar
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "gestao-hospitalar",
  nome: "Gestão Hospitalar",
  icone: "🏥",
  cor: "#c2410c",
  resumo: "Organizar o funcionamento de hospitais e clínicas: equipes, leitos, custos e qualidade do atendimento.",

  perfil: {
    pessoas: {
      peso: 4,
      gostar: "Liderar equipes e resolver conflitos para o hospital funcionar melhor.",
      dificil: "Negociar com médicos, equipes, fornecedores e pacientes irritados — às vezes no mesmo dia."
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
    "Tecnólogo em Gestão Hospitalar — cerca de 2 a 3 anos",
    "Bacharelado em Administração, com especialização em gestão em saúde — cerca de 4 anos, mais a pós",
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
      explicacao: "À noite a espera chega a 130 minutos — quase o triplo dos outros turnos. É ali que o plano precisa agir, por exemplo com mais um médico na triagem. Gestores tomam decisões lendo dados como esses todos os dias.",
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
        "Sônia — segunda, das 7h às 19h",
        "Rafael — segunda, das 19h às 7h",
        "Bruna — terça, das 7h às 19h e das 19h às 7h",
        "Carla — quarta, das 19h às 7h",
        "Diego — quinta, folga"
      ],
      correta: 2,
      explicacao: "A Bruna ficaria 24 horas seguidas: das 7h às 19h e depois das 19h às 7h. Escala mal feita cansa a equipe e aumenta o risco de erro com pacientes — por isso conferir as regras é parte do trabalho de quem faz a gestão.",
      traco: "organizacao"
    },
    {
      horario: "13:30",
      titulo: "Corte no orçamento",
      cena: "💰 ✂️ 📉",
      descricao: "Chega um e-mail da diretoria sobre o orçamento do próximo trimestre.",
      conversa: [
        { quem: "Dr. Paulo, diretor do hospital", avatar: "👨🏽‍💼", fala: "📧 Assunto: URGENTE — orçamento" },
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
          resultado: "Decisões financeiras são frequentes na gestão — adiar só deixa o problema maior.",
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
