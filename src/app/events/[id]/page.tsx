'use client'

import Image from "next/image";
import KiraKira from "@/assets/kirakira.png";

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/views/top/TopSection";
import { NewsSection } from "@/views/top/NewsSection";
import { ScrollContainer } from "@/libs/ScrollTrigger";
import { EventsSection } from "@/views/top/EventsSection";
import { eventsMock } from "@/views/events/eventsMock";

export default function EventDetailsPage({ params }: { params: { id: string } }) {
    return <div>イベントID: {params.id}</div>
  }