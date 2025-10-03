import Navigation from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"

const blogPosts = [
  {
    slug: "angkor-wat-sunrise-guide",
    title: "The Ultimate Guide to Angkor Wat Sunrise",
    excerpt:
      "Everything you need to know about experiencing the magical sunrise at Angkor Wat, from timing to photography tips.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/angkor-wat-sunrise-golden-hour-cambodia-temple.jpg",
    category: "Travel Tips",
  },
  {
    slug: "khmer-cuisine-journey",
    title: "A Culinary Journey Through Khmer Cuisine",
    excerpt:
      "Discover the rich flavors and unique dishes that make Cambodian food one of Southeast Asia's hidden gems.",
    author: "David Kim",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/lok-lak-beef-cambodian-dish.jpg",
    category: "Food & Culture",
  },
  {
    slug: "siem-reap-beyond-temples",
    title: "Siem Reap: Beyond the Temples",
    excerpt:
      "Explore the vibrant markets, local cafes, and hidden gems that make Siem Reap more than just a gateway to Angkor.",
    author: "Emma Thompson",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "/siem-reap-night-market-cambodia.jpg",
    category: "City Guides",
  },
  {
    slug: "tonle-sap-floating-villages",
    title: "Life on Water: Tonle Sap's Floating Villages",
    excerpt: "An intimate look at the unique communities living on Southeast Asia's largest freshwater lake.",
    author: "Michael Nguyen",
    date: "February 28, 2024",
    readTime: "9 min read",
    image: "/tonle-sap-floating-village-cambodia.jpg",
    category: "Culture",
  },
  {
    slug: "cambodia-photography-tips",
    title: "Photography Tips for Cambodia",
    excerpt:
      "Capture the beauty of Cambodia with these essential photography tips from sunrise temples to bustling markets.",
    author: "Lisa Park",
    date: "February 20, 2024",
    readTime: "5 min read",
    image: "/bayon-temple-faces-cambodia-angkor.jpg",
    category: "Photography",
  },
  {
    slug: "kep-kampot-coastal-escape",
    title: "Kep & Kampot: Cambodia's Coastal Escape",
    excerpt:
      "Discover the laid-back charm of Cambodia's southern coast, from fresh crab markets to pepper plantations.",
    author: "James Wilson",
    date: "February 15, 2024",
    readTime: "7 min read",
    image: "/kep-crab-market-cambodia-seafood.jpg",
    category: "Destinations",
  },
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
              Travel Stories & Insights
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Discover Cambodia through the eyes of travelers, photographers, and culture enthusiasts
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 text-pretty">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Stay Inspired</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Get the latest travel stories, tips, and Cambodia insights delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
