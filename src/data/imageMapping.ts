/**
 * Maps question IDs to their corresponding cropped figure images.
 *
 * Images are cropped from full PDF page renders to show only the relevant figure.
 * Originals in public/images/{fundamentos,mms}/, crops in public/images/crops/.
 */

const BASE = import.meta.env.BASE_URL + "images/crops";

/** Question ID → cropped image path */
export const IMAGE_MAP: Record<string, string> = {
  // Cap 1 – Informações Básicas
  "c1q01": `${BASE}/c1q01.jpg`, // Figura 3.14 – planos do corpo
  "c1q02": `${BASE}/c1q02.jpg`, // Figura 3.14 – planos do corpo
  "c1q03": `${BASE}/c1q03.jpg`, // Figura 3.15 – centro de gravidade
  "c1q12": `${BASE}/c1q12.jpg`, // Figura 3.15 – centro de gravidade

  // Cap 4 – Artrocinemática
  "c4q04": `${BASE}/c4q04.jpg`, // Figuras 4.3/4.4 – rolamento e deslizamento
  "c4q05": `${BASE}/c4q05.jpg`, // Figura 4.7 – regra convexo
  "c4q07": `${BASE}/c4q07.jpg`, // Figura 4.7 – regra convexo-côncavo
  "c4q08": `${BASE}/c4q08.jpg`, // Figura 4.6 – regra côncavo
  "c4q09": `${BASE}/c4q09.jpg`, // Tabela 4.1 – posições articulares
  "c4q12": `${BASE}/c4q12.jpg`, // Tabela 4.1 – tração articular
  "c4q13": `${BASE}/c4q13.jpg`, // Figura 5.1 – inserções do bíceps braquial

  // Cap 5 – Sistema Muscular
  "c5q01": `${BASE}/c5q01.jpg`, // Figura 5.1 – inserções musculares
  "c5q02": `${BASE}/c5q02.jpg`, // Figura 5.4 – orientação das fibras musculares
  "c5q04": `${BASE}/c5q04.jpg`, // Figura 5.4 – fibras musculares (fusiforme)
  "c5q05": `${BASE}/c5q05.jpg`, // Figura 5.8 – insuficiência passiva
  "c5q06": `${BASE}/c5q06.jpg`, // Contração isométrica
  "c5q07": `${BASE}/c5q07.jpg`, // Figura 5.13 – cadeia cinética fechada
  "c5q16": `${BASE}/c5q16.jpg`, // Figura 5.13 – cadeia cinética
  "c5q17": `${BASE}/c5q17.jpg`, // Figura 10.2 – movimentos do ombro

  // Cap 10 – Articulação do Ombro
  "c10q02": `${BASE}/c10q02.jpg`, // Figura 10.2 – movimentos do ombro
  "c10q03": `${BASE}/c10q03.jpg`, // Figura 10.3 – escápula esquerda
  "c10q04": `${BASE}/c10q04.jpg`, // Figura 10.8 – três partes do deltoide
  "c10q05": `${BASE}/c10q05.jpg`, // Figura 10.8 – deltoide
  "c10q06": `${BASE}/c10q06.jpg`, // Figura 10.4 – úmero esquerdo
  "c10q10": `${BASE}/c10q10.jpg`, // Figura 10.4 – úmero (tubérculo maior)
  "c10q11": `${BASE}/c10q11.jpg`, // Figuras 10.5/10.7 – ligamentos do ombro
  "c10q14": `${BASE}/c10q14.jpg`, // Figuras 10.5/10.7 – ligamentos do ombro
  "c10q15": `${BASE}/c10q15.jpg`, // Figura 11.4 – pronação e supinação

  // Cap 11 – Articulação do Cotovelo
  "c11q04": `${BASE}/c11q04.jpg`, // Figura 11.5 – rádio em torno da ulna
  "c11q05": `${BASE}/c11q05.jpg`, // Figura 11.17 – tríceps braquial
  "c11q07": `${BASE}/c11q07.jpg`, // Figura 11.17 – tríceps (extensão cotovelo)
  "c11q08": `${BASE}/c11q08.jpg`, // Figura 11.8 – úmero com epicôndilos
  "c11q11": `${BASE}/c11q11.jpg`, // Figura 11.8 – úmero (olécrano)
  "c11q12": `${BASE}/c11q12.jpg`, // Figura 12.1 – articulações do punho

  // Cap 12 – Articulação Radiocarpal
  "c12q03": `${BASE}/c12q03.jpg`, // Figura 12.1 – ossos carpais
  "c12q04": `${BASE}/c12q04.jpg`, // Figura 12.2 – movimentos radiocarpal

  // Cap 13 – Mão
  "c13q02": `${BASE}/c13q02.jpg`, // Figura 13.2 – articulação selar CMC
  "c13q03": `${BASE}/c13q03.jpg`, // Figura 13.1 – articulações dos dedos
  "c13q04": `${BASE}/c13q04.jpg`, // Figura 13.3 – movimentos CMC do polegar
  "c13q11": `${BASE}/c13q11.jpg`, // Figuras 13.35/13.37 – preensões de força
  "c13q12": `${BASE}/c13q12.jpg`, // Figura 13.6 – retináculo dos flexores
  "c13q16": `${BASE}/c13q16.jpg`, // Figura 13.6 – retináculo dos flexores
  "c13q17": `${BASE}/c13q17.jpg`, // Figura 13.18 – tabaqueira anatômica
  "c13q18": `${BASE}/c13q18.jpg`, // Figura 13.10 – arcos da palma da mão
  "c13q19": `${BASE}/c13q19.jpg`, // Figura 13.10 – arcos da palma da mão
};
