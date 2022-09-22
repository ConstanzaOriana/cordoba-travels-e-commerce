import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import estilos from "../Navbar/navbar.module.css";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const Navbar = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCat = collection(db, 'categorias');

        getDocs(collectionCat).then((res) => {
            const categorias = res.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCategories(categorias);
        });
    }, []);
    if(props.isFooter){
    return (
            <nav>
                <ul className={estilos.nav}>
                {props.isFooter ? (
                    <>
                        {categories.map((cat) => (
                    <NavLink className={estilos.links} key={cat.id} to={`/category/${cat.route}`}>{cat.name}</NavLink>
                        ))}
                        </>
                         ) : (
                            <a href="https://google.com">GOOGLE</a>
                        )}
                    <Link to="/cart"> <CartWidget className={estilos.cart}/></Link>
                    
                </ul>
            </nav>
    );
};
};

export default Navbar;