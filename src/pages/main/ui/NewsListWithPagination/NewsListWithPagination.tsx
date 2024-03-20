import { TOTAL_PAGES } from "@/shared/constant/constants";
import { NewsCardList } from "@/widgets/news";
import { Pagination } from "@/features/pagination";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  news: INews[];
  filters: IFilters;
  isLoading: boolean;
}

const NewsByFilters = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePrevPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top={true}
      bottom={true}
      totalPages={TOTAL_PAGES}
      onNextPage={handleNextPage}
      onPrevPage={handlePrevPage}
      onPageClick={handlePageClick}
      currentPage={filters.page_number}
    >
      <NewsCardList
        news={news}
        isLoading={isLoading}
        type="item"
        direction="column"
      />
    </Pagination>
  );
};

export default NewsByFilters;
