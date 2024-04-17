import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { MenuHamburguer } from "../../components/DropDownMenu/MenuHamburguer.jsx";
import { Menu } from "../../components/Menu/Menu.jsx";
import { Card } from "../../components/Card/Card.jsx";
import { Widgets } from "../../components/Widgets/Widgets.jsx";

function Painel() {
  return (
    <>
      <section className={clsx(styles.container, styles.height)}>
        {/* Menu Lateral */}
        <Menu name="Usuário Teste" occupation="Analista RH" />

        <div className={styles.panel}>
          {/* Menu Hamburguer */}
          <div className={styles.utils}>
            <MenuHamburguer />
            {/* Componentizar */}

            <div className={styles.widgets}>
              <Widgets />
            </div>
          </div>
          <h1 className={clsx(styles.title, "titan-one-regular")}>Painel</h1>
          <div className={styles.dashboard}>
            <Card title="Total de Candidatos"></Card>
            <Card title="Etnias"></Card>
            <Card title="Gênero"></Card>
            <Card title="Localidades"></Card>
            <Card title="Faixa Etária"></Card>
            <Card title="Escolaridade"></Card>
          </div>
        </div>
      </section>
    </>
  );
}

export { Painel };
