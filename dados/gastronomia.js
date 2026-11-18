/*
  Profissão: Gastronomia
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "gastronomia",
  nome: "Gastronomia",
  icone: "👩‍🍳",
  cor: "#0a2472",
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
        "Preparado em: 14/03, às 9h",
        "Validade: 16/03",
        "Conservação: em temperatura ambiente",
        "Responsável: Lúcia"
      ],
      correta: 3,
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
