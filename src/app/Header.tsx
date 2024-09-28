import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import Link from "next/link";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


const menuItems = [
    { href: "/", label: "TOP" },
    {
        href: "/about",
        label: "ABOUT", // プロフィール,アフターフォロー
        child: [
            { href: "/profile", label: "プロフィール" },
            { href: "/after_follow", label: "アフターフォロー" }
        ]
    },
    { href: "/services", label: "サービス・プラン" }, // ご利用の流れ
    { href: "/news", label: "お知らせ" },
    { href: "/contacts", label: "お問い合わせ" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="flex items-center sticky top-0 mt-0 md:mt-48 bg-white/50 backdrop-blur-md z-20">
                {/* Desktop */}
                <nav className="hidden w-full md:flex gap-6 justify-end py-8 px-20">

                    <div className='ml-auto' />
                    {menuItems.map((item, index) => {
                        return (
                            <div className="relative group" key={index} >
                                <Link
                                    href={item.href}
                                    className="text-navigation py-2 group-hover:text-color3 group-hover:border-b-2 border-color3 transition duration-300"
                                >
                                    {item.label}
                                </Link>

                                {item.child?.length && (
                                    <div className="absolute z-10 hidden top-6 group-hover:block group-hover:border-t-2 border-color3 w-max transition duration-300">
                                        <div className="p-4 bg-white rounded-sm w-full flex flex-col">
                                            {
                                                item.child?.map((child, index) => (
                                                    <Link
                                                        key={index}
                                                        href={child.href}
                                                        className="text-navigation hover:text-color3 transition duration-300"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))
                                            }

                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </nav>

                {/* Mobile */}
                <nav className="flex md:hidden w-full gap-6 justify-end py-8">
                    <button data-collapse-toggle="navbar-hamburger"
                        onClick={() => setIsMenuOpen(true)}
                        type="button"
                        className="inline-flex items-center justify-center p-2 w-8 h-8 text-sm rounded-full text-color3 hover:bg-color3/10">
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </div>
        </>
    );
};


interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({ isOpen, setIsOpen, children }: React.PropsWithChildren<Props>) => {
    const close = () => setIsOpen(false);

    return (

        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <DialogPanel className="relative bg-white w-full h-screen p-4 flex flex-col items-center">

                    <nav className="flex flex-col gap-6 h-full justify-center items-start">
                        {menuItems.map((item, index) => (
                            <Fragment key={item.href}>
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-navigation hover:text-color3 transition duration-300"
                                >
                                    {item.label}
                                </Link>
                                {
                                    item.child?.length && (
                                        item.child?.map(
                                            (child, index) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="ml-4 text-navigation hover:text-color3 transition duration-300"
                                                >
                                                    {child.label}
                                                </Link>
                                            )
                                        )
                                    )
                                }
                            </Fragment>
                        ))}
                    </nav>

                    <button data-collapse-toggle="navbar-hamburger"
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="fixed top-12 right-12 inline-flex items-center justify-center p-2 w-12 h-12 text-sm rounded-full text-color3 hover:bg-color3/10"
                        aria-controls="navbar-hamburger"
                        aria-expanded="false">
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
