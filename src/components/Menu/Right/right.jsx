import React from "react";
import styles from "../menu.module.sass";
import { Outlet } from "react-router-dom";

const Right = () => {
  return (
    <div className={styles.right}>
      <Outlet />

      <div>cobrar</div>
    </div>
  );
};

export default Right;
