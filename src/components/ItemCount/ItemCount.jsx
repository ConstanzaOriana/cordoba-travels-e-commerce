import React, { useState } from 'react';
import estilos from './itemcounter.module.css';

const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(initial);
    
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
    <div className={estilos.contador}>
    <button onClick={sumar} className={estilos.suma}>+</button>
    <p className={estilos.numero}>{count}</p>
    <button onClick={restar} className={estilos.resta}>-</button>
    <button className={estilos.texto}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;