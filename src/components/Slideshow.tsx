"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const images = [
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
]

export default function Slideshow() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right")
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setDirection("left")
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setDirection("right")
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const variants = {
    enter: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 z-10 shadow-md"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xl text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 z-10 shadow-md"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xl text-black" />
      </button>
    </div>
  )
}
