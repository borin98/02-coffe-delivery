import "@/styles/globals.css";
import type {Metadata} from "next";
import {HeaderComponent} from "@/components/application_components/header/HeaderComponent";
import {TRPCReactProvider} from "@/trpc/react";
import {roboto_serif} from "@/styles/fonts";
import {ThemeProvider} from "@/components/ui/theme-provider";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={roboto_serif.className}>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <HeaderComponent/>
            <TRPCReactProvider>
                {children}
            </TRPCReactProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
