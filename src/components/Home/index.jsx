import styles from "./styles.module.css";
import image from "../../assets/image-1.png";
import { TitleText } from "../TitleText";
import { Text } from "../Text";
import { Button } from "../Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className={styles.homeContainer} id="home">
      <div className={styles.imageContainer}>
        <img src={image} alt="img" className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TitleText title="Corp" titleColor="#225FA1" />
          <TitleText title="Solutions" titleColor="#225FA1" />
          <Text
            text="Inovação impulsionada pela diversidade e inclusão."
            textColor="#0f0f0f"
          />
        </div>
        <div className={styles.buttonContainer}>
          <Link to="offer" spy={true} smooth={true} offset={50} duration={500}>
            <Button text="Veja Mais" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Home };
