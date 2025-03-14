import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../features/auth/shared/hooks/useAuth";

const PrivateRoute: React.FC = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
