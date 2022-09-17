import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import estilos from './itemdetail.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (x) => {
        setCantidad(x);
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
                    <h2>You haven't added any packages yet!</h2>
                ) : (
                    <h2>You have added {cantidad} packages!</h2>
                )}
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                <Link to="/cart" className={estilos.cartButton}>Go to cart</Link>
            </div>
        </div>
    );
};

export default ItemDetail;