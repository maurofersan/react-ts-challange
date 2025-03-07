import React, { useEffect, useReducer } from "react";
import { useLocalStorage } from "../../../../shared/hooks/useLocalStorage";
import { AuthContext } from "./AuthContext";
import { authReducer } from "../reducers/authReducer";
import { loginEffect } from "../effects/loginEffect";
import { logout } from "../actions/authActions";

interface AuthProviderProp {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const [token, setToken] = useLocalStorage<string | null>("auth-token", null);
  const [state, dispatch] = useReducer(authReducer, {
    token,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    setToken(state.token);
  }, [state.token, setToken]);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    const token = await loginEffect(email, password, dispatch);

    return token !== null;
  };

  const logoutUser = () => {
    dispatch(logout());
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ ...state, signIn, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
