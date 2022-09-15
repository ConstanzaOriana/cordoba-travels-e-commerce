import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import estilos from './itemdetail.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (arg) => {
        setCantidad(arg);
    };

    return (
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <div className="info">
                <h2>{item.title}</h2>
                <p className={estilos.description}>
                    Experience one of the most beautiful places in all Cordoba!
                </p>
                <h3>${item.price}</h3>
                {cantidad === 0 ? (
                    <h2>Cantidad es 0</h2>
                ) : (
                    <h2>Cantidad es {cantidad}</h2>
                )}
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                <Link to="/cart" className={estilos.cartButton}>Ir al carrito</Link>
            </div>
        </div>
    );
};

export default ItemDetail;