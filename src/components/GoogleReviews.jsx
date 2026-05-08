import { useEffect, useRef } from 'react';

export default function GoogleReviews({ isDark }) {
  const containerRef = useRef(null);

  // Trustindex IDs
  const LIGHT_THEME_ID = "74b220f71e275057ee76259925b";
  const DARK_THEME_ID = "894e4b171eef50669406f1c2faa";

  useEffect(() => {
    // Clear the container before loading a new script
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Determine which script to load
    const scriptId = isDark ? DARK_THEME_ID : LIGHT_THEME_ID;
    
    // Create the script element
    const script = document.createElement('script');
    script.src = `https://cdn.trustindex.io/loader.js?${scriptId}`;
    script.async = true;
    script.defer = true;
    
    // Append the script to the container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup: Remove the script and styles when component unmounts or theme changes
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      // Remove any Trustindex generated elements from the body if they exist
      const tiElements = document.querySelectorAll('.ti-widget, #ti-widget-container');
      tiElements.forEach(el => el.remove());
    };
  }, [isDark]);

  return (
    <section className="py-20 bg-light-bg dark:bg-dark-bg border-t border-light-gold/10 dark:border-dark-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-light-gold dark:text-dark-gold mb-4">
            CLIENT REVIEWS
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-primary">
            Trusted by Our Clients
          </h3>
        </div>
        
        {/* Trustindex Widget Placeholder */}
        <div 
          ref={containerRef} 
          className="min-h-[300px] flex items-center justify-center"
        >
          <div className="text-secondary text-sm animate-pulse">
            Loading real-time Google reviews...
          </div>
        </div>
      </div>
    </section>
  );
}
