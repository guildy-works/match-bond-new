import { SectionBar } from "@/components/SectionBar";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";

export const EventIntroduceSection = () => (
    <div className="mx-auto px-4 sm:px-0 w-full max-w-6xl flex flex-col items-center">
        <SectionBar text="Events" />

        <div className="max-w-5xl mx-auto px-4 py-12 relative">
            {/* 背景テキスト */}
            <div className="font-asterdam absolute top-40 left-0 right-0 text-[96px] w-[680px] text-color2 -rotate-12 font-thin ">
                Match Bond
            </div>

            {/* メインコンテンツ */}
            <div className="flex flex-col items-center space-y-4">
                <FadeAndSlideScrollTriggerAnimation tag="h2" className="text-title3 font-bold text-color3 mb-4">
                    Match-Bondが主催する女性がホッ♡とする合コン
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation tag="p" >
                    MatchBondが主催する街コン。通称「Matchコン」です。<br />
                    参加者同士の年齢が近い合コンをセッティングしています。
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation tag="p"  >
                    初めての出会いでも安心して楽しめる環境づくりに努めています。<br />
                    初めて会う人ばかりで緊張しますよね。でも安心してください。
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation tag="p" >
                    司会進行もあり、席替え、簡単なゲームなど、<br />
                    場を和やかにできるようにイベントも計画しています。
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </div>
    </div>
)