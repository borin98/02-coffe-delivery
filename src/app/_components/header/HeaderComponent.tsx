import {LogoCafe} from "@/app/_components/header/content/LogoCafe";

export function HeaderComponent() {
    return (
        <header className={"w-full flex flex-row justify-between pl-40 py-8"}>
            <LogoCafe/>
            <div className={"flex flex-row gap-x-2 pr-40"}>
                <span>Localização</span>
                <span>Carrinho</span>
            </div>
        </header>
    );
}