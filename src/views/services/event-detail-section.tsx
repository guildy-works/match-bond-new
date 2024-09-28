import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { EventIntroduceSection } from "../events/EventIntroduceSection";
import { MdContactMail, MdDoorBack, MdPerson } from 'react-icons/md';
import { SnsLinkList } from "@/components/SnsLinkList";
import { ContactLink } from "@/components/ContactLink";
import Image from 'next/image';

import Kon1Image from '@/assets/kon1.jpg';
import Kon2Image from '@/assets/kon2.jpg';
import Kon3Image from '@/assets/kon3.jpg';
import Kon4Image from '@/assets/kon4.jpg';
import Kon5Image from '@/assets/kon5.jpg';
import { ScrollContainer } from "@/libs/ScrollTrigger";
import Link from "next/link";

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
    <div className="p-6 rounded-lg flex items-start space-x-4">
        <div className="text-color3 text-3xl">{icon}</div>
        <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

export const EventDetailSection = () => (
    <ScrollContainer className="h-full max-w-5xl overflow-y-auto"
        innerClassName="p-8 py-16 space-y-8 flex flex-col px-8 sm:px-16 md:px-24 ">
        <EventIntroduceSection />
        <div className="px-4 sm:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Feature
                    icon={<MdPerson />}
                    title="ニックネーム参加"
                    description="知らない人に本名を知られるのが怖い人のために"
                />
                <Feature
                    icon={<MdContactMail />}
                    title="連絡先の交換NG"
                    description="連絡先を聞かれたら断れない人のために"
                />
                <Feature
                    icon={<MdDoorBack />}
                    title="女性が先に退出"
                    description="女性が先に退出、5分後に男性退出です。（合コン後の誘いが怖い人のために）"
                />
            </div>

            <div className="mb-12 max-w-2xl mx-auto space-y-4 flex flex-col items-center">
                <h2 className="text-title4 text-color3">連絡先交換について</h2>
                <p className="text-gray-600">
                    連絡先交換は絶対にできないわけではありません。<br />
                    合コンの終盤には【コンタクトカード】をお渡しします。
                </p>
                <div className="bg-color1 p-4 rounded-md">
                    <h3 className="font-semibold mb-2">コンタクトカードの仕組み</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>自分の番号と、気になるお相手の番号を記入</li>
                        <li>当社から気になるお相手に連絡</li>
                        <li>相互OKの場合のみ連絡先を交換</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-4 mt-8 mx-auto max-w-xl'>

            <Image src={Kon2Image} alt="Kon" className="h-full object-cover rounded" />

            <Image src={Kon3Image} alt="Woman" className="h-full object-cover rounded" />

            <Image src={Kon4Image} alt="Kon" className="h-full object-cover rounded" />

            <Image src={Kon5Image} alt="Kon" className="h-full object-cover rounded" />

        </div>

        <div className="py-12  flex flex-col items-center gap-4">
            <Link href="/events"
                className="w-fit bg-black text-white px-12 py-4 rounded-xl font-semibold hover:bg-black/60 transition duration-300 flex">
                イベント情報を見る
            </Link>

            <ContactLink />
            <SnsLinkList />
        </div>
    </ScrollContainer>
)