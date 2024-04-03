import Container from "@/shared/ui/Container/Container";
import { useTheme } from "@/app/providers/ThemeContext";
import { formatDate } from "@/shared/helpers/formatDate";
import styles from "./Header.module.css";
import { ThemeButton } from "@/features/theme";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDark } = useTheme();

  return (
    <Container
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to={"/"}>
          <h1 className={styles.title}>NEWS REACTIFY</h1>
        </Link>

        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </Container>
  );
};

export default Header;
