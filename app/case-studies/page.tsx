import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | Thakker & Associates Law Firm",
  description:
    "Explore successful legal cases and outcomes achieved by Thakker & Associates. Real-world examples of how our legal expertise has helped clients across various practice areas.",
  keywords: [
    "legal case studies",
    "successful legal cases",
    "Gujarat legal outcomes",
    "property dispute resolution",
    "family law cases",
    "business litigation success",
    "personal injury settlements",
  ],
}

const caseStudies = [
  {
    id: "ancestral-property-dispute-resolution",
    title: "Complex Ancestral Property Dispute Resolution in Bhavnagar",
    excerpt:
      "How we helped resolve a decades-old family property dispute involving multiple heirs and complicated documentation issues.",
    category: "Real Estate Law",
    image: "/images/real-estate-property-inspection.png",
    outcome: "Successful settlement with fair division among 7 family members",
  },
  {
    id: "business-acquisition-negotiation",
    title: "Successful Business Acquisition Negotiation for Family-Owned Enterprise",
    excerpt:
      "Guiding a third-generation family business through acquisition by a larger corporation while protecting family interests.",
    category: "Business Law",
    image: "/images/business-contract-signing.png",
    outcome: "₹14.5 crore acquisition with favorable terms for family stakeholders",
  },
  {
    id: "multi-party-accident-claim",
    title: "Multi-Party Accident Claim Following Major Highway Collision",
    excerpt:
      "Representing the victims of a serious commercial vehicle accident involving multiple parties and insurance companies.",
    category: "Personal Injury",
    image: "/car-accident-injury.png",
    outcome: "₹78 lakh combined settlement for injured parties",
  },
  {
    id: "child-custody-mediation",
    title: "Successful Child Custody Mediation in High-Conflict Divorce",
    excerpt:
      "Achieving a child-focused resolution in a highly contentious custody battle through skilled mediation and legal advocacy.",
    category: "Family Law",
    image: "/images/family-law-mediation.png",
    outcome: "Joint custody arrangement with comprehensive parenting plan",
  },
  {
    id: "fraud-defense-acquittal",
    title: "Complete Acquittal in Complex Financial Fraud Allegations",
    excerpt:
      "Defending a business owner against serious allegations of financial misconduct and documenting evidence of innocence.",
    category: "Criminal Defense",
    image: "/images/criminal-case-preparation.png",
    outcome: "Full acquittal with reputation restored",
  },
  {
    id: "succession-planning-family-business",
    title: "Comprehensive Succession Planning for Multi-Generational Business",
    excerpt:
      "Creating a robust succession and estate plan for a family with diverse business interests across multiple sectors.",
    category: "Estate Planning",
    image: "/images/estate-document-signing.png",
    outcome: "Seamless leadership transition and tax-efficient wealth transfer",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <SafeImage src="/courtroom-professionals.png" alt="Case Studies" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Our <span className="text-gold">Case Studies</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Real client stories and outcomes that demonstrate our commitment to achieving results across all practice
              areas.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Success Stories</h2>
            <div className="divider-gold-left"></div>
            <p className="text-muted-foreground">
              At Thakker & Associates, we believe in showing, not just telling. These case studies illustrate how our
              legal expertise has made a real difference in our clients' lives and businesses. While we've changed names
              and some details to protect client confidentiality, these stories represent actual cases handled by our
              firm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Card
                key={caseStudy.id}
                className="overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <SafeImage src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-gold text-white px-3 py-1 text-sm font-medium">
                    {caseStudy.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="text-muted-foreground mb-4">{caseStudy.excerpt}</p>
                  <div className="bg-secondary/50 p-3 rounded-lg mb-4">
                    <p className="font-medium">Outcome:</p>
                    <p className="text-gold font-medium">{caseStudy.outcome}</p>
                  </div>
                  <Link
                    href={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center text-gold hover:underline"
                  >
                    Read full case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Our Approach to Client Success</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-6">
                Every case at Thakker & Associates begins with a thorough understanding of our client's unique situation
                and objectives. We believe that successful legal outcomes are built on three core principles:
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Comprehensive Analysis</h3>
                    <p className="text-muted-foreground">
                      We conduct in-depth investigation and legal analysis to understand all aspects of your case,
                      identifying both challenges and opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Strategic Planning</h3>
                    <p className="text-muted-foreground">
                      We develop customized legal strategies aligned with your specific goals, considering both
                      short-term objectives and long-term implications.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Dedicated Execution</h3>
                    <p className="text-muted-foreground">
                      We implement our strategies with meticulous attention to detail, persistent advocacy, and a
                      commitment to achieving the best possible outcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <SafeImage src="/legal-consultation.png" alt="Our Approach" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Client Testimonials</h2>
            <div className="divider-gold"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Here's what our clients have to say about their experience working with Thakker & Associates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border border-border shadow-lg p-6">
              <CardContent className="p-0">
                <div className="flex gap-2 text-gold mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "When our family faced a complex property dispute that had lasted for generations, Thakker &
                  Associates provided clarity and direction. Their thorough approach to documenting our ancestral claims
                  and negotiating with multiple parties led to a resolution we never thought possible."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <span className="font-bold text-xl">RS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Rajesh Shah</h4>
                    <p className="text-sm text-muted-foreground">Bhavnagar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-lg p-6">
              <CardContent className="p-0">
                <div className="flex gap-2 text-gold mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "As a business owner facing acquisition, I needed legal counsel that understood both the technical
                  aspects and the emotional component of selling a family business. Thakker & Associates exceeded my
                  expectations, securing terms that honored our legacy while maximizing value."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <span className="font-bold text-xl">PP</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Priya Patel</h4>
                    <p className="text-sm text-muted-foreground">Ahmedabad</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-lg p-6">
              <CardContent className="p-0">
                <div className="flex gap-2 text-gold mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "After my accident, I felt overwhelmed by medical bills and insurance paperwork. The personal injury
                  team at Thakker & Associates took over completely, allowing me to focus on recovery. They secured a
                  settlement that covered all my expenses and provided for my future care."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <span className="font-bold text-xl">VJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Vikram Joshi</h4>
                    <p className="text-sm text-muted-foreground">Mahuva</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Ready to Discuss Your Case?</h2>
            <div className="divider-gold"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Thakker & Associates today to schedule a consultation with one of our experienced attorneys. Let
              us help you achieve a successful outcome for your legal matter.
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
