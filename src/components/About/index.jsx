import styles from "./styles.module.css";
import { TitleText } from "../TitleText";
import { Text } from "../Text";

const About = () => {
  return (
    <div className={styles.container}>
      <TitleText title="Sobre" className={styles.title} />
      <Text
        text="Inovação impulsionada pela diversidade e inclusão."
        className={styles.text}
      />
      <div className={styles.descriptionBox}>
        <Text
          text="A Corp Solutions é líder em tecnologia para recursos humanos, oferecendo
        soluções inovadoras para promover uma cultura organizacional inclusiva e
        diversa. Com valores de inovação, excelência e compromisso com a
        diversidade, a empresa planeja dobrar sua equipe até 2025, adotando um
        modelo de trabalho flexível. Acreditamos que a diversidade impulsiona a
        inovação e o crescimento sustentável das organizações, capacitando
        empresas a alcançar seu potencial máximo. Junte-se a nós para um futuro
        de trabalho mais inclusivo e inovador."
          textColor="#0f0f0f"
          className={styles.description}
        />
      </div>
    </div>
  );
};

export { About };
