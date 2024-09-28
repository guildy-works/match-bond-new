import { LinkButton } from "@/components/LinkButton";
import { SectionBar } from "@/components/SectionBar"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { fetchNewses, News } from "@/models/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NewsSection = () => {

    const [newsItems, setNewsItems] = useState<News[]>([])

    useEffect(() => {
        fetchNewses().then((news) => {
            setNewsItems(news)
        })
    }, [])

    return (
        <div className="mx-auto px-4 md:px-0 w-full max-w-5xl ">
            <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "-10vw" } }}>
                <SectionBar text="News" />
            </FadeAndSlideScrollTriggerAnimation>

            <div className="mx-auto">
                <FadeAndSlideScrollTriggerAnimation tag="h3" className="text-title2 mt-4 sm:mt-8">新着情報・お知らせ</FadeAndSlideScrollTriggerAnimation>

                <ul className="divide-y divide-gray-200">
                    {newsItems.map((item, index) => (
                        <FadeAndSlideScrollTriggerAnimation key={index}>
                            <li className="py-4 flex justify-between items-center">
                                <span className="text-grey2">{item.publishedAt.getMonth() + 1}.{item.publishedAt.getDate()}</span>
                                <Link className="ml-4" href={"/news/" + item.id}>{item.title}</Link>
                            </li>
                        </FadeAndSlideScrollTriggerAnimation>
                    ))}
                </ul>
            </div>
            <div className="w-full flex justify-end mt-4 sm:mt-8">
                <div className="flex-1" />

                <FadeAndSlideScrollTriggerAnimation className="w-full sm:w-auto">
                    <LinkButton title="VIEW MORE" subTitle="お知らせ一覧" href=""></LinkButton>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

        </div>
    )
}