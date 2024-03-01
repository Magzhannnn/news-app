import styles from "./NewsByFilters.module.css";
import NewsList from "../NewsList/NewsList";
import { TOTAL_PAGES } from "../../constant/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import { useDebounce } from "../../hooks/useDebounce";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyWords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onPageClick={handlePageClick}
        currentPage={filters.page_number}
      >
        <NewsList news={news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
