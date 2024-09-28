import { fetchNews, fetchNewses, News } from '@/models/client'
import { useRouter } from 'next/router'
import { use, useEffect, useState } from 'react'

import Layout from '../layout'
import Link from 'next/link'

export default function Page() {
    const router = useRouter()

    const [news, setNews] = useState<News | null>(null)

    useEffect(() => {
        if (router.query.id) {
            fetchNews(router.query.id as string).then((n) => {
                console.log(n)
                setNews(n)
            })
        }
    }, [router.query.id])

    return <Layout>
        <title>{"Match-Bond 福山|" + (news?.title ?? "")}</title>
        <meta name="description" content={"広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。"} />

        <div className='flex flex-col items-center mx-auto max-w-5xl p-4 sm:p-12 gap-4 sm:gap-8 min-h-[50vh]'>
            <h1 className='text-title2'>{news?.title ?? ""}</h1>

            <div dangerouslySetInnerHTML={{ __html: news?.content ?? "" }} className='mt-8 flex flex-col gap-2 sm:gap-6 mb-auto'>


            </div>

            <Link href='/news' className='mt-8 px-6 bg-black text-white py-4 rounded-xl font-semibold hover:bg-black/60 transition duration-300 flex'>一覧に戻る</Link>
        </div>

    </Layout>
}