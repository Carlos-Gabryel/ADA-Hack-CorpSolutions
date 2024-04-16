import styles from "./index.module.css";

function Card({ title, children }) {
  return (
    <>
      <div className={styles.box}>
        <h4 className={styles["card-title"]}>{title}</h4>
        <div className={styles.card}>{children}</div>
      </div>
    </>
  );
}

export { Card };
