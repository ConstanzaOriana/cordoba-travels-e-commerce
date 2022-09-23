import React from 'react';
import { useState,useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Form from '../Form/form';
import estilos from './cart.module.css'


const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const { cart, clearCart, deleteOne, totalPrice } = useContext(CartContext);

    const total = totalPrice();

    const handleId = (id) => {
        setIdCompra(id);
    }

    if (idCompra) {
        return (
            <div>
        <h1 className={estilos.titleOne}>Thank you for your visit!</h1>
        <p className={estilos.id}> Your tracking number is: {idCompra}</p>
        </div>
        )
    }

    if (cart.length === 0) {
        return <h1 className={estilos.titleTwo}>Start your adventure today!</h1>;
    }; 
    

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            {cart.map((prod) => (
                <div
                    key={prod.id}
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
                    <h4>Total: ${total}</h4>
                    <button onClick={() => deleteOne(prod.id)}>Delete</button>
                </div>
            ))}
            <button onClick={clearCart} className={estilos.delete}>Clear Cart</button>
        <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId}/>
        </div>
    );
};

export default Cart;