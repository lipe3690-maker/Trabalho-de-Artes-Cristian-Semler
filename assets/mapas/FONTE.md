# Fonte e processamento do mapa

- **Autor da base geográfica:** Instituto Brasileiro de Geografia e Estatística (IBGE).
- **Produto:** Malha Municipal Digital 2022, agregado de Unidades da Federação, arquivo `BR_UF_2022` (27 feições: 26 estados e Distrito Federal).
- **Download oficial usado:** https://geoftp.ibge.gov.br/organizacao_do_territorio/malhas_territoriais/malhas_municipais/municipio_2022/Brasil/BR/BR_UF_2022.zip
- **Página do produto:** https://www.ibge.gov.br/geociencias/todos-os-produtos-geociencias/15774-malhas.html
- **Documentação da API de malhas (contexto):** https://servicodados.ibge.gov.br/api/docs/malhas?versao=3
- **Consulta/obtenção:** 23 de outubro de 2026.

A API simplificada respondeu 503 durante a preparação. Por isso foi baixado o shapefile original diretamente do servidor oficial do IBGE. As geometrias foram lidas do `.shp`, as siglas e os nomes foram lidos do `.dbf`. O arquivo original possui 1.138.650 vértices. Não foram desenhadas divisas manualmente.

Para a apresentação digital, as coordenadas foram projetadas com norte para cima em projeção equiretangular com paralelo central de 15° S, preservando as proporções desta projeção. A simplificação de Douglas-Peucker tem tolerância máxima de 0,33 unidades no SVG 880 × 900. Ilhotas de área inferior a aproximadamente 0,11 px² foram suprimidas da renderização. O conteúdo é uma representação educativa simplificada; a malha original é a referência para usos cartográficos técnicos.

A janela do SVG foi ajustada ao território continental e às ilhas próximas. As ilhas oceânicas mais distantes não cabem na janela e podem estar cortadas; permanecem nas coordenadas dos estados correspondentes. O campo `bounds` corresponde à porção principal do estado para evitar que Fernando de Noronha e Trindade ampliem o zoom; `center` e `label` são pontos internos encontrados por busca da maior distância às bordas. O DF permanece na posição e escala geográfica correta.

## Crédito para inclusão no jogo

> Base cartográfica: IBGE, Malha de Unidades da Federação 2022. Simplificação e projeção para uso educativo.

Trata-se de dados públicos obtidos do canal oficial. Este projeto não atribui uma licença Creative Commons específica à base cartográfica; mantenha o crédito e as referências do IBGE. A licença do código do jogo não modifica a titularidade dos materiais de terceiros.

## Arquivos

- `brasil-estados.svg`: mapa independente, 27 paths `UF-AC` etc., com títulos acessíveis.
- `geometry.json`: paths, pontos internos, rótulos e limites para montagem interativa.
- `official-data-summary.json`: atributos originais e sistema de referência do shapefile.
- `build_geo.py`: procedimento reprodutível de conversão/simplificação.
