import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Container from "../../UI/Container/Container";
import NewBanner from "../../components/NewBanner/NewBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    setIsLoading(true);

    getNews(currentPage, pageSize)
      .then((res) => {
        setNews(res.news);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="bunner" />
      )}

      <Pagination
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onPageClick={handlePageClick}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}

      <Pagination
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onPageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Main;
