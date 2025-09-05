import Image from 'next/image'
import React from 'react'

export default function Collection() {


    return (
        <section className='py-12 px-4'>
            <div className="container mx-auto px-4">
                <div className='flex flex-wrap w-full'>
                    <div className='w-full lg:w-1/2 p-4'>
                        <div className='bg-slate-100 dark:bg-slate-800 p-6 mb-6 relative overflow-hidden flex flex-col justify-center h-80'>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Winter Collection</p>
                            <h3 className="text-3xl uppercase font-semibold mb-3">Up to 50% Off</h3>
                            <button className='bg-violet-600 w-auto self-start text-white px-6 py-2 rounded-full text-lg hover:bg-amber-300 hover:text-zinc-900 transition'>Shop Now</button>
                            <Image src="/collection/winter-collection.png" width={300} height={300} className="h-auto rounded-lg absolute right-3 top-0" alt='Collection 1' />
                        </div>

                        <div className='flex w-full gap-4 items-center mt-4'>
                            <div className='bg-slate-100 w-1/2 dark:bg-slate-800 p-6 mb-6 relative overflow-hidden flex flex-col justify-center h-80'>
                                <div className="p-4">
                                    <Image src="/collection/smartwatch.png" width={300} height={300} className="h-auto rounded-lg relative" alt='Collection 1' />
                                </div>
                            </div>
                            <div className='bg-slate-100 w-1/2 dark:bg-slate-800 p-6 mb-6 relative overflow-hidden flex flex-col justify-center h-80'>
                                <div className="p-4">
                                    <Image src="/collection/bag.png" width={300} height={300} className="h-auto rounded-lg relative" alt='Collection 1' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 p-4'>
                        <div className='bg-slate-100 dark:bg-slate-800 p-6 mb-6 relative overflow-hidden flex flex-col justify-center h-166'>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Winter Collection</p>
                            <h3 className="text-3xl uppercase font-semibold mb-3">Up to 50% Off</h3>
                            <button className='bg-violet-600 w-auto self-start text-white px-6 py-2 rounded-full text-lg hover:bg-amber-300 hover:text-zinc-900 transition'>Shop Now</button>
                            <Image src="/collection/summer-collection.png" width={400} height={500} className="h-auto rounded-lg absolute right-3 bottom-0" alt='Collection 1' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
