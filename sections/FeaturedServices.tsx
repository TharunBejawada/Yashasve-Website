import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope, Microscope, Sparkle, Drop, Lightning, Syringe, Scan, ShieldCheck,
  Leaf, Flame, Flask, Sun, Waves, Circle, Pulse, Pill, WaveSine, Scissors,
  ArrowRight,
} from '@phosphor-icons/react';
import { SERVICES } from '@/constants';
import { SectionHeading, Button, Reveal } from '@/components/ui';

// Phosphor component map keyed by the iconName strings stored in constants.tsx.
// Names that differ between Lucide (original) and Phosphor are aliased here so
// existing data files continue to work without change.
const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Microscope, ShieldCheck, Leaf, Flame, Sun, Waves, Pill, Scissors, Syringe,
  Activity: WaveSine,
  Sparkles: Sparkle,
  Droplet: Drop,
  Zap: Lightning,
  ScanFace: Scan,
  FlaskConical: Flask,
  CircleDot: Circle,
  HeartPulse: Pulse,
};

// Curated list of featured service IDs for the homepage
const FEATURED_IDS = ['acne-scars', 'pigmentation', 'hair-loss', 'anti-aging', 'laser-hair', 'hydrafacial'];

export const FeaturedServices: React.FC = () => {
  const featured = FEATURED_IDS
    .map(id => SERVICES.find(s => s.id === id))
    .filter(Boolean) as typeof SERVICES;

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-stone-50 via-stone-50 to-primary-50/20" aria-labelledby="services-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="Specialised care across skin, hair, and aesthetics." id="services-heading">
          Our <span className="italic text-primary-600">Expertise</span>
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featured.map((service, index) => {
            const Icon = iconMap[service.iconName] || Sparkle;
            return (
              <Reveal key={service.id} delay={index * 0.08}>
                <Link
                  to={`/services/${service.id}`}
                  className="group bg-sage-50 p-7 sm:p-8 rounded-2xl border border-sage-200/50 hover:border-primary-200 hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors shrink-0">
                      <Icon size={26} weight="thin" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 border border-stone-200 rounded-full px-3 py-1">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-heading font-medium text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 flex-1 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-600 group-hover:text-primary-700 mt-auto">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-primary-500 transition-all duration-500" aria-hidden="true" />
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* View All CTA */}
        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <Link to="/" onClick={() => {
              // This triggers the mega menu conceptually — but we'll just scroll to draw attention
              // The actual navigation is via the mega menu in navbar
            }}>
              <Button variant="outline">
                View All {SERVICES.length} Treatments <ArrowRight size={16} className="ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

FeaturedServices.displayName = 'FeaturedServices';
