import { StatsProvider } from "./context/StatsContext";
import { SpacedRepetitionProvider } from "./context/SpacedRepetitionContext";
import { useRoute } from "./routes/useRoute";
import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { QuizPage } from "./pages/QuizPage/QuizPage";
import styles from "./App.module.css";

function App() {
  const { path, navigate } = useRoute();

  return (
    <StatsProvider>
      <SpacedRepetitionProvider>
        <div className={styles.shell}>
          <Header currentRoute={path} onNavigate={navigate} />
          {path === "/" && <HomePage onNavigate={navigate} />}
          {path === "/cinesiologia" && <QuizPage />}
          <div className={styles.bottomEdge} />
        </div>
      </SpacedRepetitionProvider>
    </StatsProvider>
  );
}

export default App;
