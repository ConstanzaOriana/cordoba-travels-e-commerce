import React from "react";
import estilos from './header.module.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    if(props.isFooter){
    return (
            <nav>
                <ul className={estilos.nav}>
                    <Link to ="/category/interior" className={estilos.links}>Travel packages - Interior</Link>
                    <Link to ="/category/ciudad" className={estilos.links}>Travel packages - Ciudad</Link>
                </ul>
                    <Link to="/cart">
                        <CartWidget/>
                    </Link>
            </nav>
    );
}
}

export default Navbar;