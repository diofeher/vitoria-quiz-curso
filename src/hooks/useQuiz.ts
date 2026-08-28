import { useReducer, useCallback, useMemo } from "react";
import type { Chapter } from "../types/quiz";
import { quizReducer, initialQuizState } from "../quiz/quizReducer";
import { generateRound } from "../quiz/generateRound";

export function useQuiz(chapters: Chapter[]) {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  const start = useCallback(
    (chapterId: string) => {
      const chapter = chapters.find((c) => c.id === chapterId);
      if (!chapter) return;
      const questions = generateRound(chapter);
      dispatch({
        type: "SELECT_CHAPTER",
        chapterId,
        questions,
      });
    },
    [chapters]
  );

  const answer = useCallback((optionIndex: number) => {
    dispatch({ type: "ANSWER", optionIndex });
  }, []);

  const next = useCallback(() => {
    dispatch({ type: "NEXT" });
  }, []);

  const restart = useCallback(() => {
    dispatch({ type: "RESTART" });
  }, []);

  const backToChapters = useCallback(() => {
    dispatch({ type: "BACK_TO_CHAPTERS" });
  }, []);

  const currentQuestion = useMemo(
    () =>
      state.status === "in-progress"
        ? state.questions[state.currentIndex]
        : null,
    [state.status, state.questions, state.currentIndex]
  );

  return {
    ...state,
    currentQuestion,
    totalQuestions: state.questions.length,
    currentIndex: state.currentIndex,
    start,
    answer,
    next,
    restart,
    backToChapters,
  };
}
