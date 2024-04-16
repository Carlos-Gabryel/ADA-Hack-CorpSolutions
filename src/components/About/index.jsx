import styles from "./styles.module.css";
import { TitleText } from "../TitleText";
import { Text } from "../Text";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <TitleText icone="&#x1F31F;" title="Sobre" className={styles.title} />
      <Text
        text="Inovação impulsionada pela diversidade e inclusão."
        className={styles.text}
      />
      <div className={styles.descriptionBox}>
        <Text
          icone="&#x1F30D;"
          text=" Na Corp Solutions, acreditamos que cada indivíduo traz uma perspectiva única e valiosa para a mesa. Estamos comprometidos em criar um ambiente onde todas as vozes sejam ouvidas e valorizadas. É essa diversidade de pensamento que nos impulsiona a encontrar soluções criativas e eficazes para os desafios de nossos clientes."
          textColor="#0f0f0f"
          className={styles.description}
        />
        <br />
        <Text
        icone="&#x1F308;"
          text=" Nossa visão de um futuro de trabalho mais inclusivo vai além de apenas números. Estamos empenhados em promover uma cultura de respeito mútuo, onde cada pessoa se sinta capacitada a contribuir plenamente, independentemente de sua origem, identidade ou experiência. Na Corp Solutions, não apenas aceitamos as diferenças, mas as celebramos."
          textColor="#0f0f0f"
          className={styles.description}
        />
        <br />
        
        <Text
        icone="&#x1F680;"
          text=" Com a expansão de nossa equipe, estamos abrindo portas para talentos diversos e apaixonados. Se você compartilha nossa paixão pela inovação, excelência e diversidade, junte-se a nós nesta jornada emocionante. Vamos criar juntos um futuro de trabalho onde todos possam prosperar e alcançar seu potencial máximo."
          textColor="#0f0f0f"
          className={styles.description}
        />
      </div>
    </div>
  );
};

export { About };
