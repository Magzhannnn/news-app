import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import "./index.css";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDark } = useTheme();

  return (
    <>
      <div className={`app ${isDark ? "dark" : "light"}`}>
        <Header />
        <div className="containers">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
