"use client"
import ProductCard from '@/app/components/ProductCard';
import { CartContext } from '@/app/context/CartContext';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';
import React, { useContext } from 'react'

export default function CategoryPage() {
    const { products, loading } = useContext(CartContext);
    const { category } = useParams();

    const decodedCategory = decodeURIComponent(category)


    const filteredProducts = products.filter((item) => item.category === decodedCategory)

    function ProductCardSkeleton() {
        return (
            <div className="space-y-3 border rounded-xl p-4">
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>
        )
    }
    return (
        <>

            <section className='bg-slate-100 dark:bg-slate-900 py-12 pt-30 relative overflow-hidden'>
                <div className='max-w-[1390px] mx-auto px-4 relative z-10'>
                    <h1 className="text-4xl font-bold mb-4 text-center capitalize">{decodedCategory}</h1>
                </div>
                <div className="absolute md:w-60 md:h-50 lg:w-100 lg:h-90 rounded-t-full  right-25 -bottom-10 lg:-bottom-30 rotate-0 bg-violet-500 opacity-20 z-0"></div>
            </section>
            <section className='py-12 px-4 relative  min-h-[80vh]'>
                <div className='max-w-[1390px] mx-auto px-4 relative z-10'>
                    {
                        loading ? (<div className="grid grid-cols-1 md:grid-cols-4 items-stretch">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <ProductCardSkeleton key={i} />
                            ))}
                        </div>
                        ) : filteredProducts?.length ? (
                            <div className="grid grid-cols-1 md:grid-cols-4 items-stretch">
                                {filteredProducts.map((item) => (
                                    <ProductCard key={item.id} item={item} bgColor="bg-gray-200" showButton />
                                ))}
                            </div>
                        ) : (
                            <p>No products found in this category.</p>
                        )
                    }


                </div>
            </section>
        </>
    )
}
