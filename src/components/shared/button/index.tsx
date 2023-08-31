import styles from "./button.module.css";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps): JSX.Element => {
  const { onClick, name, type } = props;

  return (
    <button type={type} onClick={onClick} className={styles.button}>
      <span>{name}</span>
    </button>
  );
};

export default Button;
