"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gavel, Scale, FileText, Users, Award, ArrowRight } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { WebsiteStructuredData } from "@/components/structured-data"

export default function Home() {
  const aboutRef = useRef(null)
  const practiceRef = useRef(null)
  const whyUsRef = useRef(null)
  const ctaRef = useRef(null)
  const partnersRef = useRef(null)

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const practiceInView = useInView(practiceRef, { once: true, amount: 0.3 })
  const whyUsInView = useInView(whyUsRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })
  const partnersInView = useInView(partnersRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <>
      {/* Additional structured data for the homepage */}
      <WebsiteStructuredData />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center" aria-label="Hero Section">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <SafeImage
              src="/grand-law-library.png"
              fallbackSrc="/grand-legal-collection.png"
              alt="Law Library"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-bold text-white leading-tight mb-6"
            >
              Top Legal Services in{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-gold inline-block"
              >
                Gujarat
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8"
            >
              Thakker & Associates provides exceptional legal representation with integrity, expertise, and a commitment
              to achieving the best possible outcomes for our clients in Bhavnagar and throughout Gujarat.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/consultation">Schedule a Consultation</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300"
                  asChild
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">About Thakker & Associates</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Thakker & Associates is a premier law firm dedicated to providing exceptional legal services across
                various practice areas. With years of experience and a team of skilled attorneys, we are committed to
                delivering personalized attention and strategic solutions to meet our clients' legal needs.
              </p>
              <p className="text-muted-foreground mb-6">
                Our firm was founded on the principles of integrity, excellence, and client satisfaction. We understand
                that legal matters can be complex and stressful, which is why we strive to make the process as smooth
                and transparent as possible for our clients.
              </p>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/about" className="inline-flex items-center text-gold hover:underline group">
                  Learn more about our firm{" "}
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <SafeImage
                src="/modern-law-team.png"
                fallbackSrc="/legal-team-meeting.png"
                alt="Our Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-16 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Trusted Partners</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We collaborate with leading insurance providers to ensure comprehensive protection and support for our
              clients.
            </p>
          </motion.div>

          <div className="relative w-full overflow-hidden logo-carousel">
            {/* Gradient overlay - left side */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background/95 to-transparent"></div>

            {/* Gradient overlay - right side */}
            <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background/95 to-transparent"></div>

            <div className="flex items-center gap-16 animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/digit-logo.png"
                  alt="Go Digit Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/bajaj-logo.jpeg"
                  alt="Bajaj Allianz Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/icici-lombard-logo.png"
                  alt="ICICI Lombard Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/sbi-life-logo.png"
                  alt="SBI Life Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/reliance-logo.png"
                  alt="Reliance Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/shriram-logo.png"
                  alt="Shriram Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>

              {/* Duplicate logos for seamless scrolling */}
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/digit-logo.png"
                  alt="Go Digit Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/bajaj-logo.jpeg"
                  alt="Bajaj Allianz Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/icici-lombard-logo.png"
                  alt="ICICI Lombard Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/sbi-life-logo.png"
                  alt="SBI Life Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/reliance-logo.png"
                  alt="Reliance Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-40 flex-shrink-0 bg-white rounded-lg p-3 shadow-md">
                <SafeImage
                  src="/logos/shriram-logo.png"
                  alt="Shriram Insurance"
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section ref={practiceRef} className="py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={practiceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Practice Areas</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We offer comprehensive legal services across a wide range of practice areas to meet the diverse needs of
              our clients.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={practiceInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg practice-area-card h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Gavel className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Personal Injury</h3>
                  <p className="text-muted-foreground mb-4">
                    Our personal injury attorneys fight for the compensation you deserve after an accident or injury
                    caused by someone else's negligence.
                  </p>
                  <Link
                    href="/practice-areas/personal-injury"
                    className="inline-flex items-center text-gold hover:underline group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg practice-area-card h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Family Law</h3>
                  <p className="text-muted-foreground mb-4">
                    Our family law attorneys provide compassionate guidance through divorce, child custody, and other
                    family-related legal matters.
                  </p>
                  <Link
                    href="/practice-areas/family-law"
                    className="inline-flex items-center text-gold hover:underline group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg practice-area-card h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Scale className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Business Law</h3>
                  <p className="text-muted-foreground mb-4">
                    Our business attorneys help entrepreneurs and established companies navigate legal challenges and
                    opportunities.
                  </p>
                  <Link
                    href="/practice-areas/business-law"
                    className="inline-flex items-center text-gold hover:underline group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg practice-area-card h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Estate Planning</h3>
                  <p className="text-muted-foreground mb-4">
                    Our estate planning attorneys help you protect your assets and provide for your loved ones through
                    wills, trusts, and comprehensive estate plans.
                  </p>
                  <Link
                    href="/practice-areas/estate-planning"
                    className="inline-flex items-center text-gold hover:underline group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg practice-area-card h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Criminal Defense</h3>
                  <p className="text-muted-foreground mb-4">
                    Our criminal defense attorneys provide aggressive representation to protect your rights and freedom
                    when facing criminal charges.
                  </p>
                  <Link
                    href="/practice-areas/criminal-defense"
                    className="inline-flex items-center text-gold hover:underline group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-lg practice-area-card h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real Estate Law</h3>
                  <p className="text-muted-foreground mb-4">
                    Our real estate attorneys guide clients through property transactions, disputes, and development
                    projects with expert legal counsel.
                  </p>
                  <Link
                    href="/practice-areas/real-estate"
                    className="inline-flex items-center text-gold hover:underline group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={practiceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                asChild
                className="bg-gold hover:bg-gold/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/practice-areas">View All Practice Areas</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyUsRef} className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Why Choose Thakker & Associates</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We are committed to providing exceptional legal representation with integrity, expertise, and personalized
              attention.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-center p-6 bg-card rounded-lg shadow-lg border border-border/50 h-full">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6"
                >
                  <Award className="h-8 w-8 text-gold" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Experienced Attorneys</h3>
                <p className="text-muted-foreground">
                  Our team consists of highly skilled attorneys with extensive experience in their respective practice
                  areas.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-center p-6 bg-card rounded-lg shadow-lg border border-border/50 h-full">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6"
                >
                  <Users className="h-8 w-8 text-gold" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Client-Centered Approach</h3>
                <p className="text-muted-foreground">
                  We prioritize our clients' needs and provide personalized attention to every case we handle.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-center p-6 bg-card rounded-lg shadow-lg border border-border/50 h-full">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6"
                >
                  <Scale className="h-8 w-8 text-gold" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  We have a track record of success in achieving favorable outcomes for our clients across various legal
                  matters.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <motion.div
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={ctaInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <SafeImage
              src="/justice-symbols.png"
              fallbackSrc="/abstract-balance.png"
              alt="Law Background"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Ready to Discuss Your Legal Needs?</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced attorneys. We're
              here to help you navigate your legal challenges with confidence.
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/consultation">Schedule a Consultation</Link>
                </Button>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
