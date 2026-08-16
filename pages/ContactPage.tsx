import React, { useState } from 'react';
import { Phone, ChatCircle as MessageCircle, EnvelopeSimple as Mail, MapPin, Clock, Calendar, CaretDown as ChevronDown, ArrowSquareOut as ExternalLink } from '@phosphor-icons/react';
import { DOCTOR_PROFILE, APPOINTMENT_SERVICES } from '@/constants';
import { Button, Input, Textarea, Reveal } from '@/components/ui';
import { StarRating } from '@/components/StarRating';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Wire to real form handler before launch
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero + Quick Contact — merged */}
      <section className="relative pt-36 md:pt-44 pb-16 bg-gradient-to-b from-primary-50/40 to-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — heading */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-secondary-900" />
                  <p className="text-xs font-bold text-secondary-900 uppercase tracking-widest">Get in Touch</p>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-secondary-900 leading-[1.1] mb-6">
                  Book Your <span className="italic text-primary-600">Consultation</span>
                </h1>
                <p className="text-lg text-stone-500 font-light leading-relaxed">
                  Taking the first step is straightforward. Reach out through any channel that's convenient for you.
                </p>
              </div>
            </Reveal>

            {/* Right — contact cards stacked */}
            <div className="space-y-3">
              {[
                { href: `tel:${DOCTOR_PROFILE.phone}`, icon: Phone, label: 'Call Us', value: DOCTOR_PROFILE.phone, external: false },
                { href: `https://wa.me/${DOCTOR_PROFILE.whatsapp}`, icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', external: true },
                { href: `mailto:${DOCTOR_PROFILE.email}`, icon: Mail, label: 'Email', value: DOCTOR_PROFILE.email, external: false },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl border border-stone-100 hover:border-primary-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors shrink-0">
                      <item.icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">{item.label}</p>
                      <p className="text-secondary-900 font-medium text-sm">{item.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map + Hours */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl font-heading text-secondary-900 mb-8">
                  Request an <span className="italic text-primary-600">Appointment</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cp-name" className="sr-only">Full Name</label>
                      <Input id="cp-name" required placeholder="Full Name" aria-label="Full Name" />
                    </div>
                    <div>
                      <label htmlFor="cp-phone" className="sr-only">Phone Number</label>
                      <Input id="cp-phone" required type="tel" placeholder="Phone Number" aria-label="Phone Number" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cp-email" className="sr-only">Email Address</label>
                      <Input id="cp-email" required type="email" placeholder="Email Address" aria-label="Email Address" />
                    </div>
                    <div className="relative">
                      <label htmlFor="cp-service" className="sr-only">Select Service</label>
                      <select
                        id="cp-service"
                        name="service"
                        defaultValue=""
                        aria-label="Select service type"
                        className="flex h-14 w-full rounded-none border-b border-secondary-900/20 bg-transparent px-1 sm:px-0 py-2 text-base text-stone-600 focus:outline-none focus:border-secondary-900 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Service</option>
                        {APPOINTMENT_SERVICES.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="cp-date" className="sr-only">Preferred Date</label>
                      <Input id="cp-date" required type="date" aria-label="Preferred date" className="uppercase text-stone-500" />
                      <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} aria-hidden="true" />
                    </div>
                    <div className="relative">
                      <label htmlFor="cp-time" className="sr-only">Preferred Time</label>
                      <Input id="cp-time" required type="time" aria-label="Preferred time" className="text-stone-500" />
                      <Clock className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cp-message" className="sr-only">Message</label>
                    <Textarea id="cp-message" placeholder="Describe your concern or the service you're interested in..." aria-label="Your message" />
                  </div>

                  {submitted && (
                    <div role="alert" className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                      Thank you! Your appointment request has been received. We will contact you shortly.
                    </div>
                  )}

                  <Button type="submit" size="lg">Send Request</Button>
                </form>
              </Reveal>
            </div>

            {/* Hours + Location — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hours Card */}
              <Reveal delay={0.1}>
                <div className="bg-sage-50 rounded-2xl border border-sage-200/60 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-5 flex items-center gap-2">
                    <Clock size={14} aria-hidden="true" /> Clinic Hours
                  </p>
                  <div className="space-y-3">
                    {DOCTOR_PROFILE.hours.map((h) => (
                      <div key={h} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" aria-hidden="true" />
                        <p className="text-stone-600 text-sm font-light">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Location Card */}
              <Reveal delay={0.2}>
                <div className="bg-sage-50 rounded-2xl border border-sage-200/60 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-5 flex items-center gap-2">
                    <MapPin size={14} aria-hidden="true" /> Location
                  </p>
                  <p className="text-secondary-900 font-medium mb-1">{DOCTOR_PROFILE.hospital}</p>
                  <p className="text-stone-500 text-sm font-light mb-4">{DOCTOR_PROFILE.location}</p>
                  <div className="flex items-center gap-1 mb-4">
                    <StarRating score={DOCTOR_PROFILE.googleRating.score} size={12} />
                    <span className="text-xs font-bold text-secondary-900 ml-1">
                      {DOCTOR_PROFILE.googleRating.score} ({DOCTOR_PROFILE.googleRating.count} Reviews)
                    </span>
                  </div>
                  <a
                    href={DOCTOR_PROFILE.mapViewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary-600 hover:text-primary-700 uppercase tracking-widest flex items-center gap-2"
                  >
                    Open in Google Maps <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>

              {/* Map */}
              <Reveal delay={0.3}>
                <div className="h-[250px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-stone-100">
                  <iframe
                    width="100%"
                    height="100%"
                    className="w-full h-full grayscale-[20%] border-0"
                    src={DOCTOR_PROFILE.mapLink}
                    title="Google Maps showing Suseela Hospital location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ContactPage.displayName = 'ContactPage';
