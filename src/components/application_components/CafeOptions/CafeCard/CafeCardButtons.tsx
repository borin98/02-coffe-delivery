"use client";

import {useState} from "react";
import {CafeQuantityButton} from "@/components/application_components/CafeOptions/buttons/CafeQuantity";
import {AddToCartButton} from "@/components/application_components/CafeOptions/buttons/AddToCartButton";

export function CafeCardButtons() {
    const [cafeQuantity, setCafeQuantity] = useState(0);

    const handleCafeQuantityChange = (quantity: number) => {
        setCafeQuantity((prevQuantity) => prevQuantity + quantity);
    }

    return (
        <>
            <CafeQuantityButton cafeQuantity={cafeQuantity} onCafeQuantityChange={handleCafeQuantityChange}/>
            <AddToCartButton cafeQuantity={cafeQuantity}/>
        </>
    )
}