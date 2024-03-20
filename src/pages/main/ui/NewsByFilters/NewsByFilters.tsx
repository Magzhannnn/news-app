import { useAppSelector } from "@/app/appStore";
import styles from "./NewsByFilters.module.css";
import { NewsFilters } from "@/widgets/news";
import { useGetCategoriesQuery } from "@/entities/categories/api/categoriesApi";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";

const NewsByFilters = () => {
  const { data } = useGetCategoriesQuery(null);

  const news = useAppSelector((state) => state.news.news);
  const filters = useAppSelector((state) => state.news.filters);

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyWords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        news={news}
        filters={filters}
        isLoading={isLoading}
      /> 
    </section>
  );
};

export default NewsByFilters;
