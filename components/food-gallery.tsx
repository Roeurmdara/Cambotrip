"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const dishes = [
  {
    name: "Fish Amok",
    description:
      "Cambodia's national dish - a creamy fish curry steamed in banana leaves with coconut milk, lemongrass, and aromatic spices.",
    image: "/khmer-amok-fish-cambodian-food-traditional.jpg",
    category: "Main Course",
  },
  {
    name: "Lok Lak",
    description:
      "Stir-fried beef marinated in oyster sauce and served with rice, fresh vegetables, and a lime-pepper dipping sauce.",
    image: "/lok-lak-beef-cambodian-dish.jpg",
    category: "Main Course",
  },
  {
    name: "Num Banh Chok",
    description:
      "Traditional Khmer noodles served with a fish-based green curry gravy and fresh vegetables. A popular breakfast dish.",
    image: "/num-banh-chok-khmer-noodles.jpg",
    category: "Breakfast",
  },
  {
    name: "Bai Sach Chrouk",
    description:
      "Grilled pork with broken rice, pickled vegetables, and a side of chicken broth. A beloved breakfast staple.",
    image: "/bai-sach-chrouk-pork-rice.jpg",
    category: "Breakfast",
  },
  {
    name: "Nom Krok",
    description:
      "Sweet coconut rice cakes cooked in a special pan, crispy on the outside and soft inside. A popular street snack.",
    image: "/nom-krok-coconut-cakes.jpg",
    category: "Dessert",
  },
]

export default function FoodGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length)
  }

  return (
    <div className="relative">
      <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-muted">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={dishes[currentIndex].image || "/placeholder.svg"}
              alt={dishes[currentIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                {dishes[currentIndex].category}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">{dishes[currentIndex].name}</h3>
              <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">{dishes[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-border"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-border"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {dishes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
