import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"

export const TitleType = ({ title, subTitle, className }: { title: string, subTitle: string, className?: string }) => {

    return (
        <FadeAndSlideScrollTriggerAnimation className={className}>
            <h2 className="text-[2rem] text-color9/20 font-asterdam" >
                {subTitle}
            </h2>
            <h2 className="text-[1.5rem] text-title2 text-color9 font-Jost mt-2" >
                {title}
            </h2>
        </FadeAndSlideScrollTriggerAnimation>
    )
}

export const TitleType2 = ({ title, subTitle }: { title: string, subTitle: string, }) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            transform={{ scale: 0.94 }}>
            <h2 className="flex gap-2 items-center" >
                <span className="text-title1 font-bold">
                    {subTitle}
                </span>
                <span className="text-title2">
                    {title}
                </span>
            </h2>

        </FadeAndSlideScrollTriggerAnimation>
    )
}