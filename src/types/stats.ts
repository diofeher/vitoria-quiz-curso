export interface ChapterStats {
  bestScore: number;
  gamesPlayed: number;
  currentStreak: number;
  bestStreak: number;
}

export interface StatsState {
  schemaVersion: 1;
  totalGames: number;
  chapters: Record<string, ChapterStats>;
}

export const DEFAULT_CHAPTER_STATS: ChapterStats = {
  bestScore: 0,
  gamesPlayed: 0,
  currentStreak: 0,
  bestStreak: 0,
};

export const DEFAULT_STATS: StatsState = {
  schemaVersion: 1,
  totalGames: 0,
  chapters: {},
};
