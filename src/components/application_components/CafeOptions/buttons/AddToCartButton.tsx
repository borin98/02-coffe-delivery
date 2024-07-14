"use client";

import {Button} from "@/components/ui/button";
import Image from "next/image";
import WhiteCartIcon from "@/public/carts/white_cart.png";
import {type CartItem, useCart} from "@/context/cartContext";

interface AddToCartButtonProps {
    cafeQuantity: number
    cartItem: CartItem
}

export function AddToCartButton({cafeQuantity, cartItem}: AddToCartButtonProps) {
    const {addToCart} = useCart();

    function handleAddToCart(newItemQuantity: number) {
        addToCart({
            ...cartItem,
            quantity: newItemQuantity
        });
    }

    return (
        <div>
            <Button className={"bg-[#4B2995] flex space-x-2 p-2 items-center"} variant={"secondary"}
                    onClick={() => handleAddToCart(cafeQuantity)}>
                <Image src={WhiteCartIcon}
                       alt={"Foto de um carrinho de compras para acessar todas as compras realizadas no site"}
                       width={22}/>
            </Button>
        </div>
    )
}