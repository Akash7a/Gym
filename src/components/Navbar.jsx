import React, { useState } from 'react'
import { DumbbellIcon, Menu, X } from "lucide-react"
import Button from './Button.jsx'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const tabs = [
    { name: "Home", id: "home" },
    { name: "Our Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Contact Us", id: "contact" },
    { name: "FAQ", id: "faq" }
  ]

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  return (
    <nav className='fixed top-0 left-0 w-full z-50 
    bg-black/30 backdrop-blur-lg text-white 
    flex justify-between items-center px-6 md:px-12 py-4'>

      {/* Logo */}
      <div className='flex items-center gap-2 text-2xl font-bold'>
        <DumbbellIcon className='text-yellow-500' />
        <span>FitZone Gym</span>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-8 font-semibold text-gray-200'>
        {tabs.map((t, i) => (
          <li
            key={i}
            onClick={() => scrollToSection(t.id)}
            className='cursor-pointer hover:text-yellow-500 transition'
          >
            {t.name}
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className='hidden md:block'>
        <Button
          className='bg-yellow-600 px-5 py-2 rounded-md text-black font-semibold hover:bg-yellow-500 transition'
          innerText='Join Now'
        />
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='absolute top-16 left-0 w-full 
        bg-black/80 backdrop-blur-md flex flex-col 
        items-center gap-6 py-6 md:hidden'>

          {tabs.map((t, i) => (
            <li
              key={i}
              onClick={() => scrollToSection(t.id)}
              className='list-none text-lg cursor-pointer hover:text-yellow-500'
            >
              {t.name}
            </li>
          ))}

          <Button
            className='bg-yellow-600 px-5 py-2 rounded-md text-black font-semibold hover:bg-yellow-500 transition'
            innerText='Join Now'
            onClick={() => scrollToSection("contact")}
          />
        </div>
      )}

    </nav>
  )
}

export default Navbar