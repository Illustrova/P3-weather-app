import styles from "./loader.module.css";

export const Loader = (): JSX.Element => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__spinner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
