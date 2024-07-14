"use client";

import {Button} from "@/components/ui/button";
import {useState} from "react";

export function CafeQuantityButton() {

    const [cafeQuantity, setCafeQuantity] = useState(0);

    const handleCafeQuantityChange = (quantity: number) => {
        setCafeQuantity((prevQuantity) => prevQuantity + quantity);
    }

    return (
        <div
            className={"inline-flex items-center rounded-lg bg-white border border-gray-200 dark:border-gray-800"}>
            <Button variant={"ghost"} disabled={cafeQuantity === 0}
                    className={"rounded-l-lg px-3 py-2 text-purple-rocket hover:bg-gray-100 dark:hover:bg-gray-800"}
                    onClick={() => handleCafeQuantityChange(-1)}>
                -
            </Button>
            <span className={"mx-2 text-sm font-medium"}>
                        {cafeQuantity}
                    </span>
            <Button
                variant={"ghost"} disabled={cafeQuantity === 100}
                className={"rounded-r-lg px-3 py-2 text-purple-rocket hover:bg-gray-100 dark:hover:bg-gray-800"}
                onClick={() => handleCafeQuantityChange(1)}>
                +
            </Button>
        </div>
    )
}