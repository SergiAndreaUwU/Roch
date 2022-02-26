import React from "react";
import styles from "../menu.module.sass";
import { useNavigate } from "react-router-dom";

const ButtonList = ({ data }) => {
  //let bc documentation 
  //https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
  let navigate = useNavigate();
  const arrPaths = window.location.pathname.split("/");
  const currentPath = arrPaths[arrPaths.length - 1];
  console.log(currentPath);

  const handleProducts = () => {};
  const handleCategories = () => {
    navigate("/menu/productos");
  };

  const handleClick = () => {
    switch (currentPath) {
      case "productos": {
        handleProducts();
        break;
      }
      case "categoria": {
        handleCategories();
        break;
      }
      default: {
        alert("currentPath doesn't match any path");
        break;
      }
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      {data.map((el) => (
        <div className={styles.button} onClick={handleClick}>
          a
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
