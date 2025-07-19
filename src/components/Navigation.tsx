"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    let lastScrollY = 0
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY
      lastScrollY = currentScrollY
      if (currentScrollY < 100 || !isScrollingDown) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className={`fixed top-8 left-8 z-50 text-2xl font-lightbold text-gray-900 hover:text-gray-600 transition-all duration-300 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            nicolashjrmy
          </a>

            {/* Desktop Menu Button */}
          <button
            className={`hidden md:flex fixed top-6 right-8 z-50 items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 translate-y-0 opacity-100`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1.5">
              <span
                className={`w-5 h-px bg-gray-900 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span className={`w-5 h-px bg-gray-900 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span
                className={`w-5 h-px bg-gray-900 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>

            {/* Mobile menu button */}
          <button
            className={`md:hidden fixed top-6 right-6 z-50 flex flex-col justify-center items-center w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg space-y-1 group transition-all duration-300 hover:scale-105 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-gray-900 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span className={`w-5 h-px bg-gray-900 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span
              className={`w-5 h-px bg-gray-900 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
          </div>
        </div>

      {/* Desktop Full-Screen Menu Overlay */}
      <div
        className={`hidden md:block fixed inset-0 z-40 transition-all duration-700 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex h-full">
          {/* Left side - Blurred Background */}
          <div
            className={`w-3/4 relative overflow-hidden transition-all duration-1000 ease-out ${
              isOpen ? "scale-100 opacity-50" : "scale-110 opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300" />
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/20 transform transition-transform duration-1500 ease-out ${
                isOpen ? "translate-x-0 opacity-25" : "translate-x-full"
              }`}
            />
          </div>

          {/* Right side - Navigation */}
          <div
            className={`w-[30%] bg-white relative transform transition-all duration-800 ease-out ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >

            {/* Navigation Items */}
            <div className="flex items-center justify-center h-full px-14">
              <div className="grid grid-cols-2 gap-x-24 gap-y-16 w-full max-w-1xl">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`group block transform transition-all duration-700 ease-out hover:scale-105 ${
                      isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 150 + 600}ms` : "0ms",
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-4xl font-light text-gray-900 hover:text-gray-600 transition-all duration-300 pb-3 relative">
                      {item.label}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute bottom-8 left-8 transform transition-all duration-800 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
            >
              <div className="w-16 h-0.5 bg-gray-300" />
              <p className="text-xs text-gray-500 mt-2 font-light tracking-wider">NAVIGATION</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay (unchanged) */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center transform transition-all duration-700 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block text-3xl font-light text-gray-900 hover:text-gray-600 transition-all duration-300 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 150 + 200}ms` : "0ms",
                  transitionDuration: "600ms",
                }}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative group">
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div
            className={`absolute bottom-12 text-center transform transition-all duration-700 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
          >
            <p className="text-sm font-light text-gray-500 tracking-wide">Get in touch</p>
            <a
              href="mailto:hello@nicolashjrmy.dev"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              hello@nicolashjrmy.dev
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
