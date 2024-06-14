"use client";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import WhiteCartIcon from "@/public/carts/white_cart.png";

export function CafeCards() {
    return (
        <Card className={"w-64 h-[310px] flex flex-col items-center justify-center shadow-xl"}>
            <CardHeader className={"flex flex-col gap-y-2"}>
                <span>Img 1</span>
                <Badge>Categoria</Badge>
            </CardHeader>
            <CardContent className={"flex flex-col text-center gap-y-2"}>
                <CardTitle>Café do Brasil</CardTitle>
                <CardDescription>Descrição</CardDescription>
            </CardContent>
            <CardFooter className={"flex flex-row gap-x-2"}>
                <div>
                    <span>R$ 100</span>
                </div>
                <div
                    className={"inline-flex items-center rounded-lg bg-white border border-gray-200 dark:border-gray-800"}>
                    <Button variant={"ghost"}
                            className={"rounded-l-lg px-3 py-2 text-purple-rocket hover:bg-gray-100 dark:hover:bg-gray-800"}>
                        -
                    </Button>
                    <span className={"mx-2 text-sm font-medium"}>
                        0
                    </span>
                    <Button
                        variant={"ghost"}
                        className={"rounded-r-lg px-3 py-2 text-purple-rocket hover:bg-gray-100 dark:hover:bg-gray-800"}>
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
    )
}