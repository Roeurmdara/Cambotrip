"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Lightbulb,
  ArrowLeft,
  Hotel,
  UtensilsCrossed,
  Navigation2,
  MapPinned,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Destination {
  id: string
  name: string
  location: string
  image: string
  heroImage: string
  description: string
  bestTime: string
  rating: number
  coordinates: { lat: number; lng: number }
  highlights: string[]
  tips: string[]
  gallery: string[]
  placesToVisit?: Array<{
    name: string
    description: string
    type: string
  }>
  accommodations?: Array<{
    name: string
    type: string
    price: string
    description: string
  }>
  restaurants?: Array<{
    name: string
    cuisine: string
    price: string
    specialty: string
  }>
  transportation?: {
    gettingThere: string
    gettingAround: string
    costs: string
  }
}

export default function DestinationDetail({ destination }: { destination: Destination }) {
  const openGoogleMaps = () => {
    const { lat, lng } = destination.coordinates
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={destination.heroImage || destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 w-full px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <Link href="/destinations">
              <Button variant="ghost" className="mb-4 text-white hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Destinations
              </Button>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                <MapPin className="w-4 h-4" />
                {destination.location}
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">{destination.name}</h1>
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="font-medium">{destination.rating} / 5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Best: {destination.bestTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">About</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{destination.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Highlights</h2>
                <div className="space-y-4 mb-8">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {destination.placesToVisit && destination.placesToVisit.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-12"
                >
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <MapPinned className="w-7 h-7 text-primary" />
                    Places to Visit
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.placesToVisit.map((place, index) => (
                      <div
                        key={index}
                        className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{place.name}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{place.type}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{place.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {destination.accommodations && destination.accommodations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-12"
                >
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Hotel className="w-7 h-7 text-primary" />
                    Where to Stay
                  </h2>
                  <div className="space-y-4">
                    {destination.accommodations.map((accommodation, index) => (
                      <div key={index} className="bg-card border border-border rounded-lg p-5">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{accommodation.name}</h3>
                            <p className="text-sm text-primary font-medium">{accommodation.price}</p>
                          </div>
                          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded">
                            {accommodation.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{accommodation.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {destination.restaurants && destination.restaurants.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-12"
                >
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <UtensilsCrossed className="w-7 h-7 text-primary" />
                    Where to Eat
                  </h2>
                  <div className="space-y-4">
                    {destination.restaurants.map((restaurant, index) => (
                      <div key={index} className="bg-card border border-border rounded-lg p-5">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{restaurant.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {restaurant.cuisine} • {restaurant.price}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{restaurant.specialty}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {destination.transportation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Navigation2 className="w-7 h-7 text-primary" />
                    Getting Around
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-card border border-border rounded-lg p-5">
                      <h3 className="font-semibold text-foreground mb-2">Getting There</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {destination.transportation.gettingThere}
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-5">
                      <h3 className="font-semibold text-foreground mb-2">Getting Around</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {destination.transportation.gettingAround}
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-5">
                      <h3 className="font-semibold text-foreground mb-2">Typical Costs</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {destination.transportation.costs}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Travel Tips</h2>
                <div className="space-y-4">
                  {destination.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                      <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <div className="bg-card border border-border rounded-lg p-6 mb-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground font-medium">{destination.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Best Time to Visit</p>
                      <p className="text-foreground font-medium">{destination.bestTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Rating</p>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary fill-primary" />
                        <span className="text-foreground font-medium">{destination.rating} / 5</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Coordinates</p>
                      <p className="text-foreground font-medium font-mono text-sm">
                        {destination.coordinates.lat}, {destination.coordinates.lng}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/map">
                    <Button className="w-full bg-card text-foreground border border-border hover:bg-card/80">
                      <MapPin className="w-4 h-4 mr-2" />
                      View on Site Map
                    </Button>
                  </Link>
                  <Button
                    onClick={openGoogleMaps}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Navigation2 className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {destination.gallery.length > 0 && (
        <section className="py-16 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl font-bold text-foreground mb-8"
            >
              Gallery
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${destination.name} gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
