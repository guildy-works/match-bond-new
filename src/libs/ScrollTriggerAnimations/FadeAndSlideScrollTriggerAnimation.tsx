import React, { CSSProperties, ElementType, ReactNode } from "react";
import { ScrollTrigger } from "../ScrollTrigger/ScrollTrigger";
import { FadeAndSlideAnimation } from "../Animations/FadeAndSlideAnimation";

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
    tag?: ElementType;
}

export const FadeAndSlideScrollTriggerAnimation = ({ tag, children, delay, forceIn, transform, style, className, innerClassName, innerStyle }: FadeAndSlideScrollTriggerAnimationProps) => {
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
                    tag={tag}
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