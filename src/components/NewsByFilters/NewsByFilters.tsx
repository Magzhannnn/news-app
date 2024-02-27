import styles from "./NewsByFilters.module.css";
import NewsList from "../NewsList/NewsList";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constant/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import { useFilters } from "../../hooks/useFilters";
import { useFetch } from "../../hooks/useFetch";
import { useDebounce } from "../../hooks/useDebounce";
import { getNews } from "../../api/apiNews";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import { NewsApiResponse, ParamsType } from "../../interfaces";

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeyWords,
  });

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

  const handlePageClick = (pageNumber: number) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onPageClick={handlePageClick}
        currentPage={filters.page_number}
      >
        <NewsList news={data?.news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
