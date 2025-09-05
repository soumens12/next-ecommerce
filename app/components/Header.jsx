"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Menu, ShoppingCart, X } from "lucide-react";
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import CategoryDropdown from './CategoryDropdown';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { useCart } from '../context/CartContext';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { cartCount } = useCart()


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            {/* Fixed Header */}
            <header className={`fixed top-0 left-0 w-full shadow-md z-50 ${scrolled ? "bg-white dark:bg-slate-800 shadow-lg" : "bg-transparent shadow-none"} transition-colors duration-300`}>
                <div className="max-w-[1390px] relative mx-auto flex items-center justify-between px-4">
                    {/* Logo */}
                    <h1 className="text-xl font-bold">
                        <a href="/">
                            <Image src="/logo-shopping.png" width={180} height={40} className="w-30 dark:hidden h-auto md:w-40 lg:w-56" alt='Shopping Logo' />
                            <Image src="/logo-shopping-light.png" width={180} height={40} className="hidden w-30 dark:block h-auto md:w-40 lg:w-56" alt='Shopping Logo' />
                        </a>
                    </h1>

                    {/* Desktop Menu */}
                    <NavigationMenu className={"hidden md:flex"}>
                        <NavigationMenuList>
                            {/* Home */}
                            <NavigationMenuItem>

                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/" className='bg-transparent hover:text-violet-600'>
                                        Home
                                    </Link>
                                </NavigationMenuLink>

                            </NavigationMenuItem>

                            {/* Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='bg-transparent hover:text-violet-600'>Products</NavigationMenuTrigger>
                                <NavigationMenuContent >
                                    <CategoryDropdown />
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* About */}
                            <NavigationMenuItem>

                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/about" className='bg-transparent hover:text-violet-600'>
                                        About
                                    </Link>

                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <ModeToggle />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link href="/cart" className="relative cursor-pointer hidden md:block">
                        <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-white" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>


                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header >

            {/* Sidebar for Mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`
                }
            >
                {/* Close Button */}
                < button
                    className="absolute top-4 right-4"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={28} />
                </button >

                {/* Sidebar Menu */}
                <nav className="flex flex-col mt-16 space-y-6 p-6" >
                    <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/products" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>
            </div >

            {/* Background Overlay */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 bg-opacity-40 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )
            }
        </>
    )
}
