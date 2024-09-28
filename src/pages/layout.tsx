import "@/app/globals.scss";
import { ScrollContainer, ScrollTrigger } from "@/libs/ScrollTrigger";
import '@splidejs/react-splide/css';
import { Footer } from "@/app/Footer";
import { Header } from "@/app/Header";
import Layout from "@/app/layout";

export default function RootLayout({ children }: any) {
    return (
        <ScrollContainer className="flex min-h-screen flex-col h-svh relative">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </ScrollContainer>
    );
}
