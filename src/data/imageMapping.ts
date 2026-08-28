/**
 * Maps question IDs to their corresponding PDF page images.
 *
 * Fundamentos PDF: fig-NNN → book page NNN+3
 * MMS PDF: fig-NNN → book page NNN+99
 */

const BASE = import.meta.env.BASE_URL + "images";

/** Question ID → image path */
export const IMAGE_MAP: Record<string, string> = {
  // Cap 1 – Informações Básicas
  "c1q01": `${BASE}/fundamentos/fig-020.jpg`, // Figura 3.14 – planos do corpo
  "c1q03": `${BASE}/fundamentos/fig-020.jpg`, // Figura 3.15 – centro de gravidade

  // Cap 4 – Artrocinemática
  "c4q04": `${BASE}/fundamentos/fig-024.jpg`, // Figuras 4.3/4.4 – rolamento e deslizamento
  "c4q05": `${BASE}/fundamentos/fig-025.jpg`, // Figura 4.7 – regra convexo
  "c4q08": `${BASE}/fundamentos/fig-025.jpg`, // Figura 4.6 – regra côncavo
  "c4q09": `${BASE}/fundamentos/fig-026.jpg`, // Posições articulares / cadeias cinéticas
  "c4q13": `${BASE}/fundamentos/fig-031.jpg`, // Figura 5.1 – inserções do bíceps braquial

  // Cap 5 – Sistema Muscular
  "c5q02": `${BASE}/fundamentos/fig-032.jpg`, // Figura 5.4 – orientação das fibras musculares
  "c5q05": `${BASE}/fundamentos/fig-035.jpg`, // Tipos de contração muscular
  "c5q07": `${BASE}/fundamentos/fig-039.jpg`, // Figura 5.13 – cadeia cinética fechada
  "c5q17": `${BASE}/mms/fig-017.jpg`,         // Figura 10.2 – movimentos do ombro

  // Cap 10 – Articulação do Ombro
  "c10q03": `${BASE}/mms/fig-018.jpg`, // Figuras 10.3/10.4 – escápula e úmero
  "c10q04": `${BASE}/mms/fig-020.jpg`, // Figura 10.8 – três partes do deltoide
  "c10q06": `${BASE}/mms/fig-018.jpg`, // Figura 10.4 – úmero com tubérculos
  "c10q11": `${BASE}/mms/fig-019.jpg`, // Ligamentos e cápsula articular do ombro
  "c10q15": `${BASE}/mms/fig-034.jpg`, // Pronação e supinação do antebraço

  // Cap 11 – Articulação do Cotovelo
  "c11q05": `${BASE}/mms/fig-034.jpg`, // Tríceps braquial com três cabeças
  "c11q08": `${BASE}/mms/fig-031.jpg`, // Úmero com epicôndilos
  "c11q12": `${BASE}/mms/fig-043.jpg`, // Ossos carpais

  // Cap 12 – Articulação Radiocarpal
  "c12q04": `${BASE}/mms/fig-044.jpg`, // Articulação selar CMC do polegar

  // Cap 13 – Mão
  "c13q03": `${BASE}/mms/fig-053.jpg`, // Movimentos CMC do polegar
  "c13q04": `${BASE}/mms/fig-056.jpg`, // Tipos de preensão
  "c13q12": `${BASE}/mms/fig-054.jpg`, // Retináculo dos flexores
  "c13q17": `${BASE}/mms/fig-055.jpg`, // Tabaqueira anatômica
  "c13q18": `${BASE}/mms/fig-056.jpg`, // Arcos da palma da mão
};
