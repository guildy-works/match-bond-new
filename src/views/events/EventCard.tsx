import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { EventData } from "@/models/fetchEvents";
import Link from "next/link";

interface EventCardProps {
    event: EventData;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const date = event.date ? event.date : new Date();
    const formattedDate = date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <FadeAndSlideScrollTriggerAnimation
            innerClassName="flex flex-col h-full drop-shadow-md rounded-lg overflow-hidden bg-white"
        >
            <img src={event.thumbnail?.url} alt={event.title} className="w-full h-48 object-cover" />

            <div className="p-4 flex-grow">
                <p className="text-sm text-gray2 mb-2">{formattedDate}</p>
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-grey1 text-base">{event.summary}</p>
            </div>

            <div className="flex text-center px-4 pb-4 mt-auto w-full">
                <Link href={`/events/${event.id}`} 
                className="w-full bg-color3 px-4 text-white py-2 rounded-md hover:bg-color3/60 transition duration-300"
                >詳細を見る</Link>
            </div>
        </FadeAndSlideScrollTriggerAnimation>
    );
};
