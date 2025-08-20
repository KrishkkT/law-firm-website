"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"

export default function FAQsPage() {
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
            <SafeImage src="/legal-library-modern.png" alt="Frequently Asked Questions" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs className="text-white/70" activeItemClasses="text-white" />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Frequently Asked <span className="text-gold">Questions</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Find answers to common legal questions and learn more about how we can help with your legal matters.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">General Legal Questions</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Answers to common questions about legal processes and our services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">How do I know if I have a personal injury case?</h3>
                    <p className="text-muted-foreground">
                      If you've been injured due to someone else's negligence or intentional actions, you may have a
                      personal injury case. Key factors include proving that another party was at fault, that you
                      suffered actual damages (medical bills, lost wages, pain and suffering), and that the injury
                      occurred within the statute of limitations. It's best to consult with a personal injury attorney
                      who can evaluate the specific details of your situation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What should I bring to my initial consultation?</h3>
                    <p className="text-muted-foreground">
                      For your initial consultation, bring any documents relevant to your case, such as accident
                      reports, medical records, correspondence with insurance companies, photographs, witness
                      information, and any contracts or agreements related to your legal matter. Also, prepare a
                      timeline of events and a list of questions you want to ask. This information will help your
                      attorney better understand your case and provide more accurate guidance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">How long will my case take to resolve?</h3>
                    <p className="text-muted-foreground">
                      The duration of a legal case varies widely depending on its complexity, the area of law, court
                      schedules, and whether a settlement is reached or the case goes to trial. Some straightforward
                      matters might resolve in a few months, while complex litigation can take years. During your
                      consultation, your attorney can provide a more specific timeline based on the details of your case
                      and their experience with similar matters.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What are your fee structures?</h3>
                    <p className="text-muted-foreground">
                      Our fee structures vary depending on the type of case. For personal injury cases, we typically
                      work on a contingency fee basis, meaning we only get paid if you win your case. For other matters,
                      flat fees for specific services, or retainer fees. We believe in transparent pricing and will
                      clearly explain our fee structure during your initial consultation so you know what to expect.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Do I need a lawyer for my legal matter?</h3>
                    <p className="text-muted-foreground">
                      While some simple legal matters can be handled without an attorney, having professional legal
                      representation is often beneficial, especially for complex issues. A lawyer brings expertise in
                      navigating the legal system, understanding relevant laws, negotiating with opposing parties, and
                      protecting your rights. For significant legal matters that could impact your finances, freedom, or
                      future, consulting with an attorney is generally recommended.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Area FAQs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Practice Area FAQs</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Specific questions related to our different practice areas.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      How long do I have to file a personal injury claim in India?
                    </h3>
                    <p className="text-muted-foreground">
                      In India, the Limitation Act of 1963 generally provides a limitation period of three years for
                      filing a personal injury claim from the date of the accident or injury. However, there are
                      exceptions to this rule, and the specific time limit can vary depending on the type of case and
                      circumstances. It's always best to consult with an attorney as soon as possible after an injury to
                      ensure your claim is filed within the appropriate timeframe.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What is the difference between a will and a trust?</h3>
                    <p className="text-muted-foreground">
                      A will is a legal document that outlines how you want your assets distributed after your death and
                      only takes effect after you pass away. It must go through probate, which is a court-supervised
                      process. A trust, on the other hand, can be effective during your lifetime and continues after
                      your death. It allows for the management and distribution of assets according to your wishes
                      without court involvement. Trusts offer more privacy and potentially faster distribution of assets
                      compared to wills.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">How is child custody determined in divorce cases?</h3>
                    <p className="text-muted-foreground">
                      In India, child custody decisions are primarily guided by the principle of "the best interests of
                      the child." Courts consider factors such as the child's age, gender, and personal preferences (if
                      they are old enough), the parents' ability to provide care and support, the stability of each
                      parent's home environment, and the child's relationship with each parent. The Hindu Minority and
                      Guardianship Act and the Guardians and Wards Act provide the legal framework for custody
                      decisions, with recent court decisions showing a trend toward shared parenting arrangements when
                      appropriate.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What should I do if I'm arrested?</h3>
                    <p className="text-muted-foreground">
                      If you are arrested, remain calm and exercise your right to remain silent. Politely provide your
                      basic identification information but avoid discussing the details of your case with law
                      enforcement. Request to speak with an attorney immediately and do not sign any documents or make
                      any statements without legal counsel present. Remember that anything you say can be used against
                      you in court. Contact a family member or friend to inform them of your situation if possible, and
                      cooperate with the booking process while waiting for legal representation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      What compensation can I receive in a personal injury case?
                    </h3>
                    <p className="text-muted-foreground">
                      In a personal injury case, you may be eligible for various types of compensation, including
                      medical expenses (both current and future), lost wages and loss of earning capacity, pain and
                      suffering, emotional distress, property damage, and in some cases, punitive damages. The specific
                      compensation you can receive depends on the nature and severity of your injuries, the impact on
                      your life, and the circumstances of the accident. An experienced personal injury attorney can help
                      you understand what types of damages you may be entitled to in your specific case.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What documents are needed to form a business in India?</h3>
                    <p className="text-muted-foreground">
                      The documents required to form a business in India depend on the type of business structure you
                      choose. For a private limited company, you'll typically need documents such as the Certificate of
                      Incorporation, Memorandum of Association (MOA), Articles of Association (AOA), PAN card, GST
                      registration, and business licenses specific to your industry. For partnerships, you'll need a
                      partnership deed, while sole proprietorships require fewer formal documents but still need
                      business licenses and registrations. Our business law attorneys can guide you through the specific
                      requirements for your chosen business structure.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      How can I protect my property rights in a real estate transaction?
                    </h3>
                    <p className="text-muted-foreground">
                      To protect your property rights in a real estate transaction, it's essential to conduct thorough
                      due diligence, including title verification, property survey, and checking for encumbrances or
                      liens. Always ensure that all agreements are in writing and properly executed. Work with a
                      qualified real estate attorney who can review contracts, conduct title searches, and address any
                      legal issues that arise. Additionally, make sure all transactions are properly registered with the
                      appropriate authorities and that you obtain all necessary permits and approvals. Our real estate
                      attorneys can help safeguard your interests throughout the entire transaction process.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What are the grounds for divorce in India?</h3>
                    <p className="text-muted-foreground">
                      In India, the grounds for divorce vary depending on the personal law applicable to the couple.
                      Under the Hindu Marriage Act, grounds include adultery, cruelty, desertion for at least two years,
                      conversion to another religion, mental disorder, communicable disease, renunciation of the world,
                      presumption of death, and mutual consent. For Muslims, divorce can be obtained through talaq,
                      khula, or judicial divorce. Christians and those married under the Special Marriage Act have
                      similar grounds to those under the Hindu Marriage Act. Our family law attorneys can provide
                      guidance specific to your situation and applicable personal law.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client-Specific FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Client Services FAQs</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Questions about working with our firm and what to expect.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">How do I schedule a consultation with your firm?</h3>
                    <p className="text-muted-foreground">
                      Scheduling a consultation with Thakker & Associates is simple. You can fill out the consultation
                      request form on our website, or send an email to infojtlaw@gmail.com. Our staff will promptly
                      respond to arrange a convenient time for your consultation. We offer both in-person and virtual
                      consultations to accommodate your needs and schedule.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">How will we communicate about my case?</h3>
                    <p className="text-muted-foreground">
                      At Thakker & Associates, we prioritize clear and consistent communication. During your initial
                      consultation, we'll establish your preferred communication methods (phone, email, text, or
                      in-person meetings). You'll receive regular updates on your case's progress, and your attorney
                      will be available to answer questions and address concerns. We strive to respond to all client
                      communications within 24 business hours. For urgent matters, we have protocols in place to ensure
                      you receive prompt attention.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What languages do your attorneys speak?</h3>
                    <p className="text-muted-foreground">
                      Our attorneys and staff are fluent in multiple languages to better serve our diverse clientele. We
                      offer legal services in English, Hindi, Gujarati.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Do you offer payment plans for legal services?</h3>
                    <p className="text-muted-foreground">
                      Yes, we understand that legal expenses can be challenging for many clients. Thakker & Associates
                      offers flexible payment options, including payment plans tailored to your financial situation.
                      During your initial consultation, we'll discuss our fee structure and payment options in detail.
                      For other matters, we can develop a payment plan that works within your budget.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-background border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What geographic areas do you serve?</h3>
                    <p className="text-muted-foreground">
                      Thakker & Associates primarily serves clients throughout Gujarat, with our main office located in
                      Bhavnagar. We also handle cases in Ahmedabad, Vadodra, Nadiad, Botad, Mahuva, Talaja, Dhandhuka.
                      If you're unsure whether we can assist with your legal matter in your location, please contact our
                      office, and we'll be happy to discuss your specific situation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Have More Questions?</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced attorneys. We're
              here to answer your questions and help you navigate your legal challenges with confidence.
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
