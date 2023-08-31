import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import rootReducer from "./reducers/root-reducers";

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

const store = configureStore();

export default store;
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
