import React from 'react';
import { Buildings, Users, ShieldCheck, Medal } from '@phosphor-icons/react';
import { TRUST_SIGNALS } from '@/constants';
import { Reveal } from '@/components/ui';

// Map constants.tsx iconName strings → Phosphor components.
const trustIconMap: Record<string, React.ElementType> = {
  Building2: Buildings,
  Users,
  ShieldCheck,
  Award: Medal,
};

export const TrustStrip: React.FC = () => (
  <section className="bg-primary-50 border-y border-primary-100/60" aria-label="Trust indicators">
    <Reveal>
      <div className="container mx-auto px-6 md:px-12 py-6 md:py-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
          {TRUST_SIGNALS.map((signal, i) => {
            const Icon = trustIconMap[signal.iconName] || Medal;
            return (
              <React.Fragment key={signal.label}>
                <div className="flex items-center gap-3 px-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                    <Icon size={20} weight="light" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary-900 leading-tight">{signal.value}</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">{signal.label}</p>
                  </div>
                </div>
                {i < TRUST_SIGNALS.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-primary-400/30" aria-hidden="true" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </Reveal>
  </section>
);

TrustStrip.displayName = 'TrustStrip';
