# Um Dia na Profissão

Protótipo de jogo web da turma de Desenvolvimento de Sistemas.

Segundo o Ipea, muitos jovens trocam de curso ou se formam e não seguem na área, em boa parte por escolher a profissão de forma idealizada. O jogo coloca o jovem diante da rotina real de uma profissão **antes** de escolher o curso. Pelas decisões que ele toma ao longo de um dia de trabalho, o jogo monta um relatório de afinidade.

## Como rodar

Abra o arquivo `index.html` no navegador (dois cliques). Não precisa instalar nada, nem de servidor, nem de internet. Com internet, as fontes Fredoka e Nunito são carregadas; sem ela, o navegador usa a fonte do sistema.

## Como jogar

1. Clique em **Jogar**, digite seu nome, escolha um **avatar** e uma profissão.
2. Viva o dia: 8 etapas, do início ao fim do expediente — 6 situações de decisão e 2 desafios. Nas situações, os personagens conversam com você como num chat, você decide o que fazer e eles respondem à sua escolha. Responda clicando ou com as teclas **A, B, C, D** (ou 1 a 9). A tecla **Espaço** pula a conversa.
3. Nas situações marcadas como **🚨 Urgente**, um **cronômetro** dá 20 segundos para decidir. Se o tempo acabar, conta como se você tivesse travado. O cronômetro pode ser desligado na tela do personagem.
4. Os **⚡ Desafios da profissão** são mini problemas de verdade: calcular a dose de um remédio, achar o erro num código, ler um gráfico, conferir uma escala... Depois de cada um, o jogo pergunta se você **curtiria fazer aquilo todo dia** (😍 😐 😩).
5. Cada etapa mexe nas barras de **⚡ Energia** e **😰 Estresse** e mostra o que aconteceu e um quadro **Na vida real**.
6. No fim do dia sai o **relatório**: % de afinidade, ficha de personagem com gráfico radar e a sua **classe** (por exemplo, "Coração Valente"), como você terminou o dia, o que você provavelmente vai gostar, o que pode ser difícil, os desafios, suas decisões e os cursos da área.
7. Ganhe **medalhas** (tela **Conquistas**) e compare as profissões em **Comparar resultados**.

O botão 🔊 liga e desliga os sons. Se a página fechar no meio do dia, o progresso fica salvo e a tela inicial mostra o botão **Continuar**.

**IA (opcional):** com a IA ligada (botão **🤖 Ativar IA** na tela inicial), você pode **escrever com as suas palavras o que faria** em cada situação, e no fim do relatório conversar com um **orientador**. Veja a seção "IA (opcional)" abaixo. Sem a IA, o jogo funciona igual, só com as opções A a D.

## Estrutura

```
index.html                         telas do jogo
css/style.css                      visual (estilo jogo, responsivo, com versão para impressão)
js/afinidade.js                    cálculos: afinidade, energia/estresse e classe do perfil
js/armazenamento.js                salvar e ler no localStorage
js/conquistas.js                   lista de medalhas e regra de cada uma
js/efeitos.js                      sons (gerados pelo navegador) e confete
js/ia.js                           IA opcional: resposta livre e orientador (Claude Haiku 5.5)
js/app.js                          telas, botões, conversa, cronômetro e teclado
dados/tracos.js                    os 5 traços de perfil e as classes
dados/enfermagem.js                uma profissão por arquivo (este é o modelo comentado)
dados/desenvolvimento-sistemas.js
dados/gestao-hospitalar.js
dados/medicina.js
dados/veterinaria.js
dados/psicologia.js
dados/direito.js
dados/engenharia-civil.js
dados/professor.js
dados/design-grafico.js
dados/marketing-digital.js
```

Os dados ficam em arquivos `.js`, e não `.json`, porque o navegador bloqueia a leitura de JSON quando a página é aberta direto do computador (`file://`). Pelo mesmo motivo os scripts são comuns (sem `import`) e a **ordem dos `<script>` no `index.html` importa**: primeiro os dados, depois `afinidade.js`, `armazenamento.js`, `conquistas.js`, `efeitos.js` e `app.js`.

## Traços de perfil

| Traço | id | Classe no relatório |
| --- | --- | --- |
| 🤝 Lidar com pessoas | `pessoas` | Coração Valente |
| 🧩 Resolver problemas técnicos/lógicos | `logica` | Mente Brilhante |
| ⏱️ Trabalhar sob pressão | `pressao` | Cabeça Fria |
| 📋 Organização e rotina | `organizacao` | Mestre da Ordem |
| 💡 Criatividade | `criatividade` | Faísca Criativa |

Cada opção de escolha dá pontos (1 ou 2) para um ou mais traços. Cada profissão define o **peso** de cada traço, de 1 (pouco usado) a 5 (essencial):

| Profissão | Pessoas | Lógica | Pressão | Organização | Criatividade |
| --- | --- | --- | --- | --- | --- |
| 🩺 Enfermagem | 5 | 2 | 5 | 4 | 2 |
| 💻 Desenvolvimento de Sistemas | 2 | 5 | 3 | 3 | 4 |
| 🏥 Gestão Hospitalar | 4 | 3 | 4 | 5 | 3 |
| 🧑‍⚕️ Medicina | 4 | 5 | 5 | 3 | 2 |
| 🐾 Medicina Veterinária | 4 | 3 | 4 | 3 | 2 |
| 🧠 Psicologia | 5 | 3 | 4 | 3 | 3 |
| ⚖️ Direito | 4 | 4 | 3 | 5 | 3 |
| 🏗️ Engenharia Civil | 3 | 5 | 4 | 4 | 3 |
| 📚 Professor(a) | 5 | 2 | 3 | 4 | 4 |
| 🎨 Design Gráfico | 3 | 2 | 3 | 3 | 5 |
| 📣 Marketing Digital | 4 | 3 | 4 | 3 | 5 |

A **classe** do relatório vem do traço em que a pessoa foi mais forte no dia. O segundo traço mais forte (se tiver 40% ou mais) aparece como "ponto forte secundário".

## Como a afinidade é calculada

1. **Seu perfil**: em cada traço, os pontos que você fez são divididos pelo máximo possível naquele traço nas situações da profissão. O resultado vai de 0 a 100%.
2. **Perfil ideal**: peso × 20. Peso 5 vira 100%, peso 2 vira 40%.
3. **Proximidade** em cada traço: 100 − a diferença entre o seu perfil e o ideal.
4. **Afinidade**: média das proximidades, ponderada pelo peso. Traços essenciais contam mais.
5. **Gosto pelas tarefas reais**: a resposta de "você curtiria fazer isso todo dia?" depois dos desafios (😍 = 100%, 😐 = 50%, 😩 = 0%) entra nessa média como se fosse mais um traço, com **peso 3** e ideal de 100%.

**Acertar ou errar um desafio não muda a afinidade.** Quem joga ainda não estudou a profissão, então errar é normal; o que importa é se a pessoa gostou do tipo de tarefa. Acertar conta para as medalhas e errar aumenta um pouco o estresse.

Faixas: **75% ou mais** é alta afinidade, **50% a 74%** é moderada e **abaixo de 50%** é baixa. Quando o tempo de uma urgência acaba, a situação conta como uma escolha sem pontos.

No relatório, só os traços de peso 3 ou mais entram nas listas:
- **Você provavelmente vai gostar**: você ficou perto do ideal ou acima (até 15 pontos abaixo).
- **Pode ser difícil**: você ficou bem abaixo do ideal (mais de 25 pontos abaixo). Se nenhum traço ficar assim, aparece o lado difícil do traço mais importante, como alerta.

Não existe resposta "certa" como numa prova: o jogo compara o seu jeito de agir com o que a rotina da profissão exige. Escolher o caminho que mais combina com cada profissão (e curtir os desafios) dá de 90% a 97%; fugir de todas as partes difíceis dá de 15% a 27%.

**Ordem das opções:** a posição de cada opção na tela "gira" um pouco a cada etapa (`ordemDasOpcoes` em `js/app.js`), então a melhor opção não fica sempre na mesma letra, não importa a ordem em que você escreveu no arquivo. A regra é fixa (não é sorteio), então ao continuar um dia salvo tudo aparece no mesmo lugar.

## Energia e estresse

O dia começa com **100% de energia** e **10% de estresse**. A cada escolha:

- **Energia** cai 5, mais 2 para cada ponto da opção (escolhas que exigem mais esforço cansam mais), mais 3 se a situação for urgente.
- **Estresse** sobe 2 se a escolha combinou muito com a profissão, 8 se combinou em parte e 15 se combinou pouco (problemas mal resolvidos se acumulam), mais 3 em urgências.
- Se o tempo de uma urgência acabar: energia −6 e estresse +20.
- Desafios: energia −4; errar soma +8 de estresse.

A ideia é mostrar um lado real das profissões: fazer o trabalho bem feito cansa, e fugir dos problemas estressa. Energia e estresse não mudam a % de afinidade; eles aparecem no relatório em "Como você terminou o dia" e em algumas medalhas.

Para dar valores próprios a uma opção, use o campo `efeitos`, por exemplo `efeitos: { energia: -20, estresse: 5 }`.

## Conquistas

| Medalha | Como ganhar |
| --- | --- |
| 🎒 Primeiro expediente | Terminar o primeiro dia |
| 🧭 Explorador(a) | Jogar 3 profissões diferentes |
| 🎯 Na mosca | Ter 90% de afinidade ou mais |
| 🔁 Segunda chance | Jogar de novo uma profissão e melhorar a afinidade |
| 🧊 Sangue frio | Com o cronômetro ligado, responder todas as urgências do dia a tempo |
| 😅 Por um fio | Responder uma urgência com menos de 3 segundos sobrando |
| 🧘 Zen | Terminar o dia com estresse abaixo de 30% |
| 🔥 Dia intenso | Terminar o dia com menos de 30% de energia |
| ✍️ Com as próprias palavras | Responder uma situação escrevendo, com a IA ligada |
| 🐞 Caçador(a) de bugs | Acertar um desafio de achar o erro no código |
| 🧠 Gênio dos desafios | Acertar todos os desafios de um dia |
| 💛 Coração de ouro | 100% em Lidar com pessoas |
| 🧩 Mente afiada | 100% em Resolver problemas técnicos/lógicos |
| 🛡️ Nervos de aço | 100% em Trabalhar sob pressão |
| 🗂️ Tudo nos conformes | 100% em Organização e rotina |
| ✨ Ideia brilhante | 100% em Criatividade |

Para criar uma medalha nova, adicione um item à lista `CONQUISTAS` em `js/conquistas.js`, com `id`, `icone`, `nome`, `descricao` e uma função `verificar` que devolve `true` quando a medalha foi ganha. O comentário no topo do arquivo explica o que a função recebe.

## IA (opcional)

A IA é opcional e usa o **Claude Haiku 5.5** (modelo `claude-haiku-5-5`), da Anthropic, chamado direto do navegador pelo SDK oficial (carregado de uma CDN, sem instalar nada). O código está em `js/ia.js`.

**O que ela faz**
- **Resposta livre ("✍️ Fazer outra coisa…")**: o jogador escreve o que faria. A IA devolve (1) pontos de 0 a 2 nos 5 traços, (2) a resposta do personagem, em estilo de chat, e (3) o que aconteceu. A resposta fica salva com os próprios pontos, então o relatório não chama a IA de novo.
- **Orientador**: no fim do relatório, um chat (até 8 perguntas) que responde com base nos números do relatório, sem dizer "você deve ou não deve" seguir uma carreira.

Não há resposta livre em urgências com cronômetro (não dá tempo de escrever) nem nos desafios (que têm resposta certa).

**Como ligar**
1. Crie uma chave de API da Anthropic só para o projeto.
2. Na tela inicial, clique em **🤖 Ativar IA**, cole a chave e clique em **Testar e ativar**.
3. Por padrão a chave some quando a aba fecha. A opção "Lembrar neste navegador" guarda a chave no `localStorage`.

**Segurança e privacidade**
- A chave **nunca** vai para o código nem para o GitHub: cada pessoa cola a sua. Ela fica no navegador de quem a colou. Como o SDK roda no navegador, quem abrir as ferramentas do navegador consegue ver a chave (o nome da opção, `dangerouslyAllowBrowser`, é esse aviso). Use uma chave só para o projeto, apague depois e não deixe a IA ligada em computador compartilhado.
- O jogo **não envia nome nem avatar**: só a profissão, a situação e o texto digitado. O texto digitado vai para a Anthropic pela internet, e a tela avisa para não escrever dados pessoais.
- Os pontos da IA são **travados no código** (`limitarPontosLivres`, em `js/afinidade.js`): cada traço fica entre 0 e o máximo das opções da situação, e a soma nunca passa da melhor opção oficial. A IA não consegue "dar nota máxima", mesmo que o jogador peça no texto.
- O texto do jogador entra no pedido entre marcações e o prompt manda a IA tratá-lo só como a ação do personagem. Textos ofensivos, sem sentido ou que tentem dar ordens à IA são recusados e não contam.
- Se a internet cair, a chave falhar ou a IA recusar, o jogo mostra o motivo e você volta para as opções A a D.

**Custo e detalhes**
- Estimativa com o preço de tabela do Haiku 5.5 (US$ 0,10 por milhão de tokens de entrada e US$ 0,50 de saída): cerca de 8 chamadas por partida custam menos de 1 centavo de dólar. O modelo usa `effort: "medium"` e respostas em JSON (structured outputs).
- Não enviamos `temperature`, `top_p` nem `top_k`: o Haiku 5.5 não aceita esses parâmetros.
- A IA responde de forma diferente a cada vez, então a mesma resposta pode receber pontos levemente diferentes. O teto de pontos reduz isso, mas não elimina.
- Para trocar o modelo, mude `IA_MODELO` em `js/ia.js`.
- A IA foi testada com respostas simuladas. Abra o jogo por um endereço `https://` (como o GitHub Pages) ou `http://localhost`; abrir o `index.html` com dois cliques (`file://`) não foi testado com a IA.
- Se quiser a IA liberada para todo mundo no site, o caminho seguro é um servidor intermediário que guarda a chave e limita o uso (não incluído).

## Como adicionar uma profissão

1. Copie `dados/enfermagem.js` para um arquivo novo, por exemplo `dados/direito.js`. O comentário no topo dele explica cada campo.
2. Troque `id`, `nome`, `icone`, `cor`, `resumo` e `cursos`.
3. Em `perfil`, defina o **peso** de cada um dos 5 traços e os textos `gostar` e `dificil`.
4. Escreva de 5 a 6 situações, em ordem de horário, cada uma com 3 ou 4 opções. Em cada opção, `pontos` diz quais traços ela mostra, por exemplo `{ pessoas: 2, pressao: 1 }`. Uma opção que mostra dificuldade com a rotina fica com `pontos: {}`.
5. Deixe as situações mais vivas com `cena` (emojis), `conversa` (falas dos personagens), `reacao` em cada opção (o que o personagem responde) e `urgente: true` nas situações de pressão.
6. Crie 2 desafios com tarefas de verdade da profissão (veja "Como criar um desafio" abaixo) e coloque-os no meio das situações, na ordem do horário.
7. No `index.html`, adicione a linha junto dos outros arquivos de dados:

   ```html
   <script src="dados/direito.js"></script>
   ```

Resumo de um arquivo de profissão:

```js
PROFISSOES.push({
  id: "direito",
  nome: "Direito",
  icone: "⚖️",
  cor: "#1d4ed8",
  resumo: "Uma frase sobre o que a pessoa faz.",
  perfil: {
    pessoas:      { peso: 4, gostar: "...", dificil: "..." },
    logica:       { peso: 4, gostar: "...", dificil: "..." },
    pressao:      { peso: 3, gostar: "...", dificil: "..." },
    organizacao:  { peso: 4, gostar: "...", dificil: "..." },
    criatividade: { peso: 2, gostar: "...", dificil: "..." }
  },
  cursos: ["Bacharelado em Direito — cerca de 5 anos"],
  situacoes: [
    {
      horario: "08:00",
      titulo: "Audiência marcada",
      cena: "⚖️ 📚 ⏰",
      descricao: "Uma frase de narração.",
      conversa: [
        { quem: "Dona Rosa, cliente", avatar: "👵🏽", fala: "Doutor(a), eu vou perder a minha casa?" }
      ],
      urgente: true,          // opcional: cronômetro de 20 segundos
      naVidaReal: "Explicação mostrada depois da escolha.",
      opcoes: [
        { texto: "O que eu faço", reacao: "ai, obrigada, doutor(a) 🙏", resultado: "O que aconteceu", pontos: { logica: 2, organizacao: 1 } },
        { texto: "Outra escolha", reacao: "hmm... tá bom", resultado: "O que aconteceu", pontos: { pessoas: 1 } },
        { texto: "Escolha que foge da rotina", reacao: "como assim?! 😡", resultado: "O que aconteceu", pontos: {} }
      ]
    }
    // ...mais situações e 2 desafios
  ]
});
```

A profissão nova aparece sozinha na escolha, no relatório, na comparação e na medalha Explorador(a). O jogo já vem com 11 profissões; as de Medicina até Marketing Digital podem servir de exemplo para as próximas.

**Dicas para os diálogos não ficarem robotizados:**
- Escreva como as pessoas falam no WhatsApp: frases curtas, "tô", "pra", "cê", emojis.
- Quebre uma fala longa em 2 ou 3 mensagens seguidas.
- Dê personalidade a cada personagem (apressado, piadista, seco, nervoso...).
- O personagem não explica a situação para o jogador: ele só fala o que diria de verdade. Quem explica é a `descricao` (narração) e o quadro "Na vida real".

## Como criar um desafio

Um desafio é uma etapa com `tipo: "desafio"`. Existem 3 formatos:

| Formato | O que a pessoa faz | Campos |
| --- | --- | --- |
| `escolha` | Escolhe a alternativa certa (pode ter um gráfico de barras) | `alternativas`, `correta`, e opcionais `grafico` e `unidade` |
| `encontre-o-erro` | Toca na linha errada (de um código, prescrição, escala...) | `linhas`, `correta`, e opcional `codigo: true` |
| `ordenar` | Toca nos passos na ordem certa | `itens` (já na ordem certa; o jogo embaralha) |

`correta` é a posição do item certo, **começando em 0**. Todo desafio também tem `horario`, `titulo`, `pergunta` e `explicacao`, e pode ter `cena`, `conversa`, `traco` (só para mostrar qual traço o desafio exercita) e `tempo` (segundos de cronômetro).

```js
{
  tipo: "desafio",
  formato: "encontre-o-erro",
  horario: "10:45",
  titulo: "Ache o bug",
  cena: "🐛 💻 🔎",
  conversa: [
    { quem: "Lucas, desenvolvedor sênior", avatar: "🧑🏻‍💻", fala: "quando tem 3 itens, quebra. me fala onde tá o erro 👇" }
  ],
  pergunta: "Toque na linha com o erro:",
  linhas: [
    "for (let i = 0; i <= itens.length; i++) {",
    "  total = total + itens[i].preco;",
    "}"
  ],
  correta: 0,
  codigo: true,
  explicacao: "Com <=, o laço tenta ler uma posição que não existe. O certo é i < itens.length.",
  traco: "logica"
}
```

Os desafios que já existem:

| Profissão | Desafio 1 | Desafio 2 |
| --- | --- | --- |
| 🩺 Enfermagem | 💊 Hora da medicação (cálculo de dose) | 🏷️ Confira a pulseira (encontre o erro) |
| 💻 Desenv. de Sistemas | 🐛 Ache o bug (encontre o erro no código) | 🔐 Monte o login (ordenar) |
| 🏥 Gestão Hospitalar | 📊 Leia os dados (gráfico) | 📅 Confira a escala (encontre o erro) |
| 🧑‍⚕️ Medicina | 🧪 Leia o exame (gráfico) | 📝 Receita errada (alergia a penicilina) |
| 🐾 Medicina Veterinária | ⚖️ Dose por peso (cálculo) | 📋 Confira a ficha (data da vacina) |
| 🧠 Psicologia | 💜 Qual resposta acolhe? (escuta ativa) | 🛋️ Monte a sessão (ordenar) |
| ⚖️ Direito | 📑 Cláusula abusiva (encontre o erro) | 📅 Qual prazo vence primeiro? (gráfico) |
| 🏗️ Engenharia Civil | 🧮 Quantidade de piso (cálculo) | 🪜 Vistoria do andaime (encontre o erro) |
| 📚 Professor(a) | ➗ Confira o gabarito (encontre o erro) | 🧩 Monte a aula (ordenar) |
| 🎨 Design Gráfico | 🔤 Qual fonte escolher? | 🖨️ Confira o arquivo (CMYK × RGB) |
| 📣 Marketing Digital | 📊 Leia a campanha (gráfico) | 📝 Revise o anúncio (conta do desconto) |

**Dicas para a pontuação ficar justa:**
- Traço de peso alto: a melhor opção de cada situação deve dar os pontos máximos nele.
- Traço de peso baixo: deixe os pontos dele mais em opções que não são as melhores.
- Todo traço precisa aparecer em pelo menos uma opção; senão, ele fica fora da conta.
- Varie a posição da melhor opção (nem sempre a A).

Se algo estiver errado (um traço com nome digitado errado, um peso faltando, uma fala vazia, um id repetido, um desafio com `correta` fora da lista), o jogo avisa no console do navegador (tecla F12, aba Console).

## Dados salvos (localStorage)

| Chave | Conteúdo |
| --- | --- |
| `umDiaNaProfissao.jogador` | último nome e avatar |
| `umDiaNaProfissao.progresso` | dia em andamento (profissão, situação atual, escolhas, urgências) |
| `umDiaNaProfissao.resultados` | partidas concluídas (nome, avatar, profissão, data e escolhas) |
| `umDiaNaProfissao.conquistas` | medalhas de cada jogador, com a data em que foram ganhas |
| `umDiaNaProfissao.preferencias` | som e cronômetro ligados ou desligados |
| `umDiaNaProfissao.chaveIA` | chave da IA, só se a pessoa a colou (na aba, ou aqui se marcou "lembrar") |

A afinidade, a energia e o estresse são recalculados a partir das escolhas sempre que um resultado é exibido. Assim, se alguém ajustar a pontuação de uma profissão, os resultados antigos acompanham a mudança.

Os dados ficam só no navegador e no computador em que o jogo foi aberto. O botão **Apagar resultados e medalhas**, na tela de comparação, limpa tudo.
