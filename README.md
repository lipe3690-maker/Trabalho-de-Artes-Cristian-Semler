# Trilha do Patrimônio — Expedição Brasil

Jogo educativo local para **2, 3 ou 4 jogadores**, com quatro como padrão. Mapa real do Brasil, percursos de 27 ou 54 casas, 135 perguntas, fotografias reais e sete tipos de desafio, em HTML, CSS e JavaScript puro.

## Comece por aqui

1. Extraia o ZIP inteiro e entre na pasta `trilha-do-patrimonio`.
2. Abra `index.html` no navegador. Não abra o arquivo de dentro do compactador.
3. Em **Iniciar partida**, escolha **2, 3 ou 4 jogadores**. A opção inicial é 4.
4. Escolha nomes, avatares e cores diferentes. A seleção mantém os nomes digitados ao alternar a quantidade de pessoas.
5. Deixe **Aventura completa** para alternar os minijogos; **Clássico** mantém somente o quiz.
6. Escolha **Jogo rápido (27 casas)** ou **Jogo longo (54 casas, padrão)**.
7. Clique em **Começar partida**. Veja a abertura com os integrantes e a mensagem de boa sorte. Ela avança automaticamente em 8,5 segundos; **Vamos explorar** permite avançar antes.
8. Lance o dado, veja os passos do peão e clique em **Iniciar desafio** depois da chegada.
9. Ao final, explore a **revisão do aprendizado**, com filtros por jogador e dificuldades.

Não há login, backend, API paga ou pacote para instalar. Os scripts são clássicos; os dados, o SVG e as fotos são locais. A pasta extraída pode jogar sem internet. Links de fontes exigem conexão. Se o navegador limitar páginas `file://` ou seu armazenamento, abra a pasta pelo VS Code com **Live Server** e escolha **Open with Live Server** em `index.html`.

## Sete tipos de desafio

| Tipo | Como jogar | Limite | Pontos por sucesso |
| --- | --- | --- | --- |
| Quiz do patrimônio | Responda uma das 135 perguntas, sobre a UF de chegada | Uma resposta | Fácil 10, médio 20, difícil 30 |
| Restaure a fotografia | Selecione duas peças para trocar e montar a fotografia do patrimônio visitado | 12 trocas | 20 |
| Memórias do Brasil | Vire duas cartas e encontre quatro pares de fotografias reais | 9 tentativas de pares | 20 |
| Cartógrafo por um dia | Clique no território da UF indicada no mapa, usando zoom se precisar | 2 tentativas distintas | 20 |
| Guardiões do patrimônio | Classifique seis atitudes como cuidado ou risco, com consequências explicadas | Pelo menos 4 acertos em 6 atitudes | 20 |
| Conexões do Brasil | Ligue três fotografias às respectivas regiões | 6 tentativas | 20 |
| Rota da memória | Observe quatro destinos, esconda a rota e reconstrua a ordem | O segundo erro encerra | 20 |

No modo aventura, os tipos se alternam por jogador. Ao longo de sete turnos próprios, cada participante recebe os sete tipos, inclusive em grupos de duas ou quatro pessoas. A seleção não prende um jogador ao mesmo minijogo. As cartas de memória sempre incluem o patrimônio da UF de chegada e três outras UFs.

No quebra-cabeça, abra **Ver fotografia de referência** se precisar. Trocar peças não é um jogo de deslizar: qualquer posição pode trocar com qualquer outra. Selecionar a mesma peça novamente cancela a seleção, sem gastar uma troca.

Na memória, duas cartas erradas ficam visíveis por um instante antes de voltar. Não é possível abrir uma terceira carta durante esse intervalo. Acertar um par mantém as duas cartas abertas.

No cartógrafo, uma tentativa no estado errado o marca em vermelho; repetir o mesmo estado não consome outra chance. O DF está na posição e na escala geográfica real, portanto use o zoom para selecioná-lo.

Os minijogos possuem **Encerrar desafio (−2 casas)** para quem preferir passar a vez. O resultado é uma falha, sem pontos naquele desafio.

## A viagem aparece antes do desafio

A sequência de uma jogada é:

1. O dado gira em 3D e para no número sorteado.
2. O resultado permanece visível antes do movimento.
3. A câmera enquadra o trajeto completo.
4. O avatar salta de casa em casa, com som, iluminação e contador de passos.
5. Um cartão anuncia o estado de chegada.
6. O próprio jogador clica em **Iniciar desafio**. Nenhuma pergunta ou minijogo encobre o deslocamento automaticamente.
7. Após o resultado, a janela fecha para mostrar também o avanço de bônus ou o recuo; depois aparecem a explicação e o botão **Continuar**.

**Animações rápidas** encurta a duração, mantendo os passos. **Movimento reduzido** respeita a preferência de acessibilidade e desativa giros e deslocamentos animados; o cartão de chegada continua exigindo o clique para abrir o desafio.

## Turnos, pontos e fim da partida

- Participam somente as pessoas escolhidas na preparação: 2, 3 ou 4. Não há peões ou turnos de jogadores ausentes.
- A ordem segue os jogadores selecionados; ao voltar ao primeiro, começa outra rodada.
- Cada turno tem um dado e um desafio. O dado sorteia 1–6 com `crypto.getRandomValues` e rejeição do viés de módulo; há alternativa com `Math.random` se a API não existir.
- Concluir o desafio dá seus pontos e **+2 casas**. Falhar dá zero pontos e **−2 casas**.
- Os limites são a casa 1 e a última casa. Não é preciso tirar o número exato no fim.
- O bônus e o recuo não abrem outro desafio.
- A carta especial pertence à casa original do dado, e não à casa do bônus. Ela aparece depois do desafio e do movimento, uma única vez, sem outro desafio ou turno extra.
- No percurso longo, as casas especiais são 7, 16, 24, 33, 42 e 49. No rápido, os mesmos efeitos ficam em 4, 8, 12, 17, 21 e 25.
- A chegada só é confirmada depois do desafio, do bônus/recuo e da eventual carta. Falhar na última casa pode fazer o jogador voltar à trilha.
- Quem conclui aguarda; seus turnos são pulados. O jogo termina quando **todos os jogadores selecionados** chegam.
- Vence quem tiver mais pontos, depois mais sucessos, menos falhas e melhor ordem de chegada. Chegar primeiro não garante vencer.
- O álbum desbloqueia as UFs percorridas, inclusive em bônus e cartas. A galeria tem busca e filtros por estado e região.
- As perguntas de cada UF só voltam a ser usadas depois de esgotar as cinco. Alternativas são embaralhadas e seu gabarito é preservado.

## Apresentação do trabalho e revisão

Integrantes: **Cristian Semler, Davi Dario, Kauan, Hiago e Ana Laura**. Os nomes aparecem na abertura animada, no rodapé, em Sobre o projeto e nos créditos. A abertura apresenta o objetivo educativo e deseja boa sorte aos participantes pelo nome. Movimento reduzido mantém o conteúdo legível sem animações. Toda nova partida, inclusive um reinício, tem abertura; uma partida já em andamento retoma de onde parou.

O final mostra o pódio e a revisão. Cada resultado é registrado uma única vez, com jogador, rodada, UF, tipo, sucesso e pontos do desafio. No quiz, a revisão mostra a resposta escolhida, o gabarito, a explicação e a fonte. Os minijogos mostram suas soluções, pares, conexões, decisões e sequências. É possível filtrar um jogador, mostrar somente dificuldades ou abrir mais registros. Os pontos exibidos na revisão são os pontos dos desafios; cartas especiais entram no total do pódio e no diário.

Partidas antigas não têm respostas detalhadas anteriores ao registro da revisão. Elas continuam jogáveis; a interface informa quando a revisão é parcial. A revisão completa permanece no salvamento da partida atual e no JSON exportado. O histórico de 30 partidas guarda os resultados resumidos.

## Salvamento e compatibilidade

A partida é salva antes das animações e depois de cada interação dos minijogos. Ficam salvos o grupo, o modo, o dado, o desafio atual, a ordem das opções, peças trocadas, cartas abertas, pares encontrados e tentativas no mapa.

Se a página atualizar antes da chegada, o jogo reapresenta o mesmo trajeto, sem sortear outro dado ou contabilizar o turno novamente. Se o desafio já estava aberto, **Continuar partida** retoma esse desafio com o progresso salvo. Pontos, bônus e cartas especiais não são reaplicados.

Salvamentos das edições 1 e 2 continuam compatíveis. Eles usam o percurso longo e não repetem a abertura de uma partida já iniciada. A pergunta que estava aberta mantém seu gabarito e suas alternativas. O motor migra esses dados para o formato atual sem apagar a pontuação.

Os dados ficam somente neste navegador, com o prefixo `trilha-patrimonio-v1:`. Outro navegador, computador ou endereço terá dados diferentes. Não há coleta, telemetria ou envio dos nomes pelo jogo. Use **Pausa → Exportar salvamento** para levar a partida e **Importar salvamento** para carregá-la. Importar substitui a partida atual após validar o arquivo. O histórico guarda até 30 partidas concluídas.

## Arquivos e personalização

| Arquivo | O que alterar |
| --- | --- |
| `index.html` | Telas, textos do menu e preparação |
| `style.css` | Paleta em `:root`, layout e responsividade da base |
| `desafios.css` | Seleção de pessoas, chegada, animações e minijogos |
| `expedicao.css` | Abertura, seleção de percurso, novos minijogos e revisão |
| `revisao.js` | Resumos e soluções dos resultados registrados |
| `script.js` | Interface, áudio, apresentação do trajeto e telas dos desafios |
| `desafios.js` | Regras dos seis minijogos, limites e validação de progresso |
| `jogadores.js` | Grupos de 2–4, turnos, pontuação, cartas e migração de salvos |
| `mapa.js` | Geometria IBGE, `ROTA`, câmera e movimentação casa a casa |
| `perguntas.js` | 135 perguntas, respostas, dificuldades e fontes |
| `patrimonios.js` | 27 fichas, fotografias e suas atribuições |
| `ranking.js` / `storage.js` | Classificação, histórico e armazenamento |
| `FONTES.md` | Referências históricas por UF |
| `TESTES.md` / `tests/core.test.cjs` | Validações e roteiro manual |

### Perguntas e fotografias

Em `perguntas.js`, cada item tem `id`, `uf`, `difficulty`, `prompt`, `options`, `answer`, `explanation`, `sourceUrl` e `sourceTitle`. `answer` é o índice da alternativa correta no array original: **0, 1, 2 ou 3**. Use IDs únicos, quatro alternativas distintas e os níveis `facil`, `medio` ou `dificil`. Verifique as informações na fonte antes de editar.

Em `patrimonios.js`, edite `heritage`: `name`, `city`, `year`, `summary`, `importance`, `curiosity`, `protection` e `photo`. As fotografias estão em `assets/imagens/UF.jpg`. Preserve e atualize `photoCredit` e `assets/imagens/CREDITOS.md`. As fotos alimentam também os quebra-cabeças e a memória. As duas fotos do menu ficam diretamente em `index.html` (RJ e SC).

### Regras, minijogos e quantidade de casas

Em `jogadores.js`, `RULES` define os pontos do quiz, o bônus e o recuo; `CARDS` associa números de casas começando em 1 aos efeitos. Minijogos valem 20 pontos no método `resolve`; seus limites estão em `desafios.js` (12 trocas, 9 pares tentados, 2 tentativas no mapa). Atualize os textos da interface se mudar uma regra.

`window.ROTA` em `mapa.js` contém 54 objetos `{uf,x,y}`, duas casas interiores por UF. O motor deriva `engine.route`: 54 pontos no longo e um ponto por UF no rápido, preservando o destino final. O tabuleiro recebe essa rota e suas cartas como parâmetros; geometria, câmera, peões e limites usam o mesmo percurso. Ao personalizar, mantenha os pontos dentro das geometrias reais e atualize os textos e testes. As linhas da trilha são o roteiro do jogo, não estradas reais; alguns segmentos atravessam outras UFs. A UF do destino é sempre a declarada na casa onde o dado parou.

### Ritmo, cores e som

`playJourney` em `script.js` controla giro do dado, pausa de resultado e anúncio de chegada. `MapBoard.move` em `mapa.js` controla a duração por casa, o salto e a pausa entre casas; `fitJourney` enquadra o percurso. Todos respeitam movimento reduzido. Sons e música são originais, gerados com Web Audio no objeto `audio`, em `script.js`; não há downloads de áudio. Veja `assets/sons/LEIA-ME.md` para substituir por gravações próprias.

Cores gerais ficam nas variáveis de `style.css`. Cores de peões e avatares ficam em `Jogadores.COLORS` e `Jogadores.AVATARS`. Ao alterar IDs de perguntas, a quantidade de casas ou as regras dos minijogos, prefira iniciar uma nova partida para evitar incompatibilidade com progresso anterior.

## Publicar gratuitamente no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `trilha-do-patrimonio`. Para GitHub Free, use um repositório público.
2. Clique em **Add file → Upload files** e envie **o conteúdo da pasta extraída**. `index.html` deve ficar na raiz, no mesmo nível de `style.css`; preserve a pasta `assets` completa. Não envie apenas o ZIP e não deixe uma pasta adicional envolvendo todos os arquivos.
3. Confirme o envio com **Commit changes**.
4. Abra **Settings → Pages** no repositório.
5. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
6. Selecione a branch que contém os arquivos (normalmente `main`) e a pasta **/(root)**. Clique em **Save**.
7. Aguarde a conclusão da publicação. A tela Pages exibirá o endereço e o botão **Visit site**. Se necessário, acompanhe a execução em **Actions**.
8. Abra o link e teste uma jogada antes de apresentar. As próximas alterações publicadas na mesma branch atualizam o site.

Não há build, dependências ou configuração de backend. Todos os caminhos são relativos para funcionar em subpastas do GitHub Pages. O arquivo `.nojekyll` evita processamento desnecessário; o nome `index.html` deve permanecer em minúsculas.

Referências oficiais: [configuração da origem de publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) e [criação de um site Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Fontes e licenças

O mapa é derivado da malha oficial **IBGE BR_UF_2022**, não de fronteiras fictícias. A conversão usa projeção equiretangular com paralelo central de 15° S e simplificação subpixel. O DF conserva sua escala geográfica real; aproxime o mapa para inspecioná-lo. Ilhas oceânicas distantes podem ficar fora da janela continental. Detalhes e URL original estão em `assets/mapas/FONTE.md`.

As fichas e perguntas usam fontes primárias do IPHAN, IBGE, UNESCO, Ibram, instituições dos patrimônios e órgãos públicos. Referências por UF em `FONTES.md` e nos próprios objetos. O texto separa tombamento e reconhecimento internacional e evita datas divergentes sem confirmação. Consulta de preparação: 23/10/2026. O acervo é uma seleção educativa de um patrimônio por UF; não é um inventário completo do país.

Fotografias: Wikimedia Commons, com autores, fontes e licenças individuais em `assets/imagens/CREDITOS.md`. Fotos CC BY-SA continuam sob a mesma licença após redimensionamento. A licença MIT do código não se aplica a esses materiais de terceiros. Sons e ícones do projeto são originais.

## Testes

Com Node.js 18 ou superior, execute na pasta extraída:

```bash
node --test tests/core.test.cjs
```

Node é opcional e só executa os testes. Não é necessário para jogar. A suíte atual possui 40 verificações e simula 1.000 partidas: 100 clássicas, 300 de aventura no percurso original e 600 distribuídas entre os percursos rápido/longo e grupos de 2, 3 e 4 pessoas. Detalhes em `TESTES.md`.
