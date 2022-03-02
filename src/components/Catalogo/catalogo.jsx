import React from "react";
import styles from "./catalogo.module.sass";
import { AgGridReact } from "ag-grid-react";
import { useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Catalogo = () => {
  const agGrid = useRef();

  const [rowData] = useState([
    {
      switch: "a",
      producto: "sandwich",
      alias: "sandwich",
      descripcion: "un sandwich",
      precio: 30,
    },
  ]);

  const onFirstDataRendered = useCallback((params) => {
    agGrid.current.api.sizeColumnsToFit();
  }, []);

  function currencyFormatter(currency, sign) {
    var sansDec = currency.toFixed(2);
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return sign + `${formatted}`;
  }

  const [columnDefs] = useState([
    { field: "switch", headerName: "", suppressSizeToFit: true, width: 50 },
    { field: "producto", headerName: "Producto", resizable: true },
    { field: "alias", headerName: "Alias", resizable: true },
    { field: "descripcion", headerName: "Descripcion", resizable: true },
    {
      headerName: "precio",
      field: "precio",
      resizable: true,
      width: 80,
      valueFormatter: (params) => currencyFormatter(params.data.precio, "$"),
    },

    {
      field: "acciones",
      headerName: "",
      resizable: true,
      width:40,
      suppressSizeToFit: true,
    },
  ]);

  return (
    <div className={styles.categoria}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Cátalogos</h1>
        </div>
        <div className={styles.tabsAndButtons}></div>
        <div className={styles.table}>
          <div
            className="ag-theme-alpine"
            style={{ height: "100%", width: "100%" }}
          >
            <AgGridReact
              ref={agGrid}
              rowData={rowData}
              columnDefs={columnDefs}
              onFirstDataRendered={onFirstDataRendered}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
    }
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Catalogo);
