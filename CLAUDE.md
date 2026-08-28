# Quiz Curso - Vitória

Quiz app para estudo de disciplinas de Educação Física. Todo conteúdo em Português Brasileiro.

## Stack

- React 19 + TypeScript + Vite
- CSS Modules para estilos
- Hash-based routing (sem router externo)
- localStorage para persistência de estatísticas

## Estrutura

```
src/
  data/          # Dados de perguntas por disciplina
  types/         # TypeScript types
  quiz/          # Lógica do quiz (reducer, geração de perguntas)
  hooks/         # Custom hooks
  context/       # Context providers
  components/    # Componentes reutilizáveis
  pages/         # Páginas por rota
  lib/           # Utilidades
  styles/        # Tokens CSS e reset
```

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
```

## Convenções

- Todo texto da UI em pt-BR
- Perguntas organizadas por disciplina e capítulo
- Componentes com CSS Modules (*.module.css)
- Sem dependências de router externo
