import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gavel, Scale, FileText, Users, ArrowRight, Briefcase, Building } from "lucide-react"
import SafeImage from "@/components/safe-image"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/services-hero.jpg"
            fallbackSrc="/focused-legal-work.png"
            alt="Our Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Our <span className="text-gold">Legal Services</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Comprehensive legal solutions tailored to meet your specific needs with expertise and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Comprehensive Legal Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              At Thakker & Associates, we offer a wide range of legal services to meet the diverse needs of our clients.
              Our experienced attorneys provide personalized attention and strategic solutions for every case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Gavel className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personal Injury Representation</h3>
                <p className="text-muted-foreground mb-4">
                  Our personal injury attorneys fight for the compensation you deserve after an accident or injury
                  caused by someone else's negligence.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Car and vehicle accidents</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Slip and fall incidents</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Medical malpractice claims</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Workplace injuries</span>
                  </li>
                </ul>
                <Link
                  href="/practice-areas/personal-injury"
                  className="inline-flex items-center text-gold hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Family Law Services</h3>
                <p className="text-muted-foreground mb-4">
                  Our family law attorneys provide compassionate guidance through divorce, child custody, and other
                  family-related legal matters.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Divorce and separation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Child custody and support</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Adoption proceedings</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Prenuptial agreements</span>
                  </li>
                </ul>
                <Link href="/practice-areas/family-law" className="inline-flex items-center text-gold hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Business Law Counsel</h3>
                <p className="text-muted-foreground mb-4">
                  Our business attorneys help entrepreneurs and established companies navigate legal challenges and
                  opportunities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Business formation and planning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Contract drafting and review</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Employment law matters</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Business litigation</span>
                  </li>
                </ul>
                <Link
                  href="/practice-areas/business-law"
                  className="inline-flex items-center text-gold hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Estate Planning Services</h3>
                <p className="text-muted-foreground mb-4">
                  Our estate planning attorneys help you protect your assets and provide for your loved ones through
                  wills, trusts, and comprehensive estate plans.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Will preparation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Trust creation and administration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Power of attorney</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Estate administration</span>
                  </li>
                </ul>
                <Link
                  href="/practice-areas/estate-planning"
                  className="inline-flex items-center text-gold hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Scale className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Criminal Defense</h3>
                <p className="text-muted-foreground mb-4">
                  Our criminal defense attorneys provide aggressive representation to protect your rights and freedom
                  when facing criminal charges.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">DUI/DWI defense</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Drug offenses</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">White collar crimes</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Assault and violent crimes</span>
                  </li>
                </ul>
                <Link
                  href="/practice-areas/criminal-defense"
                  className="inline-flex items-center text-gold hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Building className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real Estate Law</h3>
                <p className="text-muted-foreground mb-4">
                  Our real estate attorneys guide clients through property transactions, disputes, and development
                  projects with expert legal counsel.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Residential and commercial transactions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Landlord-tenant disputes</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Property development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Zoning and land use</span>
                  </li>
                </ul>
                <Link href="/practice-areas/real-estate" className="inline-flex items-center text-gold hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <SafeImage
                src="/services-approach.jpg"
                fallbackSrc="/legal-consultation.png"
                alt="Our Approach"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Approach</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, we believe in a client-centered approach to legal representation. We understand
                that each case is unique, and we tailor our strategies to meet the specific needs and goals of our
                clients.
              </p>
              <p className="text-muted-foreground mb-6">
                Our process begins with a comprehensive consultation to understand your legal needs and objectives. We
                then develop a strategic plan that outlines the steps we will take to achieve your goals, keeping you
                informed and involved throughout the process.
              </p>
              <p className="text-muted-foreground mb-6">
                We are committed to providing transparent communication, timely updates, and practical advice that helps
                you make informed decisions about your legal matters.
              </p>
              <Button asChild className="bg-gold hover:bg-gold/90 text-white">
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Ready to Discuss Your Legal Needs?</h2>
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
                <Link href="/practice-areas">View Our Practice Areas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
