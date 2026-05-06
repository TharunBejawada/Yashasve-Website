import React, { useState } from 'react';
import { Calendar, Clock, CaretDown as ChevronDown, ChatCircle as MessageCircle, ArrowSquareOut as ExternalLink } from '@phosphor-icons/react';
import { DOCTOR_PROFILE, APPOINTMENT_SERVICES } from '@/constants';
import { Button, Input, Textarea, Reveal } from '@/components/ui';
import { StarRating } from '@/components/StarRating';

interface ContactProps {
  onNavigate: (id: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate: _onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Wire to a real form handler (EmailJS, Formspree, etc.) before launch
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary-50/30 via-stone-100/50 to-stone-100/50" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Map */}
          <Reveal className="h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 order-2 lg:order-1">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full grayscale-[20%] border-0"
              src={DOCTOR_PROFILE.mapLink}
              title="Google Maps showing Suseela Hospital location in RK Puram, Hyderabad"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin"
            />

            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-xs border border-stone-200">
              <p className="font-bold text-secondary-900 text-lg mb-1">{DOCTOR_PROFILE.hospital}</p>
              <p className="text-sm text-stone-500 mb-3">{DOCTOR_PROFILE.location}</p>
              <div className="flex items-center gap-1 mb-4">
                <StarRating score={DOCTOR_PROFILE.googleRating.score} size={14} />
                <span className="text-xs font-bold text-secondary-900 ml-2">
                  {DOCTOR_PROFILE.googleRating.score} ({DOCTOR_PROFILE.googleRating.count} Reviews)
                </span>
              </div>
              <a
                href={DOCTOR_PROFILE.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-primary-600 hover:text-primary-800 uppercase tracking-widest flex items-center gap-2"
              >
                View Larger Map <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Book An Appointment</span>
              </div>
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-heading text-secondary-900 mb-6 leading-tight">
                Reach out to <span className="text-primary-600 italic">us today.</span>
              </h2>
              <p className="text-stone-600 text-lg mb-10 font-light">
                Taking the first step is straightforward — choose a time that works for you.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Full Name</label>
                    <Input id="contact-name" required placeholder="Full Name" aria-label="Full Name" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
                    <Input id="contact-phone" required type="tel" placeholder="Phone Number" aria-label="Phone Number" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Email Address</label>
                    <Input id="contact-email" required type="email" placeholder="Email Address" aria-label="Email Address" />
                  </div>
                  <div className="relative">
                    <label htmlFor="contact-service" className="sr-only">Select Service</label>
                    <select
                      id="contact-service"
                      name="service"
                      defaultValue=""
                      aria-label="Select service type"
                      className="flex h-14 w-full rounded-none border-b border-secondary-900/20 bg-transparent px-0 py-2 text-base text-stone-600 focus:outline-none focus:border-secondary-900 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Service</option>
                      {APPOINTMENT_SERVICES.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} aria-hidden="true" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="contact-date" className="sr-only">Preferred Date</label>
                    <Input id="contact-date" required type="date" aria-label="Preferred date" className="uppercase text-stone-500" />
                    <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} aria-hidden="true" />
                  </div>
                  <div className="relative">
                    <label htmlFor="contact-time" className="sr-only">Preferred Time</label>
                    <Input id="contact-time" required type="time" aria-label="Preferred time" className="text-stone-500" />
                    <Clock className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">Message</label>
                  <Textarea id="contact-message" placeholder="Describe your concern or the service you're interested in..." aria-label="Your message" />
                </div>

                {submitted && (
                  <div role="alert" className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                    Thank you! Your appointment request has been received. We will contact you shortly.
                  </div>
                )}

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">Book Appointment</Button>
                  <a href={`https://wa.me/${DOCTOR_PROFILE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button type="button" variant="secondary" size="lg" className="w-full flex items-center gap-2 bg-secondary-900 text-white hover:bg-secondary-800">
                      <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.displayName = 'Contact';
