import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {api} from "@/trpc/server";
import {CafeQuantityButton} from "@/components/application_components/CafeOptions/buttons/CafeQuantity";
import {CheckCafeQuantityButton} from "@/components/application_components/CafeOptions/buttons/CheckCafeQuantity";

// TODO : Add the cart reducer to the state
// TODO : Optimize useEffect to only run when the cart\ state changes
// TODO : Separate and use only use client for necessary components
// TODO : Change WhiteCartIcon to react-icons and use the icons from the library
// TODO : Use Skeleton when the data is loading
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
                        <CafeQuantityButton/>
                        <CheckCafeQuantityButton/>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}