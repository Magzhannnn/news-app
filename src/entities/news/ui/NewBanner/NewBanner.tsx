import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import styles from "./NewBanner.module.css";
import Image from "@/shared/ui/Image/Image";
import { INews } from "../..";

interface Props {
  item: INews;
}

const NewBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewBanner;
