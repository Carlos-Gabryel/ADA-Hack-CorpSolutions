import { Navbar } from "../../components/Navbar";
import { Home } from "../../components/Home";
import styles from "./styles.module.css";
import { About } from "../../components/About";
import { Goal } from "../../components/Goal";
import { Offer } from "../../components/Offer";
import { Footer } from "../../components/Footer";
import vagas from "../../db/vagas.json";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Home />
      <About />
      <Goal />
      <Offer vaga={vagas}/>
      <Footer />
    </div>
  );
};

export { HomePage };
