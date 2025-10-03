import Navigation from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const blogContent: Record<string, any> = {
  "angkor-wat-sunrise-guide": {
    title: "The Ultimate Guide to Angkor Wat Sunrise",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/angkor-wat-sunrise-golden-hour-cambodia-temple.jpg",
    category: "Travel Tips",
    content: `
      <p>Watching the sunrise at Angkor Wat is one of those bucket-list experiences that truly lives up to the hype. As the first rays of light illuminate the ancient temple's iconic towers, you'll understand why millions of travelers make this pilgrimage each year.</p>

      <h2>Best Time to Visit</h2>
      <p>The dry season (November to March) offers the most reliable weather for sunrise viewing. During this period, you'll have clear skies and comfortable temperatures. The wet season can be beautiful too, with dramatic clouds and fewer crowds, but there's always a risk of rain obscuring the view.</p>

      <h2>Timing is Everything</h2>
      <p>Arrive at least 45 minutes before sunrise to secure a good spot. The temple opens at 5:00 AM, and by 5:30 AM, the prime viewing areas near the reflection pools are typically packed. Sunrise times vary throughout the year, so check the exact time for your visit date.</p>

      <h2>Photography Tips</h2>
      <p>Bring a tripod for long exposures in low light. A wide-angle lens (16-35mm) is ideal for capturing the full temple complex. Don't forget to photograph the reflection in the pools – it's iconic for a reason. As the sun rises, move around to capture different angles and lighting conditions.</p>

      <h2>What to Bring</h2>
      <ul>
        <li>Flashlight or headlamp for navigating in the dark</li>
        <li>Water and light snacks</li>
        <li>Insect repellent</li>
        <li>Light jacket (it can be cool before sunrise)</li>
        <li>Your Angkor Pass (purchased the day before)</li>
      </ul>

      <h2>After Sunrise</h2>
      <p>Once the crowds disperse, take time to explore Angkor Wat's galleries and upper terraces. The morning light is perfect for photography, and you'll have more space to appreciate the intricate bas-reliefs and architecture.</p>

      <p>Remember, this is a sacred site. Dress respectfully (covering shoulders and knees), speak quietly, and be mindful of monks and worshippers. The experience is magical, but it's also a living temple that deserves our respect.</p>
    `,
  },
  "khmer-cuisine-journey": {
    title: "A Culinary Journey Through Khmer Cuisine",
    author: "David Kim",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/lok-lak-beef-cambodian-dish.jpg",
    category: "Food & Culture",
    content: `
      <p>Khmer cuisine is one of Southeast Asia's best-kept culinary secrets. While Thai and Vietnamese food have gained international recognition, Cambodian cuisine remains relatively unknown – which makes discovering it all the more rewarding.</p>

      <h2>The Foundation of Khmer Flavors</h2>
      <p>Khmer cuisine balances sweet, sour, salty, and bitter flavors, with a particular emphasis on fresh herbs and fermented ingredients. Prahok (fermented fish paste) is the backbone of many dishes, providing a deep umami flavor that defines Cambodian cooking.</p>

      <h2>Must-Try Dishes</h2>
      <p><strong>Amok</strong> is Cambodia's national dish – a fragrant curry steamed in banana leaves. Fish amok is the most common, but you'll also find chicken and vegetarian versions. The creamy coconut-based sauce, infused with lemongrass and galangal, is unforgettable.</p>

      <p><strong>Lok Lak</strong> features tender beef cubes stir-fried with a tangy lime and black pepper sauce, served over fresh lettuce and tomatoes. It's comfort food at its finest.</p>

      <p><strong>Num Banh Chok</strong> (Khmer noodles) is the breakfast of champions – delicate rice noodles topped with a fish-based green curry gravy and fresh vegetables. You'll find vendors selling it from dawn until mid-morning.</p>

      <h2>Street Food Adventures</h2>
      <p>Cambodia's street food scene is vibrant and affordable. Don't miss the grilled meats at night markets, fresh tropical fruits, and nom krok (coconut rice cakes). Be adventurous – some of the best meals come from humble street stalls.</p>

      <h2>Dining Etiquette</h2>
      <p>Meals are typically shared family-style. Use a spoon in your right hand and fork in your left (the fork is used to push food onto the spoon). Chopsticks are reserved for noodle dishes. Always accept food and drinks with both hands as a sign of respect.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug]

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-primary hover:underline">
              Return to Blog
            </Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Image */}
        <div className="relative h-[60vh] w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-xl">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Related Posts */}
          <section className="mt-16 mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8">More Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/siem-reap-beyond-temples"
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src="/siem-reap-night-market-cambodia.jpg"
                    alt="Siem Reap Beyond Temples"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold group-hover:text-primary transition-colors">
                    Siem Reap: Beyond the Temples
                  </h3>
                </div>
              </Link>
              <Link
                href="/blog/tonle-sap-floating-villages"
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src="/tonle-sap-floating-village-cambodia.jpg"
                    alt="Tonle Sap Floating Villages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold group-hover:text-primary transition-colors">
                    Life on Water: Tonle Sap's Floating Villages
                  </h3>
                </div>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
