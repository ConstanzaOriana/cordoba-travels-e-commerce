import React, { useState } from 'react';
import estilos from './itemcounter.module.css';

const ItemCount = ({stock, initial =1, onAdd}) => {

  const [count, setCount] = useState(initial);
    
      const addCounter = () => {
        count < stock && setCount(count + 1)
      };

      const sustractCounter = () => {
        count > initial && setCount(count - 1)
      };

      const agregarAlCarrito = () => {
        onAdd(count);
      }

     return (
    <div className={estilos.contador}>
    <button onClick={addCounter} className={estilos.suma}>+</button>
    <p className={estilos.numero}>{count}</p>
    <button onClick={sustractCounter} className={estilos.resta}>-</button>
    <button onClick= {agregarAlCarrito} className={estilos.texto}>Add to cart!</button>
    </div>
  )
}


export default ItemCount;