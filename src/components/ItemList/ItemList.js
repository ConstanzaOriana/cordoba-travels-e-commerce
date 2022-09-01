import React from 'react';
import Card from '../Card/Card';

const ItemList = ({productList}) => {

  return (
    <div>
        {
            productList.map(item => <Card key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price}/>)
        }
    </div>
  )
}

export default ItemList;