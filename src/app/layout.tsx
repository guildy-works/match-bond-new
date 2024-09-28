"use client";

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.scss";
import { ScrollContainer, ScrollTrigger } from "@/libs/ScrollTrigger";
import Link from "next/link";
import { Header, menuItems } from "./Header";

import '@splidejs/react-splide/css';
import { MdFacebook } from "react-icons/md";
import { Footer } from "./Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" >
            <body>
                <ScrollContainer className="flex min-h-screen flex-col h-svh relative">
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </ScrollContainer>
            </body>
        </html>
    );
}
