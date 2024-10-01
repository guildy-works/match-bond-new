"use client";
import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/views/top/TopSection";
import { NewsSection } from "@/views/top/NewsSection";
import { EventsSection } from "@/views/top/EventsSection";
import AboutSection from "@/views/top/AboutSection";
import { ContactSection } from "@/views/top/ContactSection";
import { ServiceSection } from "@/views/top/ServiceSection";
import { EventMetaData } from "@/models/fetchEvents";
import { NewsMeta } from "@/models/client";

export const Main = ({ events, newses }: { newses: NewsMeta[], events: EventMetaData[] }) => {

    return (<>
        <TopSection />
        <AboutSection />

        <div className="mt-4 sm:mt-12 lg:mt-24 w-full flex justify-center">
            <NewsSection news={newses} />
        </div>

        <ServiceSection />

        <div className="w-full flex justify-center bg-color4 p-3 sm:p-6 md:p-8">
            <EventsSection events={events} />
        </div>

        <ContactSection />

        <ScrollIndicator />
    </>
    )
}