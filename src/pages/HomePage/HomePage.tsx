import type { AppRoute } from "../../routes/useRoute";
import { ScreenBezel } from "../../components/layout/ScreenBezel";
import styles from "./HomePage.module.css";

interface HomePageProps {
  onNavigate: (route: AppRoute) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <ScreenBezel>
      <div className={styles.container}>
        <span className={styles.emoji}>📚</span>
        <h2 className={styles.heading}>Quiz de Estudos</h2>
        <p className={styles.subtitle}>
          Escolha uma disciplina para começar a estudar
        </p>

        <div className={styles.grid}>
          <button
            className={styles.card}
            onClick={() => onNavigate("/cinesiologia")}
          >
            <span className={styles.cardEmoji}>🦴</span>
            <span className={styles.cardTitle}>Cinesiologia</span>
            <span className={styles.cardDesc}>
              Fundamentos da Cinesiologia e Cinesiologia dos Membros Superiores
            </span>
            <span className={styles.cardChapters}>10 capítulos</span>
          </button>
        </div>

        <p className={styles.footer}>
          Mais disciplinas em breve! 🎓
        </p>
      </div>
    </ScreenBezel>
  );
}
