import React from "react";
import styles from "../menu.module.sass";

const Right = () => {
  return (
    <div className={styles.right}>
      <div className={styles.buttonsContainer} >
        {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(el=><div className={styles.button}>a</div>)}
      </div>
      <div>
        cobrar
      </div>
    </div>
  );
};

export default Right;
