export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className=" text-5xl md:text-6xl text-primary mb-4">Terms of Service</h1>
          <p className="text-secondary text-sm">Last updated: 2025</p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Acceptance of Terms</h2>
            <p className="text-secondary leading-relaxed">
              By accessing and using the Thakker & Associates website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Use of Website</h2>
            <p className="text-secondary leading-relaxed">
              This website is provided for informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by using this website or communicating with us through it.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Intellectual Property</h2>
            <p className="text-secondary leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of Thakker & Associates and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Limitation of Liability</h2>
            <p className="text-secondary leading-relaxed">
              Thakker & Associates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website. We make no warranties, express or implied, regarding the accuracy, completeness, or reliability of any information on this website.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">External Links</h2>
            <p className="text-secondary leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or policies of any third-party websites. You access them at your own risk.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Modifications</h2>
            <p className="text-secondary leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of any modifications.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Governing Law</h2>
            <p className="text-secondary leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Bhavnagar, Gujarat.
            </p>
          </div>
          <div>
            <h2 className=" text-2xl text-primary font-medium mb-3">Contact</h2>
            <p className="text-secondary leading-relaxed">
              For questions about these Terms of Service, please contact us at info@jtaw.in.
            </p>
          </div>
          <div className="pt-12 border-t border-light-gold/15 dark:border-dark-gold/15">
            <p className="text-xs text-secondary leading-relaxed">
              © {new Date().getFullYear()} Thakker & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
