import { useTheme } from "@/app/providers/ThemeContext";
import { themeIcons } from "@/shared/assets";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      alt="theme"
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
