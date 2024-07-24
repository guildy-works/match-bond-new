'use client'

import { useWindowsSize } from "../libs/useWindowSize";
import styles from "./ScrollIndicator.module.scss";

export const ScrollIndicator = () => {
    const size = useWindowsSize(500);

    return <div
        style={{
            bottom: `calc(100vh - ${size.innerHeight}px + 48px)`,
        }}
        className={styles.container}
    >
        <div >
            SCROLL
        </div>
        <div className={styles.bar}></div>
    </div>;
};
