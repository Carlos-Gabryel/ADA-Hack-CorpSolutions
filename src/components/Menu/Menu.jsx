import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import clsx from "clsx";

function Menu({ name, occupation }) {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.nav}>
          <h2 className="titan-one-regular">
            Corp <br />
            Solutions
          </h2>
          <div className={clsx(styles["menu-list"], "kodchasan-regular")}>
            <ul>
              <li>
                <NavLink to="/painel">Meu Espaço</NavLink>
              </li>
              <li>
                <NavLink to="/">Quadro de Candidatos</NavLink>
              </li>
              <li>
                <NavLink to="/">Quadro de Colaboradores</NavLink>
              </li>
              <li>
                <NavLink to="/">Vagas Disponíveis</NavLink>
              </li>
              <li>
                <NavLink to="/">Banco de Talentos</NavLink>
              </li>
              <li>
                <NavLink to="/login">Sair</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["menu-user"]}>
          <img src="/user-rh.svg" alt="" />
          <div className={styles["menu-username"]}>
            <span>{name}</span>
            <span>{occupation}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export { Menu };
