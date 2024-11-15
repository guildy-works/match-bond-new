import TopImage from "@/assets/top.png";
import RoseImage from "@/assets/rose.png";
import Link from "next/link";
import { FadeAndSlideAnimation } from "@/libs/Animations/FadeAndSlideAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Kon1Image from '@/assets/kon6.jpg';
import Kon2Image from '@/assets/kon7.jpg';
import Bg1 from '@/assets/bg1.svg';
import Image from "next/image";

export const TopSection = () => {
    return (
        <div className="w-full mx-auto">
            <div className="w-full  relative">
                <Image src={Bg1} alt="background" className="absolute bottom-0 w-full" />
                <div className="flex-1 ">
                    <FadeAndSlideAnimation in transform={{ translate: { x: "-100vw" } }} className="h-fit">
                        <div className="bg-color1 h-24 sm:h-44 w-full" />
                    </FadeAndSlideAnimation>

                    <div className="w-full justify-center grid grid-cols-1 md:grid-cols-2">
                        <div className=" inset-0 m-auto flex flex-col -mt-4">
                            <FadeAndSlideAnimation in tag={"h1"} className="font-asterdam text-title1 mx-auto">
                                Match Bond
                            </FadeAndSlideAnimation>

                            <div className="mx-auto">

                                <SkewScrollTriggerAnimation tag={"h3"} className="text-title4 mt-5 sm:mt-12 text-font2">
                                    Match-Bond 山本夢翔
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation tag={"h3"} className="text-title4 mt-4新着情報・お知らせ text-font2">
                                    総額〇〇万円がお得になる婚活
                                </SkewScrollTriggerAnimation>

                                <SkewScrollTriggerAnimation tag={"p"} className="text-size2 mt-5">
                                    結婚後も幸せが続く家庭作り、
                                </SkewScrollTriggerAnimation>

                                <SkewScrollTriggerAnimation tag={"p"} className="text-title3 mt-5">
                                    あなたの幸せを応援します。
                                </SkewScrollTriggerAnimation>
                            </div>

                            <FadeAndSlideScrollTriggerAnimation transform={{ scale: 1.2, }} >
                                <Image src={RoseImage} alt="rose" className="object-contain" style={{ maxHeight: "240px", maxWidth: "max(280px, 100%)" }} />
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>

                        <div className="p-4 md:p-24 md:pr-36">
                            <TransitionImage
                                src={TopImage}
                                parallaxSlideLength={20}
                                scale={{ from: 0.8, to: 1 }}
                                className="md:h-svh w-full md:w-auto  md:max-w-3xl lg:max-w-fit mb-24 -mt-4 rounded-lg"
                                style={{ maxHeight: "680px", }}
                                alt="Top"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}