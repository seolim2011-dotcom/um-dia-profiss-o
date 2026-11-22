/*
  Profissão: Desenvolvimento de Sistemas
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "desenvolvimento-sistemas",
  nome: "Desenvolvimento de Sistemas",
  icone: "💻",
  cor: "#2747d6",
  area: "tecnologia",
  resumo: "Criar e manter sistemas, sites e aplicativos usados por empresas e pessoas.",

  perfil: {
    pessoas: {
      peso: 2,
      gostar: "Trocar ideias com a equipe e ver pessoas usando algo que você criou.",
      dificil: "Explicar coisas técnicas para quem não é da área e entender pedidos confusos de clientes."
    },
    logica: {
      peso: 5,
      gostar: "O desafio de quebrar a cabeça com um problema até ele finalmente funcionar.",
      dificil: "Passar horas caçando um único erro e estudar sempre, porque as tecnologias mudam rápido."
    },
    pressao: {
      peso: 3,
      gostar: "A satisfação de colocar o sistema no ar e resolver uma urgência em equipe.",
      dificil: "Prazos apertados e sistemas que caem fora do horário, exigindo plantão."
    },
    organizacao: {
      peso: 3,
      gostar: "Organizar tarefas, versões e documentação para o projeto andar sem bagunça.",
      dificil: "Documentar, seguir processos e passar muitas horas concentrado(a) em frente ao computador."
    },
    criatividade: {
      peso: 4,
      gostar: "Inventar soluções e criar telas, aplicativos e funcionalidades do zero.",
      dificil: "Nem sempre dá para fazer do seu jeito: o código segue padrões da equipe e o que o cliente pediu."
    }
  },

  cursos: [
    "Técnico em Desenvolvimento de Sistemas (cerca de 1,5 a 2 anos)",
    "Tecnólogo em Análise e Desenvolvimento de Sistemas (cerca de 2,5 a 3 anos)",
    "Bacharelado em Ciência da Computação, Engenharia de Software ou Sistemas de Informação (cerca de 4 anos)"
  ],

  situacoes: [
    {
      horario: "09:00",
      titulo: "Reunião diária",
      cena: "☕ 💻 🗣️",
      descricao: "A equipe se reúne em pé, café na mão, para a reunião rápida de todo dia. Você está travado(a) há dois dias na tela de login.",
      conversa: [
        { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "bom dia, time! ☕ daily rapidinha que às 9h15 eu tenho outra reunião" },
        { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "e aí, como tá aquela tela de login? ontem cê disse que terminava 👀" }
      ],
      naVidaReal: "Reuniões rápidas diárias são comuns em equipes de software. Pedir ajuda cedo é sinal de profissionalismo, não de fraqueza.",
      opcoes: [
        {
          texto: "Digo que está “quase pronto” para não parecer que não sei fazer.",
          reacao: "show! então amanhã já dá pra mostrar pro cliente, né? 🙌",
          resultado: "Na sexta, a tarefa não estava pronta. A líder perguntou por que você não avisou antes. Alguém poderia ter ajudado.",
          pontos: {}
        },
        {
          texto: "Conto que estou travado(a) e peço para alguém mais experiente me ajudar.",
          reacao: "valeu por avisar cedo! 🙏 Lucas, consegue dar uma mão depois da daily?",
          resultado: "O Lucas sentou com você por 20 minutos e mostrou o que estava faltando. A tarefa andou no mesmo dia.",
          pontos: { pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Falo do bloqueio, mas digo que prefiro tentar sozinho(a) mais um dia.",
          reacao: "beleza! mas se amanhã não sair, me avisa, combinado? 😉",
          resultado: "Você conseguiu resolver no fim do dia seguinte e aprendeu bastante, mas a entrega atrasou um pouco.",
          pontos: { pressao: 1 }
        }
      ]
    },
    {
      horario: "10:00",
      titulo: "O bug misterioso",
      cena: "🐛 🔍 📱",
      descricao: "Chega mensagem de um cliente. No seu computador, tudo funciona perfeitamente.",
      conversa: [
        { quem: "Seu Carlos, cliente", avatar: "👨🏻‍🦳", fala: "🎤 Áudio (0:52): “bom dia, aqui é o Carlos da loja... então, o botão de finalizar compra às vezes funciona, às vezes não funciona, entendeu? às vezes vai, às vezes não vai...”" },
        { quem: "Seu Carlos, cliente", avatar: "👨🏻‍🦳", fala: "hoje já perdi 3 vendas 😤" }
      ],
      naVidaReal: "Desenvolvedores passam muito tempo investigando erros (o famoso debugging). Às vezes um problema leva horas, ou até dias, e a solução é uma única linha de código.",
      opcoes: [
        {
          texto: "Leio os registros do sistema, testo em outros aparelhos e anoto cada hipótese até achar o padrão.",
          reacao: "era no celular?! eu sempre falei que esses celulares são complicados 😂 obrigado!",
          resultado: "Depois de 1h30 de investigação, você descobriu que o erro só acontece em celulares com internet lenta. Que sensação boa!",
          pontos: { logica: 2, organizacao: 1 }
        },
        {
          texto: "Pergunto ao cliente exatamente como, quando e em qual aparelho o erro acontece.",
          reacao: "foi no celular da minha esposa! e a internet lá da loja é horrível, viu 😅",
          resultado: "As respostas deram uma ótima pista: o problema era no celular. Faltou investigar a fundo para achar a causa.",
          pontos: { pessoas: 1, logica: 1 }
        },
        {
          texto: "Mudo várias partes do código para ver se alguma resolve.",
          reacao: "agora funcionou! ...ah não, agora o carrinho sumiu 😱",
          resultado: "Depois de horas tentando, o erro sumiu, mas você não sabe por quê, e dois problemas novos apareceram.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Marco como “não consegui reproduzir” e passo para a próxima tarefa.",
          reacao: "como assim não conseguiu?? 😤 eu tô perdendo venda aqui!",
          resultado: "Uma semana depois, o cliente voltou a reclamar, agora bem mais irritado.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "10:45",
      titulo: "Ache o bug",
      cena: "🐛 💻 🔎",
      conversa: [
        { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "achei mais um problema, esse no cálculo do carrinho 🕵️" },
        { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "quando tem 3 itens, quebra. olha o código aí embaixo e me fala onde tá o erro 👇" }
      ],
      pergunta: "Toque na linha com o erro:",
      linhas: [
        "function calcularTotal(itens) {",
        "  let total = 0;",
        "  for (let i = 0; i <= itens.length; i++) {",
        "    total = total + itens[i].preco;",
        "  }",
        "  return total;",
        "}"
      ],
      correta: 2,
      codigo: true,
      explicacao: "Com 3 itens, as posições da lista são 0, 1 e 2. Com <=, o laço tenta ler a posição 3, que não existe, e o sistema quebra. O certo é i < itens.length. Achar erros assim é o dia a dia de quem programa.",
      traco: "logica"
    },
    {
      horario: "11:30",
      titulo: "Revisão de código",
      cena: "👀 💬 🧑‍💻",
      descricao: "Um colega mais experiente revisou o código que você escreveu ontem.",
      conversa: [
        { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "revisei seu código! 👀" },
        { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "deixei 12 comentários... calma, não é o fim do mundo 😂" },
        { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "mas esse aqui é importante: “essa função faz coisa demais”. bora melhorar?" }
      ],
      naVidaReal: "A revisão de código (code review) é rotina em quase toda empresa. Receber críticas sobre o próprio trabalho com frequência faz parte, e é uma das formas mais rápidas de evoluir.",
      opcoes: [
        {
          texto: "Faço todas as mudanças sem questionar, mesmo sem entender.",
          reacao: "aprovado ✅ ...mas cê entendeu o porquê? 🤔",
          resultado: "O código foi aprovado, mas na tarefa seguinte você cometeu os mesmos erros.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Discordo de alguns comentários e proponho outra solução, explicando por quê.",
          reacao: "hmm, faz sentido em parte! bora conversar sobre os outros? 🤝",
          resultado: "O colega gostou de alguns argumentos e aceitou parte da sua ideia, mas outros pontos ficaram sem entender.",
          pontos: { criatividade: 1, pessoas: 1 }
        },
        {
          texto: "Fico chateado(a): meu código funcionava, por que mudar?",
          reacao: "ô, relaxa 😅 revisão é pra todo mundo, até eu recebo comentário",
          resultado: "Você demorou para fazer as mudanças e a tarefa ficou parada. O colega achou que você não aceita críticas.",
          pontos: {}
        },
        {
          texto: "Agradeço, corrijo o que entendi e marco uma conversa rápida para tirar as dúvidas do resto.",
          reacao: "fechou! 15h na salinha? vou te mostrar um truque bom 😎",
          resultado: "Na conversa, você aprendeu duas técnicas novas. O código ficou melhor e o colega gostou da sua atitude.",
          pontos: { logica: 1, pessoas: 1 }
        }
      ]
    },
    {
      horario: "14:00",
      titulo: "Reunião com o cliente",
      cena: "🏪 📊 🤔",
      descricao: "Videochamada com o dono de uma loja que usa o sistema da sua empresa.",
      conversa: [
        { quem: "Seu Carlos, cliente", avatar: "👨🏻‍🦳", fala: "oi oi! tá me ouvindo? 🎧 ...acho que agora foi" },
        { quem: "Seu Carlos, cliente", avatar: "👨🏻‍🦳", fala: "então, eu queria um botão que faz o relatório aparecer... bonito, sabe?" },
        { quem: "Seu Carlos, cliente", avatar: "👨🏻‍🦳", fala: "não sei explicar. mas quando eu olhar, eu vou saber! 😄" }
      ],
      naVidaReal: "Entender o que as pessoas precisam é tão importante quanto programar. Muitos projetos dão errado não por código ruim, mas por necessidades mal compreendidas.",
      opcoes: [
        {
          texto: "Anoto o que ele falou e decido sozinho(a) depois como vai ficar.",
          reacao: "beleza, confio em você! 👍",
          resultado: "Você entregou em uma semana, mas não era o que ele queria. Foi preciso refazer metade.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Faço perguntas, mostro exemplos e desenho um rascunho da tela junto com ele.",
          reacao: "ISSO! é exatamente isso que eu queria!! 🤩",
          resultado: "Em 30 minutos vocês chegaram a um rascunho que ele aprovou na hora. O desenvolvimento ficou muito mais fácil.",
          pontos: { criatividade: 2, pessoas: 1 }
        },
        {
          texto: "Peço que ele mande tudo por e-mail, por escrito.",
          reacao: "e-mail? ih... vou pedir pro meu sobrinho escrever 😅",
          resultado: "O e-mail chegou confuso e você precisou marcar outra reunião.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Explico com termos técnicos por que o pedido não faz sentido.",
          reacao: "API? back-end? ...meu filho, eu só queria um botão 😕",
          resultado: "O cliente ficou perdido e saiu achando que a equipe não queria ajudar.",
          pontos: {}
        }
      ]
    },
    {
      horario: "15:30",
      titulo: "Uma tela do zero",
      cena: "🎨 ✏️ 📱",
      descricao: "O aplicativo precisa de uma tela nova de cadastro até amanhã.",
      conversa: [
        { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "notícia boa e notícia ruim 😅" },
        { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "a boa: o cliente amou a ideia do app!" },
        { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "a ruim: ele quer a tela de cadastro pra amanhã e a designer tá de férias. fica com você? 🙏" }
      ],
      naVidaReal: "Em equipes pequenas, quem programa muitas vezes também cuida do visual e da experiência de quem usa o sistema. Criatividade conta tanto quanto saber programar.",
      opcoes: [
        {
          texto: "Rabisco duas ou três ideias no papel, testo qual é mais fácil de usar e programo a melhor.",
          reacao: "uau, ficou muito bom! 😍 a designer vai ficar com ciúme",
          resultado: "A tela ficou simples, bonita e pronta no prazo. A designer elogiou quando voltou.",
          pontos: { criatividade: 2, logica: 1, pressao: 1 }
        },
        {
          texto: "Copio o visual de um aplicativo famoso e adapto.",
          reacao: "hmm, tá MUITO parecido com aquele app, né? 😬",
          resultado: "Funcionou, mas a tela ficou parecida demais com a de outra empresa e o cliente estranhou.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Faço do jeito mais rápido possível, sem pensar muito no visual.",
          reacao: "funciona... mas tá meio confuso de preencher, não acha? 🤔",
          resultado: "Ficou pronto, mas os usuários tiveram dificuldade para preencher o cadastro.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Fico travado(a) sem saber por onde começar e espero a designer voltar.",
          reacao: "semana que vem?! o cliente vai surtar 😱",
          resultado: "A entrega atrasou uma semana e o cliente reclamou.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "ordenar",
      horario: "16:30",
      titulo: "Monte o login",
      cena: "🔐 🧱 ✅",
      conversa: [
        { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "o cliente perguntou como o login funciona por dentro 😅" },
        { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "me ajuda a montar o passo a passo pra eu mostrar pra ele?" }
      ],
      pergunta: "Toque nas etapas na ordem em que o sistema faz o login:",
      itens: [
        "Recebe o e-mail e a senha digitados",
        "Procura o usuário no banco de dados",
        "Compara a senha digitada com a senha salva",
        "Libera a entrada ou mostra “senha incorreta”"
      ],
      explicacao: "Primeiro o sistema recebe os dados, depois busca o usuário, compara a senha e só então decide. Pensar em passos, na ordem certa, é o que chamamos de algoritmo: a base da programação.",
      traco: "logica"
    },
    {
      horario: "17:30",
      titulo: "O sistema caiu",
      urgente: true,
      cena: "🔥 💳 📞",
      descricao: "Meia hora antes do fim do expediente, o sistema de pagamentos sai do ar.",
      conversa: [
        { quem: "Ana, do suporte", avatar: "👩🏻‍🦰", fala: "GENTE SOCORRO 🚨" },
        { quem: "Ana, do suporte", avatar: "👩🏻‍🦰", fala: "o pagamento caiu! ninguém consegue comprar e meu telefone não para 📞📞📞" },
        { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "erro 500 no servidor de pagamentos... alguém mexeu em alguma coisa hoje? 😬" }
      ],
      naVidaReal: "Sistemas que funcionam 24 horas às vezes exigem resolver urgências fora do horário. Manter a calma e investigar com método evita piorar o problema.",
      opcoes: [
        {
          texto: "Tento corrigir sozinho(a), direto no sistema e sem testar, para ser rápido.",
          reacao: { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "voltou! ...peraí, agora o login caiu 😱" },
          resultado: "O sistema voltou, mas sua correção apressada derrubou outra parte dele à noite.",
          pontos: { pressao: 1, logica: 1 }
        },
        {
          texto: "Ajudo a equipe, mas fico tão ansioso(a) que preferia nunca passar por isso.",
          reacao: "valeu por ficar!! 🙏 respira, vai dar certo",
          resultado: "Você contribuiu, mas a tensão te deixou mal o resto da noite.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Fico com a equipe, investigo com calma e depois registro o que aconteceu para não se repetir.",
          reacao: { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "achamos! era um certificado vencido 🎉 escreve o relatório pra gente não esquecer?" },
          resultado: "Em 40 minutos o problema foi resolvido. O relatório que você escreveu evitou que o mesmo erro voltasse no mês seguinte.",
          pontos: { pressao: 2, logica: 1, organizacao: 1 }
        },
        {
          texto: "Vou embora no horário: não é a minha parte do sistema.",
          reacao: "sério que você vai embora agora?? 😳",
          resultado: "A equipe resolveu sem você, mas percebeu sua ausência num momento crítico.",
          pontos: {}
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("desenvolvimento-sistemas", [
  {
    horario: "09:00",
    titulo: "Quanto tempo vai levar?",
    cena: "⏳ 📋 🤔",
    descricao: "Na reunião diária, a líder pergunta quanto tempo você precisa para uma funcionalidade que você nunca fez.",
    conversa: [
      { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "a tela de cupons de desconto fica com você 🎟️" },
      { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "quanto tempo você precisa? o cliente quer saber ainda hoje" }
    ],
    naVidaReal: "Estimar prazos é uma das partes mais difíceis do trabalho. Equipes costumam quebrar a tarefa em partes menores antes de prometer uma data, e iniciantes aprendem muito pedindo ajuda nessa hora.",
    opcoes: [
      {
        texto: "Digo \"dois dias\" para parecer rápido(a), mesmo sem ter ideia.",
        reacao: "ótimo, vou avisar o cliente! 👍",
        resultado: "A tarefa levou seis dias, e a equipe teve que explicar o atraso ao cliente.",
        pontos: {}
      },
      {
        texto: "Peço uma hora para entender a tarefa e um colega para me ajudar a quebrá-la em partes antes de estimar.",
        reacao: "boa, estimativa com base é bem melhor 😉",
        resultado: "Com a ajuda, você chegou a quatro dias, um prazo realista que foi cumprido.",
        pontos: { pessoas: 1, organizacao: 1 }
      },
      {
        texto: "Dou um prazo apertado e prometo virar a noite se precisar.",
        reacao: "hmm, não quero ninguém virando a noite, hein 😬",
        resultado: "Você cumpriu o prazo, mas exausto(a), e a funcionalidade saiu com dois erros.",
        pontos: { pressao: 1 }
      }
    ]
  },
  {
    horario: "10:00",
    titulo: "O site está lento",
    cena: "🐢 💻 📈",
    descricao: "Os clientes reclamam que a página de produtos demora mais de dez segundos para abrir.",
    conversa: [
      { quem: "Seu Carlos, cliente", avatar: "👨🏻‍🦳", fala: "tá demorando uma eternidade pra abrir os produtos 🐢" },
      { quem: "Seu Carlos, cliente", avatar: "👨🏻‍🦳", fala: "os clientes desistem e vão pro concorrente!" }
    ],
    naVidaReal: "Lentidão é um problema comum, e a causa raramente é óbvia. Desenvolvedores medem cada parte da página para encontrar o gargalo, que muitas vezes é uma consulta ao banco de dados mal feita ou imagens pesadas demais.",
    opcoes: [
      {
        texto: "Meço o tempo de cada parte da página, acho a parte que demora e anoto o antes e o depois de cada mudança.",
        reacao: "caiu de 10 pra 1 segundo?? 😮",
        resultado: "A causa era uma consulta que buscava todos os produtos de uma vez. Corrigida, a página ficou dez vezes mais rápida.",
        pontos: { logica: 2, organizacao: 1 }
      },
      {
        texto: "Pergunto ao cliente em que telas, aparelhos e horários a lentidão aparece mais.",
        reacao: "é sempre de manhã, quando todo mundo entra! 🤔",
        resultado: "A pista ajudou, mas você ainda precisou investigar o código para achar a causa.",
        pontos: { pessoas: 1, logica: 1 }
      },
      {
        texto: "Contrato um servidor mais potente, sem saber a causa.",
        reacao: "melhorou um pouco... mas a conta ficou o dobro 💸",
        resultado: "A lentidão diminuiu pouco, e o problema voltou quando o número de clientes cresceu.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Digo que o problema deve ser a internet dos clientes.",
        reacao: "a internet de todo mundo? 🙄",
        resultado: "Os clientes continuaram desistindo das compras, e o Seu Carlos perdeu a confiança na equipe.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "10:45",
    titulo: "A média errada",
    cena: "🐛 📊 🔎",
    conversa: [
      { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "o boletim da escola tá dando média errada quando o aluno tem 4 notas 🤨" },
      { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "acha a linha com o bug 👇" }
    ],
    pergunta: "Toque na linha com o erro:",
    linhas: [
      "function media(notas) {",
      "  let soma = 0;",
      "  for (const nota of notas) soma += nota;",
      "  return soma / 2;",
      "}"
    ],
    correta: 3,
    codigo: true,
    explicacao: "A função sempre divide por 2, então só acerta quando o aluno tem duas notas. O certo é dividir pela quantidade de notas: soma / notas.length. Esse tipo de erro passa despercebido quando o código só é testado com um exemplo.",
    traco: "logica"
  },
  {
    horario: "11:30",
    titulo: "Uma biblioteca nova",
    cena: "📚 🧩 🤔",
    descricao: "Para gerar boletos, a equipe decidiu usar uma biblioteca que você nunca usou.",
    conversa: [
      { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "a gente vai usar essa biblioteca de pagamentos 💳" },
      { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "consegue integrar até sexta? qualquer coisa me chama" }
    ],
    naVidaReal: "Aprender ferramentas novas o tempo todo faz parte da área. Ler a documentação, testar algo pequeno primeiro e perguntar a quem já sabe é o caminho mais seguro, principalmente quando envolve dinheiro.",
    opcoes: [
      {
        texto: "Sigo um tutorial passo a passo, copiando tudo sem entender direito.",
        reacao: "funcionou? e se der erro, você sabe o porquê? 🤔",
        resultado: "Funcionou no exemplo, mas quebrou num caso real e você não sabia por quê.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Proponho à equipe usar outra biblioteca, que eu já conheço, explicando as vantagens.",
        reacao: "a ideia é boa, mas a decisão já foi tomada pela empresa 😕",
        resultado: "A discussão foi útil, mas o prazo apertou porque a troca não era possível.",
        pontos: { criatividade: 1, pessoas: 1 }
      },
      {
        texto: "Copio um código de um fórum sem ler e mando direto para o sistema.",
        reacao: "PERA, isso foi pro ar sem revisão?? 😱",
        resultado: "O código tinha uma falha, e alguns pagamentos foram registrados em dobro.",
        pontos: {}
      },
      {
        texto: "Leio a documentação, faço um teste pequeno e pergunto ao Lucas o que não entendi.",
        reacao: "boa pergunta! essa parte confunde todo mundo mesmo 😄",
        resultado: "A integração ficou pronta na quinta, testada e entendida.",
        pontos: { logica: 1, pessoas: 1 }
      }
    ]
  },
  {
    horario: "14:00",
    titulo: "Um app igual ao Instagram",
    cena: "📱 🧁 💭",
    descricao: "A dona de uma confeitaria de bairro quer um aplicativo, mas o orçamento é pequeno.",
    conversa: [
      { quem: "Dona Rosana, cliente", avatar: "👩🏾‍🍳", fala: "quero um app igualzinho ao Instagram, mas pra minha confeitaria 🧁" },
      { quem: "Dona Rosana, cliente", avatar: "👩🏾‍🍳", fala: "com fotos, curtidas, chat, entrega... e que fique pronto em um mês!" }
    ],
    naVidaReal: "Clientes costumam pedir soluções gigantes para problemas simples. Entender a necessidade real e propor uma primeira versão pequena, que já resolve o principal, é uma parte importante do trabalho de quem desenvolve sistemas.",
    opcoes: [
      {
        texto: "Anoto tudo e decido sozinho(a), depois, o que cabe no orçamento.",
        reacao: "tá... mas me mostra antes, tá? 😅",
        resultado: "Você escolheu bem, mas ela não reconheceu o que tinha pedido e ficou insegura.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Pergunto o que ela mais precisa e desenho com ela uma versão simples: cardápio, pedido e entrega.",
        reacao: "ah, é isso! o que eu quero é receber pedido sem ficar no telefone 😃",
        resultado: "A primeira versão ficou pronta em três semanas, e os pedidos da confeitaria dobraram.",
        pontos: { criatividade: 2, pessoas: 1 }
      },
      {
        texto: "Peço que ela mande por escrito todos os requisitos.",
        reacao: "requisitos? o que é isso? 🤔",
        resultado: "Ela mandou uma lista confusa, e o projeto atrasou duas semanas.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Digo que o que ela quer é impossível e encerro a conversa.",
        reacao: "nossa, então tá... 😕",
        resultado: "Ela contratou outra pessoa, que ouviu o que ela precisava.",
        pontos: {}
      }
    ]
  },
  {
    horario: "15:30",
    titulo: "Quem não enxerga a tela",
    cena: "♿ 🔊 📱",
    descricao: "Um usuário cego escreveu dizendo que não consegue fazer compras no aplicativo com o leitor de tela.",
    conversa: [
      { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "olha esse e-mail 😟" },
      { quem: "Marina, líder da equipe", avatar: "👩🏾‍💼", fala: "\"o leitor de tela só fala 'botão, botão, botão'. não sei onde clicar\"" }
    ],
    naVidaReal: "Acessibilidade digital é obrigatória pela Lei Brasileira de Inclusão. Leitores de tela leem o texto dos botões e campos: quando o desenvolvedor não descreve cada um, a pessoa não consegue usar o sistema.",
    opcoes: [
      {
        texto: "Testo o app com o leitor de tela ligado, rabisco soluções e coloco descrições claras em cada botão.",
        reacao: "ele respondeu: \"agora consigo comprar sozinho!\" 🥹",
        resultado: "O app ficou acessível, e as correções melhoraram o uso para todos os clientes.",
        pontos: { criatividade: 2, logica: 1, pressao: 1 }
      },
      {
        texto: "Coloco a reclamação na lista de tarefas para \"algum dia\".",
        reacao: "e enquanto isso ele fica sem conseguir comprar? 😕",
        resultado: "A tarefa ficou meses esquecida, e o usuário desistiu do aplicativo.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Escrevo \"botão\" como descrição de todos os botões, bem rápido.",
        reacao: "mas é exatamente disso que ele reclamou 🤦",
        resultado: "Nada mudou para quem usa leitor de tela.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Digo que esse público é pequeno e não vale o esforço.",
        reacao: "isso é contra a lei, e contra o bom senso 😳",
        resultado: "A empresa recebeu uma reclamação formal e teve que corrigir às pressas depois.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "ordenar",
    horario: "16:30",
    titulo: "Do código ao ar",
    cena: "🌿 ✅ 🚀",
    conversa: [
      { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "sua correção tá pronta? então bora seguir o fluxo certinho 🚀" },
      { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "coloca as etapas na ordem 👇" }
    ],
    pergunta: "Toque nas etapas na ordem em que uma mudança costuma chegar ao sistema no ar:",
    itens: [
      "Escrever o código numa ramificação (branch) separada",
      "Rodar os testes automáticos",
      "Abrir um pedido de revisão (pull request) para a equipe",
      "Publicar a mudança no sistema em produção"
    ],
    explicacao: "Primeiro o código é escrito separado do sistema principal, depois testado e revisado por outra pessoa. Só então vai para o ar. Esse fluxo evita que um erro de uma pessoa derrube o sistema de todo mundo.",
    traco: "organizacao"
  },
  {
    horario: "17:30",
    titulo: "Senha no repositório",
    urgente: true,
    cena: "🔑 🌍 😱",
    descricao: "Você percebe que a chave secreta do sistema de pagamentos foi enviada por engano para um repositório público no GitHub.",
    conversa: [
      { quem: "Ana, do suporte", avatar: "👩🏻‍💻", fala: "gente, o repositório da loja tá público?? 😳" },
      { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "e a chave do pagamento tá lá no arquivo de configuração!! 😱" }
    ],
    naVidaReal: "Robôs varrem repositórios públicos atrás de senhas e chaves o tempo todo. Apagar o arquivo não basta, porque o histórico guarda tudo: é preciso cancelar a chave na hora e gerar outra.",
    opcoes: [
      {
        texto: "Apago o arquivo do repositório e considero resolvido.",
        reacao: "mas o histórico ainda mostra a chave... 😬",
        resultado: "A chave continuou visível no histórico, e alguém tentou usá-la à noite.",
        pontos: { pressao: 1, logica: 1 }
      },
      {
        texto: "Ajudo a equipe, mas fico tão nervoso(a) que preferia nunca passar por isso.",
        reacao: "respira, a gente resolve junto 💪",
        resultado: "Você ajudou, mas a ansiedade pesou o resto do dia.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Cancelo a chave na hora, gero uma nova, aviso a equipe e registro o que aconteceu.",
        reacao: "chave cancelada! ninguém conseguiu usar 😮‍💨",
        resultado: "O problema foi contido em minutos, e a equipe criou uma verificação automática para impedir que isso se repita.",
        pontos: { pressao: 2, logica: 1, organizacao: 1 }
      },
      {
        texto: "Vou embora no horário: não fui eu que subi esse arquivo.",
        reacao: "sério? 😳",
        resultado: "A chave ficou exposta por horas, e a empresa teve que investigar compras suspeitas.",
        pontos: {}
      }
    ]
  }
]);
