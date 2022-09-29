import React from 'react';
import { useState,useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Form from '../Form/form';
import estilos from './cart.module.css'
import CartDetail from './cartdetail';


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
            <CartDetail key={prod.id} prod={prod} deleteOne={deleteOne}/>
            ))}
            <h4 className={estilos.total}>Total: ${total}</h4>
            <button onClick={clearCart} className={estilos.delete}>Clear Cart</button>
        <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId}/>
        </div>
    );
};

export default Cart;