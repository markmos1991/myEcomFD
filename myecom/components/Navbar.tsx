
"use client";

import React, { useState } from 'react'
import { useTheme } from "next-themes"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { Link } from "react-scroll/modules"
import { RiSunLine, RiMoonFill } from "react-icons/ri"

interface Navitem {
  label: string
  page: string
}

const NAV_ITEMS: Array<Navitem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Services",
    page: "Services",
  },
]


const Navbar = () => {

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)


  return (
    <header className='fixed w-full px-4 mx-auto bg-white shadow'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='md:py-5 md:block'>
            <h2 className="text-2xl">My eccommerce FD</h2>
          </div>
        </div>
        <div className='flex md:space-x-6'>
          {NAV_ITEMS.map((item, idx) => { return <a key={idx}>{item.label}</a> })}
         
          
        </div>

      </div>
    </header>
  )
}

export default Navbar