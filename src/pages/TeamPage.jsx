import { Link } from 'react-router-dom';
import { useStaggerChildren } from '../hooks/useScrollReveal';
import { TEAM } from '../utils/constants';
import { IoArrowForward } from 'react-icons/io5';

export default function TeamPage() {
  const ref = useStaggerChildren();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/legal-team-meeting.png" alt="Thakker & Associates Legal Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-light-gold pl-4 border-l-2 border-light-gold mb-6">OUR TEAM</div>
          <h1 className=" text-5xl md:text-7xl text-white mb-6">
            Meet Our Attorneys
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Experienced legal professionals dedicated to achieving the best outcomes for our clients.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Member */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative group">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-light-gold/15 dark:border-dark-gold/15 shadow-xl">
                  <img
                    src="/jaymin-thakker-portrait.jpeg"
                    alt="Jaymin Thakker - Founder & Senior Lawyer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-light-gold/30 dark:border-dark-gold/30 rounded-2xl -z-10"></div>
              </div>
              <div>
                <h2 className=" text-4xl md:text-5xl text-primary mb-4">Jaymin Thakker</h2>
                <p className="text-light-gold dark:text-dark-gold text-sm uppercase tracking-widest font-semibold mb-6">
                  Founder & Senior Lawyer
                </p>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    With over two decades of legal experience, Jaymin Thakker founded Thakker & Associates with a vision to provide exceptional legal services that combine technical expertise with genuine client care.
                  </p>
                  <p>
                    Specializing in corporate law, business transactions, and mergers & acquisitions, Jaymin has successfully represented numerous businesses and individuals across Gujarat and beyond.
                  </p>
                  <p>
                    His dedication to integrity, thorough preparation, and strategic thinking has earned him the trust of clients and peers alike.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members
          <div className="mb-12">
            <h2 className="section-label mb-4">OUR ATTORNEYS</h2>
            <h3 className=" text-3xl md:text-4xl text-primary">Legal Professionals</h3>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.filter(m => m.id !== 1).map((member) => (
              <div key={member.id} className="group rounded-2xl border border-light-gold/15 dark:border-dark-gold/15 overflow-hidden hover:border-light-gold/40 dark:hover:border-dark-gold/40 transition-all duration-300" data-stagger>
                <div className="h-72 bg-gradient-to-br from-light-gold/15 to-light-gold/5 dark:from-dark-gold/15 dark:to-dark-gold/5 flex items-center justify-center">
                  <span className="text-8xl">{member.image}</span>
                </div>
                <div className="p-6">
                  <h4 className=" text-2xl text-primary font-medium mb-1 group-hover:text-light-gold dark:group-hover:text-dark-gold transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-light-gold dark:text-dark-gold text-xs uppercase tracking-widest font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-secondary text-sm">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className=" text-3xl md:text-5xl text-primary mb-6">Work With Us</h2>
          <p className="text-secondary text-lg mb-10 leading-relaxed">
            Schedule a consultation to discuss your legal needs with our experienced attorneys.
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
