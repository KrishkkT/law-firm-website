import PracticeAreaLayout from './PracticeAreaLayout';

export default function ConsumerLawPage() {
  return (
    <PracticeAreaLayout
      title="Consumer Law"
      subtitle="PROTECTING YOUR RIGHTS"
      heroImage="/consumer-law-hero.jpg"
      description="Protection of consumer rights and claims against unfair business practices with proven results."
      contentImage="/consumer-protection-scales.png"
      detailedContent={{
        title: "Fighting for Consumer Rights",
        paragraphs: [
          "Consumer protection laws exist to ensure fair practices and protect individuals from exploitation by businesses and service providers. At Thakker & Associates, we are passionate advocates for consumer rights.",
          "Our consumer law attorneys handle cases ranging from defective product claims and unfair trade practices to insurance disputes and service deficiencies. We represent consumers before District, State, and National Consumer Forums.",
          "We believe every consumer deserves fair treatment, and we work diligently to ensure that businesses are held accountable for their products, services, and practices."
        ]
      }}
      services={[
        {
          title: "Product Liability",
          description: "Claims against manufacturers and sellers for defective or dangerous products.",
          items: ["Defective Products", "Manufacturing Defects", "Design Defects", "Warning Failures"]
        },
        {
          title: "Consumer Complaints",
          description: "Filing and pursuing consumer complaints at all levels of consumer forums.",
          items: ["District Forum", "State Commission", "National Commission", "Online Complaints"]
        },
        {
          title: "Warranty Claims",
          description: "Enforcing warranty obligations and seeking remedies for warranty breaches.",
          items: ["Product Warranties", "Service Warranties", "Extended Warranties", "Implied Warranties"]
        },
        {
          title: "Unfair Trade Practices",
          description: "Action against deceptive or unfair business practices that harm consumers.",
          items: ["False Advertising", "Deceptive Pricing", "Hidden Charges", "Misleading Claims"]
        },
        {
          title: "Insurance Disputes",
          description: "Fighting unfair claim denials and delays by insurance companies.",
          items: ["Claim Denial", "Delayed Settlements", "Policy Disputes", "Bad Faith Claims"]
        },
        {
          title: "Service Deficiency",
          description: "Claims against service providers for substandard or negligent services.",
          items: ["Banking Services", "Telecom Services", "Healthcare Services", "Travel Services"]
        }
      ]}
      whyChooseUs={[
        { title: "Forum Expertise", description: "Extensive experience representing consumers at District, State, and National Consumer Forums." },
        { title: "Results-Driven", description: "We have secured significant compensation and relief for numerous consumer clients." },
        { title: "Affordable Representation", description: "We offer cost-effective legal solutions to ensure consumer justice is accessible to all." },
        { title: "Quick Resolution", description: "Consumer forums offer faster resolution, and we leverage this to get you results efficiently." }
      ]}
      ctaText="Consumer Rights Violated? Let Us Help"
    />
  );
}
