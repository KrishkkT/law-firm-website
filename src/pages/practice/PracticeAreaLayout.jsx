import { Link } from 'react-router-dom';
import { useScrollReveal, useStaggerChildren } from '../../hooks/useScrollReveal';
import { IoArrowForward, IoCheckmark } from 'react-icons/io5';

export default function PracticeAreaLayout({
  title,
  subtitle,
  heroImage,
  description,
  detailedContent,
  services,
  whyChooseUs,
  contentImage,
  ctaText,
}) {
  const heroRef = useScrollReveal();
  const servicesRef = useStaggerChildren();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
        </div>
        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <p className="text-white/60 text-xs uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">→</span>
              <Link to="/practice-areas" className="hover:text-white transition-colors">Practice Areas</Link>
              <span className="mx-2">→</span>
              <span className="text-white">{title}</span>
            </p>
          </nav>
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-light-gold pl-4 border-l-2 border-light-gold mb-6">
            {subtitle || 'PRACTICE AREA'}
          </div>
          <h1 className=" text-5xl md:text-7xl text-white mb-6">{title}</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">{description}</p>
          <div className="mt-8">
            <Link to="/contact">
              <button className="btn-gold flex items-center gap-2 group">
                Schedule a Consultation <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-label mb-6">OVERVIEW</h2>
              <h3 className="text-3xl md:text-4xl text-primary mb-8">
                {detailedContent?.title || `Expert ${title} Services`}
              </h3>
              <div className="space-y-6 text-secondary text-base leading-relaxed">
                {(detailedContent?.paragraphs || [description]).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            {contentImage && (
              <div className="relative">
                <img src={contentImage} alt={title} className="w-full h-[450px] object-cover rounded-2xl" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-label mb-4">OUR SERVICES</h2>
          <h3 className=" text-3xl md:text-4xl text-primary mb-12">
            How We Can Help
          </h3>
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-gold/10 dark:border-dark-gold/10 hover:border-light-gold/30 dark:hover:border-dark-gold/30 transition-all duration-300 group"
                data-stagger
              >
                <div className="w-10 h-10 rounded-full bg-light-gold/10 dark:bg-dark-gold/10 flex items-center justify-center mb-4">
                  <span className="text-light-gold dark:text-dark-gold font-serif text-lg font-medium">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="text-xl text-primary mb-3 group-hover:text-light-gold dark:group-hover:text-dark-gold transition-colors">
                  {service.title}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.items && (
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-secondary text-xs">
                        <IoCheckmark className="w-4 h-4 text-light-gold dark:text-dark-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {whyChooseUs && (
        <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="section-label mb-4">WHY CHOOSE US</h2>
            <h3 className=" text-3xl md:text-4xl text-primary mb-12">
              Our Approach to {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-1 h-full min-h-[60px] bg-light-gold/30 dark:bg-dark-gold/30 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif text-xl text-primary font-medium mb-2">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className=" text-3xl md:text-5xl text-white mb-6">
            {ctaText || `Need Help with ${title}?`}
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Contact Thakker & Associates today for a confidential consultation with our experienced {title.toLowerCase()} attorneys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-gold text-base">Schedule a Consultation</button>
            </Link>
            <Link to="/practice-areas">
              <button className="px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold transition-all hover:bg-white/10 tracking-wide">
                View All Practice Areas
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
