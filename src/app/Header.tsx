import { useState } from 'react';
import Link from "next/link";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { href: "/", label: "TOP" },
        { href: "/services", label: "サービス・プラン" },
        { href: "/news", label: "お知らせ" },
        { href: "/events", label: "イベント情報" },
        { href: "/", label: "Match Bondの想い" },
        { href: "/", label: "会社概要" },
        { href: "/contacts", label: "お問い合わせ" },
    ];

    return (
        <div className="p-4 bg-white  flex flex-col ">
            
            <div className="mt-auto mxl-auto h-20 pt-16">
                <div className="flex items-center">
                
                    <nav className="hidden lg:flex ml-auto gap-6 justify-end">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-gray-600 hover:text-color3 transition duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <button
                        className="lg:hidden text-gray-600 hover:text-color3 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

        </div>
    );
};