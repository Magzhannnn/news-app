import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import styles from "./NewsDetails.module.css";
import { INews } from "../..";
import Image from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item?.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a
            href={item.url?.toString()}
            className={styles.anchor}
            target="_blank"
          >
            Read more
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul className={styles.categories}>
          {item.category.map((category) => (
            <button className={styles.active}>{category}</button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
