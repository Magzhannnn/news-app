import React from "react";
import styles from "./Main.module.css";
import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../hooks/useDebounce";
import { PAGE_SIZE } from "../../constant/constants";
import { useFetch } from "../../hooks/useFetch";
import { useFilters } from "../../hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
import Container from "../../UI/Container/Container";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { data, isLoading, error } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeyWords,
  });

  return (
    <Container className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFilters
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
        news={data?.news}
      />
    </Container>
  );
};

export default Main;
