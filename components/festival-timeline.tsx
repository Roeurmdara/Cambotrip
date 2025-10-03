"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const festivals = [
  {
    month: "January",
    name: "Chinese New Year",
    description: "Celebrated by the Chinese-Cambodian community with dragon dances, fireworks, and family gatherings.",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    month: "April",
    name: "Khmer New Year",
    description:
      "The most important holiday in Cambodia, celebrated with temple visits, traditional games, and water blessings.",
    color: "from-primary/20 to-yellow-500/20",
  },
  {
    month: "May",
    name: "Royal Ploughing Ceremony",
    description:
      "An ancient ritual to mark the beginning of the rice-growing season, presided over by the royal family.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    month: "September",
    name: "Pchum Ben",
    description:
      "A 15-day religious festival honoring deceased ancestors, with offerings made at pagodas across the country.",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    month: "November",
    name: "Water Festival",
    description:
      "Celebrates the reversal of the Tonle Sap River with boat races, fireworks, and illuminated floats in Phnom Penh.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    month: "November",
    name: "Independence Day",
    description: "Commemorates Cambodia's independence from France in 1953 with parades and celebrations.",
    color: "from-red-500/20 to-blue-500/20",
  },
]

export default function FestivalTimeline() {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-12">
        {festivals.map((festival, index) => (
          <motion.div
            key={festival.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background z-10" />

            {/* Content Card */}
            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className={`bg-gradient-to-br ${festival.color} border border-border rounded-lg p-6`}>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{festival.month}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{festival.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{festival.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
