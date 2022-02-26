import React from "react";
import styles from "./header.module.sass";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.containerTitle}>
        <h1>POS Qubit - Roch</h1>
      </div>
      <div className={styles.containerButtonsHeader}>
        <div className={styles.left}>a</div>
        <div className={styles.right}>b</div>
      </div>
    </div>
  );
};

export default Header;
