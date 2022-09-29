import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import estilos from './item.module.css';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const itemCollection = collection(db, 'productos');

        const referencia = categoryName
            ? query(itemCollection, where('category', '==', categoryName))
            : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
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

 
