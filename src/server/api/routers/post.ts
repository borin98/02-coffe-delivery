import {z} from "zod";

import {createTRPCRouter, publicProcedure} from "@/server/api/trpc";
import {fakeDatabase} from "@/server/db/fake_database";
import {cartItemSchema} from "@/reducers/cart/reducer";

export const postRouter = createTRPCRouter({
    getDefaultCart: publicProcedure
        .output(z.object({
            cart: z.array(cartItemSchema),
        }))
        .query(async () => {
            const databaseData = fakeDatabase.map((item) => {
                return {
                    ...item,
                    quantity: 0
                }
            })

            try {
                const validatedOrder = cartItemSchema.parse(databaseData);
                console.log("Validated order:", validatedOrder);
            } catch (e) {
                console.error("Validation error:");
            }

            await new Promise((resolve) => setTimeout(resolve, 3000));
            return {
                cart: databaseData,
            };
        }),
});
