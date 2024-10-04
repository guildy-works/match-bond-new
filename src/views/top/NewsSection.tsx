import { LinkButton } from "@/components/LinkButton";
import { Loading } from "@/components/Loading";
import { SectionBar } from "@/components/SectionBar"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { NewsMeta } from "@/models/client";
import Link from "next/link";

export const NewsSection = ({ news, isLoading }: { news: NewsMeta[], isLoading: boolean }) => {
    return (
        <div className="mx-auto px-4 md:px-0 w-full max-w-5xl ">
            <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "-10vw" } }}>
                <SectionBar text="News" />
            </FadeAndSlideScrollTriggerAnimation>

            <div className="mx-auto">
                <FadeAndSlideScrollTriggerAnimation tag="h3" className="text-title2 mt-4 sm:mt-8">お知らせ</FadeAndSlideScrollTriggerAnimation>

                {
                    isLoading
                        ? <Loading />
                        :
                        <ul className="divide-y divide-gray-200">
                            {news.map((item) => (
                                <FadeAndSlideScrollTriggerAnimation key={item.id}>
                                    <li className="py-4 flex justify-between items-center">
                                        <span className="text-grey2">{item.publishedAt.getMonth() + 1}.{item.publishedAt.getDate()}</span>
                                        <Link className="ml-4" href={"/news/details?id=" + item.id}>{item.title}</Link>
                                    </li>
                                </FadeAndSlideScrollTriggerAnimation>
                            ))}
                        </ul>
                }

            </div>
            <div className="w-full flex justify-end mt-4 sm:mt-8">
                <div className="flex-1" />

                <FadeAndSlideScrollTriggerAnimation className="w-full sm:w-auto">
                    <LinkButton title="VIEW MORE" subTitle="お知らせ一覧" href="/news"></LinkButton>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

        </div>
    )
}