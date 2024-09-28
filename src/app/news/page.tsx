'use client'

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import { SectionBar } from "@/components/SectionBar";

import { eventsMock } from "@/views/events/eventsMock";
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation';

export default function EventsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;
    const totalviews = Math.ceil(eventsMock.length / eventsPerPage);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = eventsMock.slice(indexOfFirstEvent, indexOfLastEvent);

    return (
        <div className="w-full flex flex-col justify-center bg-color4 p-3 sm:p-6 md:p-8">
            <div className="mx-auto px-4 sm:px-0 w-full max-w-6xl">
                <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "-10vw" } }}>
                    <SectionBar text="Events" />
                </FadeAndSlideScrollTriggerAnimation>


                <div className="p-6 rounded-lg mb-8">
                    <SkewScrollTriggerAnimation innerClassName="bg-color4">
                        <h2 className="text-2xl font-bold mb-4">Match-Bondイベント情報</h2>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="bg-color4">
                        <p className="mb-4">
                            Match-Bondでは、多様な出会いの機会を提供するために、さまざまなイベントを開催しています。婚活イベントから地域貢献活動まで、幅広い年齢層の方々が参加できるイベントをご用意しております。
                        </p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="bg-color4">
                        <p className="mb-4">
                            私たちのイベントは、単なる出会いの場だけでなく、新しい経験や学びの機会、そして地域社会との繋がりを深める場としても機能しています。
                        </p>   </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="bg-color4">  <ul className="list-disc list-inside mb-4">
                        <li>婚活イベント：20代から50代まで、幅広い年齢層の方々が参加できます</li>
                        <li>友活イベント：新しい友達作りの機会を提供します</li>
                        <li>地域貢献活動：地域社会に貢献しながら、新しい出会いを見つけられます</li>
                        <li>趣味活動：カラオケやボードゲームなど、共通の興味を通じて交流できます</li>
                    </ul>   </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="bg-color4">   <p>
                        各イベントの詳細情報は以下のリストをご覧ください。参加をご希望の方は、各イベントページからお申し込みいただけます。新しい出会いや経験を求めるあなたのご参加を心よりお待ちしております。
                    </p> </SkewScrollTriggerAnimation>
                </div>

                <div className="mx-auto">
                    <FadeAndSlideScrollTriggerAnimation>
                        <h3 className="text-4xl mt-4 sm:mt-8 mb-6">イベント情報</h3>
                    </FadeAndSlideScrollTriggerAnimation>

                    <div className="mt-3 sm:mt-5 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>

                <div className="w-full flex justify-center mt-8">
                    <Pagination
                        currentPage={currentPage}
                        totalviews={totalviews}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}

const Pagination = ({ currentPage, totalviews, onPageChange }: {
    currentPage: number;
    totalviews: number;
    onPageChange: (page: number) => void;
}) => {
    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
                前へ
            </button>
            {[...Array(totalviews)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-color3 text-white' : 'bg-gray-200'
                        }`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => onPageChange(Math.min(totalviews, currentPage + 1))}
                disabled={currentPage === totalviews}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
                次へ
            </button>
        </div>
    );
};
const EventCard: React.FC<{ event: any }> = ({ event }) => {
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <FadeAndSlideScrollTriggerAnimation
            className=" cursor-pointer"
            innerClassName="flex flex-col h-full drop-shadow-md rounded-lg overflow-hidden transition-all bg-white hover:drop-shadow-2xl"
        >

            <img src={event.eyeCatch} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-grow">
                <p className="text-sm text-gray2 mb-2">{formattedDate}</p>
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-grey1 text-base">{event.summary}</p>
            </div>

            <div className="px-4 py-2 text-right mt-auto">
                <Link href={"/events/" + event.id} className="text-font2"　>詳細を見る</Link>
            </div>

        </FadeAndSlideScrollTriggerAnimation>
    );
};