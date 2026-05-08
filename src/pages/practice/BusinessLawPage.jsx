import PracticeAreaLayout from './PracticeAreaLayout';

export default function BusinessLawPage() {
  return (
    <PracticeAreaLayout
      title="Business Law"
      subtitle="STRATEGIC COUNSEL"
      heroImage="/images/business-law-meeting.png"
      description="Our business attorneys help entrepreneurs and established companies navigate legal challenges and opportunities with strategic guidance."
      contentImage="/images/business-contract-signing.png"
      detailedContent={{
        title: "Comprehensive Business Legal Solutions",
        paragraphs: [
          "At Thakker & Associates, we understand that businesses need proactive, strategic legal counsel to thrive in today's competitive marketplace. Our business law team serves as trusted advisors to companies of all sizes.",
          "From business formation and contract drafting to complex mergers and acquisitions, we provide comprehensive legal services that protect your interests, minimize risk, and facilitate growth.",
          "We invest in understanding your business goals and develop tailored legal strategies that add value to your operations and contribute to your long-term success."
        ]
      }}
      services={[
        {
          title: "Business Formation & Planning",
          description: "Strategic guidance on entity selection, formation, and organizational structure.",
          items: ["Sole Proprietorship", "Partnership", "LLC Formation", "Corporation Setup", "Corporate Governance"]
        },
        {
          title: "Contract Drafting & Review",
          description: "Comprehensive contract preparation and review to protect your interests.",
          items: ["Service Agreements", "Sales Contracts", "Employment Contracts", "NDA Agreements", "Licensing Agreements"]
        },
        {
          title: "Mergers & Acquisitions",
          description: "Expert guidance through complex M&A transactions and strategic growth.",
          items: ["Due Diligence", "Transaction Structuring", "Purchase Agreements", "Integration Support"]
        },
        {
          title: "Intellectual Property",
          description: "Comprehensive IP protection and enforcement strategies for your business.",
          items: ["Trademark Registration", "Copyright Protection", "Patent Filing", "Trade Secrets"]
        },
        {
          title: "Business Litigation",
          description: "Aggressive representation in commercial disputes and business conflicts.",
          items: ["Breach of Contract", "Partnership Disputes", "Shareholder Disputes", "Mediation & Arbitration"]
        },
        {
          title: "Employment Law",
          description: "Comprehensive employment legal services and regulatory compliance.",
          items: ["Employment Agreements", "Workplace Policies", "Hiring Practices", "Labor Law Compliance"]
        }
      ]}
      whyChooseUs={[
        { title: "Business Understanding", description: "We combine deep legal knowledge with practical business insight to provide real-world solutions." },
        { title: "Proactive Counsel", description: "We anticipate potential legal issues and address them before they become costly problems." },
        { title: "Long-term Partnership", description: "We invest in understanding your business to provide relevant, timely advice as your company evolves." },
        { title: "Tailored Strategies", description: "From startups to enterprises, we develop customized legal strategies aligned with your business objectives." }
      ]}
      ctaText="Need Business Legal Counsel?"
    />
  );
}
