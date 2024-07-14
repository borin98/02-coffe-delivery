"use client";

import {Button} from "@/components/ui/button";
import Image from "next/image";
import WhiteCartIcon from "@/public/carts/white_cart.png";

export function CheckCafeQuantityButton() {
    return (
        <div>
            <Button className={"bg-[#4B2995] flex space-x-2 p-2 items-center"} variant={"secondary"}
                    onClick={() => console.log("Cliquei no botão")}>
                <Image src={WhiteCartIcon}
                       alt={"Foto de um carrinho de compras para acessar todas as compras realizadas no site"}
                       width={22}/>
            </Button>
        </div>
    )
}