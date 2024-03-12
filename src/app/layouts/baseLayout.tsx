import Header from "@/widgets/header/ui/Header/Header";
import { useTheme } from "@/app/providers/ThemeContext";
import "@/shared/index.css";
import { MainPage } from "@/pages/main";

function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <>
      <div className={`app ${isDark ? "dark" : "light"}`}>
        <Header />
        <div className="containers">
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default BaseLayout;
