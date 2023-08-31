import React, { useState } from "react";
import Button from "../../shared/button";
import { login } from "../../../redux/auth/thunk";
import { AppDispatch } from "../../../types";
import { RootState, useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";

import styles from "./signup.module.css";
import Input from "../../shared/input";
import { register } from "../../../redux/user/thunk";

const Signup = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const [nicknameInput, setNicknameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      email: emailInput,
      password: passwordInput,
      nickname: nicknameInput,
    };
    dispatch(register(data));
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <div className={styles.inputContainer}>
        <form onSubmit={onSubmit} className={styles.inputContainer}>
          <Input
            label="Nickname"
            type="text"
            value={nicknameInput}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setNicknameInput(e.target.value)}
          />
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
          <Button name="Register" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
