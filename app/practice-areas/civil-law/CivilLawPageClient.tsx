"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Scale, FileText, Building, Users } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import SafeImage from "@/components/safe-image"
import { motion } from "framer-motion"

export default function CivilLawPageClient() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/images/civil-litigation-courtroom.png"
            alt="Civil Law"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs className="text-white/70" activeItemClasses="text-white" />
          </div>
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Civil <span className="text-gold">Law</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Comprehensive legal representation for all civil matters, from contract disputes to property litigation.
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
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Civil Law Overview</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Civil law encompasses a broad range of legal matters that involve disputes between individuals,
                businesses, or organizations. At Thakker & Associates, our civil litigation team has extensive
                experience representing clients in various civil matters, from simple contract disputes to complex
                multi-party litigation.
              </p>
              <p className="text-muted-foreground mb-6">
                Our attorneys understand that civil disputes can be stressful and disruptive to your personal and
                professional life. We work diligently to resolve these matters efficiently, whether through negotiation,
                mediation, arbitration, or litigation when necessary.
              </p>
              <p className="text-muted-foreground">
                With our strategic approach and attention to detail, we help our clients navigate the complexities of
                civil law while protecting their rights and interests throughout the legal process.
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
                src="/images/civil-law-negotiation.png"
                alt="Civil Law Consultation"
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
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Civil Law Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We offer comprehensive legal services across all areas of civil law to protect your rights and interests.
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
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Contract Disputes</h3>
                  <p className="text-muted-foreground mb-4">
                    We represent clients in disputes arising from breaches of contract, interpretation issues, and
                    enforcement of contractual rights.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Breach of contract claims</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Contract interpretation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Specific performance actions</span>
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
                    <Building className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Disputes</h3>
                  <p className="text-muted-foreground mb-4">
                    We handle a wide range of property-related disputes, including boundary issues, easements, and title
                    conflicts.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Boundary disputes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Easement conflicts</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Title and ownership issues</span>
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
                    <Scale className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tort Claims</h3>
                  <p className="text-muted-foreground mb-4">
                    We represent clients in various tort claims, including negligence, intentional torts, and strict
                    liability cases.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Negligence claims</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Defamation cases</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Intentional tort litigation</span>
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
                    <Building className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Business Litigation</h3>
                  <p className="text-muted-foreground mb-4">
                    We assist businesses in resolving disputes with other businesses, partners, shareholders, or
                    customers.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Partnership disputes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Shareholder litigation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Business-to-business conflicts</span>
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
                  <h3 className="text-xl font-bold mb-3">Civil Litigation</h3>
                  <p className="text-muted-foreground mb-4">
                    We provide skilled representation throughout all stages of civil litigation, from pre-filing to
                    appeals.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Pre-litigation strategy</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Trial representation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Appellate advocacy</span>
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
                    <Users className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Alternative Dispute Resolution</h3>
                  <p className="text-muted-foreground mb-4">
                    We help clients resolve disputes through mediation, arbitration, and other alternative methods to
                    avoid costly litigation.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Mediation services</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Arbitration representation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Negotiated settlements</span>
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
                src="/images/civil-case-preparation.png"
                alt="Civil Court Proceeding"
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
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Why Choose Our Civil Law Team</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Our civil law attorneys bring decades of combined experience to every case. We have successfully
                represented clients in a wide range of civil matters, from simple disputes to complex multi-party
                litigation.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gold font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Strategic Approach:</strong> We develop tailored legal
                    strategies based on your specific goals and circumstances.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gold font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Proven Results:</strong> Our track record includes numerous
                    favorable settlements and verdicts for our clients.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gold font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Cost-Effective Solutions:</strong> We focus on resolving
                    disputes efficiently to minimize costs and disruption to your life.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gold font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Comprehensive Support:</strong> We guide you through every step
                    of the legal process, from initial consultation to final resolution.
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
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Need Assistance with a Civil Matter?</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced civil law
              attorneys. We're here to help you navigate the complexities of civil law and protect your rights and
              interests.
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
