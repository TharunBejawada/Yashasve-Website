import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Stethoscope, Microscope, Sparkle, Drop, Lightning, Syringe, Scan, ShieldCheck,
  Leaf, Flame, Flask, Sun, Waves, Circle, Pulse, Pill, WaveSine, Scissors,
  ArrowRight, Phone,
} from '@phosphor-icons/react';
import { SERVICES, DOCTOR_PROFILE } from '@/constants';
import { Button, Reveal } from '@/components/ui';
import type { ServiceCategory } from '@/types';

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

const CATEGORIES: { name: ServiceCategory; description: string }[] = [
  { name: 'Skin', description: 'Treatments for acne, pigmentation, texture, and skin health' },
  { name: 'Hair', description: 'Solutions for hair thinning, scalp conditions, and restoration' },
  { name: 'Body', description: 'Aesthetic procedures for contouring, hair reduction, and rejuvenation' },
  { name: 'Wellness', description: 'Clinical dermatology, diagnostics, and wellness support' },
];

export const AllServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 bg-gradient-to-b from-primary-50/40 to-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-600 mb-4">Full Treatment Menu</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-secondary-900 mb-6">
              Our <span className="italic text-primary-600">Treatments</span>
            </h1>
            <p className="text-lg text-stone-500 font-light max-w-2xl mx-auto mb-10">
              {SERVICES.length} specialised treatments across skin, hair, body, and wellness — each tailored to your individual needs.
            </p>
          </Reveal>

          {/* Category Quick-Jump */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.name}
                  href={`#category-${cat.name.toLowerCase()}`}
                  className="px-5 py-2.5 bg-white border border-stone-200 rounded-full text-xs font-bold uppercase tracking-widest text-secondary-900 hover:border-primary-400 hover:text-primary-700 transition-all shadow-sm hover:shadow-md"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category Sections */}
      {CATEGORIES.map((category, catIdx) => {
        const services = SERVICES.filter(s => s.category === category.name);
        if (services.length === 0) return null;

        return (
          <section
            key={category.name}
            id={`category-${category.name.toLowerCase()}`}
            className={catIdx % 2 === 0
              ? "py-20 bg-gradient-to-b from-white to-primary-50/20"
              : "py-20 bg-gradient-to-b from-stone-50 to-primary-50/10"
            }
          >
            <div className="container mx-auto px-6 md:px-12">
              <Reveal>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-px w-8 bg-primary-500" />
                      <p className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em]">
                        {services.length} Treatment{services.length > 1 ? 's' : ''}
                      </p>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-secondary-900">
                      {category.name}
                    </h2>
                    <p className="text-stone-500 font-light mt-2">{category.description}</p>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {services.map((service, i) => {
                  const Icon = iconMap[service.iconName] || Sparkle;
                  return (
                    <Reveal key={service.id} delay={i * 0.06}>
                      <Link
                        to={`/services/${service.id}`}
                        className="group bg-sage-50 p-6 sm:p-7 rounded-2xl border border-sage-200/50 hover:border-primary-200 hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors shrink-0">
                            <Icon size={24} weight="thin" aria-hidden="true" />
                          </div>
                        </div>

                        <h3 className="text-lg font-heading font-medium text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-stone-500 text-sm font-light leading-relaxed mb-5 flex-1 line-clamp-2">
                          {service.shortDescription}
                        </p>

                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-600 mt-auto">
                          <span>View Details</span>
                          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </div>

                        <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-primary-500 transition-all duration-500" aria-hidden="true" />
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-stone-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-secondary-900 mb-6">
              Not sure which treatment is <span className="italic text-primary-600">right for you</span>?
            </h2>
            <p className="text-stone-500 font-light mb-8 max-w-lg mx-auto">
              A consultation with {DOCTOR_PROFILE.name} will help identify the best approach for your specific concern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}>
                Book Consultation
              </Button>
              <a href={`tel:${DOCTOR_PROFILE.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone size={16} className="mr-2" aria-hidden="true" /> Call Us
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

AllServicesPage.displayName = 'AllServicesPage';
