import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import clsx from "clsx"

export const AboutHeqading = (props: {
    title: string,
    num: string,
    className?: string,
    twoLine?: boolean
}) => {
    return <FadeAndSlideScrollTriggerAnimation innerClassName={clsx("flex items-center", props.className)}>
        <span className="text-[58px] text-color9">{props.num}</span>
        <h2 className={clsx("ml-4", props.twoLine ? "text-[18px]" : "text-[28px]")}>{props.title}</h2>
    </FadeAndSlideScrollTriggerAnimation>
}