import React, { useState, useEffect } from "react";
// import { products } from "../../Item/Item";
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../firebaseConfig';
import ItemList from "../ItemList/ItemList";
import estilos from './item.module.css';


const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        const itemCollection = collection(db, "productos");
        const q = query(itemCollection, where("category", "==", "nature"));
        getDocs(q)
        .then((res) => {
        const products = res.docs.map((prod) => {
            return {
                id:prod.id,
                ...prod.data()
            };
        });
        setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [categoryName]);

    return (
        <div>
            <div className="main-container">
                <h1 className={estilos.saludo}>{saludo}</h1>
                <video className="video" src={require("./video.mp4")} muted autoPlay loop></video>
            <div>{isLoading ? (<h2>Loading...</h2>) : (<ItemList items={items}/>)}
            </div>
            </div>
        </div>
    );
};
    
export default ItemListContainer;

// const getProducts = () =>
//             new Promise((res, rej) => {
//                 const prodFiltrados = products.filter(
//                     (prod) => prod.category === categoryName
//                 );
//                 setTimeout(() => {
//                     res(categoryName ? prodFiltrados : products);
//                 }, 2000);
//             });

//         getProducts()
//             .then((data) => {
//                 setItems(data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });

//         return () => {
//             setIsLoading(true);
//         } 