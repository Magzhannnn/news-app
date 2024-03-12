export interface IPaginationProps {
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onPageClick: (page: number) => void;
  currentPage: number;
}
