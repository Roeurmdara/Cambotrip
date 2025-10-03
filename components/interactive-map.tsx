"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ExternalLink, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Destination {
  id: string
  name: string
  location: string
  coordinates: { lat: number; lng: number }
  image: string
  description: string
}

interface InteractiveMapProps {
  destinations: Destination[]
  selectedId: string | null
  onSelectDestination: (id: string | null) => void
}

function getMapPosition(lat: number, lng: number, name: string) {
  // Cambodia actual bounds with some padding for the map image
  // Latitude: 10.4°N (south) to 14.7°N (north)
  // Longitude: 102.3°E (west) to 107.6°E (east)
  const latMin = 10.2
  const latMax = 14.7
  const lngMin = 102.3
  const lngMax = 107.6

  // Add padding to account for map image margins (10% on each side)
  const paddingPercent = 10

  // Convert to percentage (inverted for lat since map coordinates go top to bottom)
  const xRaw = ((lng - lngMin) / (lngMax - lngMin)) * 100
  const yRaw = ((latMax - lat) / (latMax - latMin)) * 100

  // Apply padding
  const x = paddingPercent + (xRaw * (100 - 2 * paddingPercent)) / 100
  const y = paddingPercent + (yRaw * (100 - 2 * paddingPercent)) / 100

  console.log(`[v0] ${name}: lat=${lat}, lng=${lng} -> x=${x.toFixed(1)}%, y=${y.toFixed(1)}%`)

  return { x: `${x}%`, y: `${y}%` }
}

export default function InteractiveMap({ destinations, selectedId, onSelectDestination }: InteractiveMapProps) {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const handleMarkerClick = (destination: Destination) => {
    console.log(`[v0] Clicked destination: ${destination.name}`)
    setSelectedDestination(destination)
    onSelectDestination(destination.id)
  }

  return (
    <div className="relative w-full h-full bg-background">
      {/* Map Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Map Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cambodia-map-destinations-overview.jpg')",
            filter: "brightness(0.7) contrast(1.1)",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />

        {/* Destination Markers */}
        {destinations.map((destination) => {
          const position = getMapPosition(destination.coordinates.lat, destination.coordinates.lng, destination.name)
          const isSelected = selectedId === destination.id
          const isHovered = hoveredId === destination.id

          return (
            <button
              key={destination.id}
              className="absolute group cursor-pointer z-10 transition-transform duration-300 hover:scale-110"
              style={{
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => handleMarkerClick(destination)}
              onMouseEnter={() => setHoveredId(destination.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Marker Pin */}
              <div className={`relative transition-all duration-300 ${isSelected || isHovered ? "scale-125" : ""}`}>
                {/* Pulse Animation */}
                {(isSelected || isHovered) && (
                  <div className="absolute inset-0 animate-ping">
                    <div className="w-8 h-8 rounded-full bg-primary/30" />
                  </div>
                )}

                {/* Pin Icon */}
                <div
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                    isSelected ? "bg-primary text-primary-foreground" : "bg-card border-2 border-primary text-primary"
                  }`}
                >
                  <MapPin className="w-4 h-4" fill="currentColor" />
                </div>

                {/* Location Label */}
                <div
                  className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium transition-opacity ${
                    isHovered || isSelected ? "opacity-100 bg-card border border-border shadow-lg" : "opacity-0"
                  }`}
                >
                  {destination.name}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Info Card */}
      {selectedDestination && (
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-[1000] animate-in slide-in-from-bottom-4 duration-300">
          <div className="relative aspect-[16/9]">
            <img
              src={selectedDestination.image || "/placeholder.svg"}
              alt={selectedDestination.name}
              className="w-full h-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={() => {
                setSelectedDestination(null)
                onSelectDestination(null)
              }}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4">
            <h3 className="font-serif text-xl font-bold text-foreground mb-1">{selectedDestination.name}</h3>
            <p className="text-sm text-primary mb-2 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {selectedDestination.location}
            </p>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{selectedDestination.description}</p>
            <Link href={`/destinations/${selectedDestination.id}`} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                View Details
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
