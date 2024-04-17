import { useRef, useState } from "react";
import styles from "./styles.module.css";

function ApplyForm() {
  const formRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    alert("Form submitted successfully!");
    formRef.current.reset();
    setFileName("");
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <div className={styles.formGroup}>
        <input type="text" name="idade" placeholder="Idade" />
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
      <div className={styles.formGroup}>
        <label className={styles.attachButton}>
          <input type="file" onChange={handleFileChange} />
          {fileName ? fileName : "Anexar Currículo"}
        </label>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </div>
    </form>
  );
}

export { ApplyForm };
