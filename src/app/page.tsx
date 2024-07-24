'use client'

import Image from "next/image";
import KiraKira from "../../public/kirakira.png";

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { SectionBar } from "@/components/SectionBar";
import { TopSection } from "@/pages/top/TopSection";
import { NewsSection } from "@/pages/top/NewsSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <TopSection />

            {/* News section */}

            <div className="mt-4 sm:mt-24 lg:mt-48 w-full flex justify-center">
                <NewsSection />
            </div>

            <Image src={KiraKira} alt="kirakiraF" width={1200} height={1200} />

            <div className="w-full">

            </div>

            <ScrollIndicator />
        </main>
    );
}
