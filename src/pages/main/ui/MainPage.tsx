import Container from "@/shared/ui/Container/Container";
import styles from "./styles.module.css";
import LatestNews from "./LatestNews/LatestNews";
import NewsByFilters from "./NewsByFilters/NewsByFilters";

const MainPage = () => {
  return (
    <Container className={styles.main}>
      <LatestNews />
      
      <NewsByFilters />
    </Container>
  );
};

export default MainPage;
