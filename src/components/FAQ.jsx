import { useState } from 'react';
import { useStaggerChildren } from '../hooks/useScrollReveal';
import { FAQS } from '../utils/constants';
import { IoChevronDown } from 'react-icons/io5';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(1);
  const ref = useStaggerChildren();

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12" data-stagger>
          <h2 className="section-label">COMMON QUESTIONS</h2>
          <h3 className=" text-4xl md:text-5xl mt-4 text-primary">Frequently Asked Questions</h3>
          <p className="text-secondary mt-4 max-w-2xl">
            Find answers to common questions about our services, fees, and how we can help you with your legal matters.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div ref={ref} className="space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="group border border-light-gold/20 dark:border-dark-gold/20 rounded-lg overflow-hidden hover:border-light-gold/50 dark:hover:border-dark-gold/50 transition-all duration-300"
              data-stagger
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-light-gold/5 dark:hover:bg-dark-gold/5 transition-colors duration-200"
              >
                <h4 className=" text-lg md:text-xl text-primary text-left font-medium group-hover:text-accent transition-colors">
                  {faq.question}
                </h4>
                <IoChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className="px-6 pb-5 border-t border-light-gold/10 dark:border-dark-gold/10 bg-light-surface/50 dark:bg-dark-surface/50">
                  <p className="text-secondary leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 rounded-lg bg-light-gold/10 dark:bg-dark-gold/10 border border-light-gold/20 dark:border-dark-gold/20 text-center" data-stagger>
          <p className="text-secondary mb-4">
            Didn't find the answer you're looking for?
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-accent hover:text-light-gold dark:hover:text-dark-gold font-medium transition-colors">
            Contact us directly →
          </a>
        </div>
      </div>
    </section>
  );
}
