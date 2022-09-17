import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
            <form action = "" onSubmit={handleSubmit}>
                <input type = "text" placeholder="Nombre..." name="nombre" value={nombre} onChange={handleChangeNombre}/>
                <input type = "text" placeholder="Apellido..." value={apellido} onChange={handleChangeApellido}/>
                <select value={days} onChange={handleChangeDays}>
                    <option value="One">One day</option>
                    <option value="Two">Two days</option>
                    <option value="Three">Three days</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;