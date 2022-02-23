import React from "react";
import styles from "./home.module.sass";
import Catalogo from "./Catalogo/catalogo";
import Menu from "./Menu/menu";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <Routes>
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default Home;
