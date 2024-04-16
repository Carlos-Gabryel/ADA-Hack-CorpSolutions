import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";
import { NavLink, } from "react-router-dom";

const Widgets = ({ login }) => {

  return (
    <>
      <div className={styles.box}>
        <div className={styles["image-container"]}>
        {login ? 
          
          <NavLink to="/login">
              <img  src="/icone.svg" alt="Botão de login"/>
          </NavLink>
          : ""
          }
        </div>
        <span className={clsx("material-symbols-outlined", styles.font)}>match_case</span>
        <img src="./brasil.svg" alt="Bandeira do Brasil" />
      </div>
    </>
  );
};

export {Widgets};
