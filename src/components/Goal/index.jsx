import styles from "./styles.module.css";
import image from "../../assets/image-2.png";
import { TitleText } from "../TitleText";
import { Text } from "../Text";

const Goal = () => {
  const goals = [
    "Equipe Multidisciplinar:  Contamos com especialistas em tecnologia, RH e desenvolvimento de software para oferecer soluções inovadoras.",
    "Modelo de Trabalho Flexível: Adotamos um modelo flexível com trabalho remoto e horários adaptáveis para equilibrar vida pessoal e profissional.",
    "Foco em Soluções Inovadoras: Reconhecidos por softwares inovadores que melhoram práticas de recrutamento e cultura organizacional.",
    "Compromisso com a Comunidade: Ativamente engajados em iniciativas sociais, buscando impacto positivo além do mundo corporativo.",
    "Meta de Colaboradores: Meta de dobrar equipe até 2025, alcançando 850 colaboradores, fortalecendo nosso crescimento e diversidade.",
  ];

  return (
    <div className={styles.container} id="goal"> 
      <TitleText icone="&#x1F3AF;" title="Metas" titleColor="#225FA1" className={styles.title} />
      <Text
        text="Inovação impulsionada pela diversidade e inclusão."
        textColor="#0f0f0f"
        className={styles.text}
      />
      <div className={styles.content}>
        <img src={image} alt="Imagem de um homem sentado no chão" />
        <ul className={styles.goalList}>
          {goals.map((goal, index) => {
            const parts = goal.split(": ");
            return (
              <li key={index} className={styles.goalItem}>
                <strong>{parts[0]}:</strong> {parts[1]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { Goal };
