import React from "react";
import Item from "./item";

export const ItemList = ({ data = [] }) => {
    return (
        data.map(indum => <Item key={indum.id} info={indum} />)
    );
}

export default ItemList;