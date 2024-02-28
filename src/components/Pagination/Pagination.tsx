import { IPaginationProps } from "../../interfaces/index";
import styles from "./Pagination.module.css";



const Pagination = ({
  totalPages,
  onNextPage,
  onPrevPage,
  onPageClick,
  currentPage,
}: IPaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.arrow} ${
          currentPage <= 1 && styles.disabled_arrow
        }`}
        onClick={onPrevPage}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`${styles.pageNumber} ${
              idx + 1 === currentPage && styles.disabled_number
            }`}
            onClick={() => onPageClick(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${
          currentPage >= totalPages && styles.disabled_arrow
        }`}
        onClick={onNextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
