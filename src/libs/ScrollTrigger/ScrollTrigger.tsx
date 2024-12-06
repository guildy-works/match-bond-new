import { useScrollContext } from "./contexts";
import { Marker } from "./debug";
import type { TransitionStatus } from "react-transition-group";
import { Transition } from "react-transition-group";
import type { CSSProperties, ElementType, ReactNode } from "react";
import React, { useEffect, useRef, useState } from "react";
import { useScrollTrigger } from "./useScrollTrigger";

const randomColor = () => "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

interface ScrollInfo {
    scrollDirection: "up" | "down";
    scrollProgress: number;
    isOverlap: boolean;
}

interface ScrollTriggerProps {
    children: ((status: TransitionStatus, scrollInfo: ScrollInfo) => ReactNode);
    delay?: number;
    once?: boolean;
    forceIn?: boolean;
    scrollStartOffset?: number | string;
    scrollEndOffset?: number | string;
    className?: string;
    style?: CSSProperties;
    tag?: ElementType;
}

export const ScrollTrigger = (props: ScrollTriggerProps) => {
    const [me, setMe] = useState<HTMLDivElement | null>(null);
    const context = useScrollContext();
    const trigger = useScrollTrigger({
        target: me ?? undefined,
        scrollStartOffset: props.scrollStartOffset,
        scrollEndOffset: props.scrollEndOffset,
    });
    const [mount, setMount] = useState(false);
    const color = useRef(randomColor());
    const nodeRef = useRef(null);
    const Tag = props.tag ?? "div"

    useEffect(() => {
        if (!trigger.isOverlap && props.once) {
            return;
        }
        setMount(trigger.isOverlap);
    }, [trigger]);

    useEffect(() => {
        if (props.forceIn) {
            setMount(true);
        }
    }, []);

    return (
        <Tag
            style={context.debug ?
                ({
                    border: `3px solid ${color.current}`,
                    ...props.style
                }) :
                ({
                    ...props.style
                })}
            className={props.className}
            ref={(raw: any) => {
                if (raw) {
                    setMe(raw);
                }
            }}
        >
            <Transition
                nodeRef={nodeRef}
                in={mount}
                timeout={props.delay ?? 0}
            >
                {state => props.children(state, trigger)}
            </Transition>
            {
                context.debug && <Marker
                    color={color.current}
                    scrollEndOffset={props.scrollEndOffset}
                    scrollStartOffset={props.scrollStartOffset}
                    target={me ?? undefined}
                    container={context.rawElement}
                />
            }
        </Tag>
    );
};
