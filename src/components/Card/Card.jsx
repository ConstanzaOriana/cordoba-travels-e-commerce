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
            <h4>{title}</h4>
            <div className={estilos.card}>
            <img className={estilos.img} src={img} alt={`Imagen del producto ${title}`}/>
            </div>
            <p className={estilos.price}>{price}</p>
           <p>Stock: {stock}</p>
           <ItemCount className={estilos.counter}/>
        </div>
    )
}

export default Card;