import { useRef } from "react";
import styles from "./styles.module.css";

function ApplyForm() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    alert("Form submitted successfully!");
    formRef.current.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <input type="text" name="nome" placeholder="Nome Completo" />
      <input type="email" name="email" placeholder="E-mail" />
      <input type="text" name="localidade" placeholder="Localidade" />
      <select name="grauEscolaridade">
        <option value="" hidden>
          Grau de Escolaridade
        </option>
        <option value="fundamentalIncompleto">Fundamental Incompleto</option>
        <option value="fundamentalCompleto">Fundamental Completo</option>
        <option value="medioIncompleto">Médio Incompleto</option>
        <option value="medioCompleto">Médio Completo</option>
        <option value="superiorIncompleto">Superior Incompleto</option>
        <option value="superiorCompleto">Superior Completo</option>
        <option value="posGraduacao">Pós-graduação</option>
        <option value="mestrado">Mestrado</option>
        <option value="doutorado">Doutorado</option>
      </select>
      <input type="text" name="experiencia" placeholder="Experiência" />
      <div className={styles.formGroup}>
        <input type="number" name="idade" placeholder="Idade" />
        <select name="genero">
          <option value="" hidden>
            Gênero
          </option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <select name="etnia">
          <option value="" hidden>
            Etnia
          </option>
          <option value="branca">Branca</option>
          <option value="preta">Preta</option>
          <option value="parda">Parda</option>
          <option value="amarela">Amarela</option>
          <option value="indigena">Indígena</option>
        </select>
        <select name="orientacaoSexual">
          <option value="" hidden>
            Orientação Sexual
          </option>
          <option value="heterossexual">Heterossexual</option>
          <option value="homossexual">Homossexual</option>
          <option value="bissexual">Bissexual</option>
          <option value="pansexual">Pansexual</option>
          <option value="assexual">Assexual</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <select name="historicoSocioeconomico">
          <option value="" hidden>
            Histórico Socioeconômico
          </option>
          <option value="baixo">Baixo</option>
          <option value="medio">Médio</option>
          <option value="alto">Alto</option>
        </select>
        <select name="deficiencia">
          <option value="" hidden>
            Deficiência
          </option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
}

export { ApplyForm };
