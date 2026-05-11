import { Link } from 'react-router-dom';
import { useScrollReveal, useStaggerChildren } from '../hooks/useScrollReveal';
import { VALUES, STATS, PROCESS_STEPS } from '../utils/constants';
import { IoArrowForward } from 'react-icons/io5';

import SEO from '../components/SEO';

export default function AboutPage() {
  const heroRef = useScrollReveal();
  const valuesRef = useStaggerChildren();
  const processRef = useStaggerChildren();

  return (
    <>
      <SEO 
        title="About Our Firm | 20+ Years of Legal Excellence"
        description="Learn about Thakker & Associates' history, values, and commitment to justice in Bhavnagar, Gujarat. Providing expert legal counsel since 2005."
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/classic-law-library.png" alt="Thakker & Associates Law Library" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-light-gold pl-4 border-l-2 border-light-gold mb-6">ABOUT US</div>
          <h1 className=" text-5xl md:text-7xl text-white mb-6">
            Our Story
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Two decades of legal excellence, built on integrity, precision, and an unwavering commitment to our clients.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/focused-legal-work.png"
                alt="Focused legal work"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-light-gold dark:bg-dark-gold text-white p-8 rounded-2xl">
                <div className="font-serif text-4xl font-light mb-1">20+</div>
                <p className="text-xs uppercase tracking-widest">Years of<br />Excellence</p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="section-label mb-6">OUR FOUNDATION</h2>
              <h3 className=" text-3xl md:text-4xl text-primary mb-6">
                Founded on Principles of Justice
              </h3>
              <div className="space-y-6 text-secondary text-base leading-relaxed">
                <p>
                  Thakker & Associates is a premier law firm dedicated to providing exceptional legal services across various practice areas. With years of experience and a team of skilled attorneys, we are committed to delivering personalized attention and strategic solutions to meet our clients' legal needs.
                </p>
                <p>
                  Our firm was founded on the principles of integrity, excellence, and client satisfaction. We understand that legal matters can be complex and stressful, which is why we strive to make the process as smooth and transparent as possible for our clients.
                </p>
                <p>
                  Based in Bhavnagar, Gujarat, we have successfully represented clients across the state and throughout India. Our deep understanding of both local and national legal frameworks allows us to craft strategies that are both effective and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-label justify-center mb-4 border-l-0 pl-0">OUR VALUES</h2>
            <h3 className=" text-4xl md:text-5xl text-primary">What We Stand For</h3>
          </div>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-2xl border border-light-gold/15 dark:border-dark-gold/15 hover:border-light-gold/40 dark:hover:border-dark-gold/40 transition-all duration-300 group" data-stagger>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-light-gold/10 dark:bg-dark-gold/10 flex items-center justify-center">
                  <span className="text-light-gold dark:text-dark-gold font-serif text-2xl font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className=" text-2xl text-primary font-medium mb-3 group-hover:text-light-gold dark:group-hover:text-dark-gold transition-colors">
                  {value.title}
                </h4>
                <p className="text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-light-text dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className=" text-5xl md:text-6xl text-light-gold dark:text-dark-gold font-light mb-2">
                  {stat.number}
                </div>
                <p className="text-light-bg/70 dark:text-dark-text-secondary text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="section-label mb-4">OUR PROCESS</h2>
            <h3 className=" text-4xl md:text-5xl text-primary">How We Work</h3>
          </div>

          <div ref={processRef} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="relative text-center group" data-stagger>
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-light-gold/15 dark:bg-dark-gold/15 border-2 border-light-gold/40 dark:border-dark-gold/40 flex items-center justify-center group-hover:border-light-gold dark:group-hover:border-dark-gold group-hover:bg-light-gold/25 dark:group-hover:bg-dark-gold/25 transition-all duration-300">
                      <span className=" text-2xl font-light text-light-gold dark:text-dark-gold">{step.number}</span>
                    </div>
                  </div>
                  <h4 className=" text-lg text-primary font-medium mb-2 group-hover:text-light-gold dark:group-hover:text-dark-gold transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-secondary text-xs leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className=" text-3xl md:text-5xl text-primary mb-6">Ready to Work Together?</h2>
          <p className="text-secondary text-lg mb-10 leading-relaxed">
            Schedule a consultation to discuss your legal needs with our experienced team.
          </p>
          <Link to="/contact">
            <button className="btn-gold text-base flex items-center gap-2 mx-auto group">
              Get in Touch <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
