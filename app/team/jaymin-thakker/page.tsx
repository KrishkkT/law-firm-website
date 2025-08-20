"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Award, Briefcase } from "lucide-react"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"

export default function JayminThakkerPage() {
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
            <SafeImage src="/stately-law-library.png" alt="Jaymin Thakker" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs className="text-white/70" activeItemClasses="text-white" />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Jaymin <span className="text-gold">Thakker</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Founding Partner | Experienced Attorney with a Passion for Justice
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              <div className="sticky top-32">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage src="/jaymin-thakker-portrait.jpeg" alt="Jaymin Thakker" fill className="object-cover" />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 9898241082</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">infojtlaw@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                      <Briefcase className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Practice Areas</p>
                      <p className="font-medium">Business Law, Family Law, Personal Injury, and more...</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2"
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">About Jaymin Thakker</h2>
              <div className="divider-gold-left"></div>

              <p className="text-muted-foreground mb-6">
                Jaymin Thakker is the founding partner of Thakker & Associates, bringing over 20 years of legal
                expertise to his practice. With a passion for justice and a commitment to client advocacy, Jaymin has
                established himself as a respected attorney in Gujarat, known for his strategic approach to complex
                legal matters.
              </p>

              <p className="text-muted-foreground mb-6">
                After graduating with honors from Bhavvnagar University's Faculty of Law, Jaymin began his career working
                with one of Ahmedabad's premier law firms before establishing his own practice in Bhavnagar. His vision
                was to create a client-centered law firm that provides personalized attention and effective legal
                solutions to individuals and businesses throughout the region.
              </p>

              <p className="text-muted-foreground mb-10">
                Throughout his career, Jaymin has successfully represented clients in a wide range of legal matters,
                from complex business litigation and family law disputes to personal injury claims and estate planning.
                His analytical mindset, attention to detail, and unwavering dedication to his clients' interests have
                resulted in numerous favorable outcomes and a reputation for excellence.
              </p>

              <h3 className="text-2xl font-cormorant font-bold mb-4">Education & Credentials</h3>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 mt-0.5">
                    <Award className="h-3 w-3 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">LL.B., Bhavnagar University</p>
                    <p className="text-sm text-muted-foreground">Graduated with Honors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 mt-0.5">
                    <Award className="h-3 w-3 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Member, Bar Council of Gujarat</p>
                    <p className="text-sm text-muted-foreground">Licensed to practice since 2005</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 mt-0.5">
                    <Award className="h-3 w-3 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">President, Consumer Court Bhavnagar</p>
                    <p className="text-sm text-muted-foreground">Leading efforts to promote consumer rights and legal awareness</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 mt-0.5">
                    <Award className="h-3 w-3 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Member, Indian Association of Lawyers</p>
                    <p className="text-sm text-muted-foreground">Active participant in legal education initiatives</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-cormorant font-bold mb-4">Areas of Practice</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Business Law</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Family Law</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Personal Injury</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Estate Planning</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Real Estate Law</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Business Law</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Criminal Defense</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Civil Law</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Consumer Law</h4>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-gold" />
                      </div>
                      <h4 className="font-bold">Revenue Law</h4>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-cormorant font-bold mb-4">Philosophy</h3>
              <p className="text-muted-foreground mb-6">
                Jaymin believes that effective legal representation requires not only a deep understanding of the law
                but also a genuine commitment to understanding each client's unique circumstances and objectives. He
                approaches every case with empathy, integrity, and a determination to achieve the best possible outcome.
              </p>

              <p className="text-muted-foreground mb-10">
                "My goal is to provide clients with both exceptional legal representation and peace of mind during what
                are often challenging times in their lives. By combining legal expertise with personalized attention, we
                help our clients navigate complex legal matters with confidence and achieve results that protect their
                interests and advance their goals."
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gold hover:bg-gold/90 text-white">
                  <Link href="/consultation">Schedule a Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                  <Link href="/services">Learn About Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
