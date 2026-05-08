import { useScrollReveal } from '../hooks/useScrollReveal';
import { PRIVACY_POLICY } from '../utils/constants';

export default function PrivacyPolicy() {
  const ref = useScrollReveal();

  return (
    <section id="privacy" ref={ref} className="relative py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className=" text-4xl md:text-5xl text-primary font-light mb-4">
            {PRIVACY_POLICY.title}
          </h1>
          <p className="text-secondary text-sm">
            Last updated: {PRIVACY_POLICY.lastUpdated}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {PRIVACY_POLICY.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h2 className=" text-2xl text-primary font-medium">
                {section.title}
              </h2>
              <p className="text-secondary leading-relaxed text-base">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 pt-12 border-t border-light-gold/15 dark:border-dark-gold/15">
          <p className="text-xs text-secondary leading-relaxed">
            This Privacy Policy describes how Thakker & Associates collects, uses, and protects your personal information. We are committed to maintaining your privacy and ensuring you have a positive experience on our website and when working with us. If you have any questions about this policy, please contact us at info@jtaw.in.
          </p>
        </div>
      </div>
    </section>
  );
}
