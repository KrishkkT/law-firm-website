"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ShieldAlert, CreditCard, BadgeAlert } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import { motion, useInView, useAnimation } from "framer-motion"
import { OptimizedImage, OptimizedBackgroundImage } from "@/components/image-optimizer"
import { fadeIn, slideInLeft, slideInRight, staggerContainer, cardHover } from "@/lib/animation-utils"

export default function ConsumerLawClientPage() {
  const controlsServices = useAnimation()
  const servicesRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isServicesInView) {
      controlsServices.start("visible")
    }
  }, [isServicesInView, controlsServices])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedBackgroundImage
            src="/images/consumer-protection-attorney.png"
            alt="Consumer Law"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs className="text-white/70" activeItemClasses="text-white" />
          </div>
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Consumer <span className="text-gold">Law</span>
              </motion.span>
            </h1>
            <motion.p
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Protecting your rights as a consumer against unfair business practices, fraud, and deception.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white transition-all duration-300">
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Consumer Law Overview</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Consumer law encompasses a wide range of legal protections designed to safeguard consumers from unfair,
                deceptive, or fraudulent business practices. At Thakker & Associates, our consumer law attorneys are
                dedicated to protecting your rights and helping you seek justice when those rights have been violated.
              </p>
              <p className="text-muted-foreground mb-6">
                We understand the frustration and financial harm that can result from consumer rights violations. Our
                experienced attorneys have successfully represented clients in cases involving false advertising,
                defective products, predatory lending, unfair debt collection practices, and more.
              </p>
              <p className="text-muted-foreground">
                Whether you're facing harassment from debt collectors, dealing with identity theft, or have purchased a
                defective product, our consumer law team is here to help you understand your rights and pursue the
                compensation you deserve.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <OptimizedImage
                src="/images/consumer-rights-defense.png"
                alt="Consumer Law Consultation"
                fill
                className="object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary overflow-hidden" ref={servicesRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Consumer Law Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We offer comprehensive legal services to protect consumers from unfair and deceptive business practices.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={controlsServices}
          >
            {[
              {
                icon: <ShieldAlert className="h-6 w-6 text-gold" />,
                title: "Fraud & Deceptive Practices",
                description:
                  "We represent consumers who have been victims of false advertising, bait-and-switch tactics, and other deceptive business practices.",
                items: ["False advertising claims", "Unfair business practices", "Misrepresentation cases"],
              },
              {
                icon: <CreditCard className="h-6 w-6 text-gold" />,
                title: "Debt Collection Defense",
                description:
                  "We help consumers fight back against abusive debt collection practices and violations of the Fair Debt Collection Practices Act (FDCPA).",
                items: ["FDCPA violations", "Debt collector harassment", "Debt validation disputes"],
              },
              {
                icon: <BadgeAlert className="h-6 w-6 text-gold" />,
                title: "Product Liability",
                description:
                  "We represent consumers who have been injured or suffered financial loss due to defective or dangerous products.",
                items: ["Defective product claims", "Failure to warn cases", "Manufacturing defect litigation"],
              },
              {
                icon: <CreditCard className="h-6 w-6 text-gold" />,
                title: "Credit Reporting Issues",
                description:
                  "We assist consumers in resolving credit reporting errors and violations of the Fair Credit Reporting Act (FCRA).",
                items: ["Credit report disputes", "Identity theft recovery", "FCRA violation claims"],
              },
              {
                icon: <ShieldAlert className="h-6 w-6 text-gold" />,
                title: "Class Action Lawsuits",
                description:
                  "We represent groups of consumers who have been harmed by the same company or product in class action litigation.",
                items: ["Consumer class actions", "Mass tort litigation", "Multi-district litigation"],
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn} custom={index} whileHover="hover" initial="rest" animate="rest">
                <motion.div variants={cardHover}>
                  <Card className="bg-background border border-border shadow-lg h-full transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <OptimizedImage
                src="/images/consumer-class-action.png"
                alt="Consumer Rights Defense"
                fill
                className="object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Why Choose Our Consumer Law Team</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Our consumer law attorneys are passionate advocates for consumer rights. We have successfully
                represented clients against businesses of all sizes, from local companies to multinational corporations.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  {
                    title: "Specialized Knowledge:",
                    description: "Our attorneys have in-depth knowledge of state and federal consumer protection laws.",
                  },
                  {
                    title: "Proven Results:",
                    description:
                      "We have recovered significant compensation for consumers who have been wronged by businesses.",
                  },
                  {
                    title: "Personalized Approach:",
                    description:
                      "We take the time to understand your specific situation and tailor our legal strategy accordingly.",
                  },
                  {
                    title: "Contingency Fee Options:",
                    description:
                      "In many consumer cases, we work on a contingency fee basis, meaning you pay nothing unless we win your case.",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gold font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">{item.title}</strong> {item.description}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="bg-gold hover:bg-gold/90 text-white transition-all duration-300">
                  <Link href="/consultation">Schedule a Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
              Ready to Protect Your Consumer Rights?
            </h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced consumer law
              attorneys. We're here to help you fight back against unfair and deceptive business practices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-white transition-all duration-300" asChild>
                  <Link href="/consultation">Schedule a Consultation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="transition-all duration-300" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
