import React from "react";
import estilos from './header.module.css'

const Header = () => {
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
                        <a href ="#" className={estilos.links}>About Cordoba</a>
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