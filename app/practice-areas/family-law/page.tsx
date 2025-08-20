"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"
import { Unlink, Users, Heart, Shield, UserPlus } from "lucide-react"

export default function FamilyLawPage() {
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
            <SafeImage src="/images/family-law-courtroom.png" alt="Family Law" fill className="object-cover" priority />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs className="text-white/70" activeItemClasses="text-white" />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Family <span className="text-gold">Law</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Compassionate legal guidance for families navigating divorce, child custody, and other sensitive family
              matters.
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
                Guiding Families Through Legal Transitions
              </h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, we understand that family legal matters are often emotionally challenging and
                deeply personal. Our compassionate family law attorneys provide supportive guidance and strong advocacy
                to help you navigate these difficult transitions with dignity and respect.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe in a client-centered approach that focuses on understanding your unique circumstances,
                concerns, and goals. Our team works diligently to develop personalized legal strategies that protect
                your interests and those of your children while minimizing conflict whenever possible.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're facing divorce, child custody disputes, adoption proceedings, or other family law
                matters, our experienced attorneys provide the knowledgeable representation and emotional support you
                need during this challenging time.
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
                src="/images/family-law-consultation.png"
                alt="Family Law Consultation"
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
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Family Law Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We offer comprehensive legal services to address all aspects of family law, providing personalized support
              tailored to your unique situation.
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
                    <Unlink className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Divorce & Separation</h3>
                  <p className="text-muted-foreground mb-4">
                    We guide clients through both contested and uncontested divorces, helping to resolve issues related
                    to property division, alimony, debt allocation, and other financial matters. Our attorneys strive to
                    achieve fair settlements while protecting your interests throughout the divorce process.
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
                    <Users className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Child Custody & Support</h3>
                  <p className="text-muted-foreground mb-4">
                    The well-being of your children is paramount. Our attorneys help establish, modify, and enforce
                    child custody arrangements and support orders that serve the best interests of your children while
                    respecting your parental rights. We work to create sustainable parenting plans that foster healthy
                    parent-child relationships.
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
                    <Heart className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Adoption</h3>
                  <p className="text-muted-foreground mb-4">
                    Creating or expanding your family through adoption is a joyful but legally complex process. Our
                    attorneys guide you through domestic, international, stepparent, and relative adoptions, helping you
                    navigate paperwork, court proceedings, and any challenges that may arise to bring your adoption to a
                    successful conclusion.
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
                    <Shield className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Domestic Violence Protection</h3>
                  <p className="text-muted-foreground mb-4">
                    Your safety is our priority. We provide compassionate and immediate legal assistance to victims of
                    domestic violence, helping to secure protective orders and navigate the legal system during this
                    vulnerable time. Our attorneys also defend those wrongfully accused of domestic violence, ensuring
                    due process and fair treatment.
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
                    <UserPlus className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Mediation & Collaborative Law</h3>
                  <p className="text-muted-foreground mb-4">
                    Many family disputes can be resolved without contentious litigation. We offer mediation and
                    collaborative law services that help families reach mutually acceptable agreements in a cooperative
                    setting. These approaches often save time, money, and emotional strain while preserving important
                    relationships.
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
                src="/images/family-law-mediation.png"
                alt="Family Law Mediation"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Approach to Family Law</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Family law matters require both legal expertise and emotional intelligence. At Thakker & Associates, we
                combine these qualities to provide representation that addresses both the legal complexities and the
                personal impact of your case.
              </p>
              <p className="text-muted-foreground mb-6">
                We prioritize open communication, keeping you informed and involved at every stage. Our attorneys
                explain complex legal concepts in understandable terms, ensuring you can make informed decisions about
                your case.
              </p>
              <p className="text-muted-foreground mb-6">
                While we always seek amicable resolutions when possible, we are prepared to advocate fiercely for your
                interests in court when necessary. Our goal is to help you move forward with confidence, security, and
                peace of mind.
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
              Navigate Family Legal Matters with Confidence
            </h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our compassionate family law
              attorneys. We're here to help you and your family move forward.
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
