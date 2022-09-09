import React from "react";
import estilos from './header.module.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className={estilos.nav}>
                    <li className={estilos.lista}>
                        <Link href ="/travel-packages" className={estilos.links}>Travel packages</Link>
                    </li>
                    <li className={estilos.lista}>
                        <Link href ="/gallery" className={estilos.links}>Gallery</Link>
                    </li>
                    <li className={estilos.lista}>
                        <Link href="/about" className={estilos.links}>About Córdoba</Link>
                    </li>
                    <li className={estilos.lista}>
                        <Link href="/contact" className={estilos.links}>Contact</Link>
                    </li>
                </ul>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
            </nav>
        </header>

    )
}

export default Navbar;