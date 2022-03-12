import React, { useEffect } from "react";
import styles from "./catalogo.module.sass";
import { AgGridReact } from "ag-grid-react";
import { useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BsTrash } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { Tabs, Tab } from "react-bootstrap";

import * as categoriesActions from "../../redux/actions/categoriesActions";

import Switch from "react-switch";
export const Catalogo = ({ categories, switchActiveCategory }) => {
  const agCategoryGrid = useRef();
  const agProductGrid = useRef();

  const [selectedCategoryRow, setSelectedCategoryRow] = useState({});
  const [selectedProductRow, setSelectedProductRow] = useState({});

  const [rowData] = useState([
    {
      producto: "sandwich",
      alias: "sandwich",
      descripcion: "un sandwich",
      precio: 30,
    },
  ]);

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
      checked={props.data.active}
      aria-labelledby="neat-label"
      width={38}
      height={18}
    />
  );

  const ActiveProductSwitch = (props) => (
    <Switch
      className="react-switch"
      onChange={() => {
        // switchActiveCategory(props.data);
      }}
      checked={props.data.active}
      aria-labelledby="neat-label"
      width={38}
      height={18}
    />
  );

  const getSelectedCategoryRow = () => {
    //sometimes is undefined, so assigning with ternary operator to avoid crashing when 
    //getting is keys
    setSelectedCategoryRow(agCategoryGrid.current.api.getSelectedRows()[0] || {});
    
  };

  // useEffect(()=>{
  //   agCategoryGrid.current.api.setSelected(selectedCategoryRow)
  // },[])

  const getSelectedProductRow = () => {
    setSelectedProductRow(agProductGrid.current.api.getSelectedRows()[0]  || {});
  };
  const ActionColumn = () => (
    <div>
      <BsTrash />
    </div>
  );

  const [categoriesColumns] = useState([
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
  ]);
  const [productsColumns] = useState([
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
      field: "price",
      resizable: true,
      width: 80,
      valueFormatter: (params) => currencyFormatter(params.data.price, "$"),
    },
    {
      headerName: "Acciones",
      resizable: true,
      width: 80,
      cellRenderer: ActionColumn,
    },
  ]);

  return (
    <div className={styles.categoria}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Cátalogos</h1>
        </div>
        <div className={styles.tableContainer}>
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
                    rowData={selectedCategoryRow?.products}
                    columnDefs={productsColumns}
                    rowSelection={"single"}
                    onFirstDataRendered={onFirstDataRendered}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
