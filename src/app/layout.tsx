"use client";

import "./globals.scss";
import { ScrollContainer, ScrollTrigger } from "@/libs/ScrollTrigger";
import Link from "next/link";
import { Header, menuItems } from "./Header";

import '@splidejs/react-splide/css';
import { Footer } from "./Footer";
import { Head } from "next/document";
import { Metadata } from "next";


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
