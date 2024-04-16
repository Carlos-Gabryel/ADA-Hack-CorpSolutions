import styles from "./styles.module.css";
import PropTypes from "prop-types";

const TitleText = ({ title, titleColor, icone = null}) => {
  return (
    <p style={{ color: titleColor }} className={styles.title}>
      {icone? <span>{icone}</span> : ''}{title}
    </p>
  );
};

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
};

export { TitleText };
