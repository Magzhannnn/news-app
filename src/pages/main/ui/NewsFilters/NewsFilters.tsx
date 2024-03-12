
import { useAppDispatch } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/categories/api/categoriesApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { IFilters } from "@/shared/interfaces";
import styles from "./NewsFilters.module.css";

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
