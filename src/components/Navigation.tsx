"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Backend Projects" },
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


  return (
    <>
    <nav className={`sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-md border-b border-gray-100 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-2xl font-light text-gray-900 hover:text-gray-600 transition-colors duration-300"
            >
              nicolashjrmy
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300 tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-px bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-px bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-px bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white transition-opacity duration-500 ${
            isOpen ? 'opacity-95' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center transform transition-all duration-700 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block text-3xl font-light text-gray-900 hover:text-gray-600 transition-all duration-300 transform ${
                  isOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 150 + 200}ms` : '0ms',
                  transitionDuration: '600ms'
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
          <div className={`absolute bottom-12 text-center transform transition-all duration-700 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: isOpen ? '800ms' : '0ms' }}>
            <p className="text-sm font-light text-gray-500 tracking-wide">
              Get in touch
            </p>
            <a href="mailto:hello@nicolashjrmy.dev" className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300">
              hello@nicolashjrmy.dev
            </a>
          </div>
        </div>
      </div>
    </>
  )
}