import React from "react";
import styles from "../menu.module.sass";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateSelectedMenuCategory } from "../../../redux/actions/selectedMenuCategoryAction";
import * as shopListActions from "../../../redux/actions/shopListActions";
import * as alreadyPayedActions from "../../../redux/actions/alreadyPayedActions";

const ButtonList = ({
  selectedCatalogueCategory,
  updateSelectedMenuCategory,
  activeCategories,
  addToShopList,
  alreadyPayed,
  updateAlreadyPayed,
}) => {
  //let bc documentation
  //https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
  let navigate = useNavigate();
  const arrPaths = window.location.pathname.split("/");
  const currentPath = arrPaths[arrPaths.length - 1];
  const [stateData, setStateData] = useState([]);

  // eslint-disable-next-line no-unused-vars
  let paramProductoId = "";

  const handleProducts = (selected, index) => {
    console.log(selected);
    debugger
    if (alreadyPayed) {
      //increment number ticket, reset shop list
      //and continue

      //otherwise

      //lock actions until NEW TICKET button in headerbuttons is pressed
      //this will set alreadyPayed to false and will skip this condition block
      return;
    }
    addToShopList(selected);
  };

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
    setStateData(activeCategories[paramProductoId].productos);
  };

  const loadCategorias = () => {
    //checar si categories de REDUX ya esta cargado
    //si esta cargado, asignar a setStateData para hacer display con map
    //sino esta cargado, cargar y asignar a setStateData para hacer display con map
    if (activeCategories?.length === 0) {
      //no cargado, cargar
    } else {
      setStateData(activeCategories);
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
      {stateData.map((el, index) => el.activo?(
        <button
          className={styles.button}
          onClick={(val) => {
            handleClick(el, index);
          }}
        >
          {el.nombre}
        </button>
      ):<></>
      )}
    </div>
  );
};

function mapStateToProps(state) {

  const activeCategories=state.categories.filter(category=>category.activo)
  return {
    activeCategories,
    selectedCatalogueCategory: state.selectedCatalogueCategory,
    alreadyPayed: state.alreadyPayed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSelectedMenuCategory: bindActionCreators(
      updateSelectedMenuCategory,
      dispatch
    ),
    addToShopList: bindActionCreators(shopListActions.addToShopList, dispatch),
    updateAlreadyPayed: bindActionCreators(
      alreadyPayedActions.updateAlreadyPayed,
      dispatch
    ),
    resetShopList: bindActionCreators(shopListActions.resetShopList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);
