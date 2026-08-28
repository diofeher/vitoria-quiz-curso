import type { QuizState, QuizAction } from "../types/quiz";

export const initialQuizState: QuizState = {
  status: "chapter-select",
  chapterId: null,
  questions: [],
  currentIndex: 0,
  selectedOptionIndex: null,
  isAnswered: false,
  score: 0,
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
        score: 0,
      };

    case "ANSWER": {
      if (state.isAnswered) return state;
      const currentQ = state.questions[state.currentIndex];
      const isCorrect = action.optionIndex === currentQ.correctIndex;
      return {
        ...state,
        selectedOptionIndex: action.optionIndex,
        isAnswered: true,
        score: isCorrect ? state.score + 1 : state.score,
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
