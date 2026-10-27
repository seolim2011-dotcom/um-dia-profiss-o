/*
  Profissão: Enfermagem

  Use este arquivo como modelo para criar uma profissão nova:
  1. Copie este arquivo para dados/nome-da-profissao.js e troque os textos.
  2. No index.html, adicione <script src="dados/nome-da-profissao.js"></script>
     junto dos outros arquivos de dados.

  Campos:
  - id           identificador único, sem espaços nem acentos
  - nome, icone  nome exibido e um emoji
  - cor          cor da profissão (escura o bastante para texto branco por cima)
  - resumo       uma frase sobre o que a pessoa faz
  - perfil       para cada traço de dados/tracos.js:
                   peso    de 1 (pouco usado) a 5 (essencial) nesta profissão
                   gostar  o que costuma agradar nesse traço (vai para o relatório)
                   dificil o que costuma pesar nesse traço (vai para o relatório)
  - cursos       caminhos de formação para entrar na área
  - situacoes    os momentos do dia, em ordem de horário. Há dois tipos:

    1) SITUAÇÃO DE DECISÃO (o padrão):
         horario, titulo
         cena        (opcional) 2 ou 3 emojis que ilustram a situação
         descricao   uma frase de narração, que aparece antes da conversa
         conversa    (opcional) falas dos personagens, mostradas como chat:
                       { quem: "Nome, função", avatar: "emoji", fala: "..." }
                     Dica: escreva como as pessoas falam no WhatsApp — frases
                     curtas, várias mensagens seguidas, "tô", "pra", emojis.
         urgente     (opcional) true = a pessoa tem um cronômetro para decidir
         tempo       (opcional) segundos do cronômetro (o padrão é 20)
         naVidaReal  explicação mostrada depois da escolha
         opcoes      3 ou 4 escolhas, cada uma com:
           texto      o que aparece no botão (e no balão "Você" da conversa)
           reacao     o que o personagem responde no chat. Por padrão quem
                      responde é o primeiro personagem da conversa; para outro,
                      use { quem: "...", avatar: "...", fala: "..." }
           resultado  o que aconteceu por causa da escolha
           pontos     quanto a escolha mostra de cada traço (1 ou 2).
                      Uma escolha que mostra dificuldade com a rotina
                      fica com pontos: {}
           efeitos    (opcional) muda a energia e o estresse da escolha,
                      por exemplo { energia: -20, estresse: 5 }. Sem ele,
                      o jogo calcula sozinho a partir dos pontos.

    2) DESAFIO (um mini problema da profissão), com tipo: "desafio":
         horario, titulo, cena, descricao e conversa  como acima
         formato     "escolha", "encontre-o-erro" ou "ordenar"
         pergunta    o enunciado do desafio
         explicacao  a resposta comentada, mostrada depois
         traco       (opcional) traço que o desafio exercita, só para exibir
         tempo       (opcional) segundos de cronômetro para resolver
       E, conforme o formato:
         escolha          alternativas: [...], correta: índice da certa (começa em 0)
                          grafico (opcional): [{ rotulo: "Manhã", valor: 40 }, ...]
                          unidade (opcional): texto depois dos valores, ex. "min"
         encontre-o-erro  linhas: [...], correta: índice da linha errada
                          codigo (opcional): true mostra as linhas como código
         ordenar          itens: [...] já na ordem certa (o jogo embaralha)
*/

PROFISSOES.push({
  id: "enfermagem",
  nome: "Enfermagem",
  icone: "🩺",
  cor: "#0f766e",
  resumo: "Cuidar de pacientes em hospitais, clínicas e postos de saúde — 24 horas por dia.",

  perfil: {
    pessoas: {
      peso: 5,
      gostar: "Criar vínculo com pacientes e acompanhar a recuperação de perto.",
      dificil: "Lidar todos os dias com dor, medo e luto de pacientes e famílias."
    },
    logica: {
      peso: 2,
      gostar: "Raciocinar sobre sinais, sintomas e doses de medicação.",
      dificil: "Cálculos de medicação exigem precisão: um erro pode ser grave."
    },
    pressao: {
      peso: 5,
      gostar: "A adrenalina das emergências e fazer diferença na hora certa.",
      dificil: "Plantões de 12 horas, noites, feriados e decisões rápidas com vidas em jogo."
    },
    organizacao: {
      peso: 4,
      gostar: "Rotinas claras: horários de medicação, protocolos e registros.",
      dificil: "Registrar tudo no prontuário, mesmo exausto(a) no fim do plantão."
    },
    criatividade: {
      peso: 2,
      gostar: "Improvisar soluções para deixar o paciente mais confortável.",
      dificil: "Pouco espaço para inventar: muitos procedimentos seguem protocolos rígidos."
    }
  },

  cursos: [
    "Técnico em Enfermagem — cerca de 2 anos",
    "Bacharelado em Enfermagem — cerca de 5 anos",
    "Especializações: UTI, urgência e emergência, saúde da família, obstetrícia e outras"
  ],

  situacoes: [
    {
      horario: "07:00",
      titulo: "Chegada ao plantão",
      cena: "🏥 📋 ☕",
      descricao: "Passagem de plantão. A enfermeira da noite vai te contar como estão os 8 pacientes da ala.",
      conversa: [
        { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "ai, graças a Deus você chegou 😮‍💨" },
        { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "vou passar rapidinho que meu ônibus é 7h20, tá?" },
        { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "1 tranquilo, 2 no soro, 3 esperando tomografia..." },
        { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "ah! o seu Jorge do 4 teve febre lá pelas 3h. deram dipirona... eu acho? 🤔" }
      ],
      naVidaReal: "A passagem de plantão é um dos momentos mais importantes do dia. Falhas de comunicação nesse momento estão entre as causas mais comuns de erros com pacientes.",
      opcoes: [
        {
          texto: "Anoto tudo e peço que ela repita os detalhes sobre o paciente com febre.",
          reacao: "tá, tá... deixa eu olhar aqui. ih, a dipirona era pras 6h e ninguém deu 😬 ainda bem que você perguntou!",
          resultado: "Ao confirmar os horários, vocês perceberam que o antitérmico das 6h ainda não tinha sido dado. Você resolveu isso logo no início do dia.",
          pontos: { organizacao: 2, pessoas: 1 }
        },
        {
          texto: "Escuto sem anotar, confiando na memória, para ela poder ir embora logo.",
          reacao: "valeu, você é um anjo 🙏 qualquer coisa me liga!",
          resultado: "Ela saiu no horário, mas no meio da manhã você não lembrava se a febre já tinha sido medicada e precisou ligar para ela.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Interrompo e corro para ver o paciente com febre e medir os sinais vitais.",
          reacao: "ué, peraí, faltam os outros sete! 😅 ...tá, depois te mando tudo por mensagem",
          resultado: "Ele estava estável, mas você perdeu as informações dos outros sete pacientes e passou a manhã correndo atrás delas.",
          pontos: { pessoas: 1, logica: 1 }
        },
        {
          texto: "Peço que ela deixe tudo por escrito e vou tomar um café antes de começar.",
          reacao: "por escrito?? 😩 tá bom... vou perder meu ônibus, mas tá bom",
          resultado: "A colega, depois de 12 horas de trabalho, ficou mais 20 minutos escrevendo. O clima com a equipe da noite ficou estranho.",
          pontos: {}
        }
      ]
    },
    {
      horario: "09:00",
      titulo: "Banho no leito",
      cena: "🛏️ 🧼 👴",
      descricao: "Seu Antônio, de 82 anos, não consegue se levantar e precisa de ajuda para tomar banho e trocar a fralda.",
      conversa: [
        { quem: "Seu Antônio, paciente", avatar: "👴🏻", fala: "bom dia... ai, que vergonha, viu" },
        { quem: "Seu Antônio, paciente", avatar: "👴🏻", fala: "na minha época eu carregava saco de cimento nas costas. agora não consigo nem tomar banho sozinho 😔" }
      ],
      naVidaReal: "Dar banho, trocar fraldas e lidar com sangue, urina e vômito faz parte do dia a dia. Muitos estudantes só descobrem no primeiro estágio se conseguem lidar com isso.",
      opcoes: [
        {
          texto: "Faço rápido e em silêncio, seguindo o passo a passo, para acabar logo com o constrangimento.",
          reacao: "...hum. tá bom.",
          resultado: "Ficou tudo limpo, mas ele continuou tenso e não disse uma palavra durante o banho.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Explico cada passo, improviso uma cortina com o lençol para dar privacidade e converso com ele.",
          reacao: "olha só, cortina de lençol! 😄 caprichou, hein. sabia que eu já fui campeão de dominó do bairro?",
          resultado: "Seu Antônio se sentiu respeitado, relaxou e até contou histórias da juventude.",
          pontos: { pessoas: 2, criatividade: 1 }
        },
        {
          texto: "Chamo um colega para fazermos juntos, com mais segurança para ele.",
          reacao: "dois pra me dar banho? tô me sentindo um rei 👑 hehe",
          resultado: "Com duas pessoas foi mais seguro virar o paciente. Demorou um pouco, porque vocês tiveram que esperar o colega ficar livre.",
          pontos: { pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Peço para outra pessoa fazer: esse tipo de tarefa me dá muito nojo.",
          reacao: "ah... desculpa dar trabalho, viu 😞",
          resultado: "A colega já estava com outros quatro pacientes e ficou sobrecarregada. Cuidados de higiene fazem parte da rotina de toda a equipe de enfermagem.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "escolha",
      horario: "10:15",
      titulo: "Hora da medicação",
      cena: "💊 💉 🧮",
      conversa: [
        { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "a dipirona do seu Jorge fica com você, tá? 1 grama, na veia" },
        { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "faz a conta com calma antes de aspirar 😉" }
      ],
      pergunta: "A prescrição pede dipirona 1 g. A ampola tem 500 mg em cada mL. Quantos mL você aspira na seringa?",
      alternativas: ["0,5 mL", "1 mL", "2 mL", "5 mL"],
      correta: 2,
      explicacao: "1 g = 1.000 mg. Se cada mL tem 500 mg, são 1.000 ÷ 500 = 2 mL. Cálculo de dose faz parte da rotina — e a equipe sempre confere duas vezes, porque um erro pode ser grave.",
      traco: "logica"
    },
    {
      horario: "11:30",
      titulo: "Dois chamados ao mesmo tempo",
      urgente: true,
      cena: "🔔 🚨 💓",
      descricao: "No mesmo instante, a campainha do quarto 3 toca e o monitor do quarto 5 começa a apitar.",
      conversa: [
        { quem: "Dona Célia, quarto 3", avatar: "👵🏽", fala: "enfermeiraaa! alguém! tá doendo muito 😣" },
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "o monitor do 5 tá apitando!! a saturação tá caindo, 88... 86... 😰" }
      ],
      naVidaReal: "Decidir o que é mais grave e agir primeiro nisso — a chamada priorização — é uma habilidade usada o dia inteiro. A pressão é constante.",
      opcoes: [
        {
          texto: "Atendo primeiro a paciente com dor: ela está chamando e parece desesperada.",
          reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "e o do 5?! 😱 deixa que eu vou correndo!" },
          resultado: "Enquanto você a acalmava, o paciente do quarto 5 piorou. Por sorte, um colega ouviu o alarme e chegou a tempo.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Corro para o quarto 5 e, no caminho, peço para um colega ver a paciente do quarto 3.",
          reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "fechou, tô indo no 3! 🏃🏿" },
          resultado: "O cateter de oxigênio tinha se soltado. Você recolocou e a oxigenação voltou ao normal. Enquanto isso, a colega medicou a paciente com dor.",
          pontos: { pressao: 2, pessoas: 1, logica: 1 }
        },
        {
          texto: "Vou ao quarto 5, mas fico tão nervoso(a) que esqueço de avisar alguém sobre o quarto 3.",
          reacao: "alguém... por favor... 😣",
          resultado: "O paciente do quarto 5 ficou bem, mas a paciente com dor esperou 25 minutos sem atendimento e a família reclamou.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Travo e saio procurando a enfermeira-chefe para ela decidir.",
          reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "cadê você?? a Bete tá no outro andar! 😰" },
          resultado: "Você levou minutos preciosos para encontrá-la. Em situações assim, uma decisão rápida faz muita diferença.",
          pontos: {}
        }
      ]
    },
    {
      horario: "13:00",
      titulo: "Almoço interrompido",
      cena: "🍱 🚑 😩",
      descricao: "Depois de seis horas em pé, você finalmente se senta para almoçar.",
      conversa: [
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "ei... foi mal atrapalhar seu almoço 😬" },
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "chegou um paciente da emergência e eu tô sozinho na ala. cê consegue me dar uma força?" }
      ],
      naVidaReal: "O intervalo é um direito, mas em hospitais lotados ele costuma atrasar ou ser interrompido. Aprender a se cuidar também faz parte da profissão.",
      opcoes: [
        {
          texto: "Ajudo, mas passo o resto da tarde reclamando do cansaço.",
          reacao: "valeu... e foi mal de novo, tá? 😕",
          resultado: "O trabalho foi feito, mas o clima da equipe ficou pesado à tarde.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Aviso que vou em 15 minutos, termino de comer e depois ajudo.",
          reacao: "tá, de boa... eu vou segurando aqui 😅",
          resultado: "O colega segurou as pontas sozinho por um tempo. Você voltou mais descansado(a) e ajudou a terminar a admissão do paciente.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Como depressa e vou ajudar. Depois tento descansar uns minutos.",
          reacao: "sério? você é demais!! 🙌 te devo um café",
          resultado: "Vocês acomodaram o paciente rapidamente. Você ficou cansado(a), mas o colega agradeceu muito.",
          pontos: { pessoas: 2, pressao: 1 }
        },
        {
          texto: "Digo que meu intervalo é sagrado e que isso não é minha função.",
          reacao: "ah... tá. entendi. 😶",
          resultado: "Seu direito ao intervalo é real, mas o colega ficou sobrecarregado. Na enfermagem, imprevistos são frequentes e a equipe depende muito de ajuda mútua.",
          pontos: {}
        }
      ]
    },
    {
      horario: "15:30",
      titulo: "Família angustiada",
      urgente: true,
      cena: "😭 🚪 🏥",
      descricao: "A filha de uma paciente em estado grave chega chorando ao posto de enfermagem. O médico está em uma cirurgia.",
      conversa: [
        { quem: "Juliana, filha da paciente", avatar: "👩🏻", fala: "cadê o médico?? eu quero falar com ele AGORA" },
        { quem: "Juliana, filha da paciente", avatar: "👩🏻", fala: "ninguém me fala nada da minha mãe! 😭" },
        { quem: "Juliana, filha da paciente", avatar: "👩🏻", fala: "se ninguém vier, eu vou gritar até alguém aparecer!" }
      ],
      naVidaReal: "A equipe de enfermagem é quem passa mais tempo com pacientes e familiares. Acolher medo, raiva e luto faz parte do trabalho — e pode ser emocionalmente desgastante.",
      opcoes: [
        {
          texto: "Peço para a psicóloga ou a assistente social do hospital conversar com ela.",
          reacao: "...tá. mas eu queria notícia da minha mãe, não psicóloga 😢",
          resultado: "A profissional acolheu a família. Foi uma boa decisão, embora a filha tenha esperado um tempo no corredor até ela chegar.",
          pontos: { pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Levo ela para uma sala tranquila, escuto, explico o que posso e garanto que o médico vai procurá-la.",
          reacao: "...desculpa ter gritado. eu só tô com muito medo 😢 obrigada por me ouvir",
          resultado: "Ela se acalmou aos poucos e agradeceu por ter sido ouvida. Mais tarde, o médico conversou com a família.",
          pontos: { pessoas: 2, pressao: 1 }
        },
        {
          texto: "Explico que o médico está em cirurgia e volto às minhas tarefas: tenho muitos pacientes.",
          reacao: "e eu fico aqui sem saber de nada?! 😡",
          resultado: "A informação estava certa, mas ela continuou nervosa e voltou a gritar meia hora depois.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Respondo no mesmo tom e peço respeito.",
          reacao: "como é que é?! eu vou reclamar de você! 😡",
          resultado: "A discussão chamou a atenção do andar inteiro e a coordenação teve que intervir.",
          pontos: {}
        }
      ]
    },
    {
      tipo: "desafio",
      formato: "encontre-o-erro",
      horario: "17:00",
      titulo: "Confira a pulseira",
      cena: "💉 🏷️ 🔍",
      conversa: [
        { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "antes de dar o antibiótico do seu Jorge, confere a prescrição com a pulseira dele, tá?" },
        { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "hoje entrou um paciente com nome parecido 👀" }
      ],
      pergunta: "A pulseira diz: Jorge Souza Lima · Leito 4. Toque na linha da prescrição que NÃO bate com a pulseira:",
      linhas: [
        "Paciente: Jorge Silva Lima",
        "Leito: 4",
        "Medicamento: Ceftriaxona 1 g",
        "Via: na veia (endovenosa)",
        "Horário: 17h"
      ],
      correta: 0,
      explicacao: "O nome na prescrição (Jorge Silva Lima) é diferente do nome na pulseira (Jorge Souza Lima). Conferir o “paciente certo” é o primeiro dos certos da medicação: confundir pacientes com nomes parecidos é um erro mais comum do que parece.",
      traco: "organizacao"
    },
    {
      horario: "18:30",
      titulo: "Fim do plantão",
      cena: "🗂️ 🕡 😮‍💨",
      descricao: "Faltam 30 minutos para ir embora e você está exausto(a).",
      conversa: [
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "ufa, tá acabando 😮‍💨" },
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "ei, cê registrou os curativos e as medicações de hoje? a supervisora tá cobrando 👀" },
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "acho que faltam uns 7 no sistema" }
      ],
      naVidaReal: "O registro de enfermagem é um documento legal. Escrever com precisão, mesmo no fim de um plantão cansativo, protege o paciente e o próprio profissional.",
      opcoes: [
        {
          texto: "Registro tudo bem rápido, sem revisar.",
          reacao: "rapidinho, hein? confere o horário da dipirona, tá? 👀",
          resultado: "Você saiu no horário, mas anotou um horário de medicação errado e a equipe da noite precisou te ligar.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Registro o essencial e crio um modelo de anotação para ser mais rápido(a) nos próximos plantões.",
          reacao: "boa ideia esse modelo! me passa depois? 😄",
          resultado: "Boa ideia para o futuro, mas hoje parte das informações ficou de fora do prontuário.",
          pontos: { organizacao: 1, criatividade: 1 }
        },
        {
          texto: "Deixo para registrar no meu próximo plantão.",
          reacao: "vixe... a supervisora não vai gostar nada disso 😬",
          resultado: "O prontuário ficou incompleto por dois dias. Isso pode prejudicar o paciente e trazer problemas legais para você.",
          pontos: {}
        },
        {
          texto: "Registro tudo com cuidado, mesmo que eu saia um pouco mais tarde.",
          reacao: "caprichou! te espero pra gente ir junto pro ponto de ônibus 🚌",
          resultado: "Você saiu 20 minutos depois do horário, mas a equipe da noite recebeu tudo certinho.",
          pontos: { organizacao: 2, pressao: 1 }
        }
      ]
    }
  ]
});
