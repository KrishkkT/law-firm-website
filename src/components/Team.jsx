import { useStaggerChildren } from '../hooks/useScrollReveal';
import { TEAM } from '../utils/constants';

export default function Team() {
  const ref = useStaggerChildren();

  return (
    <section id="team" className="relative py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      {/* Subtle Legal Paper Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-light-gold dark:bg-dark-gold"
            style={{ top: `${i * 5}%` }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="mb-12" data-stagger>
          <h2 className="section-label">OUR TEAM</h2>
          <h3 className=" text-4xl md:text-5xl mt-4 text-primary">Legal Experts</h3>
        </div>

        {/* Team Grid with Staggered Layout */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {TEAM.map((member, index) => {
            const getGridClass = () => {
              if (index === 0) return 'md:col-span-1 md:row-span-2';
              if (index === 1) return 'md:col-span-1 md:translate-y-12';
              return 'md:col-span-1 md:translate-y-24';
            };

            return (
              <div key={member.id} className={`group ${getGridClass()}`} data-stagger>
                {/* Profile Image - Blob Shape */}
                <div className="mb-6 relative h-64 md:h-80 overflow-hidden">
                  <div
                    className="w-full h-full rounded-full md:rounded-full bg-gradient-to-br from-light-gold/20 to-light-gold/10 dark:from-dark-gold/20 dark:to-dark-gold/10 flex items-center justify-center text-6xl md:text-8xl border-2 border-light-gold/20 dark:border-dark-gold/20 group-hover:border-light-gold dark:group-hover:border-dark-gold transition-all duration-300 group-hover:scale-105"
                    style={{
                      borderRadius: '60% 40% 55% 45% / 50% 60% 40% 55%',
                    }}
                  >
                    {member.image}
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center md:text-left">
                  <h4 className=" text-2xl md:text-3xl text-primary font-medium mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-accent mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-secondary text-sm mb-4">
                    {member.specialization}
                  </p>
                  <button className="text-accent text-sm font-medium uppercase tracking-wide hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100">
                    View Profile →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
