import React from "react";
import styles from "./header.module.sass";
import { Outlet } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";
const Header = () => {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.containerTitle}>
        <h2>POS Qubit - Roch</h2>
      </div>
      {/* create new component to avoid render issues
      see tree component (headerButtons) */}
      <HeaderButtons/>
      {/*end of create new component to avoid render issues
      see tree component */}
    </div>
    <Outlet/>
    </>
  );
};

export default Header;
