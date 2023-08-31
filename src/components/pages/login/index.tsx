import React, { useState } from "react";
import Button from "../../shared/button";
import { login } from "../../../redux/auth/thunk";
import { AppDispatch } from "../../../types";
import { RootState, useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";

import styles from "./login.module.css";
import Input from "../../shared/input";

const Login = () => {
  const { authUser: token } = useAppSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch<null> = useDispatch();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = { email: emailInput, password: passwordInput };
    dispatch(login(data));
  };

  console.log(token);

  return (
    <div className={styles.container}>
      <h1>Rick and Morty</h1>
      <div className={styles.inputContainer}>
        <form onSubmit={onSubmit} className={styles.inputContainer}>
          <Input
            label="Email"
            type="text"
            value={emailInput}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setEmailInput(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={passwordInput}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPasswordInput(e.target.value)}
          />
          <Button name="Login" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
