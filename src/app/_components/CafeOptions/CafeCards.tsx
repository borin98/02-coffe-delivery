import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

export function CafeCards() {
    return (
        <Card className={"w-64 h-[310px] flex flex-col items-center justify-center shadow-xl"}>
            <CardHeader className={"flex flex-col gap-y-2"}>
                <span>Img 1</span>
                <span>Categoria</span>
            </CardHeader>
            <CardContent className={"flex flex-col gap-y-2"}>
                <CardTitle> Café do Brasil</CardTitle>
                <CardDescription>Descrição</CardDescription>
            </CardContent>
            <CardFooter className={"flex justify-between"}>
                <span>R$ 100</span>
                <div className={"flex flex-row gap-x-2"}>
                    <span>+-</span>
                    <span>carrinho</span>
                </div>
            </CardFooter>
        </Card>
    )
}