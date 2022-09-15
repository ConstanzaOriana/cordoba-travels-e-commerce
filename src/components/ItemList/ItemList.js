import React from 'react';
import Card from '../Card/Card';

const ItemList = ({items}) => {

  return (
    <div>
        {
            items.map(item => <Card id={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price} category={item.category}/>)
        }
    </div>
  )
}

export default ItemList;