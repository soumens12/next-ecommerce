"use client"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useContext } from 'react'
import { useCart } from '../context/CartContext'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function ProductCard({ item, bgColor, showButton = false }) {
    const { addToCart } = useCart();

    const { ref, inView } = useInView({
        triggerOnce: true, // animate only once
        threshold: 0.1,    // trigger when 10% visible
    });

    return (
        <motion.div ref={ref} initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="flex flex-col h-full p-4 rounded  pt-10 relative">
            {/* Image section with background */}
            <div className={`p-4 min-h-[220px] rounded-t-lg ${bgColor} relative`}>
                <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-contain rounded mb-2 absolute -top-10 left-0"
                />
            </div>

            {/* Content section */}
            <div className="bg-white dark:bg-slate-900 rounded-b-lg p-5 shadow-md">
                <p className="text-gray-500 mb-2 uppercase font-semibold text-sm">
                    {item.category}
                </p>
                <h3 className="font-semibold text-xl line-clamp-2 mb-3 min-h-[60px]">
                    {item.title}
                </h3>
                <div className='flex items-center mb-4 justify-between'>
                    <p className="text-violet-600 font-bold text-xl">${item.price}</p>
                </div>
                {showButton && (
                    <button className="bg-violet-600 w-full flex justify-between text-white py-3 px-5 rounded hover:bg-amber-300 hover:text-zinc-900 transition" onClick={() => addToCart(item)}>
                        Add to Cart <ShoppingCart className="w-6 h-6 text-white" />
                    </button>
                )}
            </div>
        </motion.div>
    )
}
