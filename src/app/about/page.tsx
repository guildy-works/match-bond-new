"use client"

import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { SectionBar } from "@/components/SectionBar"
import { AboutSection1 } from "@/views/about/Section1"

import { AboutSection4 } from "@/views/about/Section4"
import { AboutSection3 } from "@/views/about/Section3"
import { AboutSection2 } from "@/views/about/Section2"
import Link from "next/link"
import { MdMail } from "react-icons/md"
import { ContactLink } from "@/components/ContactLink"

export default () => {

    return (
        <div className="w-full flex flex-col gap-8 md:gap-24 my-12 md:my-24">
            <title>{"Match-Bond 福山|ABOUT"}</title>
            <meta name="description" content={"広島県福山市を中心に活動する結婚相談所。初期費用無料の完全成功報酬型。一期一会、ご縁を大切に、あなたの幸せを応援します。"} />


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

            <FadeAndSlideScrollTriggerAnimation innerClassName="w-fit" className="mx-auto">
                <ContactLink />
            </FadeAndSlideScrollTriggerAnimation>
        </div>
    )
}
