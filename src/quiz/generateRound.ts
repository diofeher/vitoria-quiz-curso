import type { QuizQuestion, Chapter } from "../types/quiz";
import { shuffle } from "../lib/arrayUtils";

export const QUESTIONS_PER_ROUND = 10;

export function generateRound(
  chapter: Chapter,
  count: number = QUESTIONS_PER_ROUND
): QuizQuestion[] {
  const shuffled = shuffle(chapter.questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
