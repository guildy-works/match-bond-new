import React from 'react';

import { MdMail, MdStar } from 'react-icons/md';
import { IoMdClock } from 'react-icons/io';
import CocoChan from '@/assets/option-uranai.jpg';
import Image from 'next/image';
import { SnsLinkList } from '@/components/SnsLinkList';
import Link from 'next/link';
import { ContactLink } from '@/components/ContactLink';

export const UranaiSection = () => {
    return (
        <div className="max-w-3xl overflow-y-auto h-full ">
            <div className="bg-color1 p-4">
                <h2 className="text-title2 text-center">占い師さんのご紹介 COCOちゃん</h2>
            </div>

            <div className='px-8 sm:px-16 md:px-24 '>
                <div className='py-12 w-fit mx-auto'>
                    <Image src={CocoChan} alt="COCOさん" className='max-h-96 object-contain rounded-lg overflow-hidden w-fit' />
                </div>

                <div className="flex flex-col gap-4 p-8 py-16 space-y-8 ">
                    <p className="text-gray-700 leading-relaxed">
                        Match-Bondの代表が<span className="font-semibold text-color3">『すごい！すごい！』『当たりすぎて引く！！！』</span>と称賛している占い師COCOさん。
                    </p>

                    <div className="flex items-center space-x-2 text-gray-600">
                        <IoMdClock size={20} />
                        <span>10分 ¥1,000から占ってもらえます。</span>
                    </div>

                    <p className="text-gray-700">
                        COCOさんは津山で美容師をしながら、完全予約制で占いも行っています。友達や旦那にも勧めて占ってもらいましたが、大好評です！
                    </p>

                    <div className="bg-color6 p-4 rounded-lg">
                        <p className="text-color3 italic">
                            私が初めて占ってもらった時、何故か旦那のことも当てられてしまい涙が出ました😂
                        </p>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>他の占いよりも当たると評判です。</li>
                        <li>背中を押してくれるアドバイスも好評です。</li>
                        <li>占いは副業で、主に美容師として活動されています。</li>
                        <li>ネット検索では見つかりにくいので、口コミでの紹介が中心です。</li>
                    </ul>

                    <p className="text-gray-700">
                        元々は美容室のお客様にサービスで占っていましたが、口コミで評判が広がり、今では倉敷からもお客様が来られるほどです。
                    </p>

                    <div className="bg-color6 p-4 rounded-lg flex items-center space-x-2">
                        <MdStar className="text-color3" size={24} />
                        <p className="text-gray-800">
                            占い師の予約は私のDMやお問い合わせから受け付けています。気になる方はぜひお越しください！
                        </p>
                    </div>

                    <div className="py-12  flex flex-col items-center gap-4">
                        <ContactLink />
                        <SnsLinkList />
                    </div>
                </div>
            </div>
        </div>
    );
};
