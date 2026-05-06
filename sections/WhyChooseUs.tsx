import React from 'react';
import { WHY_US_CARDS } from '@/constants';
import { SectionHeading, Reveal, cn } from '@/components/ui';

const cardStyles: Record<string, string> = {
  featured: 'bg-primary-50 border-primary-200/60',
  dark: 'bg-secondary-900 text-white border-secondary-800',
  light: 'bg-sage-50 border-sage-200/60',
  accent: 'bg-white border-l-4 border-l-primary-500 border-t border-r border-b border-stone-200',
};

export const WhyChooseUs: React.FC = () => (
  <section id="why-us" className="py-24 bg-gradient-to-b from-white via-primary-50/20 to-white relative overflow-hidden" aria-labelledby="why-us-heading">
    <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <SectionHeading subtitle="What sets this practice apart." id="why-us-heading">
        Why <span className="italic text-primary-600">Choose Us</span>
      </SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8">
        {WHY_US_CARDS.map((card, i) => (
          <Reveal key={card.number} delay={i * 0.08}>
            <div
              className={cn(
                "p-6 sm:p-8 md:p-10 rounded-2xl hover:shadow-xl transition-all duration-500 group h-full flex flex-col relative overflow-hidden",
                cardStyles[card.variant]
              )}
            >
              {/* Large decorative number */}
              <span className={cn(
                "font-heading text-7xl md:text-8xl font-bold leading-none mb-6 block transition-transform duration-500 group-hover:translate-x-2",
                card.variant === 'dark' ? 'text-white/10' : 'text-primary-400/30'
              )}>
                {card.number}
              </span>

              <h3 className={cn(
                "text-xl md:text-2xl font-heading font-medium mb-4 leading-snug",
                card.variant === 'dark' ? 'text-white' : 'text-secondary-900'
              )}>
                {card.title}
              </h3>

              <p className={cn(
                "text-sm md:text-base font-light leading-relaxed",
                card.variant === 'dark' ? 'text-stone-300' : 'text-stone-500'
              )}>
                {card.description}
              </p>

              {/* Accent line on hover */}
              <div className={cn(
                "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500",
                card.variant === 'dark' ? 'bg-primary-400' : 'bg-secondary-900'
              )} aria-hidden="true" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

WhyChooseUs.displayName = 'WhyChooseUs';
