"use client";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import WhiteCartIcon from "@/public/carts/white_cart.png";
import {cartReducer, type CartState} from "@/reducers/cart/reducer";
import {api} from "@/trpc/react";
import {useEffect, useReducer, useState} from "react";

// TODO : Add the cart reducer to the state
// TODO : Optimize useEffect to only run when the cart\ state changes
// TODO : Separate and use only use client for necessary components
// TODO ; Change WhiteCartIcon to react-icons and use the icons from the library
export function CafeCards() {
    const {data: initialCartState, isLoading} = api.post.getDefaultCart.useQuery();
    const [clientCartState, setClientCartState] = useState<CartState>({
        cart: []
    });
    const [cafeQuantity, setCafeQuantity] = useState(0);

    const handleCafeQuantityChange = (quantity: number) => {
        setCafeQuantity((prevQuantity) => prevQuantity + quantity);
    }

    useEffect(() => {
        const cartData = localStorage.getItem("cartData");

        if (cartData) {
            setClientCartState(JSON.parse(cartData) as CartState);
        } else if (initialCartState) {
            setClientCartState(initialCartState);
        }
    }, [initialCartState]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!clientCartState) {
        return <div>No items in the cart</div>;
    }

    // const [state, dispatch] = useReducer(cartReducer, {cart: initialCartState});
    const clientCartItems = clientCartState.cart;

    return (
        <div className={"grid grid-cols-4"}>
            {clientCartItems.map((cartItem) => (
                <Card className={"w-64 h-[310px] flex flex-col items-center justify-center shadow-xl"}
                      key={cartItem.id}>
                    <CardHeader className={"flex flex-col gap-y-2"}>
                        <span>{cartItem.cafe_img}</span>
                        <div className={"flex flex-row gap-x-2 justify-center"}>
                            {cartItem.cafe_tags.map((tags) => {
                                return <Badge key={tags}>{tags}</Badge>
                            })}
                        </div>
                    </CardHeader>
                    <CardContent className={"flex flex-col text-center gap-y-2"}>
                        <CardTitle>{cartItem.cafe_name}</CardTitle>
                        <CardDescription>{cartItem.cafe_description}</CardDescription>
                    </CardContent>
                    <CardFooter className={"flex flex-row gap-x-2"}>
                        <div>
                            <span>R$ {cartItem.cafe_price}</span>
                        </div>
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
                        <div>
                            <Button className={"bg-[#4B2995] flex space-x-2 p-2 items-center"} variant={"secondary"}
                                    onClick={() => console.log("Cliquei no botão")}>
                                <Image src={WhiteCartIcon}
                                       alt={"Foto de um carrinho de compras para acessar todas as compras realizadas no site"}
                                       width={22}/>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}