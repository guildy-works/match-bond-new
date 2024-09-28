import { SectionType1 } from "@/components/SectionType1"

export const ContactSection = () => {

    return (
        <SectionType1 disableLine className="bg-color8" innerClassName="items-center">

                <div className="bg-white p-8 md:p-16 md:px-48 w-full my-8 md:my-32">
                    <h2 className="text-title2 font-jost text-center mb-2">CONTACT</h2>
                    <p className="text-center text-gray-600 mb-8">お問い合わせ・ご相談はお気軽にどうぞ。</p>

                    <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
                        <a href="/contacts" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            お問い合わせフォーム
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
   
        </SectionType1>
    )
}
