import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage";
import Link from "next/link";

import Image1 from "@/assets/img.jpg";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";
import { TitleType } from "@/components/Titles";
import Profile from "@/assets/profile.png";
import Image from "next/image";
import About1 from "@/assets/about1.png";
import About2 from "@/assets/about2.png";

export default function AboutSection() {

    return (
        <section className="w-full relative mt-24 md:mt-48">
            <div className="w-100vw sm:w-[70vw] absolute inset-0 bg-color12_2 -z-10 rounded-tr-3xl" />

            <div className="max-w-5xl grid md:grid-cols-2 mx-auto gap-3 items-center">
                <div className="mx-auto px-8 justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full">
                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color12_2">
                        <TitleType title="代表　山本夢翔" subTitle="Yumeka Yamamoto" />
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation tag="h3"
                        skewPanelClass="!bg-color12_2"
                        className="mt-3 sm:mt-5 md:mt-7 text-size1 font-script text-color11">
                        Match-Bondのホームページにご訪問いただき、誠にありがとうございます。
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color12_2"
                        tag="p"
                        innerClassName="mt-3 sm:mt-5 md:mt-7 text-size2 text-color10">
                        Match-Bond代表の山本夢翔です。
                    </SkewScrollTriggerAnimation>


                </div>

                <div className="px-8 mt-8 md:my-auto">

                    <FadeAndSlideScrollTriggerAnimation innerClassName="rounded-sm overflow-hidden">
                        <Image src={Profile} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>

            <div className="bg-color12 w-full flex justify-center py-24">

                <div className="max-w-5xl space-y-8">


                    <SkewScrollTriggerAnimation tag="p"
                        skewPanelClass="!bg-color12"
                        className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 "
                    >
                        簡単に私の自己紹介をさせてください。

                        1997年10月17日生まれ、生粋のO型です。

                        中学生の職場体験で保育士を体験し、「絶対に保育士になる！」と保育学科のある高校へ入学後、校長推薦で短期大学に入学し幼児教育学科を卒業。その後、福山市にあるこども園に就職しました。

                        保育士の仕事をしていると、もっといろんなことを経験してみたいと思うようになり、社会人サークルに参加してみました。
                    </SkewScrollTriggerAnimation>

                    <div className="flex gap-8">
                        <div>
                            <TransitionImage src={About1} alt="about1" className="h-full" parallaxSlideLength={20} baseScale={1.1} />
                        </div>
                        <div>
                            <TransitionImage src={About2} alt="about2" className="h-full" parallaxSlideLength={20} baseScale={1.1} />
                        </div>
                    </div>

                    <SkewScrollTriggerAnimation tag="p"
                        skewPanelClass="!bg-color12"
                        className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 "
                    >
                        想像以上に社会人サークルの良さを感じたため、自分で福山市中心の社会人サークルを設立しました。
                        社会人サークルを運営していると、遊びに来てくれる人が自然とカップルになることがありました。
                        そんな経験から『人と人を繋げる仕事がしたい。』と思うようになり、結婚相談所の起業を決意しました。
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation tag="p"
                        skewPanelClass="!bg-color12"
                        className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 "
                    >
                        結婚相談所を起業するために、福山市の結婚相談所を6か所周り、市場調査をしました。

                        すると、自分だったら入会できない価格設定に驚愕しました。
                        もっと、お客様に寄り添った結婚相談所にしなければ！と思い、Match-Bondができました。
                    </SkewScrollTriggerAnimation>

                    <div>
                        <TransitionImage src={About2} alt="about2" className="h-full" parallaxSlideLength={20} baseScale={1.1} />
                    </div>

                    <SkewScrollTriggerAnimation tag="p"
                        skewPanelClass="!bg-color12"
                        className="space-y-2 mt-3 sm:mt-5 md:mt-7 text-size2 "
                    >
                        Match-Bondはお客様のために、大きく分けて2つのサービスを提供します。
                        1つ目は福山市近辺のお店に協力してもらうことで、総額〇〇万円をお得に婚活・結婚をしてもらうサービスです。
                        （詳細はどんな婚活サポートなの？をご確認ください。）
                        2つ目は入会費・登録費といった初期費用が０円。そして、月会費無料プランを選ぶと月会費も0円という、結婚相談所のハードルを大きく下げるサービスです。
                        （詳細は結婚相談所をご確認ください。）
                        お客様が「お得」「効率的」「幸せ」に婚活できることをお約束します。結婚した後も幸せが続くようにご支援します。
                    </SkewScrollTriggerAnimation>

                </div>
            </div>
        </section>
    );
}
