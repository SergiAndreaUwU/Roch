import React from "react";
import styles from "../menu.module.sass";
import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

const Right = ({reduxResetShopList}) => {
  return (
    <div className={styles.right}>
      <Outlet />

      <div className={styles.containerCobrar}>
        <button className={styles.cobrarButton} onClick={reduxResetShopList}>
          $
          <br />
          COBRAR
        </button>
      </div>
    </div>
  );
};



Right.propTypes = {
  reduxResetShopList:PropTypes.func
}



export default Right;
