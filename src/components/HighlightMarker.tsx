import { FadeAndSlideAnimation } from "@/libs/Animations/FadeAndSlideAnimation";
import { ScrollTrigger } from "@/libs/ScrollTrigger";

export const HighlightMarker = ({ children, }: {
    children: React.ReactNode,
}) => {
    return (
        <ScrollTrigger className={`relative inline-block overflow-hidden mx-1 -mb-1`}>{
            state => <div>
                <span className={`relative z-10 font-bold`}>{children}</span>
                <FadeAndSlideAnimation transform={{ translate: { x: "-200px" } }} in={state == 'entered'}
                    className={`absolute left-0 bottom-0 w-full h-1/2 bg-color3 opacity-50 transform -rotate-2`}
                    style={{
                        content: '""',
                    }}
                >

                </FadeAndSlideAnimation>
            </div>
        }

        </ScrollTrigger>
    );
};
