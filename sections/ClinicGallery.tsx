import React from 'react';
import { CLINIC_PHOTOS } from '@/constants';
import { SectionHeading, Reveal, cn } from '@/components/ui';

const spanClasses: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'col-span-1 md:col-span-2',
  square: '',
};

export const ClinicGallery: React.FC = () => (
  <section id="clinic" className="py-24 bg-gradient-to-b from-primary-50/20 via-stone-50 to-stone-50" aria-labelledby="clinic-heading">
    <div className="container mx-auto px-6 md:px-12">
      <SectionHeading subtitle="A glimpse inside our clinic at Suseela Hospital." id="clinic-heading">
        The <span className="italic text-primary-600">Clinic</span>
      </SectionHeading>

      {/* PLACEHOLDER: Replace all images with real clinic photos before launch */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-4">
        {CLINIC_PHOTOS.map((photo, i) => (
          <Reveal key={photo.caption} delay={i * 0.08}>
            <div
              className={cn(
                "relative rounded-2xl overflow-hidden group cursor-default h-full",
                spanClasses[photo.span]
              )}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 via-secondary-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-white font-heading text-lg font-medium">{photo.caption}</p>
                  <div className="w-8 h-px bg-primary-400 mt-2" />
                </div>
              </div>

              {/* Subtle border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-400/20 transition-colors duration-500 pointer-events-none" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

ClinicGallery.displayName = 'ClinicGallery';
