/* BANCO DE PERGUNTAS: 5 por UF (135 no total).
   answer usa índice zero: 0=primeira alternativa, 1=segunda, 2=terceira, 3=quarta.
   A interface embaralha as opções, mantendo o gabarito. difficulty: facil, medio ou dificil. */
window.PERGUNTAS = [
  {
    "id": "AC-1",
    "difficulty": "facil",
    "prompt": "Em qual cidade acreana está o Palácio Rio Branco?",
    "options": [
      "Cruzeiro do Sul",
      "Rio Branco",
      "Brasiléia",
      "Xapuri"
    ],
    "answer": 1,
    "explanation": "O palácio fica na capital do Acre, Rio Branco.",
    "sourceUrl": "https://agencia.ac.gov.br/turismo-cultural-acreano-oferece-experiencia-unica/",
    "sourceTitle": "Governo do Acre — Turismo cultural acreano",
    "uf": "AC"
  },
  {
    "id": "AC-2",
    "difficulty": "facil",
    "prompt": "Que função cultural o Palácio Rio Branco também desempenha?",
    "options": [
      "Museu",
      "Aeroporto",
      "Estádio",
      "Estação ferroviária"
    ],
    "answer": 0,
    "explanation": "O Museu Palácio Rio Branco apresenta a história acreana.",
    "sourceUrl": "https://agencia.ac.gov.br/turismo-cultural-acreano-oferece-experiencia-unica/",
    "sourceTitle": "Governo do Acre — Turismo cultural acreano",
    "uf": "AC"
  },
  {
    "id": "AC-3",
    "difficulty": "medio",
    "prompt": "Qual tradição arquitetônica inspirou as colunas do Palácio Rio Branco?",
    "options": [
      "Gótica medieval",
      "Industrial ferroviária",
      "Clássica grega",
      "Modernista brutalista"
    ],
    "answer": 2,
    "explanation": "A fachada utiliza colunas dóricas e jônicas inspiradas nas construções gregas.",
    "sourceUrl": "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?id=437756&view=detalhes",
    "sourceTitle": "IBGE — Palácio Rio Branco",
    "uf": "AC"
  },
  {
    "id": "AC-4",
    "difficulty": "medio",
    "prompt": "Em que ano o Palácio Rio Branco foi inaugurado?",
    "options": [
      "1822",
      "1889",
      "1960",
      "1930"
    ],
    "answer": 3,
    "explanation": "A inauguração ocorreu em 1930, antes da conclusão integral da obra.",
    "sourceUrl": "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?id=437756&view=detalhes",
    "sourceTitle": "IBGE — Palácio Rio Branco",
    "uf": "AC"
  },
  {
    "id": "AC-5",
    "difficulty": "dificil",
    "prompt": "Quem elaborou o projeto arquitetônico do Palácio Rio Branco?",
    "options": [
      "Alberto Massler",
      "Oscar Niemeyer",
      "Antônio Landi",
      "Lina Bo Bardi"
    ],
    "answer": 0,
    "explanation": "O alemão Alberto Massler assina o projeto do palácio.",
    "sourceUrl": "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?id=437756&view=detalhes",
    "sourceTitle": "IBGE — Palácio Rio Branco",
    "uf": "AC"
  },
  {
    "id": "AL-1",
    "difficulty": "facil",
    "prompt": "Às margens de qual rio está o Centro Histórico de Penedo?",
    "options": [
      "Rio Doce",
      "Rio Acre",
      "São Francisco",
      "Rio Tietê"
    ],
    "answer": 2,
    "explanation": "Penedo se desenvolveu às margens do São Francisco.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/nordeste/penedo-al",
    "sourceTitle": "Iphan — Penedo (AL)",
    "uf": "AL"
  },
  {
    "id": "AL-2",
    "difficulty": "facil",
    "prompt": "Qual teatro histórico está localizado em Penedo?",
    "options": [
      "Teatro Amazonas",
      "Theatro Sete de Setembro",
      "Theatro da Paz",
      "Teatro Municipal de São Paulo"
    ],
    "answer": 1,
    "explanation": "O Theatro Sete de Setembro é uma referência cultural de Penedo.",
    "sourceUrl": "https://penedo.al.gov.br/2023/01/07/confira-5-lugares-imperdiveis-para-visitar-em-penedo/",
    "sourceTitle": "Prefeitura de Penedo — Lugares históricos",
    "uf": "AL"
  },
  {
    "id": "AL-3",
    "difficulty": "medio",
    "prompt": "O patrimônio edificado de Penedo reúne apenas construções de uma época?",
    "options": [
      "Sim, apenas do século XXI",
      "Sim, apenas medievais",
      "Sim, apenas de 1500",
      "Não; reúne obras coloniais e de outros períodos"
    ],
    "answer": 3,
    "explanation": "O conjunto abrange arquitetura religiosa antiga e exemplares civis modernos.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/nordeste/penedo-al",
    "sourceTitle": "Iphan — Penedo (AL)",
    "uf": "AL"
  },
  {
    "id": "AL-4",
    "difficulty": "medio",
    "prompt": "Em que ano o Iphan tombou o conjunto histórico e paisagístico de Penedo?",
    "options": [
      "1996",
      "1822",
      "2006",
      "1884"
    ],
    "answer": 0,
    "explanation": "O tombamento federal do conjunto ocorreu em 1996.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/nordeste/penedo-al",
    "sourceTitle": "Iphan — Penedo (AL)",
    "uf": "AL"
  },
  {
    "id": "AL-5",
    "difficulty": "dificil",
    "prompt": "Qual formato caracteriza o interior do Theatro Sete de Setembro de Penedo?",
    "options": [
      "Estrela",
      "Ferradura",
      "Hexágono",
      "Cruz grega"
    ],
    "answer": 1,
    "explanation": "O interior tem formato de ferradura, associado à tradição dos teatros italianos.",
    "sourceUrl": "https://penedo.al.gov.br/2017/09/16/theatro-sete-de-setembro-reabre-suas-portas-depois-de-dois-anos/",
    "sourceTitle": "Prefeitura de Penedo — Theatro Sete de Setembro",
    "uf": "AL"
  },
  {
    "id": "AP-1",
    "difficulty": "facil",
    "prompt": "Às margens de qual rio está a Fortaleza de São José de Macapá?",
    "options": [
      "São Francisco",
      "Paraná",
      "Amazonas",
      "Tietê"
    ],
    "answer": 2,
    "explanation": "A fortaleza foi erguida junto ao rio Amazonas.",
    "sourceUrl": "https://cadastro.museus.gov.br/museus/museu-fortaleza-de-sao-jose-de-macapa/",
    "sourceTitle": "Ibram / MuseusBr — Fortaleza de São José de Macapá",
    "uf": "AP"
  },
  {
    "id": "AP-2",
    "difficulty": "facil",
    "prompt": "Qual formato caracteriza a planta da Fortaleza de São José de Macapá?",
    "options": [
      "Circular",
      "Estrelado",
      "Triangular",
      "Espiral"
    ],
    "answer": 1,
    "explanation": "Sua planta em estrela pertence à tradição da arquitetura militar.",
    "sourceUrl": "https://secult.portal.ap.gov.br/pagina/vinculadas/museu-fortaleza-de-sao-jose-de-macapa",
    "sourceTitle": "Secult Amapá — Museu Fortaleza de São José de Macapá",
    "uf": "AP"
  },
  {
    "id": "AP-3",
    "difficulty": "medio",
    "prompt": "Qual era a finalidade original da Fortaleza de São José de Macapá?",
    "options": [
      "Hospedar artistas",
      "Produzir açúcar",
      "Organizar feiras",
      "Defender a Amazônia portuguesa"
    ],
    "answer": 3,
    "explanation": "O monumento foi construído como estrutura de defesa colonial.",
    "sourceUrl": "https://cadastro.museus.gov.br/museus/museu-fortaleza-de-sao-jose-de-macapa/",
    "sourceTitle": "Ibram / MuseusBr — Fortaleza de São José de Macapá",
    "uf": "AP"
  },
  {
    "id": "AP-4",
    "difficulty": "medio",
    "prompt": "Em qual século a Fortaleza de São José de Macapá foi construída?",
    "options": [
      "Século XVIII",
      "Século XV",
      "Século XX",
      "Século XXI"
    ],
    "answer": 0,
    "explanation": "As obras ocorreram entre 1764 e 1782, no século XVIII.",
    "sourceUrl": "https://cadastro.museus.gov.br/museus/museu-fortaleza-de-sao-jose-de-macapa/",
    "sourceTitle": "Ibram / MuseusBr — Fortaleza de São José de Macapá",
    "uf": "AP"
  },
  {
    "id": "AP-5",
    "difficulty": "dificil",
    "prompt": "Qual engenheiro é apontado como autor do projeto da Fortaleza de Macapá?",
    "options": [
      "Lúcio Costa",
      "Henrique Antônio Gallúcio",
      "Roberto Burle Marx",
      "Ramos de Azevedo"
    ],
    "answer": 1,
    "explanation": "A Secult amapaense atribui o projeto a Henrique Antônio Gallúcio.",
    "sourceUrl": "https://secult.portal.ap.gov.br/pagina/vinculadas/museu-fortaleza-de-sao-jose-de-macapa",
    "sourceTitle": "Secult Amapá — Museu Fortaleza de São José de Macapá",
    "uf": "AP"
  },
  {
    "id": "AM-1",
    "difficulty": "facil",
    "prompt": "Em qual cidade está o Teatro Amazonas?",
    "options": [
      "Manaus",
      "Belém",
      "Porto Velho",
      "Macapá"
    ],
    "answer": 0,
    "explanation": "O teatro está no Centro Histórico de Manaus.",
    "sourceUrl": "https://visite.museus.gov.br/instituicoes/museu-teatro-amazonas/",
    "sourceTitle": "Ibram / Visite Museus — Museu Teatro Amazonas",
    "uf": "AM"
  },
  {
    "id": "AM-2",
    "difficulty": "facil",
    "prompt": "Qual é a função principal do edifício do Teatro Amazonas?",
    "options": [
      "Quartel",
      "Mercado de peixes",
      "Fortaleza",
      "Casa de espetáculos"
    ],
    "answer": 3,
    "explanation": "O edifício recebe apresentações e também preserva um acervo histórico.",
    "sourceUrl": "https://visite.museus.gov.br/instituicoes/museu-teatro-amazonas/",
    "sourceTitle": "Ibram / Visite Museus — Museu Teatro Amazonas",
    "uf": "AM"
  },
  {
    "id": "AM-3",
    "difficulty": "medio",
    "prompt": "A construção do Teatro Amazonas está ligada à riqueza de qual atividade?",
    "options": [
      "Mineração de diamantes",
      "Extração da borracha",
      "Cafeicultura paulista",
      "Produção de trigo"
    ],
    "answer": 1,
    "explanation": "O teatro é um marco da prosperidade do ciclo da borracha.",
    "sourceUrl": "https://visite.museus.gov.br/instituicoes/museu-teatro-amazonas/",
    "sourceTitle": "Ibram / Visite Museus — Museu Teatro Amazonas",
    "uf": "AM"
  },
  {
    "id": "AM-4",
    "difficulty": "medio",
    "prompt": "Em que ano o Teatro Amazonas foi inaugurado?",
    "options": [
      "1764",
      "1930",
      "1896",
      "1960"
    ],
    "answer": 2,
    "explanation": "O Teatro Amazonas foi inaugurado em 31 de dezembro de 1896.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/assuntos/noticias/theatro-da-paz-e-teatro-amazonas-poderao-se-tornar-patrimonio-mundial-nos-proximos-anos",
    "sourceTitle": "Iphan — História do Theatro da Paz e do Teatro Amazonas",
    "uf": "AM"
  },
  {
    "id": "AM-5",
    "difficulty": "dificil",
    "prompt": "Quem pintou o pano de boca do Teatro Amazonas?",
    "options": [
      "Crispim do Amaral",
      "Cândido Portinari",
      "Athos Bulcão",
      "Tarsila do Amaral"
    ],
    "answer": 0,
    "explanation": "O pintor pernambucano Crispim do Amaral produziu o pano de boca.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/assuntos/noticias/theatro-da-paz-e-teatro-amazonas-poderao-se-tornar-patrimonio-mundial-nos-proximos-anos",
    "sourceTitle": "Iphan — História do Theatro da Paz e do Teatro Amazonas",
    "uf": "AM"
  },
  {
    "id": "BA-1",
    "difficulty": "facil",
    "prompt": "Em qual cidade está o bairro histórico do Pelourinho?",
    "options": [
      "Ilhéus",
      "Salvador",
      "Feira de Santana",
      "Porto Seguro"
    ],
    "answer": 1,
    "explanation": "O Pelourinho integra o centro histórico de Salvador.",
    "sourceUrl": "https://whc.unesco.org/en/list/309/",
    "sourceTitle": "UNESCO — Centro Histórico de Salvador",
    "uf": "BA"
  },
  {
    "id": "BA-2",
    "difficulty": "facil",
    "prompt": "Que elemento construído é característico das ruas históricas de Salvador?",
    "options": [
      "Iglus de gelo",
      "Pirâmides de vidro",
      "Casario de fachadas coloridas",
      "Arranha-céus sem janelas"
    ],
    "answer": 2,
    "explanation": "O casario colorido é parte expressiva da paisagem colonial.",
    "sourceUrl": "https://whc.unesco.org/en/list/309/",
    "sourceTitle": "UNESCO — Centro Histórico de Salvador",
    "uf": "BA"
  },
  {
    "id": "BA-3",
    "difficulty": "medio",
    "prompt": "Qual função histórica Salvador exerceu no Brasil colonial?",
    "options": [
      "Primeira capital",
      "Capital do Império Inca",
      "Sede da corte espanhola",
      "Capital federal inaugurada em 1960"
    ],
    "answer": 0,
    "explanation": "Salvador foi a primeira capital do Brasil.",
    "sourceUrl": "https://whc.unesco.org/en/list/309/",
    "sourceTitle": "UNESCO — Centro Histórico de Salvador",
    "uf": "BA"
  },
  {
    "id": "BA-4",
    "difficulty": "medio",
    "prompt": "Qual atividade se concentrava historicamente na Cidade Baixa de Salvador?",
    "options": [
      "Mineração de ouro em montanha",
      "Plantio de trigo alpino",
      "Fabricação de aviões",
      "Comércio ligado ao porto"
    ],
    "answer": 3,
    "explanation": "A Cidade Baixa se organizou em torno das atividades portuárias e comerciais.",
    "sourceUrl": "https://whc.unesco.org/en/list/309/",
    "sourceTitle": "UNESCO — Centro Histórico de Salvador",
    "uf": "BA"
  },
  {
    "id": "BA-5",
    "difficulty": "dificil",
    "prompt": "O que a escarpa do centro histórico de Salvador ajuda a explicar?",
    "options": [
      "A construção de canais de gelo",
      "A divisão entre Cidade Alta e Cidade Baixa",
      "A ausência de relevo na cidade",
      "O traçado de uma capital modernista"
    ],
    "answer": 1,
    "explanation": "O relevo organizou funções diferentes entre as duas partes da cidade.",
    "sourceUrl": "https://whc.unesco.org/en/list/309/",
    "sourceTitle": "UNESCO — Centro Histórico de Salvador",
    "uf": "BA"
  },
  {
    "id": "CE-1",
    "difficulty": "facil",
    "prompt": "Em qual capital está o Theatro José de Alencar?",
    "options": [
      "Fortaleza",
      "Natal",
      "Teresina",
      "João Pessoa"
    ],
    "answer": 0,
    "explanation": "O teatro fica no centro de Fortaleza.",
    "sourceUrl": "https://www.bndes.gov.br/wps/portal/site/home/onde-atuamos/cultura-e-economia-criativa/patrimonio-cultural-brasileiro/projetos-apoiados/theatro-jose-alencar/theatro-jose-alencar",
    "sourceTitle": "BNDES — Theatro José de Alencar",
    "uf": "CE"
  },
  {
    "id": "CE-2",
    "difficulty": "facil",
    "prompt": "Qual tipo de patrimônio é o edifício do Theatro José de Alencar?",
    "options": [
      "Uma receita culinária",
      "Uma dança",
      "Uma língua indígena",
      "Uma construção histórica"
    ],
    "answer": 3,
    "explanation": "Seu edifício e seus elementos arquitetônicos são patrimônio material.",
    "sourceUrl": "https://www.ce.gov.br/2020/06/16/theatro-jose-de-alencar-comemora-110-anos-com-programacao-virtual/",
    "sourceTitle": "Governo do Ceará — História do Theatro José de Alencar",
    "uf": "CE"
  },
  {
    "id": "CE-3",
    "difficulty": "medio",
    "prompt": "Qual material se destaca na estrutura da fachada interna do teatro?",
    "options": [
      "Palha",
      "Ferro",
      "Gelo",
      "Bambu"
    ],
    "answer": 1,
    "explanation": "A estrutura metálica e os gradis em ferro são características do teatro.",
    "sourceUrl": "https://www.bndes.gov.br/wps/portal/site/home/onde-atuamos/cultura-e-economia-criativa/patrimonio-cultural-brasileiro/projetos-apoiados/theatro-jose-alencar/theatro-jose-alencar",
    "sourceTitle": "BNDES — Theatro José de Alencar",
    "uf": "CE"
  },
  {
    "id": "CE-4",
    "difficulty": "medio",
    "prompt": "Quem projetou o jardim do Theatro José de Alencar?",
    "options": [
      "Oscar Niemeyer",
      "Lúcio Costa",
      "Roberto Burle Marx",
      "Aleijadinho"
    ],
    "answer": 2,
    "explanation": "O paisagista Roberto Burle Marx é autor do projeto do jardim.",
    "sourceUrl": "https://www.bndes.gov.br/wps/portal/site/home/onde-atuamos/cultura-e-economia-criativa/patrimonio-cultural-brasileiro/projetos-apoiados/theatro-jose-alencar/theatro-jose-alencar",
    "sourceTitle": "BNDES — Theatro José de Alencar",
    "uf": "CE"
  },
  {
    "id": "CE-5",
    "difficulty": "dificil",
    "prompt": "Qual estilo aparece na fachada metálica vista do pátio interno?",
    "options": [
      "Art nouveau",
      "Gótico medieval",
      "Românico",
      "Brutalismo"
    ],
    "answer": 0,
    "explanation": "O BNDES descreve essa fachada do teatro como art nouveau.",
    "sourceUrl": "https://www.bndes.gov.br/wps/portal/site/home/onde-atuamos/cultura-e-economia-criativa/patrimonio-cultural-brasileiro/projetos-apoiados/theatro-jose-alencar/theatro-jose-alencar",
    "sourceTitle": "BNDES — Theatro José de Alencar",
    "uf": "CE"
  },
  {
    "id": "DF-1",
    "difficulty": "facil",
    "prompt": "Qual cidade planejada brasileira tem seu conjunto urbanístico reconhecido pela UNESCO?",
    "options": [
      "Brasília",
      "Curitiba",
      "Porto Alegre",
      "Maceió"
    ],
    "answer": 0,
    "explanation": "Brasília é um marco mundial do urbanismo moderno.",
    "sourceUrl": "https://whc.unesco.org/en/list/445/",
    "sourceTitle": "UNESCO — Brasília",
    "uf": "DF"
  },
  {
    "id": "DF-2",
    "difficulty": "facil",
    "prompt": "Quem elaborou o plano urbanístico de Brasília?",
    "options": [
      "Aleijadinho",
      "Burle Marx",
      "Lúcio Costa",
      "Victor Meirelles"
    ],
    "answer": 2,
    "explanation": "O plano urbano da capital foi concebido por Lúcio Costa.",
    "sourceUrl": "https://whc.unesco.org/en/list/445/",
    "sourceTitle": "UNESCO — Brasília",
    "uf": "DF"
  },
  {
    "id": "DF-3",
    "difficulty": "medio",
    "prompt": "Qual arquiteto projetou importantes edifícios oficiais de Brasília?",
    "options": [
      "Paulo Mendes da Rocha",
      "Oscar Niemeyer",
      "Antônio Francisco Lisboa",
      "Lina Bo Bardi"
    ],
    "answer": 1,
    "explanation": "Niemeyer criou importantes edifícios do conjunto modernista.",
    "sourceUrl": "https://whc.unesco.org/en/list/445/",
    "sourceTitle": "UNESCO — Brasília",
    "uf": "DF"
  },
  {
    "id": "DF-4",
    "difficulty": "medio",
    "prompt": "Em que data Brasília foi inaugurada?",
    "options": [
      "7 de setembro de 1822",
      "15 de novembro de 1889",
      "12 de outubro de 1931",
      "21 de abril de 1960"
    ],
    "answer": 3,
    "explanation": "A inauguração da capital ocorreu em 21 de abril de 1960.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/distrito-federal/conjunto-urbanistico-de-brasilia-df",
    "sourceTitle": "IPHAN — Conjunto Urbanístico de Brasília",
    "uf": "DF"
  },
  {
    "id": "DF-5",
    "difficulty": "dificil",
    "prompt": "Qual afirmação sobre o reconhecimento de Brasília é correta?",
    "options": [
      "A inscrição na UNESCO em 1987 é distinta do tombamento federal",
      "Foi tombada como cidade colonial do século XVIII",
      "O título da UNESCO refere-se apenas ao aeroporto",
      "Seu plano urbano foi elaborado em 1822"
    ],
    "answer": 0,
    "explanation": "A inscrição internacional e a proteção federal são instrumentos diferentes.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/distrito-federal/conjunto-urbanistico-de-brasilia-df",
    "sourceTitle": "IPHAN — Conjunto Urbanístico de Brasília",
    "uf": "DF"
  },
  {
    "id": "ES-1",
    "difficulty": "facil",
    "prompt": "Em qual município fica o Convento da Penha?",
    "options": [
      "Vitória",
      "Guarapari",
      "Linhares",
      "Vila Velha"
    ],
    "answer": 3,
    "explanation": "O convento está em Vila Velha, no Espírito Santo.",
    "sourceUrl": "https://conventodapenha.org.br/conhecendo-o-convento/",
    "sourceTitle": "Convento da Penha — História institucional",
    "uf": "ES"
  },
  {
    "id": "ES-2",
    "difficulty": "facil",
    "prompt": "Que característica torna a localização do Convento da Penha marcante?",
    "options": [
      "Fica no alto de um penhasco",
      "Foi escavado sob um lago",
      "Está sobre uma geleira",
      "Foi construído em um deserto"
    ],
    "answer": 0,
    "explanation": "O conjunto está incrustado na rocha de um morro.",
    "sourceUrl": "https://conventodapenha.org.br/conhecendo-o-convento/",
    "sourceTitle": "Convento da Penha — História institucional",
    "uf": "ES"
  },
  {
    "id": "ES-3",
    "difficulty": "medio",
    "prompt": "Qual religioso está ligado à origem do Convento da Penha?",
    "options": [
      "Frei Caneca",
      "Padre Cícero",
      "Frei Pedro Palácios",
      "Padre José de Anchieta"
    ],
    "answer": 2,
    "explanation": "Frei Pedro Palácios iniciou a história do santuário no século XVI.",
    "sourceUrl": "https://conventodapenha.org.br/conhecendo-o-convento/",
    "sourceTitle": "Convento da Penha — História institucional",
    "uf": "ES"
  },
  {
    "id": "ES-4",
    "difficulty": "medio",
    "prompt": "De qual país veio a imagem de Nossa Senhora da Penha, recebida em 1569?",
    "options": [
      "Itália",
      "Portugal",
      "Espanha",
      "França"
    ],
    "answer": 1,
    "explanation": "A história institucional informa que a imagem veio de Portugal.",
    "sourceUrl": "https://conventodapenha.org.br/conhecendo-o-convento/",
    "sourceTitle": "Convento da Penha — História institucional",
    "uf": "ES"
  },
  {
    "id": "ES-5",
    "difficulty": "dificil",
    "prompt": "Qual pintor produziu obras paisagísticas presentes na capela do Convento da Penha?",
    "options": [
      "Di Cavalcanti",
      "Cândido Portinari",
      "Almeida Júnior",
      "Victor Meirelles"
    ],
    "answer": 3,
    "explanation": "A capela possui obras de Victor Meirelles entregues em 1877.",
    "sourceUrl": "https://conventodapenha.org.br/conhecendo-o-convento/",
    "sourceTitle": "Convento da Penha — História institucional",
    "uf": "ES"
  },
  {
    "id": "GO-1",
    "difficulty": "facil",
    "prompt": "Qual cidade goiana tem seu centro histórico reconhecido pela UNESCO?",
    "options": [
      "Goiânia",
      "Cidade de Goiás",
      "Anápolis",
      "Rio Verde"
    ],
    "answer": 1,
    "explanation": "O reconhecimento refere-se à cidade de Goiás, antiga capital do estado.",
    "sourceUrl": "https://whc.unesco.org/en/list/993/",
    "sourceTitle": "UNESCO — Centro Histórico da Cidade de Goiás",
    "uf": "GO"
  },
  {
    "id": "GO-2",
    "difficulty": "facil",
    "prompt": "Qual rio atravessa a paisagem do centro histórico da Cidade de Goiás?",
    "options": [
      "Rio Negro",
      "Rio Doce",
      "Rio Tapajós",
      "Rio Vermelho"
    ],
    "answer": 3,
    "explanation": "A cidade se desenvolveu dos dois lados do Rio Vermelho.",
    "sourceUrl": "https://whc.unesco.org/en/list/993/",
    "sourceTitle": "UNESCO — Centro Histórico da Cidade de Goiás",
    "uf": "GO"
  },
  {
    "id": "GO-3",
    "difficulty": "medio",
    "prompt": "Qual atividade esteve ligada à formação histórica da Cidade de Goiás?",
    "options": [
      "Mineração",
      "Indústria de aviões",
      "Pesca oceânica",
      "Exploração de gelo"
    ],
    "answer": 0,
    "explanation": "Seu desenvolvimento se relaciona à ocupação mineradora do interior.",
    "sourceUrl": "https://whc.unesco.org/en/list/993/",
    "sourceTitle": "UNESCO — Centro Histórico da Cidade de Goiás",
    "uf": "GO"
  },
  {
    "id": "GO-4",
    "difficulty": "medio",
    "prompt": "Em que ano o centro histórico da Cidade de Goiás foi inscrito pela UNESCO?",
    "options": [
      "1980",
      "1998",
      "2001",
      "2012"
    ],
    "answer": 2,
    "explanation": "A inscrição na Lista do Patrimônio Mundial ocorreu em 2001.",
    "sourceUrl": "https://whc.unesco.org/en/list/993/",
    "sourceTitle": "UNESCO — Centro Histórico da Cidade de Goiás",
    "uf": "GO"
  },
  {
    "id": "GO-5",
    "difficulty": "dificil",
    "prompt": "Qual característica construtiva contribui para a harmonia do conjunto da Cidade de Goiás?",
    "options": [
      "Uso exclusivo de vidro importado",
      "Materiais locais e técnicas tradicionais",
      "Torres de aço idênticas",
      "Demolição do traçado antigo"
    ],
    "answer": 1,
    "explanation": "A UNESCO destaca a coerência no uso de materiais locais e técnicas tradicionais.",
    "sourceUrl": "https://whc.unesco.org/en/list/993/",
    "sourceTitle": "UNESCO — Centro Histórico da Cidade de Goiás",
    "uf": "GO"
  },
  {
    "id": "MA-1",
    "difficulty": "facil",
    "prompt": "Em qual estado fica o Centro Histórico de São Luís?",
    "options": [
      "Maranhão",
      "Piauí",
      "Pará",
      "Ceará"
    ],
    "answer": 0,
    "explanation": "São Luís é a capital do Maranhão.",
    "sourceUrl": "https://www.saoluis.ma.gov.br/inventario-turistico-setur/",
    "sourceTitle": "Prefeitura de São Luís — Inventário turístico",
    "uf": "MA"
  },
  {
    "id": "MA-2",
    "difficulty": "facil",
    "prompt": "Qual revestimento marca muitas fachadas históricas de São Luís?",
    "options": [
      "Placas de aço inox",
      "Vidro espelhado",
      "Asfalto",
      "Azulejos"
    ],
    "answer": 3,
    "explanation": "Os azulejos são elementos marcantes dos sobrados históricos.",
    "sourceUrl": "https://www.saoluis.ma.gov.br/portal/noticias/0/3/1327/prefeitura-de-sao-luis-e-parceiros-lancam-2-edicao-do-programa-canteiro-escola-e-selo-quotsao-luis-patrimonio-mundial---25-anosquot",
    "sourceTitle": "Prefeitura de São Luís — 25 anos de Patrimônio Mundial",
    "uf": "MA"
  },
  {
    "id": "MA-3",
    "difficulty": "medio",
    "prompt": "Como a UNESCO descreve o traçado histórico das ruas de São Luís?",
    "options": [
      "Uma espiral perfeita",
      "Uma grade retangular",
      "Uma rede de túneis",
      "Uma estrela de cinco pontas"
    ],
    "answer": 1,
    "explanation": "O centro preserva um traçado urbano em grade retangular.",
    "sourceUrl": "https://whc.unesco.org/en/list/821/",
    "sourceTitle": "UNESCO — Centro Histórico de São Luís",
    "uf": "MA"
  },
  {
    "id": "MA-4",
    "difficulty": "medio",
    "prompt": "Além da decoração, que função os azulejos desempenham nas fachadas?",
    "options": [
      "Servem de telhado móvel",
      "Produzem eletricidade",
      "Ajudam na proteção e no isolamento",
      "Substituem as fundações"
    ],
    "answer": 2,
    "explanation": "A UNESCO destaca o papel ornamental e de isolamento dos azulejos.",
    "sourceUrl": "https://whc.unesco.org/en/list/821/",
    "sourceTitle": "UNESCO — Centro Histórico de São Luís",
    "uf": "MA"
  },
  {
    "id": "MA-5",
    "difficulty": "dificil",
    "prompt": "Qual povo europeu fundou São Luís antes das ocupações holandesa e portuguesa?",
    "options": [
      "Franceses",
      "Italianos",
      "Suecos",
      "Alemães"
    ],
    "answer": 0,
    "explanation": "A cidade foi fundada pelos franceses e passou depois por outros domínios coloniais.",
    "sourceUrl": "https://whc.unesco.org/en/list/821/",
    "sourceTitle": "UNESCO — Centro Histórico de São Luís",
    "uf": "MA"
  },
  {
    "id": "MT-1",
    "difficulty": "facil",
    "prompt": "Qual capital mato-grossense possui um centro histórico protegido pelo IPHAN?",
    "options": [
      "Cuiabá",
      "Campo Grande",
      "Goiânia",
      "Palmas"
    ],
    "answer": 0,
    "explanation": "O conjunto histórico situa-se na capital Cuiabá.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso",
    "uf": "MT"
  },
  {
    "id": "MT-2",
    "difficulty": "facil",
    "prompt": "Qual atividade marcou a formação do núcleo antigo de Cuiabá?",
    "options": [
      "Extração de petróleo",
      "Produção de automóveis",
      "Mineração de ouro",
      "Cultivo de uvas no gelo"
    ],
    "answer": 2,
    "explanation": "A descoberta e exploração de ouro orientaram a ocupação inicial.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso",
    "uf": "MT"
  },
  {
    "id": "MT-3",
    "difficulty": "medio",
    "prompt": "Qual curso d’água está associado às ruas mais antigas de Cuiabá?",
    "options": [
      "Rio Tietê",
      "Córrego da Prainha",
      "Rio Capibaribe",
      "Rio Amazonas"
    ],
    "answer": 1,
    "explanation": "O IPHAN destaca as margens do Córrego da Prainha.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso",
    "uf": "MT"
  },
  {
    "id": "MT-4",
    "difficulty": "medio",
    "prompt": "O que o centro histórico de Cuiabá conserva além dos edifícios?",
    "options": [
      "Somente um aeroporto",
      "Um traçado de cidade romana",
      "Apenas plantações de café",
      "O traçado urbano colonial"
    ],
    "answer": 3,
    "explanation": "A proteção inclui o conjunto urbano e seu desenho histórico.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso",
    "uf": "MT"
  },
  {
    "id": "MT-5",
    "difficulty": "dificil",
    "prompt": "Qual sequência do processo de proteção de Cuiabá é informada pelo IPHAN?",
    "options": [
      "Provisório em 1987; homologação em 1992",
      "Provisório em 1901; homologação em 1926",
      "Só inscrição da UNESCO em 1980",
      "Apenas tombamento municipal em 2010"
    ],
    "answer": 0,
    "explanation": "São etapas diferentes do mesmo processo federal de proteção.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso",
    "uf": "MT"
  },
  {
    "id": "MS-1",
    "difficulty": "facil",
    "prompt": "Em qual cidade sul-mato-grossense está o casario histórico do Porto Geral?",
    "options": [
      "Dourados",
      "Bonito",
      "Três Lagoas",
      "Corumbá"
    ],
    "answer": 3,
    "explanation": "O casario portuário integra a paisagem histórica de Corumbá.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso-do-sul/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso do Sul",
    "uf": "MS"
  },
  {
    "id": "MS-2",
    "difficulty": "facil",
    "prompt": "Qual rio tem papel central na história comercial de Corumbá?",
    "options": [
      "Paraguai",
      "Tietê",
      "Capibaribe",
      "Parnaíba"
    ],
    "answer": 0,
    "explanation": "A navegação do rio Paraguai marcou o desenvolvimento local.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso-do-sul/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso do Sul",
    "uf": "MS"
  },
  {
    "id": "MS-3",
    "difficulty": "medio",
    "prompt": "Que atividade explica parte da importância histórica de Corumbá?",
    "options": [
      "Mineração de carvão",
      "Pesca no oceano Atlântico",
      "Comércio e navegação fluvial",
      "Indústria espacial"
    ],
    "answer": 2,
    "explanation": "A cidade tornou-se um importante entreposto do comércio por rios.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso-do-sul/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso do Sul",
    "uf": "MS"
  },
  {
    "id": "MS-4",
    "difficulty": "medio",
    "prompt": "Em que ano o IPHAN tombou o conjunto histórico de Corumbá?",
    "options": [
      "1980",
      "1993",
      "1901",
      "2012"
    ],
    "answer": 1,
    "explanation": "A página do IPHAN registra o tombamento do conjunto em 1993.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso-do-sul/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso do Sul",
    "uf": "MS"
  },
  {
    "id": "MS-5",
    "difficulty": "dificil",
    "prompt": "Além do Paraguai, quais rios integram o trânsito regional citado pelo IPHAN para Corumbá?",
    "options": [
      "Negro e Solimões",
      "Doce e Jequitinhonha",
      "Tietê e Pinheiros",
      "São Lourenço e Cuiabá"
    ],
    "answer": 3,
    "explanation": "O IPHAN relaciona a cidade às rotas dos rios Paraguai, São Lourenço e Cuiabá.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso-do-sul/patrimonio-material",
    "sourceTitle": "IPHAN — Patrimônio Material de Mato Grosso do Sul",
    "uf": "MS"
  },
  {
    "id": "MG-1",
    "difficulty": "facil",
    "prompt": "Qual cidade mineira é reconhecida por seu conjunto colonial e igrejas barrocas?",
    "options": [
      "Uberlândia",
      "Betim",
      "Ouro Preto",
      "Contagem"
    ],
    "answer": 2,
    "explanation": "Ouro Preto reúne um importante conjunto arquitetônico colonial.",
    "sourceUrl": "https://whc.unesco.org/en/list/124/",
    "sourceTitle": "UNESCO — Cidade Histórica de Ouro Preto",
    "uf": "MG"
  },
  {
    "id": "MG-2",
    "difficulty": "facil",
    "prompt": "Qual riqueza impulsionou a formação de Ouro Preto?",
    "options": [
      "Ouro",
      "Petróleo",
      "Borracha",
      "Carvão mineral"
    ],
    "answer": 0,
    "explanation": "A cidade cresceu com a mineração de ouro.",
    "sourceUrl": "https://whc.unesco.org/en/list/124/",
    "sourceTitle": "UNESCO — Cidade Histórica de Ouro Preto",
    "uf": "MG"
  },
  {
    "id": "MG-3",
    "difficulty": "medio",
    "prompt": "Qual artista está associado às igrejas e esculturas de Ouro Preto?",
    "options": [
      "Tarsila do Amaral",
      "Candido Portinari",
      "Oscar Niemeyer",
      "Aleijadinho"
    ],
    "answer": 3,
    "explanation": "Antônio Francisco Lisboa, o Aleijadinho, marcou a arte barroca local.",
    "sourceUrl": "https://whc.unesco.org/en/list/124/",
    "sourceTitle": "UNESCO — Cidade Histórica de Ouro Preto",
    "uf": "MG"
  },
  {
    "id": "MG-4",
    "difficulty": "medio",
    "prompt": "Qual movimento de 1789 tem forte ligação com Ouro Preto?",
    "options": [
      "Revolução Farroupilha",
      "Inconfidência Mineira",
      "Revolta da Chibata",
      "Revolução Constitucionalista"
    ],
    "answer": 1,
    "explanation": "A cidade foi um centro simbólico da Inconfidência Mineira.",
    "sourceUrl": "https://whc.unesco.org/en/list/124/",
    "sourceTitle": "UNESCO — Cidade Histórica de Ouro Preto",
    "uf": "MG"
  },
  {
    "id": "MG-5",
    "difficulty": "dificil",
    "prompt": "Qual era a função do edifício que hoje abriga o Museu da Inconfidência?",
    "options": [
      "Mercado de peixes",
      "Terminal de aviação",
      "Casa de Câmara e Cadeia",
      "Fábrica de automóveis"
    ],
    "answer": 2,
    "explanation": "O museu ocupa a antiga Casa de Câmara e Cadeia.",
    "sourceUrl": "https://whc.unesco.org/en/list/124/",
    "sourceTitle": "UNESCO — Cidade Histórica de Ouro Preto",
    "uf": "MG"
  },
  {
    "id": "PR-1",
    "difficulty": "facil",
    "prompt": "Em qual estado fica o Centro Histórico de Paranaguá?",
    "options": [
      "Paraná",
      "Santa Catarina",
      "São Paulo",
      "Rio Grande do Sul"
    ],
    "answer": 0,
    "explanation": "Paranaguá está no litoral do Paraná.",
    "sourceUrl": "https://www.patrimoniocultural.pr.gov.br/Bem-Tombado/Setor-Historico-de-Paranagua",
    "sourceTitle": "Patrimônio Cultural do Paraná — Setor Histórico de Paranaguá",
    "uf": "PR"
  },
  {
    "id": "PR-2",
    "difficulty": "facil",
    "prompt": "O patrimônio do centro de Paranaguá inclui principalmente o quê?",
    "options": [
      "Somente árvores centenárias",
      "Apenas máquinas agrícolas",
      "Casario e edificações históricas",
      "Só pinturas rupestres"
    ],
    "answer": 2,
    "explanation": "O conjunto inclui importantes exemplares de arquitetura histórica.",
    "sourceUrl": "https://www.patrimoniocultural.pr.gov.br/Bem-Tombado/Setor-Historico-de-Paranagua",
    "sourceTitle": "Patrimônio Cultural do Paraná — Setor Histórico de Paranaguá",
    "uf": "PR"
  },
  {
    "id": "PR-3",
    "difficulty": "medio",
    "prompt": "Junto a qual rio se fixou o núcleo inicial de Paranaguá?",
    "options": [
      "Tietê",
      "Itiberê",
      "São Francisco",
      "Tocantins"
    ],
    "answer": 1,
    "explanation": "O núcleo inicial se desenvolveu junto às margens do Itiberê.",
    "sourceUrl": "https://www.patrimoniocultural.pr.gov.br/Bem-Tombado/Setor-Historico-de-Paranagua",
    "sourceTitle": "Patrimônio Cultural do Paraná — Setor Histórico de Paranaguá",
    "uf": "PR"
  },
  {
    "id": "PR-4",
    "difficulty": "medio",
    "prompt": "Qual órgão realizou o tombamento federal do centro de Paranaguá?",
    "options": [
      "Banco Central",
      "IBAMA",
      "Correios",
      "IPHAN"
    ],
    "answer": 3,
    "explanation": "O IPHAN efetivou a proteção federal em 2009.",
    "sourceUrl": "https://www.patrimoniocultural.pr.gov.br/Bem-Tombado/Setor-Historico-de-Paranagua",
    "sourceTitle": "Patrimônio Cultural do Paraná — Setor Histórico de Paranaguá",
    "uf": "PR"
  },
  {
    "id": "PR-5",
    "difficulty": "dificil",
    "prompt": "Qual sequência de proteção é informada para o centro de Paranaguá?",
    "options": [
      "Estadual em 1990; federal em 2009",
      "Federal em 1901; estadual em 1926",
      "Só internacional em 2010",
      "Somente municipal em 1960"
    ],
    "answer": 0,
    "explanation": "A página estadual registra o tombamento paranaense em 1990 e o federal em 2009.",
    "sourceUrl": "https://www.patrimoniocultural.pr.gov.br/Bem-Tombado/Setor-Historico-de-Paranagua",
    "sourceTitle": "Patrimônio Cultural do Paraná — Setor Histórico de Paranaguá",
    "uf": "PR"
  },
  {
    "id": "PB-1",
    "difficulty": "facil",
    "prompt": "Em qual capital está a Igreja de São Francisco do conjunto franciscano paraibano?",
    "options": [
      "João Pessoa",
      "Recife",
      "Natal",
      "Maceió"
    ],
    "answer": 0,
    "explanation": "A igreja integra o Centro Histórico de João Pessoa.",
    "sourceUrl": "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?id=442083&view=detalhes",
    "sourceTitle": "IBGE — Igreja de São Francisco em João Pessoa",
    "uf": "PB"
  },
  {
    "id": "PB-2",
    "difficulty": "facil",
    "prompt": "A qual tradição artística o conjunto de São Francisco é especialmente associado?",
    "options": [
      "Arquitetura futurista",
      "Brutalismo",
      "Estilo industrial ferroviário",
      "Barroco"
    ],
    "answer": 3,
    "explanation": "O conjunto é um importante exemplar da arte barroca religiosa.",
    "sourceUrl": "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?id=442083&view=detalhes",
    "sourceTitle": "IBGE — Igreja de São Francisco em João Pessoa",
    "uf": "PB"
  },
  {
    "id": "PB-3",
    "difficulty": "medio",
    "prompt": "Qual convento faz parte do complexo da Igreja de São Francisco?",
    "options": [
      "Convento da Penha",
      "Convento de Santo Antônio",
      "Mosteiro de São Bento de Olinda",
      "Convento de Mafra"
    ],
    "answer": 1,
    "explanation": "O Convento de Santo Antônio integra o conjunto franciscano de João Pessoa.",
    "sourceUrl": "https://turismo.joaopessoa.pb.gov.br/o-que-fazer/pontos-turisticos/igrejas/igreja-de-sao-francisco/",
    "sourceTitle": "Prefeitura de João Pessoa — Igreja de São Francisco",
    "uf": "PB"
  },
  {
    "id": "PB-4",
    "difficulty": "medio",
    "prompt": "A quem a igreja do conjunto era originalmente dedicada?",
    "options": [
      "São Sebastião",
      "São Jorge",
      "Santo Antônio",
      "São João Batista"
    ],
    "answer": 2,
    "explanation": "A denominação original da igreja era Santo Antônio.",
    "sourceUrl": "https://turismo.joaopessoa.pb.gov.br/o-que-fazer/pontos-turisticos/igrejas/igreja-de-sao-francisco/",
    "sourceTitle": "Prefeitura de João Pessoa — Igreja de São Francisco",
    "uf": "PB"
  },
  {
    "id": "PB-5",
    "difficulty": "dificil",
    "prompt": "Na fonte de Santo Antônio do conjunto, a água sai da boca de qual figura?",
    "options": [
      "Um golfinho de pedra",
      "Um leão de bronze",
      "Uma águia de ferro",
      "Uma serpente de madeira"
    ],
    "answer": 0,
    "explanation": "A fonte histórica apresenta um golfinho esculpido em pedra.",
    "sourceUrl": "https://turismo.joaopessoa.pb.gov.br/o-que-fazer/pontos-turisticos/igrejas/igreja-de-sao-francisco/",
    "sourceTitle": "Prefeitura de João Pessoa — Igreja de São Francisco",
    "uf": "PB"
  },
  {
    "id": "PA-1",
    "difficulty": "facil",
    "prompt": "Em qual capital está o complexo do Ver-o-Peso?",
    "options": [
      "Manaus",
      "Belém",
      "São Luís",
      "Palmas"
    ],
    "answer": 1,
    "explanation": "O Ver-o-Peso é um marco histórico de Belém.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/para/patrimonio-material",
    "sourceTitle": "Iphan Pará — Patrimônio material",
    "uf": "PA"
  },
  {
    "id": "PA-2",
    "difficulty": "facil",
    "prompt": "Qual material dá nome ao famoso mercado de peixes do Ver-o-Peso?",
    "options": [
      "Taipa",
      "Madeira",
      "Ferro",
      "Bambu"
    ],
    "answer": 2,
    "explanation": "O Mercado de Ferro é uma das construções históricas do complexo.",
    "sourceUrl": "https://redememoria.bn.gov.br/redeMemoria/handle/20.500.12156.2/310466",
    "sourceTitle": "Biblioteca Nacional / Iphan — Mercado de Ferro: restauração e conservação",
    "uf": "PA"
  },
  {
    "id": "PA-3",
    "difficulty": "medio",
    "prompt": "Que prática histórica explica o nome Ver-o-Peso?",
    "options": [
      "Pesar mercadorias e cobrar tributos",
      "Medir a altura das igrejas",
      "Contar árvores da floresta",
      "Testar pontes ferroviárias"
    ],
    "answer": 0,
    "explanation": "A fiscalização conferia o peso das mercadorias para a cobrança de impostos.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/para/patrimonio-material",
    "sourceTitle": "Iphan Pará — Patrimônio material",
    "uf": "PA"
  },
  {
    "id": "PA-4",
    "difficulty": "medio",
    "prompt": "Em que ano foi inaugurado o Mercado de Ferro do Ver-o-Peso?",
    "options": [
      "1625",
      "1782",
      "1966",
      "1901"
    ],
    "answer": 3,
    "explanation": "O Mercado de Ferro foi inaugurado em 1901.",
    "sourceUrl": "https://redememoria.bn.gov.br/redeMemoria/handle/20.500.12156.2/310466",
    "sourceTitle": "Biblioteca Nacional / Iphan — Mercado de Ferro: restauração e conservação",
    "uf": "PA"
  },
  {
    "id": "PA-5",
    "difficulty": "dificil",
    "prompt": "O tombamento federal do Ver-o-Peso protege apenas uma barraca?",
    "options": [
      "Sim, somente a mais antiga",
      "Não; abrange um conjunto arquitetônico e paisagístico",
      "Sim, apenas produtos vendidos",
      "Não; protege só a receita do açaí"
    ],
    "answer": 1,
    "explanation": "O Iphan protege o conjunto e áreas adjacentes, não uma barraca isolada.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/para/patrimonio-material",
    "sourceTitle": "Iphan Pará — Patrimônio material",
    "uf": "PA"
  },
  {
    "id": "PE-1",
    "difficulty": "facil",
    "prompt": "Em qual estado fica o Centro Histórico de Olinda?",
    "options": [
      "Alagoas",
      "Pernambuco",
      "Paraíba",
      "Bahia"
    ],
    "answer": 1,
    "explanation": "Olinda está em Pernambuco, próxima ao Recife.",
    "sourceUrl": "https://www.ibge.gov.br/cidades-e-estados/pe/olinda.html",
    "sourceTitle": "IBGE — Olinda (PE)",
    "uf": "PE"
  },
  {
    "id": "PE-2",
    "difficulty": "facil",
    "prompt": "Qual conjunto caracteriza o patrimônio material de Olinda?",
    "options": [
      "Somente edifícios industriais",
      "Apenas estádios modernos",
      "Igrejas, conventos, casario e jardins",
      "Exclusivamente aeroportos"
    ],
    "answer": 2,
    "explanation": "O patrimônio reúne arquitetura, urbanismo e espaços verdes.",
    "sourceUrl": "https://olinda.pe.gov.br/pagina/olinda-turismo",
    "sourceTitle": "Prefeitura de Olinda — Turismo",
    "uf": "PE"
  },
  {
    "id": "PE-3",
    "difficulty": "medio",
    "prompt": "Qual atividade econômica sustentou a prosperidade histórica de Olinda?",
    "options": [
      "Produção de açúcar",
      "Extração de petróleo",
      "Indústria automobilística",
      "Cultivo de trigo"
    ],
    "answer": 0,
    "explanation": "A economia açucareira contribuiu para a riqueza refletida no conjunto.",
    "sourceUrl": "https://whc.unesco.org/en/list/189/",
    "sourceTitle": "UNESCO — Centro Histórico de Olinda",
    "uf": "PE"
  },
  {
    "id": "PE-4",
    "difficulty": "medio",
    "prompt": "Após ataques de qual povo europeu Olinda precisou ser reconstruída?",
    "options": [
      "Suecos",
      "Alemães",
      "Italianos",
      "Holandeses"
    ],
    "answer": 3,
    "explanation": "A cidade foi saqueada e incendiada durante a ocupação holandesa.",
    "sourceUrl": "https://whc.unesco.org/en/list/189/",
    "sourceTitle": "UNESCO — Centro Histórico de Olinda",
    "uf": "PE"
  },
  {
    "id": "PE-5",
    "difficulty": "dificil",
    "prompt": "Qual combinação espacial distingue o centro histórico de Olinda?",
    "options": [
      "Ruas subterrâneas e arranha-céus",
      "Colinas, vegetação e vista para o oceano",
      "Deserto e pirâmides",
      "Planície sem igrejas"
    ],
    "answer": 1,
    "explanation": "O conjunto se distribui nas colinas, entre áreas verdes e o Atlântico.",
    "sourceUrl": "https://whc.unesco.org/en/list/189/",
    "sourceTitle": "UNESCO — Centro Histórico de Olinda",
    "uf": "PE"
  },
  {
    "id": "PI-1",
    "difficulty": "facil",
    "prompt": "Em qual estado estão os sítios arqueológicos da Serra da Capivara?",
    "options": [
      "Maranhão",
      "Piauí",
      "Ceará",
      "Paraíba"
    ],
    "answer": 1,
    "explanation": "O parque está no sudeste do Piauí.",
    "sourceUrl": "https://www.bndes.gov.br/wps/portal/site/home/onde-atuamos/cultura-e-economia-criativa/patrimonio-cultural-brasileiro/projetos-apoiados/parque-nacional-serra-capivara/parque-nacional-serra-capivara",
    "sourceTitle": "BNDES — Parque Nacional Serra da Capivara",
    "uf": "PI"
  },
  {
    "id": "PI-2",
    "difficulty": "facil",
    "prompt": "Que vestígio visual é especialmente conhecido na Serra da Capivara?",
    "options": [
      "Vitrais medievais",
      "Arranha-céus",
      "Pinturas rupestres",
      "Mosaicos romanos"
    ],
    "answer": 2,
    "explanation": "As pinturas foram feitas sobre superfícies rochosas por antigas populações.",
    "sourceUrl": "https://whc.unesco.org/en/list/606/",
    "sourceTitle": "UNESCO — Parque Nacional Serra da Capivara",
    "uf": "PI"
  },
  {
    "id": "PI-3",
    "difficulty": "medio",
    "prompt": "Qual tema histórico os vestígios da Serra da Capivara ajudam a investigar?",
    "options": [
      "A antiga presença humana nas Américas",
      "A chegada de trens elétricos",
      "A fabricação de automóveis",
      "A construção de Brasília"
    ],
    "answer": 0,
    "explanation": "Os sítios oferecem evidências arqueológicas sobre antigas comunidades humanas.",
    "sourceUrl": "https://whc.unesco.org/en/list/606/",
    "sourceTitle": "UNESCO — Parque Nacional Serra da Capivara",
    "uf": "PI"
  },
  {
    "id": "PI-4",
    "difficulty": "medio",
    "prompt": "Em que ano o parque da Serra da Capivara foi criado?",
    "options": [
      "1500",
      "1889",
      "2000",
      "1979"
    ],
    "answer": 3,
    "explanation": "A criação do parque ocorreu em 1979.",
    "sourceUrl": "https://www.bndes.gov.br/wps/portal/site/home/onde-atuamos/cultura-e-economia-criativa/patrimonio-cultural-brasileiro/projetos-apoiados/parque-nacional-serra-capivara/parque-nacional-serra-capivara",
    "sourceTitle": "BNDES — Parque Nacional Serra da Capivara",
    "uf": "PI"
  },
  {
    "id": "PI-5",
    "difficulty": "dificil",
    "prompt": "Qual sequência distingue corretamente os reconhecimentos da Serra da Capivara?",
    "options": [
      "Iphan em 1500; UNESCO em 1600",
      "UNESCO em 1991; Iphan em 1993",
      "UNESCO em 2010; Iphan em 2020",
      "Apenas proteção municipal"
    ],
    "answer": 1,
    "explanation": "A inscrição UNESCO ocorreu em 1991; o tombamento federal, em 1993.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/piaui/patrimonio-mundial",
    "sourceTitle": "Iphan Piauí — Patrimônio Mundial",
    "uf": "PI"
  },
  {
    "id": "RN-1",
    "difficulty": "facil",
    "prompt": "Em qual capital está o Forte dos Reis Magos?",
    "options": [
      "Recife",
      "João Pessoa",
      "Natal",
      "Fortaleza"
    ],
    "answer": 2,
    "explanation": "O forte é um marco histórico de Natal.",
    "sourceUrl": "https://memorial.cmnat.rn.gov.br/forte-dos-reis-magos/",
    "sourceTitle": "Câmara Municipal de Natal — Forte dos Reis Magos",
    "uf": "RN"
  },
  {
    "id": "RN-2",
    "difficulty": "facil",
    "prompt": "Qual forma caracteriza a planta do Forte dos Reis Magos?",
    "options": [
      "Círculo",
      "Estrela",
      "Espiral",
      "Quadrado perfeito"
    ],
    "answer": 1,
    "explanation": "A planta em estrela está associada à arquitetura defensiva do forte.",
    "sourceUrl": "https://memorial.cmnat.rn.gov.br/forte-dos-reis-magos/",
    "sourceTitle": "Câmara Municipal de Natal — Forte dos Reis Magos",
    "uf": "RN"
  },
  {
    "id": "RN-3",
    "difficulty": "medio",
    "prompt": "A entrada de qual rio marca a localização do Forte dos Reis Magos?",
    "options": [
      "Rio Acre",
      "Rio Negro",
      "Rio Paraná",
      "Rio Potengi"
    ],
    "answer": 3,
    "explanation": "A fortaleza se localiza no estuário do Potengi.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/centrais-de-conteudo/legislacao/atos-normativos/2019/portaria-ndeg-59-de-26-de-fevereiro-de-2019",
    "sourceTitle": "Iphan — Portaria nº 59/2019, Fortaleza dos Reis Magos",
    "uf": "RN"
  },
  {
    "id": "RN-4",
    "difficulty": "medio",
    "prompt": "Qual era a finalidade original da fortificação dos Reis Magos?",
    "options": [
      "Defesa militar",
      "Produção de tecidos",
      "Ensino universitário",
      "Exposição de automóveis"
    ],
    "answer": 0,
    "explanation": "O edifício foi concebido como estrutura militar de defesa.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/centrais-de-conteudo/legislacao/atos-normativos/2019/portaria-ndeg-59-de-26-de-fevereiro-de-2019",
    "sourceTitle": "Iphan — Portaria nº 59/2019, Fortaleza dos Reis Magos",
    "uf": "RN"
  },
  {
    "id": "RN-5",
    "difficulty": "dificil",
    "prompt": "Que nome o Forte dos Reis Magos recebeu sob domínio holandês?",
    "options": [
      "Castelo São Jorge",
      "Castelo Ceulen",
      "Forte Copacabana",
      "Palácio das Princesas"
    ],
    "answer": 1,
    "explanation": "O Iphan registra a denominação Castelo Ceulen no período holandês.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/rio-grande-do-norte/forte-dos-reis-magos",
    "sourceTitle": "Iphan — Forte dos Reis Magos",
    "uf": "RN"
  },
  {
    "id": "RS-1",
    "difficulty": "facil",
    "prompt": "Em qual estado ficam as ruínas de São Miguel das Missões?",
    "options": [
      "Paraná",
      "Santa Catarina",
      "Rio Grande do Sul",
      "Mato Grosso do Sul"
    ],
    "answer": 2,
    "explanation": "O sítio está no noroeste do Rio Grande do Sul.",
    "sourceUrl": "https://www.saomiguel.rs.gov.br/site/conteudos/2066-siacutetio-histoacuterico-satildeo-miguel-arcanjo",
    "sourceTitle": "Prefeitura de São Miguel das Missões — Sítio Histórico",
    "uf": "RS"
  },
  {
    "id": "RS-2",
    "difficulty": "facil",
    "prompt": "Qual povo indígena está ligado à história dessas missões?",
    "options": [
      "Guarani",
      "Inuítes",
      "Maori",
      "Ainu"
    ],
    "answer": 0,
    "explanation": "As missões foram estabelecidas em território Guarani.",
    "sourceUrl": "https://whc.unesco.org/en/list/275/",
    "sourceTitle": "UNESCO — Missões Jesuíticas dos Guarani",
    "uf": "RS"
  },
  {
    "id": "RS-3",
    "difficulty": "medio",
    "prompt": "Qual ordem religiosa esteve ligada à antiga redução de São Miguel Arcanjo?",
    "options": [
      "Beneditinos",
      "Carmelitas",
      "Dominicanos",
      "Jesuítas"
    ],
    "answer": 3,
    "explanation": "A missão integrava a atuação da Companhia de Jesus entre os Guarani.",
    "sourceUrl": "https://whc.unesco.org/en/list/275/",
    "sourceTitle": "UNESCO — Missões Jesuíticas dos Guarani",
    "uf": "RS"
  },
  {
    "id": "RS-4",
    "difficulty": "medio",
    "prompt": "Em que ano São Miguel foi reconhecido como Patrimônio Mundial?",
    "options": [
      "1901",
      "1983",
      "2010",
      "1998"
    ],
    "answer": 1,
    "explanation": "A inscrição internacional de São Miguel ocorreu em 1983.",
    "sourceUrl": "https://www.saomiguel.rs.gov.br/site/conteudos/2066-siacutetio-histoacuterico-satildeo-miguel-arcanjo",
    "sourceTitle": "Prefeitura de São Miguel das Missões — Sítio Histórico",
    "uf": "RS"
  },
  {
    "id": "RS-5",
    "difficulty": "dificil",
    "prompt": "Além do Brasil, em qual país estão os outros componentes desse bem da UNESCO?",
    "options": [
      "Chile",
      "Peru",
      "Argentina",
      "Uruguai"
    ],
    "answer": 2,
    "explanation": "O bem reúne São Miguel no Brasil e quatro missões em território argentino.",
    "sourceUrl": "https://whc.unesco.org/en/list/275/",
    "sourceTitle": "UNESCO — Missões Jesuíticas dos Guarani",
    "uf": "RS"
  },
  {
    "id": "RJ-1",
    "difficulty": "facil",
    "prompt": "Em qual cidade está o Cristo Redentor do Corcovado?",
    "options": [
      "Niterói",
      "Rio de Janeiro",
      "Petrópolis",
      "Cabo Frio"
    ],
    "answer": 1,
    "explanation": "O monumento está na cidade do Rio de Janeiro.",
    "sourceUrl": "https://riotur.rio/en/que_fazer/christtheredeemer/",
    "sourceTitle": "Riotur — Cristo Redentor",
    "uf": "RJ"
  },
  {
    "id": "RJ-2",
    "difficulty": "facil",
    "prompt": "Qual morro abriga o Cristo Redentor?",
    "options": [
      "Pão de Açúcar",
      "Pedra da Gávea",
      "Morro da Urca",
      "Corcovado"
    ],
    "answer": 3,
    "explanation": "A estátua foi construída no alto do Corcovado.",
    "sourceUrl": "https://whc.unesco.org/en/list/1100/",
    "sourceTitle": "UNESCO — Paisagem cultural carioca",
    "uf": "RJ"
  },
  {
    "id": "RJ-3",
    "difficulty": "medio",
    "prompt": "Em que ano o Cristo Redentor foi inaugurado?",
    "options": [
      "1931",
      "1822",
      "1960",
      "2007"
    ],
    "answer": 0,
    "explanation": "Sua inauguração ocorreu em 12 de outubro de 1931.",
    "sourceUrl": "https://www.gov.br/turismo/pt-br/assuntos/ultimas-noticia/rio-comemora-83-anos-do-cristo-redentor",
    "sourceTitle": "Ministério do Turismo — Aniversário do Cristo Redentor",
    "uf": "RJ"
  },
  {
    "id": "RJ-4",
    "difficulty": "medio",
    "prompt": "Qual material reveste o Cristo Redentor?",
    "options": [
      "Azulejo azul",
      "Madeira de cedro",
      "Pedra-sabão",
      "Chapas de ouro maciço"
    ],
    "answer": 2,
    "explanation": "Pequenas peças de pedra-sabão formam o revestimento em mosaico.",
    "sourceUrl": "https://artsandculture.google.com/story/santu%C3%A1rio-cristo-redentor-congrega%C3%A7%C3%A3o-do-sant%C3%ADssimo-redentor/_wVRd1us2c-sLg?hl=pt-BR",
    "sourceTitle": "Santuário Cristo Redentor — História do monumento",
    "uf": "RJ"
  },
  {
    "id": "RJ-5",
    "difficulty": "dificil",
    "prompt": "Qual estilo artístico caracteriza a estátua do Cristo Redentor?",
    "options": [
      "Gótico",
      "Art déco",
      "Rococó",
      "Românico"
    ],
    "answer": 1,
    "explanation": "O monumento é um exemplar de escultura art déco.",
    "sourceUrl": "https://artsandculture.google.com/story/santu%C3%A1rio-cristo-redentor-congrega%C3%A7%C3%A3o-do-sant%C3%ADssimo-redentor/_wVRd1us2c-sLg?hl=pt-BR",
    "sourceTitle": "Santuário Cristo Redentor — História do monumento",
    "uf": "RJ"
  },
  {
    "id": "RO-1",
    "difficulty": "facil",
    "prompt": "Junto a qual rio foi construído o Real Forte Príncipe da Beira?",
    "options": [
      "Rio Doce",
      "Rio Negro",
      "Guaporé",
      "São Francisco"
    ],
    "answer": 2,
    "explanation": "O forte está às margens do Guaporé.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/rondonia",
    "sourceTitle": "Iphan Rondônia — Patrimônio cultural",
    "uf": "RO"
  },
  {
    "id": "RO-2",
    "difficulty": "facil",
    "prompt": "Em qual município de Rondônia fica o Real Forte Príncipe da Beira?",
    "options": [
      "Ji-Paraná",
      "Costa Marques",
      "Vilhena",
      "Cacoal"
    ],
    "answer": 1,
    "explanation": "O forte situa-se no território de Costa Marques.",
    "sourceUrl": "https://museu.pm.ro.gov.br/pmro-na-historiaseculo-xviii/",
    "sourceTitle": "Museu Virtual da PMRO — Ocupação do Vale do Guaporé",
    "uf": "RO"
  },
  {
    "id": "RO-3",
    "difficulty": "medio",
    "prompt": "Quais coroas disputavam a fronteira defendida pelo Forte Príncipe da Beira?",
    "options": [
      "França e Inglaterra",
      "Itália e Alemanha",
      "Holanda e Bélgica",
      "Portugal e Espanha"
    ],
    "answer": 3,
    "explanation": "O forte participou da defesa de fronteiras disputadas por Portugal e Espanha.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/rondonia",
    "sourceTitle": "Iphan Rondônia — Patrimônio cultural",
    "uf": "RO"
  },
  {
    "id": "RO-4",
    "difficulty": "medio",
    "prompt": "Quantos baluartes compõem a estrutura do Forte Príncipe da Beira?",
    "options": [
      "Quatro",
      "Dois",
      "Sete",
      "Dez"
    ],
    "answer": 0,
    "explanation": "A fortificação possui quatro baluartes destinados à defesa por artilharia.",
    "sourceUrl": "https://rondonia.ro.gov.br/real-forte-principe-da-beira-completa-247-anos-de-existencia-turismo-e-fomentado-pelo-estado-na-regiao/",
    "sourceTitle": "Governo de Rondônia — Real Forte Príncipe da Beira",
    "uf": "RO"
  },
  {
    "id": "RO-5",
    "difficulty": "dificil",
    "prompt": "Qual expedição reencontrou as ruínas do Forte Príncipe da Beira?",
    "options": [
      "Expedição Langsdorff",
      "Comissão Rondon",
      "Missão Artística Francesa",
      "Expedição de Cabral"
    ],
    "answer": 1,
    "explanation": "A Comissão Rondon localizou as ruínas durante trabalhos de implantação telegráfica.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/superintendencias/rondonia",
    "sourceTitle": "Iphan Rondônia — Patrimônio cultural",
    "uf": "RO"
  },
  {
    "id": "RR-1",
    "difficulty": "facil",
    "prompt": "Em qual capital fica a Igreja Matriz de Nossa Senhora do Carmo de Roraima?",
    "options": [
      "Boa Vista",
      "Macapá",
      "Manaus",
      "Rio Branco"
    ],
    "answer": 0,
    "explanation": "A matriz integra o núcleo histórico de Boa Vista.",
    "sourceUrl": "https://boavista.rr.gov.br/noticias/2021/12/conheca-os-principais-pontos-turisticos-de-boa-vista",
    "sourceTitle": "Prefeitura de Boa Vista — Pontos turísticos",
    "uf": "RR"
  },
  {
    "id": "RR-2",
    "difficulty": "facil",
    "prompt": "Qual destes edifícios religiosos é um marco histórico de Boa Vista?",
    "options": [
      "Igreja da Pampulha",
      "Basílica de Aparecida",
      "Catedral de Brasília",
      "Matriz de Nossa Senhora do Carmo"
    ],
    "answer": 3,
    "explanation": "A Igreja Matriz é um dos cartões-postais históricos da capital roraimense.",
    "sourceUrl": "https://boavista.rr.gov.br/noticias/2015/03/caminhos-de-memoria-resgata-historia-da-capital",
    "sourceTitle": "Prefeitura de Boa Vista — Caminhos de Memória",
    "uf": "RR"
  },
  {
    "id": "RR-3",
    "difficulty": "medio",
    "prompt": "Que influência arquitetônica foi introduzida na Matriz do Carmo em 1909?",
    "options": [
      "Brutalista",
      "Germânica",
      "Gótica francesa do século XIII",
      "Futurista"
    ],
    "answer": 1,
    "explanation": "A ampliação beneditina incorporou influência germânica.",
    "sourceUrl": "https://boavista.rr.gov.br/noticias/2026/8/mes-do-patrimonio-cultural-conheca-alguns-dos-predios-historicos-de-boa-vista",
    "sourceTitle": "Prefeitura de Boa Vista — Prédios históricos",
    "uf": "RR"
  },
  {
    "id": "RR-4",
    "difficulty": "medio",
    "prompt": "Qual ordem religiosa introduziu essa influência germânica na matriz?",
    "options": [
      "Jesuítas",
      "Carmelitas",
      "Beneditinos",
      "Dominicanos"
    ],
    "answer": 2,
    "explanation": "Os beneditinos da Ordem de São Bento ampliaram o edifício em 1909.",
    "sourceUrl": "https://boavista.rr.gov.br/noticias/2026/8/mes-do-patrimonio-cultural-conheca-alguns-dos-predios-historicos-de-boa-vista",
    "sourceTitle": "Prefeitura de Boa Vista — Prédios históricos",
    "uf": "RR"
  },
  {
    "id": "RR-5",
    "difficulty": "dificil",
    "prompt": "A proteção patrimonial citada para a Matriz do Carmo é de qual esfera?",
    "options": [
      "Municipal",
      "UNESCO",
      "Exclusivamente estrangeira",
      "Não existe proteção"
    ],
    "answer": 0,
    "explanation": "A Prefeitura registra tombamento municipal na década de 1990.",
    "sourceUrl": "https://boavista.rr.gov.br/noticias/2026/8/mes-do-patrimonio-cultural-conheca-alguns-dos-predios-historicos-de-boa-vista",
    "sourceTitle": "Prefeitura de Boa Vista — Prédios históricos",
    "uf": "RR"
  },
  {
    "id": "SC-1",
    "difficulty": "facil",
    "prompt": "Qual ponte histórica é um símbolo de Florianópolis?",
    "options": [
      "Ponte da Amizade",
      "Ponte Hercílio Luz",
      "Ponte Rio-Niterói",
      "Ponte Estaiada Octávio Frias"
    ],
    "answer": 1,
    "explanation": "A Ponte Hercílio Luz é um dos principais símbolos da cidade.",
    "sourceUrl": "https://www.alesc.sc.gov.br/agencia/noticia/ponte-hercilio-luz-chega-ao-centenario-como-icone-de-santa-catarina/",
    "sourceTitle": "Assembleia Legislativa de Santa Catarina — Ponte Hercílio Luz",
    "uf": "SC"
  },
  {
    "id": "SC-2",
    "difficulty": "facil",
    "prompt": "O que a Ponte Hercílio Luz conecta?",
    "options": [
      "Brasil e Argentina",
      "Duas margens do rio Amazonas",
      "Vitória e Vila Velha",
      "Ilha de Santa Catarina e continente"
    ],
    "answer": 3,
    "explanation": "A ponte criou uma ligação fixa entre a ilha e o continente.",
    "sourceUrl": "https://www.alesc.sc.gov.br/agencia/noticia/ponte-hercilio-luz-chega-ao-centenario-como-icone-de-santa-catarina/",
    "sourceTitle": "Assembleia Legislativa de Santa Catarina — Ponte Hercílio Luz",
    "uf": "SC"
  },
  {
    "id": "SC-3",
    "difficulty": "medio",
    "prompt": "Em que ano a Ponte Hercílio Luz foi inaugurada?",
    "options": [
      "1926",
      "1822",
      "1960",
      "2000"
    ],
    "answer": 0,
    "explanation": "A inauguração ocorreu em 13 de maio de 1926.",
    "sourceUrl": "https://noticias.sc.gov.br/acervo-de-noticias/restauracao-da-ponte-hercilio-luz-entra-em-nova-fase/",
    "sourceTitle": "Governo de Santa Catarina — Restauração da ponte",
    "uf": "SC"
  },
  {
    "id": "SC-4",
    "difficulty": "medio",
    "prompt": "Qual tipo de estrutura caracteriza a Ponte Hercílio Luz?",
    "options": [
      "Ponte flutuante",
      "Ponte inteiramente de madeira",
      "Ponte pênsil metálica",
      "Ponte de arcos romanos"
    ],
    "answer": 2,
    "explanation": "Seu vão principal é suspenso, característica das pontes pênseis.",
    "sourceUrl": "https://www.alesc.sc.gov.br/agencia/noticia/ponte-hercilio-luz-chega-ao-centenario-como-icone-de-santa-catarina/",
    "sourceTitle": "Assembleia Legislativa de Santa Catarina — Ponte Hercílio Luz",
    "uf": "SC"
  },
  {
    "id": "SC-5",
    "difficulty": "dificil",
    "prompt": "Em que ano o IPHAN tombou a Ponte Hercílio Luz em âmbito federal?",
    "options": [
      "1943",
      "1998",
      "1980",
      "2012"
    ],
    "answer": 1,
    "explanation": "O tombamento federal pelo IPHAN ocorreu em 1998.",
    "sourceUrl": "https://agenciagov.ebc.com.br/noticias/202605/ponte-hercilio-luz-chega-aos-100-anos-como-simbolo-de-santa-catarina",
    "sourceTitle": "Agência Gov / IPHAN — Centenário da Ponte Hercílio Luz",
    "uf": "SC"
  },
  {
    "id": "SE-1",
    "difficulty": "facil",
    "prompt": "Em qual cidade sergipana fica a Praça São Francisco?",
    "options": [
      "Aracaju",
      "São Cristóvão",
      "Estância",
      "Itabaiana"
    ],
    "answer": 1,
    "explanation": "A praça está no núcleo histórico de São Cristóvão.",
    "sourceUrl": "https://whc.unesco.org/en/list/1272/",
    "sourceTitle": "UNESCO — Praça São Francisco",
    "uf": "SE"
  },
  {
    "id": "SE-2",
    "difficulty": "facil",
    "prompt": "Qual destes edifícios integra o conjunto da Praça São Francisco?",
    "options": [
      "Palácio do Planalto",
      "Teatro Amazonas",
      "Igreja e Convento de São Francisco",
      "Estação da Luz"
    ],
    "answer": 2,
    "explanation": "A igreja e o convento ajudam a compor o conjunto monumental.",
    "sourceUrl": "https://whc.unesco.org/en/list/1272/",
    "sourceTitle": "UNESCO — Praça São Francisco",
    "uf": "SE"
  },
  {
    "id": "SE-3",
    "difficulty": "medio",
    "prompt": "Que forma caracteriza o espaço aberto da Praça São Francisco?",
    "options": [
      "Quadrilátera",
      "Circular",
      "Triangular",
      "Espiral"
    ],
    "answer": 0,
    "explanation": "A UNESCO descreve a praça como um espaço aberto quadrilátero.",
    "sourceUrl": "https://whc.unesco.org/en/list/1272/",
    "sourceTitle": "UNESCO — Praça São Francisco",
    "uf": "SE"
  },
  {
    "id": "SE-4",
    "difficulty": "medio",
    "prompt": "Em que ano a Praça São Francisco entrou na Lista do Patrimônio Mundial?",
    "options": [
      "1980",
      "1997",
      "2001",
      "2010"
    ],
    "answer": 3,
    "explanation": "O conjunto foi inscrito pela UNESCO em 2010.",
    "sourceUrl": "https://whc.unesco.org/en/list/1272/",
    "sourceTitle": "UNESCO — Praça São Francisco",
    "uf": "SE"
  },
  {
    "id": "SE-5",
    "difficulty": "dificil",
    "prompt": "Quais tradições urbanísticas se combinam na Praça São Francisco?",
    "options": [
      "Inca e asteca",
      "Grega e romana",
      "Portuguesa e espanhola",
      "Egípcia e mesopotâmica"
    ],
    "answer": 2,
    "explanation": "O conjunto reúne padrões portugueses e normas espanholas de organização urbana.",
    "sourceUrl": "https://whc.unesco.org/en/list/1272/",
    "sourceTitle": "UNESCO — Praça São Francisco",
    "uf": "SE"
  },
  {
    "id": "SP-1",
    "difficulty": "facil",
    "prompt": "Em qual cidade fica a Estação da Luz?",
    "options": [
      "Campinas",
      "Santos",
      "São Paulo",
      "Ribeirão Preto"
    ],
    "answer": 2,
    "explanation": "A estação fica no centro da capital paulista.",
    "sourceUrl": "https://acervo.museudalinguaportuguesa.org.br/referencias/locais/9529/estacao-da-luz",
    "sourceTitle": "Museu da Língua Portuguesa — Estação da Luz",
    "uf": "SP"
  },
  {
    "id": "SP-2",
    "difficulty": "facil",
    "prompt": "Qual museu ocupa parte da Estação da Luz?",
    "options": [
      "Museu da Língua Portuguesa",
      "Museu do Amanhã",
      "Museu Imperial",
      "Museu Paraense Emílio Goeldi"
    ],
    "answer": 0,
    "explanation": "O museu compartilha o edifício histórico com a estação.",
    "sourceUrl": "https://acervo.museudalinguaportuguesa.org.br/referencias/locais/9529/estacao-da-luz",
    "sourceTitle": "Museu da Língua Portuguesa — Estação da Luz",
    "uf": "SP"
  },
  {
    "id": "SP-3",
    "difficulty": "medio",
    "prompt": "Em que ano foi inaugurado o edifício histórico da Estação da Luz?",
    "options": [
      "1926",
      "1889",
      "1960",
      "1901"
    ],
    "answer": 3,
    "explanation": "O edifício foi inaugurado em 1901.",
    "sourceUrl": "https://acervo.museudalinguaportuguesa.org.br/referencias/locais/9529/estacao-da-luz",
    "sourceTitle": "Museu da Língua Portuguesa — Estação da Luz",
    "uf": "SP"
  },
  {
    "id": "SP-4",
    "difficulty": "medio",
    "prompt": "A ferrovia da São Paulo Railway ligava o interior paulista a qual porto?",
    "options": [
      "Manaus",
      "Santos",
      "Recife",
      "Belém"
    ],
    "answer": 1,
    "explanation": "A ferrovia conectava o interior paulista ao porto de Santos.",
    "sourceUrl": "https://acervo.museudalinguaportuguesa.org.br/referencias/locais/9529/estacao-da-luz",
    "sourceTitle": "Museu da Língua Portuguesa — Estação da Luz",
    "uf": "SP"
  },
  {
    "id": "SP-5",
    "difficulty": "dificil",
    "prompt": "Qual inspiração arquitetônica é destacada no edifício da Estação da Luz?",
    "options": [
      "Asteca",
      "Brutalista",
      "Vitoriana inglesa",
      "Egípcia"
    ],
    "answer": 2,
    "explanation": "O acervo do museu destaca a inspiração vitoriana e a estrutura importada da Inglaterra.",
    "sourceUrl": "https://acervo.museudalinguaportuguesa.org.br/referencias/locais/9529/estacao-da-luz",
    "sourceTitle": "Museu da Língua Portuguesa — Estação da Luz",
    "uf": "SP"
  },
  {
    "id": "TO-1",
    "difficulty": "facil",
    "prompt": "Em qual cidade tocantinense estão as ruínas da Igreja do Rosário dos Pretos?",
    "options": [
      "Palmas",
      "Araguaína",
      "Natividade",
      "Gurupi"
    ],
    "answer": 2,
    "explanation": "As ruínas são um marco histórico de Natividade.",
    "sourceUrl": "https://www.natividade.to.gov.br/historia/",
    "sourceTitle": "Prefeitura de Natividade — História",
    "uf": "TO"
  },
  {
    "id": "TO-2",
    "difficulty": "facil",
    "prompt": "Qual é a condição histórica da Igreja do Rosário dos Pretos de Natividade?",
    "options": [
      "Foi desmontada e levada a Lisboa",
      "Ficou inacabada",
      "Virou uma fortaleza",
      "Foi construída no século XXI"
    ],
    "answer": 1,
    "explanation": "A construção não chegou a ser concluída.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/norte/natividade-to",
    "sourceTitle": "Iphan — Natividade (TO)",
    "uf": "TO"
  },
  {
    "id": "TO-3",
    "difficulty": "medio",
    "prompt": "A formação histórica de Natividade e suas igrejas está ligada a qual atividade?",
    "options": [
      "Cultivo de trigo",
      "Extração de petróleo",
      "Indústria automobilística",
      "Mineração de ouro"
    ],
    "answer": 3,
    "explanation": "O povoado cresceu com a exploração do ouro.",
    "sourceUrl": "https://antigo.turismo.gov.br/2020/17-ultimas-noticias/7607-natividade-ber%C3%A7o-hist%C3%B3rico-do-tocantins.html",
    "sourceTitle": "Ministério do Turismo — Natividade, berço histórico do Tocantins",
    "uf": "TO"
  },
  {
    "id": "TO-4",
    "difficulty": "medio",
    "prompt": "O que as ruínas do Rosário ajudam a lembrar sobre sua construção?",
    "options": [
      "O trabalho de pessoas escravizadas",
      "Uma obra sem participação humana",
      "A fundação de Brasília",
      "A imigração japonesa no século XX"
    ],
    "answer": 0,
    "explanation": "Pessoas escravizadas participaram da construção da igreja.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/norte/natividade-to",
    "sourceTitle": "Iphan — Natividade (TO)",
    "uf": "TO"
  },
  {
    "id": "TO-5",
    "difficulty": "dificil",
    "prompt": "Em que ano o Iphan tombou o conjunto histórico de Natividade?",
    "options": [
      "1937",
      "1987",
      "2007",
      "1960"
    ],
    "answer": 1,
    "explanation": "O conjunto arquitetônico, urbanístico e paisagístico foi tombado em 1987.",
    "sourceUrl": "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/norte/natividade-to",
    "sourceTitle": "Iphan — Natividade (TO)",
    "uf": "TO"
  }
];
