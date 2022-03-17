import React from "react";
import styles from "./menu.module.sass";
import {BsTrash} from "react-icons/bs"
import { IoIosAddCircleOutline,IoIosAddCircle} from "react-icons/io"
import {AiOutlineMinusCircle,AiFillMinusCircle} from "react-icons/ai"

//forwardRef required for printing
export const Ticket = React.forwardRef(({ noTicket, cajeroNombre,shopList,reduxAddOneToShopListWithIndex,deleteOneFromShopList,addToShopList,deleteFromShopList }, ref) => {

  const addOne=(values,index)=>{
    addToShopList(values)
  }
  const deleteOne=(values,index)=>{
    deleteOneFromShopList(values)
  }
  const deleteAll=(values,index)=>{
    deleteFromShopList(values)
  }
  return (
    <div className={styles.shopList} ref={ref}>
      <div className={styles.ticketHeader}>
        <div className={styles.cajero}>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            Cajero:
          </span>
          {cajeroNombre}
        </div>
        <div className={styles.noTicket}>
          <div
            style={{
              flexBasis: "20%",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            No.Ticket:
          </div>
          <div style={{ flexBasis: "50%", textAlign: "right" }}>{noTicket}</div>
        </div>
      </div>
      <div
        className={styles.ticketBody}
        style={{ display: "flex", flexFlow: "row wrap" }}
      >
        {" "}
        <div style={{ width: "30%",fontWeight:"bold" ,paddingLeft:"10px" }} >Cantidad</div>
            <div style={{ width: "50%",fontWeight:"bold",paddingLeft:"10px"  }} >Descripción</div>
            <div style={{ width: "20%",fontWeight:"bold",paddingLeft:"10px" }}>Monto</div>
        {shopList.map((el,index) => (
          <>
            <div style={{ width: "30%",display:"flex", flexFlow:"row nowrap" }} key={el+"1"}>
              <div style={{flexBasis:"25%"}}><AiOutlineMinusCircle onClick={()=>{deleteOne(el,index)}} style={{width:"30px",height:"30px"}}/></div>
              <div style={{flexBasis:"20%"}}>{el.quantity}</div>
              <div style={{flexBasis:"35%"}}><IoIosAddCircleOutline onClick={()=>{addOne(el,index)}} style={{width:"30px",height:"30px"}}/></div>
              <div style={{flexBasis:"20%"}}><BsTrash onClick={()=>{deleteAll(el,index)}} style={{width:"30px",height:"30px"}}/></div>
            </div>
            <div style={{ width: "50%" }} key={el+"2"}>{el.nombre}</div>
            <div style={{ width: "20%",textAlign:"right" }} key={el+"3"}>${(el.precio*el.quantity).toFixed(2)}</div>
          </>
        ))}
        
      </div>
    </div>
  );
});
