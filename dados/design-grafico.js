/*
  Profissão: Design Gráfico
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "design-grafico",
  nome: "Design Gráfico",
  icone: "🎨",
  cor: "#db2777",
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
    "Tecnólogo em Design Gráfico — de 2 a 3 anos",
    "Bacharelado em Design — cerca de 4 anos",
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
          pontos: { organizacao: 1 }
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
          texto: "Faço o que ele pede sem questionar, mesmo que fique feio.",
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
          texto: "Fico chateado(a) e passo a tarde sem falar com ninguém.",
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
          texto: "Agradeço, peço exemplos do que não funciona e refaço testando outras combinações de cor.",
          reacao: "olha só! assim sim. isso ficou muito melhor 🔥",
          resultado: "A nova versão tinha mais contraste e ficou clara. O diretor aprovou de primeira.",
          pontos: { criatividade: 2, logica: 1, pessoas: 1 }
        },
        {
          texto: "Refaço sem perguntar nada, mudando só a cor de fundo.",
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
        "Modo de cor: RGB",
        "Margem de segurança: 3 mm",
        "Fontes convertidas em curvas"
      ],
      correta: 2,
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
          pontos: { criatividade: 2, pressao: 2, organizacao: 1 }
        },
        {
          texto: "Peço ajuda a um colega para brincarmos de ideias em dupla.",
          reacao: "bora! vamos juntar o que cada um tem 💡",
          resultado: "Vocês montaram duas ideias interessantes em 20 minutos.",
          pontos: { pessoas: 1, criatividade: 1, pressao: 1 }
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
          texto: "Faço igualzinho: o cliente é quem paga.",
          reacao: "que ótimo! tá igualzinho mesmo 😁",
          resultado: "A concorrente notificou o cliente por plágio e você acabou envolvido(a) na confusão.",
          pontos: {}
        },
        {
          texto: "Recuso e digo que é errado, sem oferecer outra opção.",
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
          texto: "Mando tudo num zip sem nome para o diretor organizar.",
          reacao: "ué, e eu que me viro agora? 😕",
          resultado: "O diretor perdeu uma hora organizando o que você deixou bagunçado.",
          pontos: { pessoas: 1 }
        }
      ]
    }
  ]
});
