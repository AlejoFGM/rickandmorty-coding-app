import { Dispatch } from "redux";
import { registerError, registerPending, registerSuccess } from "./actions";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const register = (data: {
  email: string;
  password: string;
  nickname: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(registerPending());
      const response = await axios.post(`${url}/user`, data);
      dispatch(registerSuccess(response.data.data));
    } catch (error) {
      dispatch(registerError(error as string));
    }
  };
};
