import { TitleType } from "@/components/Titles"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import Image from "next/image"
import AboutImage from "@/assets/img.jpg"

export const AboutSection1= () => <div className="w-full relative">
    {/* 背景パネル */}
    <div className="w-[70vw] absolute inset-0 bg-color8 -z-10" />

    <div className="max-w-screen-md grid md:grid-cols-2 py-24 mx-auto gap-3">
        <div className="flex flex-col gap-8 p-8">
            <TitleType title="私たちの想い" subTitle="Our Concept" />
            <FadeAndSlideScrollTriggerAnimation tag="p" >
                ２０２１年６月に始めた福山市の社会人サークル「福山遊部」。<br />
                徐々に知名度が広がり、サークルの中で出会った2人が交際をすることもありました。<br />
                “関わりのなかった二人を出合わせる場をもっと広げたい”<br />
                “お似合いの二人を繋げてあげたい”そんな想いからMatch-Bondは生まれました。<br />
            </FadeAndSlideScrollTriggerAnimation>
        </div>
        <div className="px-8 my-auto">
            <Image alt="私たちの想い" src={AboutImage} />
        </div>
    </div>
</div>
