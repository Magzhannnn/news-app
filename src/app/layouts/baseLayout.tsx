import Header from "@/widgets/header/ui/Header/Header";
import { useTheme } from "@/app/providers/ThemeContext";
import "@/shared/index.css";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <>
      <div className={`app ${isDark ? "dark" : "light"}`}>
        <Header />
        <div className="containers">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default BaseLayout;
