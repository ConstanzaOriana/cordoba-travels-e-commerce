import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import estilos from "../Navbar/navbar.module.css";

const Navbar = (props) => {
    if(props.isFooter){
    return (
            <nav>
                <ul className={estilos.nav}>
                    <Link to="/" className={estilos.links}>Home</Link>
                    <Link to ="/category/nature" className={estilos.links}>Enjoy the Nature</Link>
                    <Link to ="/category/city" className={estilos.links}>Meeting the City</Link>
                    <Link to="/cart"> <CartWidget className={estilos.cart}/></Link>
                </ul>
            </nav>
    );
};
};

export default Navbar;