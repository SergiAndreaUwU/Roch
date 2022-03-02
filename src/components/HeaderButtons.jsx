import React from 'react'
import styles from "./header.module.sass";
import { FaUserCheck, FaArrowLeft } from "react-icons/fa";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const HeaderButtons = () => {
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
      <button className="icon-button">
        <FaArrowLeft className="icon-size" />
      </button>

      <div className="icon-button" style={{ display: "flex" }}>
        <span style={{ margin: "auto" }}>CATEGORIA</span>
      </div>
      <button className="icon-button">Cátalogo</button>
    </div>
  </div>
  )
}

function mapStateToProps(state) {
    return {
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
      }
    };
  }
  

export default connect(mapStateToProps,mapDispatchToProps) (HeaderButtons)