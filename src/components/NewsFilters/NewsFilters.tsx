import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./NewsFilters.module.css";
import Slider from "../Slider/Slider";
import { CategoriesApiResponse, IFilters } from "../../interfaces";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, category: string | number | null) => void;
}

const Filters = ({ filters, changeFilter }: Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default Filters;
