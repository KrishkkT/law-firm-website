import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Insights Blog | Thakker & Associates Law Firm",
  description:
    "Expert legal articles, case studies, and updates on Indian law from Thakker & Associates' team of experienced attorneys.",
  keywords: [
    "legal blog",
    "Indian law updates",
    "Gujarat legal insights",
    "family law articles",
    "business law insights",
    "property law guidance",
    "Thakker & Associates blog",
  ],
}

const blogPosts = [
  {
    id: "understanding-property-rights-gujarat",
    title: "Understanding Property Rights in Gujarat: A Comprehensive Guide",
    excerpt:
      "Property disputes are among the most common legal issues in Gujarat. This guide breaks down property rights, land revenue laws, and how to protect your real estate investments.",
    date: "May 8, 2023",
    category: "Real Estate Law",
    image: "/images/real-estate-property-inspection.png",
    author: "Jaymin Thakker",
  },
  {
    id: "business-formation-guide-2023",
    title: "Business Formation in Gujarat: Complete Legal Guide for 2023",
    excerpt:
      "Planning to start a business in Gujarat? Our comprehensive guide covers all legal aspects of business formation, from choosing the right structure to compliance requirements.",
    date: "April 18, 2023",
    category: "Business Law",
    image: "/images/business-law-meeting.png",
    author: "Jaymin Thakker",
  },
  {
    id: "divorce-proceedings-legal-guide",
    title: "Navigating Divorce Proceedings: A Legal Guide for Families",
    excerpt:
      "Divorce can be emotionally and legally challenging. This article provides a step-by-step guide to divorce proceedings in India, explaining rights, responsibilities, and what to expect.",
    date: "March 25, 2023",
    category: "Family Law",
    image: "/images/family-law-courtroom.png",
    author: "Jaymin Thakker",
  },
  {
    id: "personal-injury-compensation-calculation",
    title: "How Personal Injury Compensation Is Calculated in India",
    excerpt:
      "Understanding how compensation is determined in personal injury cases can help you seek fair recovery. Learn about the factors that influence compensation amounts in Indian courts.",
    date: "February 12, 2023",
    category: "Personal Injury",
    image: "/images/personal-injury-consultation.png",
    author: "Jaymin Thakker",
  },
  {
    id: "legal-implications-land-revenue-code",
    title: "Legal Implications of the Gujarat Land Revenue Code",
    excerpt:
      "The Gujarat Land Revenue Code governs land ownership and taxation. This detailed analysis explains how recent amendments affect property owners and developers.",
    date: "January 30, 2023",
    category: "Revenue Law",
    image: "/images/land-revenue-overview.png",
    author: "Jaymin Thakker",
  },
  {
    id: "protecting-consumer-rights-gujarat",
    title: "Protecting Consumer Rights in Gujarat: Legal Remedies and Procedures",
    excerpt:
      "Consumer disputes are increasing with the growth of e-commerce. Learn about your rights as a consumer and the legal remedies available when facing unfair trade practices.",
    date: "January 15, 2023",
    category: "Consumer Law",
    image: "/images/consumer-rights-defense.png",
    author: "Jaymin Thakker",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <SafeImage src="/legal-library-modern.png" alt="Legal Insights Blog" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Legal <span className="text-gold">Insights</span> Blog
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Expert legal articles, case studies, and updates on Indian law from our team of experienced attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <SafeImage src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-gold">{post.category}</span>
                    <span className="text-sm text-muted-foreground">• {post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <Button variant="link" className="text-gold p-0" asChild>
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="mt-16 p-8 bg-secondary rounded-lg shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-cormorant font-bold mb-4">Stay Updated with Legal Insights</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest legal updates, articles, and insights directly in your
                inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
                <Button type="submit" className="bg-gold hover:bg-gold/90 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
