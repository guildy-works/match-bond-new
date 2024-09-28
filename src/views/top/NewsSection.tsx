import { LinkButton } from "@/components/LinkButton";
import { SectionBar } from "@/components/SectionBar"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Link from "next/link";

const newsItems = [
    { date: '2024.04.23', title: '結婚相談所サービスをリニューアルしました' },
    { date: '2024.04.13', title: '成功する婚活の秘訣' },
    { date: '2024.04.06', title: '春の特別キャンペーンを開始しました' },
    { date: '2024.04.02', title: '婚活で大切な自己PRのコツ' },
    { date: '2024.03.22', title: '結婚相談所を選ぶ際のポイント' }
];

export const NewsSection = () => {

    return (
        <div className="mx-auto px-4 sm:px-0 w-full max-w-5xl">
            <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "-10vw" } }}>
                <SectionBar text="News" />
            </FadeAndSlideScrollTriggerAnimation>

            <div className="mx-auto">
                <FadeAndSlideScrollTriggerAnimation tag="h3" className="text-4xl mt-4 sm:mt-8">新着情報・お知らせ</FadeAndSlideScrollTriggerAnimation>

                <ul className="divide-y divide-gray-200">
                    {newsItems.map((item, index) => (
                        <FadeAndSlideScrollTriggerAnimation key={index}>
                            <li className="py-4 flex justify-between items-center">
                                <span className="text-grey2">{item.date}</span>
                                <Link className="ml-4" href="">{item.title}</Link>
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