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
        <div className={estilos.divContainer}>
            <img src={item.img} alt={item.title} className={estilos.img}/>
            <div>
                <h2 className={estilos.title}>{item.title}</h2>
                <p className={estilos.description}>
                    Experience one of the most beautiful places in all Cordoba!
                </p>
                <h3 className={estilos.price}>${item.price}</h3>
                {cantidad === 0 ? (
                    <ItemCount stock={item.stock} initial={quantity} onAdd={onAdd}/>
                ) : (
                    <Link to="/cart" className={estilos.cartButton}>Ride to cart!</Link>
                )}
            
            </div>
        </div>
    );
};

export default ItemDetail;