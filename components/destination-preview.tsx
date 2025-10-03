"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    name: "Angkor Wat",
    location: "Siem Reap",
    image: "/angkor-wat-temple-cambodia-ancient.jpg",
    description: "The largest religious monument in the world",
  },
  {
    name: "Royal Palace",
    location: "Phnom Penh",
    image: "/royal-palace-phnom-penh-cambodia-golden.jpg",
    description: "A stunning example of Khmer architecture",
  },
  {
    name: "Bokor Mountain",
    location: "Kampot",
    image: "/bokor-mountain-cambodia-misty-landscape.jpg",
    description: "Misty peaks and abandoned French colonial buildings",
  },
  {
    name: "Koh Rong",
    location: "Sihanoukville",
    image: "/koh-rong-beach-cambodia-tropical-paradise.jpg",
    description: "Pristine beaches and crystal-clear waters",
  },
]

export default function DestinationPreview() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">Top Destinations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From ancient temples to pristine beaches, discover the diverse beauty of Cambodia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="group relative overflow-hidden rounded-lg bg-card cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-primary text-sm font-medium mb-2">{destination.location}</p>
                    <h3 className="font-serif text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-gray-200 mb-4 leading-relaxed">{destination.description}</p>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium mr-2">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/destinations"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-lg group"
          >
            View All Destinations
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
