import { useState, useCallback } from "react";
import type { StatsState, ChapterStats } from "../types/stats";
import { DEFAULT_STATS, DEFAULT_CHAPTER_STATS } from "../types/stats";
import { getItem, setItem } from "../lib/storage";

const STATS_KEY = "stats";

function loadStats(): StatsState {
  return getItem<StatsState>(STATS_KEY, DEFAULT_STATS);
}

function persistStats(stats: StatsState): void {
  setItem(STATS_KEY, stats);
}

export function useStats() {
  const [stats, setStats] = useState<StatsState>(loadStats);

  const recordResult = useCallback(
    (chapterId: string, score: number, total: number) => {
      setStats((prev) => {
        const chapterStats: ChapterStats =
          prev.chapters[chapterId] ?? { ...DEFAULT_CHAPTER_STATS };
        const percentage = total > 0 ? (score / total) * 100 : 0;
        const passed = percentage >= 70;

        const newStreak = passed ? chapterStats.currentStreak + 1 : 0;
        const newBestStreak = Math.max(chapterStats.bestStreak, newStreak);
        const newBestScore = Math.max(chapterStats.bestScore, score);

        const updated: StatsState = {
          ...prev,
          totalGames: prev.totalGames + 1,
          chapters: {
            ...prev.chapters,
            [chapterId]: {
              bestScore: newBestScore,
              gamesPlayed: chapterStats.gamesPlayed + 1,
              currentStreak: newStreak,
              bestStreak: newBestStreak,
            },
          },
        };

        persistStats(updated);
        return updated;
      });
    },
    []
  );

  const resetStats = useCallback(() => {
    persistStats(DEFAULT_STATS);
    setStats({ ...DEFAULT_STATS });
  }, []);

  return { stats, recordResult, resetStats };
}
