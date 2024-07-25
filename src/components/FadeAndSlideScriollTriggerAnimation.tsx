import React, { CSSProperties, ReactNode } from "react";
import { FadeAndSlideAnimation } from "./Animations/FadeAndSlideAnimation";
import { ScrollTrigger } from "@/libs/ScrollTrigger";

interface FadeAndSlideScrollTriggerAnimationProps {
    children: ReactNode;
    delay?: number;
    forceIn?: boolean;
    transform?: {
        translate?: {
            x?: string;
            y?: string;
        }
        rotate?: string;
        scale?: number;
        // eslint-disable-next-line @typescript-eslint/ban-types
        transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
    }
    style?: CSSProperties;
    className?: string;
    innerClassName?: string;
    innerStyle?: CSSProperties;
}

export const FadeAndSlideScrollTriggerAnimation = ({ children, delay, forceIn, transform, style, className,innerClassName,innerStyle}: FadeAndSlideScrollTriggerAnimationProps) => {
    return (
        <ScrollTrigger
            forceIn={forceIn}
            delay={delay}
            once
            style={style}
            className={className}
        >
            {state =>
                <FadeAndSlideAnimation
                    in={state === "entered"}
                    delay={delay}
                    transform={transform}
                    style={innerStyle}
                    className={innerClassName}
                >
                    {children}
                </FadeAndSlideAnimation>
            }
        </ScrollTrigger>
    );
};