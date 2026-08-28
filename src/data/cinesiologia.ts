import type { QuizQuestion, Chapter } from "../types/quiz";

// ============================================================
// CAPÍTULO 1 – Informações Básicas
// ============================================================
const cap1Questions: QuizQuestion[] = [
  {
    id: "c1q01",
    chapter: "cap1",
    topic: "Posição anatômica",
    question:
      "Na posição anatômica, como devem estar posicionados os membros superiores?",
    options: [
      "Ao lado do corpo, palmas voltadas anteriormente",
      "Cruzados sobre o tórax",
      "Ao lado do corpo, palmas voltadas posteriormente",
      "Abduzidos a 90° com palmas voltadas para baixo",
    ],
    correctIndex: 0,
    explanation:
      "Na posição anatômica a pessoa está de pé, olhando para frente, membros superiores ao lado do corpo com as palmas voltadas anteriormente (supinação).",
  },
  {
    id: "c1q02",
    chapter: "cap1",
    topic: "Planos do corpo",
    question:
      "Qual plano divide o corpo em partes anterior e posterior?",
    options: [
      "Plano sagital",
      "Plano frontal",
      "Plano transversal",
      "Plano oblíquo",
    ],
    correctIndex: 1,
    explanation:
      "O plano frontal (coronal) divide o corpo em partes anterior e posterior. O plano sagital divide em direita e esquerda, e o transversal em superior e inferior.",
    imageDescription:
      "Figura mostrando os três planos cardinais do corpo: sagital, frontal e transversal, com uma pessoa em posição anatômica.",
  },
  {
    id: "c1q03",
    chapter: "cap1",
    topic: "Planos do corpo",
    question:
      "O plano sagital divide o corpo em quais partes?",
    options: [
      "Superior e inferior",
      "Anterior e posterior",
      "Direita e esquerda",
      "Proximal e distal",
    ],
    correctIndex: 2,
    explanation:
      "O plano sagital divide o corpo em metade direita e metade esquerda. Quando passa exatamente pelo meio, é chamado de plano sagital mediano.",
  },
  {
    id: "c1q04",
    chapter: "cap1",
    topic: "Eixos do corpo",
    question:
      "Os movimentos de flexão e extensão ocorrem em qual plano e em torno de qual eixo?",
    options: [
      "Plano sagital, eixo transversal",
      "Plano frontal, eixo sagital",
      "Plano transversal, eixo vertical",
      "Plano sagital, eixo vertical",
    ],
    correctIndex: 0,
    explanation:
      "Flexão e extensão sempre ocorrem no plano sagital em torno do eixo transversal. Abdução/adução ocorrem no plano frontal em torno do eixo sagital.",
  },
  {
    id: "c1q05",
    chapter: "cap1",
    topic: "Eixos do corpo",
    question:
      "Os movimentos de abdução e adução ocorrem em qual plano e em torno de qual eixo?",
    options: [
      "Plano sagital, eixo transversal",
      "Plano frontal, eixo sagital",
      "Plano transversal, eixo vertical",
      "Plano frontal, eixo transversal",
    ],
    correctIndex: 1,
    explanation:
      "Abdução e adução ocorrem no plano frontal em torno do eixo sagital.",
  },
  {
    id: "c1q06",
    chapter: "cap1",
    topic: "Eixos do corpo",
    question:
      "Rotação medial e lateral ocorrem em torno de qual eixo?",
    options: [
      "Eixo transversal",
      "Eixo sagital",
      "Eixo vertical (longitudinal)",
      "Eixo oblíquo",
    ],
    correctIndex: 2,
    explanation:
      "Rotação medial e lateral ocorrem no plano transversal em torno do eixo vertical (longitudinal).",
  },
  {
    id: "c1q07",
    chapter: "cap1",
    topic: "Terminologia de movimentos",
    question:
      "Qual o termo que descreve o movimento de afastamento da linha média do corpo?",
    options: ["Adução", "Flexão", "Abdução", "Extensão"],
    correctIndex: 2,
    explanation:
      "Abdução é o afastamento da linha média; adução é a aproximação.",
  },
  {
    id: "c1q08",
    chapter: "cap1",
    topic: "Terminologia de movimentos",
    question:
      "Qual movimento articular está envolvido ao rodar a palma da mão para cima (a partir da posição anatômica)?",
    options: ["Pronação", "Supinação", "Rotação lateral", "Eversão"],
    correctIndex: 1,
    explanation:
      "Na posição anatômica a palma já está voltada anteriormente (supinação). Supinação é o movimento de rodar o antebraço para que a palma fique voltada para cima/anteriormente.",
  },
  {
    id: "c1q09",
    chapter: "cap1",
    topic: "Terminologia de movimentos",
    question:
      "Qual é a diferença entre pronação e supinação?",
    options: [
      "Pronação gira a palma para trás; supinação gira a palma para frente",
      "Pronação é flexão do punho; supinação é extensão do punho",
      "Pronação afasta o pé; supinação aproxima o pé",
      "Pronação é rotação medial do ombro; supinação é rotação lateral",
    ],
    correctIndex: 0,
    explanation:
      "Pronação é o movimento que gira a palma para trás (posteriormente), e supinação gira a palma para frente (anteriormente). Esses movimentos ocorrem nas articulações radiulnares.",
  },
  {
    id: "c1q10",
    chapter: "cap1",
    topic: "Terminologia direcional",
    question:
      "O que significa o termo 'proximal' em anatomia?",
    options: [
      "Mais próximo da superfície do corpo",
      "Mais próximo do tronco ou ponto de origem",
      "Mais distante do tronco",
      "Na direção da cabeça",
    ],
    correctIndex: 1,
    explanation:
      "Proximal significa mais próximo do tronco ou do ponto de origem do membro. O oposto é distal.",
  },
  {
    id: "c1q11",
    chapter: "cap1",
    topic: "Terminologia direcional",
    question:
      "O cotovelo é __________ em relação ao punho e __________ em relação ao ombro.",
    options: [
      "Distal; proximal",
      "Proximal; distal",
      "Superior; inferior",
      "Medial; lateral",
    ],
    correctIndex: 1,
    explanation:
      "O cotovelo está mais próximo do tronco que o punho (proximal ao punho) e mais distante do tronco que o ombro (distal ao ombro).",
  },
  {
    id: "c1q12",
    chapter: "cap1",
    topic: "Centro de gravidade",
    question:
      "O centro de gravidade do corpo corresponde ao ponto de interseção de quais estruturas?",
    options: [
      "Dos três planos cardinais",
      "Dos eixos transversal e sagital",
      "Do plano frontal e do eixo vertical",
      "Dos dois planos sagitais",
    ],
    correctIndex: 0,
    explanation:
      "O centro de gravidade corresponde ao ponto de interseção dos três planos cardinais (sagital, frontal e transversal).",
    imageDescription:
      "Figura mostrando os três planos se cruzando em uma pessoa, indicando o centro de gravidade no ponto de interseção.",
  },
  {
    id: "c1q13",
    chapter: "cap1",
    topic: "Movimentos articulares",
    question:
      "Qual movimento articular corresponde ao retorno dos dedos à posição anatômica após o afastamento?",
    options: ["Abdução", "Adução", "Flexão", "Extensão"],
    correctIndex: 1,
    explanation:
      "O retorno dos dedos (aproximação) à posição anatômica após o afastamento é a adução.",
  },
  {
    id: "c1q14",
    chapter: "cap1",
    topic: "Movimentos articulares",
    question:
      "Quando a superfície anterior do antebraço se move em direção à superfície anterior do braço, qual movimento está envolvido?",
    options: [
      "Extensão do cotovelo",
      "Flexão do cotovelo",
      "Supinação do antebraço",
      "Pronação do antebraço",
    ],
    correctIndex: 1,
    explanation:
      "A aproximação das superfícies anteriores do antebraço e do braço corresponde à flexão do cotovelo, que ocorre no plano sagital.",
  },
  {
    id: "c1q15",
    chapter: "cap1",
    topic: "Planos e movimentos",
    question:
      "Em qual plano e em torno de qual eixo ocorrem os desvios radial e ulnar da mão?",
    options: [
      "Plano sagital, eixo transversal",
      "Plano frontal, eixo sagital",
      "Plano transversal, eixo vertical",
      "Plano frontal, eixo transversal",
    ],
    correctIndex: 1,
    explanation:
      "Os desvios radial e ulnar (abdução e adução da mão) ocorrem no plano frontal em torno do eixo sagital, semelhante a outros movimentos de abdução/adução.",
  },
  {
    id: "c1q16",
    chapter: "cap1",
    topic: "Terminologia",
    question:
      "O que é circundução?",
    options: [
      "Um tipo de rotação pura em torno do eixo longitudinal",
      "Uma combinação de flexão, extensão, abdução e adução que descreve um cone",
      "O mesmo que rotação medial",
      "Um movimento que ocorre apenas no plano transversal",
    ],
    correctIndex: 1,
    explanation:
      "Circundução é a combinação de todos os movimentos angulares (flexão, extensão, abdução e adução), descrevendo um cone no espaço. Não é um movimento isolado.",
  },
];

// ============================================================
// CAPÍTULO 2 – Sistema Esquelético
// ============================================================
const cap2Questions: QuizQuestion[] = [
  {
    id: "c2q01",
    chapter: "cap2",
    topic: "Funções do sistema esquelético",
    question:
      "Qual das seguintes NÃO é uma função do sistema esquelético?",
    options: [
      "Suporte e proteção de órgãos",
      "Produção de células sanguíneas",
      "Condução de impulsos nervosos",
      "Armazenamento de minerais",
    ],
    correctIndex: 2,
    explanation:
      "A condução de impulsos nervosos é função do sistema nervoso. O sistema esquelético fornece suporte, proteção, movimento, produção de células sanguíneas (hematopoiese) e armazenamento de minerais.",
  },
  {
    id: "c2q02",
    chapter: "cap2",
    topic: "Tipos de ossos",
    question:
      "Os ossos do carpo são classificados como que tipo de osso?",
    options: ["Longos", "Curtos", "Planos", "Irregulares"],
    correctIndex: 1,
    explanation:
      "Os ossos do carpo são ossos curtos — têm formato aproximadamente cúbico, com dimensões semelhantes em todos os eixos.",
  },
  {
    id: "c2q03",
    chapter: "cap2",
    topic: "Tipos de ossos",
    question:
      "Qual é um exemplo de osso plano?",
    options: ["Fêmur", "Vértebra", "Escápula", "Patela"],
    correctIndex: 2,
    explanation:
      "A escápula é um osso plano. Outros exemplos incluem os ossos do crânio, o esterno e as costelas. Ossos planos são finos e curvos.",
  },
  {
    id: "c2q04",
    chapter: "cap2",
    topic: "Estrutura óssea",
    question:
      "Qual é a diferença entre osso cortical e osso esponjoso?",
    options: [
      "Osso cortical é denso e compacto; osso esponjoso é poroso com trabéculas",
      "Osso cortical está no interior; osso esponjoso na superfície",
      "Osso cortical é encontrado apenas no crânio; esponjoso nos membros",
      "Não há diferença funcional entre os dois",
    ],
    correctIndex: 0,
    explanation:
      "Osso cortical (compacto) forma a camada externa densa. Osso esponjoso (trabecular) é poroso, localizado internamente, com trabéculas que suportam cargas.",
  },
  {
    id: "c2q05",
    chapter: "cap2",
    topic: "Estrutura óssea",
    question:
      "Qual parte de um osso longo é responsável pelo crescimento longitudinal?",
    options: ["Diáfise", "Placa epifisária", "Periósteo", "Endósteo"],
    correctIndex: 1,
    explanation:
      "A placa epifisária (placa de crescimento) é responsável pelo crescimento longitudinal do osso. Quando se ossifica, o crescimento cessa.",
  },
  {
    id: "c2q06",
    chapter: "cap2",
    topic: "Estrutura óssea",
    question:
      "A diáfise de um osso longo é composta principalmente por qual tipo de tecido ósseo?",
    options: [
      "Osso esponjoso",
      "Osso cortical (compacto)",
      "Cartilagem hialina",
      "Fibrocartilagem",
    ],
    correctIndex: 1,
    explanation:
      "A diáfise (corpo) de um osso longo é composta principalmente por osso cortical compacto, formando um tubo resistente.",
  },
  {
    id: "c2q07",
    chapter: "cap2",
    topic: "Patologias ósseas",
    question:
      "Qual patologia é caracterizada pela diminuição da densidade óssea, tornando os ossos mais frágeis?",
    options: [
      "Osteoartrite",
      "Osteoporose",
      "Osteomielite",
      "Osteomalácia",
    ],
    correctIndex: 1,
    explanation:
      "A osteoporose é a diminuição da densidade e da massa óssea, tornando os ossos porosos e frágeis, aumentando o risco de fraturas.",
  },
  {
    id: "c2q08",
    chapter: "cap2",
    topic: "Tecido ósseo",
    question:
      "Qual membrana recobre a superfície externa do osso e é importante para o suprimento sanguíneo e reparo de fraturas?",
    options: ["Endósteo", "Periósteo", "Pericôndrio", "Peritônio"],
    correctIndex: 1,
    explanation:
      "O periósteo é a membrana que recobre a superfície externa do osso (exceto nas faces articulares). É rico em vasos sanguíneos e nervos, e é fundamental no reparo de fraturas.",
  },
  {
    id: "c2q09",
    chapter: "cap2",
    topic: "Tipos de ossos",
    question:
      "A patela é classificada como qual tipo de osso?",
    options: ["Longo", "Curto", "Plano", "Sesamoide"],
    correctIndex: 3,
    explanation:
      "A patela é um osso sesamoide — um osso que se desenvolve dentro de um tendão. A patela está inserida no tendão do músculo quadríceps femoral.",
  },
  {
    id: "c2q10",
    chapter: "cap2",
    topic: "Pontos de referência ósseos",
    question:
      "O que é um processo ósseo?",
    options: [
      "Uma depressão na superfície do osso",
      "Uma projeção ou proeminência na superfície do osso",
      "Um canal no interior do osso",
      "Uma área de cartilagem articular",
    ],
    correctIndex: 1,
    explanation:
      "Um processo é uma projeção ou proeminência na superfície do osso. Geralmente serve como ponto de inserção muscular ou ligamentar.",
  },
  {
    id: "c2q11",
    chapter: "cap2",
    topic: "Tipos de ossos",
    question:
      "As vértebras são classificadas como qual tipo de osso?",
    options: ["Longos", "Curtos", "Planos", "Irregulares"],
    correctIndex: 3,
    explanation:
      "As vértebras são ossos irregulares — possuem formato complexo que não se encaixa nas outras categorias.",
  },
  {
    id: "c2q12",
    chapter: "cap2",
    topic: "Estrutura óssea",
    question:
      "Em um osso longo, as extremidades são chamadas de:",
    options: ["Diáfise", "Epífise", "Metáfise", "Periósteo"],
    correctIndex: 1,
    explanation:
      "As extremidades de um osso longo são chamadas de epífises (proximal e distal). A parte central é a diáfise.",
  },
  {
    id: "c2q13",
    chapter: "cap2",
    topic: "Cartilagem",
    question:
      "Qual tipo de cartilagem reveste as superfícies articulares dos ossos?",
    options: [
      "Fibrocartilagem",
      "Cartilagem elástica",
      "Cartilagem hialina",
      "Cartilagem fibrosa",
    ],
    correctIndex: 2,
    explanation:
      "A cartilagem hialina (articular) reveste as superfícies articulares. É lisa e reduz o atrito durante o movimento articular.",
  },
  {
    id: "c2q14",
    chapter: "cap2",
    topic: "Cartilagem",
    question:
      "Qual a diferença entre cartilagem hialina e fibrocartilagem?",
    options: [
      "Cartilagem hialina é mais flexível; fibrocartilagem é mais rígida e resiste à compressão",
      "Cartilagem hialina é encontrada nos discos intervertebrais; fibrocartilagem nas articulações",
      "Não há diferença entre elas",
      "Fibrocartilagem é mais lisa; cartilagem hialina é mais rugosa",
    ],
    correctIndex: 0,
    explanation:
      "A cartilagem hialina é lisa e flexível, revestindo superfícies articulares. A fibrocartilagem é mais densa e resistente à compressão, encontrada nos discos intervertebrais e nos meniscos.",
  },
  {
    id: "c2q15",
    chapter: "cap2",
    topic: "Hematopoiese",
    question:
      "Em qual parte do osso ocorre a produção de células sanguíneas (hematopoiese)?",
    options: [
      "Periósteo",
      "Osso cortical compacto",
      "Medula óssea vermelha (osso esponjoso)",
      "Cartilagem articular",
    ],
    correctIndex: 2,
    explanation:
      "A hematopoiese ocorre na medula óssea vermelha, localizada dentro do osso esponjoso, principalmente nas epífises de ossos longos e em ossos planos.",
  },
];

// ============================================================
// CAPÍTULO 3 – Sistema Articular
// ============================================================
const cap3Questions: QuizQuestion[] = [
  {
    id: "c3q01",
    chapter: "cap3",
    topic: "Tipos de articulações",
    question:
      "Quais são os três tipos de articulações que possibilitam pouco ou nenhum movimento?",
    options: [
      "Sinartrose, anfiartrose e diartrose",
      "Fibrosa, cartilaginosa e sinovial",
      "Sindesmose, sutura e gonfose",
      "Sinartrose e anfiartrose apenas",
    ],
    correctIndex: 0,
    explanation:
      "As sinartroses (imóveis) e anfiartroses (pouco móveis) são os tipos com pouco/nenhum movimento. Diartroses são livremente móveis. Uma classificação funcional utiliza esses três termos.",
  },
  {
    id: "c3q02",
    chapter: "cap3",
    topic: "Tipos de articulações",
    question:
      "Qual dos seguintes termos descreve uma articulação com muito movimento?",
    options: ["Sinartrose", "Anfiartrose", "Diartrose", "Sindesmose"],
    correctIndex: 2,
    explanation:
      "Diartrose significa articulação livremente móvel. As articulações sinoviais são diartroses.",
  },
  {
    id: "c3q03",
    chapter: "cap3",
    topic: "Articulações sinoviais",
    question:
      "Quais são as três características que descrevem as articulações sinoviais?",
    options: [
      "Cápsula articular, cavidade articular com líquido sinovial, cartilagem articular",
      "Disco articular, ligamento e tendão",
      "Membrana fibrosa, cartilagem hialina e periósteo",
      "Osso esponjoso, osso cortical e medula",
    ],
    correctIndex: 0,
    explanation:
      "As articulações sinoviais se caracterizam por: cápsula articular envolvendo a articulação, cavidade articular preenchida com líquido sinovial e cartilagem articular nas superfícies ósseas.",
  },
  {
    id: "c3q04",
    chapter: "cap3",
    topic: "Estrutura articular",
    question:
      "Que tipo de estrutura articular conecta um osso a um músculo?",
    options: ["Ligamento", "Tendão", "Cápsula articular", "Menisco"],
    correctIndex: 1,
    explanation:
      "Tendões conectam músculos a ossos. Ligamentos conectam ossos a ossos.",
  },
  {
    id: "c3q05",
    chapter: "cap3",
    topic: "Estrutura articular",
    question:
      "Qual estrutura articular amortece e protege áreas de grande atrito?",
    options: [
      "Ligamento",
      "Tendão",
      "Bolsa sinovial (bursa)",
      "Cápsula articular",
    ],
    correctIndex: 2,
    explanation:
      "A bolsa sinovial (bursa) é um saco preenchido com líquido sinovial que reduz o atrito entre tendões, ligamentos e ossos.",
  },
  {
    id: "c3q06",
    chapter: "cap3",
    topic: "Graus de liberdade",
    question:
      "Uma articulação uniaxial possui quantos graus de liberdade?",
    options: ["Zero", "Um", "Dois", "Três"],
    correctIndex: 1,
    explanation:
      "Uma articulação uniaxial permite movimento em torno de um eixo e em um plano, tendo portanto um grau de liberdade.",
  },
  {
    id: "c3q07",
    chapter: "cap3",
    topic: "Graus de liberdade",
    question:
      "Quantos graus de liberdade o membro superior possui desde o dedo até o ombro?",
    options: ["5°", "8°", "11°", "15°"],
    correctIndex: 2,
    explanation:
      "O ombro tem 3, o cotovelo e a radiulnar 1 cada, a radiocarpal 2, e as articulações da mão contribuem com os demais, totalizando 11° de liberdade.",
  },
  {
    id: "c3q08",
    chapter: "cap3",
    topic: "Tipos de articulações sinoviais",
    question:
      "Qual tipo de articulação sinovial é o ombro (glenoumeral)?",
    options: ["Gínglimo", "Trocoide", "Esferóidea", "Elipsóidea"],
    correctIndex: 2,
    explanation:
      "A articulação do ombro é do tipo esferóidea (bola-e-soquete), permitindo movimentos nos três planos com três graus de liberdade.",
  },
  {
    id: "c3q09",
    chapter: "cap3",
    topic: "Tipos de articulações sinoviais",
    question:
      "Qual tipo de articulação sinovial é o cotovelo?",
    options: [
      "Esferóidea",
      "Gínglimo (dobradiça)",
      "Selar",
      "Plana",
    ],
    correctIndex: 1,
    explanation:
      "O cotovelo é uma articulação do tipo gínglimo (dobradiça), uniaxial, permitindo apenas flexão e extensão.",
  },
  {
    id: "c3q10",
    chapter: "cap3",
    topic: "Doenças articulares",
    question:
      "O que é uma entorse?",
    options: [
      "Ruptura parcial ou completa das fibras dos ligamentos",
      "Inflamação de um tendão",
      "Fratura parcial de um osso",
      "Deslocamento completo de uma articulação",
    ],
    correctIndex: 0,
    explanation:
      "Entorses consistem na ruptura parcial ou completa das fibras dos ligamentos. São classificadas em suave, moderada e grave.",
  },
  {
    id: "c3q11",
    chapter: "cap3",
    topic: "Doenças articulares",
    question:
      "Qual é a diferença entre luxação e subluxação?",
    options: [
      "Luxação é separação completa das faces articulares; subluxação é deslocamento parcial",
      "Luxação é temporária; subluxação é permanente",
      "Luxação é nos ligamentos; subluxação é nos tendões",
      "Não há diferença entre os dois termos",
    ],
    correctIndex: 0,
    explanation:
      "Luxação refere-se à separação completa das faces articulares. Subluxação é o deslocamento parcial da articulação.",
  },
  {
    id: "c3q12",
    chapter: "cap3",
    topic: "Doenças articulares",
    question:
      "A osteoartrite é também conhecida como:",
    options: [
      "Artrite reumatoide",
      "Artrite degenerativa",
      "Artrite séptica",
      "Artrite gotosa",
    ],
    correctIndex: 1,
    explanation:
      "A osteoartrite é também conhecida como artrite degenerativa, causada pela ruptura e perda de cartilagem articular.",
  },
  {
    id: "c3q13",
    chapter: "cap3",
    topic: "Doenças articulares",
    question:
      "O que é tendinite?",
    options: [
      "Inflamação da cápsula articular",
      "Inflamação de um tendão",
      "Inflamação da membrana sinovial",
      "Ruptura de um ligamento",
    ],
    correctIndex: 1,
    explanation:
      "Tendinite é a inflamação de um tendão. Sinovite é a inflamação da membrana sinovial. Bursite é a inflamação da bolsa sinovial. Capsulite é a inflamação da cápsula articular.",
  },
  {
    id: "c3q14",
    chapter: "cap3",
    topic: "Doenças articulares",
    question:
      "Tenossinovite é a inflamação de qual estrutura?",
    options: [
      "Do tendão",
      "Da bainha do tendão",
      "Da bolsa sinovial",
      "Da cápsula articular",
    ],
    correctIndex: 1,
    explanation:
      "Tenossinovite é a inflamação da bainha dos tendões, frequentemente causada por esforço repetitivo.",
  },
  {
    id: "c3q15",
    chapter: "cap3",
    topic: "Movimentos articulares",
    question:
      "Qual a relação entre plano, eixo e movimento articular para a supinação/pronação?",
    options: [
      "Plano sagital, eixo transversal",
      "Plano frontal, eixo sagital",
      "Plano transversal, eixo vertical (longitudinal)",
      "Plano frontal, eixo vertical",
    ],
    correctIndex: 2,
    explanation:
      "Supinação e pronação ocorrem no plano transversal em torno do eixo vertical (longitudinal).",
  },
  {
    id: "c3q16",
    chapter: "cap3",
    topic: "Articulações sinoviais",
    question:
      "Qual tipo de articulação sinovial é a articulação carpometacarpal (CMC) do polegar?",
    options: ["Gínglimo", "Trocoide", "Selar", "Plana"],
    correctIndex: 2,
    explanation:
      "A articulação CMC do polegar é do tipo selar (sela), na qual cada face articular é côncava em uma direção e convexa na outra.",
  },
];

// ============================================================
// CAPÍTULO 4 – Artrocinemática
// ============================================================
const cap4Questions: QuizQuestion[] = [
  {
    id: "c4q01",
    chapter: "cap4",
    topic: "Sensação final do movimento",
    question:
      "Quais são os três tipos normais de sensação final do movimento?",
    options: [
      "Óssea, estiramento dos tecidos moles e aproximação dos tecidos moles",
      "Pastosa, vazia e espasmo muscular",
      "Firme, suave e rígida",
      "Elástica, bloqueio elástico e pastosa",
    ],
    correctIndex: 0,
    explanation:
      "Os três tipos normais de sensação final do movimento são: óssea (contato osso-osso), estiramento dos tecidos moles (sensação firme) e aproximação dos tecidos moles (sensação macia).",
  },
  {
    id: "c4q02",
    chapter: "cap4",
    topic: "Sensação final do movimento",
    question:
      "A sensação final percebida na extensão total do cotovelo é chamada de:",
    options: [
      "Estiramento dos tecidos moles",
      "Aproximação dos tecidos moles",
      "Óssea (dura/resistente)",
      "Vazia",
    ],
    correctIndex: 2,
    explanation:
      "Na extensão total do cotovelo, o olécrano da ulna entra na fossa do olécrano do úmero, produzindo sensação final óssea (dura).",
  },
  {
    id: "c4q03",
    chapter: "cap4",
    topic: "Sensação final do movimento",
    question:
      "A sensação final na flexão do cotovelo (quando os volumes musculares se comprimem) é chamada de:",
    options: [
      "Óssea",
      "Estiramento dos tecidos moles",
      "Aproximação dos tecidos moles",
      "Espasmo muscular",
    ],
    correctIndex: 2,
    explanation:
      "Na flexão do cotovelo, os volumes musculares do braço e do antebraço se comprimem, produzindo a sensação final de aproximação dos tecidos moles.",
  },
  {
    id: "c4q04",
    chapter: "cap4",
    topic: "Tipos de movimento artrocinemático",
    question:
      "Quais são os três tipos de movimento artrocinemático?",
    options: [
      "Flexão, extensão e rotação",
      "Rolamento, deslizamento e rotação",
      "Tração, compressão e cisalhamento",
      "Abdução, adução e circundução",
    ],
    correctIndex: 1,
    explanation:
      "Os três tipos de movimento artrocinemático são: rolamento (novos pontos em contato), deslizamento (um ponto em contato com novos pontos) e rotação (mesmo ponto gira).",
    imageDescription:
      "Figuras mostrando rolamento (como bola rolando), deslizamento (como patim deslizando) e rotação (como pião girando).",
  },
  {
    id: "c4q05",
    chapter: "cap4",
    topic: "Tipos de movimento artrocinemático",
    question:
      "No rolamento articular, o que ocorre nas superfícies em contato?",
    options: [
      "O mesmo ponto em cada face articular permanece em contato",
      "Um ponto em uma face articular entra em contato com novos pontos na outra",
      "Novos pontos em cada face articular entram em contato",
      "As faces articulares se afastam",
    ],
    correctIndex: 2,
    explanation:
      "No rolamento, novos pontos em cada face articular entram em contato durante o movimento, como uma bola rolando no chão.",
  },
  {
    id: "c4q06",
    chapter: "cap4",
    topic: "Tipos de movimento artrocinemático",
    question:
      "No deslizamento articular, o que acontece?",
    options: [
      "Novos pontos em ambas as faces entram em contato",
      "Um ponto em uma face articular entra em contato com novos pontos na outra face",
      "O mesmo ponto em cada face permanece em contato",
      "As faces articulares giram uma sobre a outra",
    ],
    correctIndex: 1,
    explanation:
      "No deslizamento, um ponto em uma face articular entra em contato com novos pontos da face articular adjacente, como um patim de gelo deslizando.",
  },
  {
    id: "c4q07",
    chapter: "cap4",
    topic: "Regra convexo-côncavo",
    question:
      "Segundo a regra convexo-côncavo, quando uma face articular CONVEXA se move sobre uma face côncava fixa, a face convexa se move em qual direção?",
    options: [
      "Na mesma direção do movimento do segmento corporal",
      "Na direção oposta ao movimento do segmento corporal",
      "Não há regra definida",
      "Sempre superiormente",
    ],
    correctIndex: 1,
    explanation:
      "Quando a face articular convexa se move, ela desliza na direção oposta ao movimento do segmento corporal. Ex.: na flexão do ombro, a cabeça do úmero (convexa) desliza inferiormente.",
    imageDescription:
      "Figura mostrando a face articular convexa se movendo na direção oposta à do segmento corporal.",
  },
  {
    id: "c4q08",
    chapter: "cap4",
    topic: "Regra convexo-côncavo",
    question:
      "Segundo a regra convexo-côncavo, quando uma face articular CÔNCAVA se move sobre uma convexa fixa, a face côncava se move em qual direção?",
    options: [
      "Na direção oposta ao segmento corporal",
      "Na mesma direção do segmento corporal",
      "Sempre em rotação",
      "Sempre lateralmente",
    ],
    correctIndex: 1,
    explanation:
      "Quando a face articular côncava se move, ela desliza na mesma direção do movimento do segmento corporal.",
    imageDescription:
      "Figura mostrando a face articular côncava se movendo na mesma direção do segmento corporal.",
  },
  {
    id: "c4q09",
    chapter: "cap4",
    topic: "Posições articulares",
    question:
      "O que é a posição de cadeia cinética fechada?",
    options: [
      "Quando as faces articulares estão separadas ao máximo",
      "Quando as faces articulares estão congruentes (máximo contato) e a articulação está 'travada'",
      "Quando o segmento distal está livre para se mover",
      "Quando o músculo está em sua maior excursão",
    ],
    correctIndex: 1,
    explanation:
      "Na posição de cadeia cinética fechada, as faces articulares estão congruentes (máximo contato), os ligamentos estão tensos e a articulação é mais estável.",
  },
  {
    id: "c4q10",
    chapter: "cap4",
    topic: "Posições articulares",
    question:
      "O que é a posição de cadeia cinética aberta (posição de repouso)?",
    options: [
      "Quando há congruência máxima das faces articulares",
      "Quando há incongruência máxima e as faces articulares estão mais separadas",
      "Quando o segmento distal está fixo",
      "Quando a articulação está em extensão completa",
    ],
    correctIndex: 1,
    explanation:
      "Na posição de cadeia cinética aberta (posição de repouso), há incongruência máxima das faces articulares, que estão mais separadas, com ligamentos e cápsula mais relaxados.",
  },
  {
    id: "c4q11",
    chapter: "cap4",
    topic: "Forças do movimento acessório",
    question:
      "Quais são os três principais tipos de força usados na mobilização articular?",
    options: [
      "Tração, compressão e cisalhamento",
      "Flexão, extensão e rotação",
      "Rolamento, deslizamento e rotação",
      "Concêntrica, excêntrica e isométrica",
    ],
    correctIndex: 0,
    explanation:
      "Os três tipos de força na mobilização articular são: tração (distração — afasta as superfícies), compressão (aproxima as superfícies) e cisalhamento (move as superfícies em paralelo).",
  },
  {
    id: "c4q12",
    chapter: "cap4",
    topic: "Forças do movimento acessório",
    question:
      "A tração articular (distração) causa qual efeito nas faces articulares?",
    options: [
      "Aproxima as faces articulares",
      "Afasta as extremidades ósseas uma da outra",
      "Move as faces articulares em paralelo",
      "Provoca rotação das faces articulares",
    ],
    correctIndex: 1,
    explanation:
      "A tração (distração) ocorre quando uma força externa afasta as faces articulares uma da outra.",
    imageDescription:
      "Figura mostrando a força de tração fazendo as extremidades do osso se afastarem uma da outra.",
  },
  {
    id: "c4q13",
    chapter: "cap4",
    topic: "Formato da face articular",
    question:
      "Qual é o formato mais comum das articulações sinoviais?",
    options: ["Selar", "Ovoide", "Plana", "Irregular"],
    correctIndex: 1,
    explanation:
      "A maioria das articulações sinoviais é ovoide, com uma extremidade óssea convexa e outra côncava.",
  },
  {
    id: "c4q14",
    chapter: "cap4",
    topic: "Sensação final anormal",
    question:
      "Qual sensação final do movimento é descrita como uma interrupção súbita e rígida que ocorre antes do normal?",
    options: [
      "Sensação final pastosa",
      "Sensação final óssea anormal",
      "Espasmo muscular",
      "Bloqueio elástico",
    ],
    correctIndex: 1,
    explanation:
      "A sensação final óssea anormal é uma interrupção súbita e rígida que ocorre antes do final normal da amplitude de movimento, quando estruturas ósseas anormais (como osteófitos) bloqueiam o movimento.",
  },
  {
    id: "c4q15",
    chapter: "cap4",
    topic: "Movimento acessório",
    question:
      "Os movimentos componentes são:",
    options: [
      "Movimentos passivos entre as faces articulares",
      "Movimentos que acompanham o movimento ativo, mas não estão sob controle voluntário",
      "Movimentos realizados apenas pelo terapeuta",
      "Movimentos de grande amplitude",
    ],
    correctIndex: 1,
    explanation:
      "Movimentos componentes são os que acompanham o movimento ativo, mas não estão sob controle voluntário. Ex.: o cíngulo do membro superior precisa rodar superiormente para que ocorra flexão do ombro.",
  },
  {
    id: "c4q16",
    chapter: "cap4",
    topic: "Formato da face articular",
    question:
      "Em uma articulação selar, como são as faces articulares?",
    options: [
      "Ambas convexas",
      "Ambas côncavas",
      "Cada face é côncava em uma direção e convexa na outra",
      "Uma plana e outra côncava",
    ],
    correctIndex: 2,
    explanation:
      "Em uma articulação selar, cada face articular é côncava em uma direção e convexa na outra, como duas selas encaixadas. A CMC do polegar é o melhor exemplo.",
  },
];

// ============================================================
// CAPÍTULO 5 – Sistema Muscular
// ============================================================
const cap5Questions: QuizQuestion[] = [
  {
    id: "c5q01",
    chapter: "cap5",
    topic: "Inserções musculares",
    question:
      "Qual é a diferença entre inserção proximal (ponto fixo) e inserção distal (ponto móvel)?",
    options: [
      "A inserção proximal é no osso mais estável; a distal é no osso mais móvel",
      "A inserção proximal é no tendão; a distal é no ligamento",
      "Não há diferença funcional entre elas",
      "A inserção proximal é sempre no membro; a distal é no tronco",
    ],
    correctIndex: 0,
    explanation:
      "A inserção proximal (ponto fixo) está no osso mais estável (geralmente mais próximo do tronco), enquanto a inserção distal (ponto móvel) está no osso mais móvel e se move em direção à inserção proximal.",
    imageDescription:
      "Figura mostrando o músculo bíceps braquial com a inserção distal se movendo em direção à inserção proximal durante a flexão do cotovelo.",
  },
  {
    id: "c5q02",
    chapter: "cap5",
    topic: "Inserções musculares",
    question:
      "O que é reversão da ação muscular?",
    options: [
      "Quando o músculo relaxa completamente",
      "Quando a inserção proximal se move em direção à inserção distal",
      "Quando o músculo se rompe",
      "Quando o antagonista se torna mais forte que o agonista",
    ],
    correctIndex: 1,
    explanation:
      "A reversão da ação muscular ocorre quando a inserção proximal (normalmente fixa) se move em direção à inserção distal (que se torna fixa). Ex.: segurar uma barra fixa — o úmero se move em direção ao antebraço.",
  },
  {
    id: "c5q03",
    chapter: "cap5",
    topic: "Disposição das fibras musculares",
    question:
      "Músculos com fibras paralelas têm maior potencial de:",
    options: [
      "Força",
      "Amplitude de movimento",
      "Resistência",
      "Velocidade isométrica",
    ],
    correctIndex: 1,
    explanation:
      "Músculos com fibras paralelas são mais longos e têm maior potencial de amplitude de movimento. Músculos com fibras oblíquas (peniformes) têm maior potencial de força.",
  },
  {
    id: "c5q04",
    chapter: "cap5",
    topic: "Disposição das fibras",
    question:
      "Qual é o formato de um músculo fusiforme?",
    options: [
      "Formato de leque (triangular)",
      "Formato de fuso (mais largo no meio, afinando nas extremidades)",
      "Formato retangular com bordas paralelas",
      "Formato de pena com fibras oblíquas",
    ],
    correctIndex: 1,
    explanation:
      "Um músculo fusiforme se assemelha a um fuso, mais largo no meio e afinando nas extremidades, onde se continua nos tendões. Exemplos: bíceps braquial, braquial.",
    imageDescription:
      "Figura mostrando diferentes orientações das fibras musculares: reto, fusiforme, plano, triangular, semipeniforme, peniforme e multipeniforme.",
  },
  {
    id: "c5q05",
    chapter: "cap5",
    topic: "Características funcionais",
    question:
      "Quais são as quatro propriedades do tecido muscular?",
    options: [
      "Irritabilidade, contratilidade, extensibilidade e elasticidade",
      "Força, resistência, flexibilidade e velocidade",
      "Tônus, tensão, excursão e potência",
      "Isometria, isotonia, isocinética e isoaceleração",
    ],
    correctIndex: 0,
    explanation:
      "As quatro propriedades são: irritabilidade (capacidade de responder a estímulos), contratilidade (capacidade de encurtar), extensibilidade (capacidade de alongar) e elasticidade (capacidade de retornar ao comprimento normal).",
  },
  {
    id: "c5q06",
    chapter: "cap5",
    topic: "Tipos de contração",
    question:
      "Na contração isométrica, o que ocorre?",
    options: [
      "O músculo encurta e há movimento articular",
      "O músculo alonga e há movimento articular",
      "O músculo produz força sem alteração no comprimento e sem movimento articular",
      "O músculo relaxa completamente",
    ],
    correctIndex: 2,
    explanation:
      "Na contração isométrica, o músculo se contrai produzindo força, mas sem alteração no seu comprimento e sem movimento articular. O termo vem do grego: 'mesmo comprimento'.",
    imageDescription:
      "Figura mostrando três tipos de contração: isométrica (sem movimento), concêntrica (músculo encurta) e excêntrica (músculo alonga).",
  },
  {
    id: "c5q07",
    chapter: "cap5",
    topic: "Tipos de contração",
    question:
      "Na contração concêntrica, o que acontece?",
    options: [
      "O músculo alonga enquanto produz força",
      "O músculo encurta, as inserções se aproximam e há movimento articular",
      "Não há alteração no comprimento do músculo",
      "O músculo relaxa contra a gravidade",
    ],
    correctIndex: 1,
    explanation:
      "Na contração concêntrica, o músculo encurta, as inserções se aproximam e há movimento articular. É uma atividade de aceleração. Ex.: levantar um peso (flexão do cotovelo).",
  },
  {
    id: "c5q08",
    chapter: "cap5",
    topic: "Tipos de contração",
    question:
      "Na contração excêntrica, o que ocorre?",
    options: [
      "O músculo encurta",
      "O músculo alonga enquanto produz força (inserções se afastam)",
      "O músculo permanece no mesmo comprimento",
      "O músculo relaxa completamente",
    ],
    correctIndex: 1,
    explanation:
      "Na contração excêntrica, há movimento articular, mas o músculo parece alongar (as inserções se afastam). É uma atividade de desaceleração. Ex.: abaixar um peso lentamente.",
  },
  {
    id: "c5q09",
    chapter: "cap5",
    topic: "Tipos de contração",
    question:
      "Descer uma ladeira requer qual tipo de contração do músculo quadríceps femoral?",
    options: ["Isométrica", "Concêntrica", "Excêntrica", "Isocinética"],
    correctIndex: 2,
    explanation:
      "Descer uma ladeira requer contração excêntrica do quadríceps, que controla (desacelera) a flexão do joelho causada pela gravidade.",
  },
  {
    id: "c5q10",
    chapter: "cap5",
    topic: "Funções dos músculos",
    question:
      "Qual é a função de um músculo agonista?",
    options: [
      "Estabilizar uma articulação",
      "Realizar o movimento oposto ao desejado",
      "Ser o responsável direto pelo movimento desejado",
      "Neutralizar um componente indesejado do movimento",
    ],
    correctIndex: 2,
    explanation:
      "O agonista (agonista principal) é o músculo responsável diretamente pelo movimento desejado. Ex.: na flexão do cotovelo, o bíceps braquial é o agonista principal.",
  },
  {
    id: "c5q11",
    chapter: "cap5",
    topic: "Funções dos músculos",
    question:
      "Qual é a função do músculo antagonista?",
    options: [
      "Auxiliar o agonista no movimento",
      "Realizar o movimento oposto ao do agonista",
      "Estabilizar a articulação",
      "Neutralizar movimentos indesejados",
    ],
    correctIndex: 1,
    explanation:
      "O antagonista realiza o movimento oposto ao do agonista. Na flexão do cotovelo, o tríceps braquial é o antagonista. Geralmente está relaxado enquanto o agonista se contrai.",
  },
  {
    id: "c5q12",
    chapter: "cap5",
    topic: "Funções dos músculos",
    question:
      "O que é um músculo estabilizador (fixador)?",
    options: [
      "Realiza o movimento principal",
      "Realiza o movimento oposto",
      "Confere sustentação a uma parte do corpo para que o agonista trabalhe eficientemente",
      "Neutraliza componentes indesejados do movimento",
    ],
    correctIndex: 2,
    explanation:
      "O estabilizador (fixador) confere sustentação ou firmeza a uma parte do corpo, possibilitando que o agonista trabalhe de modo mais eficiente.",
  },
  {
    id: "c5q13",
    chapter: "cap5",
    topic: "Funções dos músculos",
    question:
      "O que é um músculo neutralizador?",
    options: [
      "Músculo que realiza o movimento principal",
      "Músculo que se contrai para evitar um movimento indesejado produzido pelo agonista",
      "Músculo que estabiliza o tronco",
      "Músculo que não participa do movimento",
    ],
    correctIndex: 1,
    explanation:
      "O neutralizador se contrai para evitar um movimento indesejado do agonista. Ex.: o músculo pronador redondo neutraliza a supinação do bíceps braquial durante a flexão pura do cotovelo.",
  },
  {
    id: "c5q14",
    chapter: "cap5",
    topic: "Insuficiências",
    question:
      "O que é insuficiência ativa?",
    options: [
      "Quando o músculo não pode mais ser alongado",
      "Quando o músculo não consegue mais se encurtar (contrair ao máximo) sobre todas as articulações que cruza",
      "Quando há espasmo muscular",
      "Quando o músculo está inflamado",
    ],
    correctIndex: 1,
    explanation:
      "Insuficiência ativa ocorre quando um músculo (geralmente biarticular) se contrai ao máximo sobre todas as suas articulações e não consegue mais encurtar.",
  },
  {
    id: "c5q15",
    chapter: "cap5",
    topic: "Insuficiências",
    question:
      "O que é insuficiência passiva?",
    options: [
      "Quando o músculo agonista não consegue mais encurtar",
      "Quando o músculo antagonista não pode mais ser alongado sem dano às fibras",
      "Quando não há contração muscular",
      "Quando há espasmo do músculo",
    ],
    correctIndex: 1,
    explanation:
      "Insuficiência passiva ocorre no músculo antagonista quando ele não pode mais ser alongado sobre todas as suas articulações sem risco de dano.",
  },
  {
    id: "c5q16",
    chapter: "cap5",
    topic: "Cadeias cinéticas",
    question:
      "Qual a diferença entre cadeia cinética aberta e fechada?",
    options: [
      "Na aberta, o segmento distal está fixo; na fechada, está livre",
      "Na aberta, o segmento distal está livre para se mover; na fechada, o segmento distal está fixo",
      "Não há diferença funcional entre elas",
      "Cadeia aberta é para membros superiores; fechada para inferiores",
    ],
    correctIndex: 1,
    explanation:
      "Na cadeia cinética aberta, o segmento distal está livre para se mover. Na cadeia cinética fechada, o segmento distal está fixo e os segmentos proximais se movem. Ex.: push-ups são cadeia fechada.",
    imageDescription:
      "Figura mostrando cadeia cinética fechada (segmento distal fixo, proximal se move) e cadeia aberta (segmento distal livre).",
  },
  {
    id: "c5q17",
    chapter: "cap5",
    topic: "Ângulo de tração",
    question:
      "Em relação ao ângulo de tração muscular, quando o músculo é mais forte na amplitude de movimento?",
    options: [
      "No início do arco",
      "No final do arco",
      "Na parte média do arco",
      "A força é constante em toda a amplitude",
    ],
    correctIndex: 2,
    explanation:
      "O músculo é mais forte na parte média do arco da amplitude de movimento, onde o ângulo de tração está mais próximo de 90°.",
  },
  {
    id: "c5q18",
    chapter: "cap5",
    topic: "Comprimento-tensão",
    question:
      "Um músculo produz mais força quando está em qual comprimento?",
    options: [
      "Muito encurtado",
      "No comprimento de repouso (levemente alongado)",
      "Muito alongado",
      "A força é igual em qualquer comprimento",
    ],
    correctIndex: 1,
    explanation:
      "Um músculo é mais forte quando está colocado sob leve tensão antes de sua contração (levemente alongado). Isso é a correlação comprimento-tensão.",
  },
];

// ============================================================
// CAPÍTULO 9 – Cíngulo do Membro Superior
// ============================================================
const cap9Questions: QuizQuestion[] = [
  {
    id: "c9q01",
    chapter: "cap9",
    topic: "Articulações do cíngulo",
    question:
      "Quais são as três articulações do cíngulo do membro superior?",
    options: [
      "Esternoclavicular, acromioclavicular e escapulotorácica",
      "Glenoumeral, esternoclavicular e acromioclavicular",
      "Escapulotorácica, glenoumeral e umeroulnar",
      "Acromioclavicular, radiocarpal e esternoclavicular",
    ],
    correctIndex: 0,
    explanation:
      "As três articulações do cíngulo do membro superior são: esternoclavicular (EC), acromioclavicular (AC) e escapulotorácica (não é uma articulação verdadeira, mas funcional).",
  },
  {
    id: "c9q02",
    chapter: "cap9",
    topic: "Articulações do cíngulo",
    question:
      "Qual é a única articulação que conecta o membro superior ao esqueleto axial?",
    options: [
      "Acromioclavicular",
      "Glenoumeral",
      "Esternoclavicular",
      "Escapulotorácica",
    ],
    correctIndex: 2,
    explanation:
      "A articulação esternoclavicular é a única conexão direta (articulação sinovial verdadeira) entre o membro superior e o esqueleto axial.",
  },
  {
    id: "c9q03",
    chapter: "cap9",
    topic: "Movimentos do cíngulo",
    question:
      "Quais são os movimentos da escápula?",
    options: [
      "Flexão, extensão, abdução e adução",
      "Elevação, depressão, protrusão, retração, rotação superior e rotação inferior",
      "Pronação, supinação e rotação",
      "Flexão lateral e rotação apenas",
    ],
    correctIndex: 1,
    explanation:
      "A escápula realiza: elevação, depressão, protrusão (abdução), retração (adução), rotação superior (cavidade glenoidal volta-se superiormente) e rotação inferior.",
  },
  {
    id: "c9q04",
    chapter: "cap9",
    topic: "Músculos do cíngulo",
    question:
      "Qual músculo é o agonista principal na protrusão (abdução) da escápula?",
    options: [
      "Trapézio (parte transversa)",
      "Romboides",
      "Serrátil anterior",
      "Levantador da escápula",
    ],
    correctIndex: 2,
    explanation:
      "O serrátil anterior é o agonista principal na protrusão da escápula, empurrando-a para frente contra a parede torácica.",
  },
  {
    id: "c9q05",
    chapter: "cap9",
    topic: "Músculos do cíngulo",
    question:
      "Qual músculo é o agonista principal na retração (adução) da escápula?",
    options: [
      "Serrátil anterior",
      "Peitoral menor",
      "Trapézio (parte transversa) e romboides",
      "Levantador da escápula",
    ],
    correctIndex: 2,
    explanation:
      "O trapézio (parte transversa) e os romboides são os agonistas principais na retração da escápula, puxando-a em direção à coluna vertebral.",
  },
  {
    id: "c9q06",
    chapter: "cap9",
    topic: "Músculos do cíngulo",
    question:
      "Qual músculo é o agonista principal na elevação da escápula?",
    options: [
      "Peitoral menor",
      "Serrátil anterior",
      "Trapézio (parte descendente) e levantador da escápula",
      "Romboides maior",
    ],
    correctIndex: 2,
    explanation:
      "O trapézio (parte descendente/superior) e o levantador da escápula são os agonistas principais na elevação da escápula.",
  },
  {
    id: "c9q07",
    chapter: "cap9",
    topic: "Músculos do cíngulo",
    question:
      "Qual nervo inerva o músculo serrátil anterior?",
    options: [
      "Nervo acessório (XI)",
      "Nervo torácico longo",
      "Nervo dorsal da escápula",
      "Nervo supraescapular",
    ],
    correctIndex: 1,
    explanation:
      "O nervo torácico longo inerva o serrátil anterior. Sua lesão causa a 'escápula alada' — a escápula se destaca da parede torácica.",
  },
  {
    id: "c9q08",
    chapter: "cap9",
    topic: "Músculos do cíngulo",
    question:
      "A lesão do nervo torácico longo causa qual condição?",
    options: [
      "Paralisia do trapézio",
      "Escápula alada (projeção medial)",
      "Ombro caído",
      "Perda da rotação lateral",
    ],
    correctIndex: 1,
    explanation:
      "A lesão do nervo torácico longo paralisa o serrátil anterior, causando a escápula alada — a borda medial da escápula se projeta posteriormente.",
  },
  {
    id: "c9q09",
    chapter: "cap9",
    topic: "Ritmo escapuloumeral",
    question:
      "No ritmo escapuloumeral, para cada 2° de abdução do braço na articulação do ombro, quantos graus o cíngulo do membro superior se move?",
    options: ["0°", "1°", "2°", "3°"],
    correctIndex: 1,
    explanation:
      "No ritmo escapuloumeral, a proporção é 2:1 — para cada 2° de abdução do ombro, o cíngulo gira 1° para cima, permitindo abdução total de 180°.",
  },
  {
    id: "c9q10",
    chapter: "cap9",
    topic: "Músculos do cíngulo",
    question:
      "O músculo trapézio é dividido em quantas partes funcionais?",
    options: ["Duas", "Três", "Quatro", "Cinco"],
    correctIndex: 1,
    explanation:
      "O trapézio é dividido em três partes: descendente (superior), transversa (média) e ascendente (inferior), cada uma com ações diferentes sobre a escápula.",
  },
  {
    id: "c9q11",
    chapter: "cap9",
    topic: "Músculos do cíngulo",
    question:
      "Qual nervo inerva o músculo trapézio?",
    options: [
      "Nervo torácico longo",
      "Nervo acessório (XI par craniano)",
      "Nervo dorsal da escápula",
      "Nervo supraescapular",
    ],
    correctIndex: 1,
    explanation:
      "O músculo trapézio é inervado pelo nervo acessório (XI par craniano) e por ramos de C3-C4.",
  },
  {
    id: "c9q12",
    chapter: "cap9",
    topic: "Músculos do cíngulo",
    question:
      "Qual nervo inerva os músculos romboides maior e menor?",
    options: [
      "Nervo acessório",
      "Nervo torácico longo",
      "Nervo dorsal da escápula",
      "Nervo peitoral lateral",
    ],
    correctIndex: 2,
    explanation:
      "O nervo dorsal da escápula inerva os romboides maior e menor, e também o levantador da escápula.",
  },
  {
    id: "c9q13",
    chapter: "cap9",
    topic: "Rotação da escápula",
    question:
      "Na rotação superior da escápula, qual estrutura se volta para cima?",
    options: [
      "O ângulo inferior",
      "A cavidade glenoidal",
      "A espinha da escápula",
      "O acrômio",
    ],
    correctIndex: 1,
    explanation:
      "Na rotação superior da escápula, a cavidade glenoidal se volta superiormente, permitindo a elevação do braço acima da cabeça.",
  },
  {
    id: "c9q14",
    chapter: "cap9",
    topic: "Pontos de referência",
    question:
      "Qual estrutura da escápula divide a face posterior em fossa supraespinal e infraespinal?",
    options: [
      "O acrômio",
      "A espinha da escápula",
      "A margem lateral",
      "O ângulo inferior",
    ],
    correctIndex: 1,
    explanation:
      "A espinha da escápula é uma projeção óssea na face posterior que divide a escápula em fossa supraespinal (acima) e fossa infraespinal (abaixo).",
  },
  {
    id: "c9q15",
    chapter: "cap9",
    topic: "Peitoral menor",
    question:
      "Qual é a ação principal do músculo peitoral menor?",
    options: [
      "Elevação da escápula",
      "Rotação superior da escápula",
      "Depressão e protrusão da escápula",
      "Retração da escápula",
    ],
    correctIndex: 2,
    explanation:
      "O peitoral menor atua na depressão da escápula, inclinação anterior e, auxiliarmente, na protrusão.",
  },
  {
    id: "c9q16",
    chapter: "cap9",
    topic: "Patologia do cíngulo",
    question:
      "Na separação acromioclavicular de primeiro grau, o que ocorre?",
    options: [
      "Ruptura completa dos ligamentos AC e CC",
      "Distensão do ligamento acromioclavicular sem ruptura",
      "Ruptura do ligamento AC e distensão do coracoclavicular",
      "Fratura da clavícula",
    ],
    correctIndex: 1,
    explanation:
      "Na entorse de primeiro grau da articulação AC, há distensão do ligamento acromioclavicular sem ruptura significativa. Na de segundo grau, há ruptura do AC e distensão do coracoclavicular.",
  },
];

// ============================================================
// CAPÍTULO 10 – Articulação do Ombro
// ============================================================
const cap10Questions: QuizQuestion[] = [
  {
    id: "c10q01",
    chapter: "cap10",
    topic: "Tipo de articulação",
    question:
      "A articulação do ombro (glenoumeral) é classificada como qual tipo?",
    options: [
      "Gínglimo, uniaxial",
      "Sinovial esferóidea, triaxial",
      "Sinovial elipsóidea, biaxial",
      "Sinovial trocoide, uniaxial",
    ],
    correctIndex: 1,
    explanation:
      "A articulação do ombro é do tipo sinovial esferóidea e possibilita movimentos nos três planos, tendo três graus de liberdade.",
  },
  {
    id: "c10q02",
    chapter: "cap10",
    topic: "Movimentos do ombro",
    question:
      "Quais são os quatro grupos de movimentos possíveis na articulação do ombro?",
    options: [
      "Flexão/extensão, abdução/adução no plano frontal, rotações medial/lateral, abdução/adução horizontal",
      "Flexão/extensão, pronação/supinação, abdução/adução, circundução",
      "Elevação/depressão, protrusão/retração, rotação superior/inferior",
      "Apenas flexão/extensão e abdução/adução",
    ],
    correctIndex: 0,
    explanation:
      "Os quatro grupos são: (1) flexão, extensão e hiperextensão; (2) abdução e adução no plano frontal; (3) rotações medial e lateral; (4) abdução e adução no plano horizontal.",
    imageDescription:
      "Figura mostrando todos os movimentos do ombro: flexão, extensão, hiperextensão, abdução, adução, rotação lateral, rotação medial, abdução horizontal e adução horizontal.",
  },
  {
    id: "c10q03",
    chapter: "cap10",
    topic: "Manguito rotador",
    question:
      "Quais músculos formam o manguito rotador?",
    options: [
      "Deltoide, peitoral maior, latíssimo do dorso e redondo maior",
      "Supraespinal, infraespinal, redondo menor e subescapular",
      "Bíceps braquial, tríceps braquial, coracobraquial e deltoide",
      "Trapézio, serrátil anterior, romboides e peitoral menor",
    ],
    correctIndex: 1,
    explanation:
      "O manguito rotador é formado por quatro músculos: supraespinal, infraespinal, redondo menor e subescapular (SIRS). Suas inserções tendíneas envolvem a cabeça do úmero na cavidade glenoidal.",
    imageDescription:
      "Figura mostrando a vista superior da extremidade proximal do úmero com as inserções dos músculos do manguito rotador.",
  },
  {
    id: "c10q04",
    chapter: "cap10",
    topic: "Manguito rotador",
    question:
      "Qual é a função principal do manguito rotador?",
    options: [
      "Produzir abdução poderosa do ombro",
      "Manter a cabeça do úmero rodando contra a cavidade glenoidal durante o movimento",
      "Elevar a escápula",
      "Realizar a extensão do cotovelo",
    ],
    correctIndex: 1,
    explanation:
      "O manguito rotador mantém a cabeça do úmero 'rodando' contra a cavidade glenoidal, estabilizando a articulação durante o movimento. Sem ele, o deltoide tracionaria o úmero superiormente.",
  },
  {
    id: "c10q05",
    chapter: "cap10",
    topic: "Músculo deltoide",
    question:
      "O músculo deltoide é dividido em quantas partes funcionais?",
    options: ["Duas", "Três", "Quatro", "Cinco"],
    correctIndex: 1,
    explanation:
      "O deltoide é dividido em três partes: clavicular (anterior), acromial (média) e espinal (posterior), cada uma com ações distintas.",
    imageDescription:
      "Figura mostrando as três partes do músculo deltoide (clavicular, acromial e espinal) em vista lateral.",
  },
  {
    id: "c10q06",
    chapter: "cap10",
    topic: "Músculo deltoide",
    question:
      "Qual parte do deltoide é a principal responsável pela abdução do braço?",
    options: ["Clavicular", "Acromial", "Espinal", "Todas igualmente"],
    correctIndex: 1,
    explanation:
      "A parte acromial do deltoide é a mais eficaz na abdução do braço, pois sua linha de tração é vertical e lateral ao eixo da articulação.",
  },
  {
    id: "c10q07",
    chapter: "cap10",
    topic: "Músculos do ombro",
    question:
      "Qual é o músculo latíssimo do dorso e qual sua principal ação no ombro?",
    options: [
      "Músculo pequeno; flexão do ombro",
      "Músculo largo no dorso; extensão, adução, rotação medial e hiperextensão do braço",
      "Músculo do antebraço; flexão do cotovelo",
      "Músculo do pescoço; elevação da escápula",
    ],
    correctIndex: 1,
    explanation:
      "O latíssimo do dorso é um músculo largo no dorso (latissimus = 'o mais largo'). É um forte agonista na extensão, hiperextensão, adução e rotação medial do braço.",
  },
  {
    id: "c10q08",
    chapter: "cap10",
    topic: "Músculos do ombro",
    question:
      "Qual músculo é o agonista principal na rotação medial do braço na articulação do ombro?",
    options: [
      "Infraespinal",
      "Redondo menor",
      "Subescapular",
      "Supraespinal",
    ],
    correctIndex: 2,
    explanation:
      "O subescapular é o agonista primário na rotação medial do braço. Ele se insere na face costal da escápula (fossa subescapular) e no tubérculo menor do úmero.",
  },
  {
    id: "c10q09",
    chapter: "cap10",
    topic: "Músculos do ombro",
    question:
      "Quais músculos são os agonistas primários na rotação lateral do braço na articulação do ombro?",
    options: [
      "Subescapular e peitoral maior",
      "Infraespinal e redondo menor",
      "Deltoide (parte acromial) e supraespinal",
      "Latíssimo do dorso e redondo maior",
    ],
    correctIndex: 1,
    explanation:
      "Os músculos infraespinal e redondo menor são os agonistas primários na rotação lateral do braço na articulação do ombro.",
  },
  {
    id: "c10q10",
    chapter: "cap10",
    topic: "Ossos do ombro",
    question:
      "O tubérculo maior do úmero é o local de inserção de quais músculos?",
    options: [
      "Subescapular e coracobraquial",
      "Supraespinal, infraespinal e redondo menor",
      "Deltoide e peitoral maior",
      "Bíceps braquial e tríceps braquial",
    ],
    correctIndex: 1,
    explanation:
      "O tubérculo maior do úmero é o local de inserção dos músculos supraespinal, infraespinal e redondo menor.",
    imageDescription:
      "Figura mostrando o úmero esquerdo com o tubérculo maior, tubérculo menor, sulco intertubercular e tuberosidade para o músculo deltoide.",
  },
  {
    id: "c10q11",
    chapter: "cap10",
    topic: "Ossos do ombro",
    question:
      "Onde se insere o músculo subescapular?",
    options: [
      "Tubérculo maior do úmero",
      "Tubérculo menor do úmero",
      "Tuberosidade do deltoide",
      "Sulco intertubercular",
    ],
    correctIndex: 1,
    explanation:
      "O subescapular se insere no tubérculo menor do úmero. Os outros três músculos do manguito rotador se inserem no tubérculo maior.",
  },
  {
    id: "c10q12",
    chapter: "cap10",
    topic: "Doenças do ombro",
    question:
      "O que é a síndrome do impacto do ombro?",
    options: [
      "Ruptura completa do manguito rotador",
      "Compressão entre o arco coracoacromial e a cabeça do úmero, afetando o manguito rotador e a bolsa subacromial",
      "Luxação anterior do ombro",
      "Fratura do tubérculo maior",
    ],
    correctIndex: 1,
    explanation:
      "A síndrome do impacto envolve compressão entre o arco acromial e a cabeça do úmero, afetando o manguito rotador, o tendão do bíceps braquial e a bolsa subacromial.",
  },
  {
    id: "c10q13",
    chapter: "cap10",
    topic: "Doenças do ombro",
    question:
      "Capsulite adesiva do ombro é também conhecida como:",
    options: [
      "Síndrome do impacto",
      "Ombro congelado",
      "Luxação recorrente",
      "Tendinite calcificada",
    ],
    correctIndex: 1,
    explanation:
      "Capsulite adesiva, conhecida como ombro congelado, é a inflamação e fibrose da cápsula articular, causando dor e perda da amplitude de movimento.",
  },
  {
    id: "c10q14",
    chapter: "cap10",
    topic: "Ligamentos do ombro",
    question:
      "Qual ligamento reforça a parte superior da cápsula articular do ombro?",
    options: [
      "Ligamento glenoumeral",
      "Ligamento coracoumeral",
      "Ligamento coracoacromial",
      "Ligamento coracoclavicular",
    ],
    correctIndex: 1,
    explanation:
      "O ligamento coracoumeral se estende do processo coracoide lateralmente até a região medial do tubérculo maior, reforçando a parte superior da cápsula.",
    imageDescription:
      "Figura mostrando a cápsula articular do ombro e os ligamentos que a reforçam (vista anterior), incluindo ligamentos glenoumerais e coracoumeral.",
  },
  {
    id: "c10q15",
    chapter: "cap10",
    topic: "Estrutura do ombro",
    question:
      "O que é o lábio glenoidal?",
    options: [
      "Um ligamento que reforça a cápsula articular",
      "Um anel de fibrocartilagem que aprofunda a cavidade glenoidal",
      "Um tendão que cruza a articulação",
      "Uma bolsa sinovial",
    ],
    correctIndex: 1,
    explanation:
      "O lábio glenoidal é um anel de fibrocartilagem fixado na margem da cavidade glenoidal, que aprofunda a face articular para melhor acomodar a cabeça do úmero.",
  },
  {
    id: "c10q16",
    chapter: "cap10",
    topic: "Posição de bloqueio",
    question:
      "Qual é a posição de bloqueio (close-packed) da articulação do ombro?",
    options: [
      "Braço ao lado do corpo em posição anatômica",
      "Abdução e rotação lateral",
      "Flexão de 90° com rotação medial",
      "Extensão completa do braço",
    ],
    correctIndex: 1,
    explanation:
      "A posição de bloqueio da articulação do ombro é a abdução combinada com rotação lateral do braço.",
  },
];

// ============================================================
// CAPÍTULO 11 – Articulação do Cotovelo
// ============================================================
const cap11Questions: QuizQuestion[] = [
  {
    id: "c11q01",
    chapter: "cap11",
    topic: "Estrutura do cotovelo",
    question:
      "O complexo do cotovelo abrange quantos ossos e quantas articulações?",
    options: [
      "Dois ossos, uma articulação",
      "Três ossos, duas articulações",
      "Três ossos, três ligamentos e uma cápsula articular",
      "Quatro ossos, duas articulações",
    ],
    correctIndex: 1,
    explanation:
      "O complexo do cotovelo abrange três ossos (úmero, ulna e rádio), duas articulações (umeroulnar/umerorradial para o cotovelo e radiulnares para pronação/supinação) e uma cápsula articular.",
  },
  {
    id: "c11q02",
    chapter: "cap11",
    topic: "Tipo de articulação",
    question:
      "O cotovelo é uma articulação do tipo:",
    options: [
      "Esferóidea, triaxial",
      "Gínglimo (dobradiça), uniaxial",
      "Selar, biaxial",
      "Trocoide, uniaxial",
    ],
    correctIndex: 1,
    explanation:
      "O cotovelo é uma articulação sinovial gínglimo (dobradiça), uniaxial, permitindo apenas flexão e extensão.",
  },
  {
    id: "c11q03",
    chapter: "cap11",
    topic: "Movimentos do cotovelo",
    question:
      "Qual é a amplitude de movimento aproximada de flexão do cotovelo a partir da posição de extensão (0°)?",
    options: ["90°", "120°", "145°", "180°"],
    correctIndex: 2,
    explanation:
      "A partir da posição de extensão a 0°, a articulação do cotovelo executa aproximadamente 145° de flexão.",
  },
  {
    id: "c11q04",
    chapter: "cap11",
    topic: "Articulação radiulnar",
    question:
      "Qual articulação possibilita a pronação e supinação do antebraço?",
    options: [
      "Umeroulnar",
      "Umerorradial",
      "Articulação radiulnar (proximal e distal)",
      "Radiocarpal",
    ],
    correctIndex: 2,
    explanation:
      "A pronação e supinação do antebraço ocorrem nas articulações radiulnares proximal e distal. O rádio move-se em torno da ulna.",
    imageDescription:
      "Figura mostrando o rádio movendo-se em torno da ulna durante a pronação e supinação.",
  },
  {
    id: "c11q05",
    chapter: "cap11",
    topic: "Músculos do cotovelo",
    question:
      "Qual músculo é conhecido como o 'burro de carga' da flexão do cotovelo?",
    options: [
      "Bíceps braquial",
      "Músculo braquial",
      "Braquiorradial",
      "Pronador redondo",
    ],
    correctIndex: 1,
    explanation:
      "O músculo braquial é chamado de 'burro de carga da articulação do cotovelo' porque é um flexor muito forte independentemente da posição de pronação/supinação do antebraço.",
  },
  {
    id: "c11q06",
    chapter: "cap11",
    topic: "Músculos do cotovelo",
    question:
      "O músculo bíceps braquial é mais eficaz como supinador quando o cotovelo está em qual posição?",
    options: [
      "Extensão completa",
      "Flexão de aproximadamente 90°",
      "Flexão completa",
      "A posição não influencia",
    ],
    correctIndex: 1,
    explanation:
      "O bíceps braquial é um supinador mais eficaz quando há flexão do cotovelo de aproximadamente 90°, porque o braço de momento do músculo é máximo a 90°.",
  },
  {
    id: "c11q07",
    chapter: "cap11",
    topic: "Músculos do cotovelo",
    question:
      "Qual é o agonista principal na extensão do cotovelo?",
    options: [
      "Bíceps braquial",
      "Braquiorradial",
      "Tríceps braquial",
      "Ancôneo",
    ],
    correctIndex: 2,
    explanation:
      "O tríceps braquial é o agonista principal na extensão do cotovelo. É o maior músculo da região posterior do braço, com três cabeças (longa, lateral e medial).",
    imageDescription:
      "Figura mostrando o músculo tríceps braquial com suas três cabeças (longa, lateral e medial) na vista posterior.",
  },
  {
    id: "c11q08",
    chapter: "cap11",
    topic: "Músculos do cotovelo",
    question:
      "Qual é a única cabeça do tríceps braquial que cruza a articulação do ombro?",
    options: [
      "Cabeça lateral",
      "Cabeça medial",
      "Cabeça longa",
      "Nenhuma delas",
    ],
    correctIndex: 2,
    explanation:
      "A cabeça longa do tríceps braquial se origina no tubérculo infraglenoidal da escápula, sendo a única que cruza a articulação do ombro.",
  },
  {
    id: "c11q09",
    chapter: "cap11",
    topic: "Músculos do cotovelo",
    question:
      "Quais são os agonistas primários na pronação do antebraço?",
    options: [
      "Bíceps braquial e supinador",
      "Pronador redondo e pronador quadrado",
      "Braquiorradial e ancôneo",
      "Tríceps braquial e braquial",
    ],
    correctIndex: 1,
    explanation:
      "Os agonistas primários na pronação do antebraço são o pronador redondo e o pronador quadrado.",
  },
  {
    id: "c11q10",
    chapter: "cap11",
    topic: "Músculos do cotovelo",
    question:
      "Quais são os agonistas primários na supinação do antebraço?",
    options: [
      "Pronador redondo e pronador quadrado",
      "Bíceps braquial e supinador",
      "Tríceps braquial e ancôneo",
      "Braquial e braquiorradial",
    ],
    correctIndex: 1,
    explanation:
      "Os agonistas primários na supinação do antebraço são o bíceps braquial (quando o cotovelo está fletido) e o músculo supinador.",
  },
  {
    id: "c11q11",
    chapter: "cap11",
    topic: "Pontos de referência",
    question:
      "Qual é o ponto ósseo proeminente na região posterior do cotovelo, sendo o ponto de inserção do tríceps braquial?",
    options: [
      "Epicôndilo medial",
      "Epicôndilo lateral",
      "Olécrano",
      "Processo coronoide",
    ],
    correctIndex: 2,
    explanation:
      "O olécrano é a proeminência posterior da extremidade proximal da ulna, sendo o ponto de inserção do músculo tríceps braquial.",
    imageDescription:
      "Figura mostrando o úmero direito (vistas posterior e anterior) com epicôndilos, tróclea, capítulo, fossa do olécrano e olécrano da ulna.",
  },
  {
    id: "c11q12",
    chapter: "cap11",
    topic: "Ângulo de carregamento",
    question:
      "O que é o ângulo de carregamento do cotovelo?",
    options: [
      "O ângulo entre o braço e o tórax",
      "O ângulo formado entre os eixos longitudinais do braço e do antebraço na extensão completa",
      "O ângulo da articulação durante a flexão máxima",
      "O ângulo de tração do bíceps braquial",
    ],
    correctIndex: 1,
    explanation:
      "O ângulo de carregamento é formado entre os eixos longitudinais do braço e do antebraço na extensão completa. É normalmente de 5° em homens e 10-15° em mulheres.",
  },
  {
    id: "c11q13",
    chapter: "cap11",
    topic: "Ligamentos do cotovelo",
    question:
      "Qual ligamento mantém a cabeça do rádio em contato com a ulna?",
    options: [
      "Ligamento colateral ulnar",
      "Ligamento colateral radial",
      "Ligamento anular do rádio",
      "Membrana interóssea",
    ],
    correctIndex: 2,
    explanation:
      "O ligamento anular do rádio circunda a cabeça do rádio e a mantém em contato com a incisura radial da ulna, permitindo a pronação e supinação.",
  },
  {
    id: "c11q14",
    chapter: "cap11",
    topic: "Doenças do cotovelo",
    question:
      "Epicondilite lateral é comumente conhecida como:",
    options: [
      "Cotovelo de jogador de golfe",
      "Cotovelo de tenista",
      "Cotovelo de arremessador",
      "Cotovelo da babá",
    ],
    correctIndex: 1,
    explanation:
      "A epicondilite lateral, conhecida como cotovelo de tenista, afeta o tendão comum dos músculos extensores no epicôndilo lateral do úmero, por uso excessivo.",
  },
  {
    id: "c11q15",
    chapter: "cap11",
    topic: "Doenças do cotovelo",
    question:
      "A pronação dolorosa (cotovelo da babá) ocorre por qual mecanismo?",
    options: [
      "Fratura do epicôndilo",
      "Subluxação da cabeça do rádio em relação ao ligamento anular",
      "Ruptura do ligamento colateral ulnar",
      "Inflamação do tendão do tríceps",
    ],
    correctIndex: 1,
    explanation:
      "A pronação dolorosa (cotovelo da babá) ocorre quando uma tração forte no braço de uma criança subluxal a cabeça do rádio em relação ao ligamento anular.",
  },
  {
    id: "c11q16",
    chapter: "cap11",
    topic: "Músculos do cotovelo",
    question:
      "O braquiorradial é mais eficaz como flexor do cotovelo quando o antebraço está em qual posição?",
    options: [
      "Supinação completa",
      "Pronação completa",
      "Posição neutra (entre pronação e supinação)",
      "A posição não influencia",
    ],
    correctIndex: 2,
    explanation:
      "O braquiorradial é mais eficaz como flexor do cotovelo quando o antebraço está em posição neutra, porque sua linha de tração é mais vertical nessa posição.",
  },
];

// ============================================================
// CAPÍTULO 12 – Articulação Radiocarpal
// ============================================================
const cap12Questions: QuizQuestion[] = [
  {
    id: "c12q01",
    chapter: "cap12",
    topic: "Estrutura da articulação",
    question:
      "A articulação radiocarpal é classificada como qual tipo de articulação sinovial?",
    options: ["Gínglimo", "Trocoide", "Elipsóidea", "Esferóidea"],
    correctIndex: 2,
    explanation:
      "A articulação radiocarpal é classificada como elipsóidea (condilóidea), biaxial, permitindo flexão/extensão e abdução (desvio radial)/adução (desvio ulnar).",
  },
  {
    id: "c12q02",
    chapter: "cap12",
    topic: "Movimentos do punho",
    question:
      "Quais movimentos são possíveis na articulação radiocarpal?",
    options: [
      "Flexão, extensão, rotação medial e lateral",
      "Flexão, extensão, abdução (desvio radial) e adução (desvio ulnar)",
      "Apenas flexão e extensão",
      "Flexão, extensão, pronação e supinação",
    ],
    correctIndex: 1,
    explanation:
      "A articulação radiocarpal permite: flexão (~90°), extensão (~70°), abdução/desvio radial (~25°) e adução/desvio ulnar (~35°). Não há rotação na radiocarpal.",
  },
  {
    id: "c12q03",
    chapter: "cap12",
    topic: "Ossos carpais",
    question:
      "Quantos ossos carpais existem e como estão organizados?",
    options: [
      "6 ossos em uma fileira",
      "8 ossos em duas fileiras de quatro",
      "10 ossos em duas fileiras de cinco",
      "7 ossos em três fileiras",
    ],
    correctIndex: 1,
    explanation:
      "Existem 8 ossos carpais organizados em duas fileiras de quatro. Fileira proximal: escafoide, semilunar, piramidal e pisiforme. Fileira distal: trapézio, trapezoide, capitato e hamato.",
    imageDescription:
      "Figura mostrando os ossos da região carpal da mão em vista anterior, com as duas fileiras de ossos carpais identificadas.",
  },
  {
    id: "c12q04",
    chapter: "cap12",
    topic: "Ossos carpais",
    question:
      "Qual mnemônico pode ajudar a lembrar a ordem dos ossos carpais (fileira proximal, depois distal)?",
    options: [
      "'Envie Saudações Para Pedro. Todos Torcem por sua Consagração em História'",
      "'Eu Sei Pouco. Tudo Tem Conhecimento Habilidoso'",
      "'Escápula Sempre Pode Ter Todas Coordenadas Horizontais'",
      "'Estudar Sempre Para Trabalhar. Trabalhar Com Humildade'",
    ],
    correctIndex: 0,
    explanation:
      "O mnemônico 'Envie Saudações Para Pedro. Todos Torcem por sua Consagração em História' ajuda a lembrar: Escafoide, Semilunar, Piramidal, Pisiforme, Trapézio, Trapezoide, Capitato, Hamato.",
  },
  {
    id: "c12q05",
    chapter: "cap12",
    topic: "Músculos do punho",
    question:
      "Quais são os agonistas primários na flexão da mão (punho)?",
    options: [
      "Extensor radial longo do carpo e extensor ulnar do carpo",
      "Flexor radial do carpo e flexor ulnar do carpo",
      "Palmar longo e pronador quadrado",
      "Bíceps braquial e braquiorradial",
    ],
    correctIndex: 1,
    explanation:
      "Os agonistas primários na flexão da mão são o flexor radial do carpo e o flexor ulnar do carpo.",
  },
  {
    id: "c12q06",
    chapter: "cap12",
    topic: "Músculos do punho",
    question:
      "Quais são os agonistas primários na extensão da mão (punho)?",
    options: [
      "Flexor radial do carpo e flexor ulnar do carpo",
      "Extensores radiais longo e curto do carpo e extensor ulnar do carpo",
      "Palmar longo e pronador redondo",
      "Bíceps braquial e supinador",
    ],
    correctIndex: 1,
    explanation:
      "Os agonistas primários na extensão são: extensor radial longo do carpo, extensor radial curto do carpo e extensor ulnar do carpo.",
  },
  {
    id: "c12q07",
    chapter: "cap12",
    topic: "Músculos do punho",
    question:
      "Onde se inserem (proximal) os músculos flexores do punho em geral?",
    options: [
      "Epicôndilo lateral do úmero",
      "Epicôndilo medial do úmero",
      "Olécrano da ulna",
      "Processo estiloide do rádio",
    ],
    correctIndex: 1,
    explanation:
      "Os músculos flexores do punho geralmente se inserem no epicôndilo medial do úmero. Os extensores se inserem no epicôndilo lateral.",
  },
  {
    id: "c12q08",
    chapter: "cap12",
    topic: "Músculos do punho",
    question:
      "Onde se inserem (proximal) os músculos extensores do punho em geral?",
    options: [
      "Epicôndilo medial do úmero",
      "Epicôndilo lateral do úmero",
      "Processo coronoide da ulna",
      "Tuberosidade do rádio",
    ],
    correctIndex: 1,
    explanation:
      "Os músculos extensores do punho geralmente se inserem no epicôndilo lateral do úmero ou perto dele.",
  },
  {
    id: "c12q09",
    chapter: "cap12",
    topic: "Músculos do punho",
    question:
      "O músculo palmar longo está ausente em aproximadamente que percentual da população?",
    options: ["5%", "10%", "21%", "50%"],
    correctIndex: 2,
    explanation:
      "O músculo palmar longo não existe em aproximadamente 21% das pessoas. Sua ausência não acarreta perda real de força, sendo no máximo um músculo acessório.",
  },
  {
    id: "c12q10",
    chapter: "cap12",
    topic: "Músculos do punho",
    question:
      "O músculo flexor ulnar do carpo é o único músculo do punho que se insere em qual osso?",
    options: ["Escafoide", "Capitato", "Pisiforme (osso carpal)", "Hamato"],
    correctIndex: 2,
    explanation:
      "O flexor ulnar do carpo é o único músculo do carpo que se insere em um osso carpal — o pisiforme (e na base do quinto osso metacarpal).",
  },
  {
    id: "c12q11",
    chapter: "cap12",
    topic: "Músculos do punho",
    question:
      "Quais músculos são agonistas primários na abdução (desvio radial) da mão?",
    options: [
      "Flexor ulnar do carpo e extensor ulnar do carpo",
      "Flexor radial do carpo e extensor radial longo do carpo",
      "Palmar longo e pronador redondo",
      "Flexor superficial dos dedos e flexor profundo dos dedos",
    ],
    correctIndex: 1,
    explanation:
      "Os agonistas primários na abdução (desvio radial) são o flexor radial do carpo e o extensor radial longo do carpo — ambos passam pelo lado radial do punho.",
  },
  {
    id: "c12q12",
    chapter: "cap12",
    topic: "Músculos do punho",
    question:
      "Quais músculos são agonistas primários na adução (desvio ulnar) da mão?",
    options: [
      "Flexor radial do carpo e extensor radial do carpo",
      "Flexor ulnar do carpo e extensor ulnar do carpo",
      "Palmar longo e bíceps braquial",
      "Pronador redondo e supinador",
    ],
    correctIndex: 1,
    explanation:
      "Os agonistas primários na adução (desvio ulnar) são o flexor ulnar do carpo e o extensor ulnar do carpo — ambos passam pelo lado ulnar do punho.",
  },
  {
    id: "c12q13",
    chapter: "cap12",
    topic: "Ligamentos do punho",
    question:
      "Qual ligamento é mais importante para limitar a extensão excessiva do punho?",
    options: [
      "Ligamento radiocarpal dorsal",
      "Ligamento radiocarpal palmar",
      "Ligamento colateral radial do carpo",
      "Ligamento colateral ulnar do carpo",
    ],
    correctIndex: 1,
    explanation:
      "O ligamento radiocarpal palmar é mais resistente e espesso, sendo mais importante para limitar a extensão do punho. A maioria das atividades da mão ocorre em extensão, não em flexão.",
  },
  {
    id: "c12q14",
    chapter: "cap12",
    topic: "Inervação",
    question:
      "Qual nervo inerva os músculos posteriores (extensores) do punho?",
    options: [
      "Nervo mediano",
      "Nervo ulnar",
      "Nervo radial",
      "Nervo musculocutâneo",
    ],
    correctIndex: 2,
    explanation:
      "O nervo radial inerva os músculos posteriores (extensores) do punho. O nervo mediano inerva os músculos anteriores (flexores), exceto o flexor ulnar do carpo (nervo ulnar).",
  },
  {
    id: "c12q15",
    chapter: "cap12",
    topic: "Estrutura do punho",
    question:
      "Por que a ulna NÃO é considerada parte da articulação radiocarpal?",
    options: [
      "A ulna é muito pequena nessa região",
      "Há um disco articular entre a ulna e os ossos carpais, que separa a ulna da articulação",
      "A ulna se articula diretamente com os ossos metacarpais",
      "A ulna não chega até o punho",
    ],
    correctIndex: 1,
    explanation:
      "Há um disco articular entre a ulna e a fileira proximal de ossos carpais. Esse disco separa a ulna da articulação radiocarpal, que é formada apenas pelo rádio (e disco) com os ossos carpais.",
  },
];

// ============================================================
// CAPÍTULO 13 – Mão
// ============================================================
const cap13Questions: QuizQuestion[] = [
  {
    id: "c13q01",
    chapter: "cap13",
    topic: "Articulações do polegar",
    question:
      "Quantas articulações o polegar possui?",
    options: ["Duas", "Três", "Quatro", "Cinco"],
    correctIndex: 1,
    explanation:
      "O polegar possui três articulações: carpometacarpal (CMC), metacarpofalângica (MCF) e interfalângica (IF). Os demais dedos possuem quatro articulações cada.",
  },
  {
    id: "c13q02",
    chapter: "cap13",
    topic: "Articulações do polegar",
    question:
      "A articulação CMC do polegar é classificada como qual tipo?",
    options: [
      "Gínglimo",
      "Esferóidea",
      "Selar",
      "Plana",
    ],
    correctIndex: 2,
    explanation:
      "A articulação CMC do polegar é do tipo selar, na qual cada face articular é côncava em uma direção e convexa na outra, como duas selas encaixadas.",
    imageDescription:
      "Figura comparando o formato selar da articulação CMC do polegar ao formato de duas batatas chips colocadas uma sobre a outra.",
  },
  {
    id: "c13q03",
    chapter: "cap13",
    topic: "Movimentos do polegar",
    question:
      "A oposição do polegar é a combinação de quais movimentos?",
    options: [
      "Flexão e extensão apenas",
      "Flexão, abdução e rotação acessória",
      "Adução e extensão",
      "Pronação e supinação",
    ],
    correctIndex: 1,
    explanation:
      "A oposição é uma combinação de flexão, abdução e um movimento acessório de rotação. A reposição é o retorno à posição anatômica.",
    imageDescription:
      "Figura mostrando os movimentos da articulação CMC do polegar: flexão, extensão, abdução, adução, oposição e reposição.",
  },
  {
    id: "c13q04",
    chapter: "cap13",
    topic: "Ossos da mão",
    question:
      "Quantas falanges o polegar possui? E os demais dedos?",
    options: [
      "Polegar: 3; demais: 3",
      "Polegar: 2; demais: 3",
      "Polegar: 3; demais: 4",
      "Polegar: 1; demais: 2",
    ],
    correctIndex: 1,
    explanation:
      "O polegar possui duas falanges (proximal e distal). Os demais dedos possuem três falanges cada (proximal, média e distal).",
  },
  {
    id: "c13q05",
    chapter: "cap13",
    topic: "Músculos intrínsecos",
    question:
      "Quais são os três grupos de músculos intrínsecos da mão?",
    options: [
      "Flexores, extensores e rotadores",
      "Tenares, hipotenares e palmares profundos",
      "Lumbricais, interósseos e tenares",
      "Extrínsecos anteriores, extrínsecos posteriores e intrínsecos",
    ],
    correctIndex: 1,
    explanation:
      "Os três grupos de músculos intrínsecos são: tenares (polegar), hipotenares (dedo mínimo) e palmares profundos (adutor do polegar, interósseos e lumbricais).",
  },
  {
    id: "c13q06",
    chapter: "cap13",
    topic: "Músculos intrínsecos",
    question:
      "Qual músculo da mão não tem inserção óssea proximal?",
    options: [
      "Interósseos dorsais",
      "Interósseos palmares",
      "Lumbricais",
      "Flexor curto do polegar",
    ],
    correctIndex: 2,
    explanation:
      "Os lumbricais não têm inserção óssea — se inserem proximalmente no tendão do músculo flexor profundo dos dedos e distalmente na expansão dos extensores.",
  },
  {
    id: "c13q07",
    chapter: "cap13",
    topic: "Músculos intrínsecos",
    question:
      "Qual é a ação dos músculos lumbricais?",
    options: [
      "Abdução dos dedos",
      "Adução dos dedos",
      "Flexão da articulação MCF e extensão simultânea das articulações IFP e IFD",
      "Extensão da articulação MCF",
    ],
    correctIndex: 2,
    explanation:
      "Os lumbricais fletam a articulação MCF e estendem simultaneamente as articulações IFP e IFD, produzindo uma posição conhecida como 'tampo de mesa'.",
  },
  {
    id: "c13q08",
    chapter: "cap13",
    topic: "Músculos intrínsecos",
    question:
      "Qual é a ação dos músculos interósseos dorsais?",
    options: [
      "Adução dos dedos na articulação MCF",
      "Abdução dos dedos na articulação MCF",
      "Flexão das articulações IFP",
      "Oposição do polegar",
    ],
    correctIndex: 1,
    explanation:
      "Os interósseos dorsais abduzem os dedos na articulação MCF (afastam do dedo médio). São quatro músculos.",
  },
  {
    id: "c13q09",
    chapter: "cap13",
    topic: "Músculos intrínsecos",
    question:
      "Qual é a ação dos músculos interósseos palmares?",
    options: [
      "Abdução dos dedos",
      "Adução dos dedos na articulação MCF",
      "Extensão dos dedos",
      "Flexão do polegar",
    ],
    correctIndex: 1,
    explanation:
      "Os interósseos palmares aduzem os dedos na articulação MCF (aproximam do dedo médio). São quatro músculos.",
  },
  {
    id: "c13q10",
    chapter: "cap13",
    topic: "Preensão",
    question:
      "Quais são os dois tipos básicos de preensão da mão?",
    options: [
      "Preensão de força e preensão de precisão",
      "Preensão em pinça e preensão em gancho",
      "Preensão palmar e preensão digital",
      "Preensão estática e preensão dinâmica",
    ],
    correctIndex: 0,
    explanation:
      "Os dois tipos básicos de preensão são: preensão de força (objeto segurado firmemente com toda a mão) e preensão de precisão (objeto manipulado com movimentos delicados entre polegar e dedos).",
  },
  {
    id: "c13q11",
    chapter: "cap13",
    topic: "Preensão de força",
    question:
      "Quais são as três preensões de força descritas habitualmente?",
    options: [
      "Pinça, lateral e lumbrical",
      "Cilíndrica, esférica e em gancho",
      "Polpa a polpa, ponta a ponta e tridigital",
      "Palmar, digital e mista",
    ],
    correctIndex: 1,
    explanation:
      "As três preensões de força são: cilíndrica (segurar um martelo), esférica (segurar uma maçã) e em gancho (segurar uma alça de mala).",
    imageDescription:
      "Figuras mostrando preensão cilíndrica (mão envolvendo cilindro), preensão esférica (segurando bola) e preensão em gancho (dedos curvados em alça).",
  },
  {
    id: "c13q12",
    chapter: "cap13",
    topic: "Preensão de precisão",
    question:
      "A preensão por oposição subterminal ('polpa a polpa') envolve quais estruturas?",
    options: [
      "As pontas dos dedos apenas",
      "As faces palmares (polpas) do polegar e do(s) dedo(s), com abdução e oposição do polegar",
      "A região lateral do dedo indicador e a polpa do polegar",
      "Todos os dedos em flexão sem participação do polegar",
    ],
    correctIndex: 1,
    explanation:
      "Na preensão polpa a polpa (oposição subterminal), as faces palmares do polegar e dos dedos se aproximam, com abdução e oposição do polegar. É a mais comum para segurar objetos como caneta ou lápis.",
  },
  {
    id: "c13q13",
    chapter: "cap13",
    topic: "Doenças da mão",
    question:
      "A síndrome do túnel do carpo é causada pela compressão de qual nervo?",
    options: [
      "Nervo radial",
      "Nervo ulnar",
      "Nervo mediano",
      "Nervo musculocutâneo",
    ],
    correctIndex: 2,
    explanation:
      "A síndrome do túnel do carpo é causada pela compressão do nervo mediano no interior do túnel do carpo, causando dormência, formigamento e fraqueza na mão.",
  },
  {
    id: "c13q14",
    chapter: "cap13",
    topic: "Doenças da mão",
    question:
      "O que é a doença de Quervain?",
    options: [
      "Compressão do nervo ulnar",
      "Inflamação da bainha dos tendões do extensor curto e abdutor longo do polegar",
      "Ruptura do manguito rotador",
      "Fratura do escafoide",
    ],
    correctIndex: 1,
    explanation:
      "A doença de Quervain é uma tenossinovite que afeta a bainha dos músculos extensor curto do polegar e abdutor longo do polegar na região lateral do punho.",
  },
  {
    id: "c13q15",
    chapter: "cap13",
    topic: "Doenças da mão",
    question:
      "A contratura de Dupuytren é o espessamento de qual estrutura?",
    options: [
      "Da cápsula articular",
      "Da aponeurose palmar",
      "Dos tendões extensores",
      "Dos ligamentos colaterais",
    ],
    correctIndex: 1,
    explanation:
      "A contratura de Dupuytren é o espessamento nodular da aponeurose palmar, mais comum nos dedos anular e mínimo, causando flexão permanente.",
  },
  {
    id: "c13q16",
    chapter: "cap13",
    topic: "Retináculos",
    question:
      "Qual é a função do retináculo dos músculos flexores?",
    options: [
      "Conectar os ossos do carpo entre si",
      "Manter os tendões flexores no lugar, impedindo que se afastem durante a flexão do punho",
      "Proteger o nervo radial",
      "Fornecer suprimento sanguíneo à mão",
    ],
    correctIndex: 1,
    explanation:
      "O retináculo dos músculos flexores é uma faixa fibrosa que cruza a região carpal, mantendo os tendões flexores no lugar e impedindo o efeito 'corda de arco' durante a flexão do punho.",
    imageDescription:
      "Figura mostrando o retináculo dos músculos flexores cruzando o punho anteriormente, com os tendões flexores e o nervo mediano passando por baixo.",
  },
  {
    id: "c13q17",
    chapter: "cap13",
    topic: "Tabaqueira anatômica",
    question:
      "O que é a 'tabaqueira anatômica' e quais músculos definem seus limites?",
    options: [
      "Depressão na palma; limitada pelos lumbricais",
      "Depressão na face dorsal do punho; limitada pelos tendões do abdutor longo e extensor curto do polegar (lateral) e extensor longo do polegar (medial)",
      "Depressão no cotovelo; limitada pelo bíceps braquial",
      "Depressão no ombro; limitada pelo deltoide",
    ],
    correctIndex: 1,
    explanation:
      "A tabaqueira anatômica é uma depressão na face lateral do punho, visível durante a extensão do polegar. Seus limites são os tendões do abdutor longo/extensor curto do polegar (lateralmente) e do extensor longo do polegar (medialmente).",
    imageDescription:
      "Figura mostrando os limites da tabaqueira anatômica definidos pelos tendões dos músculos do polegar na vista lateral do punho.",
  },
  {
    id: "c13q18",
    chapter: "cap13",
    topic: "Preensão em gancho",
    question:
      "Na preensão em gancho, qual é a participação do polegar?",
    options: [
      "O polegar é o principal responsável pela força",
      "O polegar realiza oposição",
      "Geralmente não há participação do polegar",
      "O polegar realiza abdução",
    ],
    correctIndex: 2,
    explanation:
      "Na preensão em gancho (segurar uma alça de mala), geralmente não há participação do polegar. Os dedos 2°-5° flexionam como ganchos. É a única preensão de força possível após lesão do nervo mediano.",
  },
  {
    id: "c13q19",
    chapter: "cap13",
    topic: "Arcos da mão",
    question:
      "Quais são os três arcos da mão que contribuem para a função de preensão?",
    options: [
      "Arco transverso, arco longitudinal e arco oblíquo",
      "Arco carpal proximal, arco carpal distal e arco longitudinal",
      "Arco palmar, arco dorsal e arco lateral",
      "Arco metacarpal, arco carpal e arco digital",
    ],
    correctIndex: 1,
    explanation:
      "Os três arcos são: arco carpal proximal (formado pelos ossos metacarpais e retináculo dos flexores), arco carpal distal (cabeças dos metacarpais) e arco longitudinal (da região carpal às falanges em cada dedo).",
    imageDescription:
      "Figura mostrando os três arcos na palma da mão: arco carpal proximal, arco carpal distal e arco longitudinal.",
  },
];

// ============================================================
// Exportação dos capítulos
// ============================================================
export const CINESIOLOGIA_CHAPTERS: Chapter[] = [
  {
    id: "cap1",
    title: "Informações Básicas",
    emoji: "📐",
    description:
      "Terminologia anatômica, posição anatômica, planos do corpo, eixos e movimentos articulares.",
    questions: cap1Questions,
  },
  {
    id: "cap2",
    title: "Sistema Esquelético",
    emoji: "🦴",
    description:
      "Funções dos ossos, tipos de ossos, estrutura óssea, cartilagem e patologias.",
    questions: cap2Questions,
  },
  {
    id: "cap3",
    title: "Sistema Articular",
    emoji: "🔗",
    description:
      "Tipos de articulações, articulações sinoviais, planos e eixos, graus de liberdade e doenças articulares.",
    questions: cap3Questions,
  },
  {
    id: "cap4",
    title: "Artrocinemática",
    emoji: "⚙️",
    description:
      "Sensação final do movimento, formato da face articular, rolamento, deslizamento, rotação, regra convexo-côncavo e cadeias cinéticas.",
    questions: cap4Questions,
  },
  {
    id: "cap5",
    title: "Sistema Muscular",
    emoji: "💪",
    description:
      "Inserções musculares, tipos de contração, funções dos músculos, ângulo de tração e cadeias cinéticas.",
    questions: cap5Questions,
  },
  {
    id: "cap9",
    title: "Cíngulo do Membro Superior",
    emoji: "🫁",
    description:
      "Escápula, clavícula, articulações e músculos do cíngulo, ritmo escapuloumeral.",
    questions: cap9Questions,
  },
  {
    id: "cap10",
    title: "Articulação do Ombro",
    emoji: "🏋️",
    description:
      "Movimentos, ossos, ligamentos, músculos do ombro, manguito rotador e doenças.",
    questions: cap10Questions,
  },
  {
    id: "cap11",
    title: "Articulação do Cotovelo",
    emoji: "💪",
    description:
      "Estrutura, ossos, ligamentos, músculos do cotovelo e antebraço, pronação/supinação e doenças.",
    questions: cap11Questions,
  },
  {
    id: "cap12",
    title: "Articulação Radiocarpal",
    emoji: "✋",
    description:
      "Estrutura do punho, ossos carpais, movimentos, ligamentos e músculos do punho.",
    questions: cap12Questions,
  },
  {
    id: "cap13",
    title: "Mão",
    emoji: "🤲",
    description:
      "Articulações do polegar e dedos, músculos extrínsecos e intrínsecos, preensão e doenças.",
    questions: cap13Questions,
  },
];

/** Look up a chapter by id */
export function getChapter(id: string): Chapter | undefined {
  return CINESIOLOGIA_CHAPTERS.find((ch) => ch.id === id);
}

/** Get questions filtered by chapter id */
export function getQuestionsByChapter(chapterId: string): QuizQuestion[] {
  return CINESIOLOGIA_CHAPTERS.find((ch) => ch.id === chapterId)?.questions ?? [];
}
