"use client"

import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { SectionBar } from "@/components/SectionBar"
import { AboutSection1 } from "@/views/about/Section1"

import { AboutSection4 } from "@/views/about/Section4"
import { AboutSection3 } from "@/views/about/Section3"
import { AboutSection2 } from "@/views/about/Section2"

export default () => {

    return (
        <div className="w-full flex flex-col gap-8 md:gap-24 my-12 md:my-24">
            <FadeAndSlideScrollTriggerAnimation className="mx-auto">
                <section className="px-4">
                    <div className="container mx-auto ">
                        <SectionBar text='About' />

                        <p className="text-title3 mt-8 mb-8">
                            あなたの人生に新しい出会いと可能性を
                        </p>
                    </div>
                </section>
            </FadeAndSlideScrollTriggerAnimation>

            <AboutSection1 />

            <div className="flex flex-wrap gap-8 ">
                <AboutSection2 />
                <AboutSection3 />
                <AboutSection4 />
            </div>

        </div>
    )
}
