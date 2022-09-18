import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import estilos from "./form.module.css";

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [days, setDays] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };

    const handleChangeDays = (event) => {
        setDays(event.target.value);
};

    useEffect(() => {
        const handleMouseMove = (e) => {            
        }
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    }
    }, []);
    return (
        <div>
            <form action = "" onSubmit={handleSubmit} className={estilos.form}>
                <input type = "text" placeholder="Your name" name="nombre" value={nombre} onChange={handleChangeNombre} className={estilos.name}/>
                <input type = "text" placeholder="Lastname" value={apellido} onChange={handleChangeApellido} className={estilos.lastName}/>
                <p className={estilos.p}>Select the number of days you stay in Cordoba so we may offer you an experience to remember!</p>
                <select value={days} onChange={handleChangeDays} className={estilos.select}>
                    <option value="One">One day</option>
                    <option value="Two">Two days</option>
                    <option value="Three">Three days</option>
                </select>
                <button className={estilos.button}>Submit</button>
            </form>
        </div>
    );
};

export default Form;