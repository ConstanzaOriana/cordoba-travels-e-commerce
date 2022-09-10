import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from "../../Item/Item";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { idProd } = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const prod = products.find(
                    (prod) => prod.id === Number(idProd)
                );
                setTimeout(() => {
                    res(prod);
                }, 500);
            });

        getProduct()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idProd]);
    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;