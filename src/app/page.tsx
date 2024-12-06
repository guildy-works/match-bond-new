'use client'

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/views/top/TopSection";
import AboutSection from "@/views/top/AboutSection";
import { ContactSection } from "@/views/top/ContactSection";
import { ServiceSection } from "@/views/top/ServiceSection";
import { fetchAllNewses, News, NewsMeta } from "@/models/client";
import { EventMetaData, fetchEvents } from "@/models/fetchEvents";
import { useEffect, useState } from "react";
import { FeaturesSection } from "@/views/top/FeaturesSection";
import { SnsSection } from "@/views/top/SnsSection";

export default function Home() {


    const [events, setEvents] = useState<EventMetaData[]>([]);
    const [isEventLoading, setIsEventLoading] = useState(true);
    const [isNewsLoading, setIsNewsLoading] = useState(true);

    const [error, setError] = useState(null);

    const [newses, setNewses] = useState<NewsMeta[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsNewsLoading(true)
                const result = await fetchAllNewses();
                setNewses(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsNewsLoading(false);
            }
        };

        const fetchEvent = async () => {
            try {
                setIsEventLoading(true);
                const result = await fetchEvents();
                setEvents(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsEventLoading(false);
            }
        };

        fetchNews();
        fetchEvent();

    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <title>{"Match-Bond 福山"}</title>
            <meta name="description" content={"Match-Bond｜総額〇〇万円お得に婚活！｜初期費用０円｜福山結婚相談所"} />

            <div className="bg_noise"></div>

            <TopSection />

            <FeaturesSection />

            <AboutSection />

            <SnsSection/>

            <ServiceSection />

            <ContactSection />

            <ScrollIndicator />

        </>
    );
}
