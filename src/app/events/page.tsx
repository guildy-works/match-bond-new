"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';
import { EventData, fetchEvents } from '@/models/fetchEvents';
import { EventCard } from '@/views/events/EventCard';

const EventsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const eventsPerPage = 6;

    const [eventsMock, setEventsMock] = useState<EventData[]>([])
    useEffect(() => {
        fetchEvents().then((events) => {
            setEventsMock(events)
        })
    }, [])


    const totalPages = Math.ceil(eventsMock.length / eventsPerPage);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = eventsMock.slice(indexOfFirstEvent, indexOfLastEvent);

    return (
        <div className="w-full flex flex-col justify-center bg-color4 p-3 sm:p-6 md:p-8">
            <div className="mx-auto">
                <FadeAndSlideScrollTriggerAnimation>
                    <h3 className="text-title2 mt-4 sm:mt-8 mb-6">イベント情報</h3>
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
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
                前へ
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-color3 text-white' : 'bg-gray-200'}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
                次へ
            </button>
        </div>
    );
};


export default EventsPage;