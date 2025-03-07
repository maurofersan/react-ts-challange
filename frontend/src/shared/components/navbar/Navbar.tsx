import React from "react";
import styles from "./Navbar.module.css";
import { useAuth } from "../../../features/auth/shared/hooks/useAuth";

const Navbar: React.FC = () => {
  const { logout, token } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Home</div>
      {token && (
        <button className={styles.logoutButton} onClick={logout}>
          Log out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
