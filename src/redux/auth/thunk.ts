import { Dispatch } from "redux";

import { auth } from "../../helpers/firebase";

import { loginError, loginPending, loginSuccess } from "./actions";
import { signInWithEmailAndPassword } from "firebase/auth";
import { InputData } from "./types";

export const login = (inputData: InputData) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginPending());
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        inputData.email,
        inputData.password
      );

      const { token } = await userCredentials.user.getIdTokenResult();

      dispatch(
        loginSuccess({
          token: token,
        })
      );
    } catch (error: any) {
      return dispatch(loginError(error));
    }
  };
};
