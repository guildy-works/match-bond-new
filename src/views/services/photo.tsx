'use client'

import React from 'react';
import { HighlightMarker } from '@/components/HighlightMarker';
import CocoChan from '@/assets/option-uranai.jpg';
import Image from 'next/image';

import Photo1 from '@/assets/photo1.jpg';
import Photo2 from '@/assets/photo2.jpg';
import Photo3 from '@/assets/photo3.jpg';
import Photo4 from '@/assets/photo4.jpg';
import { MdCameraAlt, MdMail, MdPhotoCamera } from 'react-icons/md';
import { SnsLinkList } from '@/components/SnsLinkList';
import Link from 'next/link';
import { ContactLink } from '@/components/ContactLink';

const PriceTable = ({ title, prices }: { title: string, prices: { [key: string]: string } }) => (
    <div className="bg-color6 p-4 rounded-lg mt-4">
        <h3 className="text-title3 font-bold mb-2">{title}</h3>
        <ul className="space-y-2">
            {Object.entries(prices).map(([location, price]) => (
                <li key={location} className="flex justify-between">
                    <span>{location}</span>
                    <span className="font-semibold">￥{price}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const PhotoServiceSection: React.FC = () => {
    const travelPrices = {
        "福山": "無料",
        "笠岡、内海": "3,000",
        "尾道": "3,000",
        "三原": "4,000",
        "倉敷": "5,000",
        "岡山市": "7,000",
        "広島市": "10,000"
    };

    const proPrices = {
        "1カット": "12,000",
        "2カット": "15,000",
        "3カット": "17,000"
    };

    const amateurPrices = {
        "1カット": "5,000",
        "2カット": "7,000",
        "3カット": "9,000"
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto overflow-y-auto h-full">
            <div className="bg-color1 p-4">
                <h2 className="text-title2 text-center">プロフィール写真について プロ＆素人システム</h2>
            </div>

            <div className="px-8 sm:px-16 md:px-24 space-y-6 py-8">

                <p className="text-gray-700 leading-relaxed">
                    プロのカメラマンがあなたのお気に入りの場所でプロフィールを撮影します。福山市内(内海以外）は無料で出張。お気に入りの場所を教えてください。一番遠くて広島市内まで撮影圏内です。
                </p>

                <div className="bg-color6 p-4 rounded-lg">
                    <p className="text-color3 font-semibold">
                        他人と被らないプロフで最高のSTARTを
                    </p>
                </div>

                <PriceTable title="出張エリア 料金表" prices={travelPrices} />

                <h3 className="text-title3 font-bold mt-8">料金について</h3>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold">プロカメラマン daiking</h4>
                        <p className="text-gray-600">もちろん機材も一流の高画質。綺麗に撮影します。</p>
                        <PriceTable title="プロカメラマン料金" prices={proPrices} />
                    </div>

                    <div>
                        <h4 className="font-semibold">素人カメラマン【代表が撮ります】</h4>
                        <p className="text-gray-600">色調整は出来ません。あなたの笑顔を引き出します。</p>
                        <PriceTable title="素人カメラマン料金" prices={amateurPrices} />

                        <div className='grid grid-cols-2 gap-4 mt-8'>
                            <Image src={Photo1} alt="photo1" className="w-full rounded-lg" />
                            <Image src={Photo2} alt="photo2" className="w-full rounded-lg" />
                            <Image src={Photo3} alt="photo3" className="w-full rounded-lg" />
                            <Image src={Photo4} alt="photo4" className="w-full rounded-lg h-full object-cover" />
                        </div>

                    </div>
                </div>

                <div className="bg-color6 p-4 rounded-lg mt-8">
                    <h3 className="text-title3 font-bold mb-2">写真のお渡しについて</h3>
                    <p className="text-gray-700">
                        画質を落とさないために「30days album」を使って写真のお渡しをさせていただきます。
                        写真の納品期間は、一週間以内にさせていただきます。
                    </p>
                </div>

                <div className="py-12  flex flex-col items-center gap-4">
                    <ContactLink />
                    <SnsLinkList />
                </div>
            </div>
        </div>
    );
};