import {z} from "zod";

import {createTRPCRouter, publicProcedure} from "@/server/api/trpc";
import {fakeDatabase, itemSchema} from "@/server/db/fake_database";

export const postRouter = createTRPCRouter({
    getDefaultCart: publicProcedure
        .output(z.object({
            database_data: z.array(itemSchema),
        }))
        .query(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            return {
                database_data: fakeDatabase,
            };
        }),
});
