import { useStaggerChildren } from '../hooks/useScrollReveal';
import { VALUES } from '../utils/constants';

export default function About() {
  const ref = useStaggerChildren();

  return (
    <section id="about" className="relative py-20 md:py-32 bg-light-bg dark:bg-dark-bg overflow-hidden">
      {/* Background Number */}
      <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 text-light-gold/6 dark:text-dark-gold/4 font-serif text-9xl md:text-[400px] font-light pointer-events-none leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Left Column - Label & Pull Quote */}
          <div className="md:col-span-1" data-stagger>
            <div className="section-label mb-8">OUR STORY</div>
            <blockquote className="font-serif text-2xl md:text-3xl italic text-primary leading-relaxed">
              "Law is not just about precedent — it's about people."
            </blockquote>
          </div>

          {/* Right Column - Body Copy */}
          <div className="md:col-span-2" data-stagger>
            <div className="space-y-6">
              <p className="text-secondary text-lg leading-relaxed">
                Thakker & Associates is a premier law firm dedicated to providing exceptional legal services across various practice areas. With years of experience and a team of skilled attorneys, we are committed to delivering personalized attention and strategic solutions to meet our clients' legal needs.
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                Our firm was founded on the principles of integrity, excellence, and client satisfaction. We understand that legal matters can be complex and stressful, which is why we strive to make the process as smooth and transparent as possible for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Value Pillars */}
        <div className="mt-20 pt-16 border-t border-light-gold/15 dark:border-dark-gold/15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <div key={index} className="flex items-start gap-6 group" data-stagger>
                <div className="w-12 h-12 flex-shrink-0">
                  <div className="w-full h-0.5 bg-light-gold/50 dark:bg-dark-gold/50 group-hover:bg-light-gold dark:group-hover:bg-dark-gold transition-colors"></div>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-primary font-medium mb-2">{value.title}</h3>
                  <p className="text-secondary text-sm md:text-base">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
