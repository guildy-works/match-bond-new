'use client'

import { css } from "@emotion/css";
import Link from "next/link";
import styles from "./LinkButton.module.scss";

export const LinkButton  = (
    {
        href,
        title,
        subTitle,
    }: {
        href: string,
        title?: string
        subTitle?: string
    }
) => {

    return (
        <Link href={href} >
            <div className={styles.viewMore}>
                {
                    title && <h2
                        style={{
                            fontSize: "0.7rem",
                            userSelect: "none"
                        }}
                    >
                        {title}
                    </h2>
                }
                <h2
                    style={{
                        fontFamily: "'Jost', 'Noto Sans JP', sans-serif",
                        userSelect: "none"
                    }}>
                    {subTitle}
                </h2>
            </div>
        </Link>
    );
};
