import indumentaria from '../dataJson/indumentaria.json';
import React, { useEffect, useState } from 'react';
import ItemList from './itemList'
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    const getData = new Promise((resolve) => {
        setTimeout(() => {
            resolve(indumentaria);
        }, 3000);
    });
    useEffect(() => {
        if (categoriaId) {
            getData.then(res => setData(res.filter(indum => indum.categoria === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId]);
    console.log(data)
    return (
        <>
            <ItemList data={data} />
        </>
    );
}
export default ItemListContainer;