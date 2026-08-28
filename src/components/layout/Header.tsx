import { useStatsContext } from "../../context/StatsContext";
import type { AppRoute } from "../../routes/useRoute";
import styles from "./Header.module.css";

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const { stats } = useStatsContext();

  const bestCurrentStreak = Math.max(
    ...Object.values(stats.chapters).map((c) => c.currentStreak),
    0
  );

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.lights}>
          <span className={styles.lens} />
          <span className={`${styles.led} ${styles.red}`} />
          <span className={`${styles.led} ${styles.yellow}`} />
          <span className={`${styles.led} ${styles.green}`} />
        </div>
        <div className={styles.stats}>
          {bestCurrentStreak > 0 && (
            <span className={styles.streak} title="Sequência atual">
              🔥 {bestCurrentStreak}
            </span>
          )}
          {stats.totalGames > 0 && (
            <span className={styles.games} title="Total de jogos">
              📝 {stats.totalGames}
            </span>
          )}
        </div>
      </div>

      <div className={styles.brand}>
        <h1 className={styles.title}>Quiz Educação Física</h1>
      </div>

      <nav className={styles.nav}>
        <button
          className={`${styles.navButton} ${currentRoute === "/" ? styles.active : ""}`}
          aria-current={currentRoute === "/" ? "page" : undefined}
          onClick={() => onNavigate("/")}
        >
          🏠 Início
        </button>
        <button
          className={`${styles.navButton} ${currentRoute === "/cinesiologia" ? styles.active : ""}`}
          aria-current={currentRoute === "/cinesiologia" ? "page" : undefined}
          onClick={() => onNavigate("/cinesiologia")}
        >
          🦴 Cinesiologia
        </button>
      </nav>
    </header>
  );
}
