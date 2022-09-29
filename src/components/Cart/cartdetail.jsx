import React from 'react'

const CartDetail = ({prod, deleteOne}) => {
  return (
    <div
    style={{
        border: '1px solid green',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '8px',
        margin: '8px',
        backgroundColor: 'darkgreen',
        color: 'white',
        fontFamily: 'Cambria, Cochin, Georgia, Times, serif',
    }}
>
    <h3>{prod.title}</h3>
    <h3>Quantity: {prod.cantidad}</h3>
    <h3>Price ${prod.price}</h3>
    <button onClick={() => deleteOne(prod.id)}>Delete</button>
</div>
  )}

export default CartDetail;