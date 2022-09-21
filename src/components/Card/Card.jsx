import React from 'react';
import estilos from './card.module.css';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className={estilos.cardContainer}>
            <div className={estilos.card}>
            <img src={item.img} alt="" className={estilos.img} />
                <h2 className={estilos.title}>{item.title}</h2>
                <h4 className={estilos.price}>${item.price}</h4>
                <Link
                    to={`/detail/${item.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <button className={estilos.details}>Check details</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;