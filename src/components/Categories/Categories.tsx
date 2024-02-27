import { CategoriesType } from "../../interfaces";
import styles from "./Categories.module.css";
import { ForwardedRef, forwardRef } from "react";

interface Props {
  categories: CategoriesType[];
  selectedCategory: CategoriesType | null;
  setSelectedCategory: (category: CategoriesType | null) => void;
}

const Categories = forwardRef(
  (
    { categories, selectedCategory, setSelectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          className={selectedCategory === null ? styles.active : styles.item}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            className={
              selectedCategory === category ? styles.active : styles.item
            }
            onClick={() => setSelectedCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
