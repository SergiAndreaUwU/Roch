import React from "react";
import styles from "./header.module.sass";
import { FaUserCheck, FaArrowLeft } from "react-icons/fa";
import { updateSelectedMenuCategory } from "../redux/actions/selectedMenuCategoryAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { useNavigate } from "react-router-dom";

const HeaderButtons = ({
  selectedMenuCategory,
  updateSelectedMenuCategory,
}) => {
  let navigate = useNavigate();

  const redirect = () => {
    navigate(`/menu/categoria`);
    updateSelectedMenuCategory({
      selectedMenuCategory: 0,
      hasUserSelected: false,
    });
  };

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
          {selectedMenuCategory.hasUserSelected && (
            <button className="icon-button" onClick={redirect}>
              <FaArrowLeft className="icon-size" />
            </button>
          )}
        </div>
        <div
          className="icon-button"
          style={{ flexBasis: "50%", display: "flex" }}
        >
          <span style={{ margin: "auto" }}>CATEGORIA</span>
        </div>
        <div style={{ flexBasis: "25%",display:"flex" }}>
          <button className="icon-button" style={{marginLeft:"auto"}}>Cátalogo</button>
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
