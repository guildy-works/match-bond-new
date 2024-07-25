'use client'

import Image from "next/image";
import KiraKira from "@/assets/kirakira.png";

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/pages/top/TopSection";
import { NewsSection } from "@/pages/top/NewsSection";
import { ScrollContainer } from "@/libs/ScrollTrigger";
import { EventsSection } from "@/pages/top/EventsSection";
import { eventsMock } from "@/pages/events/eventsMock";

export function generateStaticParams() {
    const events = eventsMock// イベントデータを取得する関数
    return events.map((event) => ({
      id: event.id.toString(),
    }))
  }

export default function EventDetailsPage({ params }: { params: { id: string } }) {
    return <div>イベントID: {params.id}</div>
  }