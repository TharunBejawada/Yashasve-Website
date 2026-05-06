import React from 'react';
import { ArrowRight, Plus } from '@phosphor-icons/react';
import { PROCESS_STEPS } from '@/constants';
import { Button, SectionHeading, Reveal } from '@/components/ui';
import type { ProcessStep } from '@/types';

interface ProcessProps {
  onSelectStep: (step: ProcessStep) => void;
  onBook: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onSelectStep, onBook }) => (
  <section id="process" className="py-24 bg-gradient-to-b from-primary-50/30 via-white to-white overflow-hidden" aria-labelledby="process-heading">
    <div className="container mx-auto px-6 md:px-12">
      <SectionHeading subtitle="A transparent, science-backed approach. Click to explore details." id="process-heading">
        Your Journey
      </SectionHeading>

      <div className="relative mt-16">
        <div className="absolute top-8 left-0 w-full h-px border-t-2 border-dashed border-stone-200 hidden md:block -z-0" aria-hidden="true" />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <button
                onClick={() => onSelectStep(s)}
                className="bg-sage-50 p-6 rounded-lg border border-sage-200/50 shadow-sm relative z-10 hover:-translate-y-2 transition-all duration-300 group w-full text-left hover:shadow-xl hover:border-primary-200 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <div className="absolute top-3 right-3 text-stone-300 group-hover:text-primary-500 transition-colors" aria-hidden="true">
                  <Plus size={20} />
                </div>

                <div className="w-16 h-16 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-xl font-heading font-bold text-secondary-900 mb-6 mx-auto md:mx-0 group-hover:bg-secondary-900 group-hover:text-white transition-colors relative">
                  {s.step}
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-medium text-secondary-900 mb-3 text-center md:text-left">{s.title}</h3>
                <p className="text-stone-500 text-base font-light leading-relaxed text-center md:text-left mb-6">{s.desc}</p>

                <div className="mt-auto pt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-primary-600 group-hover:text-primary-800 transition-colors">
                  <span>Read Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary-500 transition-all duration-300 group-hover:w-full rounded-b-lg" aria-hidden="true" />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button onClick={onBook}>Start Your Journey</Button>
        </div>
      </div>
    </div>
  </section>
);

Process.displayName = 'Process';
