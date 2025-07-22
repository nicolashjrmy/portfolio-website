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

const Hand = () => {
  return (
    <img 
      src = "/hand.png"
      alt = "Swipe to explore"
      className = "w-8 h-8 animate-swipe-motion"  
    />
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
      className="min-h-screen w-full relative overflow-hidden"
    >
      <div className="w-full min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-0">
        {/* Image Section - Now on top for mobile */}
        <div className="order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 relative">
          <div className="w-full h-full">
            <Slideshow />
          </div>
        </div>

        {/* Content Section - Now below image on mobile */}
        <div className="order-2 lg:order-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-20">
          {/* Main Content */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] mb-8 lg:mb-16">
              <span className="inline-flex items-center mb-4 flex-wrap">
                <span className="mr-2"> Hi, I&apos;m Nicolash</span>
                <WavingHand />
                <span className="mt-2 md:mt-0 w-full md:w-auto">and I&apos;m a</span>
              </span>
              <span className="block">
                <TypewriterText texts={typedItems} />
              </span>
            </h1>
            {/* Two Column Description */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mt-8 lg:mt-20">
              <div className="space-y-6">
                <p className="text-base lg:text-xl text-black leading-relaxed font-medium">
                  Independent in thinking, but seamlessly integrated in development teams to deliver sustainable,
                  scalable solutions.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base lg:text-xl text-black leading-relaxed font-medium">
                  Radically performance-oriented and without ego, but always with a clear vision for robust
                  architecture.
                </p>
              </div>
            </div>
            {/* Action Section */}
            <div className="mt-8 lg:mt-20 flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Jakarta, ID</span>
                </div>
              </div>
            </div>
              {/* <div className="md:hidden block absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
                <Hand />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}