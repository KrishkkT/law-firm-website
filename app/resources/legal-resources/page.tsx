import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import type { Metadata } from "next"
import { FileText, Download, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Legal Resources | Thakker & Associates Law Firm",
  description:
    "Access free legal resources including guides, documents, articles, and FAQs provided by Thakker & Associates to help you understand Indian law and legal processes.",
  keywords: [
    "legal resources",
    "legal guides",
    "Indian law resources",
    "Gujarat legal documents",
    "free legal information",
    "legal templates",
    "legal articles",
    "legal FAQs",
  ],
}

const resources = [
  {
    title: "Guide to Property Documentation in Gujarat",
    description: "A comprehensive guide to essential property documents and verification processes in Gujarat.",
    category: "Real Estate Law",
    type: "PDF Guide",
    downloadPath: "/resources/property-documentation-guide.pdf",
    image: "/images/real-estate-property-inspection.png",
  },
  {
    title: "Business Formation Checklist",
    description:
      "Step-by-step checklist for setting up different types of businesses in Gujarat, including regulatory requirements.",
    category: "Business Law",
    type: "Checklist",
    downloadPath: "/resources/business-formation-checklist.pdf",
    image: "/images/business-law-meeting.png",
  },
  {
    title: "Family Law Mediation Process",
    description: "Overview of the family law mediation process, benefits, and what to expect during proceedings.",
    category: "Family Law",
    type: "Article",
    downloadPath: "/resources/family-law-mediation-guide.pdf",
    image: "/images/family-law-mediation.png",
  },
  {
    title: "Personal Injury Evidence Collection Guide",
    description: "Important information about documenting and preserving evidence after an accident or injury.",
    category: "Personal Injury",
    type: "Guide",
    downloadPath: "/resources/personal-injury-evidence-guide.pdf",
    image: "/images/personal-injury-consultation.png",
  },
  {
    title: "Criminal Procedure Timeline",
    description: "Visual timeline of criminal proceedings in Indian courts, from arrest to trial and appeals.",
    category: "Criminal Defense",
    type: "Infographic",
    downloadPath: "/resources/criminal-procedure-timeline.pdf",
    image: "/images/criminal-case-preparation.png",
  },
  {
    title: "Estate Planning Essentials",
    description:
      "Key components of a comprehensive estate plan and important considerations for different family situations.",
    category: "Estate Planning",
    type: "Guide",
    downloadPath: "/resources/estate-planning-essentials.pdf",
    image: "/images/estate-document-signing.png",
  },
  {
    title: "Consumer Rights Handbook",
    description:
      "Detailed information about consumer protection laws in India and steps to take when your rights are violated.",
    category: "Consumer Law",
    type: "Handbook",
    downloadPath: "/resources/consumer-rights-handbook.pdf",
    image: "/images/consumer-rights-defense.png",
  },
  {
    title: "Tax Filing Calendar",
    description: "Annual calendar with important tax filing dates and deadlines for individuals and businesses.",
    category: "Revenue Law",
    type: "Calendar",
    downloadPath: "/resources/tax-filing-calendar.pdf",
    image: "/images/tax-law-consultation.png",
  },
  {
    title: "Rental Agreement Template",
    description: "Standard rental agreement template with customizable clauses for residential properties in Gujarat.",
    category: "Real Estate Law",
    type: "Template",
    downloadPath: "/resources/rental-agreement-template.pdf",
    image: "/images/real-estate-closing.png",
  },
]

const articles = [
  {
    title: "Understanding the New Digital Personal Data Protection Act",
    description: "Analysis of India's new data protection law and its implications for businesses and individuals.",
    link: "/blog/understanding-digital-personal-data-protection-act",
    date: "April 28, 2023",
  },
  {
    title: "Recent Supreme Court Judgments Affecting Property Rights",
    description:
      "Overview of landmark Supreme Court decisions that have significant impacts on property ownership in India.",
    link: "/blog/supreme-court-judgments-property-rights",
    date: "March 15, 2023",
  },
  {
    title: "Changes to Gujarat Motor Vehicle Accident Claims Process",
    description: "Important updates to the Motor Vehicle Act and how they affect accident claims in Gujarat.",
    link: "/blog/gujarat-motor-vehicle-accident-claims-updates",
    date: "February 7, 2023",
  },
  {
    title: "A Guide to E-Filing in Gujarat Courts",
    description: "Step-by-step instructions for using the e-filing system in Gujarat judicial courts.",
    link: "/blog/e-filing-gujarat-courts-guide",
    date: "January 22, 2023",
  },
]

export default function LegalResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <SafeImage src="/legal-library-modern.png" alt="Legal Resources" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Legal <span className="text-gold">Resources</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Access free guides, documents, and information to help you better understand legal processes and protect
              your rights documents, and information to help you better understand legal processes and protect your
              rights.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Free Legal Resources</h2>
            <div className="divider-gold-left"></div>
            <p className="text-muted-foreground">
              Thakker & Associates is committed to empowering our community with legal knowledge. Browse our collection
              of free resources designed to help you navigate common legal situations with confidence. These materials
              are provided for educational purposes and should not be considered legal advice for your specific
              situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <SafeImage src={resource.image} alt={resource.title} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-gold text-white px-3 py-1 text-sm font-medium">
                    {resource.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-gold" />
                    <span className="text-sm font-medium">{resource.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold/10 flex items-center justify-center gap-2"
                    asChild
                  >
                    <a href={resource.downloadPath} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" /> Download Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Articles Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Recent Legal Articles</h2>
            <div className="divider-gold-left"></div>
            <p className="text-muted-foreground">
              Stay informed about important legal developments with our regularly updated articles covering recent
              legislative changes, landmark court decisions, and practical legal guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <span className="text-sm text-gold mb-2 inline-block">{article.date}</span>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.description}</p>
                  <Link href={article.link} className="inline-flex items-center text-gold hover:underline">
                    Read full article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="bg-gold hover:bg-gold/90 text-white">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Frequently Asked Legal Questions</h2>
            <div className="divider-gold-left"></div>
            <p className="text-muted-foreground">
              Find answers to common legal questions across various practice areas. For more detailed information, visit
              our comprehensive FAQ page.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  How long do I have to file a personal injury claim in Gujarat?
                </h3>
                <p className="text-muted-foreground">
                  In India, the Limitation Act of 1963 generally provides a limitation period of three years for filing
                  a personal injury claim from the date of the accident or injury. However, there are exceptions to this
                  rule, and the specific time limit can vary depending on the type of case and circumstances.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-2">What documents are needed to form a business in Gujarat?</h3>
                <p className="text-muted-foreground">
                  For a private limited company, you'll typically need documents such as the Certificate of
                  Incorporation, Memorandum of Association (MOA), Articles of Association (AOA), PAN card, GST
                  registration, and business licenses specific to your industry. The requirements vary based on the type
                  of business structure you choose.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-2">How is child custody determined in divorce cases?</h3>
                <p className="text-muted-foreground">
                  In India, child custody decisions are primarily guided by the principle of "the best interests of the
                  child." Courts consider factors such as the child's age, gender, personal preferences (if old enough),
                  the parents' ability to provide care, home stability, and the relationship with each parent.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-2">What compensation can I receive in a personal injury case?</h3>
                <p className="text-muted-foreground">
                  You may be eligible for various types of compensation, including medical expenses (both current and
                  future), lost wages and loss of earning capacity, pain and suffering, emotional distress, property
                  damage, and in some cases, punitive damages. The specific amount depends on the nature and severity of
                  your injuries.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-2">What is the difference between a will and a trust?</h3>
                <p className="text-muted-foreground">
                  A will is a legal document that outlines how you want your assets distributed after your death and
                  only takes effect after you pass away. It must go through probate. A trust can be effective during
                  your lifetime and continues after your death, allowing for asset management without court involvement,
                  offering more privacy and potentially faster distribution.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  How can I protect my property rights in a real estate transaction?
                </h3>
                <p className="text-muted-foreground">
                  To protect your property rights, conduct thorough due diligence, including title verification,
                  property survey, and checking for encumbrances. Ensure all agreements are in writing, work with a
                  qualified real estate attorney, and make sure all transactions are properly registered with the
                  appropriate authorities.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="bg-gold hover:bg-gold/90 text-white">
              <Link href="/faqs">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Need Personalized Legal Guidance?</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              While these resources provide general information, every legal situation is unique. Contact Thakker &
              Associates today to schedule a consultation with one of our experienced attorneys for advice tailored to
              your specific circumstances.
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
