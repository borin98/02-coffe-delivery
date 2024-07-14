"use client";

import {useContext, createContext, type ReactNode, useState} from 'react';
import type {ItemDB} from "@/server/db/fake_database";

export interface CartItem extends ItemDB {
    quantity: number
}

interface CartContextType {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (item: CartItem) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({children}: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(itemToAdd: CartItem) {
        setCartItems((state) => {
            const isItemExists = state.find(item => item.id === itemToAdd.id);
            if (isItemExists) {
                return state.map(item => {
                    if (item.id === itemToAdd.id) {
                        return {...item, quantity: item.quantity + itemToAdd.quantity}
                    }
                    return item
                });
            } else {
                return [...state, {...itemToAdd, quantity: itemToAdd.quantity}]
            }

        })
    }

    function removeFromCart(itemToRemove: CartItem) {
        setCartItems((state) => {
            const isItemExists = state.find(item => item.id === itemToRemove.id)
            if (isItemExists) {
                return state.map(item => {
                    if (item.id === itemToRemove.id) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    return item
                });
            } else {
                const cartWithoutRemovedItem = state.filter(item => item.id !== itemToRemove.id)
                return [...state, ...cartWithoutRemovedItem]
            }

        })
    }

    return (
        <CartContext.Provider value={{cart: cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)