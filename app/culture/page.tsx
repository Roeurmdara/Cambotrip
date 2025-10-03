"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import FoodGallery from "@/components/food-gallery"
import FestivalTimeline from "@/components/festival-timeline"
import { Utensils, Calendar, Users, Heart } from "lucide-react"

const traditions = [
  {
    icon: Utensils,
    title: "Khmer Cuisine",
    description:
      "Cambodian food is a delicate balance of sweet, sour, salty, and bitter flavors. Rice is the staple, accompanied by fish, vegetables, and aromatic herbs.",
  },
  {
    icon: Calendar,
    title: "Festivals",
    description:
      "Cambodia celebrates numerous festivals throughout the year, from the Water Festival to Khmer New Year, each with unique traditions and ceremonies.",
  },
  {
    icon: Users,
    title: "Customs",
    description:
      "Respect for elders, the traditional greeting 'sampeah', and removing shoes before entering homes are important cultural practices.",
  },
  {
    icon: Heart,
    title: "Buddhism",
    description:
      "Theravada Buddhism shapes daily life in Cambodia, with monks playing a central role in communities and colorful temples dotting the landscape.",
  },
]

export default function CulturePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background z-10" />
            <img
              src="/cambodian-apsara-dance-traditional-culture.jpg"
              alt="Cambodian culture"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center px-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">Culture & Heritage</h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover the rich traditions, flavors, and celebrations of Cambodia
            </p>
          </motion.div>
        </section>

        {/* Traditions Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Cultural Pillars</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Understanding the foundations of Cambodian culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {traditions.map((tradition, index) => (
                <motion.div
                  key={tradition.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10"
                >
                  <tradition.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{tradition.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tradition.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Food Gallery */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Khmer Cuisine</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Explore the delicious flavors of traditional Cambodian dishes
              </p>
            </motion.div>
            <FoodGallery />
          </div>
        </section>

        {/* Festival Timeline */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Annual Festivals</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Join the celebrations throughout the year
              </p>
            </motion.div>
            <FestivalTimeline />
          </div>
        </section>

        {/* Cultural Etiquette */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Cultural Etiquette</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Essential tips for respectful travel
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Greetings",
                  tip: "Use the 'sampeah' - press your palms together and bow slightly. The higher the hands, the more respect shown.",
                },
                {
                  title: "Dress Code",
                  tip: "Dress modestly when visiting temples. Cover shoulders and knees. Remove shoes before entering homes and temples.",
                },
                {
                  title: "Respect for Monks",
                  tip: "Women should not touch monks or hand them objects directly. Monks are highly respected in Cambodian society.",
                },
                {
                  title: "Head and Feet",
                  tip: "The head is sacred, don't touch anyone's head. Feet are considered unclean, don't point them at people or Buddha images.",
                },
                {
                  title: "Public Behavior",
                  tip: "Avoid public displays of affection. Keep your voice down and remain calm, as loud or aggressive behavior is frowned upon.",
                },
                {
                  title: "Photography",
                  tip: "Always ask permission before photographing people, especially monks. Some temple areas prohibit photography.",
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
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
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
