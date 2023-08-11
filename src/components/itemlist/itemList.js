import React from "react";
import Item from "../item/item";
import './itemList.css'


export const ItemList = ({ data }) => {
  return (
    <div className="induContain">
      {data.map((indum) => (
        <Item key={indum.id} info={indum} />
      ))}
    </div>
  );
};

export default ItemList;