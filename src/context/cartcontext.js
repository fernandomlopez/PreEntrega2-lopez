import React, { useContext, useState }  from 'react';
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [ cart, setCart] = useState([]);
    
    const addToCart = product => {
        const productInCartIndex = cart.findIndex( item => item.id === product.id);

        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart (prevState => ([
            ...prevState, 
            {
                ...product,
                quantity: 1
            }
        ]))
    };

    const totalPrice = () => { 
        return cart.reduce ((prev,act) => prev + act.price * act.quantity, 0)
    }

    const totalProducts = () => cart.reduce ((acumulador, productAct) => acumulador + productAct.quantity,0);

    const cleanCart = () => setCart([]);

    const  removeProduct = (id) => setCart (cart.filter(product => product.id !== id));


    return (
        <CartContext.Provider value={{
            cleanCart,
            removeProduct,
            addToCart,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
