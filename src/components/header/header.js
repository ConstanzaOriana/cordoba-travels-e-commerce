import React from "react";
import estilos from './header.module.css';
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className={estilos.nav}>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>Travel packages</a>
                    </li>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>Gallery</a>
                    </li>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>About Córdoba</a>
                    </li>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>Contact</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </header>

    )
}

export default Navbar;