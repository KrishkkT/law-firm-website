import PracticeAreaLayout from './PracticeAreaLayout';

export default function EstatePlanningPage() {
  return (
    <PracticeAreaLayout
      title="Estate Planning"
      subtitle="PROTECTING YOUR LEGACY"
      heroImage="/family-estate-planning.png"
      description="Our estate planning attorneys help you protect your assets and provide for your loved ones through wills, trusts, and comprehensive estate plans."
      contentImage="/images/estate-planning-consultation.png"
      detailedContent={{
        title: "Secure Your Family's Future",
        paragraphs: [
          "Estate planning is about more than just drafting a will – it's about protecting your family, preserving your wealth, and ensuring your wishes are carried out exactly as you intend.",
          "At Thakker & Associates, our estate planning attorneys work closely with you to understand your unique family dynamics, financial situation, and goals. We create comprehensive estate plans that provide security and peace of mind.",
          "From simple wills to complex trust structures, we tailor our approach to meet your specific needs, ensuring that your legacy is protected for generations to come."
        ]
      }}
      services={[
        {
          title: "Will Preparation",
          description: "Drafting comprehensive wills that clearly express your wishes for asset distribution.",
          items: ["Simple Wills", "Complex Wills", "Codicils", "Probate Guidance"]
        },
        {
          title: "Trust Management",
          description: "Creating and managing various types of trusts to protect and distribute your assets.",
          items: ["Revocable Trusts", "Irrevocable Trusts", "Charitable Trusts", "Special Needs Trusts"]
        },
        {
          title: "Succession Planning",
          description: "Strategic planning for the smooth transfer of business and personal assets.",
          items: ["Business Succession", "Family Succession", "Asset Transfer Strategies", "Tax-efficient Planning"]
        },
        {
          title: "Power of Attorney",
          description: "Designating trusted individuals to make decisions on your behalf if needed.",
          items: ["Financial POA", "Medical POA", "Durable POA", "Limited POA"]
        },
        {
          title: "Inheritance Disputes",
          description: "Resolving conflicts arising from inheritance and succession matters.",
          items: ["Will Contests", "Property Division", "Mediation", "Court Litigation"]
        },
        {
          title: "Asset Protection",
          description: "Strategies to shield your wealth from potential creditors and legal claims.",
          items: ["Asset Structuring", "Trust Protection", "Insurance Planning", "Risk Mitigation"]
        }
      ]}
      whyChooseUs={[
        { title: "Personalized Planning", description: "We take the time to understand your unique situation and create customized estate plans." },
        { title: "Tax Efficiency", description: "We structure your estate to minimize tax burden and maximize what's passed to your beneficiaries." },
        { title: "Regular Reviews", description: "We provide ongoing estate plan reviews to keep your documents current with changing laws." },
        { title: "Family Harmony", description: "We design plans that minimize potential conflicts and disputes among beneficiaries." }
      ]}
      ctaText="Plan Your Estate Today"
    />
  );
}
