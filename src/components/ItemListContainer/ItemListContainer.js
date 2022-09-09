import React, { useEffect, useState } from "react";
import { products } from "../../Item/Item";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import estilos from './item.module.css';

const {categoryName} = useParams();

const ItemListContainer = ( {saludo} ) => {
    const [productList, setProductList] = useState([])
        const getProducts = () => new Promise((resolve, reject) => {
            setTimeout(() =>resolve(products), 2000)
        })

useEffect(() => {
    if(categoryName){
        const getProducts = () => 
        new Promise ((res, rej) => {
            const prodFiltrados = products.filter((prod) => prod.category === categoryName)
            setTimeout(() => {
                res (prodFiltrados);
            }, 2000);
        });
    }
getProducts()
.then(products => setProductList(products))
.catch(error => console.error(error))
}, [])

        return(
            <div className="main-container">
                <h1 className={estilos.saludo}>{saludo}</h1>
                <video className="video" src={require("./video.mp4")} muted autoPlay loop></video>
            <ItemList productList={productList}/>
            </div>
        )
}
    
export default ItemListContainer;
