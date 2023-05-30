"use client"
import React from 'react'
import { useScrollPosition } from "@/hooks/useScrollPosition"

const Header = () => {
    const scrollPosition = useScrollPosition();
    return (
        <header className={`sticky top-0 z-50 transition-shadow ${scrollPosition > 0 ? "shadow bg-op-70 backdrop-blur-lg backdrop-filter" : "shadow-none"}`}>


            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    
                    <span className="ml-3 text-xl">My Ecommerce FD</span>
                </a>
                <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                    <a className="mr-5 hover:text-gray-900">About</a>
                    <a className="mr-5 hover:text-gray-900">Services</a>
                    <a className="mr-5 hover:text-gray-900">Contact</a>
                    
                </nav>
                
            </div>

        </header>
    )
}

export default Header