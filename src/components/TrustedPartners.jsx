import { useRef, useEffect, useState } from 'react';
import { TRUSTED_PARTNERS } from '../utils/constants';

export default function TrustedPartners() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-light-surface dark:bg-dark-surface border-y border-light-gold/15 dark:border-dark-gold/15">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-12">
          <h2 className="section-label justify-center mb-4">OUR PARTNERS</h2>
          <h3 className=" text-2xl md:text-3xl text-primary mb-3">
            Trusted Insurance Partners
          </h3>
          <p className="text-secondary max-w-2xl mx-auto">
            We collaborate with leading insurance providers to ensure comprehensive protection and support for our clients.
          </p>
        </div>

        {/* Partners Grid with Auto-scroll effect */}
        <div className="relative overflow-hidden">
          <div className={`grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            {TRUSTED_PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 rounded-lg border border-light-gold/20 dark:border-dark-gold/20 bg-light-bg dark:bg-dark-surface hover:border-light-gold/50 dark:hover:border-dark-gold/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                style={{
                  animation: isVisible ? `fadeUp 0.8s ease-out ${index * 80}ms forwards` : 'none',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <p className="text-xs md:text-sm font-medium text-center text-primary group-hover:text-accent transition-colors">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient fade effect on sides (desktop) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light-surface dark:from-dark-surface to-transparent pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light-surface dark:from-dark-surface to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
