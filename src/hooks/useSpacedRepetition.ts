import { useState, useCallback, useMemo } from "react";
import { getItem, setItem } from "../lib/storage";
import {
  type CardState,
  getNewCardState,
  calculateNextReview,
  isDue,
} from "../lib/spacedRepetition";
import { CINESIOLOGIA_CHAPTERS } from "../data/cinesiologia";

const SR_KEY = "spaced-repetition";

type CardMap = Record<string, CardState>;

function loadCards(): CardMap {
  return getItem<CardMap>(SR_KEY, {});
}

function persistCards(cards: CardMap): void {
  setItem(SR_KEY, cards);
}

/** Extract chapter id from question id (e.g. "cap1-q3" → "cap1") */
function chapterFromQuestionId(questionId: string): string {
  const match = questionId.match(/^(cap\d+)/);
  return match ? match[1] : "";
}

/** All known question ids across chapters */
const ALL_QUESTION_IDS = CINESIOLOGIA_CHAPTERS.flatMap((ch) =>
  ch.questions.map((q) => q.id),
);

export function useSpacedRepetition() {
  const [cards, setCards] = useState<CardMap>(loadCards);

  const recordReview = useCallback(
    (questionId: string, quality: number) => {
      setCards((prev) => {
        const existing = prev[questionId] ?? getNewCardState(questionId);
        const updated = calculateNextReview(existing, quality);
        const next = { ...prev, [questionId]: updated };
        persistCards(next);
        return next;
      });
    },
    [],
  );

  const getDueCards = useCallback(
    (chapterId?: string): CardState[] => {
      // Cards that exist and are due
      const dueExisting = Object.values(cards).filter((c) => {
        if (!isDue(c)) return false;
        if (chapterId) return chapterFromQuestionId(c.questionId) === chapterId;
        return true;
      });

      // Questions never reviewed are also "due" (new cards)
      const newCardIds = ALL_QUESTION_IDS.filter((id) => {
        if (cards[id]) return false;
        if (chapterId) return chapterFromQuestionId(id) === chapterId;
        return true;
      });

      const newCards = newCardIds.map(getNewCardState);
      return [...dueExisting, ...newCards];
    },
    [cards],
  );

  const getCardState = useCallback(
    (questionId: string): CardState | undefined => cards[questionId],
    [cards],
  );

  const stats = useMemo(() => {
    const total = ALL_QUESTION_IDS.length;
    let mastered = 0;
    let learning = 0;
    let due = 0;

    for (const id of ALL_QUESTION_IDS) {
      const card = cards[id];
      if (!card) {
        // Never seen = due
        due += 1;
        continue;
      }
      if (card.interval > 21) {
        mastered += 1;
      } else {
        learning += 1;
      }
      if (isDue(card)) {
        due += 1;
      }
    }

    return { total, due, mastered, learning };
  }, [cards]);

  const resetCards = useCallback(() => {
    persistCards({});
    setCards({});
  }, []);

  return { cards, recordReview, getDueCards, getCardState, stats, resetCards };
}
