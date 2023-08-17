import React from "react";
import "./index.css"
import { useCartContext } from "../../context/cartcontext";
import { Link } from 'react-router-dom';
import ItemCart from "../itemcart";

const Cart = () => {
    const { cart, totalPrice, cleanCart } = useCartContext();

    if(cart.length === 0){
        return (
            <>
            <div className="cartEmpty">
            <p>No hay productos en el carrito!</p>
            <Link to='/'><button>Hacer compras</button></Link>
            </div>
            </>
        );
    }   

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p className="totalCompra">
            <button onClick={cleanCart}>Vaciar carrito</button>
            <Link to='/checkout'><button>Terminar Compra</button></Link>
            Total:$ {totalPrice()}
        </p>
        </>
    )
};

export default Cart;