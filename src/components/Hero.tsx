"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Slideshow from "./Slideshow" 

type TypewriterTextProps = {
  texts: string[]
}

const TypewriterText = ({ texts }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex]
        if (displayText.length < currentText.length) {
          setDisplayText((prevText) => currentText.slice(0, prevText.length + 1))
        } else {
          setIsTyping(false)
          clearInterval(typingInterval)
          setTimeout(() => {
            setIsTyping(true)
            setDisplayText("")
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
          }, 2000)
        }
      }
    }, 100)

    return () => {
      clearInterval(typingInterval)
    }
  }, [currentIndex, isTyping, texts, displayText])

  return (
    <span className="inline-block text-black font-bold">
      {displayText.split("").map((char, index) => (
        <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
          {char}
        </motion.span>
      ))}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

const WavingHand = () => {
  return (
    <img
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
      alt="Waving Hand"
      className="wave-emoji inline-block mx-2"
      style={{ display: "inline-block", width: "45px", height: "45px", verticalAlign: "middle" }}
    />
  )
}

export default function Hero() {
  const typedItems = ["Software Developer", "Backend Engineer", "Computer Enthusiast", "Casual Dota Enjoyer"]

  return (
    <section
      id="home"
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200"
    >
      <div className="w-full h-screen grid lg:grid-cols-2 gap-0">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-20">
          {/* Main Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] mb-16">
              <span className="inline-flex items-center mb-4 flex-wrap">
                <span className="mr-2"> Hi, I&apos;m Nicolash</span>
                <WavingHand />
                <span className="mt-2 md:mt-0 w-full md:w-auto">and I&apos;m a</span>
              </span>
              <span className="block">
                <TypewriterText texts={typedItems} />
              </span>
              <span className="block mt-4">focusing on delivering performance at scale.</span>
            </h1>
            {/* Two Column Description */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-20">
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-black leading-relaxed font-medium">
                  Independent in thinking, but seamlessly integrated in development teams to deliver sustainable,
                  scalable solutions.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-black leading-relaxed font-medium">
                  Radically performance-oriented and without ego, but always with a clear vision for robust
                  architecture.
                </p>
              </div>
            </div>
            {/* Action Section */}
            <div className="mt-12 lg:mt-20 flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Jakarta, ID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="hidden lg:block relative w-full h-full">
          <Slideshow />
        </div>
        </div>
      {/* Scroll indicator
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center bg-white/80 backdrop-blur-sm">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
