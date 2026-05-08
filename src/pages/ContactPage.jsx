import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FIRM_DATA, SOCIAL_LINKS } from '../utils/constants';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter, IoCallOutline, IoMailOutline, IoLocationOutline, IoLogoWhatsapp, IoTimeOutline } from 'react-icons/io5';

export default function ContactPage() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', caseType: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', caseType: '', message: '' });
    }, 3000);
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'LinkedIn': return IoLogoLinkedin;
      case 'Instagram': return IoLogoInstagram;
      case 'Twitter': return IoLogoTwitter;
      default: return null;
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/legal-consultation.png" alt="Contact Thakker & Associates for Legal Consultation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-light-gold pl-4 border-l-2 border-light-gold mb-6">CONTACT US</div>
          <h1 className=" text-5xl md:text-7xl text-white mb-4">
            Let's Talk
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            Schedule a consultation to discuss your legal needs. We are here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className=" text-3xl text-primary mb-6">Get in Touch</h2>
                <p className="text-secondary leading-relaxed">
                  We'd love to hear from you. Reach out to us through any of the following channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-gold/10 dark:border-dark-gold/10">
                  <IoLocationOutline className="w-6 h-6 text-light-gold dark:text-dark-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm">Office Location</h4>
                    <p className="text-secondary text-sm">{FIRM_DATA.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-gold/10 dark:border-dark-gold/10">
                  <IoMailOutline className="w-6 h-6 text-light-gold dark:text-dark-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm">Email</h4>
                    <a href={`mailto:${FIRM_DATA.email}`} className="text-secondary hover:text-light-gold dark:hover:text-dark-gold transition-colors text-sm">
                      {FIRM_DATA.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-gold/10 dark:border-dark-gold/10">
                  <IoTimeOutline className="w-6 h-6 text-light-gold dark:text-dark-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm">Office Hours</h4>
                    <p className="text-secondary text-sm">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                    <p className="text-secondary text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${FIRM_DATA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors font-semibold text-sm"
              >
                <IoLogoWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              {/* Social
              <div className="pt-6 border-t border-light-gold/15 dark:border-dark-gold/15">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-4 font-semibold">Follow Us</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = getSocialIcon(link.platform);
                    return Icon ? (
                      <a key={link.platform} href={link.url} className="w-10 h-10 rounded-full border-2 border-light-gold/30 dark:border-dark-gold/30 flex items-center justify-center text-light-gold dark:text-dark-gold hover:border-light-gold dark:hover:border-dark-gold hover:bg-light-gold/10 dark:hover:bg-dark-gold/10 transition-all" aria-label={link.platform}>
                        <Icon className="w-5 h-5" />
                      </a>
                    ) : null;
                  })}
                </div>
              </div> */}

              {/* Map */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border-2 border-light-gold/15 dark:border-dark-gold/15">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812805.993250937!2d69.34606691667076!3d21.054947591498355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bfb7076d807%3A0x3bab8e325b6dc65c!2sAdvocate%20Jaymin%20Thakker%20%26%20Associates!5e0!3m2!1sen!2sus!4v1778257281043!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Thakker & Associates Location"
                ></iframe>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <div className="bg-light-surface dark:bg-dark-surface rounded-2xl p-8 md:p-12 border border-light-gold/10 dark:border-dark-gold/10">
                <h3 className=" text-3xl text-primary mb-2">Send Us a Message</h3>
                <p className="text-secondary text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className=" text-2xl text-primary mb-2">Thank You!</h4>
                    <p className="text-secondary">We've received your message and will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] text-light-gold dark:text-dark-gold font-semibold mb-3">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full bg-light-bg dark:bg-dark-bg border border-light-gold/20 dark:border-dark-gold/20 text-primary rounded-lg px-4 py-3 focus:border-light-gold dark:focus:border-dark-gold outline-none transition-colors text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] text-light-gold dark:text-dark-gold font-semibold mb-3">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full bg-light-bg dark:bg-dark-bg border border-light-gold/20 dark:border-dark-gold/20 text-primary rounded-lg px-4 py-3 focus:border-light-gold dark:focus:border-dark-gold outline-none transition-colors text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] text-light-gold dark:text-dark-gold font-semibold mb-3">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                          className="w-full bg-light-bg dark:bg-dark-bg border border-light-gold/20 dark:border-dark-gold/20 text-primary rounded-lg px-4 py-3 focus:border-light-gold dark:focus:border-dark-gold outline-none transition-colors text-sm"
                          placeholder="+91-XXXXXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] text-light-gold dark:text-dark-gold font-semibold mb-3">Practice Area</label>
                        <select name="caseType" value={formData.caseType} onChange={handleChange} required
                          className="w-full bg-light-bg dark:bg-dark-bg border border-light-gold/20 dark:border-dark-gold/20 text-primary rounded-lg px-4 py-3 focus:border-light-gold dark:focus:border-dark-gold outline-none transition-colors text-sm"
                        >
                          <option value="">Select a practice area</option>
                          <option value="personal-injury">Personal Injury</option>
                          <option value="family-law">Family Law</option>
                          <option value="business-law">Business Law</option>
                          <option value="estate-planning">Estate Planning</option>
                          <option value="criminal-defence">Criminal Defence</option>
                          <option value="real-estate-law">Real Estate Law</option>
                          <option value="civil-litigation">Civil Litigation</option>
                          <option value="consumer-law">Consumer Law</option>
                          <option value="revenue-law">Revenue Law</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-light-gold dark:text-dark-gold font-semibold mb-3">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                        className="w-full bg-light-bg dark:bg-dark-bg border border-light-gold/20 dark:border-dark-gold/20 text-primary rounded-lg px-4 py-3 focus:border-light-gold dark:focus:border-dark-gold outline-none transition-colors resize-none text-sm"
                        placeholder="Tell us about your case..."
                      ></textarea>
                    </div>
                    <button type="submit" className="w-full btn-gold py-4 text-sm uppercase tracking-wider">
                      Request a Consultation
                    </button>
                    <p className="text-xs text-secondary text-center">
                      By submitting, you agree to our <a href="/privacy-policy" className="text-light-gold dark:text-dark-gold hover:underline">privacy policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
