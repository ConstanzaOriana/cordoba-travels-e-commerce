import React, { useEffect, useState } from "react";
import { products } from "../../Item/Item";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ( ) => {
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
            
            <ItemList productList={productList}/>
            
        )
}
    
export default ItemListContainer;
