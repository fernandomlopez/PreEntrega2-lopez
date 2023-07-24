import indumentaria from '../dataJson/indumentaria.json';
import React, {useEffect, useState} from 'react';
import ItemCount from './itemCount';
import ItemList from './itemList'
import Title from './title';

export const ItemListContainer = () => {
    const [data, setData] = useState ([]); 

    const getData = new Promise ((resolve) => {
        setTimeout(() => {
         resolve(indumentaria);
        }, 3000); 
    }); 
    useEffect(() => {
        getData.then(res => setData(res));
    }, []);
console.log(data)
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }
    return (
        <>
        <Title greeting="Item List Container hecho!"/>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <ItemList data={data} /> 
        </>
        );
}
export default ItemListContainer;