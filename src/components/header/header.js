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
                        <Link href ="/category/travel-packages" className={estilos.links}>Travel packages</Link>
                    </li>
                    <li className={estilos.lista}>
                        <Link href ="/category/gallery" className={estilos.links}>Gallery</Link>
                    </li>
                    <li className={estilos.lista}>
                        <Link href="/category/about" className={estilos.links}>About Córdoba</Link>
                    </li>
                    <li className={estilos.lista}>
                        <Link href="/category/contact" className={estilos.links}>Contact</Link>
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