import { useStaggerChildren } from '../hooks/useScrollReveal';
import { PROCESS_STEPS } from '../utils/constants';

export default function Process() {
  const ref = useStaggerChildren();

  return (
    <section id="process" className="relative py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12" data-stagger>
          <h2 className="section-label">PROCESS</h2>
          <h3 className=" text-4xl md:text-5xl mt-4 text-primary">Our Approach</h3>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-light-gold/50 via-light-gold/30 to-transparent dark:from-dark-gold/50 dark:via-dark-gold/30 dark:to-transparent"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="relative md:text-center group" data-stagger>
                {/* Step Number Circle */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-light-gold/20 dark:bg-dark-gold/20 border-2 border-light-gold/50 dark:border-dark-gold/50 flex items-center justify-center group-hover:border-light-gold dark:group-hover:border-dark-gold group-hover:bg-light-gold/30 dark:group-hover:bg-dark-gold/30 transition-all duration-300">
                    <span className=" text-3xl font-light text-light-gold dark:text-dark-gold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="md:px-4">
                  <h4 className=" text-xl text-primary font-medium mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="md:hidden my-6 flex justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-light-gold/50 to-transparent dark:from-dark-gold/50"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
