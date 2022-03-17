import React, { useEffect } from "react";
import styles from "./catalogo.module.sass";
import { AgGridReact } from "ag-grid-react";
import { useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BsTrash } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { Tabs, Tab } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import ModalAdd from "./modalAdd";
import ModalLoad from "../utils/sharedComponents/modalLoad"

import * as categoriesActions from "../../redux/actions/categoriesActions";

import Switch from "react-switch";
export const Catalogo = ({
  categories,
  switchActiveCategory,
  switchActiveProduct,
  deleteCategory,
  deleteProduct,
}) => {
  const agCategoryGrid = useRef();
  const agProductGrid = useRef();

  //don't loose selection on refresh/navigatint between tabs
  let asdasd = {};

  const [selectedCategoryRow, setSelectedCategoryRow] = useState({});

  const notify = (text = "Datos actualizados correctamente") => toast.success(text,{theme: "colored"});
  const [selectedProductRow, setSelectedProductRow] = useState({});
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalLoad, setShowModalLoad] = useState(false);


  const mockSave=()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve()
      },[2000])
    })
  }

  const handleSave = async() => {
    
    setShowModalLoad(true)
    await mockSave()
    setShowModalLoad(false)
    notify("Datos guardados correctamente");
  };

  const addCategory = () => {
    setShowModalAdd(true);
  };

  const onFirstDataRendered = useCallback((params) => {
    agCategoryGrid.current.api.sizeColumnsToFit();
    agProductGrid.current.api.sizeColumnsToFit();
  }, []);

  function currencyFormatter(currency, sign) {
    var sansDec = currency.toFixed(2);
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return sign + `${formatted}`;
  }

  const ActiveCategorySwitch = (props) => (
    <Switch
      className="react-switch"
      onChange={() => {
        switchActiveCategory(props.data);
      }}
      checked={props.data.activo}
      aria-labelledby="neat-label"
      width={38}
      height={18}
    />
  );

  const test = (data) => {
    console.log(data);
    debugger;
    switchActiveProduct(data);
  };

  const ActiveProductSwitch = (props) => (
    <Switch
      className="react-switch"
      onChange={() => {
        test(props.data);
      }}
      checked={props.data.activo}
      aria-labelledby="neat-label"
      width={38}
      height={18}
    />
  );

  const deleteFromRedux = (props) => {
    console.log(props.data);
    if (props.data.productos) {
      //es una categoria a borrar
      deleteCategory(props.data);
    } else {
      //es un producto a borrar
      deleteProduct(props.data);
    }
    debugger;
  };

  const getSelectedCategoryRow = () => {
    //sometimes is undefined, so assigning with ternary operator to avoid crashing when
    //getting is keys
    const asd = agCategoryGrid.current.api.getSelectedRows()[0] || {};
    setSelectedCategoryRow(asd);
    asdasd = asd;
  };

  // useEffect(()=>{
  //   alert("changed:"+JSON.stringify(selectedCategoryRow))
  // },[selectedCategoryRow])

  //update selectedCategoryRow when updated products
  useEffect(() => {
    if (Object.keys(selectedCategoryRow).length > 0) {
      const newCategory = categories.find(
        (category) => category.id === selectedCategoryRow.id
      );
      //when deleting, selectedCategoryRow can be undefined
      setSelectedCategoryRow(newCategory || {});
    }
  }, [categories]);

  // useEffect(()=>{
  //   agCategoryGrid.current.api.setSelected(selectedCategoryRow)
  // },[])

  const getSelectedProductRow = () => {
    setSelectedProductRow(agProductGrid.current.api.getSelectedRows()[0] || {});
  };
  const ActionColumn = (props) => (
    <div>
      <BsTrash
        onClick={() => {
          deleteFromRedux(props);
        }}
      />
    </div>
  );

  const categoriesColumns = [
    {
      headerName: "",
      suppressSizeToFit: true,
      width: 58,
      cellRenderer: ActiveCategorySwitch,
    },
    { field: "nombre", headerName: "Producto", resizable: true },
    { field: "nombre", headerName: "Alias", resizable: true },
    { field: "nombre", headerName: "Descripcion", resizable: true },
    {
      headerName: "Acciones",
      resizable: true,
      width: 80,
      cellRenderer: ActionColumn,
    },
  ];
  const productsColumns = [
    {
      field: "switch",
      headerName: "",
      suppressSizeToFit: true,
      width: 58,
      cellRenderer: ActiveProductSwitch,
    },
    { field: "nombre", headerName: "Producto", resizable: true },
    { field: "nombre", headerName: "Alias", resizable: true },
    { field: "nombre", headerName: "Descripcion", resizable: true },
    {
      headerName: "Precio",
      field: "precio",
      resizable: true,
      width: 80,
      valueFormatter: (params) => currencyFormatter(params.data.precio, "$"),
    },
    {
      headerName: "Acciones",
      resizable: true,
      width: 80,
      cellRenderer: ActionColumn,
    },
  ];

  return (
    <>
      <ToastContainer 
      position="top-center"
      autoClose= {5000}

      />
      <ModalAdd
        show={showModalAdd}
        handleClose={() => {
          setShowModalAdd(false);
        }}
        categories={categories}
      />
      <ModalLoad
        show={showModalLoad}
      />
      <div className={styles.categoria}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1>Cátalogos</h1>
          </div>
          <div className={styles.tableContainer}>
            <div className={styles.headerButtons}>
              <BiAddToQueue
                style={{ width: "30px", height: "30px", marginRight: "20px" }}
                onClick={addCategory}
              />
              <FaSave
                style={{ width: "30px", height: "30px" }}
                onClick={handleSave}
              />
            </div>
            <Tabs defaultActiveKey="categorias" id="uncontrolled-tab-example">
              <Tab eventKey="categorias" title="Categorias">
                <div style={{ height: "100%" }}>
                  <div
                    className="ag-theme-alpine"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <AgGridReact
                      ref={agCategoryGrid}
                      key={"categories-table"}
                      rowData={categories}
                      columnDefs={categoriesColumns}
                      rowSelection={"single"}
                      onFirstDataRendered={onFirstDataRendered}
                      onSelectionChanged={getSelectedCategoryRow}
                    ></AgGridReact>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="productos"
                title="Productos"
                disabled={
                  Object.keys(selectedCategoryRow).length > 0 ? false : true
                }
              >
                <div style={{ height: "100%" }}>
                  <div
                    className="ag-theme-alpine"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <AgGridReact
                      ref={agProductGrid}
                      key={"products-table"}
                      rowData={selectedCategoryRow?.productos}
                      columnDefs={productsColumns}
                      rowSelection={"single"}
                      onSelectionChanged={getSelectedProductRow}
                    ></AgGridReact>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="cajeros" title="Cajeros" disabled>
                c
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    switchActiveCategory: bindActionCreators(
      categoriesActions.switchActiveCategory,
      dispatch
    ),
    switchActiveProduct: bindActionCreators(
      categoriesActions.switchActiveProduct,
      dispatch
    ),
    deleteCategory: bindActionCreators(
      categoriesActions.deleteCategorySuccess,
      dispatch
    ),
    deleteProduct: bindActionCreators(
      categoriesActions.deleteProductSuccess,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
