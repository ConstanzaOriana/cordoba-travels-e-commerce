import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import estilos from './card.module.css'

const Card = ({
    title = "La cumbrecita",
    img = "lacumbrecita.jpg",
    price = 600,
    stock = 10
}) => {
    return (
        <div className={estilos.cardContainer}>
            <h4 className={estilos.title}>{title}</h4>
            <div className={estilos.card}>
            <img className={estilos.img} src={img} alt={`Imagen del producto ${title}`}/>
            </div>
            <p className={estilos.price}>Price: {price}</p>
           <p className={estilos.stock}>Stock: {stock}</p>
           <ItemCount className={estilos.counter} stock={10}/>
        </div>
    )
}

export default Card;