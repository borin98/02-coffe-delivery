import "@/styles/globals.css"
import Image from "next/image";
import CafeSection from "@/public/cafeSection.png"
import {CafeShop} from "@/app/_components/CafeOptions/CafeShop";

/**
 * Renders the root layout of the application.
 * @TODO : Use a better font for the page
 * @TODO : Move to another component the header and the main page content
 * @returns {JSX.Element} The root layout component.
 */
export default function Home() {
    return (
        <main className={"w-full flex flex-col pl-40"}>
            <section className={"flex flex-row gap-x-20 w-full"}>
                <div className={"flex flex-col gap-y-3 w-max-[588px]"}>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <Image className={"ml-40"} src={CafeSection} alt={""} width={360} height={476}/>
            </section>
            <CafeShop/>
        </main>
    );
}
