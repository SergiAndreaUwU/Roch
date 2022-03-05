import React from "react";
import styles from "../menu.module.sass";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateSelectedMenuCategory } from "../../../redux/actions/selectedMenuCategoryAction";

const ButtonList = ({
  selectedCatalogueCategory,
  updateSelectedMenuCategory,
  categories,
}) => {
  //let bc documentation
  //https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
  let navigate = useNavigate();
  const arrPaths = window.location.pathname.split("/");
  const currentPath = arrPaths[arrPaths.length - 1];
  const [stateData, setStateData] = useState([]);

  // eslint-disable-next-line no-unused-vars
  let paramProductoId = "";

  const handleProducts = (selected, index) => {};

  const handleCategories = (selected, index) => {
    updateSelectedMenuCategory({ id: index, hasUserSelected: true });
    navigate(`/menu/productos?producto=${index}`);
  };

  const handleClick = (selected, index) => {
    switch (currentPath) {
      case "productos": {
        handleProducts(selected, index);
        break;
      }
      case "categoria": {
        handleCategories(selected, index);
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
    paramProductoId = urlParams.get("producto");
    console.log(paramProductoId);
    setStateData(categories[paramProductoId].products);
  };

  const loadCategorias = () => {
    //checar si categories de REDUX ya esta cargado
    //si esta cargado, asignar a setStateData para hacer display con map
    //sino esta cargado, cargar y asignar a setStateData para hacer display con map
    if (categories?.length === 0) {
      //no cargado, cargar
    } else {
      setStateData(categories);
    }
  };

  useEffect(() => {
    switch (currentPath) {
      case "productos": {
        //avoid navigating without productId param at path url
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        paramProductoId = urlParams.get("producto");
        if (!paramProductoId) {
          navigate(`/menu/categoria`);
          break;
        }
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
      {stateData.map((el, index) => (
        <button
          className={styles.button}
          onClick={(val) => {
            handleClick(el, index);
          }}
        >
          a
        </button>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCatalogueCategory: state.selectedCatalogueCategory,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSelectedMenuCategory: bindActionCreators(
      updateSelectedMenuCategory,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);
