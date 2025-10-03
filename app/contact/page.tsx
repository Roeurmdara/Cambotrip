import Navigation from "@/components/navigation"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Have questions about traveling to Cambodia? We're here to help plan your perfect adventure
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
                    placeholder="Trip planning assistance"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@cambodiatravel.com</p>
                      <p className="text-muted-foreground">support@cambodiatravel.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+855 23 123 456</p>
                      <p className="text-muted-foreground">+855 12 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        Street 240, Phnom Penh
                        <br />
                        Kingdom of Cambodia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Quick Answers</h3>
                <p className="text-muted-foreground mb-4">
                  Looking for quick information? Check out our FAQ section for answers to common questions about:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Visa requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Best time to visit
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Transportation options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Safety tips
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 bg-transparent">
                  View FAQ
                </Button>
              </div>

              {/* Response Time */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                  call us directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 px-4 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Visit Our Office</h2>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Map placeholder - Street 240, Phnom Penh</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
