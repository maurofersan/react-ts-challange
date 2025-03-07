import React from "react";
import styles from "./Home.module.css";
import Navbar from "../../shared/components/navbar/Navbar";
import { HomeProvider } from "../../features/home/context/HomeProvider";
import { DataList } from "../../features/home/components/DataList";

const Home: React.FC = () => {
  return (
    <HomeProvider>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <h1>Welcome to Home</h1>
          <DataList />
        </div>
      </div>
    </HomeProvider>
  );
};

export default Home;
