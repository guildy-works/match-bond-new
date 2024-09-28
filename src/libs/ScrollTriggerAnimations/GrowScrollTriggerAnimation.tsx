import type { ReactNode } from "react";
import React from "react";
import { ScrollTrigger } from "../ScrollTrigger/ScrollTrigger";
import { FadeAndSlideAnimation } from "../Animations/FadeAndSlideAnimation";

interface GrowScrollTriggerAnimationAnimationProps {
    children: ReactNode;
    delay?: number;
    forceIn?: boolean;
}

export const GrowScrollTriggerAnimation = ({ children, delay, forceIn }: GrowScrollTriggerAnimationAnimationProps) => {
    return <ScrollTrigger
        forceIn={forceIn}
        once
        delay={delay}
        style={{
            height: "100",
            width: "100%"
        }}
    >
        {(status, info) => {

            return (
                <FadeAndSlideAnimation in={status === "entered"}>
                    <div
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                    >
                        {children}
                    </div>
                </FadeAndSlideAnimation>
            );
        }}
    </ScrollTrigger>;
};
