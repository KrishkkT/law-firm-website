import { useState } from 'react';
import { useStaggerChildren } from '../hooks/useScrollReveal';
import { PRACTICE_AREAS } from '../utils/constants';
import { IoChevronDown } from 'react-icons/io5';

export default function PracticeAreas() {
  const [expandedId, setExpandedId] = useState(1);
  const ref = useStaggerChildren();

  return (
    <section id="practice" className="relative py-20 md:py-32 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12" data-stagger>
          <h2 className="section-label">PRACTICE AREAS</h2>
          <h3 className=" text-4xl md:text-5xl mt-4 text-primary">Our Legal Expertise</h3>
        </div>

        {/* Tab/Accordion Container */}
        <div ref={ref} className="space-y-3">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="group border-b border-light-gold/20 dark:border-dark-gold/20 transition-all duration-300"
              data-stagger
            >
              <button
                onClick={() => setExpandedId(expandedId === area.id ? null : area.id)}
                className="w-full py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:pl-4 transition-all duration-200"
              >
                {/* Left Side - Title */}
                <div className="text-left md:flex-1">
                  <h4 className=" text-2xl md:text-3xl text-primary font-medium group-hover:text-accent transition-colors">
                    {area.name}
                  </h4>
                </div>

                {/* Middle - Description (Desktop) */}
                <p className="hidden md:block text-secondary text-sm md:flex-1 text-center">
                  {area.description.substring(0, 60)}...
                </p>

                {/* Right Side - Chevron */}
                <IoChevronDown
                  className={`w-6 h-6 text-accent transition-transform duration-300 md:flex-shrink-0 ${expandedId === area.id ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedId === area.id && (
                <div className="pb-6 pl-0 md:pl-6 space-y-4 animate-fade-up">
                  <p className="text-secondary text-base leading-relaxed">{area.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest font-medium text-accent">Key Services</p>
                    <ul className="space-y-2">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="text-secondary text-sm flex items-start gap-3">
                          <span className="text-accent font-medium">→</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
