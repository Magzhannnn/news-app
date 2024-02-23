import React from "react";
import styles from "./BannersList.module.css";
import withSkeleton from "../../hocs/withSkeleton";
import NewBanner from "../NewBanner/NewBanner";

const BannersList = ({ banners, isLoading }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewBanner key={banner.id} item={banner} isLoading={isLoading} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
