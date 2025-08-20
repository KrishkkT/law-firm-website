"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"
import { LocalBusinessStructuredData } from "@/components/structured-data"

export default function BhavnagarLocationPage() {
  const services = [
    {
      title: "Criminal Lawyer in Bhavnagar",
      description: "Expert criminal defense representation for all types of criminal cases in Bhavnagar courts.",
      image: "/criminal-defense-consultation.jpg",
      link: "/practice-areas/criminal-defense",
    },
    {
      title: "Civil Litigation Advocate Bhavnagar",
      description:
        "Experienced civil litigation services for resolving disputes through negotiation or court proceedings.",
      image: "/business-litigation.jpg",
      link: "/practice-areas/business-law",
    },
    {
      title: "Family and Divorce Lawyer Bhavnagar",
      description:
        "Compassionate legal guidance for divorce, child custody, and other family law matters in Bhavnagar.",
      image: "/divorce-explanation.png",
      link: "/practice-areas/family-law",
    },
    {
      title: "Property Dispute Lawyer Bhavnagar",
      description:
        "Resolving complex property disputes and real estate legal matters in Bhavnagar and surrounding areas.",
      image: "/property-disputes.jpg",
      link: "/practice-areas/real-estate",
    },
    {
      title: "Corporate Legal Advisor Bhavnagar",
      description: "Strategic business law services for companies and entrepreneurs in Bhavnagar.",
      image: "/business-formation.jpg",
      link: "/practice-areas/business-law",
    },
    {
      title: "Legal Notice Drafting in Bhavnagar",
      description: "Professional drafting of legal notices, agreements, and documents for individuals and businesses.",
      image: "/contract-signing.jpg",
      link: "/practice-areas/business-law",
    },
  ]

  return (
    <>
      <LocalBusinessStructuredData city="Bhavnagar" latitude="21.774786361740716" longitude="72.14664987388134" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <SafeImage src="/grand-legal-hall.png" alt="Bhavnagar Law Office" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs className="text-white/70" activeItemClasses="text-white" />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Legal Services in <span className="text-gold">Bhavnagar</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Premier legal representation and consultation services in Bhavnagar, Gujarat. Our experienced attorneys
              provide comprehensive legal solutions for individuals and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* About Our Bhavnagar Office */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Bhavnagar Office</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Our main office in Bhavnagar serves as the headquarters for Thakker & Associates, providing
                comprehensive legal services to clients throughout the region. Located in the heart of the city, our
                office is easily accessible and equipped with modern facilities to ensure a comfortable and professional
                environment for our clients.
              </p>
              <p className="text-muted-foreground mb-6">
                Led by experienced attorneys with deep knowledge of local laws and court procedures, our Bhavnagar team
                handles a wide range of legal matters, from criminal defense and civil litigation to family law,
                property disputes, and corporate legal services.
              </p>
              <p className="text-muted-foreground mb-6">
                We are committed to providing personalized attention and strategic legal solutions tailored to the
                unique needs of each client, helping them navigate complex legal challenges with confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <SafeImage src="/refined-legal-space.png" alt="Bhavnagar Office" fill className="object-cover" />
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
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Legal Services in Bhavnagar</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Our Bhavnagar office provides a comprehensive range of legal services to meet the diverse needs of our
              clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-background border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="h-48 relative mb-6 rounded-lg overflow-hidden">
                      <SafeImage src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link href={service.link} className="inline-flex items-center text-gold hover:underline">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Contact Our Bhavnagar Office</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-8">
                Get in touch with our Bhavnagar team to schedule a consultation or learn more about our legal services.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Kaveri Complex, Nawapara
                      <br />
                      Bhavnagar, Gujarat-364001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+919898241082" className="hover:text-gold transition-colors">
                        +91 9898241082
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:infojtlaw@gmail.com" className="hover:text-gold transition-colors">
                        infojtlaw@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 10:00 AM - 9:00 PM
                      <br />
                      Saturday: 10:00 AM - 8:00 PM
                      <br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.1414376277116!2d72.14664987388134!3d21.774786361740716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bfb7076d807%3A0x3bab8e325b6dc65c!2sThakker%20%26%20Associates(Adv.%20Jaymin%20Thakker)!5e0!3m2!1sen!2sin!4v1744911296520!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thakker & Associates Bhavnagar Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Need Legal Assistance in Bhavnagar?</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced Bhavnagar
              attorneys.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white" asChild>
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
