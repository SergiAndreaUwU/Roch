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
          <Route path="categoria" element={<ButtonList data={[1,2,3,4,5]} />} />
          <Route path="productos" element={<ButtonList data={[1,2,3,4,5,6,7,8,9,10,11,12,13]}/>} />
        </Route>
        <Route path="*" element={<Catalogo />} />
      </Routes>
    </div>
  );
};

export default Home;
