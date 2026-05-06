import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, Clock, Calendar, Repeat, Timer, Check, WarningCircle, CaretRight, Phone,
  Stethoscope, Microscope, Sparkle, Drop, Lightning, Syringe, Scan, ShieldCheck,
  Leaf, Flame, Flask, Sun, Waves, Circle, Pulse, Pill, WaveSine, Scissors,
  CalendarCheck, Shield,
} from '@phosphor-icons/react';
import { SERVICES, DOCTOR_PROFILE } from '@/constants';
import { Button, Reveal, AccordionItem } from '@/components/ui';

// Phosphor-name aliases for icons referenced in constants.tsx by their old Lucide names.
const AlertCircle = WarningCircle;
const ChevronRight = CaretRight;
const ShieldPlus = Shield;

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

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const service = SERVICES.find(s => s.id === id);

  // Show sticky CTA after scrolling past hero
  useEffect(() => {
    const handleScroll = () => setShowStickyCTA(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-32 px-6">
        <h1 className="text-3xl font-heading text-secondary-900 mb-4">Service Not Found</h1>
        <p className="text-stone-500 mb-8">The treatment you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  const Icon = iconMap[service.iconName] || Sparkle;
  const detail = service.detailedContent;
  const related = SERVICES.filter(s => s.category === service.category && s.id !== service.id).slice(0, 4);
  const goToContact = () => navigate('/', { state: { scrollTo: 'contact' } });

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-36 md:pt-44 pb-16 bg-gradient-to-b from-primary-50/40 via-primary-50/20 to-white overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[15rem] sm:text-[20rem] font-heading font-bold text-primary-400/[0.04] pointer-events-none select-none leading-none" aria-hidden="true">
          {service.title.charAt(0)}
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Breadcrumb */}
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs font-medium text-stone-500 flex-wrap">
                <li><Link to="/" className="hover:text-secondary-900 transition-colors">Home</Link></li>
                <li><ChevronRight size={12} aria-hidden="true" /></li>
                <li><Link to="/services" className="hover:text-secondary-900 transition-colors">Services</Link></li>
                <li><ChevronRight size={12} aria-hidden="true" /></li>
                <li className="text-primary-600 font-bold uppercase tracking-wider">{service.category}</li>
                <li><ChevronRight size={12} aria-hidden="true" /></li>
                <li className="text-secondary-900 font-bold" aria-current="page">{service.title}</li>
              </ol>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left — Title + CTA (3 cols) */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                    <Icon size={28} weight="thin" aria-hidden="true" />
                  </div>
                  <span className="px-4 py-1.5 bg-secondary-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                    {service.category}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-secondary-900 leading-[1.1] mb-6">
                  {service.title}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed mb-8 max-w-xl">
                  {service.fullDescription}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={goToContact}>Book This Treatment</Button>
                  <a href={`tel:${DOCTOR_PROFILE.phone}`}>
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone size={16} className="mr-2" aria-hidden="true" /> Call Us
                    </Button>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right — Quick Facts Glass Card (2 cols) */}
            {detail?.sessionInfo && (
              <div className="lg:col-span-2">
                <Reveal delay={0.2}>
                  <div className="bg-white rounded-2xl shadow-xl border border-stone-100 p-6 sm:p-8 lg:sticky lg:top-28">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-6">Quick Facts</p>
                    <div className="space-y-5">
                      {[
                        { icon: Clock, label: 'Duration', value: detail.sessionInfo.duration },
                        { icon: Calendar, label: 'Sessions', value: detail.sessionInfo.sessions },
                        { icon: Repeat, label: 'Frequency', value: detail.sessionInfo.frequency },
                        { icon: Timer, label: 'Results In', value: detail.sessionInfo.resultsIn },
                      ].map(({ icon: FactIcon, label, value }) => (
                        <div key={label} className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                            <FactIcon size={16} aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">{label}</p>
                            <p className="text-secondary-900 text-sm font-medium">{value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-stone-100 space-y-3">
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider font-bold mb-1">Downtime</p>
                        <p className="text-stone-600 text-sm font-light">{service.downtime}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider font-bold mb-1">Ideal For</p>
                        <p className="text-stone-600 text-sm font-light">{service.candidates}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== DETAILED CONTENT ===== */}
      {detail && (
        <>
          {/* Overview */}
          <section className="py-20 bg-gradient-to-b from-primary-50/20 to-white">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10 bg-primary-500" />
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">Overview</p>
                </div>
                <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
                  {detail.overview.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* How It Works — styled blockquote */}
          <section className="py-20 bg-gradient-to-b from-stone-50 to-primary-50/20">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10 bg-primary-500" />
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">How It Works</p>
                </div>
                <div className="bg-sage-50 rounded-2xl border border-sage-200/50 p-6 sm:p-8 md:p-10 relative">
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-primary-400 rounded-full" aria-hidden="true" />
                  <p className="text-stone-600 text-lg font-light leading-relaxed pl-6 md:pl-8">{detail.howItWorks}</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Benefits — icon cards grid */}
          <section className="py-20 bg-gradient-to-b from-white to-primary-50/20">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10 bg-primary-500" />
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">Benefits</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {detail.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 sm:p-5 bg-sage-50 rounded-xl border border-sage-200/50 hover:shadow-md transition-shadow">
                      <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-green-600" aria-hidden="true" />
                      </div>
                      <p className="text-stone-600 text-sm font-light leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Pre/Post Care */}
          {(detail.preCare.length > 0 || detail.postCare.length > 0) && (
            <section className="py-20 bg-gradient-to-b from-primary-50/20 via-stone-50 to-stone-50">
              <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <Reveal>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-10 bg-primary-500" />
                    <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">What to Expect</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {detail.preCare.length > 0 && (
                      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-100">
                        <p className="font-heading text-xl text-secondary-900 mb-6 flex items-center gap-2">
                          <CalendarCheck size={20} className="text-primary-600" aria-hidden="true" /> Before Treatment
                        </p>
                        <ul className="space-y-3">
                          {detail.preCare.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-stone-600 text-sm font-light">
                              <span className="w-5 h-5 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {detail.postCare.length > 0 && (
                      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-100">
                        <p className="font-heading text-xl text-secondary-900 mb-6 flex items-center gap-2">
                          <ShieldPlus size={20} className="text-primary-600" aria-hidden="true" /> After Treatment
                        </p>
                        <ul className="space-y-3">
                          {detail.postCare.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-stone-600 text-sm font-light">
                              <span className="w-5 h-5 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Reveal>
              </div>
            </section>
          )}

          {/* Side Effects */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
              <Reveal>
                <div className="bg-sage-50 border border-sage-200/60 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
                  <AlertCircle size={22} className="text-stone-400 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-secondary-900 mb-2">Important Information</p>
                    <p className="text-stone-500 font-light leading-relaxed">{detail.sideEffects}</p>
                    <p className="text-stone-400 text-sm mt-3 italic">Individual results may vary. A consultation is recommended before any procedure.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Service FAQs */}
          {detail.faqs.length > 0 && (
            <section className="py-20 bg-gradient-to-b from-stone-50 to-primary-50/20">
              <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                <Reveal>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-10 bg-primary-500" />
                    <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">Frequently Asked</p>
                  </div>
                  <div className="space-y-4">
                    {detail.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        title={faq.question}
                        isOpen={openFaqIndex === i}
                        onClick={() => setOpenFaqIndex(i === openFaqIndex ? null : i)}
                      >
                        <p className="text-lg">{faq.answer}</p>
                      </AccordionItem>
                    ))}
                  </div>
                </Reveal>
              </div>
            </section>
          )}
        </>
      )}

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-primary-50/20 to-white">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-10 bg-primary-500" />
                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">More in {service.category}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {related.map((s) => {
                  const SIcon = iconMap[s.iconName] || Sparkle;
                  return (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="group bg-white p-6 rounded-2xl border border-stone-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                        <SIcon size={24} weight="thin" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-base text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">{s.title}</h3>
                      <p className="text-stone-500 text-xs font-light line-clamp-2">{s.shortDescription}</p>
                    </Link>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-primary-100 to-stone-100 relative overflow-hidden">
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[15rem] font-heading font-bold text-primary-400/[0.05] pointer-events-none select-none" aria-hidden="true">Y</div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-secondary-900 mb-6">
              Ready to discuss <span className="italic text-primary-600">{service.title}</span>?
            </h2>
            <p className="text-stone-500 font-light mb-8 max-w-lg mx-auto">
              A consultation with {DOCTOR_PROFILE.name} will help determine the right approach for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={goToContact}>Book Consultation</Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/services')}>
                <ArrowLeft size={16} className="mr-2" aria-hidden="true" /> All Treatments
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sticky Mobile CTA — only on service pages */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-stone-200 px-4 pt-3 pb-4 md:hidden z-40 flex items-center gap-3 safe-area-pb">
          <Button onClick={goToContact} className="flex-1 text-xs py-3.5">
            Book {service.title}
          </Button>
          <a href={`tel:${DOCTOR_PROFILE.phone}`} className="shrink-0">
            <Button variant="outline" className="text-xs py-3.5 px-4">
              <Phone size={14} aria-hidden="true" />
            </Button>
          </a>
        </div>
      )}
    </>
  );
};

ServiceDetailPage.displayName = 'ServiceDetailPage';
