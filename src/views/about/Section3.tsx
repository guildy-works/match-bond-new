import { TitleType, TitleType2 } from "@/components/Titles"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import ProfileImage from "@/assets/profile.jpg"
import Profile2Image from "@/assets/profile2.JPG"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation"
import { HighlightMarker } from "@/components/HighlightMarker"
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage"

export const AboutSection3 = () => (
    <div className="max-w-5xl w-full mx-auto  bg-color8 p-8 gap-8 flex flex-col md:p-24 md:gap-24 items-center">
    <div className="flex flex-col gap-3 sm:gap-5 md:gap-8">
        <TitleType className="mx-auto" title="代表プロフィール" subTitle="Profile" />

        <SkewScrollTriggerAnimation className="text-title2 mx-auto text-color3" skewPanelClass="!bg-color8">
            成婚がゴールじゃない
        </SkewScrollTriggerAnimation>

        <div className="flex flex-wrap mx-auto gap-8 justify-center">
            <TransitionImage src={ProfileImage} alt="img" className="mx-auto py-8 h-[380px] rounded-lg" />
            <TransitionImage src={Profile2Image} alt="img" className="mx-auto py-8 h-[380px] rounded-lg" />

        </div>

        <FadeAndSlideScrollTriggerAnimation className="text-size2">
            保育士を務めながら、福山で社会人サークル【福山遊部】を立ち上げました。<br />
            初めのは4～6人程度しか集まらなかったのですが、<br />
            SNSを通じて沢山の方に参加していただけるようになり、<br />
            年齢層は広がっていき、19歳～50歳過ぎの方が参加してくださるようになりました。<br /><br />

            少しばかりですが、活動していた内容をお伝えします。<br /><br />

            沢山の施設にご協力いただきながら、<br />
            最大週2回のイベントをしてきました。<br />

            最終目標は、福山で行う大型｢大人だけの運動会企画」でした。<br /><br />

            私の都合が合わなくなり、<br />
            このサークルは解散してしまったのですが、<br />
            いつか、このMatch-Bondの活動の中で、<br />
            婚活を含めた運動会のようなものを企画できたらなと思います。<br /><br />

            毎週の婚活を「疲れたな。」｢ちょっとだるいな。」と<br />
            感じる会員様は沢山いるとお聞きしています。<br />

            せっかく頑張ろうと決めた婚活を、<br /><br />

            せっかくなら楽しんで欲しい。<br /><br />

            そんな思いで、Match-Bondを作り上げていきます。
        </FadeAndSlideScrollTriggerAnimation>

    </div>
</div>

)