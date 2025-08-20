"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"
import { Home, Building, Key, LayoutGrid, SplitSquareVertical, FileText } from "lucide-react"

export default function RealEstatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <SafeImage
              src="/images/real-estate-closing.png"
              alt="Real Estate Law"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs className="text-white/70" activeItemClasses="text-white" />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Real Estate <span className="text-gold">Law</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Expert legal guidance for all aspects of property transactions, development, and disputes.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
                Navigating Complex Property Matters
              </h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, our real estate attorneys provide comprehensive legal services for residential
                and commercial property matters. With deep knowledge of property laws and regulations in Gujarat and
                across India, we help clients navigate the complexities of real estate transactions, development
                projects, and property disputes.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're purchasing your first home, developing a commercial property, dealing with
                landlord-tenant issues, or facing a boundary dispute, our experienced team offers practical guidance and
                effective representation to protect your interests and achieve your goals.
              </p>
              <p className="text-muted-foreground mb-6">
                We understand that real estate matters often involve significant financial investments and personal
                aspirations. Our attorneys work diligently to address your concerns, minimize risks, and create legal
                solutions that support your property objectives while ensuring compliance with all applicable laws and
                regulations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <SafeImage
                src="/images/real-estate-property-inspection.png"
                alt="Real Estate Consultation"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Real Estate Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We offer a wide range of legal services to address all aspects of real estate law, providing personalized
              support tailored to your specific property needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-background border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Home className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Residential Transactions</h3>
                  <p className="text-muted-foreground mb-4">
                    Our attorneys guide buyers and sellers through all aspects of residential property transactions. We
                    handle title searches and verification, draft and review purchase agreements, assist with mortgage
                    documentation, resolve title defects, and ensure smooth property transfers. Our goal is to protect
                    your interests while facilitating efficient closings.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-background border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Building className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Commercial Real Estate</h3>
                  <p className="text-muted-foreground mb-4">
                    Commercial property transactions involve complex legal and financial considerations. We provide
                    comprehensive services for purchasing, selling, and leasing commercial properties, including due
                    diligence, contract negotiation, financing arrangements, and regulatory compliance. Our team has
                    experience with office buildings, retail spaces, industrial properties, and mixed-use developments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-background border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Key className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Landlord-Tenant Matters</h3>
                  <p className="text-muted-foreground mb-4">
                    We represent both landlords and tenants in a variety of matters, including lease drafting and
                    negotiation, rent control issues, evictions, security deposit disputes, property maintenance
                    conflicts, and lease violations. Our attorneys help clients understand their rights and obligations
                    under rental agreements and applicable laws, working to resolve disputes efficiently while
                    protecting their interests.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-background border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <LayoutGrid className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Development</h3>
                  <p className="text-muted-foreground mb-4">
                    For developers and investors, we provide legal support throughout the development process, from land
                    acquisition and financing to construction contracts and sales. Our services include zoning and land
                    use approvals, environmental compliance, development agreements, construction contracts, and dispute
                    resolution. We help navigate regulatory requirements while advancing your development objectives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-background border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <SplitSquareVertical className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Disputes</h3>
                  <p className="text-muted-foreground mb-4">
                    Our litigation team handles a wide range of real estate disputes, including boundary and easement
                    conflicts, title disputes, adverse possession claims, construction defects, and contract breaches.
                    We pursue resolution through negotiation and mediation when possible, but are fully prepared to
                    advocate for your interests in court when necessary to protect your property rights.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-background border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real Estate Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    We prepare and review all types of real estate documents, including purchase and sale agreements,
                    deeds, mortgages, leases, easements, covenants, and restrictions. Our meticulous attention to detail
                    ensures that your documents accurately reflect your intentions, protect your interests, and comply
                    with all legal requirements, helping to prevent future disputes and complications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
            >
              <SafeImage
                src="/images/real-estate-development-planning.png"
                alt="Our Real Estate Law Approach"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Approach to Real Estate Law</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, we take a proactive and detail-oriented approach to real estate matters. We
                believe in thorough due diligence and careful document preparation to prevent problems before they
                arise, saving our clients time, money, and stress in the long run.
              </p>
              <p className="text-muted-foreground mb-6">
                We understand that real estate transactions and disputes often involve significant financial and
                emotional investments. Our attorneys provide clear communication and practical advice, helping you
                understand complex legal concepts and make informed decisions about your property matters.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're a first-time homebuyer, experienced investor, property developer, or business owner, we
                tailor our services to your specific needs and objectives. Our goal is to facilitate smooth
                transactions, resolve disputes efficiently, and protect your property interests at every stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
              Expert Guidance for Your Real Estate Needs
            </h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced real estate
              attorneys. Let us help you navigate the complexities of property law with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
