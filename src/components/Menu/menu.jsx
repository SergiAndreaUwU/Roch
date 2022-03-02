import React from "react";
import styles from "./menu.module.sass";
import Left from "./Left/left";
import Right from "./Right/right";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const Menu = () => {
  return (
    <div className={styles.menu}>
      <Left />
      <Right />
    </div>
  );
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
