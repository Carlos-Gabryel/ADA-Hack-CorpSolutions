import React from "react";
import styles from "./styles.module.css";
import { Widgets } from "../Widgets/Widgets";
import { Link } from "react-scroll";

const Navbar = ({ scrollToAbout }) => {
  const handleScrollToAbout = () => {
    scroll.scrollTo({
      id: "about",
      duration: 500,
      smooth: true,
    });
  };
  return (
    <div className={styles.navbar}>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="goal" spy={true} smooth={true} offset={50} duration={500}>
            Metas
          </Link>
        </li>
        <li>
          <Link to="offer" spy={true} smooth={true} offset={50} duration={500}>
            Vagas Abertas
          </Link>
        </li>
      </ul>

      <Widgets login={true} />
    </div>
  );
};

export { Navbar };
