import styles from "./Main.module.css";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
import Container from "../../UI/Container/Container";

const Main = () => {
  return (
    <Container className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </Container>
  );
};

export default Main;
