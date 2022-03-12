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
        <div style={{ width: "30%", border: "1px solid red",fontWeight:"bold" ,paddingLeft:"10px" }} >Cantidad</div>
            <div style={{ width: "50%", border: "1px solid red",fontWeight:"bold",paddingLeft:"10px"  }} >Descripción</div>
            <div style={{ width: "20%", border: "1px solid red",fontWeight:"bold",paddingLeft:"10px" }}>Monto</div>
        {shopList.map((el,index) => (
          <>
            <div style={{ width: "30%", border: "1px solid red",display:"flex", flexFlow:"row nowrap" }} key={el+"1"}>
              <div style={{flexBasis:"25%"}}><AiOutlineMinusCircle onClick={()=>{deleteOne(el,index)}} style={{width:"30px",height:"30px"}}/></div>
              <div style={{flexBasis:"20%"}}>{el.quantity}</div>
              <div style={{flexBasis:"35%"}}><IoIosAddCircleOutline onClick={()=>{addOne(el,index)}} style={{width:"30px",height:"30px"}}/></div>
              <div style={{flexBasis:"20%"}}><BsTrash onClick={()=>{deleteAll(el,index)}} style={{width:"30px",height:"30px"}}/></div>
            </div>
            <div style={{ width: "50%", border: "1px solid red" }} key={el+"2"}>{el.nombre}</div>
            <div style={{ width: "20%", border: "1px solid red",textAlign:"right" }} key={el+"3"}>${(el.price*el.quantity).toFixed(2)}</div>
          </>
        ))}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        urna malesuada, ultricies enim non, ullamcorper lacus. Nunc feugiat
        bibendum purus, dapibus fringilla elit volutpat sit amet. Quisque
        laoreet, augue vel pulvinar pharetra, nisi erat egestas mauris, vel
        efficitur massa massa ac nunc. Praesent pellentesque neque nec nunc
        dignissim mollis. Nam viverra neque vel aliquet volutpat. Nullam gravida
        nisi ut enim facilisis, mollis pellentesque urna consequat. Pellentesque
        a orci non nulla facilisis imperdiet. Praesent auctor ligula sit amet
        orci dignissim vulputate. Sed elementum turpis et nunc vulputate, eget
        bibendum nisl suscipit. Nullam vitae lectus at enim posuere fermentum.
        Quisque semper imperdiet leo, at condimentum metus sollicitudin eget.
        Etiam luctus felis sed diam finibus venenatis. Sed faucibus ex non nisl
        euismod ornare. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Duis suscipit tincidunt quam ut
        sagittis. Nulla velit turpis, viverra at velit vel, lacinia bibendum
        nunc. Aenean id sapien scelerisque, venenatis tortor et, porta nisi.
        Vivamus convallis suscipit nulla vel vestibulum. Integer sit amet
        venenatis turpis. Proin facilisis finibus velit, non viverra lacus
        aliquet ut. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Pellentesque at pulvinar arcu, condimentum ultrices ex. Duis
        tristique eget lacus nec eleifend. Integer porta elit at turpis
        convallis ultrices eget nec enim. Sed eu felis a sem imperdiet ultrices
        sed eget tortor. Quisque ac vestibulum eros. Nulla tincidunt eget turpis
        sed cursus. Nunc et lorem fringilla, aliquet diam eget, vulputate neque.
        Vivamus feugiat, ante et semper aliquam, mi diam interdum velit, non
        mattis magna ligula quis ligula. Nullam dapibus mattis mattis. Nullam
        justo lectus, pellentesque ut est id, ultrices luctus erat. Ut viverra
        vestibulum ante vitae dignissim. Mauris non tortor semper, efficitur
        nisi nec, cursus odio. className aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Nunc eu ultrices
        quam, at consectetur purus. Nam consectetur ante in ullamcorper dapibus.
        Aliquam efficitur ac tortor eu sagittis. Morbi et enim quis mauris
        scelerisque efficitur ac pharetra sem. Nulla porta ipsum quis
        condimentum dictum. Proin auctor porttitor commodo. Pellentesque ut
        justo augue. Nullam a aliquet eros, in imperdiet eros. Integer aliquam
        aliquam nibh vitae cursus. Duis id rutrum erat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Aliquam vitae urna malesuada,
        ultricies enim non, ullamcorper lacus. Nunc feugiat bibendum purus,
        dapibus fringilla elit volutpat sit amet. Quisque laoreet, augue vel
        pulvinar pharetra, nisi erat egestas mauris, vel efficitur massa massa
        ac nunc. Praesent pellentesque neque nec nunc dignissim mollis. Nam
        viverra neque vel aliquet volutpat. Nullam gravida nisi ut enim
        facilisis, mollis pellentesque urna consequat. Pellentesque a orci non
        nulla facilisis imperdiet. Praesent auctor ligula sit amet orci
        dignissim vulputate. Sed elementum turpis et nunc vulputate, eget
        bibendum nisl suscipit. Nullam vitae lectus at enim posuere fermentum.
        Quisque semper imperdiet leo, at condimentum metus sollicitudin eget.
        Etiam luctus felis sed diam finibus venenatis. Sed faucibus ex non nisl
        euismod ornare. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Duis suscipit tincidunt quam ut
        sagittis. Nulla velit turpis, viverra at velit vel, lacinia bibendum
        nunc. Aenean id sapien scelerisque, venenatis tortor et, porta nisi.
        Vivamus convallis suscipit nulla vel vestibulum. Integer sit amet
        venenatis turpis. Proin facilisis finibus velit, non viverra lacus
        aliquet ut. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Pellentesque at pulvinar arcu, condimentum ultrices ex. Duis
        tristique eget lacus nec eleifend. Integer porta elit at turpis
        convallis ultrices eget nec enim. Sed eu felis a sem imperdiet ultrices
        sed eget tortor. Quisque ac vestibulum eros. Nulla tincidunt eget turpis
        sed cursus. Nunc et lorem fringilla, aliquet diam eget, vulputate neque.
        Vivamus feugiat, ante et semper aliquam, mi diam interdum velit, non
        mattis magna ligula quis ligula. Nullam dapibus mattis mattis. Nullam
        justo lectus, pellentesque ut est id, ultrices luctus erat. Ut viverra
        vestibulum ante vitae dignissim. Mauris non tortor semper, efficitur
        nisi nec, cursus odio. className aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Nunc eu ultrices
        quam, at consectetur purus. Nam consectetur ante in ullamcorper dapibus.
        Aliquam efficitur ac tortor eu sagittis. Morbi et enim quis mauris
        scelerisque efficitur ac pharetra sem. Nulla porta ipsum quis
        condimentum dictum. Proin auctor porttitor commodo. Pellentesque ut
        justo augue. Nullam a aliquet eros, in imperdiet eros. Integer aliquam
        aliquam nibh vitae cursus. Duis id rutrum erat.
      </div>
    </div>
  );
});
