'use client'

import React, { useState } from 'react';

import { SectionBar } from '@/components/SectionBar';
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';
import { UranaiSection } from '@/views/services/uranai';

import ThreeMonthPlan from '@/assets/3month_plan.png'
import CocoChan from '@/assets/option-uranai.jpg';
import Photo from '@/assets/photo.png';
import MakeUpImage from '@/assets/option-makeup.jpg';

import KonImage from '@/assets/kon1.jpg';

import Image, { StaticImageData } from 'next/image';
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation';
import Link from 'next/link';
import { PhotoServiceSection } from '@/views/services/photo';
import { MakeUpSection } from '@/views/services/makeup-section';
import { Splide, SplideSlide, } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import { ServiceFlow } from '@/views/services/flow-section';
import { ServiceDialog } from '@/components/ServiceDialog';
import { EventDetailSection } from '@/views/services/event-detail-section';
import Head from 'next/head';

export default () => {
    return (
        <div className="flex flex-col items-center">
            <Head>
                <title>{"Match-Bond 福山|サービス料金プラン"}</title>
                <meta name="description" content={"広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。"} />
            </Head>

            <section className="px-4">
                <div className="container mx-auto ">
                    <FadeAndSlideScrollTriggerAnimation forceIn>
                        <SectionBar text='Services' />
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation >
                        <p className="text-title3 mt-8 mb-8">
                            あなたの人生に新しい出会いと可能性を
                        </p>
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </section>



            {/* サービス概要 */}
            <FadeAndSlideScrollTriggerAnimation transform={{ rotate: "0", scale: 0.9 }}>
                <section className="bg-white py-16 px-4 max-w-4xl mx-auto">
                    <div className="container mx-auto">

                        <SkewScrollTriggerAnimation tag="p" className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Match-Bondでは、すべてのコースで婚活カウンセラーが活動をサポートします。<br />
                            すべての会員様は入会費、登録費、活動サポート費は0円。
                        </SkewScrollTriggerAnimation>

                        <SkewScrollTriggerAnimation tag="p" className="text-xl text-gray-700 mb-8 leading-relaxed">
                            様々なパートナーと協力し、婚活をより楽しく、<br />
                            安心していただけるためのサービスを提供しています。
                        </SkewScrollTriggerAnimation>
                    </div>
                </section>
            </FadeAndSlideScrollTriggerAnimation>


            <div className="w-full bg-color1 py-8 md:py-24">
                <div className='max-w-6xl mx-auto px-4 py-8'>
                    <FadeAndSlideScrollTriggerAnimation>
                        <h1 className="text-title2 text-center mb-12">料金プラン</h1>
                    </FadeAndSlideScrollTriggerAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeAndSlideScrollTriggerAnimation innerClassName='h-full'>
                            <PricingPlan
                                title='3ヵ月お試しプラン'
                                image={ThreeMonthPlan}
                                description='相談所って好みの人いるのかな。お見合いって本当に組めるのかな。と不安に思う方にお勧めです。'
                            />
                        </FadeAndSlideScrollTriggerAnimation>

                        <FadeAndSlideScrollTriggerAnimation delay={60} innerClassName='h-full'>
                            <PricingPlan
                                title='月会費￥0プラン'
                                image={ThreeMonthPlan}
                                description='仕事が忙しくて今月お見合いを組めないかもしれないな。と、お仕事に波がある方にお勧めです。'
                            />
                        </FadeAndSlideScrollTriggerAnimation>

                        <FadeAndSlideScrollTriggerAnimation delay={120} innerClassName='h-full'>
                            <PricingPlan
                                title='お見合い費￥0プラン'
                                image={ThreeMonthPlan}
                                description='沢山の方とのお見合いを経て、「この人だ。」と思えるお相手を探したい方にお勧めのプランです。'
                            />
                        </FadeAndSlideScrollTriggerAnimation>
                    </div>
                </div>
            </div>

            <ServiceFlow />

            <div className='bg-color2 w-full py-8'>
                {/* サービス一覧 */}
                <section className="">
                    <div className="mx-auto space-y-8">
                        <h2 className="text-title2 text-center mt-8">その他サービス</h2>

                        <Splide className="flex justify-center overflow-visible" options={{
                            autoWidth: true,
                            gap: '1.6rem',
                            padding: "1.6rem"
                        } as Options} >
                            {
                                serviceItems.map((item, index) => (
                                    <SplideSlide className="w-80 max-w-full py-12">
                                        <FadeAndSlideScrollTriggerAnimation
                                            key={item.title}
                                            className='h-full overflow-visible'
                                            innerClassName='h-full overflow-visible'>
                                            <div className="h-full bg-white p-4 md:p-8 rounded-xl shadow-lg items-center flex flex-col gap-4">
                                                <div className="w-40 h-40 rounded-full overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <h3 className="text-title3 font-semibold">{item.title}</h3>
                                                <p className="mt-6 mb-auto">
                                                    {item.description}
                                                </p>

                                                {item.children()}
                                            </div>
                                        </FadeAndSlideScrollTriggerAnimation>
                                    </SplideSlide>
                                ))
                            }
                        </Splide>
                    </div>
                </section>

                <FadeAndSlideScrollTriggerAnimation>
                    <section className="py-12 px-4">
                        <div className="container mx-auto text-center">
                            <Link href="/contacts" className="bg-black text-white px-12 py-4 rounded-xl font-semibold hover:bg-black/60 transition duration-300">
                                無料で相談する
                            </Link>
                        </div>
                    </section>
                </FadeAndSlideScrollTriggerAnimation>
            </div >
        </div >
    );
};


interface PlanProps {
    title: string;
    description: string;
    image: StaticImageData;
}

const PricingPlan = ({ title, description, image }: PlanProps) => (
    <div className={`h-full bg-white p-6 rounded-lg shadow-lg flex flex-col`}>
        <h2 className="text-title3 mb-4 text-center">{title}</h2>
        <p className="text-gray-600 mb-auto pb-6">{description}</p>

        <ServiceDialog  >
            <div className='w-full p-4'>
                <Image src={image} alt="料金表" />
            </div>

        </ServiceDialog>
    </div>
);

const serviceItems = [
    {
        image: KonImage,
        title: "Match婚・イベント開催",
        description: "婚活イベントから地域貢献活動まで、多様な出会いの機会を提供。新しい経験、学び、地域社会との繋がりを深める場として機能します。",
        children: () => <ServiceDialog > <EventDetailSection /> </ServiceDialog>
    },
    {
        image: Photo,
        title: "撮影",
        description: "プロのカメラマンがあなたのお気に入りの場所でプロフィールを撮影します。福山市内(内海以外）は無料で出張。お気に入りの場所を教えてください。",
        children: () => <ServiceDialog > <PhotoServiceSection /> </ServiceDialog>
    },
    {
        image: MakeUpImage,
        title: "メイク講座",
        description: "メイク初心者向けの個別講座を提供。自信を持ってお洒落を楽しめるよう、丁寧にサポートします。",
        children: () => <ServiceDialog > <MakeUpSection /> </ServiceDialog>
    },
    {
        image: CocoChan,
        title: "占いサービス",
        description: "高評価の占い師COCOさんによる占いサービス。10分1,000円からご利用いただけます。",
        children: () => <ServiceDialog > <UranaiSection /> </ServiceDialog>
    }
];
