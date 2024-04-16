import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Text = ({ text, textColor, icone = null}) => {
  return (
    <p style={{ color: textColor }} className={styles.title}>
      {icone? <span>{icone} </span>:''}{text}
    </p>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export { Text };
