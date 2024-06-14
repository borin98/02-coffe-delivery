import "@/styles/globals.css"
import Image from "next/image";
import CafeSection from "@/public/cafeSection.png"
import {CafeShop} from "@/components/application_components/CafeOptions/CafeShop";
import {baloo_2} from "@/styles/fonts";

/**
 * Renders the root layout of the application.
 * @TODO : Use a better font for the page
 * @TODO : Move to another component the header and the main page content
 * @returns {JSX.Element} The root layout component.
 */
export default function Home() {
    return (
        <main className={"w-full flex flex-col pl-40"}>
            <section className={"flex justify-between"}>
                <div className={"flex flex-col gap-y-4 w-[588px] h-[190px]"}>
                    <h1 className={`${baloo_2.className} text-5xl leading-[3.30rem] font-extrabold`}>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p className={"text-xl font-bold text-[#403937]"}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <Image className={"pr-40"} src={CafeSection} alt={""} width={550}/>
            </section>
            <CafeShop/>
        </main>
    );
}
