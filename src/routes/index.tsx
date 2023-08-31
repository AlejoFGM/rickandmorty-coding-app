import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "../components/pages/login";
import Signup from "../components/pages/signup";
import PrivateRoute from "../components/shared/private-route";
import { tokenListener } from "../helpers/firebase";
import { RootState, useAppSelector } from "../redux/store";
import Characters from "../components/pages/characters";
const AppRoutes = (): JSX.Element => {
  const { authUser: token } = useAppSelector((state: RootState) => state.auth);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    tokenListener();
  }, []);

  useEffect(() => {
    if (token.token) {
      pathname === "/" ? navigate("/characters") : navigate(pathname);
    }
  }, [navigate, pathname, token]);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Signup />}></Route>
      <Route
        path="/characters"
        element={
          <PrivateRoute>
            <Characters />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
export default AppRoutes;
