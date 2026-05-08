import { useState, useEffect } from 'react';
import { useStaggerChildren } from '../hooks/useScrollReveal';
import { TESTIMONIALS } from '../utils/constants';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useStaggerChildren();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12" data-stagger>
          <h2 className="section-label">TESTIMONIALS</h2>
          <h3 className=" text-4xl md:text-5xl mt-4 text-primary">Client Stories</h3>
        </div>

        {/* Testimonial Stack */}
        <div ref={ref} className="relative h-96 md:h-80 mb-12" data-stagger>
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-all duration-500 ease-out transform ${index === current
                  ? 'opacity-100 scale-100 translate-x-0'
                  : index < current
                    ? 'opacity-0 scale-95 -translate-x-12'
                    : 'opacity-0 scale-95 translate-x-12'
                }`}
            >
              <div className="bg-light-bg dark:bg-dark-surface p-8 md:p-12 rounded-lg shadow-xl border border-light-gold/10 dark:border-dark-gold/10 h-full flex flex-col justify-between">
                {/* Quotation Mark */}
                <div className="font-serif text-6xl md:text-8xl text-light-gold/40 dark:text-dark-gold/40 leading-none mb-4">
                  "
                </div>

                {/* Quote Text */}
                <p className="font-serif text-xl md:text-2xl italic text-primary leading-relaxed mb-8 flex-grow">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div>
                  <p className="font-medium text-primary">{testimonial.author}</p>
                  <p className="text-xs uppercase tracking-widest text-secondary">
                    {testimonial.caseType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between" data-stagger>
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border-2 border-light-gold/30 dark:border-dark-gold/30 text-light-gold dark:text-dark-gold hover:border-light-gold dark:hover:border-dark-gold hover:bg-light-gold/10 dark:hover:bg-dark-gold/10 transition-all"
              aria-label="Previous testimonial"
            >
              <IoChevronBack className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full border-2 border-light-gold/30 dark:border-dark-gold/30 text-light-gold dark:text-dark-gold hover:border-light-gold dark:hover:border-dark-gold hover:bg-light-gold/10 dark:hover:bg-dark-gold/10 transition-all"
              aria-label="Next testimonial"
            >
              <IoChevronForward className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === current
                    ? 'bg-light-gold dark:bg-dark-gold w-8'
                    : 'bg-light-gold/30 dark:bg-dark-gold/30 hover:bg-light-gold/60 dark:hover:bg-dark-gold/60'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
