import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenu, IoClose, IoMoon, IoSunny } from 'react-icons/io5';

export default function Navbar({ isDark, setIsDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Practice Areas', to: '/practice-areas' },
    { label: 'Team', to: '/team' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Determine text color based on scroll and theme
  // Initially (top): White
  // After scroll: Black (Light mode) or White (Dark mode)
  const getLinkColor = (linkTo) => {
    if (isActive(linkTo)) return 'text-light-gold dark:text-dark-gold';

    if (scrolled) {
      return isDark ? 'text-white hover:text-dark-gold' : 'text-gray-900 hover:text-light-gold';
    }
    return 'text-white/90 hover:text-white';
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
      ? 'bg-white/98 dark:bg-dark-bg/95 backdrop-blur-md border-b border-light-gold/15 dark:border-dark-gold/15 shadow-md py-3'
      : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo-transparent.png"
            alt="Thakker & Associates"
            className={`transition-all duration-500 ${scrolled ? 'h-10 md:h-11' : 'h-12 md:h-14'} w-auto ${scrolled && !isDark ? 'invert' : ''}`}
          />
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1 mx-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[11px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap ${getLinkColor(link.to)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section - CTA + Toggle */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2.5 rounded-full transition-all duration-300 border ${scrolled
              ? 'border-light-gold/20 dark:border-dark-gold/20 hover:bg-light-gold/5 dark:hover:bg-dark-gold/5'
              : 'border-white/20 hover:bg-white/10'
              }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <IoSunny className={`w-4 h-4 ${scrolled ? 'text-dark-gold' : 'text-white'}`} />
            ) : (
              <IoMoon className={`w-4 h-4 ${scrolled ? 'text-light-gold' : 'text-light-gold'}`} />
            )}
          </button>
          <Link to="/contact">
            <button className={`btn-gold text-[13px] px-6 py-2.5 shadow-none hover:shadow-lg transition-all ${!scrolled ? 'bg-gold text-gray-900 border-none' : ''}`}>
              Book Consultation
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-colors ${scrolled && !isDark ? 'text-gray-900' : 'text-white'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <IoSunny className="w-5 h-5" /> : <IoMoon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full transition-colors ${scrolled && !isDark ? 'text-gray-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IoClose className="w-7 h-7" /> : <IoMenu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-bg border-b border-light-gold/15 dark:border-dark-gold/15 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="flex flex-col items-center gap-5 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-serif text-xl transition-colors ${isActive(link.to)
                ? 'text-light-gold dark:text-dark-gold'
                : 'text-gray-900 dark:text-white hover:text-light-gold dark:hover:text-dark-gold'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="w-full mt-4">
            <button className="btn-gold w-full text-sm">Book Consultation</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
