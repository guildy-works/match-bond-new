'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';
import { fetchAllNewses, News, NewsMeta } from '@/models/client';
import { SectionType1 } from '@/components/SectionType1';
import clsx from 'clsx';
import { Loading } from '@/components/Loading';
import Head from 'next/head';

export default function NewsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;
    // const totalviews = Math.ceil(eventsMock.length / eventsPerPage);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

    const [newses, setNewses] = useState<NewsMeta[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const result = await fetchAllNewses();
                setNewses(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <SectionType1 className="bg-color8">
            <Head>
                <title>{`Match-Bond 福山|News""}`}</title>
                <meta name="description" content="広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。" />
            </Head>

            <div className="justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full">
                <Section1Title title="News" subTitle="　　" innerClassName="!bg-color8" />

                <div className="mx-auto w-full min-h-[50vh]">
                    {
                        isLoading
                            ? <Loading />
                            : <>
                                <FadeAndSlideScrollTriggerAnimation>
                                    <h3 className="text-title4 mt-4 sm:mt-8">新着情報・お知らせ</h3>
                                </FadeAndSlideScrollTriggerAnimation>
                                <section className="w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 sm:gap-6 md:gap-8">
                                    {newses.map((item, index) => (
                                        <FadeAndSlideScrollTriggerAnimation key={index} innerClassName="size-full">
                                            <NewsItem news={item} />
                                        </FadeAndSlideScrollTriggerAnimation>
                                    ))}
                                </section>
                            </>
                    }
                </div>
            </div>
        </SectionType1>
    );
}

const Section1Title = ({ title, subTitle, className, innerClassName }: {
    title: string,
    subTitle: string,
    className?: string,
    innerClassName?: string
}) => (
    <FadeAndSlideScrollTriggerAnimation delay={60} className={clsx("flex items-center", className)} innerClassName={innerClassName}>
        <h2 className="text-font2 text-title1 ml-3 font-jost font-extralight" style={{ fontSize: "min(12vw,4rem)" }}>{title}</h2>
    </FadeAndSlideScrollTriggerAnimation>
)

const NewsItem = (props: {
    news: NewsMeta
}) => {
    const { news } = props;

    const date = news.publishedAt;

    return (
        <div className="size-full">
            <title>{"Match-Bond 福山|News"}</title>
            <meta name="description" content={"広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。"} />

            <div className="size-full flex p-4 pl-0 shadow-lg bg-white rounded-3xl overflow-hidden cursor-pointer duration-300 ease-in-out">
                <div className="p-4 w-24 bg-color6 flex flex-col items-center justify-center gap-1 rounded-r-xl">
                    <div className="text-size-p text-color2">{date.getFullYear()}</div>
                    <div className="text-title3 text-color3">{date.getMonth() + 1}.{date.getDate()}</div>
                </div>

                <div className="md:w-2/3 px-4">
                    <h4 className="text-xl font-bold mt-2 mb-2">{news.title}</h4>
                    <Link href={"news/details?id=" + props.news.id} className="text-color3 hover:underline inline-block">
                        もっと見る
                    </Link>
                </div>
            </div>
        </div>
    )
}