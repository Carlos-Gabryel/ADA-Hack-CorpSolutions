import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { MenuHamburguer } from "../../components/DropDownMenu/MenuHamburguer.jsx";
import { Menu } from "../../components/Menu/Menu.jsx";
import { Card } from "../../components/Card/Card.jsx";
import { Widgets } from "../../components/Widgets/Widgets.jsx";
import { Gender } from "../../components/Charts/chartGender.jsx";
// import { Race } from "../../components/Charts/chartRace.jsx";
import { Age } from "../../components/Charts/chartAge.jsx";
import { Locality } from "../../components/Charts/chartLocality.jsx";
import { Etnia } from "../../components/Charts/chartEtnia.jsx";
import { Orientation } from "../../components/Charts/chartOrientacao.jsx";
import { Total } from "../../components/Charts/chartTotal.jsx";
import { Pcd } from "../../components/Charts/chartPcd.jsx";
import { ErrorBoundary } from "react-error-boundary";

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
            <ErrorBoundary
              fallback={<div>Algo deu Errado, Tente novamente.</div>}
            >
              ;
              <Card title="Total de Candidatos">
                <Total />
              </Card>
              <Card title="Orientação Sexual">
                <Orientation />
              </Card>
              <Card title="Etnias">
                <Etnia />
              </Card>
              <Card title="Gênero">
                <Gender />
              </Card>
              <Card title="Localidades">
                <Locality />
              </Card>
              <Card title="Faixa Etária">
                <Age />
              </Card>
              <Card title="Pcd's">
                <Pcd />
              </Card>
            </ErrorBoundary>
          </div>
        </div>
      </section>
    </>
  );
}

export { Painel };
