import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from "../itemdetail";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'Items', detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [])

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer; 