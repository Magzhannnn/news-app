import React from "react";
import styles from "./Search.module.css";
import Container from "../../UI/Container/Container";

const Search = ({ keywords, setKeywords }) => {
  const inputeKeyWordsHandle = (e) => {
    setKeywords(e.target.value);
  };

  return (
    <Container className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={inputeKeyWordsHandle}
        placeholder="Javascript"
      />
    </Container>
  );
};

export default Search;
