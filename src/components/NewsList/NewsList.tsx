import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../hocs/withSkeleton";
import { INews } from "../../interfaces/index";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <div className={styles["news-list"]}>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
