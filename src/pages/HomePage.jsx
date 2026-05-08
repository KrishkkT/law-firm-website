import { Link } from 'react-router-dom';
import { useScrollReveal, useStaggerChildren } from '../hooks/useScrollReveal';
import { PRACTICE_AREAS, STATS, VALUES, REPRESENTED_COMPANIES } from '../utils/constants';
import { IoArrowForward, IoChevronBack, IoChevronForward, IoCheckmark } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import GoogleReviews from '../components/GoogleReviews';

function HeroSection() {
  const ref = useScrollReveal();
  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/grand-legal-hall.png"
          alt="Grand legal hall of Thakker & Associates law firm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center min-h-screen pt-24">
        {/* Main Heading */}
        <div className="mb-8 max-w-4xl" data-stagger>
          <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 text-white">
            Top Legal Services
            <br />
            in <em className="italic text-light-gold">Gujarat</em>
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed" data-stagger>
          Thakker & Associates provides exceptional legal representation with integrity, expertise, and a commitment to achieving the best possible outcomes for our clients.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 mb-16" data-stagger>
          <Link to="/contact">
            <button className="btn-gold flex items-center gap-2 group">
              Book a Consultation
              <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="/practice-areas">
            <button className="px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold transition-all hover:bg-white/10 tracking-wide">
              Explore Practice Areas
            </button>
          </Link>
        </div>

        {/* Bottom Stats */}
        <div className="mt-auto pb-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8" data-stagger>
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="font-serif text-3xl md:text-4xl text-light-gold font-light mb-1">{stat.number}</div>
              <p className="text-white/60 text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const ref = useStaggerChildren();
  return (
    <section className="relative py-20 md:py-32 bg-light-bg dark:bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative" data-stagger>
            <img
              src="/refined-legal-meeting.png"
              alt="Legal consultation"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-light-gold/30 dark:border-dark-gold/30 rounded-2xl"></div>
          </div>

          {/* Right - Content */}
          <div data-stagger>
            <div className="section-label mb-6">ABOUT US</div>
            <h2 className=" text-4xl md:text-5xl text-primary mb-6">
              A Legacy of Legal Excellence
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              Thakker & Associates is a premier law firm dedicated to providing exceptional legal services. With years of experience, we deliver personalized attention and strategic solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {VALUES.map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1 h-8 bg-light-gold dark:bg-dark-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-serif text-lg text-primary font-medium">{value.title}</h4>
                    <p className="text-secondary text-xs mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-light-gold dark:text-dark-gold font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all">
              Learn More <IoArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeAreasPreview() {
  const ref = useStaggerChildren();
  const featured = PRACTICE_AREAS.slice(0, 6);

  const areaImages = {
    'Personal Injury': '/car-accident-injury.png',
    'Family Law': '/family-law-in-session.png',
    'Business Law': '/images/business-law-meeting.png',
    'Estate Planning': '/family-estate-planning.png',
    'Criminal Defence': '/criminal-defense-hero.jpg',
    'Real Estate Law': '/collaborative-real-estate-strategy.png',
  };

  return (
    <section className="relative py-20 md:py-32 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div data-stagger>
            <h2 className="section-label mb-4">PRACTICE AREAS</h2>
            <h3 className=" text-4xl md:text-5xl text-primary">Our Legal Expertise</h3>
          </div>
          <Link to="/practice-areas" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-light-gold dark:text-dark-gold font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all" data-stagger>
            View All Areas <IoArrowForward />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((area) => (
            <Link
              key={area.id}
              to={`/practice-areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="practice-card group"
              data-stagger
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={areaImages[area.name] || '/classic-law-library.png'}
                  alt={area.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h4 className=" text-2xl text-primary font-medium mb-2 group-hover:text-light-gold dark:group-hover:text-dark-gold transition-colors">
                  {area.name}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {area.description}
                </p>
                <span className="text-light-gold dark:text-dark-gold text-xs font-semibold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <IoArrowForward className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsPreview() {
  const ref = useStaggerChildren();
  const features = [
    { title: 'Experienced Attorneys', description: 'Highly skilled attorneys with extensive experience in their respective practice areas.' },
    { title: 'Client-Centered Approach', description: 'Personalized attention to every case we handle with transparent communication.' },
    { title: 'Proven Results', description: 'Track record of success achieving favorable outcomes for our clients.' }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/grand-law-library.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12" data-stagger>
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-light-gold pl-4 border-l-2 border-light-gold mb-4">WHY CHOOSE US</h2>
          <h3 className=" text-4xl md:text-5xl text-white">
            Why Choose Thakker & Associates
          </h3>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border border-white/15 rounded-2xl backdrop-blur-sm bg-white/5 hover:border-light-gold/40 transition-all duration-300 group"
              data-stagger
            >
              <div className="flex items-start gap-4 mb-4">
                <IoCheckmark className="w-6 h-6 text-light-gold flex-shrink-0 mt-1" />
                <h4 className=" text-xl text-white font-medium group-hover:text-light-gold transition-colors">
                  {feature.title}
                </h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  const [current, setCurrent] = useState(0);
  const ref = useStaggerChildren();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12" data-stagger>
          <h2 className="section-label mb-4">TESTIMONIALS</h2>
          <h3 className=" text-4xl md:text-5xl text-primary">Client Stories</h3>
        </div>

        <div ref={ref} className="relative h-80 md:h-64 mb-12" data-stagger>
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
              <div className="bg-light-surface dark:bg-dark-surface p-8 md:p-12 rounded-2xl border border-light-gold/10 dark:border-dark-gold/10 h-full flex flex-col justify-between">
                <div className="font-serif text-5xl text-light-gold/30 dark:text-dark-gold/30 leading-none mb-2">"</div>
                <p className="font-serif text-xl md:text-2xl italic text-primary leading-relaxed flex-grow">
                  {testimonial.quote}
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-xs uppercase tracking-widest text-secondary">{testimonial.caseType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="p-3 rounded-full border-2 border-light-gold/30 dark:border-dark-gold/30 text-light-gold dark:text-dark-gold hover:border-light-gold dark:hover:border-dark-gold hover:bg-light-gold/10 dark:hover:bg-dark-gold/10 transition-all"
              aria-label="Previous testimonial"
            >
              <IoChevronBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="p-3 rounded-full border-2 border-light-gold/30 dark:border-dark-gold/30 text-light-gold dark:text-dark-gold hover:border-light-gold dark:hover:border-dark-gold hover:bg-light-gold/10 dark:hover:bg-dark-gold/10 transition-all"
              aria-label="Next testimonial"
            >
              <IoChevronForward className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${index === current
                  ? 'bg-light-gold dark:bg-dark-gold w-8'
                  : 'bg-light-gold/30 dark:bg-dark-gold/30 hover:bg-light-gold/60 dark:hover:bg-dark-gold/60 w-2.5'
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

function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/scales-of-justice-abstract.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className=" text-4xl md:text-6xl text-white mb-6">
          Ready to Discuss Your Legal Needs?
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Contact Thakker & Associates today for a confidential consultation with our experienced attorneys.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="btn-gold text-base">
              Schedule a Consultation
            </button>
          </Link>
          <a href={`tel:+91-278-XXXX-XXXX`}>
            <button className="px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold transition-all hover:bg-white/10 tracking-wide">
              Call Us Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

function CompaniesRepresented() {
  return (
    <section className="py-16 bg-light-bg dark:bg-dark-bg border-y border-light-gold/10 dark:border-dark-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-light-gold/60 dark:text-dark-gold/60 mb-2">PROFESSIONAL LEGAL REPRESENTATION</h2>
          <h3 className="text-2xl md:text-3xl text-primary font-medium">Companies We Represent</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {REPRESENTED_COMPANIES.map((company, index) => (
            <div key={index} className="group transition-all duration-300 hover:opacity-100">
              <img
                src={company.logo}
                alt={company.name}
                className="h-14 md:h-14 w-auto transition-all duration-300 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-serif text-sm text-primary font-medium text-center">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ isDark }) {
  return (
    <>
      <HeroSection />
      <CompaniesRepresented />
      <AboutPreview />
      <PracticeAreasPreview />
      <WhyChooseUsPreview />
      <GoogleReviews isDark={isDark} />
      <CTASection />
    </>
  );
}
