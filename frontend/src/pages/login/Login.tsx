import React from "react";
import styles from "./Login.module.css";
import { LoginForm } from "../../features/auth/login/components/LoginForm";
import { useAuth } from "../../features/auth/shared/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = async (
    email: string,
    password: string
  ): Promise<void> => {
    const success = await signIn(email, password);

    if (success) {
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>Sign in to continue</p>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default Login;
