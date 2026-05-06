import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Medal as Award, Phone } from '@phosphor-icons/react';
import { DOCTOR_PROFILE } from '@/constants';
import { Button, Reveal } from '@/components/ui';
import { Process } from '@/sections/Process';
import { ClinicGallery } from '@/sections/ClinicGallery';
import { ProcessStepModal } from '@/components/ProcessStepModal';
import type { ProcessStep } from '@/types';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedStep, setSelectedStep] = React.useState<ProcessStep | null>(null);

  React.useEffect(() => {
    if (selectedStep) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedStep]);

  const goToContact = useCallback(() => {
    navigate('/', { state: { scrollTo: 'contact' } });
  }, [navigate]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-gradient-to-b from-primary-50/40 via-primary-50/20 to-white overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 text-[18rem] sm:text-[25rem] md:text-[35rem] font-heading font-bold text-primary-400/[0.04] pointer-events-none select-none" aria-hidden="true">
          Y
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-secondary-900" />
                  <p className="text-xs font-bold text-secondary-900 uppercase tracking-widest">About the Doctor</p>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-secondary-900 leading-[1.05] mb-6">
                  Meet{' '}
                  <span className="italic text-primary-600">{DOCTOR_PROFILE.name}</span>
                </h1>
                <p className="text-lg md:text-xl text-stone-500 font-light mb-2">
                  {DOCTOR_PROFILE.title}
                </p>
                <p className="text-sm text-primary-600 font-bold uppercase tracking-widest">
                  {DOCTOR_PROFILE.qualifications}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative max-w-md mx-auto">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  {/* PLACEHOLDER: Replace with real doctor photo */}
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                    alt={DOCTOR_PROFILE.name}
                    className="w-full h-full object-cover"
                    width={800}
                    height={1000}
                  />
                </div>

                {/* Pull Quote — overlapping the image */}
                <div className="relative -mt-10 mx-4 sm:mx-6 lg:-mt-14 lg:ml-8 lg:-mr-6 bg-secondary-900 text-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl z-10">
                  <div className="text-4xl sm:text-5xl font-heading text-primary-400/40 leading-none mb-1" aria-hidden="true">&ldquo;</div>
                  <p className="font-heading italic text-base sm:text-lg md:text-xl text-stone-100 leading-relaxed -mt-3">
                    My mission is to provide skin care that is as safe as it is effective, grounded in science and delivered with empathy.
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-8 h-px bg-primary-400" />
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400">{DOCTOR_PROFILE.name}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story + Education */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Bio — wider column */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-primary-500" />
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">Our Philosophy</p>
                </div>
                <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
                  <p>{DOCTOR_PROFILE.bio}</p>
                  <p>{DOCTOR_PROFILE.philosophy}</p>
                </div>
              </Reveal>
            </div>

            {/* Education + Memberships — narrower column */}
            <div className="lg:col-span-2">
              <Reveal delay={0.1}>
                <div className="bg-sage-50 rounded-2xl border border-sage-200/60 p-6 sm:p-8 mb-6">
                  <p className="font-bold text-secondary-900 mb-5 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <GraduationCap size={18} className="text-primary-600" aria-hidden="true" /> Education
                  </p>
                  <ul className="space-y-4">
                    {DOCTOR_PROFILE.education.map((entry) => (
                      <li key={entry.year} className="flex gap-4 items-start">
                        <span className="font-heading font-bold text-lg text-primary-600 w-14 shrink-0">{entry.year}</span>
                        <span className="text-stone-600 font-light text-sm leading-relaxed">{entry.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-sage-50 rounded-2xl border border-sage-200/60 p-6 sm:p-8">
                  <p className="font-bold text-secondary-900 mb-5 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Award size={18} className="text-primary-600" aria-hidden="true" /> Memberships & Awards
                  </p>
                  <ul className="space-y-3">
                    {DOCTOR_PROFILE.memberships.map((item) => (
                      <li key={item} className="text-stone-600 font-light text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process — reused section */}
      <Process onSelectStep={setSelectedStep} onBook={goToContact} />

      {/* Clinic Gallery — reused section */}
      <ClinicGallery />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-stone-100 relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[12rem] sm:text-[18rem] lg:text-[28rem] font-heading font-bold text-primary-400/[0.05] pointer-events-none select-none" aria-hidden="true">Y</div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-secondary-900 mb-6">
              Ready to discuss your <span className="italic text-primary-600">skin health</span>?
            </h2>
            <p className="text-stone-500 font-light mb-8 max-w-lg mx-auto">
              A consultation with {DOCTOR_PROFILE.name} is the first step toward understanding your skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={goToContact}>Book Consultation</Button>
              <a href={`tel:${DOCTOR_PROFILE.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone size={16} className="mr-2" aria-hidden="true" /> Call Us
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Step Modal */}
      {selectedStep && (
        <ProcessStepModal
          step={selectedStep}
          onClose={() => setSelectedStep(null)}
          onBook={() => { setSelectedStep(null); goToContact(); }}
        />
      )}
    </>
  );
};

AboutPage.displayName = 'AboutPage';
