import Image from "next/image";
import Top2Image from "@/assets/top2.jpg";
import TopImage from "@/assets/top1.jpg";
import RoseImage from "@/assets/rose.png";
import Link from "next/link";
import { FadeAndSlideAnimation } from "@/libs/Animations/FadeAndSlideAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Kon1Image from '@/assets/kon6.jpg';
import Kon2Image from '@/assets/kon7.jpg';
import Kon3Image from '@/assets/kon8.jpg';

export const TopSection = () => {
    return (
        <div className="w-full mx-auto">
            <div className="w-full flex flex-wrap">
                <div className="flex-1 ">
                    <FadeAndSlideAnimation in transform={{ translate: { x: "-100vw" } }} className="h-fit">
                        <div className="bg-color2 h-24 sm:h-44 w-full" />
                    </FadeAndSlideAnimation>

                    <div className="w-full flex justify-center">
                        <div className=" inset-0 m-auto flex flex-col -mt-4">
                            <FadeAndSlideAnimation in tag={"h1"} className="font-asterdam text-title1 mx-auto">
                                Match Bond
                            </FadeAndSlideAnimation>

                            <div className="mx-auto">

                                <SkewScrollTriggerAnimation tag={"h3"} className="text-title4 mt-5 sm:mt-12 text-font2">
                                    広島県福山市を中心に
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation tag={"h3"} className="text-title4 mt-4新着情報・お知らせ text-font2">
                                    活動する結婚相談所
                                </SkewScrollTriggerAnimation>

                                <SkewScrollTriggerAnimation tag={"p"} className="text-size2 mt-5">
                                    一期一会、ご縁を大切に。
                                </SkewScrollTriggerAnimation>

                                <SkewScrollTriggerAnimation tag={"p"} className="text-title3 mt-5">
                                    あなたの幸せを応援します。
                                </SkewScrollTriggerAnimation>
                            </div>

                            <FadeAndSlideScrollTriggerAnimation transform={{ scale: 1.2, }} >
                                <Image src={RoseImage} alt="rose" className="object-contain" style={{ maxHeight: "240px", maxWidth: "max(280px, 100%)" }} />
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>

                    </div>
                </div>

                <TransitionImage
                    src={TopImage}
                    parallaxSlideLength={20}
                    scale={{ from: 0.8, to: 1 }}
                    className="md:h-svh w-full md:w-auto  md:max-w-3xl lg:max-w-fit"
                    style={{ maxHeight: "680px", }}
                    alt="Top"
                />
            </div>

            <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "90vw" } }}
                className="bg-color1 w-full p-6 sm:p-12 md:p-24 relative">
                <div className="mx-auto px-4 py-8 gap-2 sm:gap-3 md:gap-4 flex flex-wrap justify-center">
                    <FadeAndSlideScrollTriggerAnimation tag="div" delay={150} >
                        <Image src={Kon1Image} alt="Kon" className="w-72 h-52 object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation tag="div" delay={250}>
                        <Image src={Kon2Image} alt="Kon" className="w-72 h-52 object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation tag="div" delay={300} >
                        <Image src={Kon3Image} alt="Woman" className="w-72 h-52 object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>

            </FadeAndSlideScrollTriggerAnimation>
        </div>

    )
}