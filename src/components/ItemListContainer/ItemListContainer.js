import React from "react";
import estilos from './item.module.css';


const ItemListContainer = (props) => {
    return(
        <main className="main">
        <h1 className={estilos.mainContainer}>{props.saludo}</h1>
        <h2 className={estilos.secondContainer}>Get to know the most beautiful places of our province</h2>
        <video className="video" src={require("./video.mp4")} muted autoPlay loop></video>
       </main>
    )
}

export default ItemListContainer;