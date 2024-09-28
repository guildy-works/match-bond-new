import type { CSSProperties, ReactNode} from "react";
import React, { useEffect, useState } from "react";
import type { TransitionStatus } from "react-transition-group";
import { Transition } from "react-transition-group";

export interface TransitionProps {
    children?: ReactNode | ((status: TransitionStatus) => ReactNode);
    delay?: number | {
        appear?: number | undefined;
        enter?: number | undefined;
        exit?: number | undefined
    };
    duration?: number;
    in?: boolean;
    className?: string;
    style?: CSSProperties;
}

export const TransitionTrigger = (props: TransitionProps) => {
    const [isIn, setIn] = useState(false);
    useEffect(() => setIn(!!props.in), [props.in]);

    return <>
        <Transition
            className={props.className}
            style={props.style}
            in={isIn}
            timeout={props.delay ?? 0}
        >
            {props.children}
        </Transition>
    </>;
};