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
  - area         grupo da profissão no filtro: saude, tecnologia, criativas,
                 negocios ou sociedade (a lista fica em AREAS, em dados/tracos.js)
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
  cor: "#0d1b3d",
  area: "saude",
  resumo: "Cuidar de pacientes em hospitais, clínicas e postos de saúde, 24 horas por dia.",

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
    "Técnico em Enfermagem (cerca de 2 anos)",
    "Bacharelado em Enfermagem (cerca de 5 anos)",
    "Especializações: UTI, urgência e emergência, saúde da família, obstetrícia e outras"
  ],

  situacoes: [
    {
      horario: "07:00",
      titulo: "Chegada ao plantão",
      cena: "🏥 📋 ☕",
      descricao: "Passagem de plantão. A enfermeira da noite vai te contar como estão os 8 pacientes da ala.",
      conversa: [
        { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "ai, graças a Deus você chegou" },
        { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "vou passar rapidinho que meu ônibus é 7h20, tá?" },
        { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "1 tranquilo, 2 no soro, 3 esperando tomografia..." },
        { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "ah! o seu Jorge do 4 teve febre lá pelas 3h. deram dipirona... eu acho?" }
      ],
      naVidaReal: "A passagem de plantão é um dos momentos mais importantes do dia. Falhas de comunicação nesse momento estão entre as causas mais comuns de erros com pacientes.",
      opcoes: [
        {
          texto: "Anoto tudo e peço que ela repita os detalhes sobre o paciente com febre.",
          reacao: "tá, tá... deixa eu olhar aqui. ih, a dipirona era pras 6h e ninguém deu. ainda bem que você perguntou!",
          resultado: "Ao confirmar os horários, vocês perceberam que o antitérmico das 6h ainda não tinha sido dado. Você resolveu isso logo no início do dia.",
          pontos: { organizacao: 2, pessoas: 1 }
        },
        {
          texto: "Escuto sem anotar, confiando na memória, para ela poder ir embora logo.",
          reacao: "valeu, você é um anjo. qualquer coisa me liga!",
          resultado: "Ela saiu no horário, mas no meio da manhã você não lembrava se a febre já tinha sido medicada e precisou ligar para ela.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Interrompo e corro para ver o paciente com febre e medir os sinais vitais.",
          reacao: "ué, peraí, faltam os outros sete!...tá, depois te mando tudo por mensagem",
          resultado: "Ele estava estável, mas você perdeu as informações dos outros sete pacientes e passou a manhã correndo atrás delas.",
          pontos: { pessoas: 1, logica: 1 }
        },
        {
          texto: "Peço que ela deixe tudo por escrito e vou tomar um café antes de começar.",
          reacao: "por escrito?? tá bom... vou perder meu ônibus, mas tá bom",
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
        { quem: "Seu Antônio, paciente", avatar: "👴🏻", fala: "na minha época eu carregava saco de cimento nas costas. agora não consigo nem tomar banho sozinho" }
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
          texto: "Explico cada passo, improviso uma cortina com o lençol e converso com ele.",
          reacao: "olha só, cortina de lençol! caprichou, hein. sabia que eu já fui campeão de dominó do bairro?",
          resultado: "Seu Antônio se sentiu respeitado, relaxou e até contou histórias da juventude.",
          pontos: { pessoas: 2, criatividade: 1 }
        },
        {
          texto: "Chamo um colega para fazermos juntos, com mais segurança para ele.",
          reacao: "dois pra me dar banho? tô me sentindo um rei. hehe",
          resultado: "Com duas pessoas foi mais seguro virar o paciente. Demorou um pouco, porque vocês tiveram que esperar o colega ficar livre.",
          pontos: { pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Peço para outra pessoa fazer: esse tipo de tarefa me dá muito nojo e eu não conseguiria disfarçar.",
          reacao: "ah... desculpa dar trabalho, viu",
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
        { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "faz a conta com calma antes de aspirar" }
      ],
      pergunta: "A prescrição pede dipirona 1 g. A ampola tem 500 mg em cada mL. Quantos mL você aspira na seringa?",
      alternativas: ["0,5 mL", "1 mL", "2 mL", "5 mL"],
      correta: 2,
      explicacao: "1 g = 1.000 mg. Se cada mL tem 500 mg, são 1.000 ÷ 500 = 2 mL. Cálculo de dose faz parte da rotina, e a equipe sempre confere duas vezes, porque um erro pode ser grave.",
      traco: "logica"
    },
    {
      horario: "11:30",
      titulo: "Dois chamados ao mesmo tempo",
      urgente: true,
      cena: "🔔 🚨 💓",
      descricao: "No mesmo instante, a campainha do quarto 3 toca e o monitor do quarto 5 começa a apitar.",
      conversa: [
        { quem: "Dona Célia, quarto 3", avatar: "👵🏽", fala: "enfermeiraaa! alguém! tá doendo muito" },
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "o monitor do 5 tá apitando!! a saturação tá caindo, 88... 86..." }
      ],
      naVidaReal: "Decidir o que é mais grave e agir primeiro nisso (a chamada priorização) é uma habilidade usada o dia inteiro. A pressão é constante.",
      opcoes: [
        {
          texto: "Atendo primeiro a paciente com dor: ela está chamando e parece desesperada.",
          reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "e o do 5?! deixa que eu vou correndo!" },
          resultado: "Enquanto você a acalmava, o paciente do quarto 5 piorou. Por sorte, um colega ouviu o alarme e chegou a tempo.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Corro para o quarto 5 e, no caminho, peço para um colega ver a paciente do quarto 3.",
          reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "fechou, tô indo no 3!" },
          resultado: "O cateter de oxigênio tinha se soltado. Você recolocou e a oxigenação voltou ao normal. Enquanto isso, a colega medicou a paciente com dor.",
          pontos: { pressao: 2, pessoas: 1, logica: 1 }
        },
        {
          texto: "Vou ao quarto 5, mas fico tão nervoso(a) que esqueço de avisar alguém sobre o quarto 3.",
          reacao: "alguém... por favor...",
          resultado: "O paciente do quarto 5 ficou bem, mas a paciente com dor esperou 25 minutos sem atendimento e a família reclamou.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Travo e saio procurando a enfermeira-chefe para ela decidir.",
          reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "cadê você?? a Bete tá no outro andar!" },
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
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "ei... foi mal atrapalhar seu almoço" },
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "chegou um paciente da emergência e eu tô sozinho na ala. cê consegue me dar uma força?" }
      ],
      naVidaReal: "O intervalo é um direito, mas em hospitais lotados ele costuma atrasar ou ser interrompido. Aprender a se cuidar também faz parte da profissão.",
      opcoes: [
        {
          texto: "Ajudo, mas passo o resto da tarde reclamando do cansaço.",
          reacao: "valeu... e foi mal de novo, tá?",
          resultado: "O trabalho foi feito, mas o clima da equipe ficou pesado à tarde.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Aviso que vou em 15 minutos, termino de comer e depois ajudo.",
          reacao: "tá, de boa... eu vou segurando aqui",
          resultado: "O colega segurou as pontas sozinho por um tempo. Você voltou mais descansado(a) e ajudou a terminar a admissão do paciente.",
          pontos: { pessoas: 1 }
        },
        {
          texto: "Como depressa e vou ajudar. Depois tento descansar uns minutos.",
          reacao: "sério? você é demais!! te devo um café",
          resultado: "Vocês acomodaram o paciente rapidamente. Você ficou cansado(a), mas o colega agradeceu muito.",
          pontos: { pessoas: 2, pressao: 1 }
        },
        {
          texto: "Digo que meu intervalo é sagrado e que isso não é minha função.",
          reacao: "ah... tá. entendi.",
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
        { quem: "Juliana, filha da paciente", avatar: "👩🏻", fala: "ninguém me fala nada da minha mãe!" },
        { quem: "Juliana, filha da paciente", avatar: "👩🏻", fala: "se ninguém vier, eu vou gritar até alguém aparecer!" }
      ],
      naVidaReal: "A equipe de enfermagem é quem passa mais tempo com pacientes e familiares. Acolher medo, raiva e luto faz parte do trabalho, e pode ser emocionalmente desgastante.",
      opcoes: [
        {
          texto: "Peço para a psicóloga ou a assistente social do hospital conversar com ela.",
          reacao: "...tá. mas eu queria notícia da minha mãe, não psicóloga",
          resultado: "A profissional acolheu a família. Foi uma boa decisão, embora a filha tenha esperado um tempo no corredor até ela chegar.",
          pontos: { pessoas: 1, organizacao: 1 }
        },
        {
          texto: "Levo ela a uma sala tranquila, escuto e peço ao médico que a procure depois da cirurgia.",
          reacao: "...desculpa ter gritado. eu só tô com muito medo. obrigada por me ouvir",
          resultado: "Ela se acalmou aos poucos e agradeceu por ter sido ouvida. Mais tarde, o médico conversou com a família.",
          pontos: { pessoas: 2, pressao: 1 }
        },
        {
          texto: "Explico que o médico está em cirurgia e que não posso dar informações, e volto às minhas tarefas: tenho muitos pacientes.",
          reacao: "e eu fico aqui sem saber de nada?!",
          resultado: "A informação estava certa, mas ela continuou nervosa e voltou a gritar meia hora depois.",
          pontos: { organizacao: 1 }
        },
        {
          texto: "Respondo no mesmo tom e peço respeito.",
          reacao: "como é que é?! eu vou reclamar de você!",
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
        { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "hoje entrou um paciente com nome parecido" }
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
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "ufa, tá acabando" },
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "ei, cê registrou os curativos e as medicações de hoje? a supervisora tá cobrando" },
        { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "acho que faltam uns 7 no sistema" }
      ],
      naVidaReal: "O registro de enfermagem é um documento legal. Escrever com precisão, mesmo no fim de um plantão cansativo, protege o paciente e o próprio profissional.",
      opcoes: [
        {
          texto: "Registro tudo bem rápido, sem revisar.",
          reacao: "rapidinho, hein? confere o horário da dipirona, tá?",
          resultado: "Você saiu no horário, mas anotou um horário de medicação errado e a equipe da noite precisou te ligar.",
          pontos: { pressao: 1 }
        },
        {
          texto: "Registro o essencial e crio um modelo de anotação para ser mais rápido(a) nos próximos plantões.",
          reacao: "boa ideia esse modelo! me passa depois?",
          resultado: "Boa ideia para o futuro, mas hoje parte das informações ficou de fora do prontuário.",
          pontos: { organizacao: 1, criatividade: 1 }
        },
        {
          texto: "Deixo para registrar no meu próximo plantão.",
          reacao: "vixe... a supervisora não vai gostar nada disso",
          resultado: "O prontuário ficou incompleto por dois dias. Isso pode prejudicar o paciente e trazer problemas legais para você.",
          pontos: {}
        },
        {
          texto: "Registro tudo com cuidado, mesmo que eu saia um pouco mais tarde.",
          reacao: "caprichou! te espero pra gente ir junto pro ponto de ônibus",
          resultado: "Você saiu 20 minutos depois do horário, mas a equipe da noite recebeu tudo certinho.",
          pontos: { organizacao: 2, pressao: 1 }
        }
      ]
    }
  ]
});

/* ---------- Segunda versão do dia (banco de versões) ----------
   Cada item abaixo é outra versão da etapa de mesma posição no dia acima.
   Os pontos das opções repetem os da versão original, para manter o equilíbrio. */

adicionarVersoes("enfermagem", [
  {
    horario: "07:00",
    titulo: "Paciente novo no leito 6",
    cena: "🏥 🛏️ ❓",
    descricao: "Na passagem de plantão, a enfermeira da noite conta que um paciente foi internado de madrugada, e algumas informações estão faltando.",
    conversa: [
      { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "o do leito 6 subiu da emergência às 4h. pneumonia" },
      { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "ele tava confuso e não soube dizer se tem alergia a algum remédio" },
      { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "o antibiótico tá prescrito pras 8h. bom, era isso, tô indo!" }
    ],
    naVidaReal: "Saber as alergias antes de dar um medicamento é obrigatório. Quando o paciente não consegue informar, a equipe procura a família, o prontuário de outras internações e marca a dúvida de forma bem visível.",
    opcoes: [
      {
        texto: "Peço um minuto, confiro o prontuário com ela e anoto o que falta, como ligar para a família.",
        reacao: "boa, nem pensei em pedir pra família... a filha deixou o telefone aqui",
        resultado: "A filha confirmou por telefone que ele tem alergia a penicilina. O antibiótico das 8h foi trocado antes de ser dado.",
        pontos: { organizacao: 2, pessoas: 1 }
      },
      {
        texto: "Deixo ela ir embora no horário e tiro as dúvidas depois pelo celular dela.",
        reacao: "valeu!! qualquer coisa me chama no zap",
        resultado: "Ela estava no ônibus e demorou a responder. A informação da alergia só chegou depois de muita correria.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Vou direto ao leito 6 conversar com o paciente e avaliar como ele está.",
        reacao: "tá, mas ainda tem os outros sete pra eu te passar!",
        resultado: "O paciente estava estável, mas você ficou sem as informações dos outros pacientes e teve que correr atrás delas.",
        pontos: { pessoas: 1, logica: 1 }
      },
      {
        texto: "Assumo o plantão sem perguntar mais nada: ela está exausta, e o que importa deve estar registrado no sistema.",
        reacao: "tá bom, então. bom plantão",
        resultado: "O campo de alergias estava em branco no sistema. Por pouco o antibiótico não foi dado sem a checagem.",
        pontos: {}
      }
    ]
  },
  {
    horario: "09:00",
    titulo: "Curativo difícil",
    cena: "🩹 🛏️ 👵",
    descricao: "Dona Lurdes, 79 anos, tem uma ferida grande nas costas por ficar muito tempo deitada. O curativo dói e tem cheiro forte.",
    conversa: [
      { quem: "Dona Lurdes, paciente", avatar: "👵🏾", fala: "de novo esse curativo? dói tanto..." },
      { quem: "Dona Lurdes, paciente", avatar: "👵🏾", fala: "e ainda fica esse cheiro. tenho vergonha até da minha neta vir me ver" }
    ],
    naVidaReal: "Feridas por pressão (as escaras) são comuns em quem fica muito tempo acamado. Prevenir, fazer curativos e mudar o paciente de posição a cada poucas horas são tarefas diárias da enfermagem.",
    opcoes: [
      {
        texto: "Faço o curativo rápido, seguindo o protocolo à risca, sem puxar conversa para não prolongar a dor.",
        reacao: "...pronto? tá bom.",
        resultado: "O curativo ficou correto, mas ela passou o procedimento todo tensa, com os olhos fechados.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Explico cada passo e coloco no celular uma música de que ela gosta.",
        reacao: "ah, essa música era do meu casamento... nem senti tanto",
        resultado: "Ela relaxou e chegou a cantar baixinho. A dor pareceu menor e ela pediu a mesma música no dia seguinte.",
        pontos: { pessoas: 2, criatividade: 1 }
      },
      {
        texto: "Chamo um colega para virarmos ela juntos, com mais segurança para ela e para a gente.",
        reacao: "dois anjos pra me ajudar, que luxo",
        resultado: "Virá-la com duas pessoas foi mais seguro e menos dolorido. Vocês só esperaram uns minutos o colega ficar livre.",
        pontos: { pessoas: 1, organizacao: 1 }
      },
      {
        texto: "Peço para outra pessoa fazer: o cheiro me deixa enjoado(a).",
        reacao: "ninguém quer cuidar de mim, né...",
        resultado: "A colega estava cheia de pacientes e o curativo atrasou duas horas. Lidar com feridas faz parte da rotina da enfermagem.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "escolha",
    horario: "10:15",
    titulo: "Velocidade do soro",
    cena: "💧 ⏱️ 🧮",
    conversa: [
      { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "o soro do leito 2 é 500 mL pra correr em 4 horas" },
      { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "o equipo é de macrogotas. quantas gotas por minuto você regula?" }
    ],
    pergunta: "500 mL de soro em 4 horas, com equipo de macrogotas (20 gotas = 1 mL). Quantas gotas por minuto?",
    alternativas: ["21 gotas/min", "42 gotas/min", "83 gotas/min", "125 gotas/min"],
    correta: 1,
    explicacao: "Em macrogotas, a conta é volume ÷ (horas × 3): 500 ÷ (4 × 3) ≈ 42 gotas por minuto. Isso vem de 500 mL × 20 gotas ÷ 240 minutos. Soro rápido demais pode sobrecarregar o coração; devagar demais atrasa o tratamento.",
    traco: "logica"
  },
  {
    horario: "11:30",
    titulo: "Queda e dor no peito",
    urgente: true,
    cena: "🚨 🛁 💓",
    descricao: "Um técnico grita do quarto 2: um senhor caiu no banheiro. Ao mesmo tempo, o paciente do quarto 7 diz que está com dor no peito e suando frio.",
    conversa: [
      { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "o seu Nilton caiu no banheiro do 2! ele tá acordado, reclamando do quadril" },
      { quem: "Seu Paulo, quarto 7", avatar: "👨🏽‍🦳", fala: "ai... tá apertando aqui no peito... e eu tô suando frio" }
    ],
    naVidaReal: "Dor no peito com suor frio pode ser um infarto, e cada minuto conta. Já um paciente que caiu e está acordado não deve ser levantado às pressas: primeiro é preciso avaliar se há fratura.",
    opcoes: [
      {
        texto: "Corro para levantar o senhor que caiu: ele está no chão e com dor.",
        reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "espera, não puxa ele! e o do 7??" },
        resultado: "Levantar o paciente sem avaliar podia piorar uma fratura, e o paciente do 7 esperou sem ninguém por perto.",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Vou ao quarto 7, peço eletrocardiograma e médico e oriento o técnico a não levantar o senhor.",
        reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "beleza, deixo ele deitado e confortável aqui" },
        resultado: "O eletrocardiograma mostrou um infarto, tratado a tempo. O senhor da queda tinha só um hematoma e foi avaliado com calma.",
        pontos: { pressao: 2, pessoas: 1, logica: 1 }
      },
      {
        texto: "Corro para o quarto 7, porque dor no peito pode ser infarto, mas esqueço de orientar quem está com o senhor que caiu.",
        reacao: { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "e aqui, o que eu faço??" },
        resultado: "O paciente do 7 foi atendido a tempo, mas o do 2 ficou no chão frio, sem orientação, por quase meia hora.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Fico no posto esperando o médico chegar para decidir o que fazer.",
        reacao: "por favor... alguém...",
        resultado: "O médico estava em outro andar. Os minutos perdidos fizeram falta para o paciente com dor no peito.",
        pontos: {}
      }
    ]
  },
  {
    horario: "13:00",
    titulo: "O colega precisa sair",
    cena: "📱 🏫 🤒",
    descricao: "A escola liga para o técnico Rafael: o filho dele está com febre e alguém precisa buscá-lo.",
    conversa: [
      { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "a escola ligou, meu pequeno tá com 39 de febre" },
      { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "a chefe deixou eu sair, mas alguém tem que ficar com meus 4 pacientes..." },
      { quem: "Rafael, técnico de enfermagem", avatar: "🧑🏿‍⚕️", fala: "sei que é seu horário de almoço. cê consegue?" }
    ],
    naVidaReal: "Imprevistos pessoais acontecem com todo mundo, e na enfermagem o paciente não pode ficar sem cuidado. Uma passagem rápida e organizada evita que informações se percam quando alguém sai no meio do turno.",
    opcoes: [
      {
        texto: "Assumo os pacientes dele, mas passo a tarde dizendo que ninguém me ajuda.",
        reacao: "desculpa mesmo, viu...",
        resultado: "Os pacientes foram cuidados, mas o clima da equipe ficou pesado o resto do dia.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Digo que topo, mas só depois de terminar meu intervalo de 15 minutos: eu também preciso comer.",
        reacao: "tá, eu espero... mas tô agoniado",
        resultado: "Ele saiu um pouco mais tarde e preocupado, mas você assumiu os pacientes descansado(a).",
        pontos: { pessoas: 1 }
      },
      {
        texto: "Peço um resumo rápido de quem precisa de quê e assumo os pacientes dele.",
        reacao: "você salvou meu dia!! te devo uma",
        resultado: "Com a passagem rápida, nada se perdeu. O Rafael buscou o filho e no dia seguinte trouxe um bolo para a equipe.",
        pontos: { pessoas: 2, pressao: 1 }
      },
      {
        texto: "Digo que não é problema meu e volto para o meu intervalo.",
        reacao: "...tá. eu me viro.",
        resultado: "Os pacientes dele ficaram sem ninguém responsável por uma hora, até a chefe perceber.",
        pontos: {}
      }
    ]
  },
  {
    horario: "15:30",
    titulo: "Quero ir embora!",
    urgente: true,
    cena: "🚪 💉 😠",
    descricao: "Um paciente internado com infecção arranca o esparadrapo do soro e diz que vai embora agora.",
    conversa: [
      { quem: "Seu Valter, paciente", avatar: "👨🏻", fala: "chega! eu vou embora, ninguém me segura aqui" },
      { quem: "Seu Valter, paciente", avatar: "👨🏻", fala: "tira esse negócio do meu braço AGORA" }
    ],
    naVidaReal: "O paciente tem o direito de recusar o tratamento e pedir \"alta a pedido\", assinando um termo. Mas a equipe precisa explicar os riscos e entender o motivo: muitas vezes é medo ou um problema em casa que pode ser resolvido.",
    opcoes: [
      {
        texto: "Chamo o médico de plantão para conversar com ele e explicar os riscos de ir embora agora.",
        reacao: "pode chamar, mas eu vou embora do mesmo jeito",
        resultado: "O médico explicou os riscos e ele aceitou ficar até o dia seguinte, ainda contrariado.",
        pontos: { pessoas: 1, organizacao: 1 }
      },
      {
        texto: "Sento ao lado dele, pergunto o que está acontecendo e escuto com calma.",
        reacao: "...é que minha esposa tem Alzheimer e tá sozinha em casa desde ontem",
        resultado: "Você chamou o serviço social, que achou uma vizinha para ficar com a esposa. Ele continuou o tratamento.",
        pontos: { pessoas: 2, pressao: 1 }
      },
      {
        texto: "Explico a regra: para sair, ele precisa assinar o termo de alta a pedido. Volto para o posto.",
        reacao: "então me dá logo esse papel!",
        resultado: "Ele assinou e foi embora no meio do tratamento. Voltou três dias depois, bem pior.",
        pontos: { organizacao: 1 }
      },
      {
        texto: "Digo que, se ele quer ir, o problema é dele.",
        reacao: "é assim que vocês tratam as pessoas aqui?",
        resultado: "Ele saiu sem orientação nenhuma, e a família fez uma reclamação na ouvidoria do hospital.",
        pontos: {}
      }
    ]
  },
  {
    tipo: "desafio",
    formato: "encontre-o-erro",
    horario: "17:00",
    titulo: "Sinais vitais",
    cena: "🩺 📈 🔍",
    conversa: [
      { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "o técnico mediu os sinais vitais do leito 6" },
      { quem: "Bete, enfermeira-chefe", avatar: "👩🏾‍⚕️", fala: "tem um valor aí que precisa de atenção agora. qual?" }
    ],
    pergunta: "Sinais vitais de um adulto em repouso. Toque no valor que está fora do normal:",
    linhas: [
      "Pressão arterial: 120 × 80 mmHg",
      "Saturação de oxigênio: 85%",
      "Frequência cardíaca: 78 batimentos por minuto",
      "Temperatura: 36,8 °C",
      "Frequência respiratória: 16 por minuto"
    ],
    correta: 1,
    explicacao: "Em adultos saudáveis, a saturação de oxigênio costuma ficar entre 95% e 100%. Com 85%, o corpo está recebendo pouco oxigênio: a equipe avisa o médico, posiciona o paciente e pode precisar oferecer oxigênio.",
    traco: "logica"
  },
  {
    horario: "18:30",
    titulo: "Passagem para a noite",
    cena: "🌙 📋 🔁",
    descricao: "Agora é você quem passa o plantão para a equipe da noite. O dia foi pesado e você está esgotado(a).",
    conversa: [
      { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "boa noite! e aí, como foi o dia?" },
      { quem: "Carla, enfermeira da noite", avatar: "👩🏽‍⚕️", fala: "me passa tudo que eu já vou começar a ronda" }
    ],
    naVidaReal: "Passar o plantão de forma organizada, paciente por paciente e com as pendências por escrito, é uma das principais formas de evitar erros entre um turno e outro.",
    opcoes: [
      {
        texto: "Passo tudo de cabeça, bem rápido, para não perder o ônibus.",
        reacao: "peraí, o antibiótico do 6 é que horas mesmo?",
        resultado: "Você pegou o ônibus, mas a Carla precisou te ligar duas vezes durante a noite.",
        pontos: { pressao: 1 }
      },
      {
        texto: "Faço uma tabelinha à mão com os pacientes, mas não confiro os horários com o sistema.",
        reacao: "adorei a tabelinha! mas o horário do 2 tá diferente do sistema...",
        resultado: "A ideia ajudou, mas um horário errado na tabela confundiu a equipe da noite.",
        pontos: { organizacao: 1, criatividade: 1 }
      },
      {
        texto: "Deixo um bilhete escrito \"tudo tranquilo\" e vou embora.",
        reacao: "tudo tranquilo?? e a alergia do 6??",
        resultado: "A equipe da noite ficou sem saber das pendências importantes do dia.",
        pontos: {}
      },
      {
        texto: "Passo paciente por paciente, com as pendências por escrito, e confiro o prontuário com ela.",
        reacao: "perfeito, assim dá gosto de assumir plantão",
        resultado: "Você saiu 15 minutos mais tarde, mas a noite começou sem nenhuma dúvida.",
        pontos: { organizacao: 2, pressao: 1 }
      }
    ]
  }
]);
