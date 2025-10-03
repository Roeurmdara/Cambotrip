import Hero from "@/components/hero"
import DestinationPreview from "@/components/destination-preview"
import CultureHighlight from "@/components/culture-highlight"
import PracticalInfo from "@/components/practical-info"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <DestinationPreview />
        <CultureHighlight />
        <PracticalInfo />
      </main>
    </>
  )
}
