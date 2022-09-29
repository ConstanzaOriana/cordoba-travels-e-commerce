import {addDoc, collection, doc, serverTimestamp, updateDoc,} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import estilos from './form.module.css';

const Form = ({ cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, apellido: apellido },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
            updateprod();
        });
    };

    const updateprod = () => {
        const orderDoc = doc(db, 'orders', '1ZhJcLbZSjWxZdapboFu');
        updateDoc(orderDoc, { total: 100 });
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };

    return (
        <div className={estilos.divContainer}>
            <form action = "" onSubmit={handleSubmit} className={estilos.form}>
                <input type = "text" placeholder="Your name" name="nombre" value={nombre} onChange={handleChangeNombre} className={estilos.name}/>
                <input type = "text" placeholder="Lastname" value={apellido} onChange={handleChangeApellido} className={estilos.lastName}/>
                
                <button className={estilos.button}>Submit</button>
            </form>
        </div>
    );
};

export default Form;