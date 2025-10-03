"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import WeatherWidget from "@/components/weather-widget"
import CurrencyConverter from "@/components/currency-converter"
import { Phone, MapPin, AlertCircle, Plane, Hotel } from "lucide-react"

const essentialInfo = [
  {
    icon: Phone,
    title: "Emergency Numbers",
    items: ["Police: 117", "Fire: 118", "Ambulance: 119", "Tourist Police: 012 942 484"],
  },
  {
    icon: MapPin,
    title: "Getting Around",
    items: ["Tuk-tuk: $1-3 per ride", "Taxi: $5-10 per trip", "Motorbike rental: $5-7/day", "Grab app available"],
  },
  {
    icon: Plane,
    title: "Visa Information",
    items: [
      "Tourist visa: $30 (30 days)",
      "E-visa available online",
      "Visa on arrival at airports",
      "Passport valid 6+ months",
    ],
  },
  {
    icon: Hotel,
    title: "Accommodation",
    items: ["Budget: $5-15/night", "Mid-range: $20-50/night", "Luxury: $100+/night", "Book in advance for peak season"],
  },
]

const languagePhrases = [
  { khmer: "ជំរាបសួរ", phonetic: "Jum reap suor", english: "Hello" },
  { khmer: "អរគុណ", phonetic: "Aw kohn", english: "Thank you" },
  { khmer: "សូមទោស", phonetic: "Som toh", english: "Excuse me / Sorry" },
  { khmer: "បាទ / ចាស", phonetic: "Baat / Jaa", english: "Yes (male / female)" },
  { khmer: "ទេ", phonetic: "Teh", english: "No" },
  { khmer: "តម្លៃប៉ុន្មាន?", phonetic: "Tlay ponman?", english: "How much?" },
]

export default function PracticalPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background z-10" />
            <img
              src="/cambodia-travel-practical-info.jpg"
              alt="Cambodia practical information"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center px-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">Practical Information</h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Everything you need to know for a smooth journey
            </p>
          </motion.div>
        </section>

        {/* Live Data Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Live Information</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Real-time weather and currency data
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <WeatherWidget />
              <CurrencyConverter />
            </div>
          </div>
        </section>

        {/* Essential Information */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Essential Information</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Important details for your trip
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {essentialInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background border border-border rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-xl font-bold text-foreground">{info.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {info.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Language Guide */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Basic Khmer Phrases</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Learn a few words to connect with locals
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-muted p-4 font-medium text-foreground">
                  <div>Khmer</div>
                  <div>Pronunciation</div>
                  <div>English</div>
                </div>
                {languagePhrases.map((phrase, index) => (
                  <motion.div
                    key={phrase.english}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="grid grid-cols-3 p-4 border-t border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="text-foreground font-serif text-lg">{phrase.khmer}</div>
                    <div className="text-muted-foreground italic">{phrase.phonetic}</div>
                    <div className="text-foreground">{phrase.english}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Safety Tips</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Stay safe during your travels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Health",
                  tip: "Drink bottled water, use mosquito repellent, and consider travel insurance. Vaccinations recommended.",
                },
                {
                  title: "Scams",
                  tip: "Agree on prices before services, be wary of overly friendly strangers, and keep valuables secure.",
                },
                {
                  title: "Traffic",
                  tip: "Roads can be chaotic. Always wear a helmet on motorbikes and be extra cautious when crossing streets.",
                },
                {
                  title: "Sun Protection",
                  tip: "Cambodia is hot and sunny. Use high SPF sunscreen, wear a hat, and stay hydrated throughout the day.",
                },
                {
                  title: "Landmines",
                  tip: "Stick to marked paths in rural areas. Some regions still have unexploded ordnance from past conflicts.",
                },
                {
                  title: "Valuables",
                  tip: "Use hotel safes, avoid displaying expensive items, and keep copies of important documents separately.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background border border-border rounded-lg p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
