import React from "react";
import styles from "./styles.module.css";
import vagas from "../../db/vagas.json";
import { ApplyForm } from "../../components/ApplyForm";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

const Vacancies = () => {
  const { id } = useParams();
  const vaga = vagas.find((vaga) => vaga.id === id);

  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles["nav-links"]}>
          <li>
            <Link to="/">Voltar</Link>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>{vaga.nome}</h1>
        <div className={styles.vacancyBox}>
          <div className={styles.requisite}>
            <span>
              <strong>Experiência: </strong>
              {vaga.experiencia}
            </span>
          </div>
          <div className={styles.requisite}>
            <span>
              <strong>Grau de Escolaridade: </strong>
              {vaga.escolaridade}
            </span>
          </div>
          <div className={styles.requisite}>
            <span>
              <strong>Descrição da vaga: </strong>
              {vaga.descricao}
            </span>
          </div>
        </div>
      </div>
      <ApplyForm />
      <Footer />
    </>
  );
};

export { Vacancies };
