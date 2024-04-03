import { useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import Container from "@/shared/ui/Container/Container";
import { Link } from "react-router-dom";
import { NewsDetails } from "@/entities/news";

const NewsPage = () => {
  const currentNews = useAppSelector((state) => state.news.currentNews);

  if (!currentNews) {
    return (
      <Container className="font-bold mt-4">
        <h1 className="text-3xl ">Cannot fint news</h1>
        <Link to={"/"}>
          <h3 className="text-xl">Go to main page</h3>
        </Link>
      </Container>
    );
  }

  return (
    <Container className={styles.news}>
      <h1 className="text-3xl font-bold">{currentNews.title}</h1>
      <NewsDetails item={currentNews} />
    </Container>
  );
};

export default NewsPage;
