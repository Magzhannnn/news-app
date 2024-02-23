import React from "react";
import styles from "./Skeleton.module.css";
import Container from "../../UI/Container/Container";

const Skeleton = ({ count = 1, type = "banner", direction = "column" }) => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={direction === "column" ? styles.columnList : styles.rowList}
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
