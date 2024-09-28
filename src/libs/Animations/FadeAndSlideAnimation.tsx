import { ElementType, ReactNode, useState } from "react";
import { Transition, TransitionProps } from "../ScrollTrigger";
import clsx from "clsx";


interface FadeAndSlideAnimationProps extends TransitionProps {
    transform?: {
        translate?: {
            x?: string;
            y?: string;
        }
        rotate?: string;
        scale?: number;
        // eslint-disable-next-line @typescript-eslint/ban-types
        transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
    },
    transformTo?: {
        translate?: {
            x?: string;
            y?: string;
        }
        rotate?: string;
        scale?: number;
        // eslint-disable-next-line @typescript-eslint/ban-types
        transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
    }
    tag?: ElementType;
}

export const FadeAndSlideAnimation = (props: FadeAndSlideAnimationProps) => {
    const { transform, transformTo } = props;

    const buildTransform = (transform: FadeAndSlideAnimationProps["transform"], scale: number) =>
        `translate(${transform?.translate?.x ?? "0"},${transform?.translate?.y ?? "0"}) rotate(${transform?.rotate ?? "0"}) scale(${transform?.scale ?? scale})`

    const Tag = props.tag ?? "div";

    return <Transition
        in={props.in}
        delay={props.delay}
    >
        {state => {

            return <Tag
                className={clsx(props.className)}
                style={{
                    ...{
                        transformOrigin: transform?.transformOrigin,
                        transform: buildTransform(transform, 0.8),
                        opacity: 0,
                        transition: `all ${parse(props.delay)} ${props.duration ?? 3000}ms cubic-bezier(0.18, 0.66, 0.08, 0.97)`
                    },
                    ...(state === "entered"
                        ? {
                            transform: buildTransform(transformTo, 1),
                            opacity: 1,
                        }
                        : {}),
                    ...props.style,
                }}
            >
                {props.children as ReactNode}
            </Tag>
        }}
    </Transition>;
};

const parse = (delay?: number | {
    appear?: number | undefined;
    enter?: number | undefined;
    exit?: number | undefined
}) => {
    let del = 0
    if (typeof delay === "object") {
        del = delay?.appear ?? 0;
    }

    if (!del) {
        return ""
    }

    return `${del}ms`
};