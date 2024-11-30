import { SectionBar } from "@/components/SectionBar"
import { SnsLinkList } from "@/components/SnsLinkList"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { EventIntroduceSection } from "../events/EventIntroduceSection"
import LineQR from "@/assets/LineQR.png"
import Image from "next/image";


import Insta1 from "@/assets/mock/insta1.jpg";
import Insta2 from "@/assets/mock/insta2.jpg";
import Insta3 from "@/assets/mock/insta3.jpg";
import Insta4 from "@/assets/mock/insta4.jpg";
import { LinkButton } from "@/components/LinkButton"

export const SnsSection = () => {
    return (
        <div className="mx-auto px-8 w-full max-w-6xl flex flex-col items-center space-y-8 mt-8">
            <SectionBar text="Sns" />

            <SnsLinkList />

            <div className="relative">
                {/* 背景テキスト */}
                <div className="font-asterdam absolute top-40 left-0 right-0 text-[96px] w-[680px] text-color9/20 -rotate-12 font-thin ">
                    Match-Bond
                </div>
                <FadeAndSlideScrollTriggerAnimation>
                    婚活に関する情報、婚活イベントの告知をInstagramから配信しております。<br />
                    司会業、様々なイベント、社会人サークルのInstagramも併せて、<br />
                    ご紹介させて頂きます。   <br />
                    <br />
                    恋愛相談窓口は公式LINEから事前予約することができます。<br />
                    恋愛相談窓口は初回15分無料です。<br />
                    <br />
                    婚活サポートの内容をもっと聞きたい、<br />
                    どのサービスから受けたらいいの？といった内容でも恋愛相談窓口をご利用ください。<br />
                    （詳細は恋愛相談窓口をご確認ください。）   <br />
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            <Image src={LineQR} alt="sns" className="hidden md:block rounded-lg mt-40 w-[180px]" />

            <h2 className="text-title2">Instagramだけの最新情報</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-sm md:max-w-screen-md" >
                <Image src={Insta1} alt="sns" className="rounded-lg" />
                <Image src={Insta2} alt="sns" className="rounded-lg" />
                <Image src={Insta3} alt="sns" className="rounded-lg" />
                <Image src={Insta4} alt="sns" className="rounded-lg" />
            </div>
            <LinkButton href="https://www.instagram.com/p/CzJILOjyN5h/?hl=ja&img_index=1" title="READ MORE" subTitle="Instagram" />

        </div>
    )
}