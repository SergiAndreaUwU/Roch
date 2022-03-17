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
      deleteOneFromShopList,
      reduxAddOneToShopListWithIndex,
      addToShopList,
      deleteFromShopList,
      alreadyPayed
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
      updatedPaymentInfo(updatedPaymentInfoObj);
    };

    useEffect(() => {
      callbackSetTicketRef(componentRef);
    }, []);

    useEffect(() => {
      const totalPrice = shopList.reduce(
        (acc, el) => acc + el.precio * el.quantity,
        0
      );

      updatedPaymentInfo({ ...paymentInfo, totalPrice: totalPrice.toFixed(2) });
    }, [shopList]);

    return (
      <div className={styles.menu}>
        {/* left */}
        <div className={styles.left} ref={componentRef}>
          <div className={styles.shopListContainer}>
            <Ticket
              noTicket={noTicket}
              cajeroNombre={cajeroNombre}
              shopList={shopList}
              deleteOneFromShopList={
                deleteOneFromShopList
              }
              reduxAddOneToShopListWithIndex={reduxAddOneToShopListWithIndex}
              addToShopList={addToShopList}
              deleteFromShopList={deleteFromShopList}
            />
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
          alreadyPayed={alreadyPayed}
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
    alreadyPayed: state.alreadyPayed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reduxAddOneToShopListWithIndex: bindActionCreators(
      shopListActions.addOneToShopListWithIndex,
      dispatch
    ),
    deleteOneFromShopList: bindActionCreators(
      shopListActions.deleteOneFromShopList,
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
    addToShopList: bindActionCreators(shopListActions.addToShopList, dispatch),
    deleteFromShopList: bindActionCreators(shopListActions.deleteFromShopList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
