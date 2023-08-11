import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import ItemList from '../itemlist/itemList'
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'Items');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('categoryId', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
               .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoriaId]);
    return (
        <>
            <ItemList data={data} />
        </>
    );
}
export default ItemListContainer;