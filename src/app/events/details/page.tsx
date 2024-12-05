"use client"

import { Loading } from "@/components/Loading";
import { EventData, fetchEvent, fetchEvents } from "@/models/fetchEvents";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page(props: { params: Promise<{ id: string }> }) {
    const [news, setNews] = useState<EventData | null>(null);
    const formattedDate = news?.publishedAt?.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const q = new URLSearchParams(window.location.search);
        fetchEvent(q.get("id") ?? "").then((result) => {
            setNews(result)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="bg-color1 p-8 md:p-16">
            <Head>
                <title>{`Match-Bond 福山|${news?.title ?? ""}`}</title>
                <meta name="description" content="広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。" />
            </Head>

            <div className='bg-white rounded-lg shadow-sm mx-auto max-w-5xl p-4 sm:p-12 min-h-[50vh]'>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className='flex flex-col items-center gap-4 sm:gap-8'>
                        <h1 className='text-title2 text-center'>{news?.title ?? ""}</h1>
                        <h2 className='text-title2 text-color3'>開催日 {formattedDate}</h2>
                        {news?.thumbnail?.url && (
                            <img
                                src={news.thumbnail.url}
                                alt={news?.title}
                                className='w-full object-contain rounded-lg'
                                style={{ maxHeight: "680px" }}
                            />
                        )}

                        <div
                            dangerouslySetInnerHTML={{ __html: news?.body ?? "" }}
                            className='mt-8 flex flex-col gap-2 sm:gap-6 mb-auto prose prose-lg max-w-none'
                        />

                        <Link href='/events' className='mt-8 px-6 bg-black text-white py-4 rounded-xl font-semibold hover:bg-black/60 transition duration-300 flex items-center'>
                            一覧に戻る
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>

        </div>
    )
}
