import { TitleType, TitleType2 } from "@/components/Titles"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import Image from "next/image"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation"
import { HighlightMarker } from "@/components/HighlightMarker"
import { TransitionImage } from "@/libs/ScrollTriggerAnimations/TransitionImage"
import BabyImage from "@/assets/baby.jpg"

export const AboutSection4 = () => (
    <div className="max-w-5xl w-full mx-auto  bg-color6 p-8 gap-8 flex flex-col md:p-24 md:gap-24">
    <div className="flex flex-col gap-3 sm:gap-5 md:gap-8 items-center">
        <TitleType className="mx-auto" title="アフターフォロー" subTitle="After Follow" />

        <SkewScrollTriggerAnimation className="text-title2 mx-auto text-color3" skewPanelClass="!bg-color6">
            成婚がゴールじゃない
        </SkewScrollTriggerAnimation>

        <TransitionImage src={BabyImage} alt="img" className="mx-auto py-8 h-[380px] rounded-lg" />

        <FadeAndSlideScrollTriggerAnimation className="text-size2">
            成婚後はいずれ訪れるかもしれない妊娠と出産。<br />
            この時期の女性は特に自信が無くなり、<br />
            不安になってしまう方がとても多いです。<br /><br />

            赤ちゃんが０歳ならば、お父さん、お母さんも０歳。<br /><br />

            出産も育児も不安で当たり前ですよね。<br /><br />

            Match-Bondは成婚退会後もお客様に寄り添い、<br />
            アフターフォローで育児の相談にお答えします。<br /><br />

            Match-Bondの代表は保育士、子育て支援の経験をしてきました。<br /><br />

            安心してご相談ください。<br />
            お子様に寄り添い、ご両親に寄り添います。<br />
            お子様が6歳になるまでメールや電話、<br />
            対面の相談に乗ります。<br /><br />

            “辛い” “大変”といった思いを「まぁいっか。」「楽しい。」に少しでも<br />
            変えていけるように育児のアドバイスをします。
        </FadeAndSlideScrollTriggerAnimation>

    </div>
</div>

)