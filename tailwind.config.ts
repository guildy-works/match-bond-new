import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontSize: {
            "size-p": "min(3vw, 0.82rem)",
            size3: 'min(2vw, 0.72rem)',
            size2: '1rem',
            size1: '1.25rem',
            title4: '1.563rem',
            title3:[ 'min(4vw, 1.1rem)',{letterSpacing: "0.24rem"}],
            title2:[ 'min(5vw, 2.2rem)',{letterSpacing: "0.24rem"}],
            title1:[ 'min(6vw, 2.8rem)',{letterSpacing: "0.24rem"}],
        },
        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            sans: ['Zen Old Mincho', 'sans-serif'],
            serif: ['Zen Old Mincho', 'sans-serif'],
            body: "sans",
            asterdam: ['Amsterdam', 'sans-serif'],
        },
        colors: {
            color1: '#f3d9d9',
            color2: '#aaded2',
            color3: 'rgb(223 150 150)',
            color4: '#24989f',
            color5: '#6cb9be',
            color6: '#b6d1d1',
            color7: '#e1e7e7',
            color8: '#f3f5f5',
            white: '#ffffff',
        },
    },
    plugins: [],
};
export default config;
