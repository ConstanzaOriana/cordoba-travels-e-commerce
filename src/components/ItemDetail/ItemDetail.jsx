import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import estilos from './itemdetail.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const {addToCart, getProductQuantity} = useContext(CartContext);

    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addToCart(item, cantidadItem);
    };

    const quantity = getProductQuantity(item.id)

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
                    <ItemCount stock={item.stock} initial={quantity} onAdd={onAdd} />
                ) : (
                    <Link to="/cart" className={estilos.cartButton}>Go to cart</Link>
                )}
            
            </div>
        </div>
    );
};

export default ItemDetail;