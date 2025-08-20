"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"
import { Car, Pill, Briefcase, ShieldAlert, Key, UserRound } from "lucide-react"

export default function CriminalDefensePage() {
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
              src="/images/criminal-defense-attorney.png"
              alt="Criminal Defense"
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
              Criminal <span className="text-gold">Defense</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Aggressive defense strategies and dedicated representation to protect your rights and freedom.
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
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Protecting Your Rights and Freedom</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, we understand that facing criminal charges can be one of the most stressful and
                frightening experiences in a person's life. Our criminal defense attorneys are committed to providing
                aggressive representation and personalized attention to protect your rights, your freedom, and your
                future.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe that everyone deserves a strong defense, regardless of the charges they face. Our experienced
                team works tirelessly to investigate every aspect of your case, challenge the evidence against you, and
                develop effective defense strategies tailored to your specific situation.
              </p>
              <p className="text-muted-foreground mb-6">
                From the moment you engage our services, we will stand by your side throughout the entire legal process,
                from arrest and bail hearings to plea negotiations, trial, and if necessary, appeals. Our goal is to
                achieve the best possible outcome for your case while providing the support and guidance you need during
                this challenging time.
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
                src="/images/criminal-case-preparation.png"
                alt="Criminal Defense Consultation"
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
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Criminal Defense Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We provide comprehensive legal representation for a wide range of criminal charges, from misdemeanors to
              serious felonies.
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
                    <Car className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">DUI/DWI Defense</h3>
                  <p className="text-muted-foreground mb-4">
                    Our attorneys have extensive experience defending clients against driving under the influence
                    charges. We scrutinize every aspect of your case, from the initial traffic stop and field sobriety
                    tests to breathalyzer results and police procedures. We work to identify any violations of your
                    rights or procedural errors that could lead to reduced charges or dismissal.
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
                    <Pill className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Drug Offenses</h3>
                  <p className="text-muted-foreground mb-4">
                    Drug charges can carry severe penalties, including substantial prison time and hefty fines. Our
                    defense team has successfully handled cases involving possession, distribution, manufacturing, and
                    trafficking. We investigate search and seizure procedures, challenge evidence collection methods,
                    and explore all available defense strategies, including treatment alternatives to incarceration when
                    appropriate.
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
                    <Briefcase className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">White Collar Crimes</h3>
                  <p className="text-muted-foreground mb-4">
                    White collar criminal cases often involve complex financial transactions and voluminous evidence.
                    Our attorneys have the knowledge and resources to handle sophisticated cases involving fraud,
                    embezzlement, money laundering, tax evasion, and securities violations. We work with financial
                    experts and forensic accountants to build strong defenses and protect your reputation and future.
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
                    <ShieldAlert className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Violent Crimes</h3>
                  <p className="text-muted-foreground mb-4">
                    Charges involving assault, battery, domestic violence, and other violent offenses require immediate
                    and aggressive defense. Our attorneys conduct thorough investigations, interview witnesses, review
                    medical records, and analyze physical evidence to build strong defenses. We explore all possible
                    legal strategies, including self-defense, defense of others, and challenging witness credibility.
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
                    <Key className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Theft Crimes</h3>
                  <p className="text-muted-foreground mb-4">
                    From shoplifting and petty theft to grand larceny and burglary, theft charges can have serious
                    consequences for your future. Our defense team works to protect your rights and minimize the impact
                    of these charges. We explore all possible defenses, including mistaken identity, lack of intent,
                    ownership disputes, and constitutional violations during search and seizure.
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
                    <UserRound className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Juvenile Defense</h3>
                  <p className="text-muted-foreground mb-4">
                    When minors face criminal charges, the consequences can affect their education, career prospects,
                    and entire future. Our attorneys understand the unique aspects of the juvenile justice system and
                    work to protect young clients' rights and futures. We focus on rehabilitation options, record
                    sealing and expungement, and minimizing the long-term impact of juvenile proceedings.
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
                src="/images/criminal-court-hearing.png"
                alt="Our Criminal Defense Approach"
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
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Defense Approach</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, we take a comprehensive and strategic approach to criminal defense. We
                understand that every case is unique, and we tailor our defense strategies to the specific circumstances
                and needs of each client.
              </p>
              <p className="text-muted-foreground mb-6">
                Our defense process begins with a thorough investigation of your case. We review police reports,
                interview witnesses, analyze evidence, and identify any procedural errors or constitutional violations
                that may have occurred during your arrest or investigation.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe in open and honest communication with our clients. We will explain the charges against you,
                the potential consequences, and your legal options in clear, straightforward terms. We keep you informed
                at every stage of the process and involve you in all important decisions regarding your case.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether negotiating a favorable plea agreement or fighting for your rights at trial, our goal is always
                to achieve the best possible outcome for your case while minimizing the impact on your life, your
                family, and your future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Don't Face Criminal Charges Alone</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              If you or a loved one has been arrested or is under investigation, time is of the essence. Contact Thakker
              & Associates today to schedule a confidential consultation with one of our experienced criminal defense
              attorneys.
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
