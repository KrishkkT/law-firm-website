import PracticeAreaLayout from './PracticeAreaLayout';

export default function RealEstateLawPage() {
  return (
    <PracticeAreaLayout
      title="Real Estate Law"
      subtitle="PROPERTY SOLUTIONS"
      heroImage="/collaborative-real-estate-strategy.png"
      description="Our real estate attorneys guide clients through property transactions, disputes, and development projects with expert legal counsel."
      contentImage="/images/real-estate-property-inspection.png"
      detailedContent={{
        title: "Expert Real Estate Legal Services",
        paragraphs: [
          "Real estate transactions involve significant financial commitments and complex legal requirements. At Thakker & Associates, our real estate law team provides comprehensive legal guidance to protect your property interests.",
          "Whether you're buying, selling, leasing, or developing property, our attorneys ensure that every transaction is legally sound, properly documented, and aligned with your objectives.",
          "We also handle property disputes, title issues, and regulatory compliance, providing end-to-end legal support for all your real estate needs in Gujarat and beyond."
        ]
      }}
      services={[
        {
          title: "Property Transactions",
          description: "Legal guidance for buying, selling, and transferring property ownership.",
          items: ["Sale Agreements", "Title Verification", "Due Diligence", "Registration"]
        },
        {
          title: "Property Disputes",
          description: "Resolution of conflicts related to property ownership, boundaries, and rights.",
          items: ["Ownership Disputes", "Boundary Disputes", "Encroachment Issues", "Partition Suits"]
        },
        {
          title: "Development Projects",
          description: "Legal support for real estate development from planning to completion.",
          items: ["Land Acquisition", "Regulatory Approvals", "Development Agreements", "RERA Compliance"]
        },
        {
          title: "Lease & Tenancy",
          description: "Drafting and managing lease agreements and resolving tenancy disputes.",
          items: ["Commercial Leases", "Residential Leases", "Eviction Proceedings", "Rent Disputes"]
        },
        {
          title: "Title & Documentation",
          description: "Ensuring clear title and proper documentation for all property matters.",
          items: ["Title Search", "Document Verification", "Mutation & Transfer", "NOC Processing"]
        },
        {
          title: "Construction Law",
          description: "Legal services for builders, contractors, and property developers.",
          items: ["Construction Contracts", "Builder-Buyer Disputes", "Defect Claims", "Lien Issues"]
        }
      ]}
      whyChooseUs={[
        { title: "Local Expertise", description: "Deep knowledge of Gujarat's property laws, registration processes, and land revenue regulations." },
        { title: "Thorough Due Diligence", description: "We conduct comprehensive property checks to identify and address potential issues before they arise." },
        { title: "Transaction Security", description: "Our meticulous documentation ensures your property transactions are legally bulletproof." },
        { title: "Dispute Resolution", description: "We combine negotiation skills with courtroom expertise to resolve property disputes efficiently." }
      ]}
      ctaText="Need Real Estate Legal Help?"
    />
  );
}
