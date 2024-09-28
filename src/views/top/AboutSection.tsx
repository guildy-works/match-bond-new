import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Link from "next/link";

import Image1 from "@/assets/img.jpg";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";
import { TitleType } from "@/components/Titles";

export default function AboutSection() {

    return (
        <section className="w-full relative sm:mt-24 md:mt-48">
            <div className="w-100vw sm:w-[70vw] absolute inset-0 bg-color8 -z-10" />

            <div className="max-w-5xl grid md:grid-cols-2 py-24 mx-auto gap-3">
                <div className="mx-auto px-8 justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full">
                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                        <TitleType title="私たちの想い" subTitle="Concept" />
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation tag="h3"
                        skewPanelClass="!bg-color8"
                        className="mt-3 sm:mt-5 md:mt-7  text-title3 font-script text-grey1">
                        完全成功報酬型の結婚相談所です。
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color8"
                        innerClassName="mt-3 sm:mt-5 md:mt-7 text-size3">
                        <p>登録費・入会費が高くて１歩踏み出せない</p>
                        <p>忙しくて毎月婚活ができない</p>
                        <p>会員の年齢層が高くて、入会しにくい</p>
                        <p>結婚相談所には入会したくないけど、出会いは欲しい</p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation tag="p"
                        skewPanelClass="!bg-color8"
                        className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 text-color3"
                    >
                        こんなことを考えたことはありませんか？
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation tag="p"
                        skewPanelClass="!bg-color8"
                        className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                        こんな想いを解決するためにMatch-Bondはあります。
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation
                        skewPanelClass="!bg-color8"
                        className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                        Match-Bondはあなたがさらに<br/>
                        幸せに近づけるように
                        <HighlightMarker> 徹底的にサポート</HighlightMarker>
                        いたします。
                    </SkewScrollTriggerAnimation>
                </div>

                <div className="px-8 mt-8 md:my-auto">

                    <FadeAndSlideScrollTriggerAnimation innerClassName="rounded-sm overflow-hidden">
                        <TransitionImage src={Image1} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>

                    <div className="mt-4 md:mt-6 ml-auto w-full sm:w-auto">
                        <LinkButton href="/about" title="VIEW About" subTitle="Match Bondの想い">

                        </LinkButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
