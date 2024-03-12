import React, { useRef } from "react";
import styles from "./Slider.module.css";
import { useTheme } from "@/app/providers/ThemeContext";

interface Props {
  children: React.ReactElement;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
  const { isDark } = useTheme();
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button
        className={`${styles.arrow} ${isDark ? styles.dark : styles.light}`}
        onClick={scrollLeft}
      >
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button
        className={`${styles.arrow} ${isDark ? styles.dark : styles.light}`}
        onClick={scrollRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
