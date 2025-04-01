
import React, { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    });

const cartReducer = (state, action) => {
    if  (action.type === "ADD_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = [...state.items, { ...action.item, quantity: 1 }]; 
        }
        
        return { items:updatedItems };
    }
    if (action.type === "REMOVE_ITEM") {
        const updatedItems = state.items.filter((item) => item.id !== action.id);
        return { items: updatedItems };
      }

    return state;
};

    export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    const addItemHandler = (item) => {
        dispatchCartAction({ type: "ADD_ITEM", item });
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: "REMOVE_ITEM", id });
      };

    const contextValue = {
        items: cartState.items,
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