export default function DisclaimerPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className=" text-5xl md:text-6xl text-primary mb-4">Disclaimer</h1>
          <p className="text-secondary text-sm">Last updated: 2025</p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">No Legal Advice</h2>
            <p className="text-secondary leading-relaxed">
              The information provided on this website is for general informational purposes only and should not be construed as legal advice. The content of this site is not intended to create, and receipt of it does not constitute, an attorney-client relationship.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">No Attorney-Client Relationship</h2>
            <p className="text-secondary leading-relaxed">
              Contacting Thakker & Associates through this website, by email, or through any other communication does not create an attorney-client relationship. Please do not send any confidential information until an attorney-client relationship has been formally established.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Results Not Guaranteed</h2>
            <p className="text-secondary leading-relaxed">
              Past results do not guarantee future outcomes. Each legal matter is unique and must be evaluated on its own merits. The outcome of any case depends on a variety of factors, including the specific facts and circumstances involved.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Bar Council Compliance</h2>
            <p className="text-secondary leading-relaxed">
              This website has been designed in compliance with the Bar Council of India Rules. The information on this website is made available at the request of the visitor and any information accessed or material downloaded from this website is at the user's own risk.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Jurisdiction</h2>
            <p className="text-secondary leading-relaxed">
              Thakker & Associates practices law in India, primarily in the state of Gujarat. The firm does not claim to practice law in any jurisdiction where it is not properly licensed or authorized.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Accuracy of Information</h2>
            <p className="text-secondary leading-relaxed">
              While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained herein.
            </p>
          </div>
          <div className="pt-12 border-t border-light-gold/15 dark:border-dark-gold/15">
            <p className="text-xs text-secondary leading-relaxed">
              © {new Date().getFullYear()} Thakker & Associates. All rights reserved. For legal advice, please consult with our attorneys directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
