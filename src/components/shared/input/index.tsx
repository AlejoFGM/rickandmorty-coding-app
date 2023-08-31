import React from "react";
import styles from "./input.module.css";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  const { placeholder, name, type, required, error, label, onChange, value } =
    props;
  return (
    <div className={styles.group}>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      <label className={styles.label}>{label}</label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
