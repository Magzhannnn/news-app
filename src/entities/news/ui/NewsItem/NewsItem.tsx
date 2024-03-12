import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import styles from "./NewsItem.module.css";
import { INews } from "../..";

interface Props {
  item: INews;
}

const NewsItem = ({ item }: Props) => {
  return (
    <li className={styles["news-item"]}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;