import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Collection() {


    return (
        <section className='py-12 px-4'>
            <div className="max-w-[1390px] relative mx-auto px-4">
                <div className='flex flex-wrap w-full'>
                    <div className='w-full lg:w-1/2 p-4'>
                        <div className='bg-slate-100 dark:bg-slate-800 p-6 mb-6 relative overflow-hidden flex flex-col sm:justify-center h-80 relative'>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Winter Collection</p>
                            <h3 className="text-3xl uppercase font-semibold mb-3">Up to 50% Off</h3>
                            <Link href="/category/women's clothing">
                                <button className='bg-violet-600 w-auto self-start text-white px-6 py-2 rounded-full text-lg hover:bg-amber-300 hover:text-white transition'>Shop Now</button>
                            </Link>
                            <Image src="/collection/winter-collection.png" width={300} height={300} className="h-auto h-30 w-40 sm:w-60 lg:w-70 rounded-lg absolute right-3 bottom-0 md:-bottom-20" alt='Winter Collection' />
                        </div>

                        <div className='flex w-full gap-4 items-center mt-4'>
                            <div className='bg-slate-100 w-1/2 dark:bg-slate-800 p-4 lg:p-6 mb-6 relative overflow-hidden flex flex-col justify-center h-40 sm:h-60 md:h-80'>
                                <div className="p-4">
                                    <Image src="/collection/smartwatch.png" width={300} height={300} className="h-auto rounded-lg relative" alt='SmartWatch Collection' />
                                </div>
                            </div>
                            <div className='bg-slate-100 w-1/2 dark:bg-slate-800 p-4 lg:p-6 mb-6 relative overflow-hidden flex flex-col justify-center h-40 sm:h-60 md:h-80'>
                                <div className="p-4">
                                    <Image src="/collection/bag.png" width={300} height={300} className="h-auto rounded-lg relative" alt='Bags Colelction' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 p-4'>
                        <div className='bg-slate-100 dark:bg-slate-800 p-6 mb-6 relative overflow-hidden flex flex-col sm:justify-center h-80 lg:h-166'>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Summer Collection</p>
                            <h3 className="text-3xl uppercase font-semibold mb-3">Up to 50% Off</h3>
                            <Link href="/category/jewelery">
                                <button className='bg-violet-600 w-auto self-start text-white px-6 py-2 rounded-full text-lg hover:bg-amber-300 hover:text-white transition'>Shop Now</button></Link>
                            <Image src="/collection/summer-collection.png" width={400} height={500} className="h-auto w-40 sm:w-60 lg:w-70 rounded-lg absolute right-3 bottom-0 md:bottom-0" alt='Summer Collection' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
