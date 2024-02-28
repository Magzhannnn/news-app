import styles from "./Container.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
