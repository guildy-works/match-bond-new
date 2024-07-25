'use client'

import Image from "next/image";
import KiraKira from "../../public/kirakira.png";

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { SectionBar } from "@/components/SectionBar";
import { TopSection } from "@/pages/top/TopSection";
import { NewsSection } from "@/pages/top/NewsSection";
import { ScrollContainer } from "@/libs/ScrollTrigger";
import { EventsSection } from "@/pages/top/EventsSection";
import AboutSection from "@/pages/top/AboutSection";

export default function Home() {
    return (
        <>
            <TopSection />
            <AboutSection />

            <div className="mt-4 sm:mt-12 lg:mt-24 w-full flex justify-center">
                <NewsSection />
            </div>

            <div className="mt-4 sm:mt-12 lg:mt-24 w-full flex justify-center bg-color4 p-3 sm:p-6 md:p-8">
                <EventsSection />
            </div>

            <Image src={KiraKira} className="mx-auto" alt="kirakira" width={1200} height={1200} />

            <div className="w-full">

            </div>

            <ScrollIndicator />

        </>
    );
}
