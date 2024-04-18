import styles from "./styles.module.css";
import { Widgets } from "../Widgets/Widgets";
import { Link } from "react-scroll";

const Navbar = () => {
  
  return (
    <div className={styles.navbar}>
      <ul className={styles["nav-links"]}>
        <li>
          <a tabIndex={1}  href="#">Início</a>
        </li>
        <li>
          <Link tabIndex={2}  to="about" spy={true} smooth={true} offset={50} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link tabIndex={3}  to="goal" spy={true} smooth={true} offset={50} duration={500}>
            Metas
          </Link>
        </li>
        <li>
          <Link tabIndex={4}  to="offer" spy={true} smooth={true} offset={50} duration={500}>
            Vagas Abertas
          </Link>
        </li>
      </ul>

      <Widgets login={true} />
    </div>
  );
};

export { Navbar };
