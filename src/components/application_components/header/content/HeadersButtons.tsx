"use client";

import {Button} from "@/components/ui/button";
import LocalizationLogo from "@/public/localization.png";
import CartIcon from "@/public/cart.png";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {ToggleButton} from "@/components/ui/toggle-button";

/**
 * Renders the header buttons component.
 *
 * @TODO : Move only the shoppingcart to a client component.
 * @returns {JSX.Element} The header buttons component.
 */
export function HeadersButtons() {
    const router = useRouter();

    return (
        <div className={"flex flex-row gap-x-3 items-center pr-40"}>
            <ToggleButton/>
            <div className={"bg-clip-text text-transparent bg-pink-500 flex flex-row justify-items-start items-center"}>
                <Image src={LocalizationLogo} alt={"Ponteiro de localização"} width={22}/>
                <span className={"px-1"}>São Paulo, SP</span>
            </div>
            <Button className={"bg-[#F1E9C9] flex space-x-2 p-2 items-center"} variant={"secondary"}
                    onClick={() => router.push("/payment")}>
                <Image src={CartIcon}
                       alt={"Foto de um carrinho de compras para acessar todas as compras realizadas no site"}
                       width={22}/>
            </Button>
        </div>
    )
}