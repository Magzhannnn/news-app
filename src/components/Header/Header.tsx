import { formatDate } from "../../helpers/formatDate";
import styles from "./Header.module.css";
import Container from "../../UI/Container/Container";

const Header = () => {
  return (
    <Container className={styles.header}>
      <h1 className={styles.title}>NEWS REACTIFY</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </Container>
  );
};

export default Header;
