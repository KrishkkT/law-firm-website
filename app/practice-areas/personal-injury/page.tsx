"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"
import { Car, Footprints, Stethoscope, Hammer, ShoppingBag, HeartPulse } from "lucide-react"

export default function PersonalInjuryPage() {
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
            <SafeImage src="/personal-injury-hero.png" alt="Personal Injury Law" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs className="text-white/70" activeItemClasses="text-white" />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Personal <span className="text-gold">Injury Law</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Dedicated advocacy for victims of negligence, fighting for the compensation and justice you deserve after
              an injury.
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
                Fighting for Your Right to Compensation
              </h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, our personal injury attorneys are committed to helping victims recover
                physically, emotionally, and financially after suffering injuries due to someone else's negligence. We
                understand the challenges you face during this difficult time and are here to provide the legal support
                you need.
              </p>
              <p className="text-muted-foreground mb-6">
                Our experienced team has a proven track record of successfully representing clients in a wide range of
                personal injury cases, securing substantial settlements and verdicts that help them rebuild their lives
                and move forward with confidence.
              </p>
              <p className="text-muted-foreground mb-6">
                We handle all aspects of your claim, from investigation and evidence gathering to negotiation with
                insurance companies and, if necessary, litigation in court. Our goal is to ensure you receive full and
                fair compensation for your injuries, medical expenses, lost wages, and pain and suffering.
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
                src="/car-accident-injury.png"
                alt="Car Accident Injury Consultation"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Cases */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
              Types of Personal Injury Cases We Handle
            </h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Our experienced attorneys handle a wide range of personal injury cases, providing specialized
              representation tailored to your specific situation.
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
                  <h3 className="text-xl font-bold mb-3">Car Accidents</h3>
                  <p className="text-muted-foreground mb-4">
                    We represent victims of automobile accidents, helping them recover compensation for injuries,
                    medical expenses, lost wages, and property damage. Our team investigates the accident, works with
                    accident reconstruction experts when necessary, and builds a strong case against the responsible
                    parties.
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
                    <Footprints className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Slip and Fall Accidents</h3>
                  <p className="text-muted-foreground mb-4">
                    Property owners have a legal duty to maintain safe premises. When they fail to do so and you're
                    injured as a result, we help you hold them accountable. Our attorneys handle premises liability
                    claims, including slip and fall accidents, inadequate security, and other dangerous property
                    conditions.
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
                    <Stethoscope className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Medical Malpractice</h3>
                  <p className="text-muted-foreground mb-4">
                    When healthcare professionals fail to provide the standard of care expected in their field, the
                    results can be devastating. Our medical malpractice attorneys work with medical experts to identify
                    negligence and build strong cases for victims of surgical errors, misdiagnosis, medication errors,
                    and birth injuries.
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
                    <Hammer className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Workplace Injuries</h3>
                  <p className="text-muted-foreground mb-4">
                    Beyond workers' compensation, there may be third parties responsible for workplace injuries. We help
                    injured workers navigate both workers' compensation claims and potential third-party liability
                    lawsuits to maximize their recovery after construction accidents, industrial injuries, and other
                    workplace incidents.
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
                    <ShoppingBag className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Product Liability</h3>
                  <p className="text-muted-foreground mb-4">
                    Manufacturers, distributors, and retailers have a responsibility to ensure their products are safe
                    for consumers. When defective products cause injuries, our product liability attorneys help victims
                    hold these companies accountable through claims involving design defects, manufacturing defects, and
                    failure to warn.
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
                    <HeartPulse className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Wrongful Death</h3>
                  <p className="text-muted-foreground mb-4">
                    Losing a loved one due to someone else's negligence is devastating. Our compassionate attorneys help
                    families seek justice and compensation through wrongful death claims. We handle these sensitive
                    cases with care and dedication, working to secure financial support for funeral expenses, lost
                    income, lost companionship, and more.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Personal Injury Process</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We guide you through every step of your personal injury claim, from initial consultation to final
              resolution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gold text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 z-10 relative">
                  1
                </div>
                <div className="absolute top-8 left-[50%] h-1 bg-gold w-full hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-muted-foreground">
                We discuss your case, assess its merits, and explain your legal options during a no-obligation
                consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gold text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 z-10 relative">
                  2
                </div>
                <div className="absolute top-8 left-[50%] h-1 bg-gold w-full hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Investigation</h3>
              <p className="text-muted-foreground">
                We gather evidence, interview witnesses, review medical records, and consult with experts to build your
                case.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gold text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 z-10 relative">
                  3
                </div>
                <div className="absolute top-8 left-[50%] h-1 bg-gold w-full hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Negotiation</h3>
              <p className="text-muted-foreground">
                We negotiate with insurance companies and opposing parties to secure a fair settlement for your
                injuries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gold text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 z-10 relative">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Resolution</h3>
              <p className="text-muted-foreground">
                We either reach a favorable settlement or take your case to trial to fight for the compensation you
                deserve.
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
              Injured? Let Us Fight for Your Rights
            </h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Don't face the aftermath of an injury alone. Contact Thakker & Associates today to schedule a consultation
              with one of our experienced personal injury attorneys.
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
