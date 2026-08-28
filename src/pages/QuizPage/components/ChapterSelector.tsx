import { useCallback } from "react";
import { useStatsContext } from "../../../context/StatsContext";
import { QUESTIONS_PER_ROUND } from "../../../quiz/generateRound";
import { playSelect } from "../../../lib/sounds";
import type { Chapter } from "../../../types/quiz";
import styles from "./ChapterSelector.module.css";

interface SRStats {
  total: number;
  due: number;
  mastered: number;
  learning: number;
}

interface ChapterSelectorProps {
  chapters: Chapter[];
  onSelect: (chapterId: string) => void;
  dueCount: number;
  srStats: SRStats;
  totalQuestions: number;
  onStartReview: () => void;
  onStartAll: () => void;
}

export function ChapterSelector({
  chapters,
  onSelect,
  dueCount,
  srStats,
  totalQuestions,
  onStartReview,
  onStartAll,
}: ChapterSelectorProps) {
  const { stats } = useStatsContext();

  const handleSelect = useCallback(
    (chapterId: string) => {
      playSelect();
      onSelect(chapterId);
    },
    [onSelect],
  );

  const handleReview = useCallback(() => {
    playSelect();
    onStartReview();
  }, [onStartReview]);

  const handleAll = useCallback(() => {
    playSelect();
    onStartAll();
  }, [onStartAll]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Cinesiologia</h2>

      {/* All Questions Card */}
      <button
        className={`${styles.card} ${styles.allCard}`}
        onClick={handleAll}
      >
        <span className={styles.emoji}>🎯</span>
        <div className={styles.cardContent}>
          <span className={styles.label}>Todas as Perguntas</span>
          <span className={styles.description}>
            Quiz com perguntas aleatórias de todos os capítulos
          </span>
          <span className={styles.questionCount}>
            {totalQuestions} perguntas no total
          </span>
        </div>
      </button>

      {/* Spaced Repetition Review Card */}
      <button
        className={`${styles.card} ${styles.reviewCard}`}
        onClick={handleReview}
        disabled={dueCount === 0}
      >
        <span className={styles.emoji}>📅</span>
        <div className={styles.cardContent}>
          <span className={styles.label}>Revisão Espaçada</span>
          <span className={styles.description}>
            Revise perguntas usando repetição espaçada (SM-2)
          </span>
          <div className={styles.srStatsRow}>
            <span className={styles.srStat}>
              📬 {dueCount} pendente{dueCount !== 1 ? "s" : ""}
            </span>
            <span className={styles.srStat}>📖 {srStats.learning} aprendendo</span>
            <span className={styles.srStat}>✅ {srStats.mastered} dominado{srStats.mastered !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </button>

      <p className={styles.subtitle}>Ou escolha um capítulo</p>

      <div className={styles.grid}>
        {chapters.map((chapter) => {
          const chapterStats = stats.chapters[chapter.id];
          return (
            <button
              key={chapter.id}
              className={styles.card}
              onClick={() => handleSelect(chapter.id)}
            >
              <span className={styles.emoji}>{chapter.emoji}</span>
              <div className={styles.cardContent}>
                <span className={styles.label}>{chapter.title}</span>
                <span className={styles.description}>
                  {chapter.description}
                </span>
                <span className={styles.questionCount}>
                  {chapter.questions.length} perguntas
                </span>
                {chapterStats && chapterStats.gamesPlayed > 0 && (
                  <span className={styles.best}>
                    Melhor: {chapterStats.bestScore}/{QUESTIONS_PER_ROUND}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {stats.totalGames > 0 && (
        <p className={styles.totalGames}>
          Total de quizzes: {stats.totalGames}
        </p>
      )}
    </div>
  );
}
