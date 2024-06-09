import {CafeCards} from "@/app/_components/CafeOptions/CafeCards";
import {baloo_2} from "@/styles/fonts";

export function CafeShop() {
  return (
    <div className={"flex flex-col gap-y-14"}>
        <h1 className={`${baloo_2.className} text-4xl font-bold`}>
            Nossos cafés
        </h1>

        <div className={"grid grid-cols-4 gap-x-8 gap-y-10"}>
            <CafeCards/>
            <CafeCards/>
            <CafeCards/>
            <CafeCards/>

            <CafeCards/>
            <CafeCards/>
            <CafeCards/>
            <CafeCards/>
        </div>
    </div>
  );
}