import { SectionType1 } from "@/components/SectionType1";
import { FadeAndSlideAnimation } from "@/libs/Animations/FadeAndSlideAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";

export const FeaturesSection = () => {

    return (
        <SectionType1 className="bg-color12/20">
            <div className="max-w-4xl mx-auto md:mt-40 flex flex-col gap-12 items-center pb-20">
                <FadeAndSlideScrollTriggerAnimation innerClassName="space-y-3 w-fit">
                    <h2 className="text-center">
                        <span className="text-color9 text-title1">6</span>
                        <span className="text-grey1 text-title2">つの特徴</span>
                    </h2>
                    <hr className="border-color11" />
                    <p className="mt-0 text-size2 text-grey1">
                        Match-Bondのサービス
                    </p>
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation tag="p" innerClassName="" className="text-color10">
                    「お得」「効率的」「幸せ」な婚活をサポートします。<br />

                    福山市近辺のお店で<br />
                    総額〇〇万円お得なサービスを受けながら、<br />
                    効率的に幸せな婚活・結婚を目指します。<br />
                    福山市のGoogle口コミNo１の婚活サポートです。
                </FadeAndSlideScrollTriggerAnimation>


                <CardGrid />
            </div>
        </SectionType1>

    )
}

const CardItem = ({ title, content, colorClass }: { title: string, content: string, colorClass: string }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation className={`text-center p-3 sm:p-6 rounded-3xl flex flex-col justify-center items-center min-h-28 ${colorClass}`}>
            <h2 className="text-size2 text-white mb-2 border-b-orange-100 border-b-2  pb-2 w-full ">{title}</h2>
            <p className="text-p text-white">{content}</p>
        </FadeAndSlideScrollTriggerAnimation>
    );
};

const CardGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <CardItem
                title="どんな婚活サポート？"
                content="「お得」「効率的」「幸せ」"
                colorClass="bg-color9"
            />
            <CardItem
                title="お得なサービスが受けれるお店一覧"
                content="婚活～結婚に有益なお店"
                colorClass="bg-color10"
            />
            <CardItem
                title="お客様の声"
                content="福山市No1のGoogle口コミ"
                colorClass="bg-color11"
            />
            <CardItem
                title="結婚相談所"
                content="「入会金・登録費」初期費用が0円"
                colorClass="bg-color9"
            />
            <CardItem
                title="婚活イベント"
                content="「お得」「効率的」「幸せ」"
                colorClass="bg-color10"
            />
            <CardItem
                title="恋愛相談窓口"
                content="初回15分無料 まずは、ココから！"
                colorClass="bg-color11"
            />
        </div>
    );
};

