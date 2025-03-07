import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import { useAuth } from "../../../features/auth/shared/hooks/useAuth";

const NotFound: React.FC = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Not Found</p>
      <button
        className={styles.button}
        onClick={() => navigate(token ? "/home" : "/")}
      >
        {token ? "Go to Home" : "Go to Login"}
      </button>
    </div>
  );
};

export default NotFound;
