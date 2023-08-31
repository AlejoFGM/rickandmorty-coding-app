import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

export interface AuthUser {
  token: string;
}

export interface State {
  authUser: AuthUser;
  isLoading: boolean;
  error: string | undefined;
  authError: boolean;
  firebaseInitializing: boolean;
}

export interface InputData {
  email: string;
  password: string;
}

export type ActionsType = ActionType<typeof actions>;
