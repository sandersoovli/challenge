import React, { createContext, useState } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    });

    export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    }

    const removeItemHandler = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      };

    const contextValue = {
        items: cartItems,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
      );
    };

export default CartContext;