import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "../../../redux/store";

import { PrivateRouteProps } from "./types";

const PrivateRoute = ({
  redirectPath = "/",
  children,
}: PrivateRouteProps): JSX.Element => {
  const { authUser: token } = useSelector((state: RootState) => state.auth);

  if (!token.token) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRoute;
