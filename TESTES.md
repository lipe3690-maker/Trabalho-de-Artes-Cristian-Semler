# Verificação da terceira edição

Suíte com **40 testes automáticos aprovados**. Execute `node --test tests/core.test.cjs` na pasta extraída (Node.js 18 ou superior, opcional; não é necessário para jogar).

## Regras e conteúdo

- Grupos reais de 2, 3 e 4 jogadores, com quatro como padrão; cores distintas e turnos sem participantes ausentes.
- 27 UFs, 135 perguntas com gabaritos e fontes, 27 fotografias locais com créditos.
- Percurso longo com 54 casas e rápido com 27; origem no RS e chegada no DF. Todas as casas derivam de pontos interiores da malha IBGE já verificada.
- Dado de 1–6, um lançamento por turno, limites do mapa, bônus de duas casas, recuo de duas casas e cartas da casa original.
- Cartas especiais nos dois percursos: mesmo efeito, aplicado uma vez, após o desafio.
- Pontuação, desempates, jogadores concluídos pulados e final somente depois de todos chegarem.
- Perguntas não se repetem antes de esgotar o banco da UF; alternativas embaralhadas sem perder o gabarito.
- Salvamento, álbum, preferências e histórico sem duplicação de pontos ou cartas.

## Sete desafios

- Cada jogador alterna os sete tipos em seus próprios turnos; um ciclo completo exige sete turnos próprios. Uma partida pode acabar antes de completar o ciclo.
- Quiz: respostas certas e erradas, 10/20/30 pontos conforme dificuldade.
- Quebra-cabeça: selecionar/cancelar, trocar peças, resolver e encerrar após 12 trocas.
- Memória: quatro pares, bloqueio de cartas repetidas e terceira carta, sucesso e limite de nove tentativas.
- Cartógrafo: duas chances, sucesso/falha, UF inválida ou repetida sem consumir chance.
- Guardiões: seis decisões, explicações, sucesso com pelo menos quatro classificações corretas.
- Conexões: três regiões distintas, selecionar foto antes de ligar, sucesso e limite de seis tentativas.
- Rota da memória: observar antes de responder, ordem preservada, tolerância a um erro e encerramento no segundo.
- Retomada dos seis minijogos com peças, cartas, decisões, seleções e sequências preservadas.

## Revisão e compatibilidade

- Um registro por desafio, sem duplicar ao continuar a jogada ou restaurar a partida.
- Pergunta, escolha do jogador, gabarito, explicação e fonte corretos na revisão.
- Soluções e estatísticas dos sete tipos; desafios encerrados pelo jogador identificados.
- Revisão total consistente com os sucessos e falhas de cada participante.
- Migração de salvamentos v1 e v2 para v3: progresso, pergunta e alternativas mantidos; percurso longo e revisão parcial explicitada.
- Nenhuma resposta antiga é inventada para preencher a revisão.
- Viagem e abertura do desafio continuam sendo checkpoints separados.
- HTML referencia recursos locais existentes. SVG tem as 27 UFs.

Cada execução completa simula **1.000 partidas**: 100 clássicas, 300 de aventura no percurso original e 600 distribuídas entre os percursos rápido/longo e grupos de 2, 3 e 4. Todas terminam com movimentos dentro dos limites e sem dar turnos a participantes concluídos. As 600 simulações novas também restauram partidas durante a execução e conferem a revisão completa. São simulações do motor, não mil partidas manuais.

## Conferência real no Chrome

Nesta edição foram conferidos pela interface:

- Preparação organizada em percurso e grupo; padrão longo/54 casas e quatro pessoas; início rápido com duas e três pessoas.
- Abertura com Cristian Semler, Davi Dario, Kauan, Hiago e Ana Laura, objetivo educativo e boa sorte com os nomes dos jogadores.
- Transição automática da abertura e retomada de uma partida já iniciada sem repetir a apresentação.
- Tabuleiro rápido com exatamente 27 casas, numeração, cartas e contadores consistentes.
- Giro do dado, viagem no mapa e cartão de chegada antes da abertura manual do quiz; nenhum modal encobre a viagem inicial.
- Guardiões concluído com seis decisões; atualizar a página depois da segunda decisão retoma na terceira.
- Conexões: erro inicial, correção e três pares concluídos com regiões correspondentes.
- Rota da memória: ocultação da ordem, um erro tolerado e sequência de quatro destinos concluída.
- Final de partida com pódio, estatísticas dos sete tipos, pergunta com resposta/gabarito/explicação, filtros por jogador e por dificuldades.
- Preparação, abertura e revisão em quadros de 390×844 e 768×1024. Larguras úteis de 375/753 px, sem rolagem horizontal.
- Revisão de missão no celular com texto completo: corrigidos o tamanho mínimo do grid e um conflito com o estilo do selo de dificuldade do quiz.
- Nenhum erro de JavaScript da aplicação observado no console durante esses fluxos. Mensagens externas da extensão de testes não pertencem ao jogo.

Os quatro tipos anteriores, movimentos de bônus, cartas, importação e preferências também mantêm a cobertura de regras e as conferências da edição anterior.

## Antes de apresentar

A conferência em quadros de tamanhos menores não substitui testes em todos os celulares físicos, navegadores ou projetores. O volume não foi medido nos alto-falantes da sala.

1. Extraia o ZIP inteiro e abra `index.html`. Se o navegador limitar arquivos locais, use Live Server.
2. Escolha o tamanho do percurso e 2, 3 ou 4 participantes; confira a abertura com o grupo.
3. Confira volume e leitura no projetor. Movimento reduzido mantém a apresentação sem animações; animações rápidas encurta os passos e é uma preferência separada do percurso rápido.
4. Lance o dado, veja a viagem e abra o desafio pelo cartão de chegada.
5. Conclua a partida e confira revisão, filtros e explicações.
6. Para transferir o progresso, use Pausa → Exportar e depois Importar. O ranking permanece local a cada navegador.
7. Para jogar offline, use a pasta extraída. Fontes externas e o primeiro carregamento do endereço hospedado precisam de conexão.
8. No GitHub Pages, envie todos os arquivos da nova versão, incluindo `expedicao.css` e `revisao.js`.
