import { useEffect } from "react";
import { useStatsContext } from "../../../context/StatsContext";
import { CINESIOLOGIA_CHAPTERS } from "../../../data/cinesiologia";
import { QUESTIONS_PER_ROUND } from "../../../quiz/generateRound";
import { playComplete } from "../../../lib/sounds";
import styles from "./ResultsSummary.module.css";

interface ResultsSummaryProps {
  chapterId: string;
  score: number;
  total: number;
  onPlayAgain: () => void;
  onChangeChapter: () => void;
}

function getEmoji(percentage: number): string {
  if (percentage === 100) return "🏆";
  if (percentage >= 70) return "🎉";
  if (percentage >= 40) return "📚";
  return "💪";
}

function getMessage(percentage: number): string {
  if (percentage === 100) return "Perfeito!";
  if (percentage >= 70) return "Muito bem!";
  if (percentage >= 40) return "Continue estudando!";
  return "Não desista!";
}

export function ResultsSummary({
  chapterId,
  score,
  total,
  onPlayAgain,
  onChangeChapter,
}: ResultsSummaryProps) {
  const { stats } = useStatsContext();
  const chapter = CINESIOLOGIA_CHAPTERS.find((c) => c.id === chapterId);
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const chapterStats = stats.chapters[chapterId];

  useEffect(() => {
    playComplete();
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.emoji}>{getEmoji(percentage)}</span>
      <h2 className={styles.message}>{getMessage(percentage)}</h2>

      <div className={styles.scoreCard}>
        <span className={styles.scoreValue}>
          {score}/{total}
        </span>
        <span className={styles.percentage}>{percentage}%</span>
      </div>

      {chapter && (
        <p className={styles.mode}>
          {chapter.emoji} {chapter.title}
        </p>
      )}

      {chapterStats && (
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span className={styles.statValue}>
              {chapterStats.bestScore}/{QUESTIONS_PER_ROUND}
            </span>
            <span className={styles.statLabel}>Melhor</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{chapterStats.currentStreak}</span>
            <span className={styles.statLabel}>Sequência</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{chapterStats.bestStreak}</span>
            <span className={styles.statLabel}>Recorde</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{chapterStats.gamesPlayed}</span>
            <span className={styles.statLabel}>Jogos</span>
          </div>
        </div>
      )}

      <div className={styles.actions}>
        <button className={styles.primaryButton} onClick={onPlayAgain}>
          🔄 Jogar Novamente
        </button>
        <button className={styles.secondaryButton} onClick={onChangeChapter}>
          ← Trocar Capítulo
        </button>
      </div>
    </div>
  );
}
