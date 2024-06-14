import Link from "next/link";
import Image from "next/image";
import CafeLogo from "@/public/logo.svg"

export function LogoCafe() {
    return (
        <Link href={"/"}>
            <Image src={CafeLogo as string} alt={""}/>
        </Link>
    );
}