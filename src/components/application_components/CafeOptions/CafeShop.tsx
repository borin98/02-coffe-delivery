import {CafeCards} from "@/components/application_components/CafeOptions/CafeCards";
import {baloo_2} from "@/styles/fonts";

export function CafeShop() {
  return (
    <div className={"flex flex-col gap-y-14"}>
        <h1 className={`${baloo_2.className} text-4xl font-bold`}>
            Nossos cafés
        </h1>
        <CafeCards/>
    </div>
  );
}