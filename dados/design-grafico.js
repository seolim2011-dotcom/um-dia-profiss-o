/*
  Profissão: Design Gráfico
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "design-grafico",
  nome: "Design Gráfico",
  icone: "🎨",
  cor: "#2747d6",
  area: "criativas",
  resumo: "Criar logos, peças e identidades visuais que comunicam a ideia de uma marca.",

  perfil: {
    pessoas: {
      peso: 3,
      gostar: "Entender o que o cliente quer e ver a reação dele ao resultado.",
      dificil: "Clientes que não sabem explicar o que querem e pedem mudanças sem fim."
    },
    logica: {
      peso: 2,
      gostar: "Organizar informação e pensar em como as pessoas vão usar e entender o layout.",
      dificil: "Regras técnicas de cor, resolução e impressão que não perdoam."
    },
    pressao: {
      peso: 3,
      gostar: "A empolgação de entregar um trabalho bonito no prazo.",
      dificil: "Prazos curtos, “pra ontem” e alterações de última hora."
    },
    organizacao: {
      peso: 3,
      gostar: "Arquivos, camadas e versões organizadas.",
      dificil: "Controlar versões, briefings e arquivos finais de vários clientes ao mesmo tempo."
    },
    criatividade: {
      peso: 5,
      gostar: "Criar logos, peças e ideias novas todos os dias.",
      dificil: "Criar sob encomenda: nem sempre o seu gosto é o do cliente, e o bloqueio criativo existe."
    }
  },

  cursos: [
    "Tecnólogo em Design Gráfico (de 2 a 3 anos)",
    "Bacharelado em Design (cerca de 4 anos)",
    "Cursos livres de softwares e um bom portfólio contam muito para conseguir o primeiro emprego"
  ],

  situacoes: [
    {
      horario: "09:00",
      titulo: "Briefing confuso",
      cena: "🎨 🤔 🦁",
      descricao: "Uma cliente nova chega com o pedido de um logo para a loja dela.",
      conversa: [
        { quem: "Paula, cliente", avatar: "👩🏽‍🦱", fala: "oi! eu quero um logo moderno, mas clássico, divertido, mas sério 😄" },
        { quem: "Paula, cliente", avatar: "👩🏽‍🦱", fala: "e que tenha um leão. ou um gato. ou os dois, sei lá! 🦁🐱" },
        { quem: "Paula, cliente", avatar: "👩🏽‍🦱", fala: "ah, e eu gosto de rosa. ou verde. entende?" }
      ],
      naVidaReal: "O briefing é o ponto de partida de qualquer projeto de design. Quando ele é confuso, uma boa conversa evita refazer o trabalho várias vezes.",
      opcoes: [
        {
          texto: "Crio um logo do jeito que eu acho melhor e mando pronto.",
          reacao: "hum... não era isso que eu imaginava 😕",
          resultado: "A cliente não se reconheceu no logo e pediu para refazer tudo.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Peço que ela mande tudo por escrito e só começo depois.",
          reacao: "ih, escrever é difícil... vou enrolar uns dias 😅",
          resultado: "O projeto ficou parado por uma semana esperando o texto da cliente.",
          pontos: { organizacao: 1, logica: 1 }
        },
        {
          texto: "Faço perguntas, peço referências e monto um briefing escrito junto com ela.",
          reacao: "ahhh, agora ficou claro! era isso mesmo que eu queria dizer 🤩",
          resultado: "Em meia hora vocês definiram estilo, cores e um símbolo: um gato elegante em rosa e verde.",
          pontos: { pessoas: 1, organizacao: 2, criatividade: 1 }
        },
        {
          texto: "Aceito o pedido sem perguntar nada para não parecer chato(a).",
          reacao: "legal! quando fica pronto? 😊",
          resultado: "Depois de três versões erradas, você precisou fazer todas as perguntas que tinha evitado.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "10:15",
      titulo: "Qual fonte escolher?",
      cena: "🔤 👓 🖼️",
      conversa: [
        { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "bora ver se você tem olho pra tipografia 👁️" },
        { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "cartaz pra uma clínica de idosos. o texto precisa ser fácil de ler à distância" }
      ],
      pergunta: "Qual combinação facilita mais a leitura do cartaz?",
      alternativas: [
        "Fonte cursiva fina, tamanho pequeno, cinza claro",
        "Fonte sem serifa, tamanho grande, preto sobre fundo branco",
        "Letras brancas sobre fundo amarelo claro",
        "Texto todo em letras decorativas e coloridas"
      ],
      correta: 1,
      explicacao: "Para leitura fácil: letras grandes, simples e com alto contraste (como preto sobre branco). Letras finas, decorativas ou com pouco contraste cansam a vista, principalmente de quem enxerga pior. Design bonito também precisa funcionar.",
      traco: "criatividade"
    },
    {
      horario: "11:30",
      titulo: "Alteração de última hora",
      urgente: true,
      cena: "⏰ 📣 😱",
      descricao: "A cliente liga em cima da hora com um pedido urgente.",
      conversa: [
        { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "oi, eu sei que o banner já estava pronto 😅" },
        { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "mas mudei de ideia: preciso de outro texto, outra foto e outras cores" },
        { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "tem que estar pronto até meio-dia, hein? 🙏" }
      ],
      naVidaReal: "Mudanças de última hora são muito comuns em design. Combinar quantas revisões estão incluídas desde o início ajuda a evitar abusos.",
      opcoes: [
        {
          texto: "Digo que não faço mais nada e desligo.",
          reacao: "poxa... que grosseria! vou procurar outro designer 😠",
          resultado: "O cliente cancelou o contrato e falou mal de você para outros contatos.",
          pontos: {}
        },
        {
          texto: "Refaço tudo correndo, sem revisar o resultado.",
          reacao: "chegou! mas tem erro de digitação aqui... 😬",
          resultado: "Você entregou no prazo, mas o banner foi impresso com um erro de ortografia.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Faço o que ele pede sem questionar, mesmo que fique feio: o cliente conhece o próprio negócio melhor do que eu.",
          reacao: "hmm, ficou meio estranho, né... 🤨",
          resultado: "Entregou no prazo, mas o resultado não ficou bom e o cliente culpou você.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Avalio o tempo, explico o que dá para fazer até meio-dia e entrego em duas etapas.",
          reacao: "ótimo! o mais importante primeiro, e o resto à tarde 👍",
          resultado: "Você entregou o essencial no prazo e finalizou os detalhes à tarde, com o cliente satisfeito.",
          pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "Crítica ao seu trabalho",
      cena: "🖼️ 💬 😬",
      descricao: "O diretor de arte avalia o logo que você criou.",
      conversa: [
        { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "olhei o seu logo 👀" },
        { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "sendo sincero: tá feio. as cores brigam e dá pra ler mal o nome 😬" }
      ],
      naVidaReal: "Receber críticas é parte do dia a dia de quem trabalha com criação. Saber separar a crítica ao trabalho do ataque a você ajuda a evoluir.",
      opcoes: [
        {
          texto: "Fico chateado(a) e passo a tarde sem falar com ninguém: trabalhei muito nesse logo.",
          reacao: "ô, não precisa levar pro lado pessoal 😅",
          resultado: "O prazo ficou apertado e o diretor passou a hesitar em dar feedbacks sinceros.",
          pontos: {}
        },
        {
          texto: "Defendo o logo dizendo que ele não entende de arte.",
          reacao: "uau. ok. então não tem como ajudar 🙄",
          resultado: "A discussão azedou o clima e o logo não foi aprovado.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Peço exemplos do que não funciona e refaço testando outras combinações de cor.",
          reacao: "olha só! assim sim. isso ficou muito melhor 🔥",
          resultado: "A nova versão tinha mais contraste e ficou clara. O diretor aprovou de primeira.",
          pontos: { criatividade: 2, pessoas: 1 }
        },
        {
          texto: "Refaço sem perguntar nada, mudando só a cor de fundo, para entregar a nova versão ainda hoje.",
          reacao: "hmm, melhorou um pouco, mas ainda não resolveu 🤨",
          resultado: "A versão melhorou, mas o problema principal continuou e você precisou refazer.",
          pontos: { organizacao: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "15:00",
      titulo: "Confira o arquivo",
      cena: "🖨️ 🔍 ⚠️",
      conversa: [
        { quem: "Seu Antônio, gráfica", avatar: "👨🏿‍🔧", fala: "recebi seu arquivo, mas parece que tem algo errado pra impressão 🖨️" },
        { quem: "Seu Antônio, gráfica", avatar: "👨🏿‍🔧", fala: "confere aí a ficha do arquivo e me fala o que mudar?" }
      ],
      pergunta: "Toque na configuração que está errada para um material impresso:",
      linhas: [
        "Tamanho: 21 × 29,7 cm (A4)",
        "Resolução: 300 dpi",
        "Margem de segurança: 3 mm",
        "Fontes convertidas em curvas",
        "Modo de cor: RGB"
      ],
      correta: 4,
      explicacao: "Para impressão, o modo de cor correto é CMYK (ciano, magenta, amarelo e preto), o das tintas da gráfica. O RGB é para telas e pode mudar as cores na impressão. Conferir esses detalhes técnicos evita retrabalho.",
      traco: "logica"
    },
    {
      horario: "16:30",
      titulo: "Bloqueio criativo",
      urgente: true,
      cena: "🧠 💨 📄",
      descricao: "Uma reunião com o cliente está marcada para daqui a pouco, e você ainda não tem nenhuma ideia.",
      conversa: [
        { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "em 30 minutos a gente apresenta as ideias da campanha pro cliente 🎬" },
        { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "cadê as suas? 👀" }
      ],
      naVidaReal: "Bloqueios criativos acontecem com todo mundo. Profissionais experientes têm técnicas, como referências, rascunhos rápidos e pausas curtas, para destravar.",
      opcoes: [
        {
          texto: "Finjo estar doente e saio da empresa.",
          reacao: "ué, você tava bem agora há pouco... 😕",
          resultado: "O diretor percebeu e perdeu a confiança em você.",
          pontos: {}
        },
        {
          texto: "Copio uma campanha famosa e troco as cores.",
          reacao: "essa campanha eu já vi em algum lugar... 🤨",
          resultado: "O cliente percebeu a semelhança e o trabalho foi recusado.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Rabisco 10 ideias rápidas, escolho as 3 melhores e apresento rascunhos.",
          reacao: "olha só, tem ideia boa aqui! 😮",
          resultado: "Mesmo sem acabamento, os rascunhos agradaram o cliente, que escolheu uma das ideias para seguir.",
          pontos: { criatividade: 2, pressao: 1, organizacao: 1 }
        },
        {
          texto: "Peço ajuda a um colega para brincarmos de ideias em dupla.",
          reacao: "bora! vamos juntar o que cada um tem 💡",
          resultado: "Vocês montaram duas ideias interessantes em 20 minutos.",
          pontos: { pessoas: 1, criatividade: 1, pressao: 2 }
        }
      ]
    },
    {
      horario: "17:45",
      titulo: "Pedido de cópia",
      cena: "👯 ⚖️ 😬",
      descricao: "Um cliente pede algo que pode dar problema.",
      conversa: [
        { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "olha, eu vi o logo da concorrente e adorei 😍" },
        { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "faz igualzinho pro meu negócio? só troca o nome. ninguém vai perceber 😉" }
      ],
      naVidaReal: "Copiar o logo de outra marca pode gerar processo por plágio. Bons designers explicam o risco e criam algo próprio, inspirado, mas original.",
      opcoes: [
        {
          texto: "Faço igualzinho: o cliente é quem paga e sabe o que funciona no ramo dele.",
          reacao: "que ótimo! tá igualzinho mesmo 😁",
          resultado: "A concorrente notificou o cliente por plágio e você acabou envolvido(a) na confusão.",
          pontos: {}
        },
        {
          texto: "Recuso e explico que copiar a concorrente é errado e pode dar processo, sem oferecer outra opção.",
          reacao: "ah, então não vai dar certo... 😒",
          resultado: "O cliente foi embora, e o problema dele ficou sem solução.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Explico o risco de plágio e proponho algo no mesmo estilo, mas único.",
          reacao: "nossa, nem tinha pensado nisso. gostei! me mostra 🤔",
          resultado: "O cliente aprovou a nova proposta, que ficou diferente da concorrente e com personalidade.",
          pontos: { criatividade: 2, pessoas: 1 }
        },
        {
          texto: "Aviso o risco e deixo o cliente decidir sozinho.",
          reacao: "ah, deixa pra lá, faz igual mesmo 😅",
          resultado: "O cliente insistiu na cópia e você precisou recusar o trabalho no fim.",
          pontos: { pessoas: 1 }
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "Arquivos finais",
      cena: "📁 🗂️ 🌙",
      descricao: "Fim do dia: hora de guardar tudo.",
      conversa: [
        { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "antes de ir: manda os arquivos finais do cliente pra pasta da agência 📁" },
        { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "o último que você fez tá todo bagunçado: 'final_final2_agoraVai.psd' 😂" }
      ],
      naVidaReal: "Organizar arquivos, nomes de versão e pastas parece chato, mas evita perder trabalho e facilita a vida de quem vem depois.",
      opcoes: [
        {
          texto: "Deixo como está: eu me entendo.",
          reacao: "e se você sair de férias? ninguém acha nada 😅",
          resultado: "Duas semanas depois, ninguém conseguiu achar a versão final do arquivo.",
          pontos: {}
        },
        {
          texto: "Apago as versões antigas para limpar a pasta.",
          reacao: "ih, e se o cliente quiser voltar atrás? 😬",
          resultado: "O cliente pediu a versão antiga e você teve que refazer tudo.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Renomeio com padrão (cliente, data, versão), separo em pastas e guardo as antigas.",
          reacao: "agora sim! qualquer pessoa acha o que precisa 👏",
          resultado: "Meses depois, o cliente pediu uma pequena mudança e você achou o arquivo em segundos.",
          pontos: { organizacao: 2, logica: 1 }
        },
        {
          texto: "Mando tudo num zip para o diretor organizar do jeito dele, já que é ele quem cuida do arquivo da empresa.",
          reacao: "ué, e eu que me viro agora? 😕",
          resultado: "O diretor perdeu uma hora organizando o que você deixou bagunçado.",
          pontos: { pessoas: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("design-grafico", [
  {
    horario: "09:00",
    titulo: "A marca da ONG",
    cena: "🌱 🎨 💬",
    descricao: "Uma ONG ambiental quer uma identidade visual nova, mas o pedido chegou vago.",
    conversa: [
      { quem: "Rafaela, coordenadora da ONG", avatar: "👩🏽‍🦱", fala: "a gente quer uma marca bonita 🌱" },
      { quem: "Rafaela, coordenadora da ONG", avatar: "👩🏽‍🦱", fala: "algo que chame atenção... sei lá, você que é designer 😅" }
    ],
    naVidaReal: "Uma identidade visual precisa comunicar quem a organização é e para quem ela fala. Por isso o trabalho começa entendendo o público, os valores e as referências, e não pelo desenho.",
    opcoes: [
      {
        texto: "Faço três propostas no meu estilo e mando para ela escolher.",
        reacao: "lindas... mas nenhuma parece a gente 😕",
        resultado: "As propostas eram bonitas, mas não conversavam com o público da ONG, e foi preciso recomeçar.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Mando um formulário longo de briefing para ela preencher com calma antes de qualquer conversa, assim nada fica de fora.",
        reacao: "nossa, 40 perguntas... vou ver quando der 😩",
        resultado: "O formulário voltou depois de duas semanas, com metade das respostas em branco.",
        pontos: { organizacao: 1, logica: 1 }
      },
      {
        texto: "Marco uma conversa para entender o público e os valores da ONG e escrevo o briefing junto com ela.",
        reacao: "a gente fala com jovens da periferia sobre lixo e reciclagem! 💡",
        resultado: "Com o briefing claro, a primeira proposta foi aprovada quase sem ajustes.",
        pontos: { pessoas: 1, organizacao: 2, criatividade: 1 }
      },
      {
        texto: "Começo a desenhar sem perguntar para quem é a marca.",
        reacao: "ficou muito sério pra gente, né? 🤔",
        resultado: "Depois de várias versões, você teve que fazer as perguntas que tinha pulado.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "10:15",
    titulo: "Contraste de cores",
    cena: "🎨 👁️ 🔤",
    conversa: [
      { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "o texto do cartaz precisa ser lido por todo mundo, inclusive daltônicos 👁️" },
      { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "qual dessas combinações você usaria?" }
    ],
    pergunta: "Qual combinação de cores deixa o texto mais fácil de ler?",
    alternativas: [
      "Texto amarelo-claro sobre fundo branco",
      "Texto azul-marinho sobre fundo branco",
      "Texto vermelho sobre fundo verde",
      "Texto cinza-claro sobre fundo cinza-médio"
    ],
    correta: 1,
    explicacao: "Azul-marinho sobre branco tem muito contraste. Amarelo sobre branco e cinza sobre cinza têm pouco. Vermelho com verde é a combinação mais difícil para quem tem o tipo mais comum de daltonismo, que atinge cerca de 1 em cada 12 homens.",
    traco: "criatividade"
  },
  {
    horario: "11:30",
    titulo: "Telefone errado no panfleto",
    urgente: true,
    cena: "🖨️ ☎️ 😱",
    descricao: "A gráfica imprimiu 5 mil panfletos de um evento de amanhã, e o telefone na arte está errado.",
    conversa: [
      { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "o telefone do panfleto tá errado!! 😱" },
      { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "o evento é amanhã. e agora??" }
    ],
    naVidaReal: "Erros em material impresso custam caro. Por isso designers fazem uma revisão final (a prova) com o cliente antes de mandar para a gráfica. Quando o erro acontece, assumir e resolver rápido mantém a confiança.",
    opcoes: [
      {
        texto: "Digo que a culpa é dele, que aprovou a arte.",
        reacao: "eu aprovei confiando em você! 😡",
        resultado: "Talvez ele também tivesse culpa, mas o cliente não voltou a trabalhar com você.",
        pontos: {}
      },
      {
        texto: "Corrijo correndo e mando reimprimir tudo, sem conferir de novo.",
        reacao: "chegou... mas agora o horário tá errado 😩",
        resultado: "A pressa criou um segundo erro, e a gráfica precisou imprimir pela terceira vez.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Mando fazer etiquetas com o telefone certo para colar nos panfletos, sem consultar o cliente.",
        reacao: "etiqueta? ficou meio remendado, né... 😕",
        resultado: "O problema foi contornado, mas o cliente não gostou de não ter sido consultado.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Assumo o erro, corrijo, confiro a arte com ele e combino com a gráfica uma reimpressão expressa.",
        reacao: "tá certinho agora. obrigado por resolver tão rápido 🙏",
        resultado: "Os panfletos novos chegaram à noite, a tempo do evento.",
        pontos: { pressao: 2, pessoas: 1, organizacao: 1 }
      }
    ]
  },
  {
    horario: "13:30",
    titulo: "Ninguém acha o botão",
    cena: "🖱️ 🔍 😕",
    descricao: "No teste com usuários do site que você desenhou, ninguém encontrou o botão de comprar.",
    conversa: [
      { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "assisti ao teste: 6 de 8 pessoas não acharam o botão de comprar 😬" },
      { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "o visual tá lindo, mas não tá funcionando" }
    ],
    naVidaReal: "Testes com usuários mostram como as pessoas realmente usam um design. Bom design não é só bonito: ele precisa ser fácil de entender e de usar.",
    opcoes: [
      {
        texto: "Fico ofendido(a): o layout está bonito e moderno, o problema são os usuários.",
        reacao: "6 de 8 pessoas, hein... 🤨",
        resultado: "O site foi publicado assim, e as vendas foram abaixo do esperado.",
        pontos: {}
      },
      {
        texto: "Defendo o layout dizendo que as pessoas vão se acostumar.",
        reacao: "e se elas forem embora antes de se acostumar? 🤔",
        resultado: "Nada mudou, e o problema apareceu de novo depois do lançamento.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Assisto às gravações e redesenho o botão em duas versões para testar.",
        reacao: "a versão B achou todo mundo! 🙌",
        resultado: "O botão novo continuou bonito e passou a ser encontrado em segundos.",
        pontos: { criatividade: 2, pessoas: 1 }
      },
      {
        texto: "Aumento o tamanho do botão e mudo a cor para chamar mais atenção, sem entender o que confundiu as pessoas.",
        reacao: "melhorou um pouquinho... 😐",
        resultado: "Algumas pessoas acharam, mas o problema era o lugar do botão, e não o tamanho.",
        pontos: { organizacao: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "15:00",
    titulo: "Arte para as redes",
    cena: "📱 📐 🔍",
    conversa: [
      { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "o arquivo do post vai subir pra rede social agora 📱" },
      { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "confere a ficha antes? tem uma configuração errada" }
    ],
    pergunta: "Toque na configuração errada para uma imagem que vai para a tela:",
    linhas: [
      "Tamanho: 1080 × 1080 pixels",
      "Modo de cor: CMYK",
      "Formato do arquivo: PNG",
      "Texto principal com no máximo 7 palavras",
      "Logo no canto inferior direito"
    ],
    correta: 1,
    explicacao: "Para telas, o modo de cor certo é o RGB, que é o das luzes do monitor e do celular. O CMYK é o modo das tintas da gráfica e pode deixar as cores apagadas na tela. Cada destino pede uma configuração diferente.",
    traco: "logica"
  },
  {
    horario: "16:30",
    titulo: "Post em 30 minutos",
    urgente: true,
    cena: "⏰ 📱 🔥",
    descricao: "Um assunto do momento explodiu nas redes, e o cliente quer um post sobre isso em 30 minutos.",
    conversa: [
      { quem: "Mariana, redatora", avatar: "👩🏼", fala: "o assunto tá bombando e o cliente quer pegar a onda 🌊" },
      { quem: "Mariana, redatora", avatar: "👩🏼", fala: "a gente tem 30 minutos pra arte e o texto. bora? 😅" }
    ],
    naVidaReal: "Agências trabalham com prazos muito curtos quando um assunto viraliza. Ter um guia da marca (cores, fontes, tom) e trabalhar em dupla com a redação ajuda a criar rápido sem perder a qualidade.",
    opcoes: [
      {
        texto: "Digo que não dá tempo e não faço.",
        reacao: "o concorrente postou em 20 minutos 😬",
        resultado: "O cliente perdeu a onda e reclamou com a agência.",
        pontos: {}
      },
      {
        texto: "Pego um modelo pronto e bonito da internet e só troco o texto e as cores da marca, para dar tempo.",
        reacao: "esse modelo é igual ao de outra marca, olha 😳",
        resultado: "O post saiu, mas parecido demais com o de outra empresa.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Faço três rascunhos rápidos e finalizo o melhor com a redatora, seguindo o guia da marca.",
        reacao: "ficou com a cara do cliente e saiu em 25 minutos! 🚀",
        resultado: "O post foi um dos mais compartilhados da semana.",
        pontos: { criatividade: 2, pressao: 1, organizacao: 1 }
      },
      {
        texto: "Chamo a redatora e criamos às pressas, sem revisar.",
        reacao: "ficou divertido! ...mas tem um erro de português 🙈",
        resultado: "O post fez sucesso, mas com um erro que virou piada nos comentários.",
        pontos: { pessoas: 1, criatividade: 1, pressao: 2 }
      }
    ]
  },
  {
    horario: "17:45",
    titulo: "A foto do Google",
    cena: "🖼️ ©️ ⚖️",
    descricao: "O cliente encontrou uma foto linda no Google e quer usar no anúncio da loja.",
    conversa: [
      { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "achei essa foto no Google, é perfeita! 😍" },
      { quem: "Seu Roberto, cliente", avatar: "👨🏽‍🦲", fala: "coloca no anúncio, ninguém vai saber de onde veio 😉" }
    ],
    naVidaReal: "Imagens na internet têm dono. Usar sem licença pode gerar processo por direitos autorais. Designers usam bancos de imagens licenciados, fotos próprias ou ilustrações criadas para o projeto.",
    opcoes: [
      {
        texto: "Uso a foto: se está no Google, é de todo mundo, e ninguém vai reparar numa imagem num anúncio pequeno de loja.",
        reacao: "ótimo! 😁",
        resultado: "O fotógrafo encontrou o anúncio e cobrou uma indenização da loja.",
        pontos: {}
      },
      {
        texto: "Recuso, sem oferecer outra saída.",
        reacao: "então como eu faço meu anúncio? 😒",
        resultado: "O risco foi evitado, mas o cliente ficou sem solução.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Explico os direitos autorais e proponho uma imagem licenciada ou uma ilustração própria.",
        reacao: "uma ilustração com a cara da loja? adorei 🤩",
        resultado: "O anúncio ficou único e sem nenhum risco legal.",
        pontos: { criatividade: 2, pessoas: 1 }
      },
      {
        texto: "Aviso o risco e deixo o cliente decidir sozinho.",
        reacao: "ah, usa mesmo, vai 😅",
        resultado: "Ele insistiu, e você acabou recusando o trabalho no fim.",
        pontos: { pessoas: 1 }
      }
    ]
  },
  {
    horario: "18:30",
    titulo: "Entrega da marca",
    cena: "📦 🗂️ 🌙",
    descricao: "Hoje você entrega ao cliente os arquivos finais da marca nova.",
    conversa: [
      { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "o cliente vai usar a marca em placa, site, camiseta e cartão 📦" },
      { quem: "Nando, diretor de arte", avatar: "👨🏻‍🎨", fala: "manda tudo certinho pra ele não ter que pedir de novo" }
    ],
    naVidaReal: "Uma marca é usada em muitos lugares. Por isso a entrega costuma incluir o logo em vetor (que aumenta sem perder qualidade), versões para tela e impressão e um guia que explica como usar.",
    opcoes: [
      {
        texto: "Mando só o logo em JPG pequeno.",
        reacao: "a placa da loja ficou toda serrilhada 😩",
        resultado: "O cliente teve que pedir os arquivos de novo, várias vezes.",
        pontos: {}
      },
      {
        texto: "Mando os arquivos com nomes engraçados e uma mensagem divertida, para a entrega ter a personalidade do estúdio.",
        reacao: "\"logo_top_demais_final.png\"? kkkk mas qual é qual? 😅",
        resultado: "O cliente riu, mas se perdeu entre os arquivos.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Entrego o logo em vetor e PNG, as cores para tela e impressão e um guia de uso.",
        reacao: "nunca recebi nada tão organizado! 😮",
        resultado: "A marca foi aplicada certinha em todos os materiais, sem nenhuma dúvida.",
        pontos: { organizacao: 2, logica: 1 }
      },
      {
        texto: "Mando tudo numa pasta só, misturado, para o cliente organizar do jeito que achar melhor.",
        reacao: "e qual eu uso na camiseta? 🤷",
        resultado: "O cliente usou o arquivo errado na camiseta, e as cores saíram diferentes.",
        pontos: { pessoas: 1 }
      }
    ]
  }
]);
