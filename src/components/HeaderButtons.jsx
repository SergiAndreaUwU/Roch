/* eslint-disable eqeqeq */
import React from "react";
import styles from "./header.module.sass";
import { FaUserCheck, FaArrowLeft } from "react-icons/fa";
import { updateSelectedMenuCategory } from "../redux/actions/selectedMenuCategoryAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderButtons = ({
  selectedMenuCategory,
  updateSelectedMenuCategory,
}) => {
  let navigate = useNavigate();
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

  useEffect(() => {
    const arrPaths = window.location.pathname.split("/");
    const cPath = arrPaths[arrPaths.length - 1];
    setCurrentPath(cPath);
  });

  return (
    <div className={styles.containerButtonsHeader}>
      <div className={styles.left}>
        <button className="icon-button" style={{ marginRight: "13px" }}>
          <FaUserCheck className="icon-size" />
        </button>
        <button className="icon-button" style={{ marginRight: "13px" }}>
          <FaUserCheck className="icon-size" />
        </button>
        <button className="icon-button">
          <FaUserCheck className="icon-size" />
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
          <span style={{ margin: "auto" }}>{currentPath.toUpperCase()}</span>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSelectedMenuCategory: bindActionCreators(
      updateSelectedMenuCategory,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButtons);
