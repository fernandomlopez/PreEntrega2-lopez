import React from "react";
import Item from "../item";
import './index.css'
import Loader from "../loader";


export const ItemList = ({ data }) => {
  return (
    <div className="induContain">
      {
      data.length > 0 
      ? data.map((indum) => (
        <Item key={indum.id} info={indum} />
      ))
      : <Loader />
      }
    </div>
  );
};

export default ItemList;