"use client"
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useRouter } from "next/navigation"
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import Link from 'next/link'

export default function CategoryDropdown() {
    const { products } = useContext(CartContext)
    const router = useRouter()

    const categories = [...new Set(products.map((item) => item.category))]
    return (


        <ul className="grid w-[200px] gap-2">
            {categories.map((category) => (
                <li className="list-none" key={category}>
                    <NavigationMenuLink asChild className='bg-transparent hover:text-violet-600'>
                        <Link className='bg-transparent hover:text-violet-600' href={`/category/${category}`}>{category}</Link>
                    </NavigationMenuLink>
                </li>
            ))}

        </ul>
    )
}
