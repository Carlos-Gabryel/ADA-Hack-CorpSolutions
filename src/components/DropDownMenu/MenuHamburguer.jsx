import { useState } from "react";
import styles from "./styles.module.css";
import DropDownMenu from "./DropDownMenu";

function MenuHamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <DropDownMenu onClose={() => setIsOpen(false)} />}
      <div
        className={styles["hamburguer-menu"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles["hamburguer-line"]}></div>
        <div className={styles["hamburguer-line"]}></div>
        <div className={styles["hamburguer-line"]}></div>
      </div>
    </>
  );
}

export { MenuHamburguer };
