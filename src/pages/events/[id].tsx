import { fetchNews, fetchNewses, News } from '@/models/client'
import { useRouter } from 'next/router'
import { use, useEffect, useState } from 'react'

import Layout from '../layout'
import Link from 'next/link'
import { EventData, fetchEvent } from '@/models/fetchEvents'

export default function Page() {
    const router = useRouter()

    const [event, setEvent] = useState<EventData | null>(null)
    const formattedDate = event?.date?.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
    useEffect(() => {
        if (router.query.id) {
            fetchEvent(router.query.id as string).then((n) => {
                console.log(n)
                setEvent(n)
            }).catch((e) => {
                console.log(e)
            })
        }
    }, [router.query.id])

    return <Layout>
        <title>{"Match-Bond 福山|" + (event?.title ?? "")}</title>
        <meta name="description" content={"広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。"} />

        <div className='flex flex-col items-center mx-auto max-w-5xl p-4 sm:p-12 gap-4 sm:gap-8 min-h-[50vh]'>
            <h1 className='text-title2'>{event?.title ?? ""}</h1>

            <h2 className='text-title2 text-color3'>{formattedDate}</h2>

            <img src={event?.thumbnail?.url} alt={event?.title} className='w-full object-contain' style={{ maxHeight: "680px" }} />

            <div dangerouslySetInnerHTML={{ __html: event?.body ?? "" }} className='mt-8 flex flex-col gap-2 sm:gap-6 mb-auto'>


            </div>

            <Link href='/events' className='mt-8 px-6 bg-black text-white py-4 rounded-xl font-semibold hover:bg-black/60 transition duration-300 flex'>一覧に戻る</Link>
        </div>

    </Layout>
}