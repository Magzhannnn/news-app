import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Container from "../../UI/Container/Container";
import NewBanner from "../../components/NewBanner/NewBanner";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../hooks/useDebounce";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKeyWords = useDebounce(keywords, 1500);

  const fetchNews = async (currentPage) => {
    setIsLoading(true);

    getNews({
      page_number: currentPage,
      page_size: pageSize,
      category: selectedCategory === "All" ? null : selectedCategory,
      keywords: debouncedKeyWords,
    })
      .then((res) => {
        setNews(res.news);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const fetchCategories = async () => {
    getCategories()
      .then((res) => {
        setCategories(["All", ...res.categories]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeyWords]);

  useEffect(() => {
    fetchCategories();
  }, []);

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
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Search keywords={keywords} setKeywords={setKeywords} />

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
