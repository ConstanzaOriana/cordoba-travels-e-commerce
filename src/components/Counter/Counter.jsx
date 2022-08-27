import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);
    let tope = 10;

      const sumar = () => {
        if(count < tope){
        setCount(count + 1);
      } else {
        alert("Can't add more packages!")
      }
    };

      const restar = () => {
        setCount(count - 1);
      };
  return (
    <div>
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    <p>Contador: {count}</p>
    <button>Agregar al carrito</button>
    </div>
  )
}

export default Counter