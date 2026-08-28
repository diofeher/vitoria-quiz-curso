import { useEffect, useRef } from "react";
import type { QuizQuestion } from "../../../types/quiz";
import { playCorrect, playWrong } from "../../../lib/sounds";
import styles from "./QuestionCard.module.css";

interface QuestionCardProps {
  question: QuizQuestion;
  selectedOptionIndex: number | null;
  isAnswered: boolean;
  isSkipped: boolean;
  onAnswer: (optionIndex: number, timeMs: number) => void;
  onSkip: () => void;
  onNext: () => void;
}

export function QuestionCard({
  question,
  selectedOptionIndex,
  isAnswered,
  isSkipped,
  onAnswer,
  onSkip,
  onNext,
}: QuestionCardProps) {
  const hasPlayedSound = useRef(false);
  const questionStartTime = useRef(Date.now());

  // Reset timer when question changes
  useEffect(() => {
    questionStartTime.current = Date.now();
  }, [question.id]);

  useEffect(() => {
    if (isAnswered && !hasPlayedSound.current) {
      hasPlayedSound.current = true;
      if (isSkipped) {
        playWrong();
      } else if (selectedOptionIndex === question.correctIndex) {
        playCorrect();
      } else {
        playWrong();
      }
    }
    if (!isAnswered) {
      hasPlayedSound.current = false;
    }
  }, [isAnswered, isSkipped, selectedOptionIndex, question.correctIndex]);

  return (
    <div className={styles.card}>
      {question.image && (
        <div className={styles.imageContainer}>
          <img
            src={question.image}
            alt={question.imageDescription ?? "Figura do livro"}
            className={styles.questionImage}
          />
        </div>
      )}

      {question.imageDescription && !question.image && (
        <div className={styles.imageHint}>
          📷 {question.imageDescription}
        </div>
      )}

      <h3 className={styles.prompt}>{question.question}</h3>

      <div className={styles.options}>
        {question.options.map((option, index) => {
          let optionClass = styles.option;
          if (isAnswered) {
            if (index === question.correctIndex) {
              optionClass += ` ${styles.correct}`;
            } else if (index === selectedOptionIndex) {
              optionClass += ` ${styles.wrong}`;
            } else {
              optionClass += ` ${styles.dimmed}`;
            }
          }

          return (
            <button
              key={index}
              className={optionClass}
              onClick={() => {
                if (!isAnswered) {
                  const elapsed = Date.now() - questionStartTime.current;
                  onAnswer(index, elapsed);
                }
              }}
              disabled={isAnswered}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className={styles.optionLabel}>{option}</span>
            </button>
          );
        })}
      </div>

      {!isAnswered && (
        <button className={styles.skipButton} onClick={onSkip}>
          ⏭ Pular Pergunta
        </button>
      )}

      {isAnswered && (
        <div className={styles.feedback}>
          <p className={styles.feedbackText}>
            {isSkipped ? (
              <span className={styles.skippedText}>
                ⏭ Pulada! A resposta certa é{" "}
                <strong>{question.options[question.correctIndex]}</strong>.{" "}
                {question.explanation}
              </span>
            ) : selectedOptionIndex === question.correctIndex ? (
              <span className={styles.correctText}>
                ✅ Correto! {question.explanation}
              </span>
            ) : (
              <span className={styles.wrongText}>
                ❌ Errado! A resposta certa é{" "}
                <strong>{question.options[question.correctIndex]}</strong>.{" "}
                {question.explanation}
              </span>
            )}
          </p>
          <button className={styles.nextButton} onClick={onNext}>
            Próxima →
          </button>
        </div>
      )}
    </div>
  );
}
