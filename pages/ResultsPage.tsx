import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WarningCircle as AlertCircle, Phone } from '@phosphor-icons/react';
import { GALLERY_ITEMS, RESULTS_FAQS, DOCTOR_PROFILE } from '@/constants';
import { Button, Reveal, BeforeAfterSlider, AccordionItem } from '@/components/ui';

export const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero — Dark dramatic */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-secondary-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-primary-400/10 pointer-events-none" aria-hidden="true" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-400 mb-4">Treatment Outcomes</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white mb-6">
              Clinical <span className="italic text-primary-400">Results</span>
            </h1>
            <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto mb-8">
              Evidence-based treatments deliver measurable improvement. Individual results may vary based on condition severity, skin type, and treatment adherence.
            </p>
          </Reveal>

          {/* Disclaimer */}
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-stone-400">
              <AlertCircle size={16} className="text-primary-400 shrink-0" aria-hidden="true" />
              <span>Illustrative images. Replace with real consented patient photos before launch.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {GALLERY_ITEMS.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div>
                  <BeforeAfterSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    label={item.label}
                  />
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-heading font-medium text-secondary-900">{item.label}</h3>
                      <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">{item.category}</p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-primary-50/20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary-500" />
              <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">Questions About Results</p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {RESULTS_FAQS.map((faq, index) => (
              <Reveal key={faq.id} delay={index * 0.08}>
                <AccordionItem
                  title={faq.question}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(index === openFaqIndex ? null : index)}
                >
                  <p className="text-lg">{faq.answer}</p>
                </AccordionItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-stone-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-secondary-900 mb-6">
              Want results like <span className="italic text-primary-600">these</span>?
            </h2>
            <p className="text-stone-500 font-light mb-8 max-w-lg mx-auto">
              Every treatment plan starts with understanding your unique skin. Book a consultation to discuss what's possible.
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

ResultsPage.displayName = 'ResultsPage';
