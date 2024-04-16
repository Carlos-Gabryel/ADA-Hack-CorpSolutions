import React from 'react';
import styles from "./styles.module.css";
import { Navbar } from "../Navbar";

const VacancyBE = () => {
  const requisitosVagas = [
    "Experiência: 2+ anos",
    "Grau de Escolaridade: Superior Incompleto",
    "Descrição da vaga: "
  ];

  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <h1 className={styles.title}>Desenvolvedor Front-End</h1>
      <div className={styles.vacancyBox}>
      <div className={styles.requisite}>
        <span><strong>Experiência: </strong>2+ anos</span>
      </div>
      <div className={styles.requisite}>
        <span><strong>Grau de Escolaridade: </strong>Superior Incompleto</span>
      </div>
      <div className={styles.requisite}>
        <p><strong>Descrição da vaga: </strong>A área de “Desenvolvimento” é responsável pelo desenvolvimento de softwares de gestão incríveis. Seus principais objetivos são desenvolver soluções que geram resultado para nossos clientes, com velocidade, qualidade e facilidade de uso.</p>
        <p>Como Desenvolvedor Front-end você terá a responsabilidade de desenvolver soluções para aperfeiçoar a interface de nossos softwares e otimizar a experiência de uso nossos clientes utilizando Javascript, CSS, HTML e jQuery, e conseguirá enxergar os resultados do seu trabalho na prática.</p>
      </div>
      </div>
    </div>
    </>
  );
};

export { VacancyBE };