/*
  Profissão: Gastronomia
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "gastronomia",
  nome: "Gastronomia",
  icone: "👩‍🍳",
  cor: "#0d1b3d",
  area: "criativas",
  resumo: "Criar e preparar pratos numa cozinha profissional, com sabor, higiene e muita agilidade.",

  perfil: {
    pessoas: {
      peso: 3,
      gostar: "Trabalhar em equipe na cozinha e ver o cliente feliz com o prato.",
      dificil: "Gritos na hora do pico, clientes exigentes e uma equipe que precisa funcionar como relógio."
    },
    logica: {
      peso: 2,
      gostar: "Calcular receitas, porções e custos para o prato dar certo e dar lucro.",
      dificil: "Contas de custo, estoque e rendimento todos os dias, além de cozinhar."
    },
    pressao: {
      peso: 5,
      gostar: "A adrenalina de dezenas de pedidos saindo ao mesmo tempo, bem feitos.",
      dificil: "Calor, horas em pé, trabalho nos fins de semana e feriados, quando os outros estão de folga."
    },
    organizacao: {
      peso: 4,
      gostar: "Deixar tudo no lugar antes do serviço e ver a cozinha funcionar sem tropeços.",
      dificil: "Regras de higiene, etiquetas e validades que precisam ser seguidas à risca, sempre."
    },
    criatividade: {
      peso: 5,
      gostar: "Inventar pratos, combinar sabores e improvisar com o que tem.",
      dificil: "Criar dentro do custo e do tempo do serviço, e não só do que você gostaria."
    }
  },

  cursos: [
    "Tecnólogo em Gastronomia (cerca de 2 anos)",
    "Bacharelado em Gastronomia (cerca de 4 anos, em algumas faculdades)",
    "Cursos técnicos de cozinha e muita prática: boa parte dos chefs começou como auxiliar de cozinha"
  ],

  situacoes: [
    {
      horario: "07:30",
      titulo: "Tudo no lugar",
      cena: "🔪 🥕 📋",
      descricao: "O restaurante abre ao meio-dia e espera 120 pessoas no almoço. A lista de preparo é enorme.",
      conversa: [
        { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "bom dia, equipe! 🔪" },
        { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "lista de hoje: fundo de carne, arroz, legumes, molho, farofa e duas sobremesas" },
        { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "meio-dia em ponto a porta abre. bora! ⏰" }
      ],
      naVidaReal: "Na cozinha profissional, \"mise en place\" (do francês, \"tudo no lugar\") é deixar ingredientes cortados, medidos e organizados antes do serviço. Começar pelo que demora mais, como caldos e assados, faz tudo ficar pronto ao mesmo tempo.",
      opcoes: [
        {
          texto: "Leio a lista toda, divido as tarefas pelo tempo de preparo e começo pelo que demora mais.",
          reacao: "isso! o fundo já tá no fogo às 7h40? perfeito 👌",
          resultado: "Ao meio-dia estava tudo pronto e no lugar, e ainda sobrou tempo para provar os temperos.",
          pontos: { organizacao: 2, pressao: 1 }
        },
        {
          texto: "Começo pela sobremesa, que é a parte mais rápida.",
          reacao: "hmm, e o fundo que leva 4 horas? 😬",
          resultado: "A sobremesa ficou linda, mas o fundo de carne não ficou pronto a tempo.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Monto uma planilha com o tempo exato de cada tarefa antes de começar.",
          reacao: "ficou bonita... mas já são 9h e nada no fogo 😅",
          resultado: "O plano estava ótimo, mas a cozinha começou atrasada e precisou correr.",
          pontos: { logica: 2 }
        },
        {
          texto: "Espero o chef dizer o que fazer primeiro.",
          reacao: "eu tenho mais 5 pessoas pra orientar, viu? 😤",
          resultado: "Você perdeu meia hora parado(a), e o chef passou a te passar só tarefas simples.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "09:30",
      titulo: "Receita para 40 pessoas",
      cena: "🍅 ⚖️ 🧮",
      conversa: [
        { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "fecharam um evento pra 40 pessoas hoje à noite 🎉" },
        { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "a ficha do molho é pra 8 porções e usa 1,5 kg de tomate. quanto tomate eu peço?" }
      ],
      pergunta: "A receita rende 8 porções com 1,5 kg de tomate. Quanto tomate é preciso para 40 porções?",
      alternativas: ["6 kg", "7,5 kg", "9 kg", "12 kg"],
      correta: 1,
      explicacao: "40 porções são 5 vezes a receita (40 ÷ 8 = 5). Então são 5 × 1,5 kg = 7,5 kg de tomate. Cozinhas profissionais usam fichas técnicas com as quantidades exatas para multiplicar receitas sem desperdício e sem faltar comida.",
      traco: "logica"
    },
    {
      horario: "10:30",
      titulo: "O peixe não chegou",
      cena: "🐟 🚚 ❌",
      descricao: "O prato do dia é moqueca, mas o fornecedor avisa que o peixe não vai chegar.",
      conversa: [
        { quem: "Seu Zé, fornecedor", avatar: "👴🏼", fala: "bom dia! más notícias 😔" },
        { quem: "Seu Zé, fornecedor", avatar: "👴🏼", fala: "o barco não saiu por causa do mar agitado. hoje não tem peixe" },
        { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "e agora? a moqueca já tá no quadro do cardápio 😩" }
      ],
      naVidaReal: "Improvisar com o que tem no estoque faz parte da rotina de qualquer cozinha. Mas comprar alimentos sem nota e sem procedência coloca a segurança dos clientes em risco e pode gerar multa da vigilância sanitária.",
      opcoes: [
        {
          texto: "Adapto o prato com o que tem no estoque, como uma moqueca de banana-da-terra com palmito.",
          reacao: "boa!! fica linda e ainda atende quem não come peixe 🍌",
          resultado: "A moqueca vegetariana foi o prato mais pedido do dia.",
          pontos: { criatividade: 2, pressao: 1 }
        },
        {
          texto: "Tiro o prato do cardápio sem avisar ninguém.",
          reacao: "o salão tá oferecendo moqueca pros clientes 😬",
          resultado: "Os garçons ofereceram um prato que não existia, e vários clientes ficaram irritados.",
          pontos: {}
        },
        {
          texto: "Compro peixe numa barraca da esquina, sem nota e sem saber de onde veio.",
          reacao: "hmm, esse peixe tá com um cheiro estranho... 🤢",
          resultado: "O peixe não estava fresco e precisou ir para o lixo, além do risco que você correu.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Ligo para o fornecedor, reclamo do atraso e espero para ver se o peixe chega.",
          reacao: "já falei que não tem barco hoje 😅",
          resultado: "O peixe não chegou, e o problema continuou sem solução até a hora do almoço.",
          pontos: { organizacao: 1 }
        }
      ]
    },
    {
      horario: "12:15",
      titulo: "Hora do pico",
      urgente: true,
      cena: "🔥 🧾 😵",
      descricao: "O salão lotou de uma vez. As comandas não param de chegar.",
      conversa: [
        { quem: "Téo, garçom", avatar: "🧑🏻", fala: "SAINDO MAIS 6 COMANDAS 🧾🧾🧾" },
        { quem: "Téo, garçom", avatar: "🧑🏻", fala: "a mesa 4 tá esperando há 25 minutos e já reclamou duas vezes" },
        { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "a chapa tá atrasada! cadê os filés? 🔥" }
      ],
      naVidaReal: "Na hora do pico, a cozinha funciona como uma brigada: cada pessoa tem uma estação e a comunicação é em voz alta e curta (\"sim, chef!\"). Organizar os pedidos por mesa e tempo de preparo faz os pratos de uma mesma mesa saírem juntos.",
      opcoes: [
        {
          texto: "Saio da cozinha para respirar um pouco.",
          reacao: "VOLTA AQUI 😱",
          resultado: "Sem você, a fila de pedidos dobrou, e duas mesas foram embora sem comer.",
          pontos: {}
        },
        {
          texto: "Mando os pratos o mais rápido possível, sem conferir a montagem.",
          reacao: "a mesa 4 recebeu o filé sem o molho 😬",
          resultado: "Os pedidos andaram, mas três pratos voltaram para a cozinha com erros.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Organizo as comandas por mesa e tempo de preparo e peço para a Lúcia me ajudar na chapa.",
          reacao: "SIM, CHEF! 🙌 tô na chapa contigo",
          resultado: "Em 15 minutos a fila voltou ao normal, e a mesa 4 recebeu tudo junto e quentinho.",
          pontos: { pressao: 2, organizacao: 1, pessoas: 1 }
        },
        {
          texto: "Paro tudo para recalcular no papel o tempo de cada prato.",
          reacao: "não dá tempo pra conta agora!! 😵",
          resultado: "Enquanto você fazia contas, as comandas se acumularam ainda mais.",
          pontos: { logica: 1 }
        }
      ]
    },
    {
      horario: "14:00",
      titulo: "Cliente com alergia",
      cena: "🦐 ⚠️ 🍽️",
      descricao: "Um cliente pediu o risoto, mas tem alergia a camarão. O caldo do risoto leva camarão.",
      conversa: [
        { quem: "Téo, garçom", avatar: "🧑🏻", fala: "chef, o cliente da mesa 7 tem alergia FORTE a camarão 🦐" },
        { quem: "Téo, garçom", avatar: "🧑🏻", fala: "ele quer muito o risoto. dá pra fazer?" }
      ],
      naVidaReal: "Alergias alimentares podem causar reações graves, como a anafilaxia. Não basta tirar o ingrediente de cima do prato: restos no caldo, na panela ou nos utensílios já podem causar reação. Isso se chama contaminação cruzada.",
      opcoes: [
        {
          texto: "Tiro os camarões de cima do risoto e mando para a mesa.",
          reacao: "mas o caldo é de camarão... 😨",
          resultado: "O cliente teve uma reação alérgica e precisou de atendimento médico.",
          pontos: {}
        },
        {
          texto: "Faço uma versão com caldo de legumes, em panela e utensílios separados, e confirmo os ingredientes com o garçom.",
          reacao: "ele amou e agradeceu o cuidado! 🙏",
          resultado: "O cliente comeu tranquilo e virou frequentador do restaurante.",
          pontos: { organizacao: 2, pessoas: 1, criatividade: 1 }
        },
        {
          texto: "Peço para o garçom dizer que não dá para mudar nada.",
          reacao: "ele ficou chateado e pediu só uma salada 😕",
          resultado: "Não houve risco, mas o cliente saiu frustrado.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Invento um prato novo na hora, sem conferir o que vai em cada preparo.",
          reacao: "ficou bonito! mas e o tempero, levou o quê? 🤔",
          resultado: "Por sorte, nada do prato tinha camarão, mas ninguém tinha certeza disso.",
          pontos: { criatividade: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "15:30",
      titulo: "Confira a etiqueta",
      cena: "🏷️ 🧊 🔍",
      conversa: [
        { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "a vigilância sanitária costuma aparecer sem avisar 👀" },
        { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "dá uma olhada nessa etiqueta do frango que deixaram separado. tem coisa errada" }
      ],
      pergunta: "Toque na informação errada da etiqueta:",
      linhas: [
        "Produto: frango cru em cubos",
        "Conservação: em temperatura ambiente",
        "Preparado em: 14/03, às 9h",
        "Validade: 16/03",
        "Responsável: Lúcia"
      ],
      correta: 1,
      explicacao: "Carne crua precisa ficar na geladeira (até cerca de 4 °C) ou no freezer. Em temperatura ambiente, as bactérias se multiplicam rápido. Em cozinhas profissionais, tudo o que é guardado leva etiqueta com o nome, a data de preparo, a validade, a forma de conservação e o responsável.",
      traco: "organizacao"
    },
    {
      horario: "16:30",
      titulo: "Prato novo para o festival",
      cena: "💡 🥘 💰",
      descricao: "O restaurante vai participar de um festival gastronômico e o chef quer um prato inédito.",
      conversa: [
        { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "quero um prato seu no festival do mês que vem 🏆" },
        { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "só uma regra: tem que custar no máximo 15 reais pra gente fazer" },
        { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "me mostra uma ideia até sexta 👀" }
      ],
      naVidaReal: "Criar um prato não é só sabor: ele precisa caber no custo e no tempo do serviço. Restaurantes calculam o custo de cada prato numa ficha técnica e usam ingredientes da estação, que são mais baratos e saborosos.",
      opcoes: [
        {
          texto: "Copio um prato famoso de um chef da televisão.",
          reacao: "esse eu já vi no programa ontem... 🤨",
          resultado: "O chef reconheceu a receita e pediu algo com a cara do restaurante.",
          pontos: { logica: 1 }
        },
        {
          texto: "Pesquiso ingredientes da estação, testo três versões pequenas e calculo o custo da melhor.",
          reacao: "abóbora assada com queijo coalho e mel? custando 11 reais? APROVADO 🤩",
          resultado: "O prato foi um dos mais elogiados do festival e entrou para o cardápio fixo.",
          pontos: { criatividade: 2, organizacao: 1, logica: 1 }
        },
        {
          texto: "Faço uma receita incrível, com ingredientes importados e caros.",
          reacao: "lindo! custando 60 reais pra gente fazer? 😳",
          resultado: "O prato era delicioso, mas ficou caro demais para entrar no festival.",
          pontos: { criatividade: 1 }
        },
        {
          texto: "Digo que não tenho ideias e sugiro fazer o prato de sempre.",
          reacao: "poxa, eu contava com você... 😕",
          resultado: "O restaurante levou o prato de sempre, e outra pessoa da equipe ganhou a chance.",
          pontos: {}
        }
      ]
    },
    {
      horario: "19:00",
      titulo: "Fogo na frigideira",
      urgente: true,
      cena: "🔥 🍳 😱",
      descricao: "No serviço do jantar, o óleo de uma frigideira pega fogo na sua frente.",
      conversa: [
        { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "FOGO NA SUA FRIGIDEIRA!! 🔥🔥" },
        { quem: "Téo, garçom", avatar: "🧑🏻", fala: "a chama tá subindo!! 😱" }
      ],
      naVidaReal: "Fogo em óleo nunca se apaga com água: a água afunda, vira vapor na hora e espalha o óleo em chamas. O certo é desligar o fogo e abafar com uma tampa ou um pano úmido, ou usar o extintor próprio para gordura de cozinha (classe K).",
      opcoes: [
        {
          texto: "Desligo o fogo e abafo a frigideira com uma tampa.",
          reacao: "ufa... apagou na hora 😮‍💨",
          resultado: "Sem oxigênio, o fogo apagou em segundos, e o serviço continuou depois de um susto.",
          pontos: { pressao: 2, logica: 1 }
        },
        {
          texto: "Jogo um copo de água para apagar rápido.",
          reacao: "NÃÃÃO!! 💥",
          resultado: "O óleo espirrou em chamas, e por pouco ninguém se queimou. O extintor precisou ser usado.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Saio correndo da cozinha.",
          reacao: "e a frigideira?? 😱",
          resultado: "A Lúcia teve que apagar o fogo sozinha, e o chef ficou bravo com você.",
          pontos: {}
        },
        {
          texto: "Grito para todos se afastarem e espero o fogo apagar sozinho.",
          reacao: "não vai apagar sozinho!! tem óleo de sobra aí 😬",
          resultado: "O fogo cresceu até alguém usar o extintor, e a cozinha parou por meia hora.",
          pontos: { pessoas: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("gastronomia", [
  {
    horario: "07:30",
    titulo: "Chegou a mercadoria",
    cena: "📦 🥩 🧊",
    descricao: "O fornecedor deixou 200 quilos de mercadoria na porta da cozinha: carnes, laticínios, verduras e secos.",
    conversa: [
      { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "chegou a entrega da semana 📦" },
      { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "confere e guarda tudo, que o calor tá forte hoje ☀️" }
    ],
    naVidaReal: "Receber mercadoria é uma tarefa de segurança alimentar: conferir temperatura, validade e peso, e guardar primeiro o que é perecível. Na organização do estoque vale a regra \"primeiro que vence, primeiro que sai\".",
    opcoes: [
      {
        texto: "Confiro peso e validade, guardo primeiro carnes e laticínios e coloco na frente o que vence antes.",
        reacao: "isso! carne fora da geladeira com esse calor é perigo 👌",
        resultado: "Tudo foi guardado em 30 minutos, e nada estragou na semana.",
        pontos: { organizacao: 2, pressao: 1 }
      },
      {
        texto: "Já começo a testar uma receita nova com os ingredientes que chegaram.",
        reacao: "e as carnes no sol?? 😱",
        resultado: "A receita ficou boa, mas parte do queijo e da carne esquentou demais e precisou ir para o lixo.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Monto uma planilha de custo por grama antes de guardar qualquer coisa.",
        reacao: "a planilha pode esperar, a carne não 😬",
        resultado: "A planilha ficou ótima, mas as carnes passaram uma hora fora da refrigeração.",
        pontos: { logica: 2 }
      },
      {
        texto: "Deixo as caixas no chão para guardar depois.",
        reacao: "caixa no chão da cozinha?? 😤",
        resultado: "Os produtos esquentaram, e a cozinha ficou desorganizada para o almoço.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "09:30",
    titulo: "Preço do prato",
    cena: "🍝 💰 🧮",
    conversa: [
      { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "os ingredientes do nosso risoto custam 12 reais 💰" },
      { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "a gente quer que o custo seja 30% do preço. por quanto vende?" }
    ],
    pergunta: "Se o custo dos ingredientes (R$ 12) deve ser 30% do preço de venda, qual é o preço?",
    alternativas: ["R$ 15,60", "R$ 36,00", "R$ 40,00", "R$ 48,00"],
    correta: 2,
    explicacao: "Se 30% do preço são R$ 12, o preço inteiro é 12 ÷ 0,30 = R$ 40. Os outros 70% pagam salários, aluguel, gás, impostos e o lucro. Calcular o custo de cada prato é parte do trabalho de quem cozinha profissionalmente.",
    traco: "logica"
  },
  {
    horario: "10:30",
    titulo: "O forno quebrou",
    cena: "🔥 🚫 🍗",
    descricao: "O forno combinado parou de funcionar, e metade do cardápio do almoço depende dele.",
    conversa: [
      { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "o forno morreu 😩 e o frango assado é o prato do dia!" },
      { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "o técnico só vem à tarde. pensa rápido!" }
    ],
    naVidaReal: "Equipamentos quebram, e a cozinha não pode parar. Cozinheiros experientes adaptam técnicas e cardápios com o que está funcionando, sem colocar em risco a segurança de ninguém.",
    opcoes: [
      {
        texto: "Adapto o cardápio para fogão e chapa, como um frango de panela com legumes no lugar do assado.",
        reacao: "frango de panela? ficou com gosto de comida de vó 😍",
        resultado: "O prato adaptado esgotou antes das 13h.",
        pontos: { criatividade: 2, pressao: 1 }
      },
      {
        texto: "Tiro metade do cardápio sem avisar o salão.",
        reacao: "os garçons tão oferecendo frango assado! 😬",
        resultado: "Os garçons ofereceram pratos que não existiam, e vários clientes ficaram irritados.",
        pontos: {}
      },
      {
        texto: "Tento consertar o forno sozinho(a), mexendo na parte do gás.",
        reacao: "NÃO mexe no gás!! 😱",
        resultado: "Você não consertou nada e ainda correu um risco sério.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Ligo para a assistência técnica e espero o técnico chegar.",
        reacao: "e o almoço enquanto isso? 😕",
        resultado: "O técnico chegou às 15h, e o almoço saiu com metade dos pratos.",
        pontos: { organizacao: 1 }
      }
    ]
  },
  {
    horario: "12:15",
    titulo: "Corte no meio do pico",
    urgente: true,
    cena: "🔪 🩸 🧾",
    descricao: "No meio do almoço lotado, um cozinheiro corta o dedo feio na sua bancada.",
    conversa: [
      { quem: "Téo, cozinheiro", avatar: "🧑🏻", fala: "ai!! me cortei 😣" },
      { quem: "Téo, cozinheiro", avatar: "🧑🏻", fala: "tá sangrando bastante... e tem 8 comandas na minha estação" }
    ],
    naVidaReal: "Acidentes com facas e queimaduras são comuns em cozinhas. Além de cuidar de quem se machucou, é preciso descartar alimentos que tiveram contato com sangue e reorganizar a equipe para o serviço continuar.",
    opcoes: [
      {
        texto: "Continuo montando os pratos: o salão está lotado.",
        reacao: "e eu? 😣",
        resultado: "O Téo ficou sem ajuda, e um prato da bancada contaminada quase saiu para o salão.",
        pontos: {}
      },
      {
        texto: "Enrolo o dedo dele num pano e mando voltar para a bancada.",
        reacao: "tá... mas continua sangrando 😓",
        resultado: "O corte abriu de novo, e ele precisou ir ao pronto-socorro depois.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Levo ele para lavar e proteger o corte, chamo alguém para a estação dele, descarto o que foi contaminado e reorganizo os pedidos.",
        reacao: "SIM, CHEF! eu assumo a estação do Téo 💪",
        resultado: "O Téo foi bem cuidado, nada contaminado saiu da cozinha e o serviço atrasou só cinco minutos.",
        pontos: { pressao: 2, organizacao: 1, pessoas: 1 }
      },
      {
        texto: "Paro para calcular quantos pratos vão atrasar.",
        reacao: "não é hora de conta!! 😵",
        resultado: "Enquanto você calculava, ninguém cuidou do Téo nem da estação dele.",
        pontos: { logica: 1 }
      }
    ]
  },
  {
    horario: "14:00",
    titulo: "Sem glúten de verdade",
    cena: "🌾 ⚠️ 🍽️",
    descricao: "Uma cliente com doença celíaca pergunta se pode comer o nhoque da casa.",
    conversa: [
      { quem: "Téo, garçom", avatar: "🧑🏻", fala: "a moça da mesa 9 tem doença celíaca 🌾" },
      { quem: "Téo, garçom", avatar: "🧑🏻", fala: "ela disse que até farinha na tábua faz ela passar mal. dá pra fazer?" }
    ],
    naVidaReal: "Para quem tem doença celíaca, até traços de glúten, como farinha em uma tábua ou numa panela, podem fazer mal. Cozinhas sérias separam utensílios e superfícies e conferem os rótulos de cada ingrediente.",
    opcoes: [
      {
        texto: "Faço o nhoque normal, mas com menos farinha.",
        reacao: "menos farinha ainda é farinha... 😨",
        resultado: "A cliente passou mal à noite e escreveu uma avaliação negativa.",
        pontos: {}
      },
      {
        texto: "Preparo uma versão sem glúten, com utensílios e superfícies limpos, confiro os rótulos e aviso o garçom.",
        reacao: "ela disse que nunca comeu um nhoque tão bom sem medo 🥹",
        resultado: "A cliente virou frequentadora e indicou o restaurante para outros celíacos.",
        pontos: { organizacao: 2, pessoas: 1, criatividade: 1 }
      },
      {
        texto: "Peço para o garçom dizer que a cozinha não garante nada sem glúten.",
        reacao: "ela pediu só uma salada 😕",
        resultado: "Não houve risco, mas a cliente saiu frustrada.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Invento uma farinha alternativa na hora, sem conferir os rótulos.",
        reacao: "ficou gostoso! mas essa farinha tinha o quê? 🤔",
        resultado: "Por sorte não tinha glúten, mas ninguém tinha certeza disso.",
        pontos: { criatividade: 1 }
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "15:30",
    titulo: "Temperaturas da cozinha",
    cena: "🌡️ 🍲 🔍",
    conversa: [
      { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "anotei as temperaturas da cozinha 🌡️" },
      { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "uma delas tá na zona de perigo. qual?" }
    ],
    pergunta: "Toque na temperatura que está errada:",
    linhas: [
      "Molho quente no balcão de servir: 30 °C",
      "Geladeira de carnes: 3 °C",
      "Freezer: -18 °C",
      "Salada no balcão refrigerado: 5 °C",
      "Óleo da fritadeira: 180 °C"
    ],
    correta: 0,
    explicacao: "Entre cerca de 5 °C e 60 °C fica a \"zona de perigo\", em que as bactérias se multiplicam rápido. Comida quente servida no balcão precisa ficar acima de 60 °C; a 30 °C, o molho pode fazer mal a quem comer.",
    traco: "organizacao"
  },
  {
    horario: "16:30",
    titulo: "Prato executivo barato",
    cena: "💡 🥕 💰",
    descricao: "O restaurante quer lançar um prato executivo de 25 reais, que dê lucro e seja gostoso.",
    conversa: [
      { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "a concorrência tá com executivo a 25 reais 😬" },
      { quem: "Chef Rodrigo", avatar: "👨🏽‍🍳", fala: "quero um nosso, gostoso e que dê lucro. topa criar?" }
    ],
    naVidaReal: "Criar pratos com preço baixo exige técnica: ingredientes da estação, aproveitamento integral (talos, cascas e sobras bem conservadas) e uma ficha técnica com o custo exato de cada porção.",
    opcoes: [
      {
        texto: "Copio o prato executivo do restaurante vizinho.",
        reacao: "esse eu já comi ali do lado 🤨",
        resultado: "O prato vendeu pouco, porque não tinha nada de diferente.",
        pontos: { logica: 1 }
      },
      {
        texto: "Uso ingredientes da estação e aproveitamento integral, testo três versões e calculo a ficha técnica.",
        reacao: "arroz de talos com frango e farofa de casca? e custa 8 reais? 🤩",
        resultado: "O executivo virou o prato mais vendido do almoço.",
        pontos: { criatividade: 2, organizacao: 1, logica: 1 }
      },
      {
        texto: "Crio um prato sofisticado, mesmo que o custo passe do preço.",
        reacao: "lindo... mas a gente perde dinheiro em cada prato 💸",
        resultado: "O prato era delicioso, mas não podia ser vendido por 25 reais.",
        pontos: { criatividade: 1 }
      },
      {
        texto: "Digo que não dá para fazer algo barato e gostoso.",
        reacao: "poxa, eu contava com você 😕",
        resultado: "Outra pessoa da equipe criou o prato.",
        pontos: {}
      }
    ]
  },
  {
    horario: "19:00",
    titulo: "Cheiro de gás",
    urgente: true,
    cena: "💨 🔥 ⚠️",
    descricao: "No começo do jantar, um cheiro forte de gás toma conta da cozinha.",
    conversa: [
      { quem: "Lúcia, subchefe", avatar: "👩🏿‍🍳", fala: "tá sentindo esse cheiro?? 😨" },
      { quem: "Téo, cozinheiro", avatar: "🧑🏻", fala: "é gás! tá forte perto do fogão!" }
    ],
    naVidaReal: "Com cheiro de gás, o certo é fechar o registro, abrir portas e janelas, não acender nem apagar luzes ou aparelhos elétricos (uma faísca pode causar explosão) e tirar as pessoas do local antes de chamar os bombeiros ou a companhia de gás.",
    opcoes: [
      {
        texto: "Fecho o registro do gás, abro as janelas, não mexo em nada elétrico e tiro todos da cozinha.",
        reacao: "todo mundo fora! já liguei pros bombeiros 📞",
        resultado: "Uma mangueira estava rachada. Sem faíscas, ninguém se machucou.",
        pontos: { pressao: 2, logica: 1 }
      },
      {
        texto: "Procuro o vazamento com um isqueiro aceso.",
        reacao: "NÃÃÃO!! 😱",
        resultado: "Por sorte o gás ainda estava fraco, mas você quase causou uma explosão.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Continuo cozinhando: deve ser impressão.",
        reacao: "não é impressão!! 😰",
        resultado: "O cheiro aumentou, e a equipe teve que sair às pressas.",
        pontos: {}
      },
      {
        texto: "Aviso o pessoal e espero alguém resolver.",
        reacao: "alguém quem?? 😬",
        resultado: "Minutos se passaram até alguém fechar o registro do gás.",
        pontos: { pessoas: 1 }
      }
    ]
  }
]);
