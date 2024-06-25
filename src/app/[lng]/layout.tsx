'use client';

import {darker_grotesque} from "@/lib/font";
import {ChildrenProps} from "@/types/childrenProps";
import {ThemeProvider} from "next-themes";
import {SessionProvider} from "next-auth/react";
import { cn } from "@/lib/utils";

export default function BodyLayout({children} : ChildrenProps) {
    return (
        <body
            suppressHydrationWarning
            className={cn(`min-h-screen bg-white text-zinc-800 overflow-y-hidden dark:bg-zinc-800 dark:text-white ${darker_grotesque.className} antialiased overflow-y-hidden`, darker_grotesque.variable)}>
                <SessionProvider refetchInterval={4 * 60}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange={false}>
                        {children}
                    </ThemeProvider>
                </SessionProvider>
        </body>
    );
}