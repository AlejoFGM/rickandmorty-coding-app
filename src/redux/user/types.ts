import * as actions from "./actions";

import { ActionType } from "typesafe-actions";

export interface UserData {
  _id?: string;
  email: string;
  password: string;
  nickname: string;
  favoriteCharacters?: number[];
  firebaseUid?: string;
}

export interface ResponseData {
  error: boolean;
  data: UserData;
}

export interface State {
  userData: UserData;
  isLoading: boolean;
  error: boolean;
}

export type ActionsType = ActionType<typeof actions>;
