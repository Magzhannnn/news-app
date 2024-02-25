import React from "react";
import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./NewsFilters.module.css";

const Filters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
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
    </div>
  );
};

export default Filters;