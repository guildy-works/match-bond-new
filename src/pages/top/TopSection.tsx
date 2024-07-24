import Image from "next/image";

import TopImage from "../../../public/top.jpg";
import TopImage2 from "../../../public/top2.jpg";
import Link from "next/link";

export const TopSection = () => {

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="h-22 sm:h-44 w-full flex p-2 sm:p-4">

                <div className="flex gap-4 ml-auto mt-auto">
                    <Link href="/" className="link">TOP</Link>
                    <Link href="/" className="link active">私たちについて</Link>
                    <Link href="/" className="link">料金プラン</Link>
                    <Link href="/" className="link">ご利用の流れ</Link>
                    <Link href="/" className="link">お問い合わせ</Link>
                </div>

            </div>

            <div className="w-full flex flex-wrap">
                <div className="flex-1 ">
                    <div className="bg-color2 h-22 sm:h-44 w-full">

                    </div>

                    <div className="w-full flex justify-center -mt-3">
                        <div className="relative">
                            <div className=" inset-0 m-auto text-center">
                                <h1 className="font-asterdam text-title1">
                                    Match Bond
                                </h1>
                                <h3 className="text-title3 mt-5 sm:mt-7">
                                    福山市の完全無料結婚相談所
                                </h3>

                                <p className="text-title2 mt-5 sm:mt-7">
                                    大切な人へ、思いを込めて。

                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <Image
                    src={TopImage}
                    className="h-4/6 w-3/4 object-cover"
                    style={{ maxHeight: "800px", maxWidth: "648px" }}
                    alt="Top"
                    width={1920}
                    height={1080}
                    priority
                />



            </div>
            <div className="bg-color1 h-48 w-full p-6 relative">

            </div>
        </div>

    )
}