import { LinkButton } from "@/components/LinkButton";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { EventIntroduceSection } from "../events/EventIntroduceSection";
import { EventData, EventMetaData, fetchEvents } from "@/models/fetchEvents";
import { useEffect, useState } from "react";
import { EventCard } from "../events/EventCard";
import { Loading } from "@/components/Loading";

export const EventsSection = ({ events, isLoading }: { events: EventMetaData[], isLoading: boolean }) => {
    return (
        <div className="mx-auto px-4 sm:px-0 w-full max-w-5xl">

            <div className="mt-3 sm:mt-5">
                <EventIntroduceSection />

                {
                    isLoading
                        ? <Loading />
                        : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                }


            </div>

            <div className="w-full flex justify-center mt-4 sm:mt-8">
                <FadeAndSlideScrollTriggerAnimation className="w-full sm:w-auto">
                    <LinkButton title="VIEW MORE" subTitle="イベント一覧" href="/events"></LinkButton>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

        </div>
    )
}
