import NewBanner from "@/entities/news/ui/NewBanner/NewBanner";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./BannersList.module.css";
import { INews } from "@/entities/news";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
