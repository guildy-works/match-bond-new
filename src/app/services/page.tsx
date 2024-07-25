'use client'

import React from 'react';
import { FadeAndSlideScrollTriggerAnimation } from '@/components/FadeAndSlideScriollTriggerAnimation';
import { SectionBar } from '@/components/SectionBar';

const ServicesPage = () => {
    return (
        <div className="bg-color2 min-h-screen">
            {/* ヒーローセクション */}
            <FadeAndSlideScrollTriggerAnimation >
                <section className="bg-white py-24 px-4">
                    <div className="container mx-auto ">
                        <SectionBar text='Services' />

                        <p className="text-title3 mt-8 mb-8">
                            あなたの人生に新しい出会いと可能性を
                        </p>
                    </div>
                </section>
            </FadeAndSlideScrollTriggerAnimation>

            {/* サービス概要 */}
            <FadeAndSlideScrollTriggerAnimation>
                <section className="bg-white py-16 px-4 mt-8 max-w-4xl mx-auto">
                    <div className="container mx-auto">
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Match Bondは、様々なパートナーと協力し、婚活をより楽しく、
                            安心していただけるためのサービスを提供しています。
                            私たちは、単なる出会いの場を提供するだけでなく、
                            あなたの人生をより豊かにする体験と機会を創出します。
                        </p>
                    </div>
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">Match Bond の特徴</h2>
                        <ul className="space-y-6">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-xl">
                                    <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </FadeAndSlideScrollTriggerAnimation>

            {/* サービス一覧 */}
            <section className="py-24 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-color3">提供サービス</h2>
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
                                </div>
                            </FadeAndSlideScrollTriggerAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTAセクション */}
            <FadeAndSlideScrollTriggerAnimation>
                <section className="py-24 px-4 rounded-lg max-w-5xl mx-auto my-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">新しい出会いを見つけましょう</h2>
                        <p className="text-xl mb-12">Match Bond</p>
                        <button className="bg-black text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-purple-100 transition duration-300 shadow-md">
                            無料で相談する
                        </button>
                    </div>
                </section>
            </FadeAndSlideScrollTriggerAnimation>
        </div>
    );
};

const serviceItems = [
    {
        image: "/img2.jpg",
        title: "マッチング・コンサルティング",
        description: "年齢が近い参加者同士の合コンをセッティング。司会進行、席替え、ゲームなどで和やかな雰囲気を演出し、特に女性が安心できる環境づくりに注力しています。"
    },
    {
        image: "/img.jpg",
        title: "Match婚・イベント開催",
        description: "婚活イベントから地域貢献活動まで、多様な出会いの機会を提供。新しい経験、学び、地域社会との繋がりを深める場として機能します。"
    },
    {
        image: "/option-photo.jpg",
        title: "撮影",
        description: "プロのカメラマンがあなたのお気に入りの場所でプロフィールを撮影します。福山市内(内海以外）は無料で出張。お気に入りの場所を教えてください。"
    },
    {
        image: "/option-makeup.jpg",
        title: "メイク講座",
        description: "メイク初心者向けの個別講座を提供。自信を持ってお洒落を楽しめるよう、丁寧にサポートします。"
    },
    {
        image: "/option-fashion.jpg",
        title: "メンズコーディネーター",
        description: "Match-Bond専属のコーディネーターが、ファッション、ヘアセット、メンズメイク、スキンケアなど、男性の総合的な魅力向上をサポートします。"
    },
    {
        image: "/option-uranai.jpg",
        title: "占いサービス",
        description: "高評価の占い師COCOさんによる占いサービス。10分1,000円からご利用いただけます。"
    }
];

const features = [
    "多様な出会いの機会を提供",
    "安心・安全なサービス提供",
    "総合的な魅力向上サポート"
];

export default ServicesPage;