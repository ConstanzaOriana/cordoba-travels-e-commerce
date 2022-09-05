import React, { useEffect, useState } from "react";
import { products } from "../../Item/Item";
import ItemList from "../ItemList/ItemList";
import estilos from './item.module.css';


const ItemListContainer = ( {saludo} ) => {
    const [productList, setProductList] = useState([])
        const getProducts = () => new Promise((resolve, reject) => {
            setTimeout(() =>resolve(products), 2000)
        })

useEffect(() => {
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
