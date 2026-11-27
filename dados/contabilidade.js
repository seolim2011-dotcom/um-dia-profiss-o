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
          texto: "Separo o que é da padaria e o que é pessoal, organizo por mês e explico por que não misturar.",
          reacao: "ahhh, então a escola do meu neto não entra? agora entendi 😮",
          resultado: "As contas da padaria ficaram claras pela primeira vez, e a Dona Rita começou a usar uma conta só para o negócio.",
          pontos: { organizacao: 2, logica: 1 }
        },
        {
          texto: "Lanço tudo como despesa da padaria: assim ela paga menos imposto e ninguém vai conferir nota por nota.",
          reacao: "que maravilha! 🤩",
          resultado: "Numa fiscalização, os gastos pessoais apareceram, e a padaria teve que pagar multa.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Separo as notas com ela na hora, conversando sobre a padaria a manhã inteira, para entender bem o negócio dela.",
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
          texto: "Peço as notas por foto, calculo o imposto e mando a guia ainda hoje.",
          reacao: "chegou a guia! paguei pelo celular agora 🙌",
          resultado: "O imposto foi pago no prazo, sem multa nenhuma.",
          pontos: { pressao: 2, logica: 1, organizacao: 1 }
        },
        {
          texto: "Deixo vencer e pago com multa no mês que vem: a multa é pequena perto do trabalho de correr hoje.",
          reacao: "multa? mas eu nem sabia... 😕",
          resultado: "A oficina pagou multa e juros, e o Seu Hélio ficou desconfiado do escritório.",
          pontos: {}
        },
        {
          texto: "Chuto um valor parecido com o do mês passado e acerto a diferença na próxima guia.",
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
        "Comprador: Oficina do Hélio",
        "Data de emissão: 05/06",
        "Produto: 3 caixas de óleo de motor",
        "Preço de cada caixa: R$ 120,00",
        "Valor total dos produtos: R$ 480,00"
      ],
      correta: 4,
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
          texto: "Corrijo só o número que parece errado e sigo em frente: tenho outros clientes esperando.",
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
          texto: "Refaço a planilha com fórmulas e mostro ao Pedro como evitar o erro.",
          reacao: "ahh, com fórmula não tem como errar a soma! valeu 🙏",
          resultado: "A diferença era um desconto digitado duas vezes. A planilha nova passou a ser usada por todo o escritório.",
          pontos: { logica: 2, organizacao: 2 }
        },
        {
          texto: "Refaço a planilha sozinho(a), com fórmulas, sem falar nada com o Pedro para não deixá-lo constrangido.",
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
          texto: "Peço os documentos do período, comparo com o que foi declarado e preparo a resposta no prazo.",
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
          texto: "Refaço a declaração inteira correndo, sem entender o que deu errado, para mandar antes de a Receita cobrar.",
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

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("contabilidade", [
  {
    horario: "08:30",
    titulo: "Sair da informalidade",
    cena: "💅 📄 🏪",
    descricao: "Uma manicure que trabalha em casa quer abrir uma empresa para emitir nota fiscal e contribuir para a aposentadoria.",
    conversa: [
      { quem: "Kelly, manicure", avatar: "👩🏽‍🦱", fala: "uma cliente pediu nota fiscal e eu nem tenho CNPJ 😅" },
      { quem: "Kelly, manicure", avatar: "👩🏽‍🦱", fala: "e eu queria me aposentar um dia, né? por onde eu começo?" }
    ],
    naVidaReal: "O MEI (Microempreendedor Individual) permite que pequenos trabalhadores tenham CNPJ, emitam nota fiscal e contribuam para a Previdência pagando um valor fixo por mês. O contador ajuda a ver se a atividade se encaixa e a manter tudo em dia.",
    opcoes: [
      {
        texto: "Confiro se a atividade dela se encaixa no MEI, faço o cadastro e explico o imposto mensal.",
        reacao: "já tenho CNPJ?? e só pago isso por mês? 😍",
        resultado: "Em uma manhã, a Kelly virou empresária, com nota fiscal e contribuição para a aposentadoria.",
        pontos: { organizacao: 2, logica: 1 }
      },
      {
        texto: "Digo que ela pode continuar informal por enquanto, porque \"ninguém fiscaliza\" negócio pequeno de bairro.",
        reacao: "ah, então tá... mas e a aposentadoria? 🤔",
        resultado: "Ela continuou sem nota e sem contribuir para a Previdência.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Passo a manhã ouvindo a história dela, sem chegar ao cadastro.",
        reacao: "adorei conversar! volto semana que vem pra fazer o resto 😊",
        resultado: "Ela gostou do atendimento, mas o cadastro ficou para depois.",
        pontos: { pessoas: 2 }
      },
      {
        texto: "Digo que é complicado e marco para outro dia.",
        reacao: "complicado? 😟",
        resultado: "Ela ficou insegura e adiou a decisão por meses.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "10:00",
    titulo: "Teve lucro?",
    cena: "💰 📊 🧮",
    conversa: [
      { quem: "Márcia, contadora-chefe", avatar: "👩🏾‍💼", fala: "a loja do Seu Rogério vendeu 50 mil no mês 💰" },
      { quem: "Márcia, contadora-chefe", avatar: "👩🏾‍💼", fala: "gastou 32 mil com mercadoria e 12 mil com aluguel e salários. sobrou quanto?" }
    ],
    pergunta: "Vendas de R$ 50.000, custo das mercadorias de R$ 32.000 e despesas de R$ 12.000. Qual foi o lucro?",
    alternativas: ["R$ 6.000", "R$ 18.000", "R$ 38.000", "R$ 94.000"],
    correta: 0,
    explicacao: "Lucro = vendas − custos − despesas: 50.000 − 32.000 − 12.000 = R$ 6.000. Muitos donos de negócio olham só quanto venderam e se assustam quando sobra pouco. O contador mostra para onde o dinheiro foi.",
    traco: "logica"
  },
  {
    horario: "11:00",
    titulo: "Salário até o 5º dia útil",
    urgente: true,
    cena: "💵 📅 ⏰",
    descricao: "Hoje é o último dia para pagar os salários dos funcionários de um cliente, e ele ainda não mandou as horas trabalhadas.",
    conversa: [
      { quem: "Seu Hélio, dono de oficina", avatar: "👨🏻‍🔧", fala: "opa, esqueci de mandar o ponto da turma 😬" },
      { quem: "Seu Hélio, dono de oficina", avatar: "👨🏻‍🔧", fala: "o pessoal recebe hoje, né? dá pra fazer?" }
    ],
    naVidaReal: "Pela CLT, o salário mensal deve ser pago até o 5º dia útil do mês seguinte. Atrasar gera multa e problemas com os funcionários. O contador calcula a folha com horas extras, faltas e descontos.",
    opcoes: [
      {
        texto: "Peço o ponto por foto, calculo a folha, confiro os descontos e mando os holerites hoje.",
        reacao: "chegou! já tô fazendo os depósitos 🙌",
        resultado: "Todos receberam em dia e com as horas extras certas.",
        pontos: { pressao: 2, logica: 1, organizacao: 1 }
      },
      {
        texto: "Deixo atrasar o pagamento e resolvo semana que vem.",
        reacao: "a turma vai reclamar, hein 😕",
        resultado: "Os funcionários receberam atrasado, e a oficina teve que pagar multa.",
        pontos: {}
      },
      {
        texto: "Repito a folha do mês passado, sem olhar as horas.",
        reacao: "beleza, paguei 👍",
        resultado: "As horas extras do mês ficaram de fora, e dois funcionários reclamaram.",
        pontos: { pressao: 1, criatividade: 1 }
      },
      {
        texto: "Mando um e-mail lembrando do prazo e espero ele responder.",
        reacao: "(o Seu Hélio só viu o e-mail à noite 📭)",
        resultado: "A folha saiu um dia atrasada.",
        pontos: { organizacao: 1 }
      }
    ]
  },
  {
    horario: "13:30",
    titulo: "Funcionário sem registro",
    cena: "📒 🚫 ⚖️",
    descricao: "Um cliente quer contratar um funcionário sem carteira assinada, para economizar.",
    conversa: [
      { quem: "Seu Rogério, dono de loja", avatar: "👨🏽‍💼", fala: "vou contratar um vendedor, mas sem carteira, tá? 🤫" },
      { quem: "Seu Rogério, dono de loja", avatar: "👨🏽‍💼", fala: "registrar sai muito caro. todo mundo faz assim" }
    ],
    naVidaReal: "Trabalhar sem registro tira do trabalhador direitos como FGTS, férias e aposentadoria, e expõe a empresa a multas e processos trabalhistas, que costumam custar muito mais do que o registro.",
    opcoes: [
      {
        texto: "Ajudo a pagar o funcionário \"por fora\", sem registro, já que a loja está passando por um momento difícil.",
        reacao: "isso! 😎",
        resultado: "Um ano depois, o funcionário entrou na Justiça, e a loja pagou tudo com juros.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Explico os riscos, calculo o custo real de registrar e mostro formas legais de reduzir custos.",
        reacao: "pensando assim, o processo sairia bem mais caro... vamos registrar 🤔",
        resultado: "O vendedor foi registrado, e a loja ajustou outros custos para caber no orçamento.",
        pontos: { logica: 2, organizacao: 1, pessoas: 1, criatividade: 1 }
      },
      {
        texto: "Recuso e encerro o contrato na hora, sem explicar.",
        reacao: "nossa, que exagero 😒",
        resultado: "Você ficou longe do problema, mas o funcionário continuou sem registro.",
        pontos: { organizacao: 2 }
      },
      {
        texto: "Finjo que não ouvi e mudo de assunto.",
        reacao: "então tá combinado 😉",
        resultado: "O silêncio foi entendido como um sim.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "15:00",
    titulo: "Confira o holerite",
    cena: "📄 💵 🔍",
    conversa: [
      { quem: "Pedro, auxiliar", avatar: "🧑🏼", fala: "montei o holerite do vendedor novo 📄" },
      { quem: "Pedro, auxiliar", avatar: "🧑🏼", fala: "confere comigo? acho que tem um desconto estranho" }
    ],
    pergunta: "Toque na linha errada do holerite:",
    linhas: [
      "Salário base: R$ 2.000,00",
      "Vale-transporte: desconto de R$ 120,00 (6% do salário)",
      "FGTS: R$ 160,00 descontados do salário do funcionário",
      "INSS: desconto conforme a tabela oficial",
      "Pagamento até o 5º dia útil"
    ],
    correta: 2,
    explicacao: "O FGTS (8% do salário) é pago pela empresa, numa conta em nome do trabalhador. Ele não pode ser descontado do salário. Já o vale-transporte pode ter desconto de até 6%, e o INSS segue a tabela oficial.",
    traco: "logica"
  },
  {
    horario: "16:00",
    titulo: "O estoque não bate",
    cena: "📦 🐾 🔍",
    descricao: "Na contagem do estoque de um pet shop, faltam 15 sacos de ração em relação ao que o sistema mostra.",
    conversa: [
      { quem: "Dona Vera, dona do pet shop", avatar: "👩🏻", fala: "contei tudo e faltam 15 sacos de ração 😟" },
      { quem: "Dona Vera, dona do pet shop", avatar: "👩🏻", fala: "são quase 2 mil reais! será que tão roubando?" }
    ],
    naVidaReal: "Diferenças de estoque podem vir de erros de registro, vendas sem nota, perdas ou desvios. O contador compara entradas, saídas e contagens para achar a causa, e ajuda a criar controles que evitam o problema.",
    opcoes: [
      {
        texto: "Ajusto o sistema para bater com a contagem física, sem investigar: o que vale é o que está na prateleira.",
        reacao: "bateu! mas e os 2 mil reais? 🤔",
        resultado: "O número ficou certo, mas a causa nunca foi descoberta.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Ignoro: deve ser erro de digitação.",
        reacao: "e se for de novo no mês que vem? 😬",
        resultado: "No mês seguinte faltaram mais 12 sacos.",
        pontos: {}
      },
      {
        texto: "Comparo as notas de entrada, as vendas e a contagem e deixo um controle mensal.",
        reacao: "eram vendas feitas sem nota no fim de semana! 😮",
        resultado: "A diferença foi explicada, e o pet shop passou a registrar todas as vendas.",
        pontos: { logica: 2, organizacao: 2 }
      },
      {
        texto: "Peço um relatório novo do sistema e espero.",
        reacao: "o relatório diz a mesma coisa... 😕",
        resultado: "O relatório repetiu o problema, sem explicar a causa.",
        pontos: { organizacao: 1 }
      }
    ]
  },
  {
    horario: "17:00",
    titulo: "Último dia do Imposto de Renda",
    urgente: true,
    cena: "🦁 📑 ⏰",
    descricao: "No último dia do prazo do Imposto de Renda, um professor chega às 17h com uma pasta de documentos.",
    conversa: [
      { quem: "Prof. Anselmo, cliente", avatar: "👨🏾‍🏫", fala: "eu sei, eu sei, deixei pra última hora 😰" },
      { quem: "Prof. Anselmo, cliente", avatar: "👨🏾‍🏫", fala: "tá tudo nessa pasta. ainda dá tempo?" }
    ],
    naVidaReal: "Quem perde o prazo do Imposto de Renda paga multa. Muitos contadores têm um pico de trabalho nas últimas semanas do prazo, e organizar os documentos por tipo é o que permite entregar rápido sem erros.",
    opcoes: [
      {
        texto: "Digo que não dá mais e que ele vai pagar a multa.",
        reacao: "mas ainda faltam 7 horas... 😟",
        resultado: "Ele procurou outro contador e entregou a tempo.",
        pontos: {}
      },
      {
        texto: "Separo os documentos por tipo, confiro as deduções principais e entrego antes da meia-noite.",
        reacao: "entregue! e ainda vou ter restituição? 😮",
        resultado: "A declaração foi entregue às 21h, correta e com as deduções de saúde e educação.",
        pontos: { pressao: 2, organizacao: 1, logica: 1, pessoas: 1 }
      },
      {
        texto: "Indico outro contador e não me envolvo.",
        reacao: "mas você é meu contador há anos... 😢",
        resultado: "O cliente se sentiu abandonado e trocou de escritório.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Preencho tudo de cabeça, bem rápido, sem conferir os informes, porque conheço a situação dele do ano passado.",
        reacao: "entregou! 😅",
        resultado: "Um valor errado fez a declaração cair na malha fina meses depois.",
        pontos: { pressao: 1, logica: 2 }
      }
    ]
  },
  {
    horario: "18:30",
    titulo: "O balancete não fecha",
    cena: "⚖️ 🔢 🌙",
    descricao: "No fechamento do mês, a soma dos débitos e dos créditos de um cliente tem R$ 1.200 de diferença.",
    conversa: [
      { quem: "Márcia, contadora-chefe", avatar: "👩🏾‍💼", fala: "o balancete da loja tá com 1.200 de diferença 🤨" },
      { quem: "Márcia, contadora-chefe", avatar: "👩🏾‍💼", fala: "preciso dele fechado amanhã cedo" }
    ],
    naVidaReal: "Na contabilidade, todo lançamento tem dois lados (débito e crédito), e as somas precisam bater. Quando não batem, há um erro em algum lugar, e encontrá-lo é parte da rotina.",
    opcoes: [
      {
        texto: "Confiro os lançamentos do mês um a um até achar o erro.",
        reacao: "achou? 👀",
        resultado: "Era uma nota de R$ 600 lançada duas vezes. Corrigida, o balancete fechou.",
        pontos: { organizacao: 2, logica: 1 }
      },
      {
        texto: "Crio uma conta \"diversos\" para jogar a diferença e fechar o balancete.",
        reacao: "fechou... mas de onde veio isso? 🤨",
        resultado: "O balancete fechou no papel, mas o erro continuou escondido.",
        pontos: { criatividade: 1, pressao: 1 }
      },
      {
        texto: "Entrego assim mesmo.",
        reacao: "com diferença?? 😳",
        resultado: "A chefe devolveu o trabalho, e você teve que refazer tudo no dia seguinte.",
        pontos: {}
      },
      {
        texto: "Peço para o cliente procurar o erro, já que foi ele quem fez os lançamentos.",
        reacao: "eu? eu nem sei o que é balancete 😅",
        resultado: "O cliente não achou nada, e o fechamento atrasou.",
        pontos: { pessoas: 1 }
      }
    ]
  }
]);
