import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Vagas Abertas</a>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };
