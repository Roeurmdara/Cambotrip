"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import InteractiveMap from "@/components/interactive-map"
import { MapPin } from "lucide-react"

const destinations = [
  {
    id: "angkor-wat",
    name: "Angkor Wat",
    location: "Siem Reap",
    coordinates: { lat: 13.4125, lng: 103.867 },
    image: "/angkor-wat-temple-cambodia-ancient.jpg",
    description: "The largest religious monument in the world",
  },
  {
    id: "royal-palace",
    name: "Royal Palace",
    location: "Phnom Penh",
    coordinates: { lat: 11.5564, lng: 104.9282 },
    image: "/royal-palace-phnom-penh-cambodia-golden.jpg",
    description: "Stunning Khmer architecture with golden spires",
  },
  {
    id: "bokor-mountain",
    name: "Bokor Mountain",
    location: "Kampot",
    coordinates: { lat: 10.6333, lng: 104.0167 },
    image: "/bokor-mountain-cambodia-misty-landscape.jpg",
    description: "Misty peaks and colonial ruins",
  },
  {
    id: "koh-rong",
    name: "Koh Rong",
    location: "Sihanoukville",
    coordinates: { lat: 10.7, lng: 103.3 },
    image: "/koh-rong-beach-cambodia-tropical-paradise.jpg",
    description: "Pristine beaches and crystal waters",
  },
  {
    id: "bayon-temple",
    name: "Bayon Temple",
    location: "Siem Reap",
    coordinates: { lat: 13.4411, lng: 103.8589 },
    image: "/bayon-temple-faces-cambodia-angkor.jpg",
    description: "Famous for massive stone faces",
  },
  {
    id: "tonle-sap",
    name: "Tonle Sap Lake",
    location: "Siem Reap",
    coordinates: { lat: 12.9, lng: 104.3 },
    image: "/tonle-sap-floating-village-cambodia.jpg",
    description: "Floating villages on Southeast Asia's largest lake",
  },
  {
    id: "kep",
    name: "Kep",
    location: "Kep Province",
    coordinates: { lat: 10.4833, lng: 104.3 },
    image: "/kep-crab-market-cambodia-seafood.jpg",
    description: "Coastal town famous for fresh crab",
  },
  {
    id: "mondulkiri",
    name: "Mondulkiri",
    location: "Eastern Cambodia",
    coordinates: { lat: 12.4545, lng: 107.2 },
    image: "/mondulkiri-elephant-sanctuary-cambodia.jpg",
    description: "Rolling hills and elephant sanctuaries",
  },
]

export default function MapPage() {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null)

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="bg-background border-b border-border py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">Interactive Map</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Explore Cambodia's top destinations on the map. Click on markers to learn more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Map and Sidebar */}
        <section className="h-[calc(100vh-12rem)]">
          <div className="h-full flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-96 bg-card border-b lg:border-r lg:border-b-0 border-border overflow-y-auto">
              <div className="p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Destinations</h2>
                <div className="space-y-3">
                  {destinations.map((destination) => (
                    <button
                      key={destination.id}
                      onClick={() => setSelectedDestination(destination.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedDestination === destination.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-card"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            selectedDestination === destination.id ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                        <div>
                          <h3 className="font-serif font-bold text-foreground mb-1">{destination.name}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{destination.location}</p>
                          <p className="text-sm text-muted-foreground line-clamp-2">{destination.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1 relative">
              <InteractiveMap
                destinations={destinations}
                selectedId={selectedDestination}
                onSelectDestination={setSelectedDestination}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
