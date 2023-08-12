import React  from 'react';
import { Link } from "react-router-dom";
import './item.css'

const Item = ({ info }) => {
  return (
    <div className="indu">
      <Link to={`/detalle/${info.id}`}>
        <div className="induIMG">
          <img src={info.image} alt={info.title}/>
        </div>
        <p>{info.title}</p>
      </Link>
    </div>
  )
}

export default Item;


