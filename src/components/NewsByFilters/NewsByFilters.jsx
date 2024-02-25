import React from "react";
import styles from "./NewsByFilters.module.css";
import Pagination from "../Pagination/Pagination";
import NewsList from "../NewsList/NewsList";
import { TOTAL_PAGES } from "../../constant/constants";
import NewsFilters from "../NewsFilters/NewsFilters";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
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
      <NewsFilters filters={filters} changeFilter={changeFilter} />

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
