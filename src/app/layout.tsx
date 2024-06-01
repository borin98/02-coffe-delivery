import "@/styles/globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {HeaderComponent} from "@/app/_components/header/HeaderComponent";
import {TRPCReactProvider} from "@/trpc/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <HeaderComponent/>
        <TRPCReactProvider>
            {children}
        </TRPCReactProvider>
        </body>
        </html>
    );
}
