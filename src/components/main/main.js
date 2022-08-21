import React from "react";
import estilos from './main.module.css'


const Main = () => {
    return (
       <main>
        <h1 className={estilos.mainContainer}>Welcome, Córdoba travelers!</h1>
        <h2 className={estilos.secondContainer}>Get to know the most beautiful places of our province</h2>
       </main>
    )
}

export default Main;