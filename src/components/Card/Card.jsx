import React from 'react';
import estilos from './card.module.css';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className={estilos.card}>
            <img src={item.img} alt="" />
            <div className={estilos.info}>
                <h2>{item.title}</h2>
                <h4>${item.price}</h4>
                <Link
                    to={`/detail/${item.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <button>Check details</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;