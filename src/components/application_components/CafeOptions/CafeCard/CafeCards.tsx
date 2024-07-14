import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {api} from "@/trpc/server";
import {CafeCardButtons} from "@/components/application_components/CafeOptions/CafeCard/CafeCardButtons";

export async function CafeCards() {
    const initialCartState = await api.post.getDefaultCart();

    if (!initialCartState) {
        return <div>No items in the cart</div>;
    }

    const clientCartItems = initialCartState.cart;

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
                        <CafeCardButtons/>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}