import { useTheme } from "../../context/ThemeContext";
import styles from "./Search.module.css";

interface Props {
  keywords: string;
  setKeywords: (value: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Javascript"
      />
    </div>
  );
};

export default Search;
