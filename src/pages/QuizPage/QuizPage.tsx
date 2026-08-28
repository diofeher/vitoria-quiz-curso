import { useEffect, useRef } from "react";
import { CINESIOLOGIA_CHAPTERS } from "../../data/cinesiologia";
import { useQuiz } from "../../hooks/useQuiz";
import { useStatsContext } from "../../context/StatsContext";
import { ScreenBezel } from "../../components/layout/ScreenBezel";
import { ChapterSelector } from "./components/ChapterSelector";
import { ProgressBar } from "./components/ProgressBar";
import { QuestionCard } from "./components/QuestionCard";
import { ResultsSummary } from "./components/ResultsSummary";
import styles from "./QuizPage.module.css";

export function QuizPage() {
  const quiz = useQuiz(CINESIOLOGIA_CHAPTERS);
  const { recordResult } = useStatsContext();
  const hasRecorded = useRef(false);

  useEffect(() => {
    if (
      quiz.status === "finished" &&
      quiz.chapterId &&
      !hasRecorded.current
    ) {
      hasRecorded.current = true;
      recordResult(quiz.chapterId, quiz.score, quiz.totalQuestions);
    }
    if (quiz.status !== "finished") {
      hasRecorded.current = false;
    }
  }, [quiz.status, quiz.chapterId, quiz.score, quiz.totalQuestions, recordResult]);

  return (
    <ScreenBezel>
      {quiz.status === "chapter-select" && (
        <ChapterSelector
          chapters={CINESIOLOGIA_CHAPTERS}
          onSelect={quiz.start}
        />
      )}

      {quiz.status === "in-progress" && quiz.currentQuestion && (
        <div className={styles.quizArea}>
          <ProgressBar
            current={quiz.currentIndex}
            total={quiz.totalQuestions}
            score={quiz.score}
            onQuit={quiz.backToChapters}
          />
          <QuestionCard
            question={quiz.currentQuestion}
            selectedOptionIndex={quiz.selectedOptionIndex}
            isAnswered={quiz.isAnswered}
            onAnswer={quiz.answer}
            onNext={quiz.next}
          />
        </div>
      )}

      {quiz.status === "finished" && quiz.chapterId && (
        <ResultsSummary
          chapterId={quiz.chapterId}
          score={quiz.score}
          total={quiz.totalQuestions}
          onPlayAgain={() => quiz.start(quiz.chapterId!)}
          onChangeChapter={quiz.backToChapters}
        />
      )}
    </ScreenBezel>
  );
}
