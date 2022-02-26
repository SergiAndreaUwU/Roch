import React from "react";
import styles from "./menu.module.sass";
import Left from "./Left/left";
import Right from "./Right/right";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Left />
      <Right />
    </div>
  );
};

export default Menu;
