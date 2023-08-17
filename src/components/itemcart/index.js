import React from "react";
import './index.css';
import { useCartContext } from "../../context/cartcontext";


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    
    return ( 
        <div className="itemCart">
            <img src={product.image} alt={product.title}/>
            <div className="itemCartDetail">
                <h5>{product.title}</h5>
            <ul>
                <li>Cantidad: {product.quantity}</li>
                <li>Precio u.: ${product.price}</li>
                <li>Subtotal: ${product.quantity * product.price}</li>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </ul>
            </div>
        </div>
    )
}

export default ItemCart;
