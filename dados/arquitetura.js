/*
  Profissão: Arquitetura e Urbanismo
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "arquitetura",
  nome: "Arquitetura e Urbanismo",
  icone: "📐",
  cor: "#2747d6",
  area: "criativas",
  resumo: "Projetar casas, prédios e espaços da cidade, unindo beleza, conforto e segurança.",

  perfil: {
    pessoas: {
      peso: 4,
      gostar: "Entender como as pessoas vivem e transformar isso num espaço feito para elas.",
      dificil: "Mediar desejos diferentes de clientes, vizinhos, engenheiros e operários da obra."
    },
    logica: {
      peso: 4,
      gostar: "Resolver o quebra-cabeça de medidas, estruturas e normas para o projeto funcionar.",
      dificil: "Muita matemática, escalas, normas técnicas e detalhes que não podem ter erro."
    },
    pressao: {
      peso: 3,
      gostar: "Ver o projeto sair do papel apesar dos imprevistos da obra.",
      dificil: "Prazos de prefeitura, entregas apertadas e problemas na obra que pedem decisão na hora."
    },
    organizacao: {
      peso: 4,
      gostar: "Acompanhar cada etapa, do primeiro desenho até a entrega da chave.",
      dificil: "Documentos, aprovações, orçamentos e cronogramas de vários projetos ao mesmo tempo."
    },
    criatividade: {
      peso: 5,
      gostar: "Imaginar espaços que ainda não existem e encontrar soluções bonitas para problemas reais.",
      dificil: "Criar dentro do orçamento, das leis e das vontades do cliente, e não só do seu gosto."
    }
  },

  cursos: [
    "Bacharelado em Arquitetura e Urbanismo (cerca de 5 anos)",
    "Registro no CAU (Conselho de Arquitetura e Urbanismo) para assinar projetos",
    "Programas de desenho e modelagem 3D, e um bom portfólio, fazem diferença no primeiro emprego"
  ],

  situacoes: [
    {
      horario: "09:00",
      titulo: "O casal discorda",
      cena: "🏠 🍳 🤔",
      descricao: "Primeira reunião sobre a reforma do apartamento de um casal. Os dois querem coisas opostas na cozinha.",
      conversa: [
        { quem: "Dona Teresa, cliente", avatar: "👩🏽", fala: "eu quero a cozinha aberta pra sala! amo receber gente 🥂" },
        { quem: "Seu Jair, cliente", avatar: "👨🏾", fala: "de jeito nenhum. eu frito peixe todo domingo, a casa inteira vai feder 🐟" },
        { quem: "Dona Teresa, cliente", avatar: "👩🏽", fala: "e agora, quem ganha? 😅" }
      ],
      naVidaReal: "Boa parte do trabalho de quem faz arquitetura é ouvir. O \"programa de necessidades\" é o levantamento de como as pessoas vivem e do que elas precisam, e é a base de qualquer projeto.",
      opcoes: [
        {
          texto: "Faço o que a pessoa que está pagando decidir.",
          reacao: "quem paga sou eu, então é aberta! 😏",
          resultado: "Você agradou a Dona Teresa, mas o Seu Jair saiu da reunião chateado.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Desenho do meu jeito: quem entende de projeto sou eu.",
          reacao: "ficou bonito... mas e o que a gente pediu? 🤨",
          resultado: "O projeto era elegante, mas não resolvia o problema dos dois, e voltou para a prancheta.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Pergunto sobre a rotina da casa e proponho uma cozinha integrada com porta de correr de vidro e uma boa coifa.",
          reacao: "aberta quando tem visita e fechada no domingo do peixe? AMEI 😍",
          resultado: "Os dois saíram da reunião concordando, e a solução virou o ponto alto do projeto.",
          pontos: { pessoas: 2, criatividade: 2, logica: 1 }
        },
        {
          texto: "Peço para eles decidirem em casa e me avisarem.",
          reacao: "mas a gente veio aqui justamente pra isso... 😕",
          resultado: "O casal brigou em casa, e o projeto ficou parado por três semanas.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "10:30",
      titulo: "Escala da planta",
      cena: "📏 🗺️ 🧮",
      conversa: [
        { quem: "Rafa, estagiário", avatar: "🧑🏻‍🎓", fala: "me ajuda rapidinho? 😅" },
        { quem: "Rafa, estagiário", avatar: "🧑🏻‍🎓", fala: "a planta tá na escala 1:50 e essa parede mede 8 cm no papel. quanto ela tem de verdade?" }
      ],
      pergunta: "Numa planta na escala 1:50, uma parede mede 8 cm no papel. Qual é o tamanho real dela?",
      alternativas: ["40 cm", "4 m", "5 m", "40 m"],
      correta: 1,
      explicacao: "Na escala 1:50, cada 1 cm no papel vale 50 cm na realidade. Então 8 cm × 50 = 400 cm, ou seja, 4 metros. Ler e desenhar em escala é uma das primeiras coisas que se aprende na faculdade de arquitetura.",
      traco: "logica"
    },
    {
      horario: "11:30",
      titulo: "A parede que não pode sair",
      cena: "🧱 🏗️ ⚠️",
      descricao: "Os clientes querem derrubar uma parede da sala, mas a engenheira avisa que ela segura o prédio.",
      conversa: [
        { quem: "Kátia, engenheira", avatar: "👷🏽‍♀️", fala: "conferi o projeto do prédio: essa parede é estrutural 🧱" },
        { quem: "Kátia, engenheira", avatar: "👷🏽‍♀️", fala: "se tirar sem reforço, o andar de cima pode ter problema sério" },
        { quem: "Dona Teresa, cliente", avatar: "👩🏽", fala: "mas a sala integrada era o meu sonho... 😢" }
      ],
      naVidaReal: "Algumas paredes sustentam a estrutura do prédio. Em edifícios, a norma de reformas (ABNT NBR 16280) exige um responsável técnico e um plano antes de qualquer mudança assim. Arquitetos e engenheiros trabalham juntos para achar a solução.",
      opcoes: [
        {
          texto: "Mando derrubar mesmo assim: os clientes querem muito.",
          reacao: "ebaaa, minha sala! 🎉",
          resultado: "A obra foi embargada pelo síndico, e a reforma parou até um engenheiro aprovar um reforço.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Digo que é impossível e encerro o assunto.",
          reacao: "nem uma alternativa? 😞",
          resultado: "A cliente ficou frustrada e começou a procurar outro escritório.",
          pontos: {}
        },
        {
          texto: "Redesenho a sala com uma abertura menor na parede, sem consultar a engenheira.",
          reacao: "ficou bonito... mas pode cortar essa parede? 🤔",
          resultado: "A engenheira vetou o desenho, e você precisou refazer tudo.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Estudo com a engenheira um reforço com viga e mostro aos clientes o custo e o prazo de cada opção.",
          reacao: "uma viga aparente de madeira? vai virar o charme da sala 😍",
          resultado: "Com o reforço calculado, a sala ficou integrada e segura, e os clientes decidiram sabendo o custo.",
          pontos: { logica: 2, organizacao: 1, criatividade: 1 }
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "Erro na obra",
      urgente: true,
      cena: "🚧 📞 🪟",
      descricao: "O mestre de obras liga de outra obra: a abertura de uma janela foi feita mais baixa do que no projeto, e a laje será concretada amanhã cedo.",
      conversa: [
        { quem: "Seu Benedito, mestre de obras", avatar: "👷🏿‍♂️", fala: "chefe, deu um probleminha aqui 😬" },
        { quem: "Seu Benedito, mestre de obras", avatar: "👷🏿‍♂️", fala: "a janela do quarto ficou 30 cm mais baixa que no desenho" },
        { quem: "Seu Benedito, mestre de obras", avatar: "👷🏿‍♂️", fala: "amanhã 7h o caminhão de concreto chega. faço o quê?" }
      ],
      naVidaReal: "Acompanhar a obra é parte do trabalho. Pequenos erros que passam despercebidos antes do concreto viram problemas caros depois, porque concreto pronto só sai com quebradeira.",
      opcoes: [
        {
          texto: "Vou até a obra, confiro as medidas com a planta e decido a correção com o mestre antes do concreto.",
          reacao: "que bom que você veio! vamos ajustar agora mesmo 👷",
          resultado: "Em uma hora a abertura foi corrigida, e o concreto foi feito no dia certo.",
          pontos: { pressao: 2, organizacao: 1, logica: 1 }
        },
        {
          texto: "Digo que está bom assim: ninguém vai notar.",
          reacao: "beleza, então segue! 👍",
          resultado: "A janela ficou na altura da cama, e o cliente pediu para refazer depois de pronta.",
          pontos: {}
        },
        {
          texto: "Brigo com ele pelo telefone e mando refazer tudo.",
          reacao: "tá bom... mas não precisava gritar 😔",
          resultado: "A correção foi feita, mas o clima com a equipe da obra azedou.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Peço que ele mande uma foto e resolvo amanhã.",
          reacao: "amanhã às 7h o concreto chega, hein 😬",
          resultado: "Quando você viu a foto, o concreto já tinha sido feito, e corrigir ficou bem mais caro.",
          pontos: { organizacao: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "15:00",
      titulo: "Rampa acessível",
      cena: "♿ 📐 🔍",
      conversa: [
        { quem: "Marta, arquiteta sócia", avatar: "👩🏼‍💼", fala: "antes de mandar pra prefeitura, revisa a rampa da entrada? ♿" },
        { quem: "Marta, arquiteta sócia", avatar: "👩🏼‍💼", fala: "acho que tem um item fora da norma de acessibilidade" }
      ],
      pergunta: "Toque no item da rampa que está fora da norma de acessibilidade:",
      linhas: [
        "Largura livre: 1,20 m",
        "Inclinação: 15%",
        "Corrimão dos dois lados, em duas alturas (70 cm e 92 cm)",
        "Piso antiderrapante",
        "Área plana de descanso no começo e no fim da rampa"
      ],
      correta: 1,
      explicacao: "Pela norma brasileira de acessibilidade (ABNT NBR 9050), a inclinação de uma rampa deve ser de no máximo 8,33% na maioria dos casos (1 metro de altura para 12 de comprimento). Com 15%, uma pessoa em cadeira de rodas não consegue subir sozinha com segurança.",
      traco: "logica"
    },
    {
      horario: "16:00",
      titulo: "A praça do bairro",
      cena: "🌳 🛹 👵",
      descricao: "O escritório venceu o concurso para reformar uma praça. Na reunião com os moradores, cada grupo quer uma coisa.",
      conversa: [
        { quem: "Dona Zuleica, moradora", avatar: "👵🏾", fala: "eu quero bancos na sombra e sossego pra conversar com as amigas 🌳" },
        { quem: "Gabi, skatista", avatar: "🧑🏽‍🦱", fala: "e a gente quer uma pista de skate! não tem nenhuma no bairro 🛹" },
        { quem: "Dona Zuleica, moradora", avatar: "👵🏾", fala: "skate perto dos idosos? nem pensar! 😠" }
      ],
      naVidaReal: "Urbanismo é pensar os espaços da cidade para quem vive nela. O Estatuto da Cidade prevê a participação da população nas decisões, e projetos que ouvem os moradores costumam ser mais usados e mais bem cuidados.",
      opcoes: [
        {
          texto: "Desenho uma praça linda, para ganhar prêmios, sem ouvir mais ninguém.",
          reacao: "bonita... mas cadê os bancos? e a pista? 🤨",
          resultado: "O projeto ganhou elogios em revista, mas os moradores quase não usam a praça.",
          pontos: { criatividade: 1, logica: 1 }
        },
        {
          texto: "Faço uma roda de conversa, mapeio quem usa a praça e em que horário, e proponho áreas separadas, com caminhos e sombra.",
          reacao: "pista no canto de lá e bancos aqui na sombra? assim dá 😄",
          resultado: "A praça ficou cheia de manhã à noite, com espaço para os idosos e para os skatistas.",
          pontos: { pessoas: 2, criatividade: 2, organizacao: 1, logica: 1 }
        },
        {
          texto: "Coloco só o que o grupo que falou mais alto pediu.",
          reacao: "e a gente não conta? 😤",
          resultado: "Metade do bairro se sentiu ignorada e fez um abaixo-assinado contra o projeto.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Repito o projeto de outra praça para ganhar tempo.",
          reacao: "essa praça é igualzinha à do bairro vizinho... 😕",
          resultado: "O projeto ficou pronto rápido, mas não combinava com o lugar nem com quem vive ali.",
          pontos: {}
        }
      ]
    },
    {
      horario: "17:00",
      titulo: "Prazo da prefeitura",
      urgente: true,
      cena: "📑 🏛️ ⏳",
      descricao: "O projeto de uma casa precisa ser enviado para aprovação da prefeitura até as 18h, e o estagiário acabou de achar um problema.",
      conversa: [
        { quem: "Rafa, estagiário", avatar: "🧑🏻‍🎓", fala: "ixi... falta o quadro de áreas no projeto da casa 😰" },
        { quem: "Rafa, estagiário", avatar: "🧑🏻‍🎓", fala: "e o sistema da prefeitura fecha às 18h. se perder, só no mês que vem 😱" }
      ],
      naVidaReal: "Para construir, o projeto precisa ser aprovado pela prefeitura, que confere se ele segue as leis da cidade. O processo tem muitos documentos e prazos, e um item faltando pode atrasar uma obra por semanas.",
      opcoes: [
        {
          texto: "Divido as tarefas: o Rafa confere os desenhos e eu monto o quadro de áreas. Enviamos com folga.",
          reacao: "conferido! enviado às 17h45 ✅",
          resultado: "O projeto entrou no prazo, e o cliente não perdeu a vez na fila de aprovação.",
          pontos: { pressao: 2, organizacao: 2 }
        },
        {
          texto: "Envio do jeito que está e corrijo depois.",
          reacao: "enviado... mas veio uma mensagem de \"documentação incompleta\" 😬",
          resultado: "A prefeitura recusou o pedido, e o projeto voltou para o fim da fila.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Mando um e-mail pedindo mais prazo e paro tudo até responderem.",
          reacao: "a prefeitura não responde e-mail no mesmo dia 😅",
          resultado: "Ninguém respondeu, o prazo passou, e o envio ficou para o mês seguinte.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Desisto: não vai dar tempo.",
          reacao: "mas ainda falta uma hora... 😕",
          resultado: "O prazo passou, e a obra do cliente atrasou um mês.",
          pontos: {}
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "Apresentação de amanhã",
      cena: "🖥️ 🏠 ✨",
      descricao: "Amanhã cedo você apresenta o projeto do apartamento para o casal. As imagens em 3D ficaram estranhas.",
      conversa: [
        { quem: "Marta, arquiteta sócia", avatar: "👩🏼‍💼", fala: "vi as imagens do apê da Teresa e do Jair 👀" },
        { quem: "Marta, arquiteta sócia", avatar: "👩🏼‍💼", fala: "tá tudo escuro, parece uma caverna. assim eles não vão se imaginar morando lá 😬" }
      ],
      naVidaReal: "Clientes nem sempre sabem ler uma planta técnica. Imagens 3D, maquetes e uma boa apresentação ajudam as pessoas a entender e aprovar o projeto. Saber comunicar é tão importante quanto saber desenhar.",
      opcoes: [
        {
          texto: "Mando as imagens do jeito que estão.",
          reacao: "hmm... é tudo assim escuro? 😟",
          resultado: "O casal não se empolgou e pediu para pensar mais uma semana.",
          pontos: {}
        },
        {
          texto: "Passo a noite inteira fazendo 30 imagens novas.",
          reacao: "uau, quanta imagem! você dormiu? 😳",
          resultado: "As imagens ficaram boas, mas você chegou exausto(a) e se perdeu na apresentação.",
          pontos: { criatividade: 1, pressao: 2 }
        },
        {
          texto: "Ajusto a luz e os materiais e monto a apresentação contando a história do projeto.",
          reacao: "olha a porta de vidro aberta no domingo! já me vejo aí 🥹",
          resultado: "O casal aprovou o projeto na mesma reunião.",
          pontos: { criatividade: 2, pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Mando só a planta técnica, com todas as medidas, sem nenhuma imagem.",
          reacao: "tá certinho... mas a gente não entende nada disso 😅",
          resultado: "Tudo estava correto, mas o casal não conseguiu imaginar o apartamento pronto.",
          pontos: { logica: 1, organizacao: 2 }
        }
      ]
    }
  ]
});
