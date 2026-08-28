# Arquitetura e Decisões

## Visão Geral

Quiz interativo para estudo de disciplinas de Educação Física, começando com Cinesiologia. Construído como SPA estática sem backend.

## Stack

| Tecnologia | Versão | Motivo |
|------------|--------|--------|
| React | 19 | Componentes declarativos, hooks |
| TypeScript | 6 | Tipagem estática, segurança em tempo de compilação |
| Vite | 8 | Build rápido, HMR, configuração mínima |
| CSS Modules | - | Escopos isolados por componente, sem conflito de classes |
| GitHub Pages | - | Hospedagem gratuita, deploy via Actions |

## Decisões Arquiteturais

### 1. SPA sem router externo
**Decisão:** Hash-based routing customizado (`useRoute` hook) em vez de React Router.

**Motivo:** App simples com poucas rotas. Hash routing funciona nativamente no GitHub Pages sem configuração de redirecionamento. Zero dependências extras.

### 2. Sem backend
**Decisão:** Tudo client-side com localStorage.

**Motivo:** App para uma pessoa, usado em um dispositivo. Sem necessidade de autenticação, sincronização ou banco de dados. localStorage persiste até ser limpo. Se precisar sync futuramente, pode adicionar export/import JSON.

### 3. Perguntas estáticas no código
**Decisão:** Banco de 160+ perguntas como constantes TypeScript no arquivo `src/data/cinesiologia.ts`.

**Motivo:** Perguntas não mudam em runtime. Bundling estático permite type-checking, autocomplete, e zero latência na carga. Novas disciplinas = novos arquivos de dados.

### 4. Repetição Espaçada (SM-2) client-side
**Decisão:** Algoritmo SM-2 implementado em `src/lib/spacedRepetition.ts`, estado por pergunta em localStorage.

**Motivo:** SM-2 é comprovado e simples de implementar (~90 linhas). Qualidade auto-calculada a partir de tempo de resposta + acerto. Sem necessidade de backend para scheduling — basta comparar `nextReview` com data atual.

**Parâmetros:**
- Qualidade 0-5 (errado=1, certo+lento=3, certo+médio=4, certo+rápido=5)
- Ease factor mínimo: 1.3
- Intervalo inicial: 1 dia, depois 6 dias, depois exponencial
- "Dominado": interval > 21 dias

### 5. Imagens dos PDFs como page renders
**Decisão:** `pdfimages` (poppler) extrai páginas dos PDFs como imagens. Comprimidas para JPEG 800px/40% quality.

**Motivo:** PDFs são digitalizados (cada página = uma imagem). Não há como extrair figuras individuais automaticamente. Mapeamento manual de pergunta → página é feito em `src/data/imageMapping.ts`.

**Armazenamento:**
- `public/images/fundamentos/` — 42 imagens comprimidas para quiz (JPEG 800px/40%)
- `public/images/mms/` — 58 imagens comprimidas para quiz (JPEG 800px/40%)
- `pdfs/` — PDFs originais + page renders (no `.gitignore`)
- `pdfs/pages/fundamentos/` — 64 páginas completas renderizadas (PNG 200 DPI via `pdftoppm`)
- `pdfs/pages/mms/` — 72 páginas completas renderizadas (PNG 200 DPI via `pdftoppm`)
- Offset fundamentos: fig-NNN = página (NNN+3)
- Offset MMS: fig-NNN = página (NNN+99)

### 6. Tema teal/médico com estética "dispositivo"
**Decisão:** Visual inspirado no Pokédex (projeto base), adaptado com paleta teal para contexto educacional.

**Motivo:** Reutilização da estrutura visual do pokemon-quiz (shell com bordas arredondadas, "tela LCD" com scanlines, LEDs decorativos). Teal (#0d7377) em vez do vermelho Pokédex.

### 7. CSS Modules em vez de Tailwind/Styled Components
**Decisão:** Cada componente tem seu `.module.css`.

**Motivo:** Sem dependência runtime, escopos automáticos, funciona nativamente com Vite, fácil de entender.

### 8. Áudio via Web Audio API
**Decisão:** Sons sintetizados (sine waves) em vez de arquivos de áudio.

**Motivo:** Zero assets de áudio para carregar. Sons simples (correto, errado, seleção, completo) são gerados programaticamente com ondas senoidais.

## Fluxo do Quiz

```
chapter-select → [escolhe capítulo/revisão/todos]
     ↓
  in-progress → [responde 10 perguntas]
     ↓             ↓ (cada resposta)
     ↓        SR registra qualidade
     ↓
   finished → [mostra resultado + stats]
     ↓
  (jogar novamente / trocar capítulo)
```

## Modos de Jogo

1. **Por Capítulo** — 10 perguntas aleatórias de um capítulo
2. **Todas as Perguntas** — 10 perguntas aleatórias de todos os capítulos
3. **Revisão Espaçada** — 10 perguntas que estão "devidas" segundo o SM-2

## Persistência (localStorage)

| Namespace | Conteúdo |
|-----------|----------|
| `quiz-ed-fisica:stats:v1` | Estatísticas por capítulo (melhor score, sequência, jogos) |
| `quiz-ed-fisica:spaced-repetition:v1` | Estado SM-2 por pergunta (easeFactor, interval, nextReview) |

## Estrutura de Dados

```
QuizQuestion {
  id: string          // "c1q01", "c10q03"
  chapter: string     // "cap1", "cap10"
  topic: string       // Tema da pergunta
  question: string    // Texto da pergunta
  options: string[]   // 4 alternativas
  correctIndex: number // Índice da resposta correta
  explanation: string  // Explicação pós-resposta
  imageDescription?: string // Descrição textual da figura
  image?: string      // Caminho para imagem do PDF
}
```

## Adicionando Novas Disciplinas

1. Criar `src/data/novaDisciplina.ts` com as perguntas
2. Adicionar rota em `src/routes/useRoute.ts`
3. Criar página em `src/pages/NovaDisciplinaPage/`
4. Adicionar card na `HomePage`
5. Adicionar botão na `Header`

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`):
1. Push para `main` → trigger
2. `npm ci` → `npm run build`
3. Upload `dist/` como artefato de Pages
4. Deploy automático

URL: `http://www.diofeher.net/vitoria-quiz-curso/`
