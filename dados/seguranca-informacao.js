/*
  Profissão: Segurança da Informação
  (os campos estão explicados em dados/enfermagem.js)
*/

PROFISSOES.push({
  id: "seguranca-informacao",
  nome: "Segurança da Informação",
  icone: "🔐",
  cor: "#2747d6",
  area: "tecnologia",
  resumo: "Proteger sistemas e dados de uma empresa contra golpes, invasões e vazamentos.",

  perfil: {
    pessoas: {
      peso: 2,
      gostar: "Ensinar as pessoas a se protegerem de golpes.",
      dificil: "Convencer colegas e chefes a seguir regras de segurança que eles acham chatas."
    },
    logica: {
      peso: 5,
      gostar: "Investigar alertas e descobrir como um ataque aconteceu, como num quebra-cabeça.",
      dificil: "Estudar o tempo todo: as tecnologias e os golpes mudam toda semana."
    },
    pressao: {
      peso: 5,
      gostar: "Agir rápido e com calma quando um ataque está acontecendo.",
      dificil: "Incidentes acontecem a qualquer hora, inclusive de madrugada e no fim de semana."
    },
    organizacao: {
      peso: 4,
      gostar: "Seguir planos de resposta e documentar tudo com cuidado.",
      dificil: "Muitas regras, normas e relatórios: um detalhe esquecido pode virar uma brecha."
    },
    criatividade: {
      peso: 3,
      gostar: "Pensar como um atacante para achar falhas antes dele.",
      dificil: "Os golpistas também são criativos, e você precisa estar sempre um passo à frente."
    }
  },

  cursos: [
    "Tecnólogo em Segurança da Informação (de 2 a 3 anos)",
    "Bacharelado em Ciência da Computação, Sistemas de Informação ou Engenharia de Computação (de 4 a 5 anos)",
    "Certificações da área e competições de segurança (CTF) ajudam muito a conseguir o primeiro emprego"
  ],

  situacoes: [
    {
      horario: "08:30",
      titulo: "Alerta da madrugada",
      cena: "🚨 🌙 💻",
      descricao: "Você chega ao centro de monitoramento de segurança e encontra um alerta da noite anterior.",
      conversa: [
        { quem: "Diego, analista júnior", avatar: "👨🏻‍💻", fala: "bom dia! ☕ olha isso aqui" },
        { quem: "Diego, analista júnior", avatar: "👨🏻‍💻", fala: "entre 2h e 4h da manhã teve 300 tentativas de login na conta de administrador do sistema de vendas" },
        { quem: "Diego, analista júnior", avatar: "👨🏻‍💻", fala: "tudo vindo de outro país 🌎 deve ser nada, né?" }
      ],
      naVidaReal: "Muitas tentativas seguidas de senha numa mesma conta é sinal de ataque de força bruta. Analistas de segurança investigam alertas assim o dia todo. A verificação em duas etapas impede a maioria das invasões por senha roubada.",
      opcoes: [
        {
          texto: "Apago o alerta: se ninguém entrou, não aconteceu nada.",
          reacao: "beleza, menos um alerta na fila 👍",
          resultado: "Uma semana depois, o atacante voltou com a senha certa, que tinha vazado em outro site.",
          pontos: {}
        },
        {
          texto: "Confiro se alguma tentativa deu certo, bloqueio a origem e ativo a verificação em duas etapas nessa conta.",
          reacao: "boa, nenhuma entrou! e agora nem com a senha certa eles entram 💪",
          resultado: "A conta ficou protegida, e o registro da investigação ajudou a bloquear o mesmo atacante em outros sistemas.",
          pontos: { logica: 2, pressao: 1, organizacao: 1 }
        },
        {
          texto: "Desativo a conta de administrador na hora, sem avisar ninguém.",
          reacao: "eita, o pessoal de vendas não consegue mais trabalhar 😬",
          resultado: "A conta ficou segura, mas o sistema de vendas parou por duas horas e ninguém sabia por quê.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Mando um e-mail para a empresa toda trocar a senha agora.",
          reacao: "meu Deus, a caixa de entrada do suporte explodiu 📩",
          resultado: "Quinhentas pessoas trocaram a senha sem entender o motivo, e a conta atacada continuou sem proteção extra.",
          pontos: { pessoas: 1 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "10:00",
      titulo: "Ache o golpe no e-mail",
      cena: "🎣 📧 🔍",
      conversa: [
        { quem: "Júlia, do RH", avatar: "👩🏻‍🦰", fala: "oi! recebi esse e-mail e quase cliquei 😳" },
        { quem: "Júlia, do RH", avatar: "👩🏻‍🦰", fala: "parece da empresa mesmo... é golpe?" }
      ],
      pergunta: "Toque na linha que mostra que este e-mail é golpe:",
      linhas: [
        "De: TI Lojas Aurora <ti@lojasaurora.com.br>",
        "Assunto: Mudança no sistema de ponto",
        "Olá! O sistema de ponto muda na segunda-feira.",
        "Para continuar registrando, acesse: lojasaurora.com.br.novo-ponto.xyz/login",
        "Dúvidas? Fale com o ramal 2040."
      ],
      correta: 3,
      explicacao: "Num endereço, o que vale é o final do nome, logo antes da primeira barra: aqui é \"novo-ponto.xyz\", e não o site da empresa. Golpistas colocam o nome da empresa no começo para enganar. Antes de clicar, passe o mouse ou segure o dedo no link para ver para onde ele leva.",
      traco: "logica"
    },
    {
      horario: "11:00",
      titulo: "Arquivos sequestrados",
      urgente: true,
      cena: "💀 🔒 💻",
      descricao: "Um computador do financeiro mostra uma tela pedindo dinheiro para devolver os arquivos.",
      conversa: [
        { quem: "Paulo, do financeiro", avatar: "👨🏽", fala: "SOCORRO 😱 meus arquivos viraram tudo .locked" },
        { quem: "Paulo, do financeiro", avatar: "👨🏽", fala: "apareceu uma caveira pedindo pagamento em criptomoeda em 48 horas 💀" },
        { quem: "Paulo, do financeiro", avatar: "👨🏽", fala: "e a pasta compartilhada do setor tá ficando estranha também..." }
      ],
      naVidaReal: "Isso é um ransomware, um programa que sequestra arquivos. Tirar o computador da rede na hora impede que ele se espalhe. Pagar o resgate não garante a devolução dos arquivos e financia o crime: a melhor defesa são cópias de segurança (backups) testadas.",
      opcoes: [
        {
          texto: "Tiro o computador da rede na hora, aviso a coordenação e sigo o plano de resposta a incidentes.",
          reacao: "isolado! a pasta compartilhada parou de mudar 😮‍💨",
          resultado: "Só um computador foi afetado, e os arquivos voltaram do backup da noite anterior.",
          pontos: { pressao: 2, organizacao: 2, logica: 1 }
        },
        {
          texto: "Autorizo pagar o resgate para recuperar os arquivos logo.",
          reacao: "pagamos... e eles pediram o dobro 😰",
          resultado: "Os criminosos pediram mais dinheiro, e enquanto isso o ataque chegou a outros computadores.",
          pontos: { pessoas: 1, pressao: 1 }
        },
        {
          texto: "Tento quebrar a criptografia sozinho(a) antes de fazer qualquer coisa.",
          reacao: "enquanto isso a pasta do RH também travou... 😱",
          resultado: "Você não conseguiu quebrar a criptografia, e o ataque se espalhou por mais três setores.",
          pontos: { logica: 1, criatividade: 1 }
        },
        {
          texto: "Espero o fim do dia para ver se o problema some sozinho.",
          reacao: "não sumiu. agora são 40 computadores 💀",
          resultado: "O ransomware se espalhou pela rede, e a empresa ficou dois dias parada.",
          pontos: {}
        }
      ]
    },
    {
      horario: "13:30",
      titulo: "O diretor quer exceção",
      cena: "👔 📱 🙄",
      descricao: "O diretor financeiro liga irritado com a verificação em duas etapas.",
      conversa: [
        { quem: "Seu Valdir, diretor financeiro", avatar: "👨🏼‍🦳", fala: "olha, esse negócio de código no celular toda hora é muito chato" },
        { quem: "Seu Valdir, diretor financeiro", avatar: "👨🏼‍🦳", fala: "tira isso da minha conta. eu sou diretor, ninguém vai querer me hackear 🙄" }
      ],
      naVidaReal: "Contas de diretores são das mais visadas, porque dão acesso a dinheiro e decisões. Quem trabalha com segurança precisa equilibrar proteção e praticidade, explicando o risco em vez de só dizer \"não\".",
      opcoes: [
        {
          texto: "Tiro a verificação: ele é o diretor.",
          reacao: "ótimo, assim que eu gosto 😌",
          resultado: "Dois meses depois, a conta dele foi invadida e usada para pedir uma transferência falsa.",
          pontos: {}
        },
        {
          texto: "Recuso de forma seca, citando o número da política de segurança.",
          reacao: "vou falar com o seu chefe 😠",
          resultado: "A regra ficou, mas o diretor passou a ver a equipe de segurança como inimiga.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Explico que contas de diretores são as mais atacadas e ofereço aprovar o acesso com um toque no app do celular.",
          reacao: "ah, um toque só? assim dá. e eu nem sabia disso 😮",
          resultado: "O diretor manteve a proteção e ainda pediu para você explicar isso para a diretoria toda.",
          pontos: { pessoas: 1, logica: 1, criatividade: 1, organizacao: 1 }
        },
        {
          texto: "Tiro a verificação só da conta dele, sem registrar, para ele ficar feliz.",
          reacao: "agora sim! valeu, hein 😁",
          resultado: "O diretor ficou feliz, mas uma brecha escondida apareceu na auditoria, e a responsabilidade foi sua.",
          pontos: { pessoas: 2 }
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "15:00",
      titulo: "Qual senha é mais forte?",
      cena: "🔑 🧠 🔢",
      conversa: [
        { quem: "Renata, coordenadora de segurança", avatar: "👩🏾‍💼", fala: "vou montar o material do treinamento e quero um exemplo de senha boa 🔑" },
        { quem: "Renata, coordenadora de segurança", avatar: "👩🏾‍💼", fala: "qual dessas você escolheria?" }
      ],
      pergunta: "Qual destas senhas é a mais difícil de descobrir?",
      alternativas: [
        "Aurora@2024",
        "P@ssw0rd!",
        "cavalo-nuvem-teclado-pipoca",
        "12345678Ab!"
      ],
      correta: 2,
      explicacao: "O tamanho conta mais do que os símbolos. Uma frase-senha com palavras aleatórias é longa, difícil de adivinhar e fácil de lembrar. Senhas com o nome da empresa e o ano, ou com trocas óbvias (a por @, o por 0), estão nas listas que os atacantes testam primeiro.",
      traco: "logica"
    },
    {
      horario: "16:00",
      titulo: "Dados à venda",
      urgente: true,
      cena: "🕵️ 📋 ⚖️",
      descricao: "Um fórum de hackers anuncia uma lista com dados de clientes da empresa.",
      conversa: [
        { quem: "Renata, coordenadora de segurança", avatar: "👩🏾‍💼", fala: "acabaram de me mandar isso 😨" },
        { quem: "Renata, coordenadora de segurança", avatar: "👩🏾‍💼", fala: "tão vendendo nome, CPF e e-mail de 20 mil clientes nossos num fórum" },
        { quem: "Renata, coordenadora de segurança", avatar: "👩🏾‍💼", fala: "preciso de um plano AGORA" }
      ],
      naVidaReal: "A LGPD (Lei Geral de Proteção de Dados) obriga a empresa a comunicar a ANPD e as pessoas afetadas quando um vazamento pode causar risco ou dano relevante. Esconder o problema pode gerar multas e deixa os clientes sem chance de se proteger de golpes.",
      opcoes: [
        {
          texto: "Fico quieto(a) para não manchar a imagem da empresa.",
          reacao: "e se os clientes começarem a cair em golpe? 😟",
          resultado: "Os clientes descobriram pela imprensa, e a empresa foi multada por esconder o vazamento.",
          pontos: {}
        },
        {
          texto: "Confirmo se os dados são nossos, descubro por onde vazaram, fecho a falha e aciono o jurídico para avisar a ANPD e os clientes.",
          reacao: "achei! foi um sistema antigo esquecido no ar. já desliguei 🔒",
          resultado: "A falha foi fechada no mesmo dia, e o aviso rápido ajudou os clientes a se protegerem de golpes.",
          pontos: { logica: 2, pressao: 2, organizacao: 1 }
        },
        {
          texto: "Posto nas redes da empresa que é tudo mentira.",
          reacao: "hmm, e se for verdade? 😬",
          resultado: "Os dados eram verdadeiros, e a negação pública virou um segundo escândalo.",
          pontos: { pessoas: 1, pressao: 1 }
        },
        {
          texto: "Tento negociar com o hacker para ele apagar os dados.",
          reacao: "ele aceitou o dinheiro... e continuou vendendo 🤡",
          resultado: "A empresa pagou, mas não havia como garantir nada, e os dados continuaram circulando.",
          pontos: { criatividade: 1, pressao: 1 }
        }
      ]
    },
    {
      horario: "17:00",
      titulo: "Treinamento contra golpes",
      cena: "🎣 👥 📚",
      descricao: "Depois do dia agitado, o RH pede um treinamento para os funcionários.",
      conversa: [
        { quem: "Júlia, do RH", avatar: "👩🏻‍🦰", fala: "depois de hoje, a diretoria quer um treinamento de segurança pra todo mundo 📚" },
        { quem: "Júlia, do RH", avatar: "👩🏻‍🦰", fala: "mas por favor, que não seja chato, porque da última vez metade dormiu 😴" }
      ],
      naVidaReal: "A maioria dos ataques começa enganando uma pessoa, e não quebrando um sistema. Por isso, equipes de segurança fazem simulações de golpe por e-mail e treinamentos curtos com exemplos reais.",
      opcoes: [
        {
          texto: "Mando um PDF de 40 páginas com todas as regras de segurança.",
          reacao: "ninguém vai ler isso, né 😅",
          resultado: "O PDF ficou completo, mas quase ninguém abriu.",
          pontos: { organizacao: 2 }
        },
        {
          texto: "Faço uma palestra técnica de uma hora sobre tipos de ataque.",
          reacao: "zzz... desculpa, o que é \"vetor de ataque\"? 😴",
          resultado: "O conteúdo estava certo, mas pouca gente entendeu.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Faço uma simulação de golpe por e-mail e depois um treino curto com os exemplos que enganaram mais gente.",
          reacao: "caí na simulação kkkk nunca mais clico sem olhar o link 😂",
          resultado: "Na simulação seguinte, o número de pessoas que clicaram no golpe caiu pela metade.",
          pontos: { criatividade: 2, pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Digo que treinar pessoas não é o meu trabalho.",
          reacao: "ué, mas quem vai fazer então? 😕",
          resultado: "Ninguém fez o treinamento, e um golpe parecido funcionou de novo um mês depois.",
          pontos: {}
        }
      ]
    },
    {
      horario: "18:30",
      titulo: "Relatório do incidente",
      cena: "📝 🕒 🌙",
      descricao: "O ataque da manhã foi contido. Falta registrar o que aconteceu.",
      conversa: [
        { quem: "Renata, coordenadora de segurança", avatar: "👩🏾‍💼", fala: "antes de ir: preciso do relatório do ransomware pra reunião de amanhã 📝" },
        { quem: "Renata, coordenadora de segurança", avatar: "👩🏾‍💼", fala: "a diretoria quer saber o que houve e como evitar da próxima vez" }
      ],
      naVidaReal: "Depois de um incidente, equipes fazem uma análise de \"lições aprendidas\": linha do tempo, causa, o que funcionou e o que melhorar. Procurar culpados faz as pessoas esconderem erros; entender a falha evita que ela se repita.",
      opcoes: [
        {
          texto: "Escrevo a linha do tempo, a causa, o que funcionou e o que melhorar, sem procurar culpados.",
          reacao: "perfeito, com isso a gente pede o filtro de e-mail novo 👏",
          resultado: "O relatório convenceu a diretoria a investir num filtro de e-mails, e casos parecidos quase sumiram.",
          pontos: { organizacao: 2, logica: 1 }
        },
        {
          texto: "Não escrevo nada: o problema já foi resolvido.",
          reacao: "resolvido hoje... e amanhã? 🤨",
          resultado: "Sem registro, ninguém lembrou dos detalhes quando um ataque parecido voltou.",
          pontos: {}
        },
        {
          texto: "Escrevo um resumo dizendo que a culpa foi do funcionário que abriu o arquivo.",
          reacao: "o Paulo tá arrasado... e a falha que deixou o arquivo passar? 😟",
          resultado: "O Paulo foi exposto, as pessoas passaram a esconder cliques suspeitos, e a falha real continuou.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Conto como foi no grupo da equipe, com memes.",
          reacao: "kkkk muito bom, mas e o relatório? 😅",
          resultado: "A equipe riu, mas a diretoria ficou sem as informações para decidir o que fazer.",
          pontos: { pessoas: 1, criatividade: 1 }
        }
      ]
    }
  ]
});
