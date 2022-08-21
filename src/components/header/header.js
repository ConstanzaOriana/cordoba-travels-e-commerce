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
                        <a href ="#" className={estilos.links}>About Córdoba</a>
                    </li>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}>Contact</a>
                    </li>
                    <li className={estilos.lista}>
                        <a href ="#" className={estilos.links}><img className={estilos.carrito} src={require('./cart.png')}/></a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;