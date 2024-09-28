'use client'

import Image from "next/image";
import KiraKira from "../../public/kirakira.png";

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { SectionBar } from "@/components/SectionBar";
import { TopSection } from "@/views/top/TopSection";
import { NewsSection } from "@/views/top/NewsSection";
import { ScrollContainer } from "@/libs/ScrollTrigger";
import { EventsSection } from "@/views/top/EventsSection";
import AboutSection from "@/views/top/AboutSection";
import { ContactSection } from "@/views/top/ContactSection";
import { ServiceSection } from "@/views/top/ServiceSection";

export default function Home() {
    return (
        <>
            <TopSection />
            <AboutSection />

            <div className="mt-4 sm:mt-12 lg:mt-24 w-full flex justify-center">
                <NewsSection />
            </div>

            <ServiceSection />

            <div className="w-full flex justify-center bg-color4 p-3 sm:p-6 md:p-8">
                <EventsSection />
            </div>

            <ContactSection />

            <ScrollIndicator />

        </>
    );
}
