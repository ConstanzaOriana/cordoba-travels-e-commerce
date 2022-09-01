import React from "react";
import {ItemCount} from 'src\components\ItemCount\ItemCount.jsx';

const Card = ({
    title = "Hola",
    img = "lacumbrecita.jpg",
    price = 600,
    stock = 10
}) => {
    return (
        <div className="card-container">
            <h4>{title}</h4>
            <div>
            <img className="img" src={img} alt={`Imagen del producto ${title}`}/>
            </div>
            <p className="price">{price}</p>
           <p>Stock: {stock}</p>
           <ItemCount stock={10}/>
        </div>
    )
}

export default Card;