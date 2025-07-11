"use client"
import Image from "next/image"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TypewriterTextProps = {
  texts: string[];
};

const TypewriterText = ({ texts }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText((prevText) => currentText.slice(0, prevText.length + 1));
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000); 
        }
      }
    }, 100); 

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, isTyping, texts, displayText]);

  return (
    <span className="inline-block text-[#915EFF] font-bold">
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const WavingHand = () => {
  return (
    <img 
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png" 
      alt="Waving Hand"
      className="wave-emoji"
      style={{ display: 'inline-block', marginLeft: '10px', width: '50px', height: '50px' }}
    />
  );
};


export default function Hero() {
  const typedItems = ["Software Developer", "Backend Engineer", "Computer Enthusiast", "Casual Dota Enjoyer"]

  return (
    <section id="home" className="min-h-screen flex items-start pt-32 relative overflow-hidden bg-white">
      {/* Subtle background elements */}
      <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 animate-float-delay"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight inline-flex items-center space-x-3">
                <WavingHand />
                <span>
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Nicolash
                  </span>
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed">
                I'm a <TypewriterText texts={typedItems} />
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              Specializing in distributed systems, database optimization, and high-performance backend infrastructure.
              Currently architecting solutions that handle millions of requests daily.
            </p>

            {/* Tech stack and location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-500">Node.js • Python • Go</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Jakarta, ID</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/image.png?height=500&width=600"
                alt="Nicolash working on backend systems"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned to be visible at bottom of viewport */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}