import {Roboto, Baloo_2} from "next/font/google";

export const roboto_serif = Roboto({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export const baloo_2 = Baloo_2({
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});