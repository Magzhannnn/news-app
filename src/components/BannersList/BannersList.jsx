import React from "react";
import styles from "./BannersList.module.css";
import withSkeleton from "../../hocs/withSkeleton";

const BannersList = ({ banners, isLoading }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} isLoading={isLoading} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 6);

export default BannersListWithSkeleton;
