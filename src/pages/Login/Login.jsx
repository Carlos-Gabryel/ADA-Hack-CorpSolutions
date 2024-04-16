import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { Widgets } from "../../components/Widgets/Widgets.jsx";

function Login() {

  const navigate = useNavigate();
  function handleClick() {
    navigate('/painel');
  }
  return (
    <>
      <section className={clsx(styles.container, styles.height)}>
        <div className={styles.imagem}>
          <div>
            <img src="/pessoas.svg" alt="" />
          </div>
          <div className={clsx("kodchasan-regular", styles.frase)}>
            <h1>Inovação impulsionada pela diversidade e inclusão.</h1>
          </div>
        </div>
        <div className={styles.form}>
          <div>
            <div className={styles.widgets}>
              <Widgets />
            </div>
            
          </div>
          <div className={styles["form-login"]}>
              <h1 className={clsx("titan-one-regular", styles.titulo)}>
                Corp <br />
                Solutions
              </h1>
              <p>Inovação impulsionada pela diversidade e inclusão.</p>
              <form >
                <div className={clsx(styles.label, "kodchasan-regular") }>
                  <label htmlFor="login">Login</label>
                  <input type="text" name="login" id="login" />
                  <label htmlFor="password">Senha</label>
                  <input type="password" name="password" id="password" />
                </div>
                <button className={styles.button} onClick={handleClick}>Entrar</button>
              </form>
            </div>
          <div className={styles.sociais}>
            <a href=""><img src="/x.svg" alt="Logo do X" /></a>
            <a href=""> <img src="/instagram.svg" alt="Logo do Instagram" /></a>
            <a href=""><img src="/linkedin.svg" alt="" /></a>
          </div>
        </div>
      </section>
    </>
  );
}

export { Login };
