import React from "react";
import styles from "./NewsByFilters.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import NewsList from "../NewsList/NewsList";
import { TOTAL_PAGES } from "../../constant/constants";
import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../hooks/useFetch";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      {dataCategories && (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <Pagination
        totalPages={TOTAL_PAGES}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onPageClick={handlePageClick}
        currentPage={filters.page_number}
      />

      <NewsList news={news} isLoading={isLoading} />

      <Pagination
        totalPages={TOTAL_PAGES}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onPageClick={handlePageClick}
        currentPage={filters.page_number}
      />
    </section>
  );
};

export default NewsByFilters;
