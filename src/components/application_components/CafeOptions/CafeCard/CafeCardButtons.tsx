"use client";

import {useState} from "react";
import {CafeQuantityButton} from "@/components/application_components/CafeOptions/buttons/CafeQuantity";
import {AddToCartButton} from "@/components/application_components/CafeOptions/buttons/AddToCartButton";
import type {CartItem} from "@/context/cartContext";

interface CafeCardButtonsProps {
    cartItem: CartItem
}

// TODO : Add to Cart Button is rendering twice for each call of the component, need to investigate this component
export function CafeCardButtons({cartItem}: CafeCardButtonsProps) {
    const [cafeQuantity, setCafeQuantity] = useState(0);

    const handleCafeQuantityChange = (quantity: number) => {
        setCafeQuantity((prevQuantity) => prevQuantity + quantity);
    }

    return (
        <>
            <CafeQuantityButton cafeQuantity={cafeQuantity} onCafeQuantityChange={handleCafeQuantityChange}/>
            <AddToCartButton cafeQuantity={cafeQuantity} cartItem={cartItem}/>
        </>
    )
}