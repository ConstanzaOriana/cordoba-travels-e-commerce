import React from "react";
import estilos from './main.module.css';


const Main = () => {
    return (
       <main className="main">
        <h1 className={estilos.mainContainer}>Welcome to Córdoba, travelers!</h1>
        <h2 className={estilos.secondContainer}>Get to know the most beautiful places of our province</h2>
        <video className="video" src={require("./video.mp4")} muted autoPlay loop></video>
       </main>
    )
}

export default Main;