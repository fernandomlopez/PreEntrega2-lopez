import React from "react";
import "./cart.css"
import { useCartContext } from "../../context/cartcontext";
import { addDoc, collection , getFirestore, serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';
import ItemCart from "../itemcart/itemCart";


const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "",
            email: "",
            phone: "",
            address: ""
        },
        Items: cart.map( product => ({id: product.id,title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
        date: serverTimestamp()
    };

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => console.log(id))
    };

    if(cart.length === 0){
        return (
            <>
            <p>No hay productos en el carrito!</p>
            <Link to='/'>Hacer compras</Link>
            </>
        );
    }   

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p className="totalCompra">
            Total:$ {totalPrice()}
            <button onClick={handleClick}>Emitir Compra</button>
        </p>
        </>
    )
};

export default Cart;