import React from 'react';
import './index.css'
import { useCartContext } from "../../context/cartcontext";

export const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return (
        <>
        <i className="bi bi-cart3"></i>
        <span> {totalProducts() || '' }</span>
        </>
    );
}

export default CartWidget;