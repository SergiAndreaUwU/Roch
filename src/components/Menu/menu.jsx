import React from "react";
import styles from "./menu.module.sass";
import Right from "./Right/right";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as shopListActions from "../../redux/actions/shopListActions";

const Menu = ({ addToShopList, deleteFromShopList, resetShopList }) => {
  return (
    <div className={styles.menu}>
      {/* left */}
      <div className={styles.left}></div>
      {/* end left */}
      <Right />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCatalogueCategory: state.selectedCatalogueCategory,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToShopListWithIndex: bindActionCreators(
      shopListActions.addToShopListWithIndex,
      dispatch
    ),
    deleteFromShopListWithIndex: bindActionCreators(
      shopListActions.deleteFromShopListWithIndex,
      dispatch
    ),
    resetShopList: bindActionCreators(shopListActions.resetShopList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
