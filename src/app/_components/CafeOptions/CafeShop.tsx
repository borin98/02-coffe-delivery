import {CafeCards} from "@/app/_components/CafeOptions/CafeCards";

export function CafeShop() {
  return (
    <div className={"flex flex-col gap-y-14"}>
        <h1>Nossos cafés</h1>

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