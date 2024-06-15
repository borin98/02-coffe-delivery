import {z} from "zod";

export const itemSchema = z.object({
    id: z.string(),
    cafe_img: z.string(),
    cafe_tags: z.array(z.string()),
    cafe_name: z.string(),
    cafe_description: z.string(),
    cafe_price: z.number(),
    quantity: z.number(),
});

export type Item = z.infer<typeof itemSchema>;

export const fakeDatabase: Item[] = [
    {
        id: "0",
        cafe_img: "https://i.imgur.com/y2x9w0j.jpg",
        cafe_tags: ["Tradicional"],
        cafe_name: "Expresso Tradicional",
        cafe_description: "O tradicional café feito com água quente e grãos moídos",
        cafe_price: 9.90,
        quantity: 0,
    },
    {
        id: "1",
        cafe_img: "https://i.imgur.com/y2x9w0j.jpg",
        cafe_tags: ["Tradicional"],
        cafe_name: "Expresso Americano",
        cafe_description: "Expresso diluído, menos intenso que o tradicional",
        cafe_price: 9.90,
        quantity: 0,
    },
    {
        id: "2",
        cafe_img: "https://i.imgur.com/y2x9w0j.jpg",
        cafe_tags: ["Tradicional"],
        cafe_name: "Expresso cremoso",
        cafe_description: "Café expresso tradicional com espuma cremosa",
        cafe_price: 9.90,
        quantity: 0,
    },
    {
        id: "3",
        cafe_img: "https://i.imgur.com/y2x9w0j.jpg",
        cafe_tags: ["Tradicional", "Gelado"],
        cafe_name: "Expresso Gelado",
        cafe_description: "Café expresso tradicional com espuma gelada",
        cafe_price: 9.90,
        quantity: 0,
    },

];