import { Link } from 'react-router-dom';
import { useStaggerChildren } from '../hooks/useScrollReveal';
import { PRACTICE_AREAS } from '../utils/constants';
import { IoArrowForward } from 'react-icons/io5';
import SEO from '../components/SEO';

const AREA_IMAGES = {
  'Personal Injury': '/car-accident-injury.png',
  'Family Law': '/family-law-in-session.png',
  'Business Law': '/images/business-law-meeting.png',
  'Estate Planning': '/family-estate-planning.png',
  'Criminal Defence': '/criminal-defense-hero.jpg',
  'Real Estate Law': '/collaborative-real-estate-strategy.png',
  'Civil Litigation': '/civil-law-hero.jpg',
  'Consumer Law': '/consumer-law-hero.jpg',
  'Revenue Law': '/revenue-law-hero.jpg',
};

export default function PracticeAreasPage() {
  const ref = useStaggerChildren();

  return (
    <>
      <SEO 
        title="Our Practice Areas | Specialized Legal Expertise"
        description="Explore Thakker & Associates' legal expertise across 9 major practice areas including business law, family law, personal injury, and criminal defense in Gujarat."
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/courtroom-professionals.png" alt="Thakker & Associates Practice Areas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-light-gold pl-4 border-l-2 border-light-gold mb-6">PRACTICE AREAS</div>
          <h1 className=" text-5xl md:text-7xl text-white mb-6">
            Our Legal Expertise
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Comprehensive legal representation across 9 practice areas, each with dedicated specialists who bring deep expertise and proven results.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => (
              <Link
                key={area.id}
                to={`/practice-areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="practice-card group"
                data-stagger
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={AREA_IMAGES[area.name] || '/classic-law-library.png'}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-bold tracking-[0.15em] uppercase text-light-gold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {area.services.length} Services
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className=" text-2xl font-semibold text-primary font-medium mb-3 group-hover:text-light-gold dark:group-hover:text-dark-gold transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.services.map((service, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-light-gold/10 dark:bg-dark-gold/10 text-light-black dark:text-dark-gold">
                        {service}
                      </span>
                    ))}
                  </div>
                  <span className="text-light-gold dark:text-dark-gold text-xs font-semibold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <IoArrowForward className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className=" text-3xl md:text-5xl text-primary mb-6">Not Sure Which Area Applies?</h2>
          <p className="text-secondary text-lg mb-10 leading-relaxed">
            Schedule a free initial consultation and our team will help identify the right legal strategy for your situation.
          </p>
          <Link to="/contact">
            <button className="btn-gold text-base flex items-center gap-2 mx-auto group">
              Book a Consultation <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
