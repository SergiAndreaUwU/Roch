import React from "react";
import styles from "../menu.module.sass";

const ButtonList = ({ data }) => {
  return (
    <div className={styles.buttonsContainer}>
      {data.map((el) => (
        <div className={styles.button}>a</div>
      ))}
    </div>
  );
};

export default ButtonList;
