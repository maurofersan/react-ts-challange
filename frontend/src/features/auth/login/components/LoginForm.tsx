import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useAuth } from "../../shared/hooks/useAuth";

interface LoginFormProps {
  onLoginSuccess: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const { isLoading, error } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLoginSuccess(email, password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="password"
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign in"}
      </button>
    </form>
  );
};

export { LoginForm };
