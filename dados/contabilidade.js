/*
  Profissão: Ciências Contábeis
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "contabilidade",
  nome: "Ciências Contábeis",
  icone: "🧾",
  cor: "#2747d6",
  area: "negocios",
  resumo: "Cuidar das contas, dos impostos e da saúde financeira de empresas e pessoas.",

  perfil: {
    pessoas: {
      peso: 2,
      gostar: "Ajudar donos de pequenos negócios a entender e organizar o próprio dinheiro.",
      dificil: "Clientes que mandam tudo atrasado, misturam as contas ou pedem um \"jeitinho\"."
    },
    logica: {
      peso: 5,
      gostar: "Fazer as contas fecharem e descobrir de onde vem cada diferença.",
      dificil: "Leis de impostos que mudam toda hora e cálculos em que um centavo faz diferença."
    },
    pressao: {
      peso: 3,
      gostar: "Entregar tudo certo dentro dos prazos do mês.",
      dificil: "Prazos fixos de impostos e declarações, com multa se atrasar, e meses de muito trabalho."
    },
    organizacao: {
      peso: 5,
      gostar: "Ter cada documento, conta e prazo no lugar certo.",
      dificil: "Rotina com muitos papéis, planilhas e sistemas, com pouca margem para improviso."
    },
    criatividade: {
      peso: 1,
      gostar: "Encontrar caminhos legais para um cliente pagar menos imposto.",
      dificil: "Na contabilidade, criatividade fora das regras vira problema com a lei."
    }
  },

  cursos: [
    "Bacharelado em Ciências Contábeis (cerca de 4 anos)",
    "Para trabalhar como contador(a), é preciso passar no Exame de Suficiência e ter registro no CRC",
    "Curso técnico em contabilidade e planilhas eletrônicas ajudam a começar como auxiliar"
  ],

  situacoes: [
    {
      horario: "08:30",
      titulo: "A caixa de sapatos",
      cena: "📦 🧾 😵",
      descricao: "A dona de uma padaria, cliente nova do escritório, chega com todos os papéis do ano numa caixa de sapatos.",
      conversa: [
        { quem: "Dona Rita, dona da padaria", avatar: "👩🏽‍🍳", fala: "bom dia, querido(a)! trouxe tudo aqui 📦" },
        { quem: "Dona Rita, dona da padaria", avatar: "👩🏽‍🍳", fala: "tem nota da farinha, conta de luz, o mercado lá de casa, a escola do meu neto..." },
        { quem: "Dona Rita, dona da padaria", avatar: "👩🏽‍🍳", fala: "é tudo dinheiro da padaria mesmo, né? 😅" }
      ],
      naVidaReal: "Na contabilidade, o dinheiro da empresa e o dinheiro do dono não se misturam: é o chamado princípio da entidade. Muitos donos de pequenos negócios misturam as contas, e o contador ajuda a separar e a explicar por que isso importa.",
      opcoes: [
        {
          texto: "Separo o que é da padaria e o que é pessoal, organizo por mês e explico por que as contas não podem se misturar.",
          reacao: "ahhh, então a escola do meu neto não entra? agora entendi 😮",
          resultado: "As contas da padaria ficaram claras pela primeira vez, e a Dona Rita começou a usar uma conta só para o negócio.",
          pontos: { organizacao: 2, logica: 1 }
        },
        {
          texto: "Lanço tudo como despesa da padaria: assim ela paga menos imposto.",
          reacao: "que maravilha! 🤩",
          resultado: "Numa fiscalização, os gastos pessoais apareceram, e a padaria teve que pagar multa.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Separo as notas com ela na hora, conversando sobre a padaria a manhã inteira.",
          reacao: "que delícia de conversa! volta amanhã que tem pão de queijo 🥐",
          resultado: "A Dona Rita adorou você, mas a manhã acabou e metade das notas ficou para depois.",
          pontos: { pessoas: 2 }
        },
        {
          texto: "Deixo a caixa num canto para ver depois.",
          reacao: "tá bom... mas não vai perder nada, hein? 😟",
          resultado: "A caixa ficou esquecida por semanas, e uma nota importante sumiu.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "10:00",
      titulo: "Leia o caixa",
      cena: "📊 💰 📉",
      conversa: [
        { quem: "Márcia, contadora-chefe", avatar: "👩🏾‍💼", fala: "olha o caixa da padaria nos últimos 4 meses 📊" },
        { quem: "Márcia, contadora-chefe", avatar: "👩🏾‍💼", fala: "o que você diria pra Dona Rita?" }
      ],
      pergunta: "Dinheiro em caixa da padaria no fim de cada mês, em mil reais. O que o gráfico mostra?",
      grafico: [
        { rotulo: "Janeiro", valor: 9 },
        { rotulo: "Fevereiro", valor: 7 },
        { rotulo: "Março", valor: 4 },
        { rotulo: "Abril", valor: 1 }
      ],
      unidade: "mil",
      alternativas: [
        "O dinheiro em caixa cresce todo mês",
        "A padaria está gastando mais do que recebe, e o caixa pode ficar negativo em maio",
        "O caixa está estável, sem mudanças",
        "Não dá para tirar nenhuma conclusão"
      ],
      correta: 1,
      explicacao: "O caixa caiu todo mês: 9, 7, 4 e 1 mil reais. Se nada mudar, em maio ele fica negativo. Ler esses números a tempo permite agir antes: rever preços, cortar gastos ou negociar com fornecedores. Por isso o contador também é um conselheiro do negócio.",
      traco: "logica"
    },
    {
      horario: "11:00",
      titulo: "Dia 20: imposto vence hoje",
      urgente: true,
      cena: "📅 💸 ⏰",
      descricao: "Hoje vence a guia de impostos do mês, e um cliente ainda não mandou as notas de venda.",
      conversa: [
        { quem: "Seu Hélio, dono de oficina", avatar: "👨🏻‍🔧", fala: "opa! esqueci de mandar as notas do mês 😅" },
        { quem: "Seu Hélio, dono de oficina", avatar: "👨🏻‍🔧", fala: "o imposto vence hoje, né? dá pra fazer alguma coisa?" },
        { quem: "Seu Hélio, dono de oficina", avatar: "👨🏻‍🔧", fala: "o banco fecha às 16h 🏦" }
      ],
      naVidaReal: "A guia de impostos do Simples Nacional (DAS) vence todo dia 20. Pagar atrasado gera multa e juros. Parte do trabalho do contador é correr atrás dos documentos dos clientes para nada vencer.",
      opcoes: [
        {
          texto: "Peço as notas por foto, calculo o imposto, gero a guia e mando para ele pagar ainda hoje.",
          reacao: "chegou a guia! paguei pelo celular agora 🙌",
          resultado: "O imposto foi pago no prazo, sem multa nenhuma.",
          pontos: { pressao: 2, logica: 1, organizacao: 1 }
        },
        {
          texto: "Deixo vencer e pago com multa no mês que vem.",
          reacao: "multa? mas eu nem sabia... 😕",
          resultado: "A oficina pagou multa e juros, e o Seu Hélio ficou desconfiado do escritório.",
          pontos: {}
        },
        {
          texto: "Chuto um valor parecido com o do mês passado.",
          reacao: "beleza, paguei 👍",
          resultado: "O valor estava errado, e no mês seguinte foi preciso corrigir e pagar a diferença com juros.",
          pontos: { pressao: 1, criatividade: 1 }
        },
        {
          texto: "Mando um e-mail lembrando do prazo e espero ele responder.",
          reacao: "(o Seu Hélio não lê e-mail 📭)",
          resultado: "Ele só viu a mensagem no dia seguinte, e o imposto venceu.",
          pontos: { organizacao: 1 }
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "O pedido de \"jeitinho\"",
      cena: "🤫 💰 ⚖️",
      descricao: "O dono de uma loja de roupas pede para esconder parte das vendas.",
      conversa: [
        { quem: "Seu Rogério, dono de loja", avatar: "👨🏽‍💼", fala: "olha, vou ser direto 🤫" },
        { quem: "Seu Rogério, dono de loja", avatar: "👨🏽‍💼", fala: "metade das vendas é em dinheiro vivo. não declara essa parte, que eu pago menos imposto" },
        { quem: "Seu Rogério, dono de loja", avatar: "👨🏽‍💼", fala: "todo mundo faz, né? 😉" }
      ],
      naVidaReal: "Esconder vendas para pagar menos imposto é sonegação, crime previsto na Lei 8.137/1990, e o contador pode responder junto. Já o planejamento tributário é legal: escolher o regime de impostos certo e usar os benefícios que a lei permite.",
      opcoes: [
        {
          texto: "Faço o que ele pede: cliente é cliente.",
          reacao: "é assim que se faz! 😎",
          resultado: "Dois anos depois, a Receita cruzou os pagamentos em cartão e dinheiro, e você também foi investigado(a).",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Explico que isso é sonegação e mostro formas legais de pagar menos, como revisar o regime de impostos.",
          reacao: "dá pra economizar sem risco? me mostra isso aí 🤔",
          resultado: "Com o regime revisado, a loja passou a pagar menos imposto, tudo dentro da lei.",
          pontos: { logica: 2, organizacao: 1, pessoas: 1, criatividade: 1 }
        },
        {
          texto: "Recuso e encerro o contrato na hora, sem explicar nada.",
          reacao: "nossa, que exagero 😒",
          resultado: "Você ficou longe do problema, mas perdeu a chance de mostrar o caminho certo ao cliente.",
          pontos: { organizacao: 2 }
        },
        {
          texto: "Finjo que não ouvi e mudo de assunto.",
          reacao: "então tá combinado, né? 😉",
          resultado: "Ele entendeu o silêncio como um sim, e o problema voltou no fechamento do mês.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "15:00",
      titulo: "Erro na nota fiscal",
      cena: "🧾 🔍 🧮",
      conversa: [
        { quem: "Pedro, auxiliar", avatar: "🧑🏼", fala: "essa nota de compra da oficina tá estranha 🤨" },
        { quem: "Pedro, auxiliar", avatar: "🧑🏼", fala: "confere comigo antes de lançar?" }
      ],
      pergunta: "Toque na linha da nota fiscal que está errada:",
      linhas: [
        "Produto: 3 caixas de óleo de motor",
        "Preço de cada caixa: R$ 120,00",
        "Valor total dos produtos: R$ 480,00",
        "Comprador: Oficina do Hélio",
        "Data de emissão: 05/06"
      ],
      correta: 2,
      explicacao: "3 caixas × R$ 120,00 = R$ 360,00, e não R$ 480,00. Uma conferência simples evita pagar a mais ao fornecedor e lançar valores errados na contabilidade. Conferir cada número faz parte da rotina.",
      traco: "logica"
    },
    {
      horario: "16:00",
      titulo: "Planilha da folha",
      cena: "📈 💼 🧮",
      descricao: "O total da folha de pagamento de um cliente não bate com a soma dos holerites.",
      conversa: [
        { quem: "Pedro, auxiliar", avatar: "🧑🏼", fala: "fiz a planilha da folha do salão da Lívia 💇" },
        { quem: "Pedro, auxiliar", avatar: "🧑🏼", fala: "mas o total deu 214 reais a mais que os holerites... digitei tudo na mão 😬" }
      ],
      naVidaReal: "A folha de pagamento envolve salários, descontos e encargos de cada funcionário. Erros, mesmo pequenos, podem virar problemas trabalhistas. Planilhas com fórmulas e conferência dupla são ferramentas do dia a dia.",
      opcoes: [
        {
          texto: "Corrijo só o número que parece errado e sigo em frente.",
          reacao: "bateu! mas qual estava errado mesmo? 🤔",
          resultado: "O total bateu por acaso, e no mês seguinte o mesmo erro voltou em outro funcionário.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Deixo como está: a diferença é pequena.",
          reacao: "214 reais é o vale-transporte de alguém... 😟",
          resultado: "Uma funcionária recebeu errado e reclamou com a dona do salão.",
          pontos: {}
        },
        {
          texto: "Refaço a planilha com fórmulas, confiro com os holerites e mostro ao Pedro como evitar o erro.",
          reacao: "ahh, com fórmula não tem como errar a soma! valeu 🙏",
          resultado: "A diferença era um desconto digitado duas vezes. A planilha nova passou a ser usada por todo o escritório.",
          pontos: { logica: 2, organizacao: 2 }
        },
        {
          texto: "Refaço a planilha sozinho(a), sem falar nada com o Pedro.",
          reacao: "ué, minha planilha sumiu? 😕",
          resultado: "O erro foi corrigido, mas o Pedro não aprendeu e repetiu o problema em outro cliente.",
          pontos: { organizacao: 1 }
        }
      ]
    },
    {
      horario: "17:00",
      titulo: "Carta da Receita",
      urgente: true,
      cena: "✉️ 🏛️ 😰",
      descricao: "Uma cliente recebeu uma intimação da Receita Federal e liga desesperada.",
      conversa: [
        { quem: "Lívia, dona do salão", avatar: "💇🏻‍♀️", fala: "SOCORRO 😰 chegou uma carta da Receita Federal" },
        { quem: "Lívia, dona do salão", avatar: "💇🏻‍♀️", fala: "diz que tem diferença entre o que eu declarei e o que eu recebi no cartão" },
        { quem: "Lívia, dona do salão", avatar: "💇🏻‍♀️", fala: "tenho 20 dias pra responder. vou ser presa?? 😭" }
      ],
      naVidaReal: "A Receita Federal cruza informações de notas fiscais, maquininhas de cartão e bancos. Quando algo não bate, ela pede explicações. Responder no prazo e com documentos costuma resolver, e o contador é quem organiza essa resposta.",
      opcoes: [
        {
          texto: "Digo para ela ignorar a carta.",
          reacao: "ignorar? tem certeza? 😨",
          resultado: "O prazo passou, e a Receita aplicou uma multa bem maior do que o problema original.",
          pontos: {}
        },
        {
          texto: "Acalmo a cliente, peço os documentos do período, comparo com o que foi declarado e preparo a resposta no prazo.",
          reacao: "ufa, ainda bem que tenho você 🙏",
          resultado: "A diferença era uma venda lançada no mês errado. A resposta foi aceita, sem multa.",
          pontos: { pressao: 2, organizacao: 1, logica: 1, pessoas: 1 }
        },
        {
          texto: "Mando ela procurar um advogado e não me envolvo.",
          reacao: "mas você que fez minhas contas... 😢",
          resultado: "A cliente gastou com um advogado para algo que um contador resolveria, e trocou de escritório.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Refaço a declaração inteira correndo, sem entender o que deu errado.",
          reacao: "resolveu? 🤞",
          resultado: "A declaração nova trouxe outros erros, e o problema ficou maior.",
          pontos: { pressao: 1, logica: 2 }
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "37 reais de diferença",
      cena: "🏦 🔍 🌙",
      descricao: "Fechamento do mês: o saldo da contabilidade da padaria está 37 reais diferente do extrato do banco.",
      conversa: [
        { quem: "Márcia, contadora-chefe", avatar: "👩🏾‍💼", fala: "antes de ir: a conciliação da padaria tá com 37 reais de diferença 🏦" },
        { quem: "Márcia, contadora-chefe", avatar: "👩🏾‍💼", fala: "precisa fechar hoje pra eu mandar o balanço amanhã" }
      ],
      naVidaReal: "A conciliação bancária compara, lançamento por lançamento, a contabilidade com o extrato do banco. Uma diferença pequena pode esconder um erro grande, como um pagamento duplicado ou até uma fraude.",
      opcoes: [
        {
          texto: "Comparo cada lançamento com o extrato até achar a diferença.",
          reacao: "achou? 👀",
          resultado: "Era uma tarifa bancária que ninguém tinha lançado. Você também descobriu que ela vinha sendo cobrada indevidamente.",
          pontos: { organizacao: 2, logica: 1 }
        },
        {
          texto: "Lanço um ajuste de 37 reais para o saldo bater.",
          reacao: "bateu! mas de onde veio isso? 🤨",
          resultado: "O saldo fechou, mas a cobrança errada continuou todo mês sem ninguém perceber.",
          pontos: { criatividade: 1, pressao: 1 }
        },
        {
          texto: "Deixo a diferença para lá: são só 37 reais.",
          reacao: "e se forem 37 todo mês? 😬",
          resultado: "No fim do ano, a diferença tinha virado mais de 400 reais.",
          pontos: {}
        },
        {
          texto: "Ligo para o banco e peço para eles acharem a diferença.",
          reacao: "(\"aguarde na linha...\" 🎶)",
          resultado: "Você passou 40 minutos ao telefone, e o banco pediu para você mesmo(a) conferir o extrato.",
          pontos: { pessoas: 1 }
        }
      ]
    }
  ]
});
