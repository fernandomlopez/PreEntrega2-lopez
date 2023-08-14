import React from "react";
import './itemCart.css';
import { useCartContext } from "../../context/cartcontext";


const ItemCart = ({ product }) => {
    const { removeProduct, addToCart } = useCartContext();

    return ( 
        <div className="itemCart">
            <img src={product.image} alt={product.title}/>
            <div className="itemCartDetail">
                <p>Tìtulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p><button onClick={addToCart}>+</button>
                <p>Precio u.:$ {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
