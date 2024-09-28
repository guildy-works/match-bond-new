import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { EventData } from "@/models/fetchEvents";
import Link from "next/link";

interface EventCardProps {
    event: EventData;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const date =  event.date ? event.date :new Date();
    const formattedDate = date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <FadeAndSlideScrollTriggerAnimation
            className="cursor-pointer"
            innerClassName="flex flex-col h-full drop-shadow-md rounded-lg overflow-hidden transition-all bg-white hover:drop-shadow-2xl"
        >
            <img src={event.thumbnail?.url} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-grow">
                <p className="text-sm text-gray2 mb-2">{formattedDate}</p>
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-grey1 text-base">{event.summary}</p>
            </div>
            <div className="px-4 py-2 text-right mt-auto">
                <Link href={`/events/${event.id}`} className="text-font2">詳細を見る</Link>
            </div>
        </FadeAndSlideScrollTriggerAnimation>
    );
};
