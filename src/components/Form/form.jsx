import React from "react";
import { useState } from "react";

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };    
    return (
        <div>
            <form action = "" onSubmit={handleSubmit}>
                <input type = "text" placeholder="Nombre..." name="nombre" value={nombre} onChange={handleChangeNombre}/>
                <input type = "text" placeholder="Apellido..." value={apellido} onChange={handleChangeApellido}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;