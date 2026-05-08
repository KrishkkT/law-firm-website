import PracticeAreaLayout from './PracticeAreaLayout';

export default function RevenueLawPage() {
  return (
    <PracticeAreaLayout
      title="Revenue Law"
      subtitle="TAX & REVENUE EXPERTISE"
      heroImage="/focused-legal-work.png"
      description="Expert guidance on tax matters, GST, and revenue-related disputes with strategic legal counsel."
      contentImage="/focused-legal-work.png"
      detailedContent={{
        title: "Expert Revenue & Tax Law Services",
        paragraphs: [
          "Revenue and tax law is a complex and constantly evolving area that requires specialized expertise. At Thakker & Associates, our revenue law team provides strategic guidance on tax planning, compliance, and dispute resolution.",
          "We represent individuals and businesses in matters relating to income tax, GST, property tax, land revenue, and other revenue-related issues. Our attorneys stay current with changing tax laws and regulations to provide the most effective counsel.",
          "Whether you need help with tax planning, are facing a tax audit, or need representation in a revenue tribunal, our team has the knowledge and experience to protect your interests and minimize your tax exposure."
        ]
      }}
      services={[
        {
          title: "Tax Planning",
          description: "Strategic tax planning to minimize liability while ensuring full compliance.",
          items: ["Income Tax Planning", "Business Tax Strategy", "Investment Planning", "Tax-efficient Structuring"]
        },
        {
          title: "GST Compliance",
          description: "Comprehensive GST advisory services and compliance management.",
          items: ["GST Registration", "Return Filing", "Input Tax Credit", "GST Audits"]
        },
        {
          title: "Revenue Disputes",
          description: "Representation in revenue tribunals and courts for tax disputes.",
          items: ["Assessment Appeals", "Tribunal Representation", "High Court Appeals", "Recovery Disputes"]
        },
        {
          title: "Land Revenue",
          description: "Legal services related to land revenue, mutation, and record corrections.",
          items: ["Revenue Records", "Mutation Proceedings", "Land Classification", "Revenue Appeals"]
        },
        {
          title: "Tax Audit Support",
          description: "Comprehensive support during tax audits and investigations.",
          items: ["Audit Representation", "Documentation Support", "Response Drafting", "Settlement Negotiations"]
        },
        {
          title: "Property Tax",
          description: "Advisory and dispute resolution for property tax matters.",
          items: ["Assessment Disputes", "Exemption Applications", "Penalty Challenges", "Valuation Disputes"]
        }
      ]}
      whyChooseUs={[
        { title: "Specialized Knowledge", description: "Deep expertise in Indian tax law including recent amendments and interpretations." },
        { title: "Tribunal Experience", description: "Extensive experience representing clients before ITAT, GST tribunals, and revenue authorities." },
        { title: "Proactive Planning", description: "We help you plan ahead to minimize tax exposure and avoid disputes before they arise." },
        { title: "Comprehensive Support", description: "From planning to litigation, we provide end-to-end support for all revenue law matters." }
      ]}
      ctaText="Need Revenue Law Assistance?"
    />
  );
}
