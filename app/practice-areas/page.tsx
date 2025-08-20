import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gavel, Scale, FileText, Users, ArrowRight, Briefcase, Building, ShieldAlert, Calculator } from "lucide-react"

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <Image src="/law-library-scales.png" alt="Practice Areas" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Our <span className="text-gold">Practice Areas</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Comprehensive legal expertise across a wide range of practice areas to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Areas of Expertise</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              At Thakker & Associates, we offer comprehensive legal services across a wide range of practice areas to
              meet the diverse needs of our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Gavel className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personal Injury</h3>
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
                <h3 className="text-xl font-bold mb-3">Family Law</h3>
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
                <h3 className="text-xl font-bold mb-3">Business Law</h3>
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
                <h3 className="text-xl font-bold mb-3">Estate Planning</h3>
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
                </ul>
                <Link href="/practice-areas/real-estate" className="inline-flex items-center text-gold hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* New Practice Areas */}
            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Gavel className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Civil Law</h3>
                <p className="text-muted-foreground mb-4">
                  Our civil litigation attorneys represent clients in a wide range of disputes, from property and
                  contract issues to civil rights cases and class actions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Property disputes</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Contract litigation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Civil rights cases</span>
                  </li>
                </ul>
                <Link href="/practice-areas/civil-law" className="inline-flex items-center text-gold hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <ShieldAlert className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Consumer Law</h3>
                <p className="text-muted-foreground mb-4">
                  Our consumer law attorneys protect clients from unfair business practices, deceptive advertising,
                  predatory lending, and other consumer rights violations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Fraud and deceptive practices</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Debt collection defense</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Product liability</span>
                  </li>
                </ul>
                <Link
                  href="/practice-areas/consumer-law"
                  className="inline-flex items-center text-gold hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border shadow-lg practice-area-card">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Calculator className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Revenue Law</h3>
                <p className="text-muted-foreground mb-4">
                  Our revenue law attorneys provide strategic tax planning and representation in tax disputes for
                  individuals and businesses.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tax planning and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tax dispute resolution</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Corporate and international taxation</span>
                  </li>
                </ul>
                <Link href="/practice-areas/revenue-law" className="inline-flex items-center text-gold hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Why Choose Our Firm</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, we are committed to providing exceptional legal representation with integrity,
                expertise, and personalized attention. Our attorneys bring years of experience and a deep understanding
                of the law to every case we handle.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe in building strong attorney-client relationships based on trust, communication, and respect.
                Our goal is not only to achieve favorable outcomes for our clients but also to make the legal process as
                smooth and stress-free as possible.
              </p>
              <p className="text-muted-foreground mb-6">
                When you choose Thakker & Associates, you can expect dedicated advocacy, strategic thinking, and a
                commitment to protecting your rights and interests at every step of the legal process.
              </p>
              <Button asChild className="bg-gold hover:bg-gold/90 text-white">
                <Link href="/about">Learn More About Our Firm</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/courtroom-professionals.png" alt="Our Team" fill className="object-cover" />
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
