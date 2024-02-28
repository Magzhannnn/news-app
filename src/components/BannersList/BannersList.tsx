import styles from "./BannersList.module.css";
import withSkeleton from "../../hocs/withSkeleton";
import NewBanner from "../NewBanner/NewBanner";
import { INews } from "../../interfaces";

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
