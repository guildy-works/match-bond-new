import { SectionBar } from "@/components/SectionBar"
import Link from "next/link";

const newsItems = [
    { date: '2024.04.23', title: '結婚相談所サービスをリニューアルしました' },
    { date: '2024.04.13', title: '成功する婚活の秘訣' },
    { date: '2024.04.06', title: '春の特別キャンペーンを開始しました' },
    { date: '2024.04.02', title: '婚活で大切な自己PRのコツ' },
    { date: '2024.03.22', title: '結婚相談所を選ぶ際のポイント' }
];

export const NewsSection = () => {

    return (
        <div className="mx-auto px-4 sm:px-0 w-full max-w-4xl">
            <SectionBar text="News" />
            <div className="mx-auto">
                <h3 className="text-4xl mt-4 sm:mt-8">新着情報・お知らせ</h3>
                <ul className="divide-y divide-gray-200">
                    {newsItems.map((item, index) => (
                        <li key={index} className="py-4 flex justify-between items-center">
                            <span className="text-pink-600">{item.date}</span>
                            <Link className="ml-4" href="">{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}