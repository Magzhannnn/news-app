import styles from "./LatestNews.module.css";
import BannersList from "../BannersList/BannersList";
import { useFetch } from "../../hooks/useFetch";
import { NewsApiResponse } from "../../interfaces/index";
import { getLatestNews } from "../../api/apiNews";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      {<BannersList banners={data && data.news} isLoading={isLoading} />}
    </section>
  );
};

export default LatestNews;
