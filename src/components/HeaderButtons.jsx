/* eslint-disable eqeqeq */
import React from "react";
import styles from "./header.module.sass";
import { FaUserCheck, FaArrowLeft } from "react-icons/fa";
import {AiFillPrinter} from "react-icons/ai"
import {BsJournalPlus} from "react-icons/bs"
import { updateSelectedMenuCategory } from "../redux/actions/selectedMenuCategoryAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as shopListActions from "../redux/actions/shopListActions"

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useReactToPrint } from 'react-to-print';
import * as alreadyPayedActions from "../redux/actions/alreadyPayedActions"
import * as noTicketActions from "../redux/actions/noTicketActions";
import * as paymentInfoActions from "../redux/actions/paymentInfoActions";

const HeaderButtons = ({
  ticketRef,
  //redux
  selectedMenuCategory,
  updateSelectedMenuCategory,
  alreadyPayed,
  reduxResetShopList,
  updateAlreadyPayed,
  reduxIncrementNoTicket,
  reduxResetPaymentInfo
}) => {
  let navigate = useNavigate();
  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
  });

  const [currentPath, setCurrentPath] = useState("");

  const redirectBackwards = () => {
    if (currentPath === "productos") {
      navigate(`/menu/categoria`);
    } 
  };

  const redirect = () => {
    if (currentPath === "catalogo") {
      navigate(`/menu/categoria`);
    } else {
      navigate(`/catalogo`);
    }
  };

  const handleNewTicket=()=>{
    if(alreadyPayed){
      reduxIncrementNoTicket()
    }
    reduxResetShopList()
    reduxResetPaymentInfo()
    updateAlreadyPayed(false)
  }

  useEffect(() => {
    const arrPaths = window.location.pathname.split("/");
    const cPath = arrPaths[arrPaths.length - 1];
    setCurrentPath(cPath);
  });

  return (
    <div className={styles.containerButtonsHeader}>
      <div className={styles.left}>
        <button className="icon-button" style={{ marginRight: "13px" }} disabled>
          <FaUserCheck className="icon-size" />
        </button>
        <button className={`icon-button ${alreadyPayed && currentPath !== "catalogo"? "glow":""}`} style={{ marginRight: "13px" }} onClick={handleNewTicket} disabled={currentPath === "catalogo"}>
          <BsJournalPlus className="icon-size" />
        </button>
        <button className="icon-button" onClick={handlePrint} disabled={!alreadyPayed || currentPath === "catalogo"}>
          <AiFillPrinter className="icon-size" />
        </button>
      </div>
      <div className={styles.right}>
        <div style={{ flexBasis: "25%" }}>
          {currentPath === "productos" && (
            <button className="icon-button" onClick={redirectBackwards}>
              <FaArrowLeft className="icon-size" />
            </button>
          )}
        </div>
        <div
          className="icon-button"
          style={{ flexBasis: "50%", display: "flex" }}
        >
          <span style={{ margin: "auto",fontWeight:"bold" }}>{currentPath.toUpperCase()}</span>
        </div>
        <div style={{ flexBasis: "25%", display: "flex" }}>
          <button
            className="icon-button"
            style={{ marginLeft: "auto" }}
            onClick={redirect}
          >
            
            {currentPath == "catalogo" ? "CATEGORIA" : "CATALOGO"}
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedMenuCategory: state.selectedMenuCategory,
    alreadyPayed: state.alreadyPayed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSelectedMenuCategory: bindActionCreators(
      updateSelectedMenuCategory,
      dispatch
    ),
    reduxResetShopList: bindActionCreators(
      shopListActions.resetShopList,
      dispatch
    ),
    updateAlreadyPayed: bindActionCreators(
      alreadyPayedActions.updateAlreadyPayed,
      dispatch
    ),
    reduxIncrementNoTicket: bindActionCreators(
      noTicketActions.incrementNoTicket,
      dispatch
    ),
    reduxResetPaymentInfo: bindActionCreators(
      paymentInfoActions.resetPaymentInfo,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButtons);
