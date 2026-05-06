import React from 'react';
import { Phone } from '@phosphor-icons/react';
import { DOCTOR_PROFILE } from '@/constants';
import { Button, Reveal } from '@/components/ui';

interface CTABannerProps {
  onBook: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onBook }) => (
  <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-stone-100" aria-label="Book a consultation">
    {/* Decorative watermark */}
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[12rem] sm:text-[18rem] lg:text-[28rem] font-heading font-bold text-primary-400/[0.07] pointer-events-none select-none leading-none" aria-hidden="true">
      Y
    </div>

    {/* Subtle top copper line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" aria-hidden="true" />

    <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-600 mb-6">
          Ready to begin?
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-heading font-normal text-secondary-900 mb-8 leading-tight max-w-4xl mx-auto">
          Your Skin Deserves{' '}
          <span className="italic text-primary-600 block md:inline">Expert Attention.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-lg md:text-xl text-stone-500 font-light mb-12 max-w-2xl mx-auto">
          A consultation is the first step toward understanding your skin and building a plan that works for your life.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button size="lg" onClick={onBook} className="shadow-2xl shadow-secondary-900/20">
            Book Consultation
          </Button>

          <a
            href={`tel:${DOCTOR_PROFILE.phone}`}
            className="flex items-center gap-3 text-secondary-900 hover:text-primary-600 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full border-2 border-secondary-900/20 flex items-center justify-center group-hover:border-primary-500 group-hover:bg-primary-50 transition-all">
              <Phone size={18} aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Or call directly</p>
              <p className="text-lg font-heading font-medium">{DOCTOR_PROFILE.phone}</p>
            </div>
          </a>
        </div>
      </Reveal>
    </div>

    {/* Bottom copper line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" aria-hidden="true" />
  </section>
);

CTABanner.displayName = 'CTABanner';
