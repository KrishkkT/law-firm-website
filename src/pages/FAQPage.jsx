import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStaggerChildren } from '../hooks/useScrollReveal';
import { FAQS } from '../utils/constants';
import { IoChevronDown, IoArrowForward } from 'react-icons/io5';

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState(1);
  const ref = useStaggerChildren();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-light-gold dark:text-dark-gold pl-4 border-l-2 border-light-gold dark:border-dark-gold mb-6">FAQ</div>
          <h1 className=" text-5xl md:text-7xl text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">
            Find answers to common questions about our services, fees, and how we can help with your legal matters.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={ref} className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.id}
                className="group border border-light-gold/20 dark:border-dark-gold/20 rounded-xl overflow-hidden hover:border-light-gold/50 dark:hover:border-dark-gold/50 transition-all duration-300"
                data-stagger
              >
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-light-gold/5 dark:hover:bg-dark-gold/5 transition-colors duration-200"
                >
                  <h4 className=" text-lg md:text-xl text-primary text-left font-medium group-hover:text-light-gold dark:group-hover:text-dark-gold transition-colors pr-4">
                    {faq.question}
                  </h4>
                  <IoChevronDown
                    className={`w-5 h-5 text-light-gold dark:text-dark-gold flex-shrink-0 transition-transform duration-300 ${expandedId === faq.id ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandedId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-6 pb-5 border-t border-light-gold/10 dark:border-dark-gold/10 bg-light-surface/50 dark:bg-dark-surface/50 pt-4">
                    <p className="text-secondary leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-light-gold/10 dark:bg-dark-gold/10 border border-light-gold/20 dark:border-dark-gold/20 text-center">
            <h3 className=" text-2xl text-primary mb-3">Still Have Questions?</h3>
            <p className="text-secondary mb-6">
              Didn't find the answer you're looking for? Contact us directly.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn-gold group">
              Contact Us <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
