"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import SafeImage from "@/components/safe-image"
import Breadcrumbs from "@/components/breadcrumbs"
import { Calendar, Clock, User, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react"

export default function BlogPostPage() {
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
              src="/images/real-estate-property-inspection.png"
              alt="Property Rights in Gujarat"
              fill
              className="object-cover"
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
              Understanding Property Rights in Gujarat: A Comprehensive Guide
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>By Jaymin Thakker</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>May 8, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  Property disputes are among the most common legal issues in Gujarat. With rapid urbanization,
                  increasing property values, and complex inheritance patterns, understanding property rights has never
                  been more important. This comprehensive guide breaks down property rights, land revenue laws, and how
                  to protect your real estate investments in Gujarat.
                </p>

                <h2>The Foundation of Property Rights in Gujarat</h2>
                <p>
                  Property rights in Gujarat are governed by a combination of central and state laws. The primary
                  legislation includes:
                </p>
                <ul>
                  <li>
                    <strong>The Transfer of Property Act, 1882</strong> - Governs the transfer of property between
                    living persons
                  </li>
                  <li>
                    <strong>The Registration Act, 1908</strong> - Mandates the registration of property transactions
                  </li>
                  <li>
                    <strong>The Gujarat Land Revenue Code, 1879</strong> - Regulates land ownership and revenue
                    collection
                  </li>
                  <li>
                    <strong>The Gujarat Tenancy and Agricultural Lands Act, 1948</strong> - Protects agricultural
                    tenants and regulates the transfer of agricultural land
                  </li>
                </ul>
                <p>
                  Understanding these laws is crucial for anyone involved in property transactions in Gujarat. Each law
                  serves a specific purpose in the comprehensive framework that protects and regulates property rights.
                </p>

                <h2>Types of Property Ownership in Gujarat</h2>
                <p>In Gujarat, property ownership can take several forms, each with its own legal implications:</p>
                <h3>Freehold Property</h3>
                <p>
                  Freehold property represents absolute ownership. The owner has complete rights to use, sell, lease, or
                  transfer the property as they wish, subject only to government regulations and planning laws. This is
                  the most comprehensive form of ownership and offers the greatest security.
                </p>
                <h3>Leasehold Property</h3>
                <p>
                  In leasehold arrangements, the property is leased for a specific period, which can range from a few
                  years to 99 years or more. The leaseholder has the right to use the property for the duration of the
                  lease but must adhere to the terms and conditions set by the lessor (usually the government or a
                  private entity).
                </p>
                <h3>Cooperative Society Membership</h3>
                <p>
                  Common in urban areas, cooperative housing societies allow members to own a share in the society
                  rather than direct ownership of a specific property. The society owns the land and building, while
                  members have the right to occupy specific units. This form of ownership is governed by the Gujarat
                  Co-operative Societies Act.
                </p>

                <h2>The Land Revenue System in Gujarat</h2>
                <p>
                  The land revenue system in Gujarat has evolved from historical systems established during British
                  colonial rule. Today, it serves as both a taxation mechanism and a means of maintaining land records.
                  Key aspects include:
                </p>
                <h3>Record of Rights (RoR)</h3>
                <p>
                  Known locally as "7/12 Extract" or "Satbara Utara," this document is fundamental for rural properties.
                  It contains details about the land, including:
                </p>
                <ul>
                  <li>Survey number and area</li>
                  <li>Owner's name and type of ownership</li>
                  <li>Classification of land (agricultural, non-agricultural)</li>
                  <li>Encumbrances, if any</li>
                  <li>Crops grown and irrigation facilities</li>
                </ul>
                <p>
                  This document is maintained by the village accountant (Talati) and is essential for property
                  transactions in rural areas.
                </p>
                <h3>City Survey Records</h3>
                <p>
                  For urban properties, city survey records serve a similar purpose. These records are maintained by
                  municipal authorities and provide details about property ownership in cities and towns.
                </p>
                <h3>E-Dhara and Digitization</h3>
                <p>
                  Gujarat has made significant progress in digitizing land records through the E-Dhara initiative. This
                  system allows property owners to access their records online, reducing bureaucratic delays and
                  increasing transparency. The digitization also helps in preventing fraud and unauthorized alterations
                  to land records.
                </p>

                <h2>Common Property Disputes in Gujarat</h2>
                <p>
                  Despite comprehensive laws, property disputes are common in Gujarat. Understanding these can help
                  property owners take preventive measures:
                </p>
                <h3>Boundary Disputes</h3>
                <p>
                  These arise when neighboring property owners disagree about the exact location of the boundary between
                  their properties. These disputes are particularly common in rural areas where formal surveying may be
                  incomplete or outdated.
                </p>
                <h3>Title Disputes</h3>
                <p>
                  Disputes over who legally owns a property are often related to inheritance issues, improper
                  documentation, or fraudulent transactions. These disputes can be complex and may require extensive
                  documentation and legal proceedings to resolve.
                </p>
                <h3>Tenancy Disputes</h3>
                <p>
                  Conflicts between landlords and tenants over rent, maintenance, eviction, or other lease terms are
                  governed by the Gujarat Rent Control Act and related legislation.
                </p>
                <h3>Ancestral Property Disputes</h3>
                <p>
                  Disagreements among family members regarding the distribution of inherited property are particularly
                  complex because they involve both legal issues and emotional family dynamics.
                </p>

                <h2>Legal Protection for Property Rights</h2>
                <p>To protect your property rights in Gujarat, consider the following measures:</p>
                <h3>Thorough Due Diligence</h3>
                <p>Before purchasing property, conduct comprehensive due diligence, including:</p>
                <ul>
                  <li>Verification of the seller's title through original documents</li>
                  <li>Examination of the chain of titles going back at least 30 years</li>
                  <li>Checking for encumbrances, mortgages, or liens</li>
                  <li>Verifying that all property taxes have been paid</li>
                  <li>Confirming compliance with zoning and land use regulations</li>
                </ul>
                <h3>Proper Documentation</h3>
                <p>
                  Ensure all property transactions are properly documented and registered. In Gujarat, registration of
                  property transfers is mandatory under the Registration Act, 1908. The documents should be registered
                  at the Sub-Registrar's office having jurisdiction over the area where the property is located.
                </p>
                <h3>Legal Counsel</h3>
                <p>
                  Engage qualified legal counsel experienced in Gujarat property law for all significant property
                  transactions. Professional legal advice can help identify potential issues before they become serious
                  problems.
                </p>
                <h3>Regular Monitoring</h3>
                <p>
                  Periodically check your property records to ensure there have been no unauthorized changes. With the
                  digitization of records through E-Dhara, this has become more convenient.
                </p>

                <h2>Recent Developments in Gujarat Property Law</h2>
                <p>Gujarat's property laws continue to evolve to address contemporary challenges:</p>
                <h3>Real Estate Regulatory Authority (RERA)</h3>
                <p>
                  The implementation of RERA in Gujarat has significantly enhanced protection for property buyers,
                  particularly in the real estate sector. Developers are now required to register their projects,
                  maintain separate accounts for each project, and adhere to specified timelines and specifications.
                </p>
                <h3>Land Pooling Policies</h3>
                <p>
                  Gujarat has pioneered innovative land pooling policies, particularly in areas like the Dholera Special
                  Investment Region. These policies allow smaller landowners to pool their land for development and
                  receive developed plots in return, providing a more equitable approach to urban development.
                </p>
                <h3>Amendments to the Land Revenue Code</h3>
                <p>
                  Recent amendments to the Gujarat Land Revenue Code have streamlined processes for converting
                  agricultural land to non-agricultural purposes, addressing the needs of Gujarat's rapidly urbanizing
                  population.
                </p>

                <h2>Case Study: Resolving a Complex Property Dispute in Bhavnagar</h2>
                <p>
                  To illustrate how property disputes are resolved in practice, consider this recent case from
                  Bhavnagar:
                </p>
                <p>
                  The Patel family had owned a large parcel of agricultural land for generations. When the family
                  patriarch passed away without a clear will, his three children claimed different portions of the
                  property based on various verbal agreements and traditional practices. Additionally, a portion of the
                  land was being used by a tenant farmer who claimed rights under the Gujarat Tenancy Act.
                </p>
                <p>The resolution process involved:</p>
                <ol>
                  <li>Verification of the original land records from the village Talati</li>
                  <li>Analysis of applicable inheritance laws</li>
                  <li>Assessment of the tenant's rights under the Tenancy Act</li>
                  <li>Mediation between family members</li>
                  <li>Formal division of the property through a registered family settlement deed</li>
                </ol>
                <p>
                  This case demonstrates the complexity of property disputes and the importance of proper documentation,
                  knowledge of applicable laws, and professional legal assistance.
                </p>

                <h2>Conclusion: Securing Your Property Rights</h2>
                <p>
                  Understanding property rights in Gujarat requires knowledge of multiple laws, awareness of local
                  practices, and attention to documentation details. As urbanization continues and property values
                  increase, the importance of securing clear property rights will only grow.
                </p>
                <p>
                  By conducting thorough due diligence, maintaining proper documentation, staying informed about legal
                  developments, and seeking professional legal counsel when needed, property owners in Gujarat can
                  protect their investments and avoid costly disputes.
                </p>
                <p>
                  At Thakker & Associates, we specialize in helping clients navigate the complexities of property law in
                  Gujarat. Whether you're purchasing property, resolving a dispute, or planning your estate, our
                  experienced attorneys provide the guidance you need to protect your property rights.
                </p>

                <div className="not-prose bg-secondary p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold mb-4">Need Help with Property Matters?</h3>
                  <p className="mb-4">
                    Contact our real estate law experts for personalized guidance on property rights and dispute
                    resolution.
                  </p>
                  <Button className="bg-gold hover:bg-gold/90 text-white" asChild>
                    <Link href="/consultation">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-secondary rounded-lg flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <SafeImage
                    src="/jaymin-thakker-portrait.jpeg"
                    alt="Jaymin Thakker"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">About the Author</h3>
                  <p className="text-muted-foreground mb-2">
                    Jaymin Thakker is the founding partner of Thakker & Associates with over 20 years of experience in
                    property law. He has successfully represented clients in numerous property disputes and transactions
                    throughout Gujarat.
                  </p>
                  <Link href="/team/jaymin-thakker" className="text-gold hover:underline inline-flex items-center">
                    View full profile <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Share */}
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-2 bg-[#1877F2] text-white rounded-full hover:bg-[#1877F2]/90 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1DA1F2]/90 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[#0A66C2] text-white rounded-full hover:bg-[#0A66C2]/90 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Articles */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <SafeImage
                        src="/images/land-revenue-overview.png"
                        alt="Land Revenue"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link
                          href="/blog/legal-implications-land-revenue-code"
                          className="hover:text-gold transition-colors"
                        >
                          Legal Implications of the Gujarat Land Revenue Code
                        </Link>
                      </h4>
                      <span className="text-sm text-muted-foreground">January 30, 2023</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <SafeImage
                        src="/images/real-estate-development-planning.png"
                        alt="Real Estate Development"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link href="#" className="hover:text-gold transition-colors">
                          Development Regulations in Urban Gujarat: What Property Owners Should Know
                        </Link>
                      </h4>
                      <span className="text-sm text-muted-foreground">March 12, 2023</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <SafeImage
                        src="/images/property-dispute.png"
                        alt="Property Dispute"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link href="#" className="hover:text-gold transition-colors">
                          How to Handle Encroachment Issues in Residential Properties
                        </Link>
                      </h4>
                      <span className="text-sm text-muted-foreground">April 5, 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      Real Estate Law (14)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      Family Law (9)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      Business Law (11)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      Personal Injury (7)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      Criminal Defense (8)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      Estate Planning (6)
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Consultation CTA */}
              <div className="bg-secondary rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Need Legal Assistance?</h3>
                <p className="text-muted-foreground mb-4">
                  Our experienced attorneys are ready to help you with any property-related legal matters.
                </p>
                <Button className="bg-gold hover:bg-gold/90 text-white w-full" asChild>
                  <Link href="/consultation">Request Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-cormorant font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <SafeImage
                  src="/images/business-law-meeting.png"
                  alt="Business Formation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gold mb-2 inline-block">Business Law</span>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link href="/blog/business-formation-guide-2023" className="hover:text-gold transition-colors">
                    Business Formation in Gujarat: Complete Legal Guide for 2023
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Planning to start a business in Gujarat? Our comprehensive guide covers all legal aspects of business
                  formation.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">April 18, 2023</span>
                  <Link href="/blog/business-formation-guide-2023" className="text-gold hover:underline text-sm">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <SafeImage
                  src="/images/family-law-courtroom.png"
                  alt="Divorce Proceedings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gold mb-2 inline-block">Family Law</span>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link href="/blog/divorce-proceedings-legal-guide" className="hover:text-gold transition-colors">
                    Navigating Divorce Proceedings: A Legal Guide for Families
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Divorce can be emotionally and legally challenging. This article provides a step-by-step guide to
                  divorce proceedings in India.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">March 25, 2023</span>
                  <Link href="/blog/divorce-proceedings-legal-guide" className="text-gold hover:underline text-sm">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <SafeImage
                  src="/images/personal-injury-consultation.png"
                  alt="Personal Injury Compensation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gold mb-2 inline-block">Personal Injury</span>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link
                    href="/blog/personal-injury-compensation-calculation"
                    className="hover:text-gold transition-colors"
                  >
                    How Personal Injury Compensation Is Calculated in India
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Understanding how compensation is determined in personal injury cases can help you seek fair recovery.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">February 12, 2023</span>
                  <Link
                    href="/blog/personal-injury-compensation-calculation"
                    className="text-gold hover:underline text-sm"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
