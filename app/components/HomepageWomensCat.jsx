"use client";

import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "./ProductCard";

export default function HomepageWomensCat() {
    const { carts, products, loading } = useContext(CartContext);

    useEffect(() => {
        console.log("Carts updated:", carts);
    }, [carts]);

    // if (loading) return <p>Loading...</p>;
    // if (!carts || carts.length === 0) return <p>No products available.</p>;

    // Filter products by category
    const womensCloth = products.filter(p => p.category === "women's clothing").slice(0, 3);
    const colors = ["bg-purple-200", "bg-pink-200", "bg-yellow-200"];

    return (
        <section className="bg-slate-700 py-12 px-4 relative overflow-hidden">
            <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold mb-8 text-center text-white dark:text-zinc-100">Women's Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {
                        loading ? (
                            <p className="text-center text-white col-span-3">Loading...</p>
                        ) : !products || products.length === 0 ? (
                            <p className="text-center text-white col-span-3">No products available.</p>
                        ) : (
                            womensCloth?.map((item, index) => (
                                <ProductCard key={item.id} item={item} bgColor={colors[index % colors.length]} />
                            ))
                        )}
                </div>
            </div>

            <div className="absolute w-20 h-20 md:w-40 md:h-30 lg:w-80 lg:h-70 rounded-t-full  right-10 bottom-0 rotate-0 bg-violet-500 opacity-20 z-0"></div>
            <div className="absolute w-20 h-20 md:w-40 md:h-40 lg:w-120 lg:h-120 rounded-full -top-20 -left-20 rotate-180 bg-pink-200 opacity-10  z-0"></div>
        </section>
    );
}
