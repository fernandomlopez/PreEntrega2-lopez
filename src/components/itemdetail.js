import React from "react";
import './itemDetail.css'
import ItemCount from './itemCount';


export const ItemDetail = ({ data }) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div className="containerDetail">
            <div className="detailContainImg">
                <img className="detail_img" src={data.img} alt="" />
            </div>
            <div className="content">
                <h2>{data.nombre}</h2>
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail; 