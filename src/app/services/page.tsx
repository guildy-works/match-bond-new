'use client'

import React, { useState } from 'react';

import { SectionBar } from '@/components/SectionBar';
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            {/* ヒーローセクション */}
            <FadeAndSlideScrollTriggerAnimation >
                <section className="px-4">
                    <div className="container mx-auto ">
                        <SectionBar text='Services' />

                        <p className="text-title3 mt-8 mb-8">
                            あなたの人生に新しい出会いと可能性を
                        </p>
                    </div>
                </section>
            </FadeAndSlideScrollTriggerAnimation>

            {/* サービス概要 */}
            <FadeAndSlideScrollTriggerAnimation transform={{ rotate: "0", scale: 0.9 }}>
                <section className="bg-white py-16 px-4 mt-8 max-w-4xl mx-auto">
                    <div className="container mx-auto">
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Match Bondは、様々なパートナーと協力し、婚活をより楽しく、
                            安心していただけるためのサービスを提供しています。
                            私たちは、単なる出会いの場を提供するだけでなく、
                            あなたの人生をより豊かにする体験と機会を創出します。
                        </p>
                    </div>
                </section>
            </FadeAndSlideScrollTriggerAnimation>

            <div className='bg-color2 w-full '>


                {/* サービス一覧 */}
                <section className="py-24 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-title2 font-bold mb-16 text-center">サービス</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {serviceItems.map((item, index) => (
                                <FadeAndSlideScrollTriggerAnimation key={index}>
                                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                                        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {item.children()}
                                    </div>
                                </FadeAndSlideScrollTriggerAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTAセクション */}
                <FadeAndSlideScrollTriggerAnimation>
                    <section className="py-24 px-4">
                        <div className="container mx-auto text-center">
                            <button className="bg-black text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-purple-100 transition duration-300 shadow-md">
                                無料で相談する
                            </button>
                        </div>
                    </section>
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </div>
    );
};

const serviceItems = [
    {
        image: "/img2.jpg",
        title: "マッチング・コンサルティング",
        description: "年齢が近い参加者同士の合コンをセッティング。司会進行、席替え、ゲームなどで和やかな雰囲気を演出し、特に女性が安心できる環境づくりに注力しています。",
        children: () => <ServiceDialog > aaaaaaaaaaaaa </ServiceDialog>
    },
    {
        image: "/img.jpg",
        title: "Match婚・イベント開催",
        description: "婚活イベントから地域貢献活動まで、多様な出会いの機会を提供。新しい経験、学び、地域社会との繋がりを深める場として機能します。",
        children: () => <ServiceDialog > aaaaaaaaaaaaa </ServiceDialog>
    },
    {
        image: "/option-photo.jpg",
        title: "撮影",
        description: "プロのカメラマンがあなたのお気に入りの場所でプロフィールを撮影します。福山市内(内海以外）は無料で出張。お気に入りの場所を教えてください。",
        children: () => <ServiceDialog > aaaaaaaaaaaaa </ServiceDialog>
    },
    {
        image: "/option-makeup.jpg",
        title: "メイク講座",
        description: "メイク初心者向けの個別講座を提供。自信を持ってお洒落を楽しめるよう、丁寧にサポートします。",
        children: () => <ServiceDialog > aaaaaaaaaaaaa </ServiceDialog>
    },
    {
        image: "/option-uranai.jpg",
        title: "占いサービス",
        description: "高評価の占い師COCOさんによる占いサービス。10分1,000円からご利用いただけます。",
        children: () => <ServiceDialog > aaaaaaaaaaaaa </ServiceDialog>
    }
];

export default ServicesPage;

const ServiceDialog = ({ children }: { children: React.ReactNode }) => {
    let [isOpen, setIsOpen] = useState(() => false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                onClick={open}
                className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
            >
                Open dialog
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <DialogBackdrop transition className="fixed inset-0 bg-black/50 duration-300 ease-out data-[closed]:opacity-0" />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            {children}
                            <div className="mt-4">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={close}
                                >
                                    Got it, thanks!
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
