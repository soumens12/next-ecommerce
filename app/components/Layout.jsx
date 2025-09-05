import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="w-full mx-auto">
                {children}
            </main>
            <Footer />
        </>
    )
}
