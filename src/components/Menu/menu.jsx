/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import styles from "./menu.module.sass";
import Right from "./Right/right";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as shopListActions from "../../redux/actions/shopListActions";
import { Ticket } from "./ticket";
import * as alreadyPayedActions from "../../redux/actions/alreadyPayedActions";
import * as noTicketActions from "../../redux/actions/noTicketActions";
import * as paymentInfoActions from "../../redux/actions/paymentInfoActions";

const Menu = React.forwardRef(
  (
    {
      callbackSetTicketRef,
      shopList,
      reduxResetShopList,
      updateAlreadyPayed,
      noTicket,
      paymentInfo,
      updatedPaymentInfo,
      incrementNoTicket,
    },
    ref
  ) => {
    const [cajeroNombre, setCajeroNombre] = useState("CAJERO 1");

    //load ticket number (length of historial collection response)
    useEffect(() => {
      // setNoTicket(1)
    }, []);

    const componentRef = useRef();

    const callbackSetPaymentInfo = (value) => {
      const updatedPaymentInfoObj = { ...paymentInfo, ...value };
      debugger;
      updatedPaymentInfo(updatedPaymentInfoObj);
    };

    useEffect(() => {
      callbackSetTicketRef(componentRef);
    }, []);

    useEffect(() => {
      const totalPrice = shopList.reduce(
        (acc, el) => acc + el.price * el.quantity,
        0
      );

      updatedPaymentInfo({ ...paymentInfo, totalPrice: totalPrice.toFixed(2) });
    }, [shopList]);

    return (
      <div className={styles.menu}>
        {/* left */}
        <div className={styles.left} ref={componentRef}>
          <div className={styles.shopListContainer}>
            <Ticket noTicket={noTicket} cajeroNombre={cajeroNombre} />
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
        <Right
          reduxResetShopList={reduxResetShopList}
          callbackSetPaymentInfo={callbackSetPaymentInfo}
          paymentInfo={paymentInfo}
          updateAlreadyPayed={updateAlreadyPayed}
        />
      </div>
    );
  }
);

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCatalogueCategory: state.selectedCatalogueCategory,
    shopList: state.shopList,
    noTicket: state.noTicket,
    paymentInfo: state.paymentInfo,
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
    updateAlreadyPayed: bindActionCreators(
      alreadyPayedActions.updateAlreadyPayed,
      dispatch
    ),
    incrementNoTicket: bindActionCreators(
      noTicketActions.incrementNoTicket,
      dispatch
    ),
    updatedPaymentInfo: bindActionCreators(
      paymentInfoActions.updatePaymentInfo,
      dispatch
    ),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
