/*
  Profissão: Desenvolvimento de Sistemas
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "desenvolvimento-sistemas",
  nome: "Desenvolvimento de Sistemas",
  icone: "💻",
  cor: "#4f46e5",
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
    "Técnico em Desenvolvimento de Sistemas — cerca de 1,5 a 2 anos",
    "Tecnólogo em Análise e Desenvolvimento de Sistemas — cerca de 2,5 a 3 anos",
    "Bacharelado em Ciência da Computação, Engenharia de Software ou Sistemas de Informação — cerca de 4 anos"
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
          resultado: "Na sexta, a tarefa não estava pronta. A líder perguntou por que você não avisou antes — alguém poderia ter ajudado.",
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
      naVidaReal: "Desenvolvedores passam muito tempo investigando erros (o famoso debugging). Às vezes um problema leva horas — ou dias — e a solução é uma única linha de código.",
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
          resultado: "Depois de horas tentando, o erro sumiu — mas você não sabe por quê, e dois problemas novos apareceram.",
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
      explicacao: "Com 3 itens, as posições da lista são 0, 1 e 2. Com <=, o laço tenta ler a posição 3, que não existe — e o sistema quebra. O certo é i < itens.length. Achar erros assim é o dia a dia de quem programa.",
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
      naVidaReal: "A revisão de código (code review) é rotina em quase toda empresa. Receber críticas sobre o próprio trabalho com frequência faz parte — e é uma das formas mais rápidas de evoluir.",
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
      explicacao: "Primeiro o sistema recebe os dados, depois busca o usuário, compara a senha e só então decide. Pensar em passos, na ordem certa, é o que chamamos de algoritmo — a base da programação.",
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
