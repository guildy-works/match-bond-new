
import { LinkButton } from "@/components/LinkButton";
import { TitleType } from "@/components/Titles";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from "next/image";
import Hand from "@/assets/hand1.png";
import Ring from "@/assets/ring.png";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";

export const ServiceSection = () => {

    return (
        <div className="w-full mt-24 md:mt-48">
            {/* 背景パネル */}


            <div className="relative max-w-screen-md grid md:grid-cols-2 py-24 mx-auto gap-3">
                <div className="w-[100vw] absolute inset-0 top-72 bg-color8 -z-10" />

                <div className="flex flex-col gap-8 p-8 sm:p-16 mt-auto">
                    <TitleType title="料金プラン" subTitle="Service" />
                    <FadeAndSlideScrollTriggerAnimation tag="p" >
                        Match-Bondでは、すべてのコースで婚活カウンセラーが活動をサポートします。<br />
                        すべての会員様は入会費、登録費、活動サポート費は0円。<br /><br />

                        様々なパートナーと協力し、婚活をより楽しく、<br />
                        安心していただけるためのサービスを提供しています。
                    </FadeAndSlideScrollTriggerAnimation>

                    <div className="mt-4 md:mt-6 ml-auto w-full sm:w-auto">
                        <LinkButton href="/about" title="VIEW Service" subTitle="サービス・料金プラン">

                        </LinkButton>
                    </div>
                </div>

                <div className="px-8 my-auto flex flex-col gap-8">
                    <TransitionImage alt="私たちの想い" src={Ring} className="rounded-md" />
                    <TransitionImage alt="私たちの想い" src={Hand} className="rounded-md"/>
                </div>
            </div>
        </div>
    )
}