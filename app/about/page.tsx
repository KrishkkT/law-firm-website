import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Scale, ArrowRight } from "lucide-react"
import SafeImage from "@/components/safe-image"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/classic-law-library.png"
            fallbackSrc="/grand-legal-collection.png"
            alt="Law Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              About <span className="text-gold">Thakker & Associates</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              A premier law firm dedicated to providing exceptional legal services with integrity, expertise, and a
              commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Story</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Founded in 2005, Thakker & Associates has grown from a small practice to a respected law firm serving
                clients throughout the region. Our journey began with a simple mission: to provide exceptional legal
                representation with integrity and a client-centered approach.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the years, we have expanded our practice areas and assembled a team of skilled attorneys who share
                our commitment to excellence. Today, we are proud to be recognized as a leading law firm known for our
                expertise, professionalism, and dedication to achieving favorable outcomes for our clients.
              </p>
              <p className="text-muted-foreground">
                At Thakker & Associates, we understand that legal matters can be complex and stressful. That's why we
                strive to make the process as smooth and transparent as possible, providing personalized attention and
                clear communication every step of the way.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <SafeImage
                src="/refined-legal-space.png"
                fallbackSrc="/refined-legal-space.png"
                alt="Our Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Core Values</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              These principles guide our practice and define our approach to serving our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality legal services and exceeding our clients'
                expectations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Scale className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We adhere to the highest ethical standards and conduct our practice with honesty and transparency.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compassion</h3>
              <p className="text-muted-foreground">
                We approach each case with empathy and understanding, recognizing the human impact of legal matters.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace creative thinking and innovative approaches to solve complex legal challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Team</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Meet our experienced attorneys who are dedicated to providing exceptional legal representation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
                <SafeImage src="/jaymin-thakker-portrait.jpeg" alt="Jaymin Thakker" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Jaymin Thakker</h3>
              <p className="text-gold mb-3">Founding Partner</p>
              <p className="text-muted-foreground mb-4">
                Bringing over 20 years of expertise across diverse areas of legal practice.
              </p>
              <Link href="/team/jaymin-thakker" className="inline-flex items-center text-gold hover:underline">
                View Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Ready to Work With Us?</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced attorneys. We're
              here to help you navigate your legal challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white" asChild>
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
