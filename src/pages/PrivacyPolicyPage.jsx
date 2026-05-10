import { PRIVACY_POLICY } from '../utils/constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PrivacyPolicyPage() {
  const ref = useScrollReveal();

  return (
    <>
      <section className="relative pt-32 pb-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className=" text-5xl md:text-6xl text-primary mb-4">{PRIVACY_POLICY.title}</h1>
          <p className="text-secondary text-sm">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
        </div>
      </section>

      <section ref={ref} className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {PRIVACY_POLICY.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h2 className=" text-2xl text-primary font-medium">{section.title}</h2>
                <p className="text-secondary leading-relaxed text-base">{section.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-12 border-t border-light-gold/15 dark:border-dark-gold/15">
            <p className="text-xs text-secondary leading-relaxed">
              This Privacy Policy describes how Thakker & Associates collects, uses, and protects your personal information. If you have any questions, please contact us at info@jtlaw.in.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
