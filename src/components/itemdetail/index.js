import './index.css'
import React, {useState} from "react";
import ItemCount from '../itemcount';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartcontext";


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
                <img className="detail_img" src={data.image} alt="" />
            </div> 
            <div className="content">
                <h2>{data.title}</h2>
                    <h4>Precio: ${data.price}</h4>
                    <p>{data.description}</p>
                {
                    goToCart 
                    ? <Link to='/cart'><button>Ver Carrito</button></Link>
                    : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                }
            </div>
        </div>
    );
};

export default ItemDetail; 