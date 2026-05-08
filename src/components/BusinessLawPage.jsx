import { useScrollReveal, useStaggerChildren } from '../hooks/useScrollReveal';
import { BUSINESS_LAW_SERVICES } from '../utils/constants';
import { IoCheckmark } from 'react-icons/io5';

export default function BusinessLawPage() {
  const ref = useScrollReveal();
  const servicesRef = useStaggerChildren();

  return (
    <section className="relative bg-light-bg dark:bg-dark-bg">
      {/* Breadcrumb */}
      <div className="bg-light-surface dark:bg-dark-surface border-b border-light-gold/15 dark:border-dark-gold/15">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-xs text-secondary uppercase tracking-wide">
            <a href="#" className="hover:text-accent transition-colors">Home</a> /
            <a href="#practice" className="hover:text-accent transition-colors ml-2">Practice Areas</a> /
            <span className="ml-2">Business Law</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <h1 className=" text-5xl md:text-6xl text-primary font-light mb-6">
          Business Law
        </h1>
        <p className="text-secondary text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
          Strategic legal counsel for businesses of all sizes, from formation to complex transactions and litigation. At Thakker & Associates, our business law attorneys provide comprehensive legal services to entrepreneurs, small businesses, and established companies.
        </p>
        <div className="h-1 w-16 bg-light-gold dark:bg-dark-gold rounded-full"></div>
      </div>

      {/* Expert Solutions Section */}
      <div className="bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <h2 className="section-label mb-6">OUR EXPERTISE</h2>
          <h3 className=" text-4xl md:text-5xl text-primary font-light mb-12">
            Expert Legal Solutions for Your Business
          </h3>

          <div className="space-y-8">
            <p className="text-secondary text-lg leading-relaxed">
              We understand the complex legal challenges businesses face in today's competitive marketplace and offer strategic guidance to help you navigate these challenges successfully.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              Our experienced team works closely with clients to understand their business goals and develop tailored legal strategies that protect their interests, minimize risk, and facilitate growth.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              With a focus on building long-term relationships, we serve as trusted advisors to our business clients, offering proactive counsel and practical solutions that add value to their operations and contribute to their success.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BUSINESS_LAW_SERVICES.map((service) => (
            <div key={service.id} className="group" data-stagger>
              <div className="mb-6">
                <h4 className=" text-2xl text-primary font-medium mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Topics List */}
              <ul className="space-y-2">
                {service.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <IoCheckmark className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-light-text dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <h2 className="section-label text-light-bg dark:text-light-gold mb-6">OUR METHOD</h2>
          <h3 className=" text-4xl md:text-5xl text-light-bg dark:text-dark-text font-light mb-12">
            Our Approach to Business Law
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl text-light-bg dark:text-dark-text font-medium mb-3">
                  Legal Expertise + Business Understanding
                </h4>
                <p className="text-light-bg/70 dark:text-dark-text-secondary leading-relaxed">
                  We combine deep legal knowledge with practical business insight to provide solutions that work in the real world.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-light-bg dark:text-dark-text font-medium mb-3">
                  Proactive Legal Counsel
                </h4>
                <p className="text-light-bg/70 dark:text-dark-text-secondary leading-relaxed">
                  We anticipate potential legal issues and address them before they become problems.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl text-light-bg dark:text-dark-text font-medium mb-3">
                  Long-term Relationships
                </h4>
                <p className="text-light-bg/70 dark:text-dark-text-secondary leading-relaxed">
                  We invest in understanding your business so we can provide relevant, timely advice as your company grows.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-light-bg dark:text-dark-text font-medium mb-3">
                  Tailored Strategies
                </h4>
                <p className="text-light-bg/70 dark:text-dark-text-secondary leading-relaxed">
                  From startups to enterprises, we develop customized legal strategies that align with your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          <h3 className=" text-4xl md:text-5xl text-primary font-light mb-6">
            Partner with Us for Your Business Legal Needs
          </h3>
          <p className="text-secondary text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Contact Thakker & Associates today to schedule a consultation with one of our experienced business law attorneys. Let us help you navigate the legal complexities of running a successful business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-gold">Schedule a Consultation</a>
            <a href="#contact" className="btn-ghost">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
