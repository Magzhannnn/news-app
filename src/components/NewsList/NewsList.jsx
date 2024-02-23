import React from "react";
import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import Container from "../../UI/Container/Container";
import withSkeleton from "../../hocs/withSkeleton";

const NewsList = ({ news }) => {
  return (
    <div className={styles["news-list"]}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
