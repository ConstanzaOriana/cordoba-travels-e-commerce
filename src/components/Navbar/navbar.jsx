import React from "react";
import CartWidget from "../header/CartWidget";
import { Link } from "react-router-dom";
import estilos from "../Navbar/navbar.module.css"

const Navbar = (props) => {
    if(props.isFooter){
    return (
            <nav>
                <ul className={estilos.nav}>
                    <Link to ="/category/interior" className={estilos.links}>Travel packages - Interior</Link>
                    <Link to ="/category/ciudad" className={estilos.links}>Travel packages - Ciudad</Link>
                    <Link to="/cart"> <CartWidget className={estilos.cart}/></Link>
                </ul>
            </nav>
    );
}
}

export default Navbar;