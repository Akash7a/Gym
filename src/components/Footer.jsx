import React from "react"
import { Dumbbell, Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10 border-t border-gray-800">

      <div className="grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Dumbbell className="text-yellow-500" />
            <span>GYM</span>
          </div>

          <p className="text-gray-400 mt-4">
            Transform your body and mind with our expert trainers and modern facilities.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">

            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => scrollToSection("services")}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Services
            </li>

            <li
              onClick={() => scrollToSection("programs")}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Programs
            </li>

            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Contact
            </li>

          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <Instagram className="cursor-pointer hover:text-yellow-500" />
            <Facebook className="cursor-pointer hover:text-yellow-500" />
            <Twitter className="cursor-pointer hover:text-yellow-500" />
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} GYM. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer