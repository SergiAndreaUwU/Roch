import React,{useState} from "react";
import styles from "./home.module.sass";
import Catalogo from "./Catalogo/catalogo";
import Menu from "./Menu/menu";
import Header from "./header";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import ButtonList from "./Menu/Right/buttonList";
import { connect } from "react-redux";

const Home = () => {


  const [ticketRef,setTicketRef]=useState(null)

  const callbackSetTicketRef=(ref)=>{
    setTicketRef(ref)
  }

  return (
    <div className={styles.home}>
      <Routes>
        <Route path="/" element={<Header ticketRef={ticketRef}/>}>
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="menu" element={<Menu callbackSetTicketRef={callbackSetTicketRef}/>}>
            <Route
              path="categoria"
              element={<ButtonList key={"categoriaEl"} />}
            />
            <Route
              path="productos"
              element={<ButtonList key={"productosEl"} />}
            />
            <Route path="/menu"  element={<Navigate to="/menu/categoria" />} />
          </Route>

          <Route path="/" element={<Navigate to="/menu/categoria" />} />
        </Route>
      </Routes>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
    }
  };
}

export default connect(()=>{},mapDispatchToProps)(Home);
