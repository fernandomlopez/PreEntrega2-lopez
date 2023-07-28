import './itemDetail.css'
import React, {useState} from "react";
import ItemCount from './itemCount';
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartcontext";


export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);;
        addProduct(data, quantity);
    }

    return (
        <div className="containerDetail">
            <div className="detailContainImg">
                <img className="detail_img" src={data.img} alt="" />
            </div> 
            <div className="content">
                <h2>{data.nombre}</h2>
                {
                    goToCart 
                    ? <Link to='/cart'><button>Terminar compra</button></Link>
                    : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                }
            </div>
        </div>
    );
};

export default ItemDetail; 