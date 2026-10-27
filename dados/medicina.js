/*
  Profissão: Medicina
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "medicina",
  nome: "Medicina",
  icone: "🧑‍⚕️",
  cor: "#0369a1",
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
    "Graduação em Medicina — 6 anos",
    "Residência médica — de 2 a 5 anos, conforme a especialidade",
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
          texto: "Repito a conduta da noite sem olhar de novo, para ganhar tempo.",
          reacao: "hmm... e se o quadro mudou? 🤨",
          resultado: "A conduta anterior já não servia mais: ele precisou de ajuste de medicação à tarde.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Examino com calma, reviso os exames e converso com o paciente antes de opinar.",
          reacao: "boa! exame fala muito, mas o paciente fala mais ainda 👏",
          resultado: "Cruzando a conversa com os exames, você notou sinais de retenção de líquido e ajustou o tratamento a tempo.",
          pontos: { logica: 2, pessoas: 1 }
        },
        {
          texto: "Peço para um colega mais experiente decidir tudo por mim.",
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
          texto: "Sento com os dois, explico com palavras simples, deixo perguntarem e combino os próximos passos.",
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
          texto: "Explico tudo com termos técnicos e mostro o laudo.",
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
          texto: "Passo os casos mais pesados para o colega e vou embora.",
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
          texto: "Faço o exame por fora, sem avisar ninguém, e cobro do hospital.",
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
