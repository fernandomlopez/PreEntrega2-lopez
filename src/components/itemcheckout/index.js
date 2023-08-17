import React from "react";
import './index.css';
import { useCartContext } from "../../context/cartcontext";


const ItemCheckout = ({ product }) => {
    const { removeProduct } = useCartContext();
    
    return ( 
        <div class="card propContain">
        <div class="card-body prop col-6 w-100">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">${product.price}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
    )
}

export default ItemCheckout;
