import React from "react";
import styles from "../menu.module.sass";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ButtonList = ({ data }) => {
  //let bc documentation
  //https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
  let navigate = useNavigate();
  const arrPaths = window.location.pathname.split("/");
  const currentPath = arrPaths[arrPaths.length - 1];
  const [stateData, setStateData] = useState([]);

  // eslint-disable-next-line no-unused-vars
  let paramProducto = "";

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

  const loadProductos = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    paramProducto = urlParams.get("producto");
    setStateData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  };

  const loadCategorias = () => {
    setStateData([1, 2, 3, 4, 5]);
  };

  useEffect(() => {
    switch (currentPath) {
      case "productos": {
        loadProductos();
        break;
      }
      case "categoria": {
        loadCategorias();
        break;
      }
      default: {
        alert("currentPath doesn't match any path");
        break;
      }
    }
  }, []);

  return (
    <div className={styles.buttonsContainer}>
      {stateData.map((el) => (
        <div className={styles.button} onClick={handleClick}>
          a
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
