import { useCallback } from "react";
import { useStatsContext } from "../../../context/StatsContext";
import { QUESTIONS_PER_ROUND } from "../../../quiz/generateRound";
import { playSelect } from "../../../lib/sounds";
import type { Chapter } from "../../../types/quiz";
import styles from "./ChapterSelector.module.css";

interface ChapterSelectorProps {
  chapters: Chapter[];
  onSelect: (chapterId: string) => void;
}

export function ChapterSelector({ chapters, onSelect }: ChapterSelectorProps) {
  const { stats } = useStatsContext();

  const handleSelect = useCallback(
    (chapterId: string) => {
      playSelect();
      onSelect(chapterId);
    },
    [onSelect]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Cinesiologia</h2>
      <p className={styles.subtitle}>Escolha um capítulo para estudar</p>

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
