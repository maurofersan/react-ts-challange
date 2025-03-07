import { createContext } from "react";

export interface AuthContextType {
  token: string | null;
  isLoading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
