import React from "react";
import estilos from './header.module.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className={estilos.chau}>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>Products</a>
                    </li>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>Gallery</a>
                    </li>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>About us</a>
                    </li>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;