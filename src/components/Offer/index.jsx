import styles from "./styles.module.css";
import { TitleText } from "../TitleText";
import { Text } from "../Text";
import { Button } from "../Button";

const Offer = () => {
  const vagas = [
    "Desenvolvedor Front-End",
    "Desenvolvedo Back-End",
    "DevOps",
    "Cientista de Dados",
  ];

  return (
    <div className={styles.container}>
      <TitleText title="Vagas Abertas" className={styles.title} />
      <Text text="Venha fazer parte do nosso time!" className={styles.text} />
      <div className={styles.offerBox}>
        {vagas.map((vaga, index) => (
          <div key={index} className={styles.offer}>
            <div>{vaga}</div>
            <Button text="Candidatar-se" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Offer };
