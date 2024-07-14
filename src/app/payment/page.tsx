"use client";
import {useCart} from "@/context/cartContext";

export default function Payment() {
    const {cart} = useCart();

    return (
        <div>
            {cart.map((item) => (
                <div key={item.id} className={"flex flex-row gap-x-1"}>
                    <h1>{item.cafe_name} : </h1>
                    <span>{item.quantity}</span>
                </div>
            ))}
        </div>
    )
}