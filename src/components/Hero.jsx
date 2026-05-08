import { useScrollReveal } from '../hooks/useScrollReveal';
import { IoArrowForward } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full bg-light-bg dark:bg-dark-bg overflow-hidden pt-24"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-light-gold dark:bg-dark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-light-gold dark:bg-dark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Abstract Legal Motif */}
      <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-5 dark:opacity-3 pointer-events-none" viewBox="0 0 800 800">
        <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="2" className="text-light-gold dark:text-dark-gold" />
        <circle cx="400" cy="400" r="250" fill="none" stroke="currentColor" strokeWidth="2" className="text-light-gold dark:text-dark-gold" opacity="0.6" />
        <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="2" className="text-light-gold dark:text-dark-gold" opacity="0.3" />
        <line x1="200" y1="400" x2="600" y2="400" stroke="currentColor" strokeWidth="1" className="text-light-gold dark:text-dark-gold" opacity="0.2" />
        <line x1="400" y1="200" x2="400" y2="600" stroke="currentColor" strokeWidth="1" className="text-light-gold dark:text-dark-gold" opacity="0.2" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center min-h-[calc(100vh-96px)]">
        {/* Top Label */}
        <div className="mb-8" data-stagger>
          <span className="section-label">ESTABLISHED · AHMEDABAD</span>
        </div>

        {/* Main Heading */}
        <div className="mb-8 max-w-4xl" data-stagger>
          <h1 className=" text-6xl md:text-8xl leading-tight mb-4">
            Top Legal Services
            <br />
            in <em className="italic">Gujarat</em>
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-secondary text-lg md:text-xl mb-12 max-w-2xl" data-stagger>
          Thakker & Associates provides exceptional legal representation with integrity, expertise, and a commitment to achieving the best possible outcomes for our clients in Bhavnagar and throughout Gujarat.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-6 mb-16" data-stagger>
          <ScrollLink to="contact" smooth duration={500}>
            <button className="btn-gold flex items-center gap-2 group">
              Book a Consultation
              <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollLink>
          <ScrollLink to="practice" smooth duration={500}>
            <button className="btn-ghost">Explore Practice Areas</button>
          </ScrollLink>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 pt-12 border-t border-light-gold/20 dark:border-dark-gold/20 flex justify-between items-center text-xs tracking-widest uppercase text-secondary" data-stagger>
          <span>FOUNDED 2005</span>
          <span className="text-accent">Excellence in Legal Service</span>
          <span>BHAVNAGAR BASED</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-light-gold dark:border-dark-gold rounded-full flex justify-center">
          <div className="w-1 h-2 bg-light-gold dark:bg-dark-gold rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
