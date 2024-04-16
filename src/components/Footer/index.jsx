import styles from "./styles.module.css";
import image from "../../assets/image-3.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt="Imagem de pessoas uma ao lado da outra"
          className={styles.image}
        />
        <div className={styles.row}>Copyright © 2024</div>
      </div>
    </div>
  );
};

export { Footer };
