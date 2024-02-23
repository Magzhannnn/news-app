import React from "react";
import styles from "./NewBanner.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Container from "../../UI/Container/Container";
import Image from "../Image/Image";
import withSkeleton from "../../hocs/withSkeleton";

const NewBanner = ({ item }) => {
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
