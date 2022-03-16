import React from "react";
import styles from "../menu.module.sass";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import ModalCobrar from "../../Modales/ModalCobrar";
import { useState } from "react";

const Right = ({
  reduxResetShopList,
  callbackSetPaymentInfo,
  paymentInfo,
  updateAlreadyPayed,
  alreadyPayed
}) => {
  const [showModalCobrar, setShowModalCobrar] = useState(false);

  const handleClick = () => {
    setShowModalCobrar(true);
  };

  const handleClose = () => {
    setShowModalCobrar(false);
  };

  return (
    <div className={styles.right}>
      <ModalCobrar
        show={showModalCobrar}
        reduxResetShopList={reduxResetShopList}
        handleClose={handleClose}
        callbackSetPaymentInfo={callbackSetPaymentInfo}
        paymentInfo={paymentInfo}
        updateAlreadyPayed={updateAlreadyPayed}
      />

      <Outlet />

      <div className={styles.containerCobrar}>
        <button className={styles.cobrarButton} onClick={handleClick} disabled={alreadyPayed}>
          $
          <br />
          COBRAR
        </button>
      </div>
    </div>
  );
};

Right.propTypes = {
  reduxResetShopList: PropTypes.func,
};

export default Right;
