export interface QuizQuestion {
  id: string;
  chapter: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  imageDescription?: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  emoji: string;
  questions: QuizQuestion[];
}

export type QuizStatus = "chapter-select" | "in-progress" | "finished";

export interface QuizState {
  status: QuizStatus;
  chapterId: string | null;
  questions: QuizQuestion[];
  currentIndex: number;
  selectedOptionIndex: number | null;
  isAnswered: boolean;
  score: number;
}

export type QuizAction =
  | {
      type: "SELECT_CHAPTER";
      chapterId: string;
      questions: QuizQuestion[];
    }
  | { type: "ANSWER"; optionIndex: number }
  | { type: "NEXT" }
  | { type: "RESTART" }
  | { type: "BACK_TO_CHAPTERS" };
