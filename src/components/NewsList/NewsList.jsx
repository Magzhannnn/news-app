import React from "react";
import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import Container from "../../UI/Container/Container";

const NewsList = ({ news }) => {
  return (
    <Container className={styles["news-list"]}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default NewsList;
