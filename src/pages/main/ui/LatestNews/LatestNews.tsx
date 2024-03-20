import styles from "./LatestNews.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsCardList } from "@/widgets/news";
const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      {
        <NewsCardList
          news={data && data.news}
          isLoading={isLoading}
          type="banner"
          direction="row"
        />
      }
    </section>
  );
};

export default LatestNews;
