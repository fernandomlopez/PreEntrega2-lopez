import indumentaria from '../dataJson/indumentaria.json';
import React, { useState, useEffect } from 'react';
import ItemDetail from "./itemdetail";


export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(indumentaria);
        }, 3000);
    });
    useEffect(() => {
        getData.then(res => setData(res));
    }, [])

    return (
      <ItemDetail data={data}/>
    );
};

export default ItemDetailContainer; 