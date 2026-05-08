import PracticeAreaLayout from './PracticeAreaLayout';

export default function PersonalInjuryPage() {
  return (
    <PracticeAreaLayout
      title="Personal Injury"
      subtitle="FIGHTING FOR YOUR RIGHTS"
      heroImage="/car-accident-injury.png"
      description="Our personal injury attorneys fight for the compensation you deserve after an accident or injury caused by someone else's negligence."
      contentImage="/medical-malpractice-claim.png"
      detailedContent={{
        title: "Dedicated Personal Injury Representation",
        paragraphs: [
          "At Thakker & Associates, we understand the physical, emotional, and financial toll that a personal injury can take on you and your family. Our experienced personal injury attorneys are committed to fighting for your rights and securing the maximum compensation you deserve.",
          "We handle a wide range of personal injury cases, from motor vehicle accidents to workplace injuries and medical malpractice. Our team conducts thorough investigations, works with expert witnesses, and builds strong cases to ensure the best possible outcome.",
          "We operate on a results-oriented basis, meaning you don't pay unless we win your case. This ensures that quality legal representation is accessible to everyone who needs it."
        ]
      }}
      services={[
        {
          title: "Motor Vehicle Accidents",
          description: "Comprehensive representation for car, truck, motorcycle, and pedestrian accidents.",
          items: ["Accident Investigation", "Insurance Negotiations", "Court Representation", "Damage Assessment"]
        },
        {
          title: "Workplace Injuries",
          description: "Protection of your rights when injured on the job, including workers' compensation claims.",
          items: ["Workers' Compensation", "Employer Negligence", "Occupational Hazards", "Lost Wages Recovery"]
        },
        {
          title: "Medical Malpractice",
          description: "Holding medical professionals accountable for negligent care that causes harm.",
          items: ["Surgical Errors", "Misdiagnosis", "Medication Errors", "Hospital Negligence"]
        },
        {
          title: "Slip & Fall Accidents",
          description: "Claims against property owners for dangerous conditions that cause injuries.",
          items: ["Premises Liability", "Property Owner Negligence", "Hazardous Conditions", "Injury Documentation"]
        },
        {
          title: "Road Accident Claims",
          description: "Expert handling of motor accident claims before the Motor Accident Claims Tribunal.",
          items: ["MACT Claims", "Third-party Claims", "Hit and Run Cases", "Fatal Accident Claims"]
        },
        {
          title: "Insurance Claims",
          description: "Navigating the insurance claim process to ensure fair compensation.",
          items: ["Claim Filing", "Dispute Resolution", "Policy Interpretation", "Settlement Negotiation"]
        }
      ]}
      whyChooseUs={[
        { title: "No Win, No Fee", description: "We work on a results-oriented basis, ensuring access to quality legal representation for all." },
        { title: "Thorough Investigation", description: "Our team conducts detailed investigations and works with expert witnesses to build the strongest case." },
        { title: "Maximum Compensation", description: "We fight aggressively to secure the highest possible compensation for your injuries and losses." },
        { title: "Compassionate Support", description: "We provide supportive guidance throughout the legal process, understanding the stress you're under." }
      ]}
      ctaText="Injured? Let Us Fight for You"
    />
  );
}
