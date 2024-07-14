import {useContext, createContext, type ReactNode, useState} from 'react';
import type {ItemDB} from "@/server/db/fake_database";

interface CartItem extends ItemDB {
    quantity: number
}

interface CartContextType {
    cart: CartItem[]
    addToCart: (item: ItemDB) => void
    removeFromCart: (item: ItemDB) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({children}: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function addToCart(itemToAdd: ItemDB) {
        setCartItems((state) => {
            const isItemExists = state.find(item => item.id === itemToAdd.id);
            if (isItemExists) {
                return state.map(item => {
                    if (item.id === itemToAdd.id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    return item
                });
            } else {
                return [...state, {...itemToAdd, quantity: 1}]
            }

        })
    }

    function removeFromCart(itemToRemove: ItemDB) {
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

export const useCartContext = () => useContext(CartContext)