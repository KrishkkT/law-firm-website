import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import SafeImage from "@/components/safe-image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Locations | Thakker & Associates Law Firm",
  description:
    "Thakker & Associates provides exceptional legal services across Gujarat including Bhavnagar, Mahuva, Botad, Ahmedabad, Dholera, and Talaja.",
  keywords: [
    "law firm locations",
    "legal services Gujarat",
    "lawyer Bhavnagar",
    "attorney Mahuva",
    "legal help Botad",
    "advocate Ahmedabad",
    "legal services Dholera",
    "lawyer Talaja",
  ],
  openGraph: {
    title: "Our Locations | Thakker & Associates Law Firm",
    description:
      "Thakker & Associates provides exceptional legal services across Gujarat including Bhavnagar, Mahuva, Botad, Ahmedabad, Dholera, and Talaja.",
    url: "https://jayminthakkerlaw.com/locations",
    images: [
      {
        url: "https://jayminthakkerlaw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thakker & Associates Locations",
      },
    ],
  },
}

const locations = [
  {
    name: "Bhavnagar",
    image: "/grand-legal-hall.png",
    description:
      "Our main office in Bhavnagar provides comprehensive legal services including criminal defense, civil litigation, family law, property disputes, and corporate legal services.",
    slug: "bhavnagar",
  },
  {
    name: "Mahuva",
    image: "/legal-team-meeting.png",
    description:
      "Our Mahuva location offers expert legal services including criminal defense, civil litigation, family law, property disputes, and business legal services.",
    slug: "mahuva",
  },
  {
    name: "Botad",
    image: "/refined-legal-space.png",
    description:
      "Our Botad office provides specialized legal services including criminal defense, civil litigation, family law, real estate legal advice, and company law services.",
    slug: "botad",
  },
  {
    name: "Ahmedabad",
    image: "/modern-law-team.png",
    description:
      "Our Ahmedabad location offers premium legal services including criminal defense, civil litigation, divorce law, property law, and corporate legal services.",
    slug: "ahmedabad",
  },
  {
    name: "Dholera",
    image: "/legal-consultation.png",
    description:
      "Our Dholera office specializes in criminal law, civil cases, family law, property disputes, and startup legal services near Dholera Smart City.",
    slug: "dholera",
  },
  {
    name: "Talaja",
    image: "/lawyer-client-meeting.png",
    description:
      "Our Talaja location provides comprehensive legal services including criminal cases, civil law, family law, land disputes, and business legal services.",
    slug: "talaja",
  },
]

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <SafeImage src="/grand-law-library.png" alt="Our Locations" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Our <span className="text-gold">Locations</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Thakker & Associates provides exceptional legal services across Gujarat. Find the office nearest to you.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Serving Communities Across Gujarat</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Our team of experienced attorneys provides legal services in multiple locations to better serve our
              clients throughout Gujarat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card
                key={location.slug}
                className="bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <SafeImage
                      src={location.image}
                      alt={`${location.name} Office`}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 text-gold mr-2" />
                      <h3 className="text-xl font-bold">{location.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{location.description}</p>
                    <Button asChild className="w-full bg-gold hover:bg-gold/90 text-white">
                      <Link href={`/locations/${location.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Need Legal Assistance?</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced attorneys at the
              location most convenient for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white" asChild>
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
