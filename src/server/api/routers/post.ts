import {z} from "zod";
import {createTRPCRouter, publicProcedure} from "@/server/api/trpc";
import {fakeDatabase, itemSchema} from "@/server/db/fake_database";

export const cartItemSchema = itemSchema.extend({
    quantity: z.number().int().nonnegative(),
});

// TODO : Zod is not working with the type of the database, need to fix it
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
                console.log("Validated order: ", validatedOrder);
            } catch (e) {
                console.error("Validation error: ", e);
            }

            await new Promise((resolve) => setTimeout(resolve, 3000));
            return {
                cart: databaseData,
            };
        }),
});
