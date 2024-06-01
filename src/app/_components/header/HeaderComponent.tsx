import {LogoCafe} from "@/app/_components/header/content/LogoCafe";
import {HeadersButtons} from "@/app/_components/header/content/HeadersButtons";

export function HeaderComponent() {
    return (
        <header className={"w-full flex flex-row justify-between pl-40 py-8"}>
            <LogoCafe/>
            <HeadersButtons/>
        </header>
    );
}