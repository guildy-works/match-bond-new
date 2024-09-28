import { MdAttachMoney, MdFace, MdMail, MdMoney, MdSchool, MdShoppingCart } from "react-icons/md";
import Image, { StaticImageData } from 'next/image';

import MakeUp1 from "@/assets/makeup1.jpg";
import MakeUp2 from "@/assets/makeup2.jpg";
import MakeUp3 from "@/assets/makeup3.jpg";
import MakeUp4 from "@/assets/makeup4.jpg";
import MakeUp5 from "@/assets/makeup5.jpg";
import Link from "next/link";
import { SnsLinkList } from "@/components/SnsLinkList";
import { ContactLink } from "@/components/ContactLink";

const ImageWithCaption = ({ src, alt, }: { src: StaticImageData, alt: string, }) => (
    <div className="relative">
        <Image src={src} alt={alt} width={400} height={300} className="rounded-lg object-cover" />
    </div>
);

export const MakeUpSection: React.FC = () => {
    return (
        <div className="h-full max-w-5xl overflow-y-auto">
            <div className="bg-color1 p-4">
                <h2 className="text-title2 text-center">自信を持つためのメイク講座</h2>
            </div>

            <div className="p-8 py-16 space-y-8 flex flex-col px-8 sm:px-16 md:px-24 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <p className="text-gray-700 leading-relaxed">
                        「メイクをしたことがない。」<br />
                        「メイクのやり方が分からない。」<br /><br />

                        案外そう思う女性が多いことに気付いた25歳。<br /><br />
                        そんな方がもっと自分に自信を持てるようになるために、<br />
                        個別のメイク講座を開いています。
                    </p>
                    <ImageWithCaption
                        src={MakeUp5}
                        alt="メイク講座の様子"
                    />
                </div>

                <div className="bg-color6 p-4 rounded-lg">
                    <p className="text-color3 italic text-center">
                        「いつもと違ったメイクをしてみたい。」そんな方もぜひ受講しに来てください。
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-title3 font-bold flex items-center">
                        <MdSchool className="mr-2" size={24} />
                        メイク講座の様子をご紹介
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ul className="space-y-2 text-gray-700">
                            <li>まずはメイク落としなどですっぴんになります。代表も同じようにメイクを進行させていきます。</li>
                            <li>メイクも同時進行な為、大切にするポイントや、肌を綺麗に見せるためのコツなどもご紹介致します。</li>
                            <li>分からないこと、不安なことなどは聞きながら進めることが出来ます。</li>
                            <li>メイク道具が無い場合は、代表のメイク道具をお貸しすることも出来ます。</li>
                        </ul>
                        <ImageWithCaption
                            src={MakeUp4}
                            alt="メイク道具"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ImageWithCaption
                        src={MakeUp1}
                        alt="メイクプロセス1"
                    />
                    <ImageWithCaption
                        src={MakeUp2}
                        alt="メイクプロセス2"
                    />
                    <ImageWithCaption
                        src={MakeUp3}
                        alt="メイクプロセス3"
                    />
                </div>

                <div className="bg-color6 p-4 rounded-lg">
                    <h3 className="text-title3 font-bold mb-2 flex items-center">
                        <MdMoney className="mr-2" size={24} />
                        料金について
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between">
                            <span>1対1の個別メイクレッスン（1時間）</span>
                            <span className="font-semibold">￥2,500</span>
                        </li>
                        <li className="flex justify-between">
                            <span>メイク道具購入同行（1時間）</span>
                            <span className="font-semibold">￥5,000</span>
                        </li>
                    </ul>
                </div>

                <p className="mx-auto text-title4">
                    楽しくメイクの仕方を学んでみましょう<br />
                    もっと可愛いに出会えますよ !
                </p>

                <div className="py-12  flex flex-col items-center gap-4">
                    <ContactLink/>
                    <SnsLinkList />
                </div>
            </div>
        </div>
    );
};
