import indumentaria from '../dataJson/indumentaria.json';
import React, { useState, useEffect } from 'react';
import ItemDetail from "./itemdetail";
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams();

    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(indumentaria);
        }, 3000);
    });
    useEffect(() => {
        getData.then(res => setData(res.find(indum => indum.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer; 