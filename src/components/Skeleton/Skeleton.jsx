import React from "react";
import styles from "./Skeleton.module.css";
import Container from "../../UI/Container/Container";

const Skeleton = ({ count = 1, type = "banner" }) => {
  return (
    <Container>
      {count > 1 ? (
        <ul className={styles.list}>
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
    </Container>
  );
};

export default Skeleton;
