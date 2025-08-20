"use client"

import SafeImage from "@/components/safe-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, Building, FileText, Map, Landmark, Scale } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import { motion } from "framer-motion"

export default function RevenueLawClientPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Land & House Revenue Law", href: "/practice-areas/revenue-law" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/images/land-revenue-hero.png"
            alt="Land & House Revenue Law"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Land & House <span className="text-gold">Revenue Law</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Expert legal guidance for all land and house revenue matters, property assessments, and revenue disputes.
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white">
              <Link href="/consultation">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Land & House Revenue Overview</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Land and house revenue law encompasses the legal framework governing property assessments, land revenue
                records, and housing society revenue matters. At Thakker & Associates, our specialized attorneys provide
                comprehensive legal services to help property owners navigate these complex regulations.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team has extensive experience in property tax assessments, land revenue disputes, mutation entries,
                and housing society revenue matters. We work closely with clients to protect their property interests
                while ensuring compliance with applicable revenue laws.
              </p>
              <p className="text-muted-foreground">
                Whether you're dealing with property tax assessments, land record verification, or housing society
                revenue disputes, our experts provide the guidance and representation you need to protect your property
                interests.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SafeImage
                src="/images/land-revenue-overview.png"
                alt="Land Revenue Consultation"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Land & House Revenue Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We offer comprehensive legal services across all areas of land and house revenue law to protect your
              property interests.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Home className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Revenue Assessments</h3>
                  <p className="text-muted-foreground mb-4">
                    We help property owners navigate the complex process of property tax assessments, ensuring fair
                    valuation and appropriate taxation.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Property tax assessment appeals</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Valuation disputes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Tax exemption applications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Map className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Land Revenue Records</h3>
                  <p className="text-muted-foreground mb-4">
                    We assist with land revenue record matters, including verification, correction, and updating of
                    revenue records.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Land record verification</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Mutation entries</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Record correction applications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Building className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Housing Society Revenue Matters</h3>
                  <p className="text-muted-foreground mb-4">
                    We handle revenue matters related to housing societies, including tax assessments and revenue
                    disputes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Society revenue disputes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Maintenance fee challenges</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Society tax compliance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Scale className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Revenue Dispute Resolution</h3>
                  <p className="text-muted-foreground mb-4">
                    We represent clients in revenue disputes with authorities, including appeals and litigation before
                    revenue tribunals.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Revenue appeal representation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Administrative hearings</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Revenue tribunal litigation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Land Revenue Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    We assist with preparation and review of land revenue documentation to ensure compliance with
                    revenue laws.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Revenue document preparation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Legal compliance review</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Documentation filing assistance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Landmark className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Transfer Revenue</h3>
                  <p className="text-muted-foreground mb-4">
                    We provide guidance on revenue implications of property transfers, including stamp duty and
                    registration fees.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Stamp duty assessment</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Registration fee optimization</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Transfer tax planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SafeImage
                src="/images/land-revenue-dispute.png"
                alt="Land Revenue Dispute Resolution"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Why Choose Our Land Revenue Team</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Our land and house revenue law attorneys bring specialized expertise and practical experience to every
                client matter. We stay current with the constantly evolving revenue laws and regulations to provide you
                with the most up-to-date and effective advice.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gold font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Specialized Expertise:</strong> Our attorneys have extensive
                    knowledge of land and house revenue laws and procedures.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gold font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Local Knowledge:</strong> We have deep understanding of local
                    revenue authorities and their processes.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gold font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Proactive Approach:</strong> We focus on preventive strategies
                    to help you avoid revenue problems before they arise.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gold font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Strong Advocacy:</strong> When disputes arise, we provide
                    vigorous representation before revenue authorities and tribunals.
                  </span>
                </li>
              </ul>
              <Button asChild className="bg-gold hover:bg-gold/90 text-white">
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
              Ready to Discuss Your Land & House Revenue Needs?
            </h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced land revenue
              attorneys. We're here to help you navigate complex property revenue matters with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white" asChild>
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
