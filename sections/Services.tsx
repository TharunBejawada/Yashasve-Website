import React, { useState } from 'react';
import {
  Stethoscope, Microscope, Sparkle, Drop, Lightning, Syringe, Scan, ShieldCheck, ArrowRight,
} from '@phosphor-icons/react';
import { SERVICES } from '@/constants';
import { SectionHeading, Reveal, cn } from '@/components/ui';
import type { Service, ServiceFilter } from '@/types';
import { SERVICE_FILTERS } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Microscope, ShieldCheck, Syringe,
  Sparkles: Sparkle,
  Droplet: Drop,
  Zap: Lightning,
  ScanFace: Scan,
};

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<ServiceFilter>('All');

  const filtered = SERVICES.filter(s => activeTab === 'All' || s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-stone-50 via-stone-50 to-primary-50/20" aria-labelledby="services-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="Curated treatments for every skin concern." id="services-heading">
          Our Expertise
        </SectionHeading>

        {/* Filter Tabs */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16" role="tablist" aria-label="Filter services by category">
            {SERVICE_FILTERS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3 sm:px-4 md:px-6 py-3 min-h-[44px] text-xs font-bold uppercase tracking-widest transition-all rounded-full border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                  activeTab === tab
                    ? "bg-secondary-900 text-white border-secondary-900 shadow-xl"
                    : "bg-white text-stone-500 border-stone-200 hover:border-secondary-900 hover:text-secondary-900"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="tabpanel">
          {filtered.map((service, index) => {
            const Icon = iconMap[service.iconName] || Sparkle;
            return (
              <Reveal key={service.id} delay={index * 0.1}>
                <button
                  onClick={() => onSelectService(service)}
                  className="group bg-white p-8 hover:bg-secondary-900 hover:text-white transition-all duration-500 cursor-pointer h-full flex flex-col relative overflow-hidden shadow-sm hover:shadow-2xl border border-stone-100 hover:border-secondary-900 w-full text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-secondary-900 mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <Icon size={28} weight="thin" aria-hidden="true" />
                  </div>
                  <div className="z-10 relative">
                    <h3 className="text-lg font-heading font-medium mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-stone-500 text-base font-light leading-relaxed group-hover:text-stone-400 mb-8 line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-stone-100 group-hover:border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-secondary-900 group-hover:text-primary-400 z-10">
                    <span>View</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
