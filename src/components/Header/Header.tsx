import { formatDate } from "../../helpers/formatDate";
import styles from "./Header.module.css";
import Container from "../../UI/Container/Container";
import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Container
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        alt="theme"
        onClick={toggleTheme}
      />
    </Container>
  );
};

export default Header;
