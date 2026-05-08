import { useStaggerChildren } from '../hooks/useScrollReveal';
import { STATS } from '../utils/constants';
import { IoCheckmark } from 'react-icons/io5';

export default function WhyChooseUs() {
  const ref = useStaggerChildren();

  const features = [
    {
      title: 'Experienced Attorneys',
      description: 'Our team consists of highly skilled attorneys with extensive experience in their respective practice areas.'
    },
    {
      title: 'Client-Centered Approach',
      description: 'We prioritize our clients\' needs and provide personalized attention to every case we handle.'
    },
    {
      title: 'Proven Results',
      description: 'We have a track record of success in achieving favorable outcomes for our clients across various legal matters.'
    }
  ];

  return (
    <section id="whyus" className="relative py-20 md:py-32 bg-light-text dark:bg-dark-bg overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-light-gold/5 to-transparent dark:from-dark-gold/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="mb-12" data-stagger>
          <h2 className="section-label text-light-bg dark:text-light-gold">WHY CHOOSE US</h2>
          <h3 className=" text-4xl md:text-5xl mt-4 text-light-bg dark:text-dark-text">
            Why Choose Thakker & Associates
          </h3>
          <p className="text-light-bg/80 dark:text-dark-text-secondary mt-4 max-w-2xl text-lg">
            We are committed to providing exceptional legal representation with integrity, expertise, and personalized attention.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center" data-stagger>
              <div className=" text-5xl md:text-6xl text-light-gold dark:text-dark-gold font-light mb-3">
                {stat.number}
              </div>
              <p className="text-light-bg/80 dark:text-dark-text-secondary text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border border-light-gold/30 dark:border-dark-gold/30 rounded-lg glass-blur hover:border-light-gold/60 dark:hover:border-dark-gold/60 transition-all duration-300 backdrop-blur-xl group"
              data-stagger
            >
              <div className="flex items-start gap-4 mb-4">
                <IoCheckmark className="w-6 h-6 text-light-gold dark:text-dark-gold flex-shrink-0 mt-1" />
                <h4 className=" text-xl text-light-bg dark:text-dark-text font-medium group-hover:text-light-gold dark:group-hover:text-dark-gold transition-colors">
                  {feature.title}
                </h4>
              </div>
              <p className="text-light-bg/70 dark:text-dark-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
