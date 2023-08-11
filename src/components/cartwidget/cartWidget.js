import React from 'react';
import { useCartContext } from "../../context/cartcontext";

export const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return (
        <>
        <i className="bi bi-cart3"><span>0</span></i>
        <span> {totalProducts() || '' }</span>
        </>
    );
}

export default CartWidget;