import './itemDetail.css'
import React, {useState} from "react";
import ItemCount from '../itemcount/itemCount';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartcontext";


export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addToCart } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);;
        addToCart(quantity);
    }

    return (
        <div className="containerDetail">
            <div className="detailContainImg">
                <img className="detail_img" src={data.image} alt="" />
            </div> 
            <div className="content">
                <h2>{data.title}</h2>
                {
                    goToCart 
                    ? <Link to='/cart'><button>Terminar compra</button></Link>
                    : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                }
            </div>
        </div>
    );
};

export default ItemDetail; 