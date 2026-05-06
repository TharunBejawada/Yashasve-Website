import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { CONDITIONS, SERVICES } from '@/constants';
import { Reveal, cn } from '@/components/ui';
import type { Service } from '@/types';

interface ConditionsProps {
  onSelectService: (service: Service) => void;
}

export const Conditions: React.FC<ConditionsProps> = ({ onSelectService }) => {
  const handleConditionClick = (serviceId: string) => {
    const service = SERVICES.find(s => s.id === serviceId);
    if (service) onSelectService(service);
  };

  return (
    <section id="conditions" className="py-24 bg-secondary-900 relative overflow-hidden" aria-labelledby="conditions-heading">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-primary-400/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l-2 border-b-2 border-primary-400/10 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 id="conditions-heading" className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white mb-6 leading-tight">
              Conditions We <span className="italic text-primary-400">Treat</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed">
              If you recognise any of these concerns, a consultation can help determine the right approach.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONDITIONS.map((condition, i) => (
            <Reveal key={condition.id} delay={i * 0.06}>
              <button
                onClick={() => handleConditionClick(condition.serviceId)}
                className={cn(
                  "group relative w-full text-left p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm",
                  "hover:bg-white/[0.08] hover:border-primary-400/30 transition-all duration-500",
                  "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-secondary-900",
                  "flex flex-col h-full min-h-[140px] md:min-h-[180px]",
                  condition.size === 'large' && 'lg:col-span-2 lg:min-h-[220px]',
                )}
              >
                {/* Condition number */}
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-400/60 mb-4 block">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="text-xl md:text-2xl font-heading font-medium text-white mb-3 group-hover:text-primary-400 transition-colors leading-snug">
                  {condition.name}
                </h3>

                <p className="text-stone-400 text-sm font-light leading-relaxed mb-6 flex-1">
                  {condition.description}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-400 mt-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore treatment</span>
                  <ArrowRight size={12} aria-hidden="true" />
                </div>

                {/* Corner glow on hover */}
                <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-primary-400/0 group-hover:bg-primary-400/5 rounded-full blur-2xl transition-all duration-500 pointer-events-none" aria-hidden="true" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

Conditions.displayName = 'Conditions';
