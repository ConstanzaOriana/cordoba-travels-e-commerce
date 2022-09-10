import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from "../../Item/Item";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const {idProd} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const idProd = products.find((idProd) => idProd.id);
                setTimeout(() => {
                    res(idProd);
                }, 500);
            });
        getProduct()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;