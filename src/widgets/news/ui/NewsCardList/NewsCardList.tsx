import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./NewsCardList.module.css";
import { INews, NewsCard } from "@/entities/news";

interface Props {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewNewsSlot?: (news: INews) => React.ReactNode;
}

const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => (
        <NewsCard
          key={item.id}
          item={item}
          type={type}
          viewNewsSlot={viewNewsSlot}
        />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
