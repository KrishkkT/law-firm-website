import PracticeAreaLayout from './PracticeAreaLayout';

export default function FamilyLawPage() {
  return (
    <PracticeAreaLayout
      title="Family Law"
      subtitle="COMPASSIONATE GUIDANCE"
      heroImage="/family-law-in-session.png"
      description="Our family law attorneys provide compassionate guidance through divorce, child custody, and other family-related legal matters."
      contentImage="/images/family-law-consultation.png"
      detailedContent={{
        title: "Compassionate Family Law Services",
        paragraphs: [
          "Family legal matters are among the most emotionally challenging experiences anyone can face. At Thakker & Associates, our family law team combines legal expertise with genuine empathy to guide you through these difficult times.",
          "Whether you're going through a divorce, navigating child custody issues, or dealing with domestic violence, our attorneys provide personalized attention and strategic counsel. We prioritize the well-being of all family members, especially children.",
          "We believe in exploring all options, including mediation and collaborative law, to reach amicable resolutions whenever possible. When litigation becomes necessary, we are prepared to advocate fiercely for your rights in court."
        ]
      }}
      services={[
        {
          title: "Divorce & Separation",
          description: "Comprehensive divorce representation including mutual and contested divorce proceedings.",
          items: ["Contested Divorce", "Mutual Consent Divorce", "Separation Agreements", "Asset Division"]
        },
        {
          title: "Child Custody & Guardianship",
          description: "Protecting the best interests of children in custody and guardianship matters.",
          items: ["Custody Arrangements", "Visitation Rights", "Child Guardianship", "Modification of Orders"]
        },
        {
          title: "Alimony & Maintenance",
          description: "Ensuring fair financial support arrangements for spouses and dependents.",
          items: ["Spousal Support", "Interim Maintenance", "Child Support", "Modification of Support"]
        },
        {
          title: "Domestic Violence",
          description: "Protection orders and legal remedies for victims of domestic violence.",
          items: ["Protection Orders", "Emergency Relief", "Criminal Prosecution", "Safety Planning"]
        },
        {
          title: "Adoption",
          description: "Legal guidance through the adoption process ensuring compliance with all requirements.",
          items: ["Domestic Adoption", "Legal Compliance", "Court Proceedings", "Documentation"]
        },
        {
          title: "Mediation & Collaborative Law",
          description: "Alternative dispute resolution to reach amicable family settlements.",
          items: ["Family Mediation", "Collaborative Negotiations", "Settlement Agreements", "Court-referred Mediation"]
        }
      ]}
      whyChooseUs={[
        { title: "Empathetic Approach", description: "We understand the emotional toll of family disputes and handle every case with sensitivity and care." },
        { title: "Child-Focused Solutions", description: "We always prioritize the well-being and best interests of children in every family matter." },
        { title: "Alternative Dispute Resolution", description: "We explore mediation and collaborative approaches to minimize conflict and expense." },
        { title: "Strong Court Advocacy", description: "When litigation is necessary, our experienced advocates fight fiercely for your rights." }
      ]}
      ctaText="Need Family Law Assistance?"
    />
  );
}
