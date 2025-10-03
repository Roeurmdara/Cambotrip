import { notFound } from "next/navigation"
import DestinationDetail from "@/components/destination-detail"
import Navigation from "@/components/navigation"

const destinations = [
  {
    id: "angkor-wat",
    name: "Angkor Wat",
    location: "Siem Reap",
    image: "/angkor-wat-temple-cambodia-ancient.jpg",
    heroImage: "/angkor-wat-sunrise-golden-hour-cambodia-temple.jpg",
    description:
      "Angkor Wat is the largest religious monument in the world and a UNESCO World Heritage site. Built in the early 12th century by King Suryavarman II, this magnificent temple complex was originally dedicated to the Hindu god Vishnu before gradually transforming into a Buddhist temple.",
    bestTime: "November to March",
    rating: 5,
    coordinates: { lat: 13.4125, lng: 103.867 },
    highlights: [
      "Watch the sunrise over the iconic temple towers",
      "Explore intricate bas-reliefs depicting Hindu mythology",
      "Visit the central sanctuary with its steep stairs",
      "Discover hidden galleries and courtyards",
    ],
    tips: [
      "Arrive before sunrise for the best photo opportunities",
      "Wear modest clothing covering shoulders and knees",
      "Bring plenty of water and sun protection",
      "Consider hiring a local guide for historical context",
    ],
    placesToVisit: [
      {
        name: "Angkor Wat Main Temple",
        description: "The iconic main temple complex with stunning sunrise views",
        type: "Temple",
      },
      {
        name: "Bayon Temple",
        description: "Famous for its massive stone faces and intricate carvings",
        type: "Temple",
      },
      {
        name: "Ta Prohm",
        description: "Jungle temple with trees growing through the ruins",
        type: "Temple",
      },
      {
        name: "Angkor Thom",
        description: "Ancient walled city with multiple temples and monuments",
        type: "Historical Site",
      },
      {
        name: "Pub Street",
        description: "Vibrant nightlife area with restaurants and bars",
        type: "Entertainment",
      },
    ],
    accommodations: [
      {
        name: "Mad Monkey Hostel",
        type: "Budget",
        price: "$8-15/night",
        description: "Social hostel with pool, bar, and organized tours",
      },
      {
        name: "Templation Hotel",
        type: "Mid-Range",
        price: "$40-70/night",
        description: "Boutique hotel near Pub Street with rooftop pool",
      },
      {
        name: "Park Hyatt Siem Reap",
        type: "Luxury",
        price: "$200+/night",
        description: "5-star luxury resort with spa and fine dining",
      },
    ],
    restaurants: [
      {
        name: "Chanrey Tree",
        cuisine: "Khmer Fine Dining",
        price: "$$$",
        specialty: "Traditional Cambodian cuisine in elegant setting",
      },
      {
        name: "Genevieve's Restaurant",
        cuisine: "International",
        price: "$$",
        specialty: "Western and Asian fusion, supports local community",
      },
      {
        name: "Pou Restaurant",
        cuisine: "Street Food",
        price: "$",
        specialty: "Authentic local dishes at budget prices",
      },
    ],
    transportation: {
      gettingThere: "Fly to Siem Reap International Airport (REP) or take a bus from Phnom Penh (6 hours)",
      gettingAround:
        "Tuk-tuks are the main transport. Rent a bicycle for short distances or hire a car with driver for temple tours",
      costs: "Tuk-tuk: $15-20/day, Bicycle: $2-5/day, Car with driver: $40-60/day",
    },
    gallery: [
      "/angkor-wat-temple-cambodia-ancient.jpg",
      "/angkor-wat-sunrise-golden-hour-cambodia-temple.jpg",
      "/bayon-temple-faces-cambodia-angkor.jpg",
    ],
  },
  {
    id: "royal-palace",
    name: "Royal Palace",
    location: "Phnom Penh",
    image: "/royal-palace-phnom-penh-cambodia-golden.jpg",
    heroImage: "/royal-palace-phnom-penh-cambodia-golden.jpg",
    description:
      "The Royal Palace of Cambodia is a complex of buildings serving as the royal residence of the King of Cambodia. Built in 1866, the palace features stunning Khmer architecture with golden spires, ornate details, and beautiful gardens. The Silver Pagoda within the complex houses many national treasures.",
    bestTime: "November to February",
    rating: 4.8,
    coordinates: { lat: 11.5564, lng: 104.9282 },
    highlights: [
      "Marvel at the Silver Pagoda with its floor of silver tiles",
      "See the Emerald Buddha and other precious artifacts",
      "Explore the Throne Hall with its traditional Khmer design",
      "Stroll through the manicured royal gardens",
    ],
    tips: [
      "Dress modestly - no shorts or sleeveless tops",
      "Photography is restricted in some areas",
      "Visit in the morning to avoid crowds and heat",
      "Combine with a visit to the nearby National Museum",
    ],
    placesToVisit: [
      {
        name: "Royal Palace Complex",
        description: "Main palace with Throne Hall and royal gardens",
        type: "Palace",
      },
      {
        name: "Silver Pagoda",
        description: "Temple with floor made of 5,000 silver tiles",
        type: "Temple",
      },
      {
        name: "National Museum",
        description: "Largest collection of Khmer art in the world",
        type: "Museum",
      },
      {
        name: "Riverside Promenade",
        description: "Scenic walkway along the Mekong River",
        type: "Outdoor",
      },
      {
        name: "Central Market",
        description: "Art Deco market selling everything from jewelry to food",
        type: "Shopping",
      },
    ],
    accommodations: [
      {
        name: "Onederz Hostel",
        type: "Budget",
        price: "$6-12/night",
        description: "Popular backpacker hostel with rooftop bar",
      },
      {
        name: "Pavilion Hotel",
        type: "Mid-Range",
        price: "$60-90/night",
        description: "Charming boutique hotel in French colonial building",
      },
      {
        name: "Raffles Hotel Le Royal",
        type: "Luxury",
        price: "$250+/night",
        description: "Historic 5-star hotel with colonial elegance",
      },
    ],
    restaurants: [
      {
        name: "Romdeng",
        cuisine: "Khmer",
        price: "$$",
        specialty: "Traditional dishes including insects, supports former street children",
      },
      {
        name: "Malis Restaurant",
        cuisine: "Fine Dining",
        price: "$$$",
        specialty: "Contemporary Cambodian cuisine in beautiful garden setting",
      },
      {
        name: "Friends the Restaurant",
        cuisine: "International",
        price: "$$",
        specialty: "Tapas-style dishes, social enterprise training street youth",
      },
    ],
    transportation: {
      gettingThere: "Fly to Phnom Penh International Airport (PNH) or take a bus from other cities",
      gettingAround:
        "Tuk-tuks, PassApp (local ride-hailing), or rent a bicycle. Walking is pleasant in the riverside area",
      costs: "Tuk-tuk: $2-5 per trip, PassApp: $1-3 per trip, Bicycle: $2-3/day",
    },
    gallery: ["/royal-palace-phnom-penh-cambodia-golden.jpg"],
  },
  {
    id: "bokor-mountain",
    name: "Bokor Mountain",
    location: "Kampot",
    image: "/bokor-mountain-cambodia-misty-landscape.jpg",
    heroImage: "/bokor-mountain-cambodia-misty-landscape.jpg",
    description:
      "Bokor Mountain, also known as Phnom Bokor, is a mountain range in the Dâmrei Mountains of southern Cambodia. The area is famous for its abandoned French colonial buildings, including a casino and church, which create an eerie atmosphere shrouded in mist. The cooler climate and stunning views make it a popular escape from the coastal heat.",
    bestTime: "December to April",
    rating: 4.5,
    coordinates: { lat: 10.6333, lng: 104.0167 },
    highlights: [
      "Explore the abandoned Bokor Hill Station",
      "Visit the iconic old casino and church ruins",
      "Enjoy panoramic views from the mountain peak",
      "Experience the cool mountain climate",
    ],
    tips: [
      "Bring a jacket - it can be quite cool and misty",
      "The road up is winding - take motion sickness precautions",
      "Best visited on a clear day for views",
      "Consider staying overnight at the resort",
    ],
    placesToVisit: [
      {
        name: "Bokor Palace Hotel (Ruins)",
        description: "Abandoned French colonial hotel with eerie atmosphere",
        type: "Historical Site",
      },
      {
        name: "Old Catholic Church",
        description: "Atmospheric ruins of colonial-era church",
        type: "Historical Site",
      },
      {
        name: "Popokvil Waterfall",
        description: "Two-tiered waterfall in the national park",
        type: "Nature",
      },
      {
        name: "Kampot Town",
        description: "Charming riverside town known for pepper plantations",
        type: "Town",
      },
    ],
    accommodations: [
      {
        name: "Kampot Guesthouse",
        type: "Budget",
        price: "$10-20/night",
        description: "Simple guesthouse in Kampot town",
      },
      {
        name: "Rikitikitavi",
        type: "Mid-Range",
        price: "$35-55/night",
        description: "Riverside boutique hotel with pool",
      },
      {
        name: "Thansur Bokor Highland Resort",
        type: "Luxury",
        price: "$120+/night",
        description: "Mountain resort on Bokor with casino and spa",
      },
    ],
    restaurants: [
      {
        name: "Rusty Keyhole",
        cuisine: "Western",
        price: "$$",
        specialty: "Burgers and craft beer in Kampot",
      },
      {
        name: "Epic Arts Cafe",
        cuisine: "Cafe",
        price: "$",
        specialty: "Coffee and light meals, supports disabled artists",
      },
      {
        name: "Rikitikitavi Restaurant",
        cuisine: "International",
        price: "$$",
        specialty: "Riverside dining with Khmer and Western dishes",
      },
    ],
    transportation: {
      gettingThere: "Bus from Phnom Penh (3 hours) or Sihanoukville (2 hours) to Kampot",
      gettingAround: "Rent a motorbike or hire a tuk-tuk for the day to visit Bokor Mountain",
      costs: "Motorbike: $5-7/day, Tuk-tuk to Bokor: $25-35 round trip",
    },
    gallery: ["/bokor-mountain-cambodia-misty-landscape.jpg"],
  },
  {
    id: "koh-rong",
    name: "Koh Rong",
    location: "Sihanoukville",
    image: "/koh-rong-beach-cambodia-tropical-paradise.jpg",
    heroImage: "/koh-rong-beach-cambodia-tropical-paradise.jpg",
    description:
      "Koh Rong is Cambodia's second-largest island, known for its pristine white sand beaches, crystal-clear turquoise waters, and laid-back atmosphere. The island offers a perfect tropical paradise experience with opportunities for snorkeling, diving, and witnessing the magical bioluminescent plankton at night.",
    bestTime: "November to May",
    rating: 4.7,
    coordinates: { lat: 10.7, lng: 103.3 },
    highlights: [
      "Relax on pristine white sand beaches",
      "Snorkel in crystal-clear waters",
      "Witness bioluminescent plankton at night",
      "Explore jungle trails and hidden beaches",
    ],
    tips: [
      "Book accommodation in advance during peak season",
      "Bring cash - ATMs are limited",
      "Pack reef-safe sunscreen",
      "Try the night swimming to see bioluminescence",
    ],
    placesToVisit: [
      {
        name: "Sok San Beach",
        description: "Long stretch of white sand beach, perfect for swimming",
        type: "Beach",
      },
      {
        name: "Long Beach",
        description: "Main beach with restaurants and nightlife",
        type: "Beach",
      },
      {
        name: "Coconut Beach",
        description: "Secluded beach accessible by boat or jungle trek",
        type: "Beach",
      },
      {
        name: "High Point Rope Park",
        description: "Adventure park with zip lines and rope courses",
        type: "Activity",
      },
    ],
    accommodations: [
      {
        name: "Nest Beach Club",
        type: "Budget",
        price: "$15-30/night",
        description: "Beach bungalows with social atmosphere",
      },
      {
        name: "White Rose Guesthouse",
        type: "Mid-Range",
        price: "$40-70/night",
        description: "Comfortable rooms near Long Beach",
      },
      {
        name: "Song Saa Private Island",
        type: "Luxury",
        price: "$800+/night",
        description: "Ultra-luxury private island resort nearby",
      },
    ],
    restaurants: [
      {
        name: "The Royal Grill House",
        cuisine: "BBQ",
        price: "$$",
        specialty: "Beachfront BBQ with fresh seafood",
      },
      {
        name: "Koh Rong Hill Beach Resort Restaurant",
        cuisine: "International",
        price: "$$",
        specialty: "Sunset views with Western and Asian dishes",
      },
      {
        name: "Coco's",
        cuisine: "Cafe",
        price: "$",
        specialty: "Breakfast and smoothie bowls on the beach",
      },
    ],
    transportation: {
      gettingThere: "Ferry from Sihanoukville (45 minutes to 1 hour). Multiple companies operate daily",
      gettingAround: "Walk or take boat taxis between beaches. No roads or vehicles on the island",
      costs: "Ferry: $20-25 return, Boat taxi: $5-10 per trip",
    },
    gallery: ["/koh-rong-beach-cambodia-tropical-paradise.jpg"],
  },
  {
    id: "bayon-temple",
    name: "Bayon Temple",
    location: "Siem Reap",
    image: "/bayon-temple-faces-cambodia-angkor.jpg",
    heroImage: "/bayon-temple-faces-cambodia-angkor.jpg",
    description:
      "Bayon Temple is a richly decorated Khmer temple at Angkor in Cambodia. Built in the late 12th or early 13th century as the state temple of King Jayavarman VII, it is most famous for its massive stone faces that adorn the towers. The temple features 216 serene and smiling stone faces, creating an unforgettable sight.",
    bestTime: "November to March",
    rating: 4.9,
    coordinates: { lat: 13.4411, lng: 103.8589 },
    highlights: [
      "Marvel at the 216 massive stone faces",
      "Study the intricate bas-reliefs depicting daily life",
      "Experience the temple at sunset for golden light",
      "Explore the multiple levels and hidden passages",
    ],
    tips: [
      "Visit in late afternoon for the best lighting",
      "Combine with other Angkor temples in one day",
      "Wear comfortable shoes for climbing",
      "Bring a wide-angle lens for photography",
    ],
    placesToVisit: [
      {
        name: "Bayon Temple",
        description: "Main temple with 216 serene stone faces",
        type: "Temple",
      },
      {
        name: "Angkor Wat",
        description: "Nearby iconic temple complex",
        type: "Temple",
      },
      {
        name: "Ta Prohm",
        description: "Jungle temple with trees growing through ruins",
        type: "Temple",
      },
      {
        name: "Terrace of the Elephants",
        description: "Ancient terrace with elephant carvings",
        type: "Historical Site",
      },
    ],
    accommodations: [
      {
        name: "Mad Monkey Hostel",
        type: "Budget",
        price: "$8-15/night",
        description: "Social hostel with pool and organized tours",
      },
      {
        name: "Templation Hotel",
        type: "Mid-Range",
        price: "$40-70/night",
        description: "Boutique hotel near Pub Street",
      },
      {
        name: "Park Hyatt Siem Reap",
        type: "Luxury",
        price: "$200+/night",
        description: "5-star luxury resort with spa",
      },
    ],
    restaurants: [
      {
        name: "Chanrey Tree",
        cuisine: "Khmer Fine Dining",
        price: "$$$",
        specialty: "Traditional Cambodian cuisine",
      },
      {
        name: "Genevieve's Restaurant",
        cuisine: "International",
        price: "$$",
        specialty: "Western and Asian fusion",
      },
      {
        name: "Pou Restaurant",
        cuisine: "Street Food",
        price: "$",
        specialty: "Authentic local dishes",
      },
    ],
    transportation: {
      gettingThere: "Located in Angkor Archaeological Park near Siem Reap",
      gettingAround: "Tuk-tuk, bicycle, or car with driver. Part of temple circuit",
      costs: "Tuk-tuk: $15-20/day, Bicycle: $2-5/day",
    },
    gallery: ["/bayon-temple-faces-cambodia-angkor.jpg"],
  },
  {
    id: "tonle-sap",
    name: "Tonle Sap Lake",
    location: "Siem Reap",
    image: "/tonle-sap-floating-village-cambodia.jpg",
    heroImage: "/tonle-sap-floating-village-cambodia.jpg",
    description:
      "Tonle Sap is the largest freshwater lake in Southeast Asia and is designated as a UNESCO Biosphere Reserve. The lake is famous for its floating villages where entire communities live on the water. During the wet season, the lake expands to five times its dry season size, creating a unique ecosystem.",
    bestTime: "August to October",
    rating: 4.3,
    coordinates: { lat: 12.9, lng: 104.3 },
    highlights: [
      "Visit authentic floating villages",
      "Observe local life on the water",
      "Take a boat tour through the communities",
      "Learn about the unique ecosystem",
    ],
    tips: [
      "Choose an ethical tour operator",
      "Bring small bills for purchases",
      "Respect local privacy when taking photos",
      "Visit during wet season for the full experience",
    ],
    placesToVisit: [
      {
        name: "Kompong Phluk",
        description: "Stilted village with flooded forest",
        type: "Village",
      },
      {
        name: "Chong Kneas",
        description: "Closest floating village to Siem Reap",
        type: "Village",
      },
      {
        name: "Kampong Khleang",
        description: "Largest and most authentic stilted village",
        type: "Village",
      },
      {
        name: "Prek Toal Bird Sanctuary",
        description: "Important bird sanctuary with rare species",
        type: "Nature",
      },
    ],
    accommodations: [
      {
        name: "Siem Reap Hostels",
        type: "Budget",
        price: "$8-15/night",
        description: "Various budget options in Siem Reap",
      },
      {
        name: "Tara Angkor Hotel",
        type: "Mid-Range",
        price: "$50-80/night",
        description: "Comfortable hotel with pool",
      },
      {
        name: "Belmond La Résidence d'Angkor",
        type: "Luxury",
        price: "$300+/night",
        description: "Luxury resort with traditional Khmer design",
      },
    ],
    restaurants: [
      {
        name: "Floating Village Restaurants",
        cuisine: "Local",
        price: "$$",
        specialty: "Fresh fish and local dishes on the water",
      },
      {
        name: "Mahob Khmer Cuisine",
        cuisine: "Khmer",
        price: "$$",
        specialty: "Traditional Cambodian cooking classes available",
      },
      {
        name: "Siem Reap Brewpub",
        cuisine: "International",
        price: "$$",
        specialty: "Craft beer and pub food",
      },
    ],
    transportation: {
      gettingThere: "15km from Siem Reap, accessible by tuk-tuk or organized tour",
      gettingAround: "Boat tours are the only way to explore the floating villages",
      costs: "Tuk-tuk: $15-20 return, Boat tour: $20-30 per person",
    },
    gallery: ["/tonle-sap-floating-village-cambodia.jpg"],
  },
  {
    id: "kep",
    name: "Kep",
    location: "Kep Province",
    image: "/kep-crab-market-cambodia-seafood.jpg",
    heroImage: "/kep-crab-market-cambodia-seafood.jpg",
    description:
      "Kep is a quiet coastal town in southern Cambodia, famous for its fresh crab and laid-back atmosphere. Once a thriving French colonial resort town, Kep offers a glimpse into Cambodia's past with its abandoned villas. Today, it's known for its crab market, pepper plantations, and nearby Rabbit Island.",
    bestTime: "November to April",
    rating: 4.4,
    coordinates: { lat: 10.4833, lng: 104.3 },
    highlights: [
      "Taste fresh crab at the famous crab market",
      "Visit organic pepper plantations",
      "Explore abandoned French colonial villas",
      "Take a boat to nearby Rabbit Island",
    ],
    tips: [
      "Try the famous Kampot pepper crab",
      "Visit the crab market in the morning",
      "Rent a bicycle to explore the area",
      "Stay for sunset at the beach",
    ],
    placesToVisit: [
      {
        name: "Kep Crab Market",
        description: "Fresh seafood market with waterfront restaurants",
        type: "Market",
      },
      {
        name: "Rabbit Island (Koh Tonsay)",
        description: "Peaceful island with beaches, 30 minutes by boat",
        type: "Island",
      },
      {
        name: "Kep National Park",
        description: "Hiking trails with ocean views and wildlife",
        type: "Nature",
      },
      {
        name: "La Plantation Pepper Farm",
        description: "Organic pepper plantation with tours",
        type: "Farm",
      },
      {
        name: "Abandoned French Villas",
        description: "Atmospheric ruins from colonial era",
        type: "Historical Site",
      },
    ],
    accommodations: [
      {
        name: "Kep Seaside Guesthouse",
        type: "Budget",
        price: "$12-25/night",
        description: "Simple rooms near the beach",
      },
      {
        name: "Samanea Beach Resort",
        type: "Mid-Range",
        price: "$60-100/night",
        description: "Beachfront resort with pool and restaurant",
      },
      {
        name: "Knai Bang Chatt",
        type: "Luxury",
        price: "$150+/night",
        description: "Boutique resort in restored modernist villas",
      },
    ],
    restaurants: [
      {
        name: "Crab Market Shacks",
        cuisine: "Seafood",
        price: "$$",
        specialty: "Fresh crab with Kampot pepper",
      },
      {
        name: "Kimly Restaurant",
        cuisine: "Khmer",
        price: "$$",
        specialty: "Seafood and traditional dishes with sea views",
      },
      {
        name: "Sailing Club",
        cuisine: "International",
        price: "$$$",
        specialty: "Fine dining with ocean views",
      },
    ],
    transportation: {
      gettingThere: "Bus from Phnom Penh (3.5 hours) or Kampot (30 minutes)",
      gettingAround: "Rent a bicycle or motorbike. Tuk-tuks available for longer trips",
      costs: "Bicycle: $2-3/day, Motorbike: $5-7/day, Boat to Rabbit Island: $10 return",
    },
    gallery: ["/kep-crab-market-cambodia-seafood.jpg"],
  },
  {
    id: "mondulkiri",
    name: "Mondulkiri",
    location: "Eastern Cambodia",
    image: "/mondulkiri-elephant-sanctuary-cambodia.jpg",
    heroImage: "/mondulkiri-elephant-sanctuary-cambodia.jpg",
    description:
      "Mondulkiri is Cambodia's most sparsely populated province, known for its rolling hills, waterfalls, and ethical elephant sanctuaries. The region is home to indigenous hill tribes and offers a completely different landscape from the rest of Cambodia, with pine forests and a cooler climate.",
    bestTime: "November to February",
    rating: 4.6,
    coordinates: { lat: 12.4545, lng: 107.2 },
    highlights: [
      "Visit ethical elephant sanctuaries",
      "Explore stunning waterfalls",
      "Meet indigenous hill tribe communities",
      "Trek through pine forests and rolling hills",
    ],
    tips: [
      "Book elephant sanctuary visits in advance",
      "Bring warm clothes for cool evenings",
      "Hire a local guide for trekking",
      "Allow at least 2-3 days to explore",
    ],
    placesToVisit: [
      {
        name: "Elephant Valley Project",
        description: "Ethical elephant sanctuary with walking tours",
        type: "Sanctuary",
      },
      {
        name: "Bousra Waterfall",
        description: "Impressive two-tiered waterfall, 40m high",
        type: "Nature",
      },
      {
        name: "Dak Dam Waterfall",
        description: "Remote waterfall requiring trek through forest",
        type: "Nature",
      },
      {
        name: "Phnong Villages",
        description: "Indigenous hill tribe communities",
        type: "Cultural",
      },
      {
        name: "Sea Forest",
        description: "Unique landscape of rolling hills and pine trees",
        type: "Nature",
      },
    ],
    accommodations: [
      {
        name: "Nature Lodge",
        type: "Budget",
        price: "$15-30/night",
        description: "Eco-lodge with basic bungalows",
      },
      {
        name: "Mayura Hill Hotel & Resort",
        type: "Mid-Range",
        price: "$50-80/night",
        description: "Comfortable resort with mountain views",
      },
      {
        name: "Elephant Valley Project Lodge",
        type: "Mid-Range",
        price: "$60-100/night",
        description: "Eco-lodge at the elephant sanctuary",
      },
    ],
    restaurants: [
      {
        name: "Greenhouse Restaurant",
        cuisine: "International",
        price: "$$",
        specialty: "Western and Asian dishes in Sen Monorom",
      },
      {
        name: "Banlung Balcony",
        cuisine: "Khmer",
        price: "$",
        specialty: "Local dishes and BBQ",
      },
      {
        name: "Nature Lodge Restaurant",
        cuisine: "International",
        price: "$$",
        specialty: "Farm-to-table dining",
      },
    ],
    transportation: {
      gettingThere: "Bus from Phnom Penh (7-8 hours) or fly to Sen Monorom (seasonal flights)",
      gettingAround: "Rent a motorbike or hire a car with driver. Roads can be rough",
      costs: "Motorbike: $8-12/day, Car with driver: $50-70/day",
    },
    gallery: ["/mondulkiri-elephant-sanctuary-cambodia.jpg"],
  },
]

export default function DestinationPage({ params }: { params: { id: string } }) {
  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <DestinationDetail destination={destination} />
    </>
  )
}
