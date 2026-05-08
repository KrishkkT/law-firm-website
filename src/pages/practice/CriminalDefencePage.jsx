import PracticeAreaLayout from './PracticeAreaLayout';

export default function CriminalDefencePage() {
  return (
    <PracticeAreaLayout
      title="Criminal Defence"
      subtitle="DEFENDING YOUR RIGHTS"
      heroImage="/criminal-defense-hero.jpg"
      description="Our criminal defense attorneys provide aggressive representation to protect your rights and freedom when facing criminal charges."
      contentImage="/images/criminal-defense-attorney.png"
      detailedContent={{
        title: "Aggressive Criminal Defense",
        paragraphs: [
          "When you're facing criminal charges, your freedom, reputation, and future are at stake. At Thakker & Associates, our criminal defense team provides aggressive and strategic representation to protect your constitutional rights.",
          "We handle the full spectrum of criminal cases, from white-collar offenses to serious criminal charges. Our attorneys conduct meticulous investigations, challenge the prosecution's evidence, and build compelling defense strategies.",
          "We believe in the presumption of innocence and fight tirelessly to ensure our clients receive fair treatment throughout the criminal justice process. Our track record speaks to our commitment and expertise."
        ]
      }}
      services={[
        {
          title: "White Collar Crime",
          description: "Defense against financial crimes, fraud, and corporate criminal matters.",
          items: ["Fraud Defense", "Embezzlement", "Tax Evasion", "Corporate Criminal Liability"]
        },
        {
          title: "Criminal Defense",
          description: "Comprehensive defense for serious criminal charges and offenses.",
          items: ["Assault & Battery", "Theft Charges", "Drug Offenses", "Violent Crimes"]
        },
        {
          title: "DUI / Traffic Offenses",
          description: "Defense against driving under influence and serious traffic violations.",
          items: ["DUI Defense", "License Suspension", "Reckless Driving", "Hit and Run"]
        },
        {
          title: "Bail & Anticipatory Bail",
          description: "Securing bail and anticipatory bail for accused persons.",
          items: ["Regular Bail", "Anticipatory Bail", "Interim Bail", "Bail Modification"]
        },
        {
          title: "Appeals & Revisions",
          description: "Challenging convictions and sentences through appellate courts.",
          items: ["Criminal Appeals", "Revision Petitions", "High Court Appeals", "Supreme Court Petitions"]
        },
        {
          title: "Cyber Crime",
          description: "Defense against digital and technology-related criminal charges.",
          items: ["Online Fraud", "Data Theft", "Identity Theft", "Cyber Harassment"]
        }
      ]}
      whyChooseUs={[
        { title: "24/7 Availability", description: "Criminal situations don't wait – we're available around the clock for emergency legal support." },
        { title: "Strategic Defense", description: "We meticulously analyze evidence and develop customized defense strategies for each case." },
        { title: "Courtroom Experience", description: "Our attorneys have extensive trial experience and a strong track record in criminal courts." },
        { title: "Confidential & Discreet", description: "We handle every case with the utmost confidentiality and discretion to protect your reputation." }
      ]}
      ctaText="Facing Criminal Charges? Contact Us Now"
    />
  );
}
