import { FadeAndSlideScrollTriggerAnimation } from "@/components/FadeAndSlideScriollTriggerAnimation";
import { LinkButton } from "@/components/LinkButton";
import { SectionBar } from "@/components/SectionBar"
import Link from "next/link";
import { eventsMock } from "../events/eventsMock";
import { HighlightMarker } from "@/components/HighlightMarker";

export const EventsSection = () => {
    return (
        <div className="mx-auto px-4 sm:px-0 w-full max-w-5xl">
            <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "-10vw" } }}>
                <SectionBar text="Events" />

                <h2 className="text-4xl font-bold mt-3 sm:mt-5">
                    Match-Bondの魅力的な婚活イベント
                </h2>
            </FadeAndSlideScrollTriggerAnimation>


            <div className="mt-3 sm:mt-5">
                <div className="mb-12">
                    <FadeAndSlideScrollTriggerAnimation>
                        <div className="text-xl mb-4 text-gray-700 leading-relaxed">
                            Match-Bondでは、
                            <HighlightMarker>参加者同士の年齢が近い合コン</HighlightMarker>
                            をセッティングしています。<br />
                            初めて会う人ばかりで緊張しますよね。<br />
                            でも安心してください。
                        </div>
                        <div className="text-xl mb-4 text-gray-700 leading-relaxed">
                            <HighlightMarker >司会進行</HighlightMarker>もあり、
                            <HighlightMarker>席替え</HighlightMarker>、
                            <HighlightMarker>簡単なゲーム</HighlightMarker>など、
                            場を和やかにできるようにイベントも計画しています。
                        </div>
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation className="mt-8 bg-color2  p-4 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-2 text-color3">Match-Bondの特徴</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>年齢が近い参加者同士のマッチング</li>
                            <li>経験豊富な司会者によるスムーズな進行</li>
                            <li>アイスブレイクのための楽しいゲーム</li>
                            <li>自然な交流を促す工夫された席替え</li>
                            <li>安心・安全な環境での出会い</li>
                        </ul>

                    </FadeAndSlideScrollTriggerAnimation>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsMock.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

            </div>

            <div className="w-full flex justify-end mt-4 sm:mt-8">
                <div className="flex-1" />

                <FadeAndSlideScrollTriggerAnimation className="w-full sm:w-auto">
                    <LinkButton title="VIEW MORE" subTitle="イベント一覧" href="/events"></LinkButton>
                </FadeAndSlideScrollTriggerAnimation>
            </div>

        </div>
    )
}

const EventCard: React.FC<{ event: any }> = ({ event }) => {
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <FadeAndSlideScrollTriggerAnimation
            className=" cursor-pointer"
            innerClassName="flex flex-col h-full drop-shadow-md rounded-lg overflow-hidden transition-all bg-white hover:drop-shadow-2xl"
        >

            <img src={event.eyeCatch} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-grow">
                <p className="text-sm text-gray2 mb-2">{formattedDate}</p>
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-grey1 text-base">{event.summary}</p>
            </div>

            <div className="px-4 py-2 text-right mt-auto">
                <Link href={"/events/" + event.id} className="text-font2"　>詳細を見る</Link>
            </div>

        </FadeAndSlideScrollTriggerAnimation>
    );
};