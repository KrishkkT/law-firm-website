import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FIRM_DATA, SOCIAL_LINKS } from '../utils/constants';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter, IoCallOutline, IoMailOutline, IoLocationOutline, IoLogoWhatsapp } from 'react-icons/io5';

export default function Contact() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', caseType: '', message: '' });
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'LinkedIn':
        return IoLogoLinkedin;
      case 'Instagram':
        return IoLogoInstagram;
      case 'Twitter':
        return IoLogoTwitter;
      default:
        return null;
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <h2 className="section-label">CONTACT</h2>
          <h3 className=" text-4xl md:text-5xl mt-4 text-primary">Let's Talk About Your Case</h3>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Left Column - Contact Info (40%) */}
          <div className="md:col-span-2 space-y-8">
            {/* Address */}
            <div className="group">
              <div className="flex items-start gap-4 mb-2">
                <IoLocationOutline className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-1">Office Location</h4>
                  <p className="text-secondary text-sm">{FIRM_DATA.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group">
              <div className="flex items-start gap-4 mb-2">
                <IoCallOutline className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-1">Phone</h4>
                  <a href="#contact" className="text-secondary hover:text-accent transition-colors text-sm">
                    {FIRM_DATA.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <div className="flex items-start gap-4 mb-2">
                <IoMailOutline className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-1">Email</h4>
                  <a href={`mailto:${FIRM_DATA.email}`} className="text-secondary hover:text-accent transition-colors text-sm">
                    {FIRM_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors font-medium text-sm mt-6"
            >
              <IoLogoWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Social Links */}
            <div className="pt-8 border-t border-light-gold/15 dark:border-dark-gold/15">
              <p className="text-xs uppercase tracking-widest text-secondary mb-4 font-medium">Follow Us</p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = getSocialIcon(link.platform);
                  return Icon ? (
                    <a
                      key={link.platform}
                      href={link.url}
                      className="w-10 h-10 rounded-full border-2 border-light-gold/30 dark:border-dark-gold/30 flex items-center justify-center text-light-gold dark:text-dark-gold hover:border-light-gold dark:hover:border-dark-gold hover:bg-light-gold/10 dark:hover:bg-dark-gold/10 transition-all"
                      aria-label={link.platform}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 w-full h-48 rounded-lg bg-light-surface dark:bg-dark-surface border-2 border-light-gold/15 dark:border-dark-gold/15 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8571384521346!2d72.1491!3d21.7645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c6b6b6b6b6d%3A0x0!2sKaveri%20Complex%20Bhavnagar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thakker & Associates Location"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Contact Form (60%) */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-accent font-medium mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-light-gold/50 dark:border-dark-gold/50 text-primary focus:border-light-gold dark:focus:border-dark-gold outline-none pb-2 transition-colors placeholder-light-text-secondary dark:placeholder-dark-text-secondary"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-accent font-medium mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-light-gold/50 dark:border-dark-gold/50 text-primary focus:border-light-gold dark:focus:border-dark-gold outline-none pb-2 transition-colors placeholder-light-text-secondary dark:placeholder-dark-text-secondary"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-accent font-medium mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-light-gold/50 dark:border-dark-gold/50 text-primary focus:border-light-gold dark:focus:border-dark-gold outline-none pb-2 transition-colors placeholder-light-text-secondary dark:placeholder-dark-text-secondary"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>

            {/* Case Type */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-accent font-medium mb-3">
                Practice Area
              </label>
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-light-gold/50 dark:border-dark-gold/50 text-primary focus:border-light-gold dark:focus:border-dark-gold outline-none pb-2 transition-colors"
              >
                <option value="">Select a practice area</option>
                <option value="personal-injury">Personal Injury</option>
                <option value="family-law">Family Law</option>
                <option value="business-law">Business Law</option>
                <option value="estate-planning">Estate Planning</option>
                <option value="criminal-defence">Criminal Defence</option>
                <option value="civil-litigation">Civil Litigation</option>
                <option value="consumer-law">Consumer Law</option>
                <option value="revenue-law">Revenue Law</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-accent font-medium mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-transparent border-b-2 border-light-gold/50 dark:border-dark-gold/50 text-primary focus:border-light-gold dark:focus:border-dark-gold outline-none pb-2 transition-colors placeholder-light-text-secondary dark:placeholder-dark-text-secondary resize-none"
                placeholder="Tell us about your case..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-gold mt-8 py-4 text-sm font-medium uppercase tracking-wide"
            >
              Request a Consultation
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-secondary text-center">
              By submitting, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
