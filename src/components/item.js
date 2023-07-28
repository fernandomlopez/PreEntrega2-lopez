import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './item.css'

const Item = ({ info }) => {
  return (
    <div className="indu">
      <Link to={`/detalle/${info.id}`}>
        <div className="induIMG">
          <img src={info.img} />
        </div>
        <p>{info.nombre}</p>
      </Link>
    </div>
  )
}

export default Item;


