"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"
import { ScrollText, Landmark, FileSignature, Stethoscope, ClipboardList, Calculator } from "lucide-react"

export default function EstatePlanningPage() {
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
              src="/images/estate-planning-consultation.png"
              alt="Estate Planning"
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
              Estate <span className="text-gold">Planning</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Comprehensive estate planning solutions to protect your legacy and provide for your loved ones.
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
                Securing Your Legacy and Your Family's Future
              </h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                At Thakker & Associates, we understand that estate planning is about more than just distributing assets
                — it's about ensuring your wishes are honored, protecting your loved ones, and creating a lasting
                legacy. Our experienced estate planning attorneys provide personalized guidance to help you navigate
                these important decisions with confidence and peace of mind.
              </p>
              <p className="text-muted-foreground mb-6">
                Every family's situation is unique, which is why we take the time to understand your specific
                circumstances, concerns, and goals. Whether you're planning for the transfer of assets, minimizing tax
                burdens, providing for children or dependents with special needs, or establishing charitable giving, we
                develop comprehensive solutions tailored to your individual needs.
              </p>
              <p className="text-muted-foreground mb-6">
                Our goal is to make the estate planning process clear and accessible, helping you make informed
                decisions that will protect what matters most to you, now and for generations to come.
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
                src="/images/estate-document-signing.png"
                alt="Estate Planning Consultation"
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
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Estate Planning Services</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We offer comprehensive estate planning services to help you protect your assets and provide for your loved
              ones according to your wishes.
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
                    <ScrollText className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Will Preparation</h3>
                  <p className="text-muted-foreground mb-4">
                    We draft legally sound wills that clearly express your wishes regarding the distribution of your
                    assets, appointment of guardians for minor children, and other important matters. Our attorneys
                    ensure your will complies with all legal requirements and reflects your specific intentions, helping
                    to avoid confusion and conflict among your loved ones after your passing.
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
                    <Landmark className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Trust Creation & Administration</h3>
                  <p className="text-muted-foreground mb-4">
                    We design and implement various types of trusts to meet your specific needs, including revocable
                    living trusts, irrevocable trusts, charitable trusts, and special needs trusts. Trusts can help
                    avoid probate, provide for asset management during incapacity, reduce estate taxes, protect
                    beneficiaries, and achieve many other important goals. We also assist trustees with trust
                    administration responsibilities.
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
                    <FileSignature className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Powers of Attorney</h3>
                  <p className="text-muted-foreground mb-4">
                    We prepare durable powers of attorney for financial matters and healthcare decisions, allowing you
                    to designate trusted individuals to make important decisions on your behalf if you become unable to
                    do so. These essential documents ensure that your affairs continue to be managed according to your
                    wishes during periods of incapacity, avoiding the need for court intervention through guardianship
                    or conservatorship proceedings.
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
                    <Stethoscope className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Advance Healthcare Directives</h3>
                  <p className="text-muted-foreground mb-4">
                    We help you create living wills and other advance directives that clearly communicate your wishes
                    regarding medical treatment and end-of-life care. These documents provide crucial guidance to your
                    healthcare providers and loved ones in difficult situations, ensuring that your personal values and
                    preferences are respected even when you cannot express them yourself.
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
                    <ClipboardList className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Probate & Estate Administration</h3>
                  <p className="text-muted-foreground mb-4">
                    Our attorneys guide personal representatives and executors through the probate process, helping them
                    fulfill their legal duties in administering estates. We handle court filings, asset inventories,
                    creditor notifications, tax matters, and distributions to beneficiaries. Whether the estate is
                    simple or complex, we provide the legal support needed to navigate this process efficiently.
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
                    <Calculator className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Estate Tax Planning</h3>
                  <p className="text-muted-foreground mb-4">
                    We develop strategies to minimize estate, gift, and income tax liabilities, helping to preserve more
                    of your wealth for your beneficiaries. Our attorneys stay current on tax laws and regulations to
                    provide you with up-to-date advice on tax-efficient wealth transfer techniques, including lifetime
                    gifting programs, charitable planning, and other advanced strategies tailored to your financial
                    situation and goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
                Protect Your Legacy with Expert Estate Planning
              </h2>
              <div className="divider-gold"></div>
              <p className="text-muted-foreground mb-8">
                Don't leave your family's future to chance. Contact Thakker & Associates today to schedule a
                consultation with our experienced estate planning attorneys. We'll help you create a comprehensive plan
                that protects your assets and provides for your loved ones according to your wishes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/consultation" className="btn-primary px-8 py-3 rounded-md text-center">
                  Schedule a Consultation
                </a>
                <a href="/contact" className="btn-outline px-8 py-3 rounded-md text-center">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
