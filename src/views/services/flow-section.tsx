import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';
import React, { ReactNode } from 'react';
import { FaComments, FaFileAlt, FaUserPlus, FaSearch, FaHandshake, FaRing } from 'react-icons/fa';
import Image from "next/image"

import ProfileSmall from "@/assets/profile_small.jpg"
import Matching from "@/assets/matching.png"
import Omiai from "@/assets/omiai.jpg"

import { TransitionImage } from '@/libs/ScrollTriggerAnimations/TransitionImage';

interface ServiceFlowItemProps {
    number: string;
    title: string;
    children?: ReactNode;
    isReverse?: boolean;
    hasLine: boolean;
}

const ServiceFlowItem: React.FC<ServiceFlowItemProps> = ({
    number,
    title,
    children,
    isReverse,
    hasLine
}) => (
    <FadeAndSlideScrollTriggerAnimation innerClassName={`flex ${isReverse ? "md:flex-row-reverse" : ""}`}>
        <div className="flex-1 p-4 hidden md:block" />

        <div className="md:px-12 flex flex-col items-center">
            <div className="w-8 h-8 bg-color3 rounded-full relative">
                <div className="size-2 bg-white m-auto rounded-full absolute inset-0" />
            </div>
            {hasLine && <div className="w-0.5 bg-gray-300 flex-1"></div>}
        </div>

        <div className="flex-1 px-4 relative md:h-80 pb-16 md:pb-0">
            <div className='md:absolute w-full space-y-4 pb-4'>
                <h3 className="flex-1 text-[40px] text-color3 mb-2">{number}</h3>
                <h3 className="text-title3 text-color3 mb-2">{title}</h3>
                <p className='text-size-p-wide'>
                    {children}
                </p>
            </div>
        </div>
    </FadeAndSlideScrollTriggerAnimation>
);

export const ServiceFlow = () => {
    return (
        <div className="max-w-5xl w-full mx-auto px-4 py-8 flex flex-col mt-8 md:mb-64">
            <h2 className='text-title2 mx-auto mb-2'>ご利用の流れ</h2>

            <div className="relative mt-8">
                <ServiceFlowItem
                    number="01"
                    title="お問い合わせ・カウンセリング"
                    isReverse={true}
                    hasLine={true}
                >
                    まずは無料カウンセリングからお越しください。<br /><br />

                    サービスの特徴、規約などを詳しくお話させていただきます。<br />
                    その後、ご結婚についてのあなたの要望などをお伺いし、<br />
                    今後のサービスの内容・流れなどを決めていきます。

                    <TransitionImage src={ProfileSmall} alt="Profile" className='w-64 mt-8 mx-auto rounded-md' />
                </ServiceFlowItem>

                <ServiceFlowItem
                    number="02"
                    title="必要書類について"
                    isReverse={false}
                    hasLine={true}
                >
                    ・独身証明書（代行可能）<br />
                    ・卒業証明書（コピー）<br />
                    ・在職証明書（月の給料明細）<br />
                    ・収入証明書（源泉徴収票）<br />
                    ・本人確認書類及び資格証明書（免許証または、保険証）<br />
                    ・契約証明書（当社からお渡しする書類2点）<br />
                    ・外国籍会員様のみ別途書類<br /><br />

                    ●お仕事が忙しく、市役所に行けない、という方も多くいらっしゃいます。<br />
                    当社では独身証明書代行をお1人様￥3,000にてお受けしておりますのでお気軽にお問い合わせください。
                </ServiceFlowItem>

                <ServiceFlowItem
                    number="03"
                    title="ご入会・登録・書類審査"
                    isReverse={true}
                    hasLine={true}
                >
                    ご入会は、十分にご理解をしていただいたうえでお勧めいたします。<br />
                    ご自身に合ったサービス内容かどうか、ご検討の上ご入会ください。<br /><br />

                    ご入会後、あなたのプロフィールを作成いたします。<br />
                    あなたの趣味、趣向、お相手の希望などをお聞かせください。

                    書類審査には一週間程度お時間を頂きます。<br /><br />

                    ＊真剣に結婚をお考えの方
                    （初婚・再婚は問わず20～80歳程度の方まで加入していただけます。
                    ただし学生さんはNGです。）<br />
                    *社会人として常識があり、法的にも実生活においても独身の方<br />

                    *経済的、精神的に正常な結婚生活を営める方のみご入会していただけます。
                </ServiceFlowItem>

                <ServiceFlowItem
                    number="04"
                    title="お相手探し"
                    isReverse={false}
                    hasLine={true}
                >
                    結婚相談所カウンセラーが、あなたとご一緒にお相手を探します。あなたのご了承を得たうえで、お相手様にコンタクトを測り、お見合いに近づけるようにサポートいたします。

                    他の会員様からも、あなた宛てにお見合いの申し込みなどがございます。

                    <TransitionImage src={Matching} alt="Profile" className='w-64 mt-8 mx-auto rounded-md' />
                </ServiceFlowItem>

                <ServiceFlowItem
                    number="05"
                    title="お見合い"
                    isReverse={true}
                    hasLine={false}
                >
                    お二人で連絡を取り合い、交際を進めてください。ご交際中は、お相手探しの活動は休止します、ご結婚を前提にお付き合いされる場合は、結婚相談所カウンセラーにご相談ください。

                    あなたが成婚に向かうように精いっぱいのサポートをさせていただきます。

                    まずは、無料カウンセリングからお越しください。

                    <TransitionImage src={Omiai} alt="Profile" className='w-64 mt-8 mx-auto rounded-md' />
                </ServiceFlowItem>
            </div>
        </div>
    );
};
