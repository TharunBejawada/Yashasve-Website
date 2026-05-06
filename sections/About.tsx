import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { DOCTOR_PROFILE } from '@/constants';
import { Reveal } from '@/components/ui';

// "Meet the Doctor" teaser — the homepage's doctor introduction.
// Intentionally lean: one photo, one sentence, one link. Depth lives on /about.
export const About: React.FC = () => (
  <section
    id="about"
    className="py-20 md:py-24 bg-gradient-to-b from-primary-50/30 via-white to-white"
    aria-labelledby="about-heading"
  >
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
        {/* Photo */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                alt={DOCTOR_PROFILE.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
          </Reveal>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-secondary-900" />
              <p className="text-xs font-bold text-secondary-900 uppercase tracking-widest">The Doctor</p>
            </div>
            <h2
              id="about-heading"
              className="font-heading text-secondary-900 leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
            >
              {DOCTOR_PROFILE.name}
            </h2>
            <p className="text-stone-500 text-base md:text-lg font-light mb-1.5">
              {DOCTOR_PROFILE.title}
            </p>
            <p className="text-[11px] text-primary-600 font-bold uppercase tracking-widest">
              {DOCTOR_PROFILE.qualifications}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              A consultant dermatologist at{' '}
              <span className="text-secondary-900 font-medium">{DOCTOR_PROFILE.hospital}</span>,
              practising ethical, evidence-based skin and hair care with a measured, long-view approach.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-4 text-secondary-900 hover:text-primary-700 focus:outline-none focus:text-primary-700 transition-colors py-2"
            >
              <span className="font-heading text-lg md:text-xl relative">
                Meet {DOCTOR_PROFILE.name}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-current" aria-hidden="true" />
              </span>
              <span className="relative w-10 h-px bg-stone-300 hidden sm:block" aria-hidden="true">
                <span className="absolute inset-0 bg-primary-600 origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-700" />
              </span>
              <ArrowRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-2 group-focus:translate-x-2"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

About.displayName = 'About';
