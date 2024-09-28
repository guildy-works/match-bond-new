import { TitleType, TitleType2 } from "@/components/Titles"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import Image from "next/image"
import AboutImage from "@/assets/img.jpg"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation"
import { HighlightMarker } from "@/components/HighlightMarker"

export const AboutSection2 = () => (
    <div className="max-w-5xl w-full mx-auto bg-color8 p-8 flex flex-col gap-8 overflow-hidden">

        <div className="flex flex-col gap-3 sm:gap-5 md:gap-8">
            <TitleType2 title="すべての人の真摯な成婚を目指して" subTitle="01" />
            <SkewScrollTriggerAnimation className="text-size2" skewPanelClass="!bg-color8">
                ３組に１組、
                <HighlightMarker> 約３５％の方が離婚</HighlightMarker>
                しているのが日本の現状です。<br />
                しかし、
                <HighlightMarker> 結婚相談所で出会えた方の離婚率は１０％</HighlightMarker>ということを知っていますか？
            </SkewScrollTriggerAnimation>
            <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                相談所は結婚を真剣に考えている方だけが登録しています。<br />
                登録をするだけでお相手のプロフィールを確認できるため、<br />
                結婚後の生活を考えてお相手を選ぶことができます。<br />
            </SkewScrollTriggerAnimation>
            <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                結婚を真剣に考えているお相手を探すには、<br />
                かなりの体力、時間、お金も使うことから『結婚したくない』と思う<br />
                ２０代、３０代の方が増えてきました。<br />
                安心できる環境で、自分の希望に合ったお相手と効率的な婚活を始めてみませんか。<br />
            </SkewScrollTriggerAnimation>
        </div>

        <div className="mx-auto flex flex-col gap-3 sm:gap-5 md:gap-8">
            <TitleType2 title="シングルの方を応援" subTitle="02" />
            <SkewScrollTriggerAnimation className="text-size2" skewPanelClass="!bg-color8">
                Match-Bondでは、<br />
                シングルの方が安心してお見合いやイベントに参加できるように福山市の保育施設と連携を取り、<br />
                0～9歳までのお子様を預けられるようにしています。
            </SkewScrollTriggerAnimation>
            <SkewScrollTriggerAnimation className="text-size2" skewPanelClass="!bg-color8">
                せっかく始まる新しい出会い。<br />
                不安や心配にならずに理想のお相手が見つかるようにサポートいたします。
            </SkewScrollTriggerAnimation>
            <SkewScrollTriggerAnimation className="text-size2" skewPanelClass="!bg-color8">
                大切なお子様をプロの保育士が責任をもって保育いたしますので、<br />
                ご安心してイベントに参加しながら、<br />
                理想のお相手を探してくださいね。
            </SkewScrollTriggerAnimation>
            <SkewScrollTriggerAnimation className="text-size2" skewPanelClass="!bg-color8">
                「なんでシングルの人の成婚なの？」と質問があったので、<br />
                ここに記します。
            </SkewScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="text-size2">
                私は、保育士として勤めています。
                数年前、1歳の双子と年の離れた兄弟のいるシングルの方が保護者の方にいらっしゃいました。<br />
                双子は夜泣きがひどく、「毎日どちらかが泣いている、抱っこしないと泣くから、毎日イヤホンして抱っこしてます。<br />
                双子のどちらかが泣いたら、<br />
                もう一人も泣いて起きて、<br />
                上の子も“うるさい”って泣くんです。」と近所から虐待を疑われたことを泣きながら教えてくれました。<br />
                その情景が本当に目に浮かんで、<br />
                私自身も悲しかったんです。<br />
                上の子は別の園に通っていました。<br />
                双子を迎えに行ってから上の子のお迎え。<br />
                お疲れの仕事が終わり、双子を迎えに行って上の子を迎えに行ったとき、<br />
                すすっかり日も暮れてその園の最後のお迎えになりました。お母さんは保育士の方から<br />
                「結構一人で遊ぶ時間が長かったからかわいそう。」と言われたそうで、本当につらそうに、<br />
                悔しそうにされていました。
            </FadeAndSlideScrollTriggerAnimation>


            <FadeAndSlideScrollTriggerAnimation className="text-size2">
                そうしたらこのお母さんの役に立てるのだろう？
                夜に代わりに子守してあげたい。と思っていました。
                周りに相談しましたが、個人的なラインを渡すのはダメと念を押された私は、
                市のベビーシッターに登録しました。
                しかし、同業種ということもあり、
                正社員である以上、
                正式な登録はできませんでした。
                結局私はお母さんに何もできないまま。
                双子は通いやすい上の子の園に転園となりました。
                それからは、お母さんにもあの手のかかる双子にも会えていません。
                あの時、どうしてあげたらよかったんだろう。何度も何度も後悔します。
            </FadeAndSlideScrollTriggerAnimation>


            <FadeAndSlideScrollTriggerAnimation className="text-size2">
                もっとシングルの方が生きやすい環境にしたい。
                婚活をするのも「子どもがいるから」って諦めてほしくない。
                せっかく大事に育てている宝物のような子どものことを足枷に思ってほしくない。

                私がシングルの方を応援したいと思っている理由は、
                ここにつきます。きっとあの日の後悔を、
                無くなるはずもないのに追いかけているんです。
            </FadeAndSlideScrollTriggerAnimation>

        </div>


        <div className="mx-auto flex flex-col gap-3 sm:gap-5 md:gap-8">
            <TitleType2 title="一期一会　～ご縁を大切に～" subTitle="03" />

            <FadeAndSlideScrollTriggerAnimation className="text-size2">
                保育士を務めながら、福山で社会人サークル【福山遊部】を立ち上げました。初めのは4～6人程度しか集まらなかったのですが、SNSを通じて沢山の方に参加していただけるようになり、年齢層は広がっていき、19歳～50歳過ぎの方が参加してくださるようになりました。少しばかりですが、活動していた内容をお伝えします。

                結婚相談所の会員様だけでなく、Match-Bondを知っていただいた方には
                <HighlightMarker>街コン</HighlightMarker> や
                <HighlightMarker>合コン</HighlightMarker>
                などの
                <HighlightMarker> イベント情報</HighlightMarker>
                をホームページやInstagramでお知らせします。その際はぜひご参加ください。
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="text-size2">
                沢山の施設にご協力いただきながら、最大週2回のイベントをしてきました。【イベント内容は餅つき大会、クリスマス会、BBQ、スポーツ（バレーバドミントン、バスケ、ドッチ、鬼ごっこなど）‥など】

                最終目標は、福山で行う大型｢大人だけの運動会企画」でしたが叶わずにこのサークルは解散してしまったのですが、いつか、このMatch-Bondの活動の中で、婚活を含めた運動会のようなものを企画できたらなと思います。

                毎週の婚活を「疲れたな。」｢ちょっとだるいな。」と感じる会員様は沢山いるとお聞きしています。

                せっかく頑張ろうと決めた婚活を、せっかくなら楽しんで欲しい。そんな思いで、Match-Bondを作り上げていきます。
            </FadeAndSlideScrollTriggerAnimation>

        </div>


        <div className="mx-auto flex flex-col gap-3 sm:gap-5 md:gap-8">
            <TitleType2 title="理想のお相手を見つけるには？" subTitle="04" />

            <FadeAndSlideScrollTriggerAnimation className="text-size2">
                あなたの思う“理想”は何でしょうか？

                “優しい” “お金持ち” “決断力がある”　“見た目”

                人により、求める理想は様々です。

                あなたは生涯を共にするパートナーを1人から選ぶのと、100人の中から選ぶのではどちらがいいですか？

                <HighlightMarker>  “出会いの分母”</HighlightMarker>
                が大きいほど理想のお相手に出会いやすくなります。
                Match-Bondでは複数のお相手と同時に仮交際をすることができ、
                その中から本交際をするお相手を選ぶことができます。

                出会いの分母を増やすためには
                <HighlightMarker>「真剣に結婚を考えている人」</HighlightMarker>
                にどれだけ出会えるかが鍵になってきます。
                マッチングアプリや街コンなどの出会いも、
                もちろん素敵なご縁です。

                しかし、独身である証明書や収入証明書を確認できないことが大きなのデメリットですよね。

                Match-Bondは、会員様に様々な証明書類を提出していただいています。この証明書類から「本気の覚悟」がお相手に伝わります。Match-Bondであなたの理想のお相手を見つけてみませんか？
            </FadeAndSlideScrollTriggerAnimation>

        </div>
    </div>

)