"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"
import { Building2, FileText, Combine, Lightbulb, Scale, Briefcase } from "lucide-react"

export default function BusinessLawPage() {
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
              src="/images/business-law-meeting.png"
              alt="Business Law"
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
              Business <span className="text-gold">Law</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Strategic legal counsel for businesses of all sizes, from formation to complex transactions and
              litigation.
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
                Expert Legal Solutions for Your Business
              </h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, our business law attorneys provide comprehensive legal services to
                entrepreneurs, small businesses, and established companies. We understand the complex legal challenges
                businesses face in today's competitive marketplace and offer strategic guidance to help you navigate
                these challenges successfully.
              </p>
              <p className="text-muted-foreground mb-6">
                Our experienced team works closely with clients to understand their business goals and develop tailored
                legal strategies that protect their interests, minimize risk, and facilitate growth. Whether you're
                launching a startup, negotiating contracts, resolving disputes, or planning for succession, we provide
                the legal expertise you need to achieve your objectives.
              </p>
              <p className="text-muted-foreground mb-6">
                With a focus on building long-term relationships, we serve as trusted advisors to our business clients,
                offering proactive counsel and practical solutions that add value to their operations and contribute to
                their success.
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
                src="/images/business-contract-signing.png"
                alt="Business Law Consultation"
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
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Business Law Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We offer a wide range of legal services to address all aspects of business law, providing personalized
              support tailored to your company's unique needs.
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
                    <Building2 className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Business Formation & Planning</h3>
                  <p className="text-muted-foreground mb-4">
                    We guide entrepreneurs through the process of forming businesses, helping them select the most
                    advantageous business structure (sole proprietorship, partnership, LLC, corporation) based on their
                    specific goals. Our attorneys draft all necessary organizational documents, assist with licensing
                    and permits, and help develop sound corporate governance practices to lay a strong foundation for
                    your business.
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
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Contract Drafting & Review</h3>
                  <p className="text-muted-foreground mb-4">
                    Our attorneys draft, review, and negotiate a wide range of business contracts, including service
                    agreements, sales contracts, lease agreements, licensing agreements, employment contracts, and
                    non-disclosure agreements. We ensure your contracts protect your interests, clarify expectations,
                    and minimize potential disputes, providing you with legal security in all your business
                    relationships.
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
                    <Combine className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Mergers & Acquisitions</h3>
                  <p className="text-muted-foreground mb-4">
                    We assist businesses with mergers, acquisitions, and divestitures, handling due diligence,
                    transaction structuring, and negotiating purchase agreements. Our team navigates the complex legal,
                    tax, and regulatory issues involved in these transactions, helping you achieve strategic growth
                    objectives or successfully exit your business while maximizing value and minimizing risk.
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
                    <Lightbulb className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Intellectual Property Protection</h3>
                  <p className="text-muted-foreground mb-4">
                    We help businesses identify, protect, and leverage their intellectual property assets, including
                    trademarks, copyrights, patents, and trade secrets. Our services include trademark searches and
                    registration, copyright registration, licensing agreements, and strategies to safeguard confidential
                    information. We work to maximize the value of your intellectual property and defend against
                    infringement.
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
                    <Scale className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Business Litigation</h3>
                  <p className="text-muted-foreground mb-4">
                    When disputes arise, our skilled litigators provide strong representation in breach of contract
                    cases, partnership and shareholder disputes, business torts, unfair competition claims, and other
                    commercial conflicts. We pursue efficient resolution strategies, including negotiation, mediation,
                    and arbitration when appropriate, but are fully prepared to advocate for your interests in court
                    when necessary.
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
                    <Briefcase className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Employment Law</h3>
                  <p className="text-muted-foreground mb-4">
                    We provide comprehensive employment law services, including drafting employment agreements,
                    developing employee handbooks and workplace policies, advising on hiring and termination practices,
                    and ensuring compliance with labor laws. Our attorneys also represent businesses in employment
                    disputes, working to mitigate liability and resolve conflicts efficiently.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-secondary">
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
                src="/images/business-law-negotiation.png"
                alt="Our Business Law Approach"
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
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Approach to Business Law</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, we understand that effective business legal counsel requires more than just
                knowledge of the law—it requires a deep understanding of your business, industry, and objectives. Our
                approach combines legal expertise with business acumen to deliver practical solutions that advance your
                goals.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe in proactive legal counsel that identifies and addresses potential issues before they become
                problems. By anticipating challenges and opportunities, we help our clients make informed decisions that
                minimize risk and maximize advantages.
              </p>
              <p className="text-muted-foreground mb-6">
                Our attorneys work closely with you to develop strategies tailored to your specific needs, whether
                you're a startup entrepreneur, family business, or established corporation. We focus on building
                long-term relationships and serving as trusted advisors throughout your business journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
              Partner with Us for Your Business Legal Needs
            </h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced business law
              attorneys. Let us help you navigate the legal complexities of running a successful business.
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
