/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import styles from "./menu.module.sass";
import Right from "./Right/right";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as shopListActions from "../../redux/actions/shopListActions";
import { ComponentToPrint } from "./ticket";

const Menu = React.forwardRef((props, ref) => {
  const [paymentInfo, setPaymentInfo] = useState({
    totalPrice: 0.0,
    payedWith: 250.0,
  });

  const componentRef = useRef();

  useEffect(() => {
    props.callbackSetTicketRef(componentRef);
  }, []);

  useEffect(() => {
    const totalPrice = props.shopList.reduce(
      (acc, el) => acc + el.price * el.quantity,
      0
    );

    setPaymentInfo({ ...paymentInfo, totalPrice: totalPrice.toFixed(2) });
  }, [props.shopList]);

  return (
    <div className={styles.menu}>
      {/* left */}
      <div className={styles.left}>
        <div className={styles.shopListContainer}>
          <ComponentToPrint ref={componentRef} />
          <div className={styles.reservedSpace}></div>
        </div>
        <div className={styles.shopInfo}>
          Paga: {paymentInfo.payedWith}
          <br />
          Cambio:{" "}
          {paymentInfo.payedWith - paymentInfo.totalPrice >= 0
            ? (paymentInfo.payedWith - paymentInfo.totalPrice).toFixed(2)
            : "0"}
          <br />
          Total:{paymentInfo.totalPrice}
        </div>
      </div>
      {/* end left */}
      <Right reduxResetShopList={props.reduxResetShopList} />
    </div>
  );
});

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCatalogueCategory: state.selectedCatalogueCategory,
    shopList: state.shopList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reduxAddToShopListWithIndex: bindActionCreators(
      shopListActions.addToShopListWithIndex,
      dispatch
    ),
    reduxDeleteFromShopListWithIndex: bindActionCreators(
      shopListActions.deleteFromShopListWithIndex,
      dispatch
    ),
    reduxResetShopList: bindActionCreators(
      shopListActions.resetShopList,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
