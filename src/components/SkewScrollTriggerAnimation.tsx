import React, { CSSProperties, ReactNode } from "react";
import { SkewAnimation } from "./Animations/SkewAnimation";
import { ScrollTrigger } from "@/libs/ScrollTrigger";

interface FadeAndSlideScrollTriggerAnimationProps {
    children: ReactNode;
    delay?: number;
    forceIn?: boolean;
    bgcolor?: string;
    style?: CSSProperties;
    className?: string;
    innerClassName?: string;
}

export const SkewScrollTriggerAnimation = ({ children, delay, forceIn, bgcolor, style, className,innerClassName }: FadeAndSlideScrollTriggerAnimationProps) => {
    return <ScrollTrigger
        forceIn={forceIn}
        once
        delay={delay}
        style={style}
        className={className}
    >
        {
            state => <SkewAnimation
                bgcolor={bgcolor}
                in={state === "entered"}
                style={style}
                innerClassName={innerClassName}
                className={className}
            >
                {children}
            </SkewAnimation>
        }
    </ScrollTrigger>;
};
