import React from "react";
import styles from "./home.module.sass";
import Catalogo from "./Catalogo/catalogo";
import Menu from "./Menu/menu";
import Header from "./header";
import { Routes, Route, Link } from "react-router-dom";
import ButtonList from "./Menu/Right/buttonList";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div style={{ position: "absolute", top: "0%", left: "50%" }}>
        <button>
          <Link to="/catalogo">catalogo</Link>
        </button>
        <button>
          <Link to="/menu">menu</Link>
        </button>
      </div>

      <Routes>
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="menu" element={<Menu />}>
          <Route path="categoria" element={<ButtonList/>} />
          <Route path="productos" element={<ButtonList/>} />
        </Route>
        <Route path="*" element={<Catalogo />} />

      </Routes>
    </div>
  );
};

export default Home;
