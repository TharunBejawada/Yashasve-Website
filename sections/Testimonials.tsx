import React from 'react';
import { TESTIMONIALS, DOCTOR_PROFILE, FEATURED_TESTIMONIAL_INDEX } from '@/constants';
import { SectionHeading, Reveal } from '@/components/ui';
import { StarRating } from '@/components/StarRating';

const SCROLLING_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

export const Testimonials: React.FC = () => {
  const featured = TESTIMONIALS[FEATURED_TESTIMONIAL_INDEX];

  return (
    <section id="voices" className="py-24 bg-gradient-to-b from-white via-primary-50/20 to-primary-50/30 overflow-hidden" aria-labelledby="voices-heading">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <SectionHeading subtitle="Hear from patients who have experienced our care." id="voices-heading">
          Patient <span className="italic text-primary-600">Stories</span>
        </SectionHeading>

        {/* Featured Large Review */}
        {featured && (
          <Reveal>
            <div className="max-w-4xl mx-auto bg-sage-50 rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 border border-stone-100 relative mb-8">
              {/* Large quote mark */}
              <div className="text-7xl md:text-8xl font-heading text-primary-400/20 leading-none absolute top-6 left-8" aria-hidden="true">
                &ldquo;
              </div>

              <div className="relative z-10 pt-8 md:pt-4">
                <p className="font-heading text-xl md:text-2xl lg:text-3xl text-secondary-900 leading-relaxed italic mb-8">
                  {featured.text}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-900 flex items-center justify-center font-bold text-white text-lg uppercase" aria-hidden="true">
                      {featured.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-secondary-900">{featured.name}</p>
                      <p className="text-xs text-stone-500">{featured.treatment}</p>
                    </div>
                  </div>
                  <StarRating score={featured.rating} size={18} />
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Rating Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 bg-white shadow-lg border border-stone-100 rounded-full px-8 py-3">
            <div className="bg-white p-2 rounded-full shadow-sm" aria-hidden="true">
              <span className="font-bold text-lg text-secondary-900">G</span>
            </div>
            <div className="flex flex-col">
              <StarRating score={DOCTOR_PROFILE.googleRating.score} size={16} />
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mt-0.5">
                {DOCTOR_PROFILE.googleRating.score} Rating &middot; {DOCTOR_PROFILE.googleRating.count} reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Review Cards */}
      <div className="relative w-full overflow-hidden mask-linear-fade py-8">
        <div className="flex gap-3 sm:gap-4 md:gap-6 w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] will-change-transform pl-4 md:pl-6 lg:pl-12" style={{ animationDuration: '40s' }}>
          {SCROLLING_TESTIMONIALS.map((t, i) => (
            <div key={`${t.id}-${i}`} className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 bg-white p-6 h-full flex flex-col border border-stone-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 rounded-2xl relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-500 text-lg uppercase" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-secondary-900">{t.name}</p>
                    <p className="text-[10px] text-stone-500">{t.treatment}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <StarRating score={t.rating} size={14} />
                <span className="text-xs text-stone-500">{t.date || "1 month ago"}</span>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed line-clamp-4">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Testimonials.displayName = 'Testimonials';
