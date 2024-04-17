import styles from "./styles.module.css";
import { TitleText } from "../TitleText";
import { Text } from "../Text";
import { Button } from "../Button";
import { Link } from "react-router-dom";

const Offer = ( {vaga} ) => {

  return (
    <div className={styles.container} id="offer">
      <TitleText icone="&#x1F4BC;" title="Vagas Abertas" className={styles.title} />
      <Text text="Venha fazer parte do nosso time!" className={styles.text} />
      <div className={styles.offerBox}>
        {vaga.map((item) => (
          <div key={item.id} className={styles.offer}>
            <div>{item.nome}</div>
            <Link to={`/vacancies/${item.id}`}><Button text="Candidatar-se" /></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Offer };
