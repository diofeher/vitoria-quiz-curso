import type { QuizState, QuizAction } from "../types/quiz";

export const initialQuizState: QuizState = {
  status: "chapter-select",
  chapterId: null,
  questions: [],
  currentIndex: 0,
  selectedOptionIndex: null,
  isAnswered: false,
  isSkipped: false,
  score: 0,
  skipped: 0,
};

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SELECT_CHAPTER":
      return {
        ...state,
        status: "in-progress",
        chapterId: action.chapterId,
        questions: action.questions,
        currentIndex: 0,
        selectedOptionIndex: null,
        isAnswered: false,
        isSkipped: false,
        score: 0,
        skipped: 0,
      };

    case "START_REVIEW":
      return {
        ...state,
        status: "in-progress",
        chapterId: "__review__",
        questions: action.questions,
        currentIndex: 0,
        selectedOptionIndex: null,
        isAnswered: false,
        isSkipped: false,
        score: 0,
        skipped: 0,
      };

    case "ANSWER": {
      if (state.isAnswered) return state;
      const currentQ = state.questions[state.currentIndex];
      const isCorrect = action.optionIndex === currentQ.correctIndex;
      return {
        ...state,
        selectedOptionIndex: action.optionIndex,
        isAnswered: true,
        isSkipped: false,
        score: isCorrect ? state.score + 1 : state.score,
      };
    }

    case "SKIP": {
      if (state.isAnswered) return state;
      return {
        ...state,
        selectedOptionIndex: null,
        isAnswered: true,
        isSkipped: true,
        skipped: state.skipped + 1,
      };
    }

    case "NEXT": {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= state.questions.length) {
        return { ...state, status: "finished" };
      }
      return {
        ...state,
        currentIndex: nextIndex,
        selectedOptionIndex: null,
        isAnswered: false,
        isSkipped: false,
      };
    }

    case "RESTART":
      return initialQuizState;

    case "BACK_TO_CHAPTERS":
      return initialQuizState;

    default:
      return state;
  }
}
