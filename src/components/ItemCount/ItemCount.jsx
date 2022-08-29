import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(0);
    
      const sumar = () => {
        if(count < stock){
        setCount(count + 1);
        console.log(onAdd);
      } else {
        alert("Can't add more packages!")
      }
    };

      const restar = () => {
        setCount(count - 1);
      };

  return (
    <div>
    <button onClick={sumar} className="suma">+</button>
    <button onClick={restar} className="resta">-</button>
    <p className='Numero'>{count}</p>
    <button className='Agregado'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;