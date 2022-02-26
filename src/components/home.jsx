import React from "react";
import styles from "./home.module.sass";
import Catalogo from "./Catalogo/catalogo";
import Menu from "./Menu/menu";
import Header from "./header";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import ButtonList from "./Menu/Right/buttonList";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div style={{ position: "absolute", top: "0%", left: "50%" }}>
        <button>
          <Link to="/catalogo">catalogo</Link>
        </button>
        <button className="icon-button">
          <Link to="/menu">menu</Link>
        </button>
        <button>
          <Link to="/menu/categoria">categoria</Link>
        </button>
        <button>
          <Link to="/menu/productos">productos</Link>
        </button>
      </div>

      <Routes>
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="menu" element={<Menu />}>
          <Route path="categoria" element={<ButtonList key={"categoriaEl"}/>} />
          <Route path="productos" element={<ButtonList key={"productosEl"}/>} />
          <Route path="/menu" element={<Navigate to="/menu/categoria"/>} />
        </Route>

        <Route path="*" element={<Catalogo />} />
      </Routes>
    </div>
  );
};

export default Home;
