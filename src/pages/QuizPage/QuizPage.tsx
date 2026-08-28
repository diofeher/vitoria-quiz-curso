import { useEffect, useRef, useCallback } from "react";
import { CINESIOLOGIA_CHAPTERS } from "../../data/cinesiologia";
import { useQuiz } from "../../hooks/useQuiz";
import { useStatsContext } from "../../context/StatsContext";
import { useSpacedRepetitionContext } from "../../context/SpacedRepetitionContext";
import { qualityFromAnswer } from "../../lib/spacedRepetition";
import { ScreenBezel } from "../../components/layout/ScreenBezel";
import { ChapterSelector } from "./components/ChapterSelector";
import { ProgressBar } from "./components/ProgressBar";
import { QuestionCard } from "./components/QuestionCard";
import { ResultsSummary } from "./components/ResultsSummary";
import styles from "./QuizPage.module.css";

export function QuizPage() {
  const quiz = useQuiz(CINESIOLOGIA_CHAPTERS);
  const { recordResult } = useStatsContext();
  const sr = useSpacedRepetitionContext();
  const hasRecorded = useRef(false);

  useEffect(() => {
    if (
      quiz.status === "finished" &&
      quiz.chapterId &&
      quiz.chapterId !== "__review__" &&
      !hasRecorded.current
    ) {
      hasRecorded.current = true;
      recordResult(quiz.chapterId, quiz.score, quiz.totalQuestions);
    }
    if (quiz.status !== "finished") {
      hasRecorded.current = false;
    }
  }, [quiz.status, quiz.chapterId, quiz.score, quiz.totalQuestions, recordResult]);

  const handleAnswer = useCallback(
    (optionIndex: number, timeMs: number) => {
      quiz.answer(optionIndex);
      // Record SR data
      const q = quiz.currentQuestion;
      if (q) {
        const correct = optionIndex === q.correctIndex;
        const quality = qualityFromAnswer(correct, timeMs);
        sr.recordReview(q.id, quality);
      }
    },
    [quiz, sr],
  );

  const handleSkip = useCallback(() => {
    const q = quiz.currentQuestion;
    if (q) {
      // Quality 0 = "não sei" — worst rating for SR
      sr.recordReview(q.id, 0);
    }
    quiz.skip();
  }, [quiz, sr]);

  const allQuestions = CINESIOLOGIA_CHAPTERS.flatMap((ch) => ch.questions);

  const handleStartReview = useCallback(() => {
    const dueCards = sr.getDueCards();
    if (dueCards.length === 0) return;
    const dueQuestionIds = new Set(dueCards.map((c) => c.questionId));
    const dueQuestions = allQuestions.filter((q) => dueQuestionIds.has(q.id));
    if (dueQuestions.length === 0) return;
    quiz.startReview(dueQuestions);
  }, [sr, quiz, allQuestions]);

  const handleStartAll = useCallback(() => {
    quiz.startReview(allQuestions);
  }, [quiz, allQuestions]);

  return (
    <ScreenBezel>
      {quiz.status === "chapter-select" && (
        <ChapterSelector
          chapters={CINESIOLOGIA_CHAPTERS}
          onSelect={quiz.start}
          dueCount={sr.stats.due}
          srStats={sr.stats}
          totalQuestions={allQuestions.length}
          onStartReview={handleStartReview}
          onStartAll={handleStartAll}
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
            isSkipped={quiz.isSkipped}
            onAnswer={handleAnswer}
            onSkip={handleSkip}
            onNext={quiz.next}
          />
        </div>
      )}

      {quiz.status === "finished" && quiz.chapterId && (
        <ResultsSummary
          chapterId={quiz.chapterId}
          score={quiz.score}
          total={quiz.totalQuestions}
          skipped={quiz.skipped}
          isReviewMode={quiz.isReviewMode}
          srStats={sr.stats}
          onPlayAgain={
            quiz.isReviewMode
              ? handleStartReview
              : () => quiz.start(quiz.chapterId!)
          }
          onChangeChapter={quiz.backToChapters}
        />
      )}
    </ScreenBezel>
  );
}
