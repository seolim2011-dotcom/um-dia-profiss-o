/*
  Profissão: Design de Jogos
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "design-de-jogos",
  nome: "Design de Jogos",
  icone: "🎮",
  cor: "#0d1b3d",
  area: "tecnologia",
  resumo: "Criar as regras, as fases e a diversão de um jogo, testando com jogadores até ficar bom.",

  perfil: {
    pessoas: {
      peso: 3,
      gostar: "Trabalhar junto com arte, programação e som, e ver gente se divertindo com o que você criou.",
      dificil: "Ouvir jogadores dizendo que a sua fase favorita é chata, e mediar brigas entre áreas."
    },
    logica: {
      peso: 4,
      gostar: "Montar sistemas, regras e números que fazem o jogo funcionar e ficar equilibrado.",
      dificil: "Planilhas de balanceamento, dados de jogadores e limites técnicos que não perdoam."
    },
    pressao: {
      peso: 3,
      gostar: "A adrenalina da reta final de um lançamento ou de uma feira de jogos.",
      dificil: "Semanas de \"crunch\", bugs na véspera e notas ruins nas lojas logo após o lançamento."
    },
    organizacao: {
      peso: 3,
      gostar: "Documentar regras e ideias para a equipe inteira enxergar o mesmo jogo.",
      dificil: "Manter documentos e listas de tarefas atualizados enquanto o jogo muda toda semana."
    },
    criatividade: {
      peso: 5,
      gostar: "Inventar mecânicas, mundos e desafios novos todos os dias.",
      dificil: "Jogar fora ideias de que você gosta porque não ficaram divertidas nos testes."
    }
  },

  cursos: [
    "Tecnólogo em Jogos Digitais (de 2 a 3 anos)",
    "Bacharelado em Jogos Digitais ou Ciência da Computação (cerca de 4 anos)",
    "Um portfólio com jogos próprios conta muito: participar de game jams é um ótimo começo"
  ],

  situacoes: [
    {
      horario: "09:00",
      titulo: "Teste com jogadores",
      cena: "🎮 👀 📝",
      descricao: "Cinco pessoas que nunca viram o jogo estão testando a versão nova. Na fase 3, todas travam no mesmo lugar.",
      conversa: [
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "bom dia! o playtest começou 🎮" },
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "a galera tá travando no pulo duplo da fase 3. ninguém descobriu que dá pra pular de novo no ar 😬" },
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "um menino já tá quase largando o controle kkkk" }
      ],
      naVidaReal: "Nos playtests, quem desenvolve observa sem ajudar, porque o jogador de verdade vai estar sozinho em casa. Ensinar jogando, com uma situação que obriga a usar a mecânica, costuma funcionar melhor do que textos explicativos.",
      opcoes: [
        {
          texto: "Vou até eles e explico como se faz o pulo duplo.",
          reacao: "ah, agora foi! mas e quem jogar em casa? 🤔",
          resultado: "Os testadores passaram da fase, mas você perdeu a chance de descobrir como resolver o problema para todo mundo.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Observo sem interferir, anoto onde travam e mudo a fase para ensinar o pulo duplo jogando.",
          reacao: "boa! um buraco pequeno antes do grande, pra pessoa aprender sem perceber? amei 😍",
          resultado: "No teste da tarde, todo mundo aprendeu o pulo duplo sozinho, sem precisar de texto nenhum.",
          pontos: { logica: 2, criatividade: 2, organizacao: 1 }
        },
        {
          texto: "Concluo que eles jogam mal e deixo a fase como está.",
          reacao: "hmm... foram cinco de cinco, hein 😅",
          resultado: "Quando o jogo saiu, muita gente desistiu na fase 3 e deixou nota baixa na loja.",
          pontos: {}
        },
        {
          texto: "Coloco uma tela com um texto longo explicando todos os controles antes da fase.",
          reacao: "ninguém leu, pularam direto 🙈",
          resultado: "Os testadores pularam o texto e continuaram travando no mesmo lugar.",
          pontos: { organizacao: 2 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "10:30",
      titulo: "Balanceie as fases",
      cena: "📈 🎯 🧮",
      conversa: [
        { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "puxei os dados de 2 mil jogadores da versão de teste 📊" },
        { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "é a porcentagem de gente que consegue passar de cada fase. qual a gente arruma primeiro?" }
      ],
      pergunta: "Porcentagem de jogadores que passam de cada fase. Qual fase precisa ser ajustada primeiro?",
      grafico: [
        { rotulo: "Fase 1", valor: 96 },
        { rotulo: "Fase 2", valor: 91 },
        { rotulo: "Fase 3", valor: 38 },
        { rotulo: "Fase 4", valor: 85 },
        { rotulo: "Fase 5", valor: 79 }
      ],
      unidade: "%",
      alternativas: ["Fase 1", "Fase 2", "Fase 3", "Fase 5"],
      correta: 2,
      explicacao: "Numa boa curva de dificuldade, a porcentagem de quem passa cai aos poucos. A fase 3 é um \"paredão\": mais de 60% das pessoas travam ali, e muitas desistem do jogo. Designers usam dados assim para ajustar inimigos, pulos e pontos de salvamento.",
      traco: "logica"
    },
    {
      horario: "11:30",
      titulo: "Bug na véspera da feira",
      urgente: true,
      cena: "🐛 🏟️ ⏰",
      descricao: "Amanhã o estúdio mostra o jogo numa feira de games. Hoje apareceu um bug grave na versão que vai para lá.",
      conversa: [
        { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "PROBLEMA 🚨" },
        { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "se a pessoa pausa durante a luta do chefe, o jogo trava e fecha sozinho" },
        { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "e a gente leva a demo pra feira amanhã cedo. o que eu faço??" }
      ],
      naVidaReal: "Para feiras, estúdios costumam montar uma versão de demonstração controlada, deixando de fora o que ainda está instável. Os bugs vão para uma lista com prioridade, para serem corrigidos com calma e sem criar problemas novos.",
      opcoes: [
        {
          texto: "Peço para o Kaio reescrever todo o sistema de pausa ainda hoje.",
          reacao: "tudo?? hoje?? vou tentar, mas pode quebrar outra coisa 😰",
          resultado: "A troca às pressas criou dois bugs novos, e a equipe passou a noite apagando incêndio.",
          pontos: { logica: 1, pressao: 1 }
        },
        {
          texto: "Levo a demo assim mesmo e torço para ninguém pausar.",
          reacao: "e se alguém pausar na frente de um jornalista? 😬",
          resultado: "Na feira, o jogo fechou três vezes na frente do público, e um vídeo disso circulou nas redes.",
          pontos: {}
        },
        {
          texto: "Desativo a pausa só na luta do chefe da demo e coloco o bug na lista para corrigir depois.",
          reacao: "genial, isso eu faço em 10 minutos 🙌",
          resultado: "A demo rodou o dia inteiro sem travar, e o bug foi corrigido com calma na semana seguinte.",
          pontos: { pressao: 1, logica: 1, criatividade: 1, organizacao: 1 }
        },
        {
          texto: "Fico com o Kaio até de madrugada caçando o bug, sem avisar a produção.",
          reacao: "bora... mas a Bia vai surtar quando souber 😅",
          resultado: "Vocês acharam o bug às 3h, mas chegaram exaustos à feira, e a produção ficou sabendo pelos outros.",
          pontos: { pressao: 2, logica: 1 }
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "Arte contra desempenho",
      cena: "🎨 ⚙️ 📱",
      descricao: "A diretora de arte e o programador discordam sobre o chefe final do jogo de celular.",
      conversa: [
        { quem: "Lis, diretora de arte", avatar: "👩🏽‍🎨", fala: "o chefe novo tá LINDO: 40 partes animadas e fogo saindo das costas 🔥🐉" },
        { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "lindo, mas num celular simples ele roda a 12 quadros por segundo. parece slide 🐌" },
        { quem: "Lis, diretora de arte", avatar: "👩🏽‍🎨", fala: "não vou cortar nada. decide aí, você que é o game designer 🙄" }
      ],
      naVidaReal: "Game designers fazem a ponte entre arte, programação, som e produção. No Brasil, a maioria das pessoas joga em celulares simples, então limites técnicos influenciam muito o que dá para fazer.",
      opcoes: [
        {
          texto: "Fico do lado da arte: o chefe precisa impressionar.",
          reacao: "isso! 😎",
          resultado: "O chefe ficou lindo nos vídeos, mas travava no celular da maioria dos jogadores.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Fico do lado do programador e mando cortar as animações.",
          reacao: "sério? sem conversar? 😤",
          resultado: "O chefe rodou liso, mas ficou sem graça, e a Lis passou a semana chateada.",
          pontos: { logica: 1 }
        },
        {
          texto: "Deixo os dois resolverem sozinhos.",
          reacao: "ué, cadê o game designer? 🤷",
          resultado: "A discussão travou o chefe por uma semana, e o prazo apertou para todo mundo.",
          pontos: {}
        },
        {
          texto: "Junto os dois, testamos no celular mais simples do estúdio e redesenhamos o chefe para ficar bonito e leve.",
          reacao: "e se o fogo virar partículas simples? fica lindo e leve 🤩",
          resultado: "Com menos partes e um efeito de fogo mais esperto, o chefe ficou bonito e rodou liso até no celular mais simples.",
          pontos: { pessoas: 1, logica: 1, criatividade: 2 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "ordenar",
      horario: "15:00",
      titulo: "Do zero ao lançamento",
      cena: "💡 🛠️ 🚀",
      conversa: [
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "o estagiário quer começar o jogo dele pela arte final 😅" },
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "mostra pra ele a ordem que a gente costuma seguir? 👇" }
      ],
      pergunta: "Toque nas etapas na ordem em que um jogo costuma ser feito:",
      itens: [
        "Ideia e documento de design",
        "Protótipo simples, ainda sem arte final",
        "Testes com jogadores e ajustes",
        "Produção da arte, do som e das fases",
        "Testes finais de bugs e lançamento"
      ],
      explicacao: "Primeiro vem a ideia, depois um protótipo \"feio\" para descobrir se o jogo é divertido. Só depois dos testes vale a pena gastar tempo e dinheiro com arte e som. No fim, a equipe caça bugs e lança. Começar pela arte final é um dos erros mais comuns de quem está começando.",
      traco: "organizacao"
    },
    {
      horario: "16:30",
      titulo: "Chuva de notas ruins",
      urgente: true,
      cena: "⭐ 📉 📱",
      descricao: "O último jogo do estúdio recebeu uma atualização ontem, e as avaliações na loja despencaram.",
      conversa: [
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "socorro, a nota caiu de 4,5 pra 3,2 em um dia 📉" },
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "tão reclamando de fase impossível e de anúncio demais" },
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "a diretoria quer uma resposta até o fim do dia 😰" }
      ],
      naVidaReal: "As notas nas lojas afetam muito quantas pessoas baixam um jogo. Estúdios acompanham as avaliações e os dados de uso, e lançam atualizações corrigindo primeiro o que mais incomoda.",
      opcoes: [
        {
          texto: "Separo as reclamações que mais se repetem e proponho uma atualização rápida para a pior delas.",
          reacao: "faz sentido! a fase 7 aparece em metade das reclamações 👀",
          resultado: "A atualização saiu em dois dias, e a nota voltou a subir na semana seguinte.",
          pontos: { pressao: 1, organizacao: 1, logica: 1, criatividade: 1 }
        },
        {
          texto: "Respondo as avaliações dizendo que eles não sabem jogar.",
          reacao: "NÃO. apaga isso agora 😱",
          resultado: "As respostas viraram print nas redes, e a nota caiu ainda mais.",
          pontos: {}
        },
        {
          texto: "Mudo várias coisas do jogo de uma vez, sem testar, para mostrar serviço.",
          reacao: "mas a gente nem sabe o que vai acontecer... 😬",
          resultado: "A pressa criou um bug novo no salvamento, e surgiram reclamações diferentes.",
          pontos: { pressao: 2, criatividade: 1 }
        },
        {
          texto: "Tiro todos os anúncios do jogo de uma vez para agradar os jogadores.",
          reacao: "os jogadores vão amar, mas e a receita do estúdio? 💸",
          resultado: "Os jogadores gostaram, mas o estúdio perdeu a principal fonte de dinheiro do jogo.",
          pontos: { pessoas: 2 }
        }
      ]
    },
    {
      horario: "17:30",
      titulo: "Ideia para o próximo jogo",
      cena: "💡 🗒️ 🎲",
      descricao: "A equipe vai começar um jogo novo e quer ouvir propostas de todo mundo.",
      conversa: [
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "rodada de ideias pro próximo jogo! 💡" },
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "regra: tem que dar pra fazer em 6 meses com a nossa equipe de 5 pessoas" },
        { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "e aí, o que você traz? 👀" }
      ],
      naVidaReal: "O tamanho do projeto é o erro mais comum de quem está começando: a ideia é ótima, mas grande demais para a equipe. Em game jams, as pessoas criam jogos pequenos em 48 horas e aprendem a cortar o que não é essencial.",
      opcoes: [
        {
          texto: "Monto uma planilha com os 10 jogos mais baixados e proponho o que eles têm em comum.",
          reacao: "organizado... mas parece todos os jogos que já existem 😐",
          resultado: "A pesquisa foi útil, mas a proposta não tinha nada de novo e não animou a equipe.",
          pontos: { organizacao: 2, logica: 1 }
        },
        {
          texto: "Rabisco várias ideias, escolho uma pequena e monto um protótipo de papel para testar com a equipe.",
          reacao: "jogar com cartinhas de papel? kkkk eu topo! 🃏",
          resultado: "Em 20 minutos todo mundo jogou a versão de papel, e a ideia ficou mais clara para todos.",
          pontos: { criatividade: 2, pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Proponho um mundo aberto gigante, com 100 personagens e história ramificada.",
          reacao: "amei... pra uma equipe de 200 pessoas 😂",
          resultado: "A ideia era incrível, mas impossível de fazer com cinco pessoas em seis meses.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Digo que não tenho nenhuma ideia e deixo os outros falarem.",
          reacao: "ah, qualquer coisa serve, viu? 😕",
          resultado: "A reunião seguiu sem você, e o projeto novo não teve nenhuma ideia sua.",
          pontos: {}
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "Documento desatualizado",
      cena: "📄 🗂️ 🌙",
      descricao: "Uma programadora nova entrou na equipe e passou o dia fazendo uma regra que já tinha mudado.",
      conversa: [
        { quem: "Nina, programadora nova", avatar: "👩🏼‍💻", fala: "oi! fiz a loja do jogo igualzinho ao documento de design 😊" },
        { quem: "Nina, programadora nova", avatar: "👩🏼‍💻", fala: "mas o Kaio disse que essa regra mudou faz um mês... 😢" }
      ],
      naVidaReal: "O documento de design (GDD) guarda as regras do jogo. Quando ele fica desatualizado, cada pessoa da equipe trabalha num jogo diferente. Manter tudo escrito e atualizado economiza muito retrabalho.",
      opcoes: [
        {
          texto: "Atualizo o documento com as regras novas e aviso a equipe do que mudou.",
          reacao: "valeu! agora eu sei onde olhar 🙏",
          resultado: "Na semana seguinte, ninguém mais fez nada com base em regra antiga.",
          pontos: { organizacao: 2, pessoas: 1 }
        },
        {
          texto: "Explico para a Nina como está agora e deixo o documento como está.",
          reacao: "obrigada! mas e o próximo que entrar? 🤔",
          resultado: "A Nina se resolveu, mas outra pessoa caiu no mesmo erro duas semanas depois.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Deixo para atualizar o documento quando o jogo estiver pronto.",
          reacao: "aí não vai servir pra nada, né 😅",
          resultado: "O documento ficou cada vez mais errado, e a equipe parou de confiar nele.",
          pontos: {}
        },
        {
          texto: "Reescrevo o documento inteiro do zero, com 40 páginas e ilustrações.",
          reacao: "uau... mas quem vai ler 40 páginas? 😳",
          resultado: "Ficou bonito, mas você gastou dois dias nisso, e ninguém leu até o fim.",
          pontos: { organizacao: 1, criatividade: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("design-de-jogos", [
  {
    horario: "09:00",
    titulo: "Fácil demais",
    cena: "🎮 🥱 ⏱️",
    descricao: "No teste com jogadores, todos terminam a fase nova em dois minutos e dizem que ficou sem graça.",
    conversa: [
      { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "zeraram a fase 4 em dois minutos 😅" },
      { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "um deles falou \"isso é fase de tutorial?\" 🥱" }
    ],
    naVidaReal: "Um jogo divertido equilibra desafio e habilidade: fácil demais entedia, difícil demais frustra. Designers observam os testes, medem o tempo em cada trecho e acrescentam desafios que usam as mecânicas de jeitos novos.",
    opcoes: [
      {
        texto: "Pergunto aos testadores o que eles gostariam que tivesse na fase.",
        reacao: "um falou dragão, outro falou carro... 😂",
        resultado: "As ideias foram divertidas, mas nenhuma resolvia o problema de ritmo da fase.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Revejo as gravações, meço onde eles ficam sem desafio e crio um obstáculo que usa o pulo duplo de um jeito novo.",
        reacao: "pular de parede em parede? ficou MUITO melhor 🤩",
        resultado: "No teste seguinte, a fase levou oito minutos e todo mundo saiu animado.",
        pontos: { logica: 2, criatividade: 2, organizacao: 1 }
      },
      {
        texto: "Concluo que os testadores eram bons demais e deixo assim.",
        reacao: "mas foram todos os cinco... 🤔",
        resultado: "Quando o jogo saiu, as avaliações chamaram a fase de \"chata\".",
        pontos: {}
      },
      {
        texto: "Dobro a quantidade de inimigos em todas as fases, seguindo uma tabela.",
        reacao: "agora a fase 1 ficou impossível 😵",
        resultado: "A fase 4 ficou melhor, mas as primeiras ficaram difíceis demais.",
        pontos: { organizacao: 2 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "10:30",
    titulo: "Economia do jogo",
    cena: "🪙 🗡️ 🧮",
    conversa: [
      { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "cada fase dá 50 moedas 🪙" },
      { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "a espada lendária custa 1.000. quantas fases até comprar?" }
    ],
    pergunta: "Cada fase dá 50 moedas e a espada custa 1.000 moedas. Quantas fases o jogador precisa terminar para comprá-la?",
    alternativas: ["5 fases", "10 fases", "20 fases", "50 fases"],
    correta: 2,
    explicacao: "1.000 ÷ 50 = 20 fases. Designers fazem essas contas para decidir quando o jogador vai conseguir cada item. Se a espada chega cedo demais, o jogo fica fácil; se demora demais, a pessoa desiste.",
    traco: "logica"
  },
  {
    horario: "11:30",
    titulo: "Recusado pela loja",
    urgente: true,
    cena: "📱 ⛔ ⏰",
    descricao: "A loja de aplicativos recusou a atualização que precisa sair amanhã, no lançamento de um evento do jogo.",
    conversa: [
      { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "a loja recusou a atualização 😱" },
      { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "o evento começa amanhã às 10h e a divulgação já tá no ar!" }
    ],
    naVidaReal: "Lojas de aplicativos revisam cada atualização e recusam o que não segue as regras, como falta de política de privacidade. Ler o motivo com atenção e corrigir só o que foi apontado costuma resolver mais rápido.",
    opcoes: [
      {
        texto: "Peço para o Kaio refazer o sistema de login inteiro ainda hoje, por garantia.",
        reacao: "o login inteiro?? 😰",
        resultado: "A mudança grande criou bugs novos, e a atualização foi recusada de novo.",
        pontos: { logica: 1, pressao: 1 }
      },
      {
        texto: "Publico a versão no site, fora da loja, sem avisar ninguém.",
        reacao: "isso pode tirar o jogo da loja! 😳",
        resultado: "Jogadores baixaram um arquivo sem a revisão da loja, e a empresa recebeu um alerta.",
        pontos: {}
      },
      {
        texto: "Leio o motivo, corrijo só o que foi apontado (a página de privacidade), reenvio e aviso a produção.",
        reacao: "era só a política de privacidade! reenviado 🙌",
        resultado: "A loja aprovou em poucas horas, e o evento começou na hora certa.",
        pontos: { pressao: 1, logica: 1, criatividade: 1, organizacao: 1 }
      },
      {
        texto: "Viro a noite mexendo em tudo que pode ter causado a recusa.",
        reacao: "a gente nem sabe o que causou... 😵",
        resultado: "Você mudou muita coisa às cegas e chegou exausto(a) ao dia do evento.",
        pontos: { pressao: 2, logica: 1 }
      }
    ]
  },
  {
    horario: "13:30",
    titulo: "A cena que ninguém vê",
    cena: "🎬 ⏩ 📜",
    descricao: "A roteirista quer uma cena de dez minutos no começo do jogo. Os dados mostram que quase todo mundo pula.",
    conversa: [
      { quem: "Gabi, roteirista", avatar: "👩🏻‍🦱", fala: "a história é o coração do jogo! a cena inicial tem que ficar inteira 📜" },
      { quem: "Kaio, programador", avatar: "🧑🏾‍💻", fala: "70% das pessoas apertam \"pular\" no primeiro minuto ⏩" },
      { quem: "Gabi, roteirista", avatar: "👩🏻‍🦱", fala: "e aí, game designer? 👀" }
    ],
    naVidaReal: "Muitos jogos contam a história enquanto a pessoa joga, em vez de em cenas longas. Unir narrativa e jogabilidade é um desafio que exige conversa entre roteiro, design e dados de uso.",
    opcoes: [
      {
        texto: "Fico do lado da roteirista: a cena fica como está.",
        reacao: "obrigada! 😌",
        resultado: "A cena ficou inteira, e a maioria dos jogadores continuou pulando.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Mostro os números e corto a cena inteira.",
        reacao: "nem conversou comigo? 😤",
        resultado: "Os jogadores começaram mais rápido, mas ficaram sem entender a história.",
        pontos: { logica: 1 }
      },
      {
        texto: "Deixo os dois decidirem sozinhos.",
        reacao: "ué, alguém tem que decidir... 😕",
        resultado: "A discussão se arrastou por duas semanas.",
        pontos: {}
      },
      {
        texto: "Proponho contar a história jogando, com falas curtas durante a primeira fase, e testar com jogadores.",
        reacao: "a história no meio da ação? eu topo testar 🤩",
        resultado: "No teste, quase ninguém pulou, e a história foi lembrada por mais gente.",
        pontos: { pessoas: 1, logica: 1, criatividade: 2 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "ordenar",
    horario: "15:00",
    titulo: "O ciclo de uma fase",
    cena: "🗺️ 🧪 🔁",
    conversa: [
      { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "a Nina vai criar a primeira fase dela 🗺️" },
      { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "mostra a ordem que a gente usa pra fazer uma fase? 👇" }
    ],
    pergunta: "Toque nas etapas na ordem em que uma fase costuma ser criada:",
    itens: [
      "Esboçar a fase no papel",
      "Montar a fase com blocos simples, sem arte (o \"bloqueio\")",
      "Testar com jogadores e ajustar",
      "Aplicar a arte e o som finais"
    ],
    explicacao: "Primeiro a fase é desenhada no papel e montada com formas simples, para testar se é divertida. Só depois dos ajustes vem a arte final. Mudar uma fase já decorada custa muito mais tempo.",
    traco: "organizacao"
  },
  {
    horario: "16:30",
    titulo: "Moedas infinitas",
    urgente: true,
    cena: "🪙 ♾️ 📹",
    descricao: "Jogadores descobriram um bug que dá moedas infinitas, e um vídeo ensinando o truque viralizou.",
    conversa: [
      { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "o vídeo do bug das moedas já tem 2 milhões de visualizações 😱" },
      { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "a economia do jogo tá quebrando. o que a gente faz?" }
    ],
    naVidaReal: "Bugs que viralizam são comuns em jogos online. Estúdios corrigem rápido, mas pensam com cuidado em como tratar quem aproveitou o erro, para não revoltar a comunidade.",
    opcoes: [
      {
        texto: "Corrijo o bug numa atualização rápida e testada e transformo o caso num evento divertido, sem punir quem usou.",
        reacao: "\"semana da moeda dourada\"? a comunidade amou 😂",
        resultado: "A economia voltou ao normal, e o caso virou uma brincadeira entre o estúdio e os jogadores.",
        pontos: { pressao: 1, organizacao: 1, logica: 1, criatividade: 1 }
      },
      {
        texto: "Bloqueio a conta de todos os jogadores que usaram o bug, sem aviso.",
        reacao: "metade da comunidade foi bloqueada?? 😱",
        resultado: "A revolta nas redes foi enorme, e muitos jogadores abandonaram o jogo.",
        pontos: {}
      },
      {
        texto: "Lanço uma correção às pressas, sem testar.",
        reacao: "a correção apagou o progresso de alguns jogadores 😬",
        resultado: "O bug sumiu, mas a correção criou um problema ainda maior.",
        pontos: { pressao: 2, criatividade: 1 }
      },
      {
        texto: "Deixo o bug: os jogadores estão adorando.",
        reacao: "e a loja do jogo? ninguém mais compra nada 💸",
        resultado: "A diversão durou uma semana, até a economia do jogo perder o sentido.",
        pontos: { pessoas: 2 }
      }
    ]
  },
  {
    horario: "17:30",
    titulo: "Game jam no fim de semana",
    cena: "⏱️ 🍕 💡",
    descricao: "A equipe vai participar de uma game jam: 48 horas para criar um jogo do zero com o tema \"conexão\".",
    conversa: [
      { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "o tema saiu: \"conexão\" 🔗" },
      { quem: "Bia, produtora", avatar: "👩🏻‍💼", fala: "temos 48 horas. por onde a gente começa?" }
    ],
    naVidaReal: "Em game jams, como a Global Game Jam, equipes criam jogos completos em um fim de semana. O segredo é escolher uma ideia pequena, dividir bem as tarefas e terminar algo jogável.",
    opcoes: [
      {
        texto: "Monto um cronograma detalhado das 48 horas antes de ter qualquer ideia.",
        reacao: "lindo cronograma... mas de qual jogo? 😅",
        resultado: "A equipe perdeu horas organizando um projeto que ainda não existia.",
        pontos: { organizacao: 2, logica: 1 }
      },
      {
        texto: "Faço uma chuva de ideias com o time, escolhemos a menor que dá para terminar e dividimos as tarefas.",
        reacao: "dois personagens presos por uma corda? simples e genial 🤩",
        resultado: "O jogo ficou pronto com seis horas de folga e ganhou o prêmio de melhor ideia.",
        pontos: { criatividade: 2, pessoas: 1, organizacao: 1 }
      },
      {
        texto: "Proponho um RPG enorme, com mundo aberto e várias cidades.",
        reacao: "em 48 horas?? 😂",
        resultado: "No fim do domingo, só havia um personagem andando num mapa vazio.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Digo que não tenho ideias e prefiro só ajudar no que mandarem.",
        reacao: "toda ideia ajuda, viu? 🙂",
        resultado: "Você ajudou, mas o jogo não teve nenhuma ideia sua.",
        pontos: {}
      }
    ]
  },
  {
    horario: "18:30",
    titulo: "A fase do estagiário",
    cena: "🗺️ 📝 🌙",
    descricao: "O estagiário terminou a primeira fase dele, e ela está confusa: os jogadores se perdem.",
    conversa: [
      { quem: "Téo, estagiário", avatar: "🧑🏼", fala: "terminei minha fase!! 😁" },
      { quem: "Téo, estagiário", avatar: "🧑🏼", fala: "o que você achou? pode ser sincero(a)!" }
    ],
    naVidaReal: "Dar retorno sobre o trabalho dos outros é parte do dia a dia. Um bom retorno aponta problemas concretos, com exemplos, e combina os próximos passos, sem desanimar nem esconder os problemas.",
    opcoes: [
      {
        texto: "Escrevo os pontos de melhoria com exemplos dos testes e combino uma revisão com ele amanhã.",
        reacao: "ah, as pessoas se perdem porque a porta não aparece! faz sentido 💡",
        resultado: "Na revisão do dia seguinte, a fase já estava bem mais clara.",
        pontos: { organizacao: 2, pessoas: 1 }
      },
      {
        texto: "Elogio tudo para não desanimar ele.",
        reacao: "eba!! vou mandar pra produção então 😁",
        resultado: "A fase foi para o jogo com os mesmos problemas, e os jogadores reclamaram.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Refaço a fase dele sem falar nada.",
        reacao: "ué, minha fase mudou toda? 😕",
        resultado: "A fase melhorou, mas o Téo não aprendeu nada e ficou chateado.",
        pontos: {}
      },
      {
        texto: "Escrevo um documento enorme com todas as regras de design de fases.",
        reacao: "uau, 30 páginas... 😳",
        resultado: "O documento é útil para o futuro, mas não ajudou o Téo com a fase dele agora.",
        pontos: { organizacao: 1, criatividade: 1 }
      }
    ]
  }
]);
