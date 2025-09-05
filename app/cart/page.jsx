"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    const { carts, removeFromCart, cartCount, increaseQty, decreaseQty } = useCart();

    // if (!carts.length) {
    //     return <p className="text-center mt-10">Your cart is empty.</p>;
    // }


    return (
        <>
            <section className='bg-slate-100 dark:bg-slate-900 py-12 pt-30 relative overflow-hidden'>
                <div className='container mx-auto px-4 relative z-10'>
                    <h1 className="text-4xl font-bold mb-4 text-center capitalize">Your Cart</h1>
                </div>
                <div className="absolute md:w-60 md:h-50 lg:w-100 lg:h-90 rounded-t-full  right-25 -bottom-10 lg:-bottom-30 rotate-0 bg-violet-500 opacity-20 z-0"></div>
            </section>
            <section className="min-h-[60vh] py-12 px-4">
                <div className="max-w-[1200px] mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-4">Your Cart ({cartCount} items)</h2>

                    <div className="w-full mx-auto">
                        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-400">Shopping Cart</h1>
                        <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6">
                            <div className="lg:col-span-2 space-y-6">

                                {
                                    !carts.length ? <div className="flex gap-4 bg-white dark:bg-slate-900 px-4 py-6 rounded-md shadow-sm border dark:border-0 border-gray-200 justify-center items-center flex-col">
                                        <p><span ><svg class="w-10 h-10 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                        </svg>
                                        </span></p>
                                        <p>Your cart is empty.</p>
                                    </div> : (
                                        carts.map((item) => (
                                            <div key={item.id} className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
                                                <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
                                                    <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                                                        <Image src={item.image} alt={item.title} width={100} height={100} className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="flex flex-col gap-4">
                                                        <div>
                                                            <h3 className="text-sm sm:text-base font-semibold text-slate-900">{item.title}</h3>
                                                            <p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">Category: <span className="inline-block bg-violet-200 text-slate-900 px-4 capitalize py-1 rounded-xl">{item.category}</span></p>
                                                        </div>
                                                        <div className="mt-auto">
                                                            <h3 className="text-sm font-semibold text-slate-900">{item.price}</h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ml-auto flex flex-col">
                                                    <div className="flex items-start gap-4 justify-end">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-pink-600 inline-block" viewBox="0 0 64 64">
                                                            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                                        </svg>

                                                        <svg onClick={() => removeFromCart(item.id)} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-red-600 inline-block" viewBox="0 0 24 24">
                                                            <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex items-center gap-3 mt-auto">
                                                        <button onClick={() => decreaseQty(item.id)} type="button"
                                                            className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 outline-none rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                                                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                            </svg>
                                                        </button>
                                                        <span className="font-semibold text-base leading-[18px]">{item.quantity}</span>
                                                        <button onClick={() => increaseQty(item.id)} type="button"
                                                            className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-800 outline-none rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                                                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                                }



                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
                                <ul className="text-slate-500 font-medium space-y-4">

                                    <li className="flex flex-wrap gap-4 text-sm">Total Item <span className="ml-auto font-semibold text-slate-900 dark:text-slate-400">{cartCount}</span></li>
                                    <hr className="border-slate-300" />
                                    <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900 dark:text-white">Total Price<span className="ml-auto">$
                                        {carts.reduce(
                                            (total, item) => total + item.price * (item.quantity || 1),
                                            0
                                        )}</span></li>
                                </ul>
                                <div className="mt-8 space-y-4">
                                    <button type="button" className="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-800 hover:bg-slate-900 text-white rounded-md cursor-pointer">Buy Now</button>
                                    <Link href="/">
                                        <button type="button" className="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-50 hover:bg-slate-100 text-slate-900 border border-gray-300 rounded-md cursor-pointer">Continue Shopping</button>
                                    </Link>
                                </div>
                                <div className="mt-5 flex flex-wrap justify-center gap-4">
                                    <img src='https://readymadeui.com/images/master.webp' alt="card1" className="w-10 object-contain" />
                                    <img src='https://readymadeui.com/images/visa.webp' alt="card2" className="w-10 object-contain" />
                                    <img src='https://readymadeui.com/images/american-express.webp' alt="card3" className="w-10 object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </>

    );
}
