
import { fetchEvent, fetchEvents } from "@/models/fetchEvents";
import Link from "next/link";

export async function generateStaticParams() {
    const articles = await fetchEvents();

    return articles
}

export default async function Page(props: { params: { id: string } }) {
    const news = await fetchEvent(props.params.id)
    const formattedDate = news?.date?.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="bg-color1 p-8 md:p-16">
            <title>{"Match-Bond 福山|" + (news?.title ?? "")}</title>
            <meta name="description" content={"広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。"} />

            <div className='bg-white rounded-lg shadow-sm flex flex-col items-center mx-auto max-w-5xl p-4 sm:p-12 gap-4 sm:gap-8 min-h-[50vh]'>
                <h1 className='text-title2'>{news?.title ?? ""}</h1>
                <h2 className='text-title2 text-color3'>開催日 {formattedDate}</h2>
                <img src={news?.thumbnail?.url} alt={news?.title} className='w-full object-contain' style={{ maxHeight: "680px" }} />

                <div dangerouslySetInnerHTML={{ __html: news?.body ?? "" }} className='mt-8 flex flex-col gap-2 sm:gap-6 mb-auto'>
                </div>

                <Link href='/news' className='mt-8 px-6 bg-black text-white py-4 rounded-xl font-semibold hover:bg-black/60 transition duration-300 flex'>一覧に戻る</Link>
            </div>
        </div>
    )
}