import { Link } from 'react-router-dom';
import { FIRM_DATA, PRACTICE_AREAS, SOCIAL_LINKS } from '../utils/constants';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter, IoArrowUp } from 'react-icons/io5';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'LinkedIn': return IoLogoLinkedin;
      case 'Instagram': return IoLogoInstagram;
      case 'Twitter': return IoLogoTwitter;
      default: return null;
    }
  };

  const currentYear = new Date().getFullYear();

  const practiceLinks = PRACTICE_AREAS.slice(0, 6).map(area => ({
    label: area.name,
    to: `/practice-areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`
  }));

  return (
    <footer className="relative bg-light-text dark:bg-dark-bg border-t border-light-gold/30 dark:border-dark-gold/30">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Four Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-light-gold/20 dark:border-dark-gold/20">
          {/* Column 1 - Firm Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img src="/logo-transparent.png" alt="Thakker & Associates" className="h-12 w-auto" />
            </Link>
            <p className="text-light-bg/70 dark:text-dark-text-secondary text-sm leading-relaxed mb-6">
              Providing exceptional legal services with integrity, dedication, and expertise since {FIRM_DATA.founded}.
            </p>
            {/* Social Icons
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = getSocialIcon(link.platform);
                return Icon ? (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="w-9 h-9 rounded-full border border-light-gold/30 dark:border-dark-gold/30 flex items-center justify-center text-light-gold dark:text-dark-gold hover:border-light-gold dark:hover:border-dark-gold hover:bg-light-gold/10 dark:hover:bg-dark-gold/10 transition-all"
                    aria-label={link.platform}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null;
              })}
            </div> */}
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-light-gold dark:text-dark-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-light-bg/70 dark:text-dark-text-secondary hover:text-light-gold dark:hover:text-dark-gold text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-light-bg/70 dark:text-dark-text-secondary hover:text-light-gold dark:hover:text-dark-gold text-sm transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-light-bg/70 dark:text-dark-text-secondary hover:text-light-gold dark:hover:text-dark-gold text-sm transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-light-bg/70 dark:text-dark-text-secondary hover:text-light-gold dark:hover:text-dark-gold text-sm transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-bg/70 dark:text-dark-text-secondary hover:text-light-gold dark:hover:text-dark-gold text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Practice Areas */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-light-gold dark:text-dark-gold mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-light-bg/70 dark:text-dark-text-secondary hover:text-light-gold dark:hover:text-dark-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-light-gold dark:text-dark-gold mb-6">
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <p className="text-light-bg/70 dark:text-dark-text-secondary text-sm leading-relaxed">
                  {FIRM_DATA.address}
                </p>
              </li>
              <li>
                <a href={`tel:${FIRM_DATA.phone}`} className="text-light-bg/70 dark:text-dark-text-secondary hover:text-light-gold dark:hover:text-dark-gold text-sm transition-colors">
                  {FIRM_DATA.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${FIRM_DATA.email}`} className="text-light-bg/70 dark:text-dark-text-secondary hover:text-light-gold dark:hover:text-dark-gold text-sm transition-colors break-all">
                  {FIRM_DATA.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-light-bg/50 dark:text-dark-text-secondary/50 space-y-4 md:space-y-0">
          <p>© {currentYear} Thakker & Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-light-gold dark:bg-dark-gold text-white flex items-center justify-center shadow-lg shadow-light-gold/25 dark:shadow-dark-gold/25 transition-all duration-300 hover:scale-110 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        aria-label="Scroll to top"
      >
        <IoArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
