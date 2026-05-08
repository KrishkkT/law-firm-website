import PracticeAreaLayout from './PracticeAreaLayout';

export default function CivilLitigationPage() {
  return (
    <PracticeAreaLayout
      title="Civil Litigation"
      subtitle="STRATEGIC ADVOCACY"
      heroImage="/images/civil-law-negotiation.png"
      description="Aggressive representation in civil disputes across all levels of courts, including breach of contract and commercial conflicts."
      contentImage="/images/civil-law-negotiation.png"
      detailedContent={{
        title: "Strategic Civil Litigation",
        paragraphs: [
          "Civil litigation encompasses a broad spectrum of legal disputes that require skilled advocacy and strategic thinking. At Thakker & Associates, our civil litigation team has extensive experience representing clients across all levels of courts.",
          "From contract disputes and property conflicts to debt recovery and injunctions, we provide comprehensive litigation services that protect your interests and rights. Our attorneys combine thorough preparation with aggressive courtroom advocacy.",
          "We also emphasize alternative dispute resolution methods where appropriate, helping clients resolve disputes efficiently through mediation and arbitration when it serves their best interests."
        ]
      }}
      services={[
        {
          title: "Contract Disputes",
          description: "Resolution of conflicts arising from breach of contract and contractual obligations.",
          items: ["Breach of Contract", "Contract Enforcement", "Specific Performance", "Damages Claims"]
        },
        {
          title: "Property Disputes",
          description: "Litigation involving real and personal property rights and ownership.",
          items: ["Title Disputes", "Possession Suits", "Injunction Applications", "Partition Actions"]
        },
        {
          title: "Debt Recovery",
          description: "Efficient recovery of outstanding debts through legal proceedings.",
          items: ["Recovery Suits", "Summary Proceedings", "Execution Applications", "Attachment Orders"]
        },
        {
          title: "Injunctions & Interim Relief",
          description: "Obtaining emergency and interim court orders to protect your rights.",
          items: ["Temporary Injunctions", "Permanent Injunctions", "Stay Orders", "Urgent Hearings"]
        },
        {
          title: "Appeals & Revisions",
          description: "Challenging adverse orders in appellate courts.",
          items: ["First Appeals", "Second Appeals", "Revision Petitions", "Review Applications"]
        },
        {
          title: "Alternative Dispute Resolution",
          description: "Resolving disputes outside the courtroom through mediation and arbitration.",
          items: ["Mediation", "Arbitration", "Conciliation", "Lok Adalat"]
        }
      ]}
      whyChooseUs={[
        { title: "Multi-court Experience", description: "We represent clients across district courts, high courts, and tribunals with equal expertise." },
        { title: "Strategic Litigation", description: "Every case is approached with a clear strategy designed to achieve the best possible outcome." },
        { title: "Efficient Resolution", description: "We pursue the most efficient path to resolution, whether through negotiation, ADR, or trial." },
        { title: "Thorough Preparation", description: "Meticulous case preparation and research form the foundation of our litigation practice." }
      ]}
      ctaText="Need Civil Litigation Support?"
    />
  );
}
