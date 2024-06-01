"use client"

import Link from "next/link";
import CafeLogo from "@/app/logo.svg"
import Image from "next/image";

export function LogoCafe() {
    return (
      <Link href={"/"}>
        <Image src={CafeLogo} alt={"Café maneiro"}/>
      </Link>
    );
}