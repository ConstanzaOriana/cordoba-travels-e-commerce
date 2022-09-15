import React from "react";
import estilos from './card.module.css';
import { Link } from "react-router-dom";


const Card = ({
    id = 1,
    title = "La cumbrecita",
    img = "lacumbrecita.jpg",
    price = 600,
    stock = 10
}) => {
    return (
        <div className={estilos.cardContainer}>
            <Link to={`/detail/${id}`}>
            <h4 className={estilos.title}>{title}</h4>
            <div className={estilos.card}>
            <img className={estilos.img} src={img} alt={`Imagen del producto ${title}`}/>
            </div>
            <p className={estilos.price}>Price: {price}</p>
            <p className={estilos.stock}>Stock: {stock}</p>
            <butt className={estilos.stock}>Ver detalles</butt>
            </Link>
        </div>
    )
}

export default Card;