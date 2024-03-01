import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./NewsFilters.module.css";
import Slider from "../Slider/Slider";
import { IFilters } from "../../interfaces";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  filters: IFilters;
}

const Filters = ({ filters }: Props) => {
  const dispatch = useAppDispatch();

  const { data: dataCategories } = useGetCategoriesQuery(null);

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default Filters;
