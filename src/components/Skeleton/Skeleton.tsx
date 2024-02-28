import { DirectionType, SkeletonType } from "../../interfaces/index";
import styles from "./Skeleton.module.css";

interface Props {
  type?: SkeletonType;
  count?: number;
  direction?: DirectionType;
}

const Skeleton = ({
  count = 1,
  type = "banner",
  direction = "column",
}: Props) => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
          {[...Array(count)].map((_, idx) => (
            <li
              key={idx}
              className={type === "banner" ? styles.bunner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.bunner : styles.item}></li>
      )}
    </>
  );
};

export default Skeleton;
