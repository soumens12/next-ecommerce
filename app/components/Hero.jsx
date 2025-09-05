"use client"
import Image from 'next/image'
import Link from "next/link";
import { motion } from "framer-motion";
import React from 'react'

export default function Hero() {
    return (
        <section className="bg-slate-100 dark:bg-slate-900 pt-20 min-h-[90vh] flex items-center justify-center px-4">
            <div className='max-w-[1390px] relative mx-auto px-4'>
                <div className='w-full lg:flex items-center flex-column'>
                    <div className='w-full md:w-3/4 lg:w-1/2 mx-auto order-2 lg:order-1 text-center lg:text-left'>
                        <motion.p initial={{ opacity: 0, y: -40 }}      // start hidden & lower
                            animate={{ opacity: 1, y: 0 }}       // fade in & move up
                            transition={{ duration: 0.3, ease: "easeOut" }} className="text-lg text-violet-500 uppercase md:text-xl mb-4 flex items-center justify-center lg:justify-start gap-4">
                            Trendy Fashion Collection
                            <span className='flex gap-4'>
                                <span className='bg-violet-700 w-3 h-3 rounded-full'></span>
                                <span className='bg-amber-300 w-3 h-3 rounded-full'></span>
                                <span className='bg-violet-700 w-3 h-3 rounded-full'></span>
                            </span>
                        </motion.p>
                        <motion.h1 initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            Fashion Create Good Lifestyle
                        </motion.h1>

                        <motion.div initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/category/men's clothing" className="bg-violet-600 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-300 hover:text-white transition">Shop Now</Link>

                        </motion.div>
                    </div>
                    <div className='w-full md:w-3/4 lg:w-1/2 mx-auto order-1 mt-4 lg:mt-0 lg:order-2 relative'>
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}      // start hidden & lower
                            animate={{ opacity: 1, y: 0 }}       // fade in & move up
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='relative z-10'
                        >
                            <Image src="/shop-hero1.png" width={400} height={400} className="w-full h-auto" alt='Hero Image' />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}   // start hidden & lower
                            whileInView={{ opacity: 1, y: 0 }} // animate when in view
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}          // animate only once
                            className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-120 lg:h-120 bottom-0 left-1/2 -translate-x-1/2 bg-violet-500 rounded-t-full  z-1"
                        >

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}   // start hidden & lower
                            whileInView={{ opacity: 1, y: 0 }} // animate when in view
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}          // animate only once
                            className="absolute w-20 h-10 md:w-30 md:h-15 lg:w-30 lg:h-15 rotate-180 top-20 left-25  bg-yellow-500 rounded-t-full z-1"
                        >

                        </motion.div>

                    </div>
                </div>
            </div>
        </section >
    )
}
