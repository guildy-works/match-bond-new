import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Link from "next/link";

import Image1 from "@/assets/img.jpg";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";



export default function AboutSection() {

    return (
        <section className="bg-white py-20 px-4 relative max-w-5xl mx-auto flex flex-wrap">
            <div className=" justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full md:w-3/5">
                <SkewScrollTriggerAnimation>
                    <h2 className="text-color3 font-asterdam text-title1 " style={{ fontSize: "min(12vw,4rem)" }}>Concept</h2>
                </SkewScrollTriggerAnimation>

                <SkewScrollTriggerAnimation tag="h3" className="text-title3 font-script text-grey1 mb-4">
                    完全成功報酬型の結婚相談所です。
                </SkewScrollTriggerAnimation>

                <SkewScrollTriggerAnimation innerClassName="mt-3 sm:mt-5 md:mt-7 text-size3">
                    <p>登録費・入会費が高くて１歩踏み出せない</p>
                    <p>忙しくて毎月婚活ができない</p>
                    <p>会員の年齢層が高くて、入会しにくい</p>
                    <p>結婚相談所には入会したくないけど、出会いは欲しい</p>
                </SkewScrollTriggerAnimation>

                <SkewScrollTriggerAnimation tag="p" className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 text-color3" skewPanelClass="text-gray-700">
                    こんなことを考えたことはありませんか？
                </SkewScrollTriggerAnimation>

                <SkewScrollTriggerAnimation tag="p" className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                    こんな想いを解決するためにMatch-Bondはあります。
                </SkewScrollTriggerAnimation>

                <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                    Match-Bondはあなたがさらに幸せに近づけるように
                    <HighlightMarker> 徹底的にサポート</HighlightMarker>
                    いたします。
                </SkewScrollTriggerAnimation>
            </div>

            <div className="mt-3 sm:mt-5 md:mt-7 ml-auto w-full md:w-2/5 flex flex-col">

                <FadeAndSlideScrollTriggerAnimation innerClassName="rounded-xl overflow-hidden">
                    <TransitionImage src={Image1} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>

                <div className="mt-4 md:mt-auto m ml-auto w-full sm:w-auto">
                    <LinkButton href="/about" title="VIEW About" subTitle="Match Bondの想い">

                    </LinkButton>
                </div>
            </div>




        </section>
    );
}