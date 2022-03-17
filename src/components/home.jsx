import React,{useState,useEffect} from "react";
import styles from "./home.module.sass";
import Catalogo from "./Catalogo/catalogo";
import Menu from "./Menu/menu";
import Header from "./header";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import ButtonList from "./Menu/Right/buttonList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoriesActions from "../redux/actions/categoriesActions";

const Home = ({loadCategories}) => {

  useEffect(()=>{
    // loadCategories()
  },[])

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
    loadCategories: bindActionCreators(categoriesActions.loadCategories, dispatch)
  };
}


export default connect(()=>{},mapDispatchToProps)(Home);
