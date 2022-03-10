import React from "react";
import styles from "./menu.module.sass";

//forwardRef required for printing
export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div className={styles.shopList} ref={ref}>
        <div className={styles.ticketHeader}>
          <div className={styles.cajero}>Cajero:</div>
          <div className={styles.noTicket}>No.Ticket:</div>
        </div>
      <div className={styles.ticketBody} style={{display:"flex",flexFlow:"row wrap"}}>
        {" "}
        {[1,2,3,4,5,6,7].map((el)=><div style={{width:"33.3%",border:"1px solid red"}}>{el}</div>)}


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
