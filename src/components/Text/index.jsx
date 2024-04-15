import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Text = ({ text, textColor }) => {
  return (
    <p style={{ color: textColor }} className={styles.title}>
      {text}
    </p>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export { Text };
