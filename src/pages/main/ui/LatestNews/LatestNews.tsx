import { INews } from "@/entities/news";
import styles from "./LatestNews.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsCardList } from "@/widgets/news";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      {
        <NewsCardList
          news={data && data.news}
          isLoading={isLoading}
          type="banner"
          direction="row"
          viewNewsSlot={(news: INews) => (
            <p className="text-left w-max" onClick={() => navigateTo(news)}>view more...</p>
          )}
        />
      }
    </section>
  );
};

export default LatestNews;
