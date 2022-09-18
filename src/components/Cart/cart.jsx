import React from 'react';
// import Form from '../Form/form';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const {clearCart} = useContext(CartContext)
    return (
        <div>
            {/* <Form /> */}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;