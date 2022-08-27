import React from 'react'

const Counter = () => {

    let count = 0;
    const sumar = () => {

    }
  return (
    <div>
    <button onClick={sumar}>+</button>
    <p>Contador: {count}</p>
    </div>
  )
}

export default Counter