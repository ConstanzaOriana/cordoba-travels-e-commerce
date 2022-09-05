import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    const onAdd = (param) => {
        console.log(param);
    };
    return (
        <div>
            <img src={item.img} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <h3>$ {item.price}</h3>
                <ul>
                    {item.lugar?.map((lugar) => {
                        return (
                            <li key={lugar.id}>
                                {lugar.nombre} ${lugar.precio}
                            </li>
                        );
                    })}
                </ul>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;